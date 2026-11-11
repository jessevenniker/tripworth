import Link from "next/link";
import type { Article } from "@/data/articles";
import type { Destination } from "@/data/destinations";
import { localePath, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { Photo } from "./Photo";

export function articleHref(destination: Destination, article: Article, locale: Locale): string {
  return localePath(locale, `/${destination[locale]!.slug}/${article[locale]!.slug}`);
}

export function ArticleCard({
  article,
  destination,
  locale,
  className = "",
}: {
  article: Article;
  destination: Destination;
  locale: Locale;
  className?: string;
}) {
  const content = article[locale];
  if (!content || !destination[locale]) return null;
  const t = getDictionary(locale);

  return (
    <Link
      href={articleHref(destination, article, locale)}
      className={`photo-card reveal group flex flex-col overflow-hidden rounded-3xl border border-line bg-paper transition-shadow duration-300 hover:shadow-xl hover:shadow-night/10 ${className}`}
    >
      <span className="relative block aspect-[16/10] overflow-hidden">
        <Photo
          image={article.image}
          alt=""
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="h-full w-full object-cover"
        />
        <span className="absolute left-4 top-4 rounded-full bg-night/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white backdrop-blur-md">
          {t.pageTypes[article.type][0]}
        </span>
      </span>
      <span className="flex flex-1 flex-col p-5">
        <span className="font-display text-xl font-semibold leading-snug group-hover:text-coral">{content.title}</span>
        <span className="mt-2 text-sm text-muted">{content.description}</span>
        <span className="mt-auto pt-4 font-mono text-[11px] uppercase tracking-widest text-muted">
          {t.ui.minRead(article.readMinutes)}
        </span>
      </span>
    </Link>
  );
}
