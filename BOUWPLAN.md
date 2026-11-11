# Bouwplan travelplatform

Versie 1, 11 november 2026

## 1. Doel en uitgangspunten

Een affiliate travelplatform dat per bestemming de beste bron is voor wat je er doet, wat het kost en hoe je het boekt. Inkomsten komen uit affiliate-boekingen, eigen digitale producten (pdf-gidsen) en later directe deals.

- **Primaire doelgroep:** Amerikaanse reizigers (Engels, USD).
- **Secundaire doelgroep:** Nederlandse reizigers (Nederlands, EUR).
- **Strategie:** eerst 14 bestemmingen volledig uitwerken, daarna hetzelfde sjabloon uitrollen.
- **Onderscheid:** eigen data, verhalen van locals en een planner die bezoekers vasthoudt.

### Rekensom (aannames, nog niet gemeten)

| Post | Aanname |
|---|---|
| Commissie tours (Viator, GetYourGuide) | rond 8% |
| Gemiddelde boeking Amerikaanse bezoeker | $120 à $150 |
| Opbrengst per boeking | ongeveer $10 à $12 |
| Conversie bezoeker naar boeking | 1 à 2% |
| Nodig voor 3.000 boekingen per maand | 150.000 à 300.000 bezoekers |

Tours alleen leveren dan ongeveer $30.000 à $36.000 per maand op. Hotels, huurauto's, pdf's en e-mail moeten daar bovenop komen.

## 2. Taalmodel (i18n)

### Talen en URL's

| Onderdeel | Engels | Nederlands |
|---|---|---|
| Locale | `en` (Amerikaans-Engels) | `nl` |
| URL | `/rome/colosseum-tickets` | `/nl/rome/colosseum-tickets` |
| Valuta | USD | EUR |
| Eenheden | miles, °F | km, °C |
| Datumnotatie | Nov 11, 2026 | 11 november 2026 |

- Engels staat op de root en is `x-default`. Nederlands staat onder `/nl/`.
- Elke pagina krijgt `hreflang`-tags voor `en`, `nl` en `x-default`, alleen als de vertaling ook bestaat.
- Slugs worden per taal vertaald (`/nl/rome/colosseum-tickets` naast bijvoorbeeld `/nl/rome/verborgen-plekken`).
- Geen automatische doorverwijzing op IP of browsertaal. Wel een melding "Deze pagina is er ook in het Nederlands".
- Elke taal krijgt een eigen sitemap.

### Twee lagen

1. **Interface-teksten** (knoppen, menu, checkout): één getypeerd woordenboek per taal in `src/i18n/dictionaries.ts`.
2. **Content** (bestemmingen, artikelen, producten): per taal een eigen record in de database, gekoppeld via een gedeeld `translation_group_id`.

### Lokaliseren in plaats van vertalen

Een Nederlandse pagina is geen kopie van de Engelse. Per doelgroep verschilt:

- **Amerikaans:** vluchten vanuit de VS, jetlag, fooien, stekkers, betalen met Amerikaanse kaarten, reisduur vanuit een cruisehaven, "is it worth it"-toon.
- **Nederlands:** weekendjes weg, trein of auto, schoolvakanties, prijsbewuste toon.

Sommige pagina's bestaan daarom maar in één taal. Het model staat dat toe.

### Later uitbreiden

Duits en Spaans passen in hetzelfde model: een locale toevoegen, een vertaalbestand en content-records. Geen herbouw.

## 3. Bestemmingen

Dit is mijn inschatting van waar Amerikanen veel aan tours en tickets uitgeven. Zoekvolumes en concurrentie zijn nog niet nagemeten; dat is de eerste stap van fase 0.

### Eerste 10

