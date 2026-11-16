# Stripe: what is left before we sell for real

Checklist for the PDF sales from `BOUWPLAN.md` section 7. The code is finished as far as it can be without a
database; what remains is mostly account setup, settings in dashboards and one round of test purchases.

Status on 16 November 2026: nothing below has been tested against Stripe yet, because no `.env.local` with
test keys existed when the code was written. Section 7 is the test script.

## How it works now

| Step | Where | Notes |
|---|---|---|
| Buy button | `src/app/[locale]/guides/page.tsx` | Posts product id and language to the checkout route |
| Checkout | `src/app/api/checkout/route.ts` | Stripe Checkout in the buyer's language; USD on the English site, EUR on the Dutch site, each with its own price from `src/data/products.ts` |
| Order record | Stripe Checkout Session | There is no database. The session metadata holds `productId`, `locale`, `downloads`, `lastDownloadAt`, `emailed` and `refunded` (`src/lib/orders.ts`) |
| Thank-you page | `src/app/[locale]/guides/thanks/page.tsx` | Checks the payment with Stripe and shows the download button and the downloads left |
| Webhook | `src/app/api/stripe/webhook/route.ts` | On `checkout.session.completed` and `checkout.session.async_payment_succeeded`: emails the link through Resend. On `charge.refunded`: closes the downloads |
| Email | `src/lib/email.ts` | Links to the thank-you page of the order, not straight to the file, so mail scanners do not use up downloads |
| Download | `src/app/api/download/route.ts` | Signed token, valid until 7 days after payment, at most 5 downloads per order |
| Files | `src/lib/guide-storage.ts` | Private Vercel Blob store in production, `private/pdfs` locally |

## 1. Stripe account

- [ ] Decide open point 4 in `BOUWPLAN.md`: Stripe yourself, or a merchant of record (Lemon Squeezy, Paddle). This list assumes Stripe.
- [ ] Decide open point 5: legal form and country. Stripe needs it to activate the account, and it decides which tax registrations apply.
- [ ] Create the Stripe account and complete activation: business details, bank account for payouts, identity check.
- [ ] Settings > Business > Public details: business name "Tripsworth", support email, website, and a statement descriptor buyers will recognise (for example `TRIPSWORTH GUIDE`).
- [ ] Settings > Branding: logo, coral `#ff6b4a` as accent colour, so Checkout matches the site.
- [ ] Fill in `src/data/company.ts` (legal name, address, Chamber of Commerce and VAT number). The terms and privacy pages show placeholders until then.
- [ ] Turn on two-step verification for every team member.

## 2. Keys and environment variables

Set these in Vercel (Project > Settings > Environment Variables) for Production, and the test versions for Preview and in `.env.local`.

| Variable | Value | Needed for |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | `https://<domain>` without trailing slash | Return URLs and the link in the email |
| `STRIPE_SECRET_KEY` | `sk_live_...` (Production), `sk_test_...` (Preview, local) | Checkout, thank-you page, download counter |
| `STRIPE_WEBHOOK_SECRET` | `whsec_...` of the endpoint in section 3 | Webhook signature |
| `STRIPE_TAX_ENABLED` | `true` after section 4 | Tax calculation in Checkout |
| `STRIPE_REQUIRE_TERMS` | `true` after section 5 | Required consent checkbox |
| `DOWNLOAD_SECRET` | `openssl rand -base64 32`, different per environment | Signs download links |
| `BLOB_READ_WRITE_TOKEN` | Set by Vercel when the Blob store is connected | PDF storage (section 6) |
| `RESEND_API_KEY`, `EMAIL_FROM`, `EMAIL_REPLY_TO` | See section 8 | Download email |

- [ ] Prefer a restricted live key over the full secret key: Checkout Sessions (write) is the only permission the site needs. Refunds are done by hand in the dashboard.
- [ ] Never put a live key in `.env.local` or in a Preview deployment.
- [ ] Redeploy after changing variables: Vercel only applies them to new deployments.

## 3. Webhook endpoint

- [ ] Developers > Webhooks > Add endpoint: `https://<domain>/api/stripe/webhook` (live mode).
- [ ] Select exactly these events: `checkout.session.completed`, `checkout.session.async_payment_succeeded`, `charge.refunded`.
- [ ] Copy the signing secret (`whsec_...`) into `STRIPE_WEBHOOK_SECRET` in Vercel and redeploy.
- [ ] Add a second endpoint in test mode for the Preview environment, with its own secret.
- [ ] Locally: `stripe listen --forward-to localhost:3000/api/stripe/webhook` prints a temporary secret for `.env.local`.
- [ ] Check after the first live sale that the endpoint shows a 200 response in the dashboard.

Behaviour to know: when Resend refuses the email, the webhook answers 500 on purpose so Stripe retries for up to three days. The buyer has the link on the thank-you page in the meantime.

## 4. Tax: Stripe Tax, EU OSS and US sales tax

The checkout already sends tax code `txcd_10302000` (digital books) and switches automatic tax on with `STRIPE_TAX_ENABLED=true`.

