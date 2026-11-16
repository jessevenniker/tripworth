import type { MetadataRoute } from "next";
import { SITE_URL } from "@/i18n/config";

// Crawlers of AI assistants and answer engines. They are covered by the "*" rule too;
// naming them makes it explicit that we want to be read and cited.
const aiCrawlers = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-SearchBot",
  "Claude-User",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot-Extended",
  "CCBot",
];

// Open to search engines and AI crawlers (except the API) once ALLOW_INDEXING=true.
// Until the real domain is live, everything is blocked so the temporary vercel.app address
// does not get indexed as a duplicate of the real site.
export default function robots(): MetadataRoute.Robots {
  if (process.env.ALLOW_INDEXING !== "true") {
    return { rules: [{ userAgent: "*", disallow: "/" }] };
  }
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: "/api/" },
      { userAgent: aiCrawlers, allow: "/", disallow: "/api/" },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
