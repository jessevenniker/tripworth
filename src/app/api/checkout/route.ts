import { NextResponse } from "next/server";
import { getProduct } from "@/data/products";
import { absoluteUrl, isLocale, localePath, localeSettings } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { getStripe } from "@/lib/stripe";

// Receives the "Buy guide" form and sends the buyer to Stripe Checkout.
export async function POST(request: Request) {
  const form = await request.formData();
  const productId = String(form.get("productId") ?? "");
  const locale = String(form.get("locale") ?? "");
  const product = getProduct(productId);
  if (!product || !isLocale(locale)) {
    return NextResponse.json({ error: "Unknown product or language" }, { status: 400 });
  }

  const stripe = getStripe();
  if (!stripe) {
    return new NextResponse(
      "Checkout is not configured yet. Add STRIPE_SECRET_KEY to .env.local (see .env.example).",
      { status: 503 },
    );
  }

  const { currency } = localeSettings[locale];
  const t = getDictionary(locale);
  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    locale,
    line_items: [
      {
        quantity: 1,
        price_data: {
          currency,
          unit_amount: product.price[currency],
          // "txcd_10302000" is Stripe's tax code for digital books.
          product_data: { name: product.title[locale], tax_code: "txcd_10302000" },
        },
      },
    ],
    automatic_tax: { enabled: process.env.STRIPE_TAX_ENABLED === "true" },
    // EU law needs express consent to lose the withdrawal right. With STRIPE_REQUIRE_TERMS=true Checkout shows a
    // required checkbox; that needs the terms URL set under Settings > Public details in the Stripe dashboard.
    ...(process.env.STRIPE_REQUIRE_TERMS === "true"
      ? {
          consent_collection: { terms_of_service: "required" as const },
          custom_text: {
            terms_of_service_acceptance: {
              message: `${t.guides.waiver} [${t.legal.terms}](${absoluteUrl(localePath(locale, "/terms"))})`,
            },
          },
        }
      : { custom_text: { submit: { message: t.guides.waiver } } }),
    metadata: { productId: product.id, locale },
    success_url: `${absoluteUrl(localePath(locale, "/guides/thanks"))}?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: absoluteUrl(localePath(locale, "/guides")),
  });

  return NextResponse.redirect(session.url!, 303);
}
