import type { Locale } from "@/i18n/config";

export type Product = {
  id: string;
  destinationId: string;
  /** Page count of the rendered PDF per language; build:guides warns when it drifts. */
  pages: Record<Locale, number>;
  /** Price in cents, set per currency (no automatic conversion). */
  price: { usd: number; eur: number };
  /** File name inside private/pdfs, per language. */
  file: Record<Locale, string>;
  title: Record<Locale, string>;
  description: Record<Locale, string>;
};

// One paid guide per fully written destination. The sources live in guides/<id>/<locale>.md and
// "npm run build:guides" renders them to private/pdfs under the file names below.
// Prices sit in the $12 to $19 range of BOUWPLAN.md section 7: $15 for a three-day city, $17 for the longer plans.
export const products: Product[] = [
  {
    id: "rome-3-days",
    destinationId: "rome",
    pages: { en: 19, nl: 21 },
    price: { usd: 1500, eur: 1400 },
    file: { en: "rome-3-days-en.pdf", nl: "rome-3-dagen-nl.pdf" },
    title: { en: "Rome in 3 days", nl: "Rome in 3 dagen" },
    description: {
      en: "Hour-by-hour plan, which tickets to book in which order, and the places most visitors walk past.",
      nl: "Planning per uur, welke tickets je in welke volgorde boekt en de plekken waar de meeste bezoekers langslopen.",
    },
  },
  {
    id: "paris-3-days",
    destinationId: "paris",
    pages: { en: 18, nl: 19 },
    price: { usd: 1500, eur: 1400 },
    file: { en: "paris-3-days-en.pdf", nl: "parijs-3-dagen-nl.pdf" },
    title: { en: "Paris in 3 days", nl: "Parijs in 3 dagen" },
    description: {
      en: "Three days mapped by neighborhood, with the time slots to book and a choice of Versailles or Montmartre.",
      nl: "Drie dagen ingedeeld per wijk, met de tijdsloten die je boekt en de keus tussen Versailles en Montmartre.",
    },
  },
  {
    id: "london-3-days",
    destinationId: "london",
    pages: { en: 18, nl: 19 },
    price: { usd: 1500, eur: 1400 },
    file: { en: "london-3-days-en.pdf", nl: "londen-3-dagen-nl.pdf" },
    title: { en: "London in 3 days", nl: "Londen in 3 dagen" },
    description: {
      en: "Royal London, the Tower and the free museums hour by hour, with the two tickets worth booking.",
      nl: "Koninklijk Londen, de Tower en de gratis musea per uur, met de twee tickets die het boeken waard zijn.",
    },
  },
  {
    id: "barcelona-3-days",
    destinationId: "barcelona",
    pages: { en: 17, nl: 18 },
    price: { usd: 1500, eur: 1400 },
    file: { en: "barcelona-3-days-en.pdf", nl: "barcelona-3-dagen-nl.pdf" },
    title: { en: "Barcelona in 3 days", nl: "Barcelona in 3 dagen" },
    description: {
      en: "Gaudí in the right light, the old town and the beach, planned on local time around two time slots.",
      nl: "Gaudí in het juiste licht, de oude stad en het strand, gepland op Spaanse tijd rond twee tijdsloten.",
    },
  },
  {
    id: "new-york-4-days",
    destinationId: "new-york",
    pages: { en: 19, nl: 23 },
    price: { usd: 1700, eur: 1600 },
    file: { en: "new-york-4-days-en.pdf", nl: "new-york-4-dagen-nl.pdf" },
    title: { en: "New York in 4 days", nl: "New York in 4 dagen" },
    description: {
      en: "One part of the city each day, the three things to book ahead and the free views that beat the paid ones.",
      nl: "Elke dag één deel van de stad, de drie dingen die je vooraf boekt en de gratis uitzichten die de betaalde verslaan.",
    },
  },
  {
    id: "cancun-5-days",
    destinationId: "cancun",
    pages: { en: 18, nl: 18 },
    price: { usd: 1700, eur: 1600 },
    file: { en: "cancun-riviera-maya-5-days-en.pdf", nl: "cancun-riviera-maya-5-dagen-nl.pdf" },
    title: { en: "Cancún and the Riviera Maya in 5 days", nl: "Cancún en de Riviera Maya in 5 dagen" },
    description: {
      en: "Three beach days and two trips, from Cancún, Playa del Carmen or Tulum, with the tours worth booking.",
      nl: "Drie stranddagen en twee uitstapjes, vanuit Cancún, Playa del Carmen of Tulum, met de tours die het boeken waard zijn.",
    },
  },
  {
    id: "aruba-week",
    destinationId: "aruba",
    pages: { en: 19, nl: 18 },
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