- [ ] Settings > Tax: activate Stripe Tax, set the origin address, and set the default tax behaviour for prices.
- [ ] Decide whether prices include tax. The site shows €14 and $15 as the price to pay. For the EU, consumer prices must include VAT, so set EUR to **inclusive**. For the US, sales tax is normally added on top, so set USD to **exclusive**. The checkout uses inline `price_data` without `tax_behavior`, so it follows the account default: if one default does not fit both currencies, add `tax_behavior` per currency in `src/app/api/checkout/route.ts`.
- [ ] **EU, One-Stop Shop.** E-books sold to consumers are taxed at the VAT rate of the buyer's country. Below €10,000 a year in cross-border EU sales of digital services, a Dutch business may charge Dutch VAT instead; above it, register for the Union OSS scheme with the Belastingdienst and file the quarterly OSS return. Add the home-country and OSS registrations under Tax > Registrations so Stripe collects the right rate.
- [ ] **Reduced rate.** Many EU countries tax e-books at a reduced rate, the Netherlands included. Stripe Tax applies it through the tax code; confirm with the accountant that a PDF travel guide with affiliate links qualifies.
- [ ] **United Kingdom and others.** UK buyers on the English site: the UK has no threshold for foreign sellers of digital services. Either register for UK VAT or block the country until sales justify it. Watch the same for Norway, Switzerland, Canada and Australia in Tax > Thresholds.
- [ ] **US sales tax.** A seller without a US presence only owes sales tax in a state after passing its economic nexus threshold (commonly $100,000 in sales a year in that state), and many states do not tax digital books at all. Turn on threshold monitoring in Stripe Tax and register in a state only when Stripe flags it.
- [ ] Decide whether to collect a VAT number for business buyers (`tax_id_collection` in the checkout route). Not enabled: these are consumer products.
- [ ] Invoices: turn on emailed receipts (Settings > Emails > Successful payments). For a proper invoice PDF per sale, add `invoice_creation: { enabled: true }` to the checkout route; Stripe charges a small fee per invoice.
- [ ] Set `STRIPE_TAX_ENABLED=true` and do a test purchase from a Dutch, a German and a US address to see the tax line.
- [ ] Ask the accountant how to book the Stripe payout reports and tax exports each quarter.

## 5. Terms and the withdrawal waiver

EU consumers have a 14-day right of withdrawal on digital content unless they expressly agree that delivery starts at once and acknowledge that they lose that right. The site shows that sentence under the buy buttons and in Checkout.

- [ ] Finish the terms page (`/terms`, `/nl/voorwaarden`) with the company details and have it reviewed.
- [ ] Settings > Business > Public details: enter the terms of service URL `https://<domain>/terms` and the privacy policy URL. Checkout refuses `consent_collection` without the terms URL.
- [ ] Set `STRIPE_REQUIRE_TERMS=true`. Checkout then shows a required checkbox with the waiver text and a link to the terms in the buyer's language.
- [ ] EU law also asks for a confirmation of the contract and the waiver on a durable medium. The download email covers the contract; add the waiver sentence to `src/lib/email.ts` once legal has approved the wording.
- [ ] Write a short refund policy into the terms (for example: refund on request when the file was not downloaded, or when it is faulty).

## 6. Where the PDFs live in production

`private/pdfs/*.pdf` is git-ignored on purpose, so a Vercel deployment does not contain the files. They go in a **private Vercel Blob store**; the download route streams them through the server after checking the token, so there is never a public file URL to share.

- [ ] Vercel > Storage > Create > Blob. Choose **private** access and connect it to the project for Production (and Preview if you test downloads there). This sets `BLOB_READ_WRITE_TOKEN`.
- [ ] `vercel env pull .env.local` to get the token locally (or copy it by hand).
- [ ] `npm run build:guides` then `npm run upload:guides`. The files land under `guides/<file name>`; the names come from `products.ts`.
- [ ] Repeat both commands after every content update. Uploads overwrite the old file, so open links immediately serve the new edition.
- [ ] Without `BLOB_READ_WRITE_TOKEN` the site reads `private/pdfs`, which is right for local development and wrong on Vercel (downloads would answer "not available").
- [ ] Blob counts storage and data transfer. A guide is roughly 0.7 MB, so this stays within the free allowance for a long time; check the usage page after launch.

Alternatives if Blob does not fit: an S3 or R2 bucket with the same streaming approach (only `src/lib/guide-storage.ts` changes), or Supabase Storage once the database arrives.

## 7. Products, prices and test purchases

Products and prices are not created in the Stripe dashboard. The checkout builds each line from `src/data/products.ts`, with a separate USD and EUR amount and no conversion.

| Guide | USD | EUR |
|---|---|---|
| Rome, Paris, London, Barcelona in 3 days | $15 | €14 |
| New York in 4 days, Cancún and the Riviera Maya in 5 days, One week in Aruba | $17 | €16 |

