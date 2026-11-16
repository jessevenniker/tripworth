import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { Footer, Header } from "@/components/SiteChrome";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { downloadsLeft, downloadTokenFor, orderFromSession } from "@/lib/orders";
import { getStripe } from "@/lib/stripe";

type Props = {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ session_id?: string }>;
};

export const metadata: Metadata = { robots: { index: false } };

/** Checks the payment with Stripe and, when paid, shows the download link. */
async function OrderResult({ locale, searchParams }: { locale: Locale; searchParams: Props["searchParams"] }) {
  const t = getDictionary(locale);
  const { session_id: sessionId } = await searchParams;
  const stripe = getStripe();

  if (!stripe) return <p className="text-muted">{t.thanks.unavailable}</p>;
  if (!sessionId) return <p className="text-muted">{t.thanks.missing}</p>;

  let session;
  try {
    session = await stripe.checkout.sessions.retrieve(sessionId);
  } catch {
    return <p className="text-muted">{t.thanks.missing}</p>;
  }
  if (session.payment_status === "unpaid") return <p className="text-muted">{t.thanks.unpaid}</p>;

  // The link in the confirmation email also lands here, so this page works for the whole download period.
  const order = orderFromSession(session);
  if (!order) return <p className="text-muted">{t.thanks.missing}</p>;
  const product = order.product;
  const left = downloadsLeft(order);
  const token = left > 0 ? downloadTokenFor(order) : null;
  if (!token) {
    return (
      <>
        <h1 className="font-display text-4xl font-semibold sm:text-5xl">{product.title[locale]}</h1>
        <p className="mt-4 text-lg text-muted">{t.thanks.used}</p>
      </>
    );
  }

  return (
    <>
      <h1 className="font-display text-4xl font-semibold sm:text-5xl">{t.thanks.title}</h1>
      <p className="mt-4 text-lg text-muted">{product.title[locale]}</p>
      <a
        href={`/api/download?token=${encodeURIComponent(token)}`}
        className="mt-8 inline-flex rounded-full bg-coral px-6 py-3 font-medium text-white transition-colors hover:bg-[#f2573a]"
      >
        {t.thanks.download}
      </a>
      <p className="mt-3 text-sm text-muted">
        {t.thanks.expires} {t.thanks.left.replace("{count}", String(left))}
      </p>
      {order.email ? <p className="mt-1 text-sm text-muted">{t.thanks.emailed.replace("{email}", order.email)}</p> : null}
    </>
  );
}

export default async function ThanksPage({ params, searchParams }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <>
      <div className="bg-night">
        <Header locale={locale} tone="dark" />
      </div>
      <main className="mx-auto w-full max-w-3xl px-5 py-16">
        <Suspense>
          <OrderResult locale={locale} searchParams={searchParams} />
        </Suspense>
      </main>
      <Footer locale={locale} />
    </>
  );
}
