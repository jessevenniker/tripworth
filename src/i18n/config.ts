export const locales = ["en", "nl"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

// Placeholder until the brand name and domain are decided.
export const SITE_NAME = "Wanderport";
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const localeSettings: Record<
  Locale,
  { htmlLang: string; currency: "usd" | "eur"; numberLocale: string; label: string }
> = {
  en: { htmlLang: "en-US", currency: "usd", numberLocale: "en-US", label: "English" },
  nl: { htmlLang: "nl-NL", currency: "eur", numberLocale: "nl-NL", label: "Nederlands" },
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

// Internal route segment -> public segment per locale.
// The proxy rewrites the public segment back to the internal one.
export const localizedSegments: Record<string, Record<Locale, string>> = {
  guides: { en: "guides", nl: "gidsen" },
  thanks: { en: "thanks", nl: "bedankt" },
  credits: { en: "photo-credits", nl: "fotocredits" },
  privacy: { en: "privacy", nl: "privacy" },
  terms: { en: "terms", nl: "voorwaarden" },
};

/** Public path for an internal path such as "/guides/thanks". English lives at the root. */
export function localePath(locale: Locale, internalPath: string = "/"): string {
  const segments = internalPath
    .split("/")
    .filter(Boolean)
    .map((segment) => localizedSegments[segment]?.[locale] ?? segment);
  const prefix = locale === defaultLocale ? "" : `/${locale}`;
  const path = `${prefix}/${segments.join("/")}`.replace(/\/$/, "");
  return path || "/";
}

export function absoluteUrl(path: string): string {
  return `${SITE_URL}${path === "/" ? "" : path}`;
}

export function formatPrice(locale: Locale, cents: number): string {
  const { numberLocale, currency } = localeSettings[locale];
  return new Intl.NumberFormat(numberLocale, {
    style: "currency",
    currency: currency.toUpperCase(),
    minimumFractionDigits: cents % 100 === 0 ? 0 : 2,
  }).format(cents / 100);
}
