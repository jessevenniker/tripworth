# Travel platform

Bilingual (English/Dutch) affiliate travel site built with Next.js. The full plan is in [BOUWPLAN.md](BOUWPLAN.md).

## Development

```bash
cp .env.example .env.local   # then fill in what you need
npm install
npm run dev                  # http://localhost:3000, Dutch on /nl
```

- Content lives in `src/data/` (destinations, articles per city, products, images).
- Interface text lives in `src/i18n/dictionaries.ts`; routing and translated URL segments in `src/i18n/config.ts` and `src/proxy.ts`.
- Business details for the legal pages: `src/data/company.ts`. Privacy policy and terms text: `src/data/legal.ts`.

## Launch checklist

Decisions and accounts (outside the code):

- [ ] Brand name and domain. Then update `SITE_NAME` in `src/i18n/config.ts`.
- [ ] Fill in `src/data/company.ts` (legal name, address, KvK, VAT number, email). Until then the legal pages show `[...]` placeholders.
- [ ] Have `src/data/legal.ts` checked by a lawyer.
- [ ] Re-check prices and opening hours in every article and set `updated` to the month of the check.

Hosting:

- [ ] Push the repository to GitHub and import it in Vercel.
- [ ] In Vercel, set the environment variables from `.env.example` (at least `NEXT_PUBLIC_SITE_URL` with the real domain).
- [ ] Connect the domain in Vercel.

Measuring:

- [ ] Add the site in Plausible and set `NEXT_PUBLIC_PLAUSIBLE_DOMAIN`. In Plausible, add the goals "Affiliate Click" and "Outbound Link: Click" with custom properties `partner`, `destination` and `article`.
- [ ] Verify the domain in Google Search Console (DNS record, or `GOOGLE_SITE_VERIFICATION`) and submit `https://<domain>/sitemap.xml`. Do the same in Bing Webmaster Tools.

Payments (only once there are PDFs to sell):

- [ ] Stripe live keys and webhook (`/api/stripe/webhook`, event `checkout.session.completed`).
- [ ] Turn on Stripe Tax and set `STRIPE_TAX_ENABLED=true`.
- [ ] Enter the terms URL in Stripe (Settings > Public details) and set `STRIPE_REQUIRE_TERMS=true` for the withdrawal-waiver checkbox.
- [ ] PDFs: `private/pdfs/*.pdf` is git-ignored, so Vercel will not have them. Either commit them (private repository only) or move them to private storage such as Vercel Blob.

## What is indexed

- Destination hubs without any article in a language are `noindex` and left out of the sitemap until content exists.
- Article pages with booking links show an affiliate disclosure above the content (FTC) linking to the terms.
