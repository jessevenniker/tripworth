import { createHmac, timingSafeEqual } from "node:crypto";
import { isLocale, type Locale } from "@/i18n/config";

const SEVEN_DAYS_MS = 7 * 24 * 60 * 60 * 1000;

function sign(payload: string): string | null {
  const secret = process.env.DOWNLOAD_SECRET;
  if (!secret) return null;
  return createHmac("sha256", secret).update(payload).digest("base64url");
}

/** Signed, expiring token that grants access to one product file. */
export function createDownloadToken(productId: string, locale: Locale): string | null {
  const payload = `${productId}.${locale}.${Date.now() + SEVEN_DAYS_MS}`;
  const signature = sign(payload);
  return signature ? `${Buffer.from(payload).toString("base64url")}.${signature}` : null;
}

export function verifyDownloadToken(token: string): { productId: string; locale: Locale } | null {
  const [encoded, signature] = token.split(".");
  if (!encoded || !signature) return null;
  const payload = Buffer.from(encoded, "base64url").toString();
  const expected = sign(payload);
  if (!expected) return null;
  const a = Buffer.from(signature);
  const b = Buffer.from(expected);
  if (a.length !== b.length || !timingSafeEqual(a, b)) return null;

  const [productId, locale, expires] = payload.split(".");
  if (!productId || !isLocale(locale) || Number(expires) < Date.now()) return null;
  return { productId, locale };
}
