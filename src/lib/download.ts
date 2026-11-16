import { createHmac, timingSafeEqual } from "node:crypto";
import { isLocale, type Locale } from "@/i18n/config";

/** A purchase can be downloaded for this long after payment... */
export const DOWNLOAD_WINDOW_MS = 7 * 24 * 60 * 60 * 1000;
/** ...and this many times (BOUWPLAN.md section 7). */
export const MAX_DOWNLOADS = 5;

export type DownloadGrant = { productId: string; locale: Locale; sessionId: string };

function sign(payload: string): string | null {
  const secret = process.env.DOWNLOAD_SECRET;
  if (!secret) return null;
  return createHmac("sha256", secret).update(payload).digest("base64url");
}

/**
 * Signed token that grants access to one product file until `expiresAt`.
 * It carries the Stripe Checkout Session id so the download route can count downloads on that order.
 */
export function createDownloadToken(grant: DownloadGrant, expiresAt: number): string | null {
  const payload = [grant.productId, grant.locale, expiresAt, grant.sessionId].join(".");
  const signature = sign(payload);
  return signature ? `${Buffer.from(payload).toString("base64url")}.${signature}` : null;
}

export function verifyDownloadToken(token: string): DownloadGrant | null {
  const [encoded, signature] = token.split(".");
  if (!encoded || !signature) return null;
  const payload = Buffer.from(encoded, "base64url").toString();
  const expected = sign(payload);
  if (!expected) return null;
  const a = Buffer.from(signature);
  const b = Buffer.from(expected);
  if (a.length !== b.length || !timingSafeEqual(a, b)) return null;

  const [productId, locale, expires, sessionId] = payload.split(".");
  if (!productId || !sessionId || !isLocale(locale) || !(Number(expires) > Date.now())) return null;
  return { productId, locale, sessionId };
}
