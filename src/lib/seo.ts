import { SITE_NAME, SITE_URL } from "@/i18n/config";

/** Publisher block, reused in every structured-data object so search engines see one entity. */
export const organization = {
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  url: SITE_URL,
};

/**
 * Search results show roughly 60 characters of a title. A long title drops the " | Brand"
 * suffix that the layout would add, so the part with the search phrase survives.
 */
export function seoTitle(title: string): string | { absolute: string } {
  return title.length + SITE_NAME.length + 3 > 60 ? { absolute: title } : title;
}
