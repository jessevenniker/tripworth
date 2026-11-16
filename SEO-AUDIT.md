# SEO-, AIO- en GEO-audit

16 november 2026. Gemeten op `tripsworth.vercel.app` (alle 144 URL's uit de sitemap) en in de code.

## 1. Wat goed staat

- Alle 144 pagina's geven 200, onbekende URL's geven een echte 404 met noindex.
- Canonical en hreflang kloppen op elke pagina en verwijzen wederzijds naar elkaar.
- Elke pagina heeft precies één H1 en een meta description binnen 160 tekens.
- Pagina's zijn vooraf gebouwd (statisch), gemiddeld 67 kB HTML.
- Elk artikel opent met een kort antwoord, een feitentabel en een FAQ. Dat is de vorm die AI-antwoorden citeren.
- Lege bestemmingen staan op noindex en buiten de sitemap.

## 2. Doorgevoerd in deze ronde

| Wat | Waarom |
|---|---|
| Boekblok op mobiel direct onder de feitentabel | Het stond op telefoons onder het hele artikel, na de FAQ. Het grootste deel van het verkeer is mobiel. |
| Sectie "Regel dit voor je vertrekt" op elke hub, met directe boeklinks | Hubs trekken de brede zoektermen ("things to do in Rome") en hadden geen enkele affiliate-link. |
| Boeklinks op de 12 artikelen die er geen hadden (24 pagina's) | Pas-artikelen linken nu naar de pas zelf (Roma Pass, Paris Museum Pass, London Pass, CityPASS); "beste reistijd" naar de stadspagina van de partner. |
| Structured data uitgebreid | Artikel: afbeelding, datum, auteur en uitgever. Hub: broodkruimel en lijst van artikelen. Home: Organization en WebSite. |
| `lastmod` in de sitemap | Zoekmachines zien nu welke pagina's zijn bijgewerkt. |
| Lange titels zonder " \| Tripsworth" | 85 van de 144 titels waren langer dan 60 tekens; nu nog 54. |
| `/llms.txt` | Overzicht van alle gidsen voor AI-assistenten. |
| AI-crawlers bij naam toegestaan in `robots.txt` | GPTBot, ClaudeBot, PerplexityBot en andere (geldt zodra `ALLOW_INDEXING=true`). |
| Deelafbeelding voor home, gidsen en juridische pagina's | Die hadden geen `og:image`. |
| Hero-foto met voorrang geladen, alt-tekst op de hero | Snellere grootste afbeelding (LCP). |
| Twee claims aangepast | "tested and priced" en "from people who live there" stonden er zonder dat het klopt. Zie punt 3.2. |

## 3. Nog te doen, op volgorde van omzet

### 3.1 Zonder dit komt er geen omzet

- [ ] **Domein koppelen en `ALLOW_INDEXING=true` zetten.** Tot dan blokkeert `robots.txt` alles en bestaat de site niet voor Google of AI.
- [ ] **Search Console en Bing Webmaster Tools.** Bing is belangrijker dan het lijkt: ChatGPT zoekt via Bing.
- [ ] **Plausible instellen** (`NEXT_PUBLIC_PLAUSIBLE_DOMAIN`). Zonder meting weet je niet welke pagina's kliks en boekingen opleveren.
- [ ] **Affiliate-links met de hand naklikken.** Viator en GetYourGuide blokkeren geautomatiseerde controles. Drie vervangen GYG-tours en alle Viator-links zijn dus niet geopend.
- [ ] **Stripe-sleutels** op Vercel. De koopknop geeft nu een 503. Zie `STRIPE-TODO.md`.

### 3.2 Vertrouwen (E-E-A-T): de grootste zwakte

Google en AI-antwoorden citeren bronnen die aantoonbaar weten waar ze over schrijven. Daar is de site nu het zwakst.

- [ ] **Pagina "Over ons / Hoe wij werken"** met een echte naam, foto en achtergrond, en hoe prijzen worden gecontroleerd. Er is nu geen auteur en geen over-pagina. De structured data noemt alleen de organisatie.
- [ ] **Bronnen op de pagina tonen.** `FACTCHECK.md` bevat per artikel de officiële bron. Een regel "Bronnen: colosseo.it, gecontroleerd november 2026" onder elk artikel is goedkoop en sterk.
- [ ] **De 43 artikelen met onbevestigde punten** uit `FACTCHECK.md` nalopen.
- [ ] **Claims die nu niet kloppen.** "tips from locals" staat nog in de meta description van de home en in de beschrijving van de pdf-gidsen. Of zorg dat het waar is, of haal het weg. Bij een betaald product is dit ook een juridisch risico.
- [ ] **Eigen materiaal per pagina**: eigen foto's, een eigen prijsvergelijking of een eigen test. Dat is de kwaliteitsregel uit het bouwplan en het enige wat concurrenten niet kunnen kopiëren.

### 3.3 Diepte van de content

- Artikelen zijn gemiddeld 560 woorden (381 tot 668). De pagina's die nu bovenaan staan voor "Colosseum tickets" zitten op 1.500 tot 3.000.
- [ ] Ticketpagina's uitbreiden met: prijstabel per tickettype, stappen om te boeken, wat te doen als het uitverkocht is, veelgemaakte fouten. Begin met de 10 pagina's met de hoogste koopintentie.
- [ ] 54 titels zijn nog langer dan 60 tekens. Geef die artikelen een korte zoektitel (veld toevoegen in `ArticleContent`).
- [ ] Links in de lopende tekst tussen artikelen. Nu linkt een artikel alleen via de drie kaarten onderaan.

### 3.4 Meer verdienen per bezoeker

- [ ] **Hotels** (Stay22 of Booking.com) op hubs, "beste reistijd" en vliegveldpagina's. Staat in het bouwplan vanaf dag 1 en ontbreekt.
- [ ] **Vergelijkingstabel met 3 tot 5 tours** per ticket- en vergelijkingsartikel, elk met een eigen boeklink. Nu staat er één keuze per partner.
- [ ] **E-mailinschrijving** met gratis mini-gids. Bezoekers boeken vaak pas weken later.
- [ ] **Viator in het Nederlands.** Nederlandse bezoekers komen nu op de Amerikaanse Viator-site met dollarprijzen. De Nederlandse URL-variant kon ik niet controleren.
- [ ] **De 7 lege bestemmingen** schrijven, te beginnen met Amsterdam.

### 3.5 Techniek

- [ ] **Foto's zelf hosten.** Ze komen nu van Wikimedia. Dat maakt de laadtijd afhankelijk van een ander en levert geen verkeer uit Google Afbeeldingen op.
- [ ] **Intro-animatie op de home.** Bij een eerste bezoek bedekt die de pagina ruim 2 seconden. Dat telt mee in de laadtijd die Google meet. Overweeg hem korter te maken of alleen bij terugkerende bezoekers te tonen.
- [ ] **Product-schema** op de gidsenpagina zodra Stripe werkt (prijs en beschikbaarheid in de zoekresultaten).
- [ ] **IndexNow** voor Bing, zodat nieuwe en bijgewerkte pagina's direct worden opgepikt.

### 3.6 GEO: geciteerd worden door AI

- [ ] Maandelijks 20 vaste vragen stellen in ChatGPT, Perplexity, Gemini en Google AI Overviews en bijhouden of Tripsworth wordt genoemd.
- [ ] Aanwezigheid buiten de site: Reddit (r/travel, r/rome), YouTube en reisforums. AI-antwoorden leunen sterk op die bronnen.
- [ ] Eigen cijfers publiceren (bijvoorbeeld een prijsindex per attractie). Unieke data wordt het vaakst geciteerd.
