import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Photo } from "@/components/Photo";
import { Footer, Header } from "@/components/SiteChrome";
import { allImages } from "@/data/images";
import { isLocale, localePath } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

type Props = { params: Promise<{ locale: string }> };

export const metadata: Metadata = { robots: { index: false } };

export default async function CreditsPage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = getDictionary(locale);

  return (
    <>
      <div className="bg-night">
        <Header locale={locale} tone="dark" switchHref={localePath(locale === "en" ? "nl" : "en", "/credits")} />
      </div>
      <main className="mx-auto w-full max-w-6xl px-5 py-12">
        <h1 className="font-display text-4xl font-semibold sm:text-5xl">{t.ui.credits}</h1>
        <p className="mt-4 max-w-xl text-muted">{t.ui.creditsLead}</p>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {allImages().map(([key, image]) => (
            <li key={key} className="flex items-center gap-4 rounded-2xl border border-line bg-paper p-3">
              <Photo image={key} alt="" sizes="96px" className="h-16 w-24 shrink-0 rounded-xl object-cover" />
              <a href={image.source} target="_blank" rel="noopener nofollow" className="min-w-0 text-sm hover:underline">
                <span className="block truncate font-medium">{image.credit}</span>
                <span className="text-muted">{image.license}</span>
              </a>
            </li>
          ))}
        </ul>
      </main>
      <Footer locale={locale} />
    </>
  );
}