| # | Bestemming | Waarom | NL-versie |
|---|---|---|---|
| 1 | Rome | Colosseum en Vaticaan: tickets met hoge koopintentie | Ja |
| 2 | Parijs | Eiffeltoren, Louvre, Versailles | Ja |
| 3 | Londen | Veel attracties, hoge prijzen | Ja |
| 4 | Barcelona | Sagrada Familia, Park Güell | Ja |
| 5 | Florence | Uffizi, Toscane-dagtrips, wijntours | Ja |
| 6 | Amsterdam | Thuisvoordeel: eigen foto's en lokale kennis | Later |
| 7 | Lissabon | Sterk groeiend bij Amerikanen, Sintra-dagtrips | Ja |
| 8 | Reykjavik | Dure tours (Golden Circle, noorderlicht) | Ja |
| 9 | New York | Binnenlands voor de VS, populair bij Nederlanders | Ja |
| 10 | Oahu (Hawaii) | Dure activiteiten, vooral Amerikaans publiek | Nee |

### Caribbean-cluster

Het Caribisch gebied is voor Amerikanen een van de grootste vakantiemarkten, met korte vluchten en veel cruisepassagiers. Deze vier komen bij de eerste golf:

| # | Bestemming | Waarom | NL-versie |
|---|---|---|---|
| 11 | Aruba | Veel Amerikanen én Nederlanders; pilot voor het cluster | Ja |
| 12 | Cancún en Riviera Maya | Grootste volume: Chichén Itzá, cenotes, Isla Mujeres | Ja |
| 13 | Punta Cana | All-inclusive gasten die excursies boeken (Saona, catamaran) | Ja |
| 14 | Jamaica (Montego Bay, Ocho Rios) | Dunn's River, rafting, cruisehaven | Nee |

Extra paginatypes voor dit cluster:

- **Shore excursions:** "Best shore excursions in Cozumel", per cruisehaven. Passagiers hebben een paar uur en boeken vooraf.
- **Resort-dagtrips:** "Best day trips from Punta Cana resorts", met ophaaltijden per hotelzone.
- **Eilandvergelijkingen:** "Aruba vs Curaçao", "Which Caribbean island is best for snorkeling".
- **Seizoen:** orkaanseizoen, sargassum (zeewier) per maand, beste reistijd.

### Tweede golf

Europa en overig: Venetië, Amalfikust, Athene en Santorini, Dublin, Praag, Las Vegas, Tokio.

