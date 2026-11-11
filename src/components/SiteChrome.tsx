import Link from "next/link";
import { localePath, SITE_NAME, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

export function PlaneIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
    </svg>
  );
}

export function Header({
  locale,
  switchHref,
  tone = "light",
  overlay = false,
}: {
  /** Float the header over a photo hero instead of taking up its own row. */
  overlay?: boolean;
  locale: Locale;
  /** Same page in the other language; omitted when no translation exists. */
  switchHref?: string;
  tone?: "light" | "dark";
}) {
  const t = getDictionary(locale);
  const text = tone === "dark" ? "text-white" : "text-ink";
  return (
    <header className={`z-20 ${overlay ? "absolute inset-x-0 top-0" : "relative"} ${text}`}>
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-5">
        <Link href={localePath(locale, "/")} className="flex items-center gap-2 font-display text-xl font-semibold">
          <PlaneIcon className="h-5 w-5 rotate-45 text-coral" />
          {SITE_NAME}
        </Link>
        <nav className="flex items-center gap-4 text-sm font-medium sm:gap-5">
          <Link href={`${localePath(locale, "/")}#destinations`} className="hidden hover:underline sm:inline">
            {t.nav.destinations}
          </Link>
          <Link href={localePath(locale, "/guides")} className="hover:underline">
            {t.nav.guides}
          </Link>
          {switchHref && (
            // A plain link on purpose: switching language reloads the page so <html lang> changes with it.
            <a
              href={switchHref}
              hrefLang={locale === "en" ? "nl" : "en"}
              className="rounded-full border border-current/30 px-3 py-1 hover:bg-current/10"
            >
              {t.switcher.label}
            </a>
          )}
        </nav>
      </div>
    </header>
  );
}

export function Footer({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  return (
    <footer className="mt-auto border-t border-line bg-paper">
      <div className="mx-auto max-w-6xl px-5 py-8 text-sm text-muted">
        <p className="max-w-2xl">{t.footer.disclosure}</p>
        <p className="mt-3 flex flex-wrap gap-x-5 gap-y-1">
          <span>
            © {SITE_NAME}. {t.footer.rights}
          </span>
          <Link href={localePath(locale, "/credits")} className="hover:underline">
            {t.ui.credits}
          </Link>
        </p>
      </div>
    </footer>
  );
}
