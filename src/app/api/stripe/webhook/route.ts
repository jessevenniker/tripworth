import { NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe";

// Stripe calls this after a payment. The signature proves the call is from Stripe.
export async function POST(request: Request) {
  const stripe = getStripe();
  const secret = process.env.STRIPE_WEBHOOK_SECRET;
  const signature = request.headers.get("stripe-signature");
  if (!stripe || !secret || !signature) {
    return NextResponse.json({ error: "Webhook is not configured" }, { status: 503 });
  }

  let event;
  try {
    event = stripe.webhooks.constructEvent(await request.text(), signature, secret);
  } catch {
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;
    // TODO: store the order in the database and email the download link.
    // Until then the buyer gets the link on the thank-you page.
    console.log("Order paid", {
      sessionId: session.id,
      productId: session.metadata?.productId,
      locale: session.metadata?.locale,
      email: session.customer_details?.email,
    });
  }

  return NextResponse.json({ received: true });
}