Caribbean: Curaçao, San Juan (Puerto Rico), Nassau (Bahama's), Cozumel, St. Lucia, St. Maarten.

### Selectiecriteria

- Zoekvolume op tickets en tours.
- Gemiddelde boekingswaarde.
- Sterkte van de concurrentie op long-tail zoektermen.
- Aanbod bij Viator en GetYourGuide.
- Of we er locals of eigen ervaring voor hebben.

## 4. Opbouw per bestemming

| Paginatype | Voorbeeld | Doel |
|---|---|---|
| Hub | Rome | Autoriteit en interne links |
| Ticketpagina | "Colosseum tickets: which one to buy" | Hoogste koopintentie |
| Vergelijking | "7 Vatican tours tested" | Conversie |
| "Worth it?" | "Is the Rome Pass worth it?" | Twijfelaars en AI-citaties |
| Route | 1, 2, 3 of 5 dagen | Meerdere boekingen en pdf-verkoop |
| Hidden gems en verhalen | Verhalen van locals met eigen foto's | Uniekheid en links |
| Praktisch | Vliegveld naar centrum, beste reistijd, wijken | Volume, transfers, hotels |

Per bestemming bij lancering: 1 hub, 8 à 12 ticketpagina's, 5 vergelijkingen, 5 "worth it"-pagina's, 4 routes, 5 verhalen en 6 praktische pagina's. Samen ongeveer 35 à 40 pagina's.

## 5. SEO, AIO en GEO

- **Antwoord eerst:** elke pagina opent met het antwoord in 2 à 3 zinnen, daarna een feitentabel en een FAQ.
- **Eigen data:** prijsindex per attractie, beste dag en tijdstip, wachttijden, "laatst gecontroleerd op".
- **Structured data:** `TouristAttraction`, `TouristTrip`, `ItemList`, `Product` met `Offer`, `FAQPage`, `Article` met auteur.
- **Echte auteurs:** auteurspagina's met naam, foto, achtergrond en eigen beeld.
- **Versheid:** prijzen en beschikbaarheid dagelijks bijgewerkt uit de partner-API's.
- **AI-crawlers:** toegestaan in `robots.txt`; maandelijks meten of we geciteerd worden in ChatGPT, Perplexity, Gemini en Google AI Overviews.
- **Buiten de site:** aanwezigheid op Reddit, YouTube en reisforums, plus digitale pr rond de eigen data.
- **Kwaliteitsregel:** geen pagina live zonder iets dat de concurrent niet heeft (eigen foto, test, data of verhaal).

## 6. Verdienmodel

| Stroom | Partner of middel | Wanneer |
|---|---|---|
| Tours en tickets | Viator, GetYourGuide, Tiqets | Vanaf dag 1 |
| Hotels | Booking.com, Expedia, Stay22 | Vanaf dag 1 |
| Huurauto's en transfers | Discover Cars, Welcome Pickups | Fase 1 |
| eSIM en reisverzekering | Airalo, verzekeraar voor Amerikaanse reizigers | Fase 1 |
| Pdf-gidsen | Eigen verkoop via Stripe | Fase 1 |
| Display-advertenties | Mediavine of Raptive | Bij voldoende verkeer |
| Directe deals | Lokale aanbieders, 15 à 25% | Fase 3 |

## 7. Pdf-verkoop via Stripe

### Producten

| Product | Richtprijs |
|---|---|
| Stadsgids met dagroutes (bijv. "Rome in 3 days") | $12 à $19 |
| Kaartenpakket (Google Maps-lijsten en offline kaart) | $7 à $9 |
| Bundel per land (bijv. Italië: Rome, Florence, Venetië) | $29 à $39 |
| Gratis mini-gids | E-mailadres |

Elke pdf bevat affiliate-links, dus hij verdient na verkoop door.

### Werking

1. Koper klikt op "Buy" en gaat naar Stripe Checkout in de eigen taal en valuta.
2. Stripe stuurt na betaling een webhook (`checkout.session.completed`).
3. Het platform maakt een order aan en mailt een downloadlink.
4. De link is ondertekend, verloopt na 7 dagen en is beperkt tot 5 downloads.
5. De koper kan via "My trip" opnieuw downloaden.

### Aandachtspunten

- **Belasting:** Stripe Tax voor btw in de EU (tarief van het land van de koper, aangifte via de OSS-regeling) en sales tax in de Amerikaanse staten waar dat geldt.
- **Herroepingsrecht EU:** bij de checkout een vinkje waarmee de koper afziet van herroeping zodra de download start.
- **Prijzen:** aparte prijs in USD en EUR per product, geen automatische omrekening.
- **Updates:** kopers krijgen een jaar lang gratis de nieuwe versie; dat is ook een reden om te mailen.
- **Alternatief:** een merchant of record zoals Lemon Squeezy of Paddle neemt de belastingaangifte over tegen een hogere fee. Het plan gaat uit van Stripe.

## 8. Bezoekers vasthouden

- **Tripplanner ("My trip"):** activiteiten opslaan, op de kaart zien, dagindeling bouwen, elke stap boekbaar.
- **Live prijzen en beschikbaarheid:** uit de Viator Partner API, zodat de bezoeker niet hoeft weg te klikken om te vergelijken.
- **Boeken op de eigen site:** in fase 3, zodra Viator volledige API-toegang geeft.
- **AI-reisassistent:** vraag in gewone taal, antwoord als route met boekbare onderdelen.
- **E-mail:** gratis mini-gids, daarna een reeks mails afgestemd op de reisdatum.
- **Prijsalerts:** melding als een opgeslagen activiteit goedkoper wordt of bijna vol is.

## 9. Techniek

| Onderdeel | Keuze |
|---|---|
| Framework | Next.js (App Router) met TypeScript |
| i18n | Eigen lichte routering in `src/proxy.ts`, routes onder `app/[locale]/` |
| Database | Postgres (Supabase of Neon) |
| Hosting | Vercel |
| Betalingen | Stripe Checkout, Stripe Tax, webhooks |
| Bestanden | Afgeschermde opslag met ondertekende links |
| E-mail | Resend voor transacties, een nieuwsbrieftool voor reeksen |
| Zoeken | Postgres full-text, later Algolia of Typesense |
| Meten | Plausible of GA4, Search Console, eigen klik- en boekingstracking |

### Datamodel in hoofdlijnen

- `destinations`: bestemming, coördinaten, land.
- `pages`: `destination_id`, `type`, `locale`, `slug`, `translation_group_id`, inhoud, auteur, `last_verified_at`.
- `attractions`: attractie met feiten (openingstijden, prijzen, beste tijd).
- `activities`: producten uit de partner-feeds, met prijs, beoordeling en affiliate-link.
- `authors`: auteurs met biografie per taal.
- `products`: pdf's per taal, met Stripe-prijs in USD en EUR.
- `orders` en `downloads`: aankopen en downloadtellers.
- `users`, `trips`, `trip_items`: planner.
- `clicks`: uitgaande affiliate-kliks met pagina, positie en partner.

### Juridisch

- **VS:** affiliate-vermelding volgens de FTC bovenaan elke pagina met affiliate-links.
- **EU:** cookietoestemming volgens de AVG, privacyverklaring, algemene voorwaarden voor digitale producten.
- **Bedrijfsgegevens** en btw-nummer op de site en op facturen.

## 10. Fasering

### Fase 0: fundament (week 1 tot 4)

- Zoekwoordonderzoek voor de 14 bestemmingen, in het Engels en Nederlands.
- Merknaam en domein.
- Aanmelden bij Viator, GetYourGuide, Tiqets, Booking.com en Stripe.
- Project opzetten: Next.js, i18n, database, ontwerp.

### Fase 1: eerste bestemmingen (maand 2 tot 4)

- Sjablonen voor alle paginatypes.
- Koppeling met de partner-feeds.
- Rome, Parijs, Amsterdam en Aruba volledig live in het Engels; Rome, Parijs en Aruba ook in het Nederlands.
- Stripe-verkoop met de eerste 3 pdf-gidsen.
- E-mailinschrijving met gratis mini-gids.

### Fase 2: opschalen (maand 4 tot 9)

- De overige 10 bestemmingen, inclusief Cancún, Punta Cana en Jamaica.
- Shore-excursionpagina's per cruisehaven.
- Tripplanner en prijsalerts.
- Meten welke paginatypes converteren en daarop bijsturen.
- Lokale schrijvers per bestemming.
- Digitale pr rond de eigen data.

### Fase 3: uitbouwen (maand 9 en verder)

- Tweede golf bestemmingen, daarna tientallen per kwartaal.
- Boeken op de eigen site via de Viator API.
- AI-reisassistent.
- Directe deals met lokale aanbieders.
- Derde taal.

## 11. Meetpunten

| Meetpunt | Doel na 6 maanden | Doel na 12 maanden |
|---|---|---|
| Organische bezoekers per maand | 30.000 | 150.000 |
| Affiliate-boekingen per maand | 300 | 2.000 |
| Pdf-verkopen per maand | 100 | 600 |
| E-mailabonnees | 3.000 | 20.000 |
| Doorklik naar partner | 15% | 20% |

Dit zijn streefcijfers om op te sturen, geen voorspelling.

## 12. Open beslissingen

1. Merknaam en domein.
2. Team en budget: wie schrijft, wie reist, wie bouwt.
3. Bevestiging van de eerste 14 bestemmingen na het zoekwoordonderzoek.
4. Stripe zelf of een merchant of record voor de pdf-verkoop.
5. Rechtsvorm en land van vestiging, in verband met belasting op Amerikaanse verkopen.
