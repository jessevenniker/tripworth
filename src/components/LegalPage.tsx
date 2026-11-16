import type { Metadata } from "next";
import { Footer, Header } from "@/components/SiteChrome";
import { getLegalDocument } from "@/data/legal";
import { absoluteUrl, localePath, localeSettings, locales, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

type Kind = "privacy" | "terms";

export function legalMetadata(kind: Kind, locale: Locale): Metadata {
  const doc = getLegalDocument(kind, locale);
  const languages: Record<string, string> = Object.fromEntries(
    locales.map((l) => [l, absoluteUrl(localePath(l, `/${kind}`))]),
  );
  languages["x-default"] = languages.en;
  return {
    title: doc.title,
    description: doc.description,
    alternates: { canonical: languages[locale], languages },
  };
}

export function LegalPage({ kind, locale }: { kind: Kind; locale: Locale }) {
  const t = getDictionary(locale);
  const doc = getLegalDocument(kind, locale);
  const updated = new Intl.DateTimeFormat(localeSettings[locale].numberLocale, { dateStyle: "long" }).format(
    new Date(`${doc.updated}T00:00:00Z`),
  );

  return (
    <>
      <div className="bg-night">
        <Header locale={locale} tone="dark" switchHref={localePath(locale === "en" ? "nl" : "en", `/${kind}`)} />
      </div>
      <main className="mx-auto w-full max-w-3xl px-5 py-12">
        <h1 className="font-display text-4xl font-semibold sm:text-5xl">{doc.title}</h1>
        <p className="mt-3 font-mono text-xs uppercase tracking-widest text-muted">
          {t.legal.lastUpdated} {updated}
        </p>
        <p className="mt-6 text-lg leading-relaxed">{doc.intro}</p>
        {doc.sections.map((section) => (
          <section key={section.heading} id={section.id} className="mt-10 scroll-mt-6">
            <h2 className="font-display text-2xl font-semibold">{section.heading}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph} className="mt-3 leading-relaxed text-ink/85">
                {paragraph}
              </p>
            ))}
          </section>
        ))}
      </main>
      <Footer locale={locale} />
    </>
  );
}
