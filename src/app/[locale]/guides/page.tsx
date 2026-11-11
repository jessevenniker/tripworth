import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Footer, Header } from "@/components/SiteChrome";
import { Photo } from "@/components/Photo";
import type { ImageKey } from "@/data/images";
import { products } from "@/data/products";
import { absoluteUrl, formatPrice, isLocale, localePath, localeSettings } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t = getDictionary(locale);
  return {
    title: t.guides.metaTitle,
    description: t.guides.metaDescription,
    alternates: {
      canonical: absoluteUrl(localePath(locale, "/guides")),
      languages: {
        en: absoluteUrl(localePath("en", "/guides")),
        nl: absoluteUrl(localePath("nl", "/guides")),
        "x-default": absoluteUrl(localePath("en", "/guides")),
      },
    },
  };
}

export default async function GuidesPage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = getDictionary(locale);
  const { currency } = localeSettings[locale];

  return (
    <>
      <div className="bg-night">
        <Header locale={locale} tone="dark" switchHref={localePath(locale === "en" ? "nl" : "en", "/guides")} />
      </div>

      <main className="mx-auto w-full max-w-6xl px-5 py-12">
        <h1 className="max-w-2xl font-display text-4xl font-semibold sm:text-5xl">{t.guides.title}</h1>
        <p className="mt-4 max-w-xl text-lg text-muted">{t.guides.lead}</p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {products.map((product) => {
            return (
              <article key={product.id} className="photo-card reveal flex flex-col overflow-hidden rounded-3xl border border-line bg-paper">
                <div className="relative flex aspect-[5/4] items-end overflow-hidden p-5 text-white">
                  <Photo
                    image={product.destinationId as ImageKey}
                    alt=""
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-night/85 to-transparent" />
                  <h2 className="relative font-display text-3xl font-semibold leading-tight">{product.title[locale]}</h2>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="text-sm text-muted">{product.description[locale]}</p>
                  <p className="mt-3 font-mono text-xs uppercase tracking-widest text-muted">
                    PDF · {product.pages} {t.guides.pages}
                  </p>
                  <form action="/api/checkout" method="POST" className="mt-auto flex items-center justify-between gap-3 pt-5">
                    <input type="hidden" name="productId" value={product.id} />
                    <input type="hidden" name="locale" value={locale} />
                    <span className="font-display text-2xl font-semibold">{formatPrice(locale, product.price[currency])}</span>
                    <button
                      type="submit"
                      className="rounded-full bg-coral px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#f2573a]"
                    >
                      {t.guides.buy}
                    </button>
                  </form>
                </div>
              </article>
            );
          })}
        </div>

        <p className="mt-8 max-w-2xl text-xs text-muted">{t.guides.waiver}</p>
      </main>

      <Footer locale={locale} />
    </>
  );
}
