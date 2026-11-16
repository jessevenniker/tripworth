import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleCard } from "@/components/ArticleCard";
import { DestinationCard, formatCoords } from "@/components/DestinationCard";
import { Photo, PhotoCredit } from "@/components/Photo";
import { Footer, Header } from "@/components/SiteChrome";
import { articlesFor, articleTypeOrder } from "@/data/articles";
import { destinationsFor, getDestinationBySlug, type Destination } from "@/data/destinations";
import { products } from "@/data/products";
import { imageUrl } from "@/data/images";
import { absoluteUrl, formatPrice, isLocale, locales, localePath, localeSettings, SITE_NAME, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

type Props = { params: Promise<{ locale: string; destination: string }> };

// Every page here is built ahead of time from its URL, so there is no shared shell to show first.
export const instant = false;

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    destinationsFor(locale).map((destination) => ({ locale, destination: destination[locale]!.slug })),
  );
}

/** URLs of this hub in every language it exists in, for hreflang. */
function languageUrls(destination: Destination) {
  const urls: Record<string, string> = {};
  for (const locale of locales) {
    const content = destination[locale];
    if (content) urls[locale] = absoluteUrl(localePath(locale, `/${content.slug}`));
  }
  urls["x-default"] = urls.en;
  return urls;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, destination: slug } = await params;
  if (!isLocale(locale)) return {};
  const destination = getDestinationBySlug(locale, slug);
  const content = destination?.[locale];
  if (!destination || !content) return {};
  const t = getDictionary(locale);
  return {
    title: t.hub.title(content.name),
    description: t.hub.metaDescription(content.name),
    alternates: {
      canonical: absoluteUrl(localePath(locale, `/${content.slug}`)),
      languages: languageUrls(destination),
    },
    // A hub without articles is only a placeholder: keep it out of search until there is content.
    robots: articlesFor(destination.id, locale).length === 0 ? { index: false, follow: true } : undefined,
    openGraph: {
      title: t.hub.title(content.name),
      description: t.hub.metaDescription(content.name),
      url: absoluteUrl(localePath(locale, `/${content.slug}`)),
      siteName: SITE_NAME,
      locale: localeSettings[locale].htmlLang.replace("-", "_"),
      images: [{ url: imageUrl(destination.id, 1280), width: 1280 }],
    },
    twitter: { card: "summary_large_image" },
  };
}

