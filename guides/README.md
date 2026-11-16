# PDF guides

Sources for the paid guides. One folder per product id from `src/data/products.ts`, one Markdown file per language:

```
guides/
  guide.css              print layout (A5, site colours, Fraunces and Geist)
  rome-3-days/en.md      for US travellers: USD, miles, °F, tipping, flights from the US
  rome-3-days/nl.md      for Dutch travellers: EUR, km, °C, train or plane from the Netherlands
  ...
```

The two files are localised, not translated: they share the plan but differ in prices, entry rules, transport and tone.

## Rendering

```bash
npm run build:guides                  # all guides, both languages, into private/pdfs/
npm run build:guides -- rome-3-days   # one guide
npm run build:guides -- --html        # also write the intermediate HTML (for debugging the layout)
npm run upload:guides                 # copy private/pdfs/*.pdf to the private Vercel Blob store
```

The PDFs are git-ignored and fully reproducible from these sources. The script prints the page count of each
file and warns when it differs from `pages` in `products.ts`: update the number there after editing a guide.
The first `npm install` downloads a headless Chrome for Puppeteer.

## Format

Front matter (all four fields are required):

```
---
title: Rome in 3 days
subtitle: One sentence under the title on the cover.
edition: November 2026
kicker: Day-by-day guide
---
```

- `# Day 1 | Ancient Rome` starts a chapter on a new page. The part before ` | ` is the small label above the
  title and in the table of contents.
- `##` and `###` are section headings. Tables, lists and links are plain Markdown.
- Blocks open with `:::kind Optional title` and close with `:::`.

| Block | Use |
|---|---|
| `:::schedule` | Hour-by-hour plan. A line `8:30 am \| Colosseum` starts an entry; the lines below it are its text |
| `:::booking` | The "book in this order" list (dark box) |
| `:::tip`, `:::warn`, `:::note` | Advice, warnings, side notes |
| `:::map` | Neighbourhood and route notes |
| `:::checklist` | Tick-box list |

## Booking links

Never paste a partner URL. Write `[label](book:search words)` and the renderer adds a Viator and a GetYourGuide
link with our partner IDs:

- When the search words equal an article's `bookingQuery`, the links go to the specific products picked for
  that article in `src/data/bookings.ts` (through `articleBookingLinks()`).
- `[label](pick:article-id)` asks for an article's picks directly.
- Anything else becomes a partner search through `bookingLinks()`.

## Before each new edition

Prices, opening hours and entry rules come from `src/data/articles/<city>.ts`. When those are re-checked,
update the guide, change `edition` in both files and render again.
