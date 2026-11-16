import { NextResponse } from "next/server";
import type Stripe from "stripe";
import { sendDownloadEmail } from "@/lib/email";
import { markEmailed, markRefunded, orderFromSession } from "@/lib/orders";
import { getStripe } from "@/lib/stripe";

// Stripe calls this after a payment. The signature proves the call is from Stripe.
// There is no database yet: the Checkout Session itself is the order record (see src/lib/orders.ts).
export async function POST(request: Request) {
  const stripe = getStripe();
  const secret = process.env.STRIPE_WEBHOOK_SECRET;
  const signature = request.headers.get("stripe-signature");
  if (!stripe || !secret || !signature) {
    return NextResponse.json({ error: "Webhook is not configured" }, { status: 503 });
  }

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(await request.text(), signature, secret);
  } catch {
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  // "completed" covers cards, iDEAL and wallets. Delayed methods (such as SEPA debit) complete unpaid
  // and report the money later through "async_payment_succeeded".
  if (event.type === "checkout.session.completed" || event.type === "checkout.session.async_payment_succeeded") {
    // Read the session again: the event may be a retry, and the metadata tells us whether the mail already went out.
    const session = await stripe.checkout.sessions.retrieve(event.data.object.id);
    const order = orderFromSession(session);
    if (!order) return NextResponse.json({ received: true, order: "not paid yet or unknown product" });

    if (!order.emailed) {
      try {
        const result = await sendDownloadEmail(order, session.amount_total);
        if (result === "sent") await markEmailed(stripe, order);
        console.log("Order paid", { sessionId: order.sessionId, productId: order.product.id, locale: order.locale, email: result });
      } catch (error) {
        // A 500 makes Stripe retry later. The buyer already has the link on the thank-you page.
        console.error("Download email failed", { sessionId: order.sessionId, error });
        return NextResponse.json({ error: "Email could not be sent" }, { status: 500 });
      }
    }
  }

  // A full refund ends the right to download.
  if (event.type === "charge.refunded") {
    const charge = event.data.object;
    const paymentIntent = typeof charge.payment_intent === "string" ? charge.payment_intent : charge.payment_intent?.id;
    if (charge.refunded && paymentIntent) {
      const closed = await markRefunded(stripe, paymentIntent);
      console.log("Order refunded", { paymentIntent, sessionsClosed: closed });
    }
  }

  return NextResponse.json({ received: true });
}
