import Link from "next/link";
import { articlesFor } from "@/data/articles";
import type { Destination } from "@/data/destinations";
import { localePath, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { Photo } from "./Photo";

export function formatCoords(lat: number, lng: number) {
  const ns = lat >= 0 ? "N" : "S";
  const ew = lng >= 0 ? "E" : "W";
  return `${Math.abs(lat).toFixed(2)}° ${ns}  ${Math.abs(lng).toFixed(2)}° ${ew}`;
}

export function DestinationCard({
  destination,
  locale,
  size = "regular",
  className = "",
}: {
  destination: Destination;
  locale: Locale;
  /** "large" is the lead card of a region and spans two columns and rows. */
  size?: "regular" | "large";
  className?: string;
}) {
  const content = destination[locale];
  if (!content) return null;
  const t = getDictionary(locale);
  const articleCount = articlesFor(destination.id, locale).length;
  const large = size === "large";

  return (
    <Link
      href={localePath(locale, `/${content.slug}`)}
      className={`photo-card reveal group relative flex flex-col justify-between overflow-hidden rounded-[28px] bg-night p-5 text-white shadow-xl shadow-night/15 ${
        large ? "min-h-[420px] sm:col-span-2 lg:row-span-2 sm:p-7" : "min-h-[320px]"
      } ${className}`}
    >
      <Photo
        image={destination.id}
        alt={content.name}
        sizes={large ? "(min-width: 1024px) 50vw, 100vw" : "(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-night/90 via-night/20 to-night/30" />

      <span className="relative flex items-start justify-between gap-3">
        <span className="rounded-full bg-white/15 px-3 py-1 font-mono text-[11px] tracking-widest backdrop-blur-md">
          {destination.code}
        </span>
        {articleCount > 0 && (
          <span className="rounded-full bg-coral px-3 py-1 text-[11px] font-semibold">{t.ui.articles(articleCount)}</span>
        )}
      </span>

      <span className="relative">
        <span className="block text-xs font-medium uppercase tracking-[0.18em] text-white/80">{content.country}</span>
        <span className={`mt-1 block font-display font-semibold leading-[1.05] ${large ? "text-5xl sm:text-6xl" : "text-3xl"}`}>
          {content.name}
        </span>
        <span className={`mt-2 block leading-snug text-white/90 ${large ? "max-w-md text-base" : "text-sm"}`}>
          {content.tagline}
        </span>
        <span className="mt-4 flex items-center gap-2 text-sm font-medium">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-white text-night transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
          <span className="opacity-0 transition-opacity duration-300 group-hover:opacity-100">{t.ui.explore}</span>
        </span>
      </span>
    </Link>
  );
}
