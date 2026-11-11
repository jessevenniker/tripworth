import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articleHref } from "@/components/ArticleCard";
import { DestinationCard, formatCoords } from "@/components/DestinationCard";
import { Photo } from "@/components/Photo";
import { Footer, Header, PlaneIcon } from "@/components/SiteChrome";
import { articlesFor } from "@/data/articles";
import { destinations, destinationsFor, regionOrder, type Region } from "@/data/destinations";
import type { ImageKey } from "@/data/images";
import { products } from "@/data/products";
import { absoluteUrl, formatPrice, isLocale, localePath, localeSettings, SITE_NAME, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t = getDictionary(locale);
  return {
    title: { absolute: `${SITE_NAME}: ${t.home.metaTitle}` },
    description: t.home.metaDescription,
    alternates: {
      canonical: absoluteUrl(localePath(locale, "/")),
      languages: {
        en: absoluteUrl(localePath("en", "/")),
        nl: absoluteUrl(localePath("nl", "/")),
        "x-default": absoluteUrl(localePath("en", "/")),
      },
    },
  };
}

const heroSlides: ImageKey[] = ["rome", "aruba", "amsterdam", "cancun"];

// Each region gets its own backdrop so the page has rhythm while scrolling.
const regionStyle: Record<Region, { band: string; heading: string; lead: string }> = {
  europe: { band: "bg-sand", heading: "text-ink", lead: "text-muted" },
  caribbean: { band: "bg-[#06363d]", heading: "text-white", lead: "text-white/70" },
  americas: { band: "bg-sand", heading: "text-ink", lead: "text-muted" },
};