export default async function DestinationPage({ params }: Props) {
  const { locale, destination: slug } = await params;
  if (!isLocale(locale)) notFound();
  const destination = getDestinationBySlug(locale, slug);
  const content = destination?.[locale];
  if (!destination || !content) notFound();

  const t = getDictionary(locale);
  const { currency } = localeSettings[locale];
  const otherLocale: Locale = locale === "en" ? "nl" : "en";
  const otherContent = destination[otherLocale];
  const articles = articlesFor(destination.id, locale);
  const guide = products.find((product) => product.destinationId === destination.id);
  const others = destinationsFor(locale)
    .filter((other) => other.id !== destination.id)
    .sort((a, b) => Number(b.region === destination.region) - Number(a.region === destination.region))
    .slice(0, 8);

  // Page types that have no article yet are shown as "in the works".
  const plannedTypes = articleTypeOrder.filter(
    (type) =>
      !articles.some((article) => article.type === type) && (type !== "shoreExcursions" || destination.cruisePort),
  );


  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    name: content.name,
    description: content.tagline,
    url: absoluteUrl(localePath(locale, `/${content.slug}`)),
    geo: { "@type": "GeoCoordinates", latitude: destination.lat, longitude: destination.lng },
    includesAttraction: content.highlights.map((name) => ({ "@type": "TouristAttraction", name })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="relative flex min-h-[72svh] flex-col overflow-hidden bg-night text-white">
        <Photo image={destination.id} alt={content.name} eager className="absolute inset-0 h-full w-full object-cover" />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-night/65 via-night/20 to-night/90" />
        <Header
          locale={locale}
          tone="dark"
          overlay
          switchHref={otherContent ? localePath(otherLocale, `/${otherContent.slug}`) : undefined}
        />
        <div className="relative mx-auto mt-auto w-full max-w-6xl px-5 pb-10 pt-32">
          <Link href={`${localePath(locale, "/")}#destinations`} className="text-sm text-white/80 hover:underline">
            ← {t.hub.back}
          </Link>
          <p className="mt-6 flex flex-wrap items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-white/80">
            <span className="rounded-full bg-coral px-3 py-1 text-white">{destination.code}</span>
            <span>{content.country}</span>
            <span className="text-white/50">{formatCoords(destination.lat, destination.lng)}</span>
          </p>
          <h1 className="mt-4 max-w-4xl font-display text-[clamp(2.75rem,8vw,6rem)] font-semibold leading-[0.98] tracking-tight">
            {t.hub.title(content.name)}
          </h1>
          <PhotoCredit image={destination.id} label={t.ui.photoBy} className="mt-6 inline-block text-white/50" />
        </div>
      </section>

      <main>
        {/* Answer-first block: written to be quoted by search and AI answers. */}
        <section className="mx-auto max-w-6xl px-5">
          <div className="relative -mt-6 grid gap-8 rounded-[28px] border border-line bg-paper p-6 shadow-xl shadow-night/5 sm:p-10 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <h2 className="font-mono text-xs uppercase tracking-[0.25em] text-sea">{t.hub.answerLabel}</h2>
              <p className="mt-3 font-display text-3xl leading-tight sm:text-4xl">{content.tagline}.</p>
            </div>
            <div>
              <p className="text-sm font-medium text-muted">{t.hub.topPicks}</p>
              <ol className="mt-3 divide-y divide-line border-y border-line">
                {content.highlights.map((highlight, index) => (
                  <li key={highlight} className="flex gap-4 py-3">
                    <span className="font-mono text-sm text-coral">0{index + 1}</span>
                    <span className="font-medium">{highlight}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* Articles, grouped by type */}
        {articleTypeOrder.map((type) => {
          const ofType = articles.filter((article) => article.type === type);
          if (ofType.length === 0) return null;
          const [title, description] = t.pageTypes[type];
          return (
            <section key={type} className="mx-auto max-w-6xl px-5 pt-16">
              <div className="reveal flex flex-wrap items-end justify-between gap-3">
                <h2 className="font-display text-4xl font-semibold">{title}</h2>
                <p className="max-w-sm text-sm text-muted">{description}</p>
              </div>
              <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {ofType.map((article) => (
                  <ArticleCard key={article.id} article={article} destination={destination} locale={locale} />
                ))}
              </div>
            </section>
          );
        })}

        {/* PDF guide for this destination */}
        {guide && (
          <section className="mx-auto max-w-6xl px-5 pt-16">
            <div className="reveal relative overflow-hidden rounded-[28px] bg-night p-8 text-white sm:p-12">
              <Photo
                image={destination.id}
                alt=""
                sizes="100vw"
                className="absolute inset-0 h-full w-full object-cover opacity-30"
              />
              <div className="relative max-w-xl">
                <p className="font-mono text-xs uppercase tracking-[0.3em] text-coral">{t.ui.guideUpsell}</p>
                <h2 className="mt-3 font-display text-4xl font-semibold sm:text-5xl">{guide.title[locale]}</h2>
                <p className="mt-3 text-white/80">{guide.description[locale]}</p>
                <Link
                  href={localePath(locale, "/guides")}
                  className="mt-6 inline-flex items-center gap-3 rounded-full bg-coral px-6 py-3 font-medium transition hover:-translate-y-0.5 hover:bg-[#f2573a]"
                >
                  {t.ui.viewGuide}
                  <span className="rounded-full bg-white/20 px-2.5 py-0.5 text-sm">
                    {formatPrice(locale, guide.price[currency])}
                  </span>
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* Page types that are planned but not written yet */}
        {plannedTypes.length > 0 && (
          <section className="mx-auto max-w-6xl px-5 pt-16">
            <h2 className="font-display text-3xl font-semibold">{t.hub.comingSoon}</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {plannedTypes.map((type) => {
                const [title, description] = t.pageTypes[type];
                return (
                  <div key={type} className="rounded-2xl border border-dashed border-line p-5">
                    <h3 className="font-display text-xl font-semibold">{title}</h3>
                    <p className="mt-2 text-sm text-muted">{description}</p>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* Other destinations, as a swipeable row */}
        <section className="pb-20 pt-16">
          <div className="mx-auto max-w-6xl px-5">
            <h2 className="font-display text-4xl font-semibold">{t.ui.otherDestinations}</h2>
          </div>
          <div className="scroll-row mt-6 flex gap-5 overflow-x-auto px-5 pb-4 lg:px-[max(1.25rem,calc((100vw-72rem)/2+1.25rem))]">
            {others.map((other) => (
              <DestinationCard
                key={other.id}
                destination={other}
                locale={locale}
                className="w-[78vw] shrink-0 snap-start sm:w-[320px]"
              />
            ))}
          </div>
        </section>
      </main>

      <Footer locale={locale} />
    </>
  );
}
