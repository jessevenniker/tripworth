import { articlesFor, articleTypeOrder } from "@/data/articles";
import { destinationsFor } from "@/data/destinations";
import { absoluteUrl, localePath, SITE_NAME } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

// llms.txt: a plain-text map of the site for AI assistants and answer engines (llmstxt.org).
// Lists the English pages; every page links to its Dutch version through hreflang.
export function GET() {
  const t = getDictionary("en");
  const lines = [
    `# ${SITE_NAME}`,
    "",
    `> ${t.home.metaDescription}`,
    "",
    "Every guide opens with a short answer, followed by a table of key facts (prices, opening hours, booking windows), details and common questions. Each page shows the month it was last checked. Dutch versions live under /nl.",
    "",
  ];

  for (const destination of destinationsFor("en")) {
    const articles = articlesFor(destination.id, "en");
    if (articles.length === 0) continue;
    const content = destination.en;
    lines.push(`## ${content.name}, ${content.country}`, "");
    lines.push(`- [${t.hub.title(content.name)}](${absoluteUrl(localePath("en", `/${content.slug}`))}): ${content.tagline}`);
    for (const type of articleTypeOrder) {
      for (const article of articles.filter((candidate) => candidate.type === type)) {
        const url = absoluteUrl(localePath("en", `/${content.slug}/${article.en.slug}`));
        lines.push(`- [${article.en.title}](${url}): ${article.en.description}`);
      }
    }
    lines.push("");
  }

  return new Response(lines.join("\n"), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
