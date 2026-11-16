import { NextResponse } from "next/server";
import { getProduct } from "@/data/products";
import { MAX_DOWNLOADS, verifyDownloadToken } from "@/lib/download";
import { readGuide } from "@/lib/guide-storage";
import { countDownload, downloadsLeft, orderFromSession } from "@/lib/orders";
import { getStripe } from "@/lib/stripe";

const messages = {
  en: {
    invalid: "This download link is invalid or has expired.",
    limit: `This guide has already been downloaded ${MAX_DOWNLOADS} times. Reply to your order email and we will send a new link.`,
    missing: "This guide is not available right now. Please try again later.",
  },
  nl: {
    invalid: "Deze downloadlink is ongeldig of verlopen.",
    limit: `Deze gids is al ${MAX_DOWNLOADS} keer gedownload. Beantwoord de e-mail van je bestelling en we sturen een nieuwe link.`,
    missing: "Deze gids is nu niet beschikbaar. Probeer het later opnieuw.",
  },
};

function refuse(message: string, status: number) {
  return new NextResponse(message, { status, headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "no-store" } });
}

// Serves a purchased PDF. Needs a valid signed token; the order it belongs to may be downloaded 5 times in 7 days.
export async function GET(request: Request) {
  const token = new URL(request.url).searchParams.get("token") ?? "";
  const grant = verifyDownloadToken(token);
  const product = grant && getProduct(grant.productId);
  if (!grant || !product) return refuse(messages.en.invalid, 403);
  const t = messages[grant.locale];

  const stripe = getStripe();
  if (!stripe) return refuse(t.missing, 503);

  let order;
  try {
    order = orderFromSession(await stripe.checkout.sessions.retrieve(grant.sessionId));
  } catch {
    order = null;
  }
  // Unpaid and refunded orders come back as null.
  if (!order || order.product.id !== product.id) return refuse(t.invalid, 403);
  if (downloadsLeft(order) < 1) return refuse(order.expiresAt > Date.now() ? t.limit : t.invalid, 403);

  const fileName = product.file[grant.locale];
  const file = await readGuide(fileName);
  if (!file) {
    console.error("Guide file missing from storage", { fileName });
    return refuse(t.missing, 404);
  }

  await countDownload(stripe, order);
  return new NextResponse(file, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="${fileName}"`,
      "Cache-Control": "private, no-store",
    },
  });
}
