import type { MetadataRoute } from "next";
import { SITE_URL } from "@/i18n/config";

// Everything is open to search engines and AI crawlers, except the API.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: "/api/" }],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
