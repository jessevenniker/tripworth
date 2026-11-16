import type { MetadataRoute } from "next";
import { articles, articlesFor } from "@/data/articles";
import { destinations } from "@/data/destinations";
import { absoluteUrl, locales, localePath } from "@/i18n/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const internalPath of ["/", "/guides", "/privacy", "/terms"]) {
    const languages = Object.fromEntries(locales.map((l) => [l, absoluteUrl(localePath(l, internalPath))]));
    for (const locale of locales) {
      entries.push({ url: languages[locale], alternates: { languages } });
    }
  }

  for (const destination of destinations) {
    const languages: Record<string, string> = {};
    for (const locale of locales) {
      const content = destination[locale];
      // Hubs without articles are noindex placeholders, so they stay out of the sitemap.
      if (content && articlesFor(destination.id, locale).length > 0) {
        languages[locale] = absoluteUrl(localePath(locale, `/${content.slug}`));
      }
    }
    for (const url of Object.values(languages)) {
      entries.push({ url, alternates: { languages } });
    }
  }

  for (const article of articles) {
    const destination = destinations.find((d) => d.id === article.destinationId);
    const languages: Record<string, string> = {};
    for (const locale of locales) {
      const content = article[locale];
      const destinationContent = destination?.[locale];
      if (content && destinationContent) {
        languages[locale] = absoluteUrl(localePath(locale, `/${destinationContent.slug}/${content.slug}`));
      }
    }
    for (const url of Object.values(languages)) {
      entries.push({ url, alternates: { languages } });
    }
  }

  return entries;
}
