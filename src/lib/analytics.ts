/**
 * Class names for Plausible's "tagged events": a click on an element with these classes
 * is recorded as an "Affiliate Click" event with partner, destination and article as properties.
 * Needs the tagged-events variant of the Plausible script (see components/Analytics.tsx).
 */
export function affiliateEventClass(partner: string, destinationId: string, articleId: string): string {
  const value = (text: string) => text.replace(/\s+/g, "+");
  return [
    "plausible-event-name=Affiliate+Click",
    `plausible-event-partner=${value(partner)}`,
    `plausible-event-destination=${value(destinationId)}`,
    `plausible-event-article=${value(articleId)}`,
  ].join(" ");
}
