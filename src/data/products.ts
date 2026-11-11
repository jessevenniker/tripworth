import type { Locale } from "@/i18n/config";

export type Product = {
  id: string;
  destinationId: string;
  pages: number;
  /** Price in cents, set per currency (no automatic conversion). */
  price: { usd: number; eur: number };
  /** File name inside private/pdfs, per language. */
  file: Record<Locale, string>;
  title: Record<Locale, string>;
  description: Record<Locale, string>;
};

// Example products. The PDF files themselves still have to be written
// and placed in private/pdfs.
export const products: Product[] = [
  {
    id: "rome-3-days",
    destinationId: "rome",
    pages: 42,
    price: { usd: 1500, eur: 1400 },
    file: { en: "rome-3-days-en.pdf", nl: "rome-3-dagen-nl.pdf" },
    title: { en: "Rome in 3 days", nl: "Rome in 3 dagen" },
    description: {
      en: "Hour-by-hour plan, which tickets to book in which order, and 12 places most visitors walk past.",
      nl: "Planning per uur, welke tickets je in welke volgorde boekt en 12 plekken waar de meeste bezoekers langslopen.",
    },
  },
  {
    id: "paris-3-days",
    destinationId: "paris",
    pages: 46,
    price: { usd: 1500, eur: 1400 },
    file: { en: "paris-3-days-en.pdf", nl: "parijs-3-dagen-nl.pdf" },
    title: { en: "Paris in 3 days", nl: "Parijs in 3 dagen" },
    description: {
      en: "Three days mapped by neighborhood, with time slots to book and where to eat between sights.",
      nl: "Drie dagen ingedeeld per wijk, met tijdsloten om te boeken en waar je eet tussen de bezienswaardigheden.",
    },
  },
  {
    id: "aruba-week",
    destinationId: "aruba",
    pages: 38,
    price: { usd: 1700, eur: 1600 },
    file: { en: "aruba-week-en.pdf", nl: "aruba-week-nl.pdf" },
    title: { en: "One week in Aruba", nl: "Een week Aruba" },
    description: {
      en: "Beaches ranked, the excursions worth booking, and a day-by-day plan with or without a rental car.",
      nl: "Stranden op volgorde, de excursies die het boeken waard zijn en een planning per dag met of zonder huurauto.",
    },
  },
];

export function getProduct(id: string): Product | undefined {
  return products.find((product) => product.id === id);
}