/** Editorial block for one fully written destination: photo on one side, top articles on the other. */
function Spotlight({
  locale,
  destinationId,
  image,
  flip = false,
}: {
  locale: Locale;
  destinationId: string;
  image: ImageKey;
  flip?: boolean;
}) {
  const t = getDictionary(locale);
  const destination = destinations.find((candidate) => candidate.id === destinationId);
  const content = destination?.[locale];
  const top = articlesFor(destinationId, locale).slice(0, 4);
  if (!destination || !content || top.length === 0) return null;
  const hubHref = localePath(locale, `/${content.slug}`);

  return (
    <section className={flip ? "bg-sand" : "bg-paper"}>
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 lg:grid-cols-2 lg:items-center lg:py-24">
        <Link
          href={hubHref}
          className={`photo-card reveal relative block aspect-[4/5] overflow-hidden rounded-[32px] sm:aspect-[5/4] lg:aspect-[4/5] ${
            flip ? "lg:order-2" : ""
          }`}
        >
          <Photo image={image} alt={content.name} sizes="(min-width: 1024px) 50vw, 100vw" className="h-full w-full object-cover" />
          <span className="absolute bottom-5 left-5 rounded-full bg-white/90 px-4 py-2 font-mono text-xs tracking-widest text-night backdrop-blur">
            {destination.code} · {formatCoords(destination.lat, destination.lng)}
          </span>
        </Link>
        <div className="reveal">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-coral">{t.ui.spotlightEyebrow}</p>
          <h2 className="mt-4 font-display text-5xl font-semibold leading-none sm:text-7xl">{t.ui.spotlightTitle(content.name)}</h2>
          <p className="mt-5 max-w-md text-lg text-muted">{t.ui.spotlightLead}</p>
          <ul className="mt-8 divide-y divide-line border-y border-line">
            {top.map((article, index) => (
              <li key={article.id}>
                <Link href={articleHref(destination, article, locale)} className="group flex items-center gap-4 py-4">
                  <span className="font-mono text-sm text-coral">0{index + 1}</span>
                  <span className="flex-1 font-display text-lg font-medium leading-snug group-hover:text-coral">
                    {article[locale]!.title}
                  </span>
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href={hubHref}
            className="mt-8 inline-flex rounded-full bg-night px-6 py-3 font-medium text-white transition hover:-translate-y-0.5 hover:bg-ink"
          >
            {t.ui.spotlightCta(content.name)}
          </Link>
        </div>
      </div>
    </section>
  );
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = getDictionary(locale);
  const available = destinationsFor(locale);
  const { currency } = localeSettings[locale];

  const board = [...available, ...available];

  return (
    <>
      {/* Arrival intro: the plane flies across and uncovers the page. */}
      <div className="intro-curtain" aria-hidden="true">
        <div className="intro-label flex h-full flex-col items-center justify-center text-white">
          <span className="font-mono text-xs uppercase tracking-[0.4em] text-white/70">{t.intro.boarding}</span>
          <span className="mt-3 font-display text-5xl font-semibold sm:text-7xl">{SITE_NAME}</span>
        </div>
        <span className="intro-trail" />
        <PlaneIcon className="intro-plane" />
      </div>

      {/* Hero: slow slideshow of destinations behind the headline. */}
      <section className="relative flex min-h-[92svh] flex-col overflow-hidden bg-night text-white">
        <div aria-hidden="true" className="absolute inset-0">
          {heroSlides.map((image, index) => (
            <Photo
              key={image}
              image={image}
              alt=""
              eager={index === 0}
              className="hero-slide"
              style={{ "--slide": index } as React.CSSProperties}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-b from-night/70 via-night/35 to-night/90" />
        </div>

        <Header locale={locale} tone="dark" overlay switchHref={localePath(locale === "en" ? "nl" : "en", "/")} />

        <div className="relative mx-auto mt-auto w-full max-w-6xl px-5 pb-12 pt-32">
          <p className="rise font-mono text-xs uppercase tracking-[0.3em] text-coral" style={{ "--i": 0 } as React.CSSProperties}>
            {t.home.eyebrow}
          </p>
          <h1
            className="rise mt-5 max-w-4xl font-display text-[clamp(2.75rem,8vw,6.5rem)] font-semibold leading-[0.98] tracking-tight"
            style={{ "--i": 1 } as React.CSSProperties}
          >
            {t.home.title}
          </h1>
          <p className="rise mt-6 max-w-xl text-lg text-white/85" style={{ "--i": 2 } as React.CSSProperties}>
            {t.home.lead}
          </p>
          <a
            href="#destinations"
            className="rise mt-8 inline-flex items-center gap-2 rounded-full bg-coral px-7 py-3.5 font-medium text-white shadow-lg shadow-coral/30 transition hover:-translate-y-0.5 hover:bg-[#f2573a]"
            style={{ "--i": 3 } as React.CSSProperties}
          >
            {t.home.cta}
            <PlaneIcon className="h-4 w-4 rotate-90" />
          </a>
        </div>

        {/* Departure board: every destination, scrolling like an airport display. */}
        <div className="relative overflow-hidden border-t border-white/15 bg-night/70 backdrop-blur-md">
          <div className="board-track py-3.5">
            {board.map((destination, index) => (
              <Link
                key={`${destination.id}-${index}`}
                href={localePath(locale, `/${destination[locale]!.slug}`)}
                aria-hidden={index >= available.length}
                tabIndex={index >= available.length ? -1 : undefined}
                className="flex items-center gap-3 whitespace-nowrap px-6 font-mono text-sm tracking-widest text-white/80 hover:text-white"
              >
                <span className="text-coral">{destination.code}</span>
                <span className="uppercase">{destination[locale]!.name}</span>
                <PlaneIcon className="ml-3 h-3.5 w-3.5 rotate-90 text-white/30" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Spotlights on the destinations that are fully written. */}
      <Spotlight locale={locale} destinationId="rome" image="forum" />
      <Spotlight locale={locale} destinationId="aruba" image="aruba-eagle" flip />

      <main id="destinations" className="scroll-mt-0">
        {regionOrder.map((region) => {
          const inRegion = available.filter((destination) => destination.region === region);
          if (inRegion.length === 0) return null;
          const style = regionStyle[region];
          return (
            <section key={region} className={style.band}>
              <div className="mx-auto max-w-6xl px-5 py-16 lg:py-20">
                <div className="reveal flex flex-wrap items-end justify-between gap-4">
                  <div>
                    <h2 className={`font-display text-5xl font-semibold sm:text-6xl ${style.heading}`}>{t.regions[region]}</h2>
                    <p className={`mt-3 max-w-lg text-lg ${style.lead}`}>{t.regionLeads[region]}</p>
                  </div>
                  <span className={`font-mono text-xs uppercase tracking-[0.3em] ${style.lead}`}>
                    {String(inRegion.length).padStart(2, "0")} · {t.nav.destinations}
                  </span>
                </div>
                <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                  {inRegion.map((destination, index) => (
                    <DestinationCard
                      key={destination.id}
                      destination={destination}
                      locale={locale}
                      size={index === 0 ? "large" : "regular"}
                    />
                  ))}
                </div>
              </div>
            </section>
          );
        })}
      </main>

      {/* PDF guides teaser */}
      <section className="bg-night text-white">
        <div className="mx-auto max-w-6xl px-5 py-16 lg:py-20">
          <div className="reveal flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-coral">{t.ui.guidesEyebrow}</p>
              <h2 className="mt-4 font-display text-4xl font-semibold sm:text-5xl">{t.ui.guidesTitle}</h2>
              <p className="mt-3 max-w-md text-white/70">{t.ui.guidesLead}</p>
            </div>
            <Link
              href={localePath(locale, "/guides")}
              className="rounded-full border border-white/30 px-6 py-3 font-medium transition hover:bg-white hover:text-night"
            >
              {t.ui.guidesCta}
            </Link>
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            {products.map((product) => (
              <Link
                key={product.id}
                href={localePath(locale, "/guides")}
                className="photo-card reveal group relative flex aspect-[3/4] flex-col justify-end overflow-hidden rounded-3xl p-5"
              >
                <Photo
                  image={product.destinationId as ImageKey}
                  alt=""
                  sizes="(min-width: 640px) 33vw, 100vw"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-night via-night/30 to-transparent" />
                <span className="relative font-mono text-[11px] uppercase tracking-widest text-white/70">
                  PDF · {product.pages} {t.guides.pages}
                </span>
                <span className="relative mt-1 font-display text-3xl font-semibold leading-tight">{product.title[locale]}</span>
                <span className="relative mt-2 text-lg font-medium text-coral">{formatPrice(locale, product.price[currency])}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer locale={locale} />
    </>
  );
}
