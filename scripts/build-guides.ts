/**
 * Renders the paid PDF guides from guides/<product-id>/<locale>.md into private/pdfs/.
 *
 *   npm run build:guides                      all guides, both languages
 *   npm run build:guides -- rome-3-days       one guide
 *   npm run build:guides -- --html            also write the intermediate HTML next to each PDF (for debugging)
 *
 * The file names come from src/data/products.ts and booking links from bookingLinks() in src/data/articles.ts,
 * so every partner link in a PDF carries our affiliate IDs. See guides/README.md for the source format.
 */
import { readFile, writeFile, mkdir } from "node:fs/promises";
import path from "node:path";
import { Marked, type Tokens } from "marked";
import puppeteer from "puppeteer";
import { articleBookingLinks, articles, bookingLinks } from "../src/data/articles";
import { products, type Product } from "../src/data/products";
import { SITE_NAME, locales, type Locale } from "../src/i18n/config";

const root = process.cwd();
const guidesDir = path.join(root, "guides");
const outDir = path.join(root, "private", "pdfs");

const ui: Record<Locale, Record<string, string>> = {
  en: {
    contents: "Contents",
    guide: "Travel guide",
    edition: "Edition",
    disclosure:
      "Some links in this guide are affiliate links: when you book through them we earn a commission, at no extra cost to you. It never decides what we recommend.",
    checked:
      "Prices, opening hours and rules were checked when this edition was written. They change: confirm on the official site before you go.",
    personal: "For the personal use of the buyer. Please do not share or resell this file.",
    book: "Book",
  },
  nl: {
    contents: "Inhoud",
    guide: "Reisgids",
    edition: "Editie",
    disclosure:
      "Sommige links in deze gids zijn affiliate-links: boek je via zo'n link, dan krijgen wij een commissie. Jij betaalt niets extra en het bepaalt nooit wat we aanraden.",
    checked:
      "Prijzen, openingstijden en regels zijn gecontroleerd toen deze editie werd geschreven. Ze veranderen: check de officiële site voordat je gaat.",
    personal: "Voor persoonlijk gebruik door de koper. Deel of verkoop dit bestand niet door.",
    book: "Boek",
  },
};

type FrontMatter = { title: string; subtitle: string; edition: string; kicker: string };

function parseFrontMatter(source: string): { meta: FrontMatter; body: string } {
  const match = /^---\n([\s\S]*?)\n---\n/.exec(source);
  if (!match) throw new Error("Missing front matter (--- title: ... ---)");
  const meta: Record<string, string> = {};
  for (const line of match[1].split("\n")) {
    const at = line.indexOf(":");
    if (at > 0) meta[line.slice(0, at).trim()] = line.slice(at + 1).trim();
  }
  for (const key of ["title", "subtitle", "edition", "kicker"]) {
    if (!meta[key]) throw new Error(`Front matter is missing "${key}"`);
  }
  return { meta: meta as FrontMatter, body: source.slice(match[0].length) };
}

