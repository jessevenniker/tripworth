import Stripe from "stripe";

let client: Stripe | null = null;

/** Returns null while STRIPE_SECRET_KEY is not set, so pages can degrade gracefully. */
export function getStripe(): Stripe | null {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) return null;
  client ??= new Stripe(key);
  return client;
}
