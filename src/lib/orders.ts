import type Stripe from "stripe";
import { getProduct, type Product } from "@/data/products";
import { isLocale, type Locale } from "@/i18n/config";
import { createDownloadToken, DOWNLOAD_WINDOW_MS, MAX_DOWNLOADS } from "@/lib/download";

// There is no database yet, so the Stripe Checkout Session is the order record:
// its metadata holds the product, the language, the download counter and whether the email went out.

export type PaidOrder = {
  sessionId: string;
  product: Product;
  locale: Locale;
  email: string | null;
  /** Downloads end at this moment (7 days after payment). */
  expiresAt: number;
  downloads: number;
  emailed: boolean;
};

/** Reads the order from a Checkout Session. Returns null when it is unpaid, refunded or not one of our products. */
export function orderFromSession(session: Stripe.Checkout.Session): PaidOrder | null {
  const paid = session.payment_status === "paid" || session.payment_status === "no_payment_required";
  const product = getProduct(session.metadata?.productId ?? "");
  const locale = session.metadata?.locale ?? "";
  // The webhook sets refunded=true when the charge is refunded; that closes the downloads.
  if (!paid || !product || !isLocale(locale) || session.metadata?.refunded === "true") return null;
  return {
    sessionId: session.id,
    product,
    locale,
    email: session.customer_details?.email ?? null,
    expiresAt: session.created * 1000 + DOWNLOAD_WINDOW_MS,
    downloads: Number(session.metadata?.downloads ?? 0) || 0,
    emailed: session.metadata?.emailed === "true",
  };
}

export function downloadsLeft(order: PaidOrder): number {
  return order.expiresAt > Date.now() ? Math.max(0, MAX_DOWNLOADS - order.downloads) : 0;
}

export function downloadTokenFor(order: PaidOrder): string | null {
  if (order.expiresAt <= Date.now()) return null;
  return createDownloadToken(
    { productId: order.product.id, locale: order.locale, sessionId: order.sessionId },
    order.expiresAt,
  );
}

/**
 * Adds one to the download counter in the session metadata.
 * Two downloads at the very same moment can both read the old count; without a database that is accepted.
 */
export async function countDownload(stripe: Stripe, order: PaidOrder): Promise<void> {
  await stripe.checkout.sessions.update(order.sessionId, {
    metadata: { downloads: String(order.downloads + 1), lastDownloadAt: new Date().toISOString() },
  });
}

export async function markEmailed(stripe: Stripe, order: PaidOrder): Promise<void> {
  await stripe.checkout.sessions.update(order.sessionId, { metadata: { emailed: "true" } });
}

/** Closes the downloads of the order that was paid with this PaymentIntent. */
export async function markRefunded(stripe: Stripe, paymentIntentId: string): Promise<number> {
  const sessions = await stripe.checkout.sessions.list({ payment_intent: paymentIntentId, limit: 5 });
  for (const session of sessions.data) {
    await stripe.checkout.sessions.update(session.id, { metadata: { refunded: "true" } });
  }
  return sessions.data.length;
}