function escapeHtml(text: string): string {
  return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function slugify(text: string): string {
  return text
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

/** Splits a "Day 1 | Ancient Rome" heading into an eyebrow and a title. */
function splitHeading(text: string): { eyebrow?: string; title: string } {
  const [first, ...rest] = text.split(" | ");
  return rest.length ? { eyebrow: first.trim(), title: rest.join(" | ").trim() } : { title: text.trim() };
}

function createMarkdown(locale: Locale) {
  const marked = new Marked({ gfm: true });
  marked.use({
    renderer: {
      // [label](book:search query) becomes the label plus a Viator and a GetYourGuide link, both with our partner IDs.
      link(token: Tokens.Link) {
        const label = this.parser.parseInline(token.tokens);
        // [label](pick:article-id) links to the specific products picked for that article in src/data/bookings.ts.
        const isPick = token.href.startsWith("pick:");
        if (isPick || token.href.startsWith("book:")) {
          const value = decodeURIComponent(token.href.slice(5)).trim();
          // A book: query that matches an article's bookingQuery also gets that article's specific products.
          const article = articles.find((item) => (isPick ? item.id === value : item.bookingQuery === value));
          if (isPick && !article) throw new Error(`Unknown article id in pick: link: ${value}`);
          const links = article ? articleBookingLinks(article, locale) : bookingLinks(value);
          if (!links.length) throw new Error(`No booking links for ${token.href}`);
          const chips = links
            .map((link) => `<a class="chip" href="${escapeHtml(link.url)}">${link.partner}</a>`)
            .join("");
          return `<span class="book"><span class="book-label">${label}</span><span class="chips" aria-label="${ui[locale].book}">${chips}</span></span>`;
        }
        return `<a href="${escapeHtml(token.href)}">${label}</a>`;
      },
      heading(token: Tokens.Heading) {
        const text = this.parser.parseInline(token.tokens);
        if (token.depth === 1) {
          const { eyebrow, title } = splitHeading(text);
          return `<header class="chapter-head" id="${slugify(token.text)}">${
            eyebrow ? `<p class="eyebrow">${eyebrow}</p>` : ""
          }<h1>${title}</h1></header>\n`;
        }
        return `<h${token.depth}>${text}</h${token.depth}>\n`;
      },
    },
  });
  return marked;
}

/**
 * Renders the body: plain Markdown plus ":::kind Optional title" ... ":::" blocks.
 * Kinds: schedule, tip, warn, note, map, booking, checklist.
 */
function renderBody(body: string, locale: Locale): string {
  const marked = createMarkdown(locale);
  const md = (text: string) => marked.parse(text, { async: false });
  const html: string[] = [];
  // Spaces are not allowed in Markdown link targets, so encode the search query of every book: link first.
  const lines = body
    .replace(/\]\(book:([^)]*)\)/g, (_, query: string) => `](book:${encodeURIComponent(query.trim())})`)
    .split("\n");
  let buffer: string[] = [];

  const flush = () => {
    if (buffer.length) html.push(md(buffer.join("\n")));
    buffer = [];
  };

  for (let i = 0; i < lines.length; i++) {
    const open = /^:::(\w+)\s*(.*)$/.exec(lines[i]);
    if (!open) {
      buffer.push(lines[i]);
      continue;
    }
    flush();
    const [, kind, title] = open;
    const inner: string[] = [];
    i++;
    while (i < lines.length && lines[i].trim() !== ":::") inner.push(lines[i++]);
    if (i >= lines.length) throw new Error(`Unclosed :::${kind} block`);
    const heading = title ? `<p class="box-title">${marked.parseInline(title, { async: false })}</p>` : "";

    if (kind === "schedule") {
      html.push(`<div class="schedule">${heading}${renderSchedule(inner, md)}</div>`);
    } else if (["tip", "warn", "note", "map", "booking", "checklist"].includes(kind)) {
      html.push(`<aside class="box ${kind}">${heading}${md(inner.join("\n"))}</aside>`);
    } else {
      throw new Error(`Unknown block :::${kind}`);
    }
  }
  flush();
  return html.join("\n");
}

/** "08:30 | Title" starts an entry; the lines below it are its Markdown body. */
function renderSchedule(lines: string[], md: (text: string) => string): string {
  const entries: { time: string; title: string; body: string[] }[] = [];
  for (const line of lines) {
    const start = /^([^|\s][^|]{0,24}?)\s+\|\s+(.+)$/.exec(line);
    if (start) entries.push({ time: start[1], title: start[2], body: [] });
    else if (entries.length) entries[entries.length - 1].body.push(line);
    else if (line.trim()) throw new Error(`Schedule text before the first "time | title" line: ${line}`);
  }
  return entries
    .map(
      (entry) =>
        `<div class="slot"><p class="time">${escapeHtml(entry.time)}</p><div class="slot-body"><p class="slot-title">${md(
          entry.title,
        )
          .replace(/^<p>|<\/p>\n?$/g, "")}</p>${md(entry.body.join("\n"))}</div></div>`,
    )
    .join("");
}

async function fontFace(family: string, file: string, weight: string, style = "normal"): Promise<string> {
  const data = await readFile(path.join(root, "node_modules", file));
  return `@font-face{font-family:"${family}";src:url(data:font/woff2;base64,${data.toString(
    "base64",
  )}) format("woff2");font-weight:${weight};font-style:${style};font-display:block}`;
}

async function loadFonts(): Promise<string> {
  const fraunces = "@fontsource-variable/fraunces/files";
  const geist = "@fontsource/geist-sans/files";
  return (
    await Promise.all([
      fontFace("Fraunces", `${fraunces}/fraunces-latin-wght-normal.woff2`, "100 900"),
      fontFace("Fraunces", `${fraunces}/fraunces-latin-wght-italic.woff2`, "100 900", "italic"),
      fontFace("Geist", `${geist}/geist-sans-latin-400-normal.woff2`, "400"),
      fontFace("Geist", `${geist}/geist-sans-latin-500-normal.woff2`, "500"),
      fontFace("Geist", `${geist}/geist-sans-latin-600-normal.woff2`, "600"),
    ])
  ).join("\n");
}

