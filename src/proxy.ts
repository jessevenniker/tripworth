import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { defaultLocale, isLocale, localizedSegments, type Locale } from "@/i18n/config";

/** Translate public segments ("gidsen") back to internal ones ("guides"). */
function toInternal(locale: Locale, segments: string[]): string[] {
  return segments.map((segment) => {
    const match = Object.entries(localizedSegments).find(([, names]) => names[locale] === segment);
    return match ? match[0] : segment;
  });
}

// English is served from the root ("/rome"), Dutch from "/nl" ("/nl/rome").
// Internally every page lives under app/[locale].
export function proxy(request: NextRequest) {
  const url = request.nextUrl.clone();
  const segments = url.pathname.split("/").filter(Boolean);
  const first = segments[0];

  // "/en/rome" is a duplicate of "/rome": redirect to the canonical URL.
  if (first === defaultLocale) {
    url.pathname = `/${segments.slice(1).join("/")}`;
    return NextResponse.redirect(url, 308);
  }

  const locale = first && isLocale(first) ? first : defaultLocale;
  const rest = locale === first ? segments.slice(1) : segments;
  url.pathname = `/${[locale, ...toInternal(locale, rest)].join("/")}`;
  return NextResponse.rewrite(url);
}

export const config = {
  // Skip API routes, Next internals and files (sitemap.xml, robots.txt, images).
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