- [ ] Confirm the prices and round numbers per currency.
- [ ] Optional: create real Stripe Products and Prices and store the price ids in `products.ts`. That gives per-product reporting in the dashboard; the metadata `productId` already allows filtering without it.
- [ ] Payment methods (Settings > Payment methods): cards, Apple Pay and Google Pay, iDEAL for the Netherlands, Bancontact for Belgium. Leave delayed methods such as SEPA Direct Debit off: the buyer would wait days for the file.

Test script, with test keys and `stripe listen` running:

- [ ] `npm run build:guides`, then `npm run dev`.
- [ ] Buy a guide on `/guides` with card `4242 4242 4242 4242`: Checkout is in English and USD; the thank-you page shows the button and "Downloads left: 5"; the PDF opens.
- [ ] The same on `/nl/gidsen` with the iDEAL test bank: Dutch, EUR, Dutch PDF.
- [ ] The webhook log shows `Order paid`; with Resend configured the email arrives in the right language and its link opens the thank-you page.
- [ ] Download five times: the sixth attempt is refused, and the session metadata in the dashboard shows `downloads: 5`.
- [ ] A declined card (`4000 0000 0000 0002`) does not reach the thank-you page.
- [ ] A 3D Secure card (`4000 0025 0000 3155`) completes after the challenge.
- [ ] Open the thank-you page without `session_id`, and `/api/download?token=abc`: both refuse politely.
- [ ] Refund the test payment in the dashboard: the `charge.refunded` event sets `refunded: true` on the session and the download link stops working.
- [ ] Resend a webhook event from the dashboard: no second email.
- [ ] With `STRIPE_TAX_ENABLED=true`: check the tax line for a Dutch, German and US address.
- [ ] With `STRIPE_REQUIRE_TERMS=true`: the checkbox blocks payment until it is ticked.
- [ ] Repeat one purchase on the Vercel Preview deployment to prove Blob storage and the webhook endpoint.
- [ ] After go-live: one real purchase with your own card, then refund it.

## 8. Email through Resend

- [ ] Create a Resend account and add the sending domain (for example `mail.<domain>`). Add the SPF, DKIM and DMARC records it shows to DNS and wait for "verified".
- [ ] Create an API key with sending access only. Set `RESEND_API_KEY`, `EMAIL_FROM` (for example `Tripsworth <guides@<domain>>`) and `EMAIL_REPLY_TO` (an inbox someone reads).
- [ ] Without the two required variables the webhook skips the email and logs `email: "skipped"`; nothing breaks.
- [ ] The download-limit message tells buyers to reply to the order email, so `EMAIL_REPLY_TO` must work.
- [ ] Turn off Stripe's own receipt email or keep it: the buyer then gets two messages (receipt from Stripe, link from us). Both is fine and common.

## 9. Refunds, disputes and support

- [ ] Refunds are done by hand in the Stripe dashboard. A full refund closes the downloads automatically through the webhook. A partial refund does not.
- [ ] To give a buyer extra downloads: open the Checkout Session in the dashboard and set the metadata `downloads` back to `0`. That only helps within 7 days of the purchase.
- [ ] After the 7 days there is no way to reopen a link yet. Until the database exists, send the PDF by hand from the support inbox.
- [ ] Turn on Radar's default rules. Digital goods attract card testing: consider enabling CAPTCHA in Checkout if small fraudulent charges appear.
- [ ] Disputes: the evidence to submit is the Checkout Session (consent checkbox, IP country) and the `downloads` and `lastDownloadAt` metadata.

## 10. Known limits until there is a database

These follow from using the Checkout Session as the order record. They are acceptable for the first sales and should go once Postgres (Supabase or Neon) arrives with the `orders` and `downloads` tables from the plan.

- **The counter is not atomic.** Two downloads in the same second can both count as one. Worst case a buyer gets a sixth download.
- **One Stripe call per download and per thank-you page view.** Fine at this volume; Stripe's rate limit is far away.
- **No "My trip" re-download** (step 5 in the plan) and no purchase history per email address.
- **No free updates for a year.** The plan promises buyers the new edition for a year. That needs stored orders and a mailing. Until then: export the buyers' emails from Stripe and mail them the new edition by hand, with their consent.
- **Session data expires.** Stripe keeps Checkout Sessions retrievable, but do not rely on it as the long-term archive: export payments monthly.
- **The link in the email is a bearer link.** Anyone who has it can use the remaining downloads within the 7 days. The limit of 5 is the protection.
- **Bundles and the free mini guide** from the plan are not built: one product per checkout, no email capture.

## 11. Before switching to live

- [ ] Sections 1 to 8 done, with the test script green in test mode.
- [ ] Live keys, live webhook secret and `NEXT_PUBLIC_SITE_URL` set for Production; redeployed.
- [ ] PDFs uploaded to the production Blob store; a download works on the live domain.
- [ ] Terms, privacy policy and company details are final and linked in Stripe.
- [ ] Affiliate disclosure inside the PDFs read by whoever handles legal (it is on the contents page of every guide).
- [ ] The guides' prices and opening hours re-checked against `src/data/articles/*.ts` after the running fact-check, then re-rendered and uploaded.