function buildHtml(product: Product, locale: Locale, meta: FrontMatter, body: string, css: string, fonts: string) {
  const t = ui[locale];
  const chapters = [...body.matchAll(/^# (.+)$/gm)].map((match) => {
    const { eyebrow, title } = splitHeading(match[1]);
    return { id: slugify(match[1]), eyebrow, title };
  });
  const toc = chapters
    .map(
      (chapter) =>
        `<li><a href="#${chapter.id}">${chapter.eyebrow ? `<span class="toc-eyebrow">${escapeHtml(chapter.eyebrow)}</span>` : ""}<span class="toc-title">${escapeHtml(
          chapter.title,
        )}</span></a></li>`,
    )
    .join("");
  const runningTitle = `${SITE_NAME} · ${product.title[locale]}`.replace(/"/g, "'");

  return `<!doctype html>
<html lang="${locale}">
<head>
<meta charset="utf-8">
<title>${escapeHtml(product.title[locale])} | ${escapeHtml(SITE_NAME)}</title>
<style>${fonts}\n${css}\n@page main { @top-left { content: "${runningTitle}"; } }</style>
</head>
<body>
<section class="cover">
  <div class="cover-sun"></div>
  <p class="cover-brand">${escapeHtml(SITE_NAME)}</p>
  <div class="cover-main">
    <p class="cover-kicker">${escapeHtml(meta.kicker)}</p>
    <h1 class="cover-title">${escapeHtml(meta.title)}</h1>
    <p class="cover-subtitle">${escapeHtml(meta.subtitle)}</p>
  </div>
  <p class="cover-foot">${t.guide} · ${t.edition} ${escapeHtml(meta.edition)}</p>
</section>
<main>
<section class="front">
  <h2 class="front-title">${t.contents}</h2>
  <ol class="toc">${toc}</ol>
  <div class="small-print">
    <p>${t.disclosure}</p>
    <p>${t.checked}</p>
    <p>${t.personal} © ${new Date().getFullYear()} ${escapeHtml(SITE_NAME)}.</p>
  </div>
</section>
${renderBody(body, locale)}
</main>
</body>
</html>`;
}

function countPages(pdf: Uint8Array): number {
  return Buffer.from(pdf).toString("latin1").match(/\/Type\s*\/Page(?![a-zA-Z])/g)?.length ?? 0;
}

async function main() {
  const args = process.argv.slice(2);
  const writeHtml = args.includes("--html");
  const only = args.filter((arg) => !arg.startsWith("--"));
  const selected = only.length ? products.filter((product) => only.includes(product.id)) : products;
  if (only.length && selected.length !== only.length) {
    throw new Error(`Unknown product id. Known: ${products.map((product) => product.id).join(", ")}`);
  }

  const [css, fonts] = await Promise.all([readFile(path.join(guidesDir, "guide.css"), "utf8"), loadFonts()]);
  await mkdir(outDir, { recursive: true });
  const browser = await puppeteer.launch();
  const mismatches: string[] = [];

  try {
    for (const product of selected) {
      for (const locale of locales) {
        const sourcePath = path.join(guidesDir, product.id, `${locale}.md`);
        const { meta, body } = parseFrontMatter(await readFile(sourcePath, "utf8"));
        const html = buildHtml(product, locale, meta, body, css, fonts);
        const target = path.join(outDir, product.file[locale]);
        if (writeHtml) await writeFile(target.replace(/\.pdf$/, ".html"), html);

        const page = await browser.newPage();
        await page.setContent(html, { waitUntil: "load" });
        await page.evaluate(() => document.fonts.ready);
        const pdf = await page.pdf({ preferCSSPageSize: true, printBackground: true, tagged: true, outline: true });
        await page.close();
        await writeFile(target, pdf);

        const pages = countPages(pdf);
        const note = pages === product.pages ? "" : `  (products.ts says ${product.pages})`;
        if (note) mismatches.push(`${product.file[locale]}: ${pages} pages${note}`);
        console.log(`✓ ${path.relative(root, target)}  ${pages} pages${note}`);
      }
    }
  } finally {
    await browser.close();
  }

  if (mismatches.length) {
    console.warn(`\nPage counts differ from products.ts; update "pages" there:\n  ${mismatches.join("\n  ")}`);
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
