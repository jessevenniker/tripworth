import Script from "next/script";

// Plausible: cookieless statistics, so no consent banner is needed.
// Only loads when NEXT_PUBLIC_PLAUSIBLE_DOMAIN is set (it is empty in development).
// The "outbound-links" variant counts every click to another site; "tagged-events" turns the
// plausible-event-* classes on booking links into "Affiliate Click" events (see lib/analytics.ts).
const domain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;
const src = process.env.NEXT_PUBLIC_PLAUSIBLE_SRC || "https://plausible.io/js/script.outbound-links.tagged-events.js";

export function Analytics() {
  if (!domain) return null;
  return <Script defer data-domain={domain} src={src} strategy="afterInteractive" />;
}
