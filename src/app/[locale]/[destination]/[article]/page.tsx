import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleCard } from "@/components/ArticleCard";
import { Photo, PhotoCredit } from "@/components/Photo";
import { Footer, Header } from "@/components/SiteChrome";
import { articleBookingLinks, articles, articlesFor, getArticleBySlug, type Article } from "@/data/articles";
import { destinations, getDestinationBySlug, type Destination } from "@/data/destinations";
import { imageUrl } from "@/data/images";
import { products } from "@/data/products";
import { absoluteUrl, isLocale, locales, localePath, localeSettings, SITE_NAME, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { affiliateEventClass } from "@/lib/analytics";

type Props = { params: Promise<{ locale: string; destination: string; article: string }> };

// Every page here is built ahead of time from its URL, so there is no shared shell to show first.
export const instant = false;

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    articles.flatMap((article) => {
      const destination = destinations.find((d) => d.id === article.destinationId);
      const content = article[locale];
      const destinationContent = destination?.[locale];
      return content && destinationContent
        ? [{ locale, destination: destinationContent.slug, article: content.slug }]
        : [];
    }),
  );
}

function articleUrl(destination: Destination, article: Article, locale: Locale) {
  return absoluteUrl(localePath(locale, `/${destination[locale]!.slug}/${article[locale]!.slug}`));
}

function find(locale: Locale, destinationSlug: string, articleSlug: string) {
  const destination = getDestinationBySlug(locale, destinationSlug);
  const article = destination && getArticleBySlug(destination.id, locale, articleSlug);
  return destination && article ? { destination, article } : null;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, destination: destinationSlug, article: articleSlug } = await params;
  if (!isLocale(locale)) return {};
  const found = find(locale, destinationSlug, articleSlug);
  if (!found) return {};
  const { destination, article } = found;
  const content = article[locale]!;

  const languages: Record<string, string> = {};
  for (const l of locales) {
    if (article[l] && destination[l]) languages[l] = articleUrl(destination, article, l);
  }
  languages["x-default"] = languages.en;

  return {
    title: content.title,
    description: content.description,
    alternates: { canonical: articleUrl(destination, article, locale), languages },
    openGraph: {
      type: "article",
      title: content.title,
      description: content.description,
      url: articleUrl(destination, article, locale),
      siteName: SITE_NAME,
      locale: localeSettings[locale].htmlLang.replace("-", "_"),
      modifiedTime: `${article.updated}-01`,
      images: [{ url: imageUrl(article.image, 1280), width: 1280 }],
    },
    twitter: { card: "summary_large_image" },
  };
}

/** "Lead: rest" becomes a bold lead followed by the rest. */
function Bullet({ text }: { text: string }) {
  const split = text.indexOf(": ");
  if (split === -1 || split > 60) return <>{text}</>;
  return (
    <>
      <strong className="font-semibold text-ink">{text.slice(0, split)}</strong>
      <span className="mt-0.5 block text-muted">{text.slice(split + 2)}</span>
    </>
  );
}

