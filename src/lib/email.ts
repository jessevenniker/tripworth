import { absoluteUrl, formatPrice, localePath, SITE_NAME, type Locale } from "@/i18n/config";
import { MAX_DOWNLOADS } from "@/lib/download";
import type { PaidOrder } from "@/lib/orders";

// Transactional email through Resend's HTTP API (no SDK needed).
// Without RESEND_API_KEY and EMAIL_FROM nothing is sent and the buyer only gets the link on the thank-you page.

const copy: Record<Locale, { subject: (title: string) => string; intro: string; button: string; terms: string; help: string }> = {
  en: {
    subject: (title) => `Your guide: ${title}`,
    intro: "Thank you for your order. Your guide is ready to download.",
    button: "Download your guide",
    terms: `The link works for 7 days and for ${MAX_DOWNLOADS} downloads. Save the PDF on your phone before you travel.`,
    help: "Something not working? Reply to this email and we will help.",
  },
  nl: {
    subject: (title) => `Je gids: ${title}`,
    intro: "Bedankt voor je bestelling. Je gids staat klaar om te downloaden.",
    button: "Download je gids",
    terms: `De link werkt 7 dagen en voor ${MAX_DOWNLOADS} downloads. Sla de pdf voor vertrek op je telefoon op.`,
    help: "Lukt er iets niet? Beantwoord deze e-mail en we helpen je.",
  },
};

export function emailConfigured(): boolean {
  return Boolean(process.env.RESEND_API_KEY && process.env.EMAIL_FROM);
}

/**
 * Emails the buyer a link to the thank-you page of their order, which shows the download button.
 * The link goes to that page and not straight to the file, so mail scanners that open links do not use up downloads.
 * Returns "skipped" when email is not configured or the order has no address; throws when Resend refuses.
 */
export async function sendDownloadEmail(order: PaidOrder, amountTotal: number | null): Promise<"sent" | "skipped"> {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.EMAIL_FROM;
  if (!apiKey || !from || !order.email) return "skipped";

  const t = copy[order.locale];
  const title = order.product.title[order.locale];
  const link = `${absoluteUrl(localePath(order.locale, "/guides/thanks"))}?session_id=${encodeURIComponent(order.sessionId)}`;
  const price = amountTotal === null ? "" : ` · ${formatPrice(order.locale, amountTotal)}`;

  const text = [t.intro, "", `${title}${price}`, "", `${t.button}: ${link}`, "", t.terms, t.help, "", SITE_NAME].join("\n");
  const html = `<!doctype html><html lang="${order.locale}"><body style="margin:0;background:#f6efe4;font-family:Helvetica,Arial,sans-serif;color:#14212e">
<div style="max-width:520px;margin:0 auto;padding:32px 20px">
<p style="margin:0 0 24px;font-size:13px;letter-spacing:3px;text-transform:uppercase;font-weight:bold;color:#0b1b2b">${SITE_NAME}</p>
<div style="background:#fffaf2;border:1px solid #e4d9c8;border-radius:16px;padding:28px">
<p style="margin:0 0 12px;font-size:16px;line-height:1.5">${t.intro}</p>
<p style="margin:0 0 24px;font-family:Georgia,serif;font-size:26px;line-height:1.2;font-weight:bold;color:#0b1b2b">${title}<span style="font-family:Helvetica,Arial,sans-serif;font-size:14px;font-weight:normal;color:#5b6875">${price}</span></p>
<p style="margin:0 0 24px"><a href="${link}" style="display:inline-block;background:#ff6b4a;color:#ffffff;text-decoration:none;font-weight:bold;font-size:16px;padding:14px 26px;border-radius:999px">${t.button}</a></p>
<p style="margin:0 0 8px;font-size:14px;line-height:1.5;color:#5b6875">${t.terms}</p>
<p style="margin:0;font-size:14px;line-height:1.5;color:#5b6875">${t.help}</p>
</div></div></body></html>`;

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
      // Resend drops a second request with the same key, so a webhook retry cannot send the mail twice.
      "Idempotency-Key": `guide-download/${order.sessionId}`,
    },
    body: JSON.stringify({
      from,
      to: [order.email],
      subject: t.subject(title),
      text,
      html,
      ...(process.env.EMAIL_REPLY_TO ? { reply_to: process.env.EMAIL_REPLY_TO } : {}),
    }),
  });
  if (!response.ok) {
    throw new Error(`Resend answered ${response.status}: ${(await response.text()).slice(0, 300)}`);
  }
  return "sent";
}
