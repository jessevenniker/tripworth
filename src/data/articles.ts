import type { Locale } from "@/i18n/config";
import { bookingPicks, type Partner } from "./bookings";
import type { ImageKey } from "./images";
import { arubaArticles } from "./articles/aruba";
import { barcelonaArticles } from "./articles/barcelona";
import { cancunArticles } from "./articles/cancun";
import { londonArticles } from "./articles/london";
import { newYorkArticles } from "./articles/new-york";
import { parisArticles } from "./articles/paris";
import { romeArticles } from "./articles/rome";

export type ArticleType =
  | "tickets"
  | "comparisons"
  | "worthIt"
  | "itineraries"
  | "hiddenGems"
  | "practical"
  | "shoreExcursions";

export const articleTypeOrder: ArticleType[] = [
  "tickets",
  "comparisons",
  "worthIt",
  "itineraries",
  "hiddenGems",
  "practical",
  "shoreExcursions",
];

export type ArticleSection = {
  heading: string;
  paragraphs?: string[];
  /** "Lead: rest" renders the lead in bold. */
  bullets?: string[];
};

export type ArticleContent = {
  slug: string;
  title: string;
  /** Meta description and card text. */
  description: string;
  /** Answer-first block: two or three sentences that stand on their own. */
  answer: string;
  facts: [label: string, value: string][];
  sections: ArticleSection[];
  tip?: string;
  faq: [question: string, answer: string][];
};

export type Article = {
  id: string;
  destinationId: string;
  type: ArticleType;
  image: ImageKey;
  readMinutes: number;
  /** ISO month the content was written. Prices and hours must be re-checked before launch. */
  updated: string;
  /** Search phrase for the booking partners; omitted when there is nothing to book. */
  bookingQuery?: string;
  en: ArticleContent;
  nl?: ArticleContent;
};

export const articles: Article[] = [...romeArticles, ...arubaArticles, ...parisArticles, ...cancunArticles, ...londonArticles, ...barcelonaArticles, ...newYorkArticles];

export function articlesFor(destinationId: string, locale: Locale): Article[] {
  return articles.filter((article) => article.destinationId === destinationId && article[locale]);
}

export function getArticleBySlug(destinationId: string, locale: Locale, slug: string): Article | undefined {
  return articles.find((article) => article.destinationId === destinationId && article[locale]?.slug === slug);
}

// Affiliate IDs and campaign codes, as they appear in the partner links.
const VIATOR_PARTNER_ID = process.env.VIATOR_PARTNER_ID || "P00219714";
const VIATOR_CAMPAIGN = "42383";
const GYG_PARTNER_ID = process.env.GYG_PARTNER_ID || "9QMIGTL";
const GYG_CAMPAIGN = "share_to_earn";

/** Outbound booking links, each carrying our partner ID. */
export function bookingLinks(query: string): { partner: string; url: string }[] {
  const q = encodeURIComponent(query);
  return [
    {
      partner: "Viator",
      url: `https://www.viator.com/searchResults/all?text=${q}&pid=${VIATOR_PARTNER_ID}&mcid=${VIATOR_CAMPAIGN}&medium=link`,
    },
    { partner: "GetYourGuide", url: `https://www.getyourguide.com/s/?q=${q}&partner_id=${GYG_PARTNER_ID}&cmp=${GYG_CAMPAIGN}` },
  ];
}

/** Adds our partner ID (and the article as campaign, for per-article reporting) to a partner URL. */
function withTracking(partner: Partner, rawUrl: string, campaign: string): string {
  const url = new URL(rawUrl);
  if (partner === "Viator") {
    url.searchParams.set("pid", VIATOR_PARTNER_ID);
    url.searchParams.set("mcid", VIATOR_CAMPAIGN);
    url.searchParams.set("medium", "link");
    url.searchParams.set("campaign", campaign);
  } else {
    url.searchParams.set("partner_id", GYG_PARTNER_ID);
    url.searchParams.set("cmp", GYG_CAMPAIGN);
  }
  return url.toString();
}

/**
 * Dutch visitors get GetYourGuide's Dutch site (language and euro prices).
 * Viator stays on its default site: its Dutch URL variant could not be verified.
 */
function localizePartnerUrl(partner: Partner, rawUrl: string, locale: Locale): string {
  if (locale !== "nl" || partner !== "GetYourGuide") return rawUrl;
  const url = new URL(rawUrl);
  url.pathname = `/nl-nl${url.pathname}`;
  return url.toString();
}

export type BookingLink = { partner: Partner; title?: string; url: string };

/**
 * Booking links for an article: the specific tours picked in bookings.ts,
 * or the partner search for the article's bookingQuery when nothing is picked yet.
 */
export function articleBookingLinks(article: Article, locale: Locale): BookingLink[] {
  const picks = bookingPicks[article.id];
  if (picks?.length) {
    return picks.map((pick) => ({
      partner: pick.partner,
      title: pick.title,
      url: withTracking(pick.partner, localizePartnerUrl(pick.partner, pick.url, locale), article.id),
    }));
  }
  return article.bookingQuery
    ? bookingLinks(article.bookingQuery).map((link) => ({ ...link, partner: link.partner as Partner }))
    : [];
}