export default async function ArticlePage({ params }: Props) {
  const { locale, destination: destinationSlug, article: articleSlug } = await params;
  if (!isLocale(locale)) notFound();
  const found = find(locale, destinationSlug, articleSlug);
  if (!found) notFound();
  const { destination, article } = found;
  const content = article[locale]!;
  const destinationContent = destination[locale]!;

  const t = getDictionary(locale);
  const otherLocale: Locale = locale === "en" ? "nl" : "en";
  const hasOther = article[otherLocale] && destination[otherLocale];
  const hubHref = localePath(locale, `/${destinationContent.slug}`);
  const links = articleBookingLinks(article, locale);
  const guide = products.find((product) => product.destinationId === destination.id);
  const related = articlesFor(destination.id, locale)
    .filter((other) => other.id !== article.id)
    .sort((a, b) => Number(b.type === article.type) - Number(a.type === article.type))
    .slice(0, 3);
  const updated = new Intl.DateTimeFormat(localeSettings[locale].numberLocale, { month: "long", year: "numeric" }).format(
    new Date(`${article.updated}-01T00:00:00Z`),
  );

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: content.title,
      description: content.description,
      dateModified: `${article.updated}-01`,
      inLanguage: localeSettings[locale].htmlLang,
      mainEntityOfPage: articleUrl(destination, article, locale),
      publisher: { "@type": "Organization", name: SITE_NAME },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: content.faq.map(([question, answer]) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: { "@type": "Answer", text: answer },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: SITE_NAME, item: absoluteUrl(localePath(locale, "/")) },
        { "@type": "ListItem", position: 2, name: destinationContent.name, item: absoluteUrl(hubHref) },
        { "@type": "ListItem", position: 3, name: content.title },
      ],
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="relative flex min-h-[64svh] flex-col overflow-hidden bg-night text-white">
        <Photo image={article.image} alt="" eager className="absolute inset-0 h-full w-full object-cover" />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-night/70 via-night/30 to-night/95" />
        <Header
          locale={locale}
          tone="dark"
          overlay
          switchHref={hasOther ? localePath(otherLocale, `/${destination[otherLocale]!.slug}/${article[otherLocale]!.slug}`) : undefined}
        />
        <div className="relative mx-auto mt-auto w-full max-w-6xl px-5 pb-10 pt-32">
          <nav className="flex flex-wrap items-center gap-2 text-sm text-white/75">
            <Link href={hubHref} className="hover:underline">
              {destinationContent.name}
            </Link>
            <span>/</span>
            <span className="rounded-full bg-coral px-3 py-0.5 text-xs font-semibold uppercase tracking-wider text-white">
              {t.pageTypes[article.type][0]}
            </span>
          </nav>
          <h1 className="mt-5 max-w-4xl font-display text-[clamp(2.25rem,5.5vw,4.5rem)] font-semibold leading-[1.02] tracking-tight">
            {content.title}
          </h1>
          <p className="mt-5 flex flex-wrap gap-x-5 gap-y-1 font-mono text-xs uppercase tracking-widest text-white/65">
            <span>{t.ui.minRead(article.readMinutes)}</span>
            <span>
              {t.ui.updated} {updated}
            </span>
            <PhotoCredit image={article.image} label={t.ui.photoBy} className="normal-case tracking-normal" />
          </p>
          {links.length > 0 && (
            // FTC: the affiliate disclosure has to be visible before the first affiliate link.
            <p className="mt-5 max-w-2xl text-sm leading-snug text-white/80">
              {t.ui.disclosureTop}{" "}
              <Link href={`${localePath(locale, "/terms")}#affiliate-links`} className="underline underline-offset-2 hover:text-white">
                {t.ui.howWeEarn}
              </Link>
            </p>
          )}
        </div>
      </section>

      <main className="mx-auto w-full max-w-6xl px-5">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_340px]">
          <article className="min-w-0">
            {/* Answer-first block */}
            <div className="relative -mt-6 rounded-[28px] border border-line bg-paper p-6 shadow-xl shadow-night/5 sm:p-9">
              <h2 className="font-mono text-xs uppercase tracking-[0.25em] text-sea">{t.hub.answerLabel}</h2>
              <p className="mt-3 font-display text-xl leading-relaxed sm:text-2xl">{content.answer}</p>
            </div>

            <h2 className="mt-12 font-mono text-xs uppercase tracking-[0.25em] text-muted">{t.ui.keyFacts}</h2>
            <dl className="mt-4 grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2">
              {content.facts.map(([label, value]) => (
                <div key={label} className="bg-paper p-5">
                  <dt className="text-xs font-medium uppercase tracking-wider text-muted">{label}</dt>
                  <dd className="mt-1 font-display text-lg font-medium leading-snug">{value}</dd>
                </div>
              ))}
            </dl>

            {content.sections.map((section) => (
              <section key={section.heading} className="mt-12">
                <h2 className="font-display text-3xl font-semibold leading-tight">{section.heading}</h2>
                {section.paragraphs?.map((paragraph) => (
                  <p key={paragraph} className="mt-4 text-lg leading-relaxed text-ink/85">
                    {paragraph}
                  </p>
                ))}
                {section.bullets && (
                  <ul className="mt-5 space-y-3">
                    {section.bullets.map((bullet, index) => (
                      <li key={bullet} className="flex gap-4 rounded-2xl border border-line bg-paper p-4 sm:p-5">
                        <span className="pt-0.5 font-mono text-sm text-coral">{String(index + 1).padStart(2, "0")}</span>
                        <span className="leading-relaxed">
                          <Bullet text={bullet} />
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}

            {content.tip && (
              <aside className="mt-12 rounded-3xl bg-sea p-6 text-white sm:p-8">
                <p className="font-mono text-xs uppercase tracking-[0.25em] text-white/70">{t.ui.tip}</p>
                <p className="mt-3 font-display text-xl leading-relaxed">{content.tip}</p>
              </aside>
            )}

            <section className="mt-12">
              <h2 className="font-display text-3xl font-semibold">{t.ui.faq}</h2>
              <div className="mt-5 divide-y divide-line border-y border-line">
                {content.faq.map(([question, answer]) => (
                  <details key={question} className="group py-4">
                    <summary className="flex items-center justify-between gap-4 font-display text-lg font-medium">
                      {question}
                      <span className="faq-plus grid h-8 w-8 shrink-0 place-items-center rounded-full border border-line text-xl transition-transform">
                        +
                      </span>
                    </summary>
                    <p className="mt-3 max-w-2xl leading-relaxed text-muted">{answer}</p>
                  </details>
                ))}
              </div>
            </section>
          </article>

          {/* Sidebar: booking and guide, stays in view while reading */}
          <aside className="lg:pt-10">
            <div className="space-y-5 lg:sticky lg:top-6">
              {links.length > 0 && (
                <div className="rounded-3xl bg-night p-6 text-white">
                  <h2 className="font-display text-2xl font-semibold">{t.ui.bookTitle}</h2>
                  <p className="mt-2 text-sm text-white/70">{t.ui.bookLead}</p>
                  <div className="mt-5 space-y-3">
                    {links.map((link, index) => (
                      <a
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="sponsored nofollow noopener"
                        // Plausible tagged events: counts each click as "Affiliate Click" with these properties.
                        className={`${affiliateEventClass(link.partner, destination.id, article.id)} block rounded-2xl px-5 py-3 transition hover:-translate-y-0.5 ${
                          index === 0 ? "bg-coral text-white hover:bg-[#f2573a]" : "border border-white/30 hover:bg-white hover:text-night"
                        }`}
                      >
                        {/* Product names come from the partner sites in English, so they are shown on English pages only. */}
                        {link.title && locale === "en" && (
                          <span className="block text-sm leading-snug opacity-85">{link.title}</span>
                        )}
                        <span className="mt-0.5 flex items-center justify-between font-medium">
                          {t.ui.bookOn(link.partner)}
                          <span>→</span>
                        </span>
                      </a>
                    ))}
                  </div>
                  <p className="mt-4 text-[11px] leading-snug text-white/50">{t.footer.disclosure}</p>
                </div>
              )}
              {guide && (
                <Link href={localePath(locale, "/guides")} className="photo-card group relative block overflow-hidden rounded-3xl p-6 text-white">
                  <Photo image={destination.id} alt="" sizes="340px" className="absolute inset-0 h-full w-full object-cover" />
                  <span aria-hidden="true" className="absolute inset-0 bg-night/65" />
                  <span className="relative block font-mono text-[11px] uppercase tracking-widest text-white/70">
                    PDF · {guide.pages} {t.guides.pages}
                  </span>
                  <span className="relative mt-1 block font-display text-2xl font-semibold">{guide.title[locale]}</span>
                  <span className="relative mt-3 inline-block text-sm font-medium underline-offset-4 group-hover:underline">
                    {t.ui.viewGuide} →
                  </span>
                </Link>
              )}
            </div>
          </aside>
        </div>

        {related.length > 0 && (
          <section className="pb-20 pt-20">
            <h2 className="font-display text-4xl font-semibold">{t.ui.moreFrom(destinationContent.name)}</h2>
            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((other) => (
                <ArticleCard key={other.id} article={other} destination={destination} locale={locale} />
              ))}
            </div>
          </section>
        )}
      </main>

      <Footer locale={locale} />
    </>
  );
}
