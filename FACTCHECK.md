# Fact check before launch

Checked: 16 November 2026. Scope: every article in `src/data/articles/*.ts`, both the `en` and the
`nl` version. Prices, opening hours, booking windows, ticket types, rules and transfer costs were
compared with official sources (attraction websites, official ticket sellers, transport operators
and airports). Every checked article has `updated: "2026-11"`.

Status per article:

- **OK**: every hard fact was confirmed on an official source, or corrected to match one.
- **OK, open items**: the article was checked and corrected where needed, but some figures could
  only be found on third-party sites or come from general knowledge. Those are listed under
  "Not verified" and must be re-checked by hand before launch. Nothing was guessed: unverified
  figures were left as they were, or softened to a range, and are marked here.

Prices in the English pages stay in the local currency where that is what the visitor pays
(euros in Rome, Paris and Barcelona, pounds in London, pesos or dollars in Mexico); Aruba and New
York are in US dollars. The Dutch pages use euros where the destination does, and keep dollar or
peso prices where that is what is paid on the spot.

---

## Rome (`rome.ts`)

### rome-colosseum-tickets: OK
- Changed: standard ticket €18 and Full Experience €24 are now exact (were "about").
  Added that the Full Experience Arena ticket is sold online only from 7 days before the visit,
  that Underground and Arena costs the same €24, and the time limits inside the Colosseum
  (75 minutes standard, 90 minutes Full Experience). Both languages.
- Confirmed: 30-day sales window, tickets in the holder's name, 2-day validity of Full
  Experience tickets, opens 8:30, free first Sunday of the month.
- Source: colosseo.it ticket pages (Colosseum-Roman Forum-Palatine, Full Experience Arena, Full
  Experience Underground and Arena) and "Opening times and tickets".

### rome-vatican-tickets: OK
- Changed: price is exactly €25 (€20 plus €5 online booking fee). Replaced "Closed: Sundays" fact
  with the full opening hours: Monday to Saturday 8:00 to 20:00, last entry 18:00; closed Sundays
  except the last Sunday of the month (9:00 to 14:00, free). "Open into the evening" made concrete.
- Source: museivaticani.va, "Tariffe e biglietti" and "Orari".
- Not verified: dome climb price (article only says it is paid on the spot), security line times.

### rome-pantheon-tickets: OK
- No changes. €7 since 1 July 2026, under 18 free, 9:00 to 19:00, last entry 18:30, free first
  Sunday without online booking.
- Source: direzionemuseiroma.cultura.gov.it (confirmed 11 November 2026, unchanged).

### rome-colosseum-tours: OK, open items
- No changes. Ticket facts in this article match colosseo.it.
- Not verified: tour price ranges (€50 to €70, €60 to €90, €90 to €130, private from €250).
  These are market prices on resale platforms, not official figures. Spot-check on GetYourGuide
  and Viator before launch.

### rome-roma-pass: OK
- Changed: removed the "€2 booking fee" for the Colosseum reservation with a Roma Pass. The
  official Roma Pass FAQ says a reservation is required (online, on the Colosseum ticketing site)
  but names no fee. Both languages.
- Confirmed: €38 for 48 hours (1 sight), €62.90 for 72 hours (2 sights), Colosseum €18,
  Borghese €18, 72-hour ATAC ticket €22. Borghese also needs a reservation with the pass.
- Sources: romapass.it FAQ, colosseo.it, galleriaborghese.cultura.gov.it; pass prices
  (museicapitolini.org) and the ATAC ticket (atac.roma.it) as confirmed on 11 November 2026.

### rome-colosseum-underground: OK
- Changed: the heading "Arena floor as the cheaper alternative" was wrong: the Arena and the
  Underground tickets both cost €24. Now "Arena floor as the fallback", with the same-price note.
- Confirmed: €6 more than the standard ticket (€24 vs €18); underground access is subject to
  availability on the Full Experience Underground and Arena ticket.
- Source: colosseo.it.
- Not verified: "€40 or more on a tour" (derived from market tour prices).

### rome-3-days: OK
- No changes. Borghese Gallery: €18, visits up to two hours, slots every 30 minutes, closed
  Mondays, reservation needed (tickets from 24 November 2026 on the Musei Italiani platform).
  Ticket budget of about €70 matches €18 + €25 + €18 + €7.
- Source: galleriaborghese.cultura.gov.it ("Info biglietti" and the new-ticketing notice).
- Not verified: walking distances.

### rome-hidden-gems: OK, open items
- No changes.
- Not verified (general knowledge): entry prices of San Clemente excavations, Centrale
  Montemartini and the catacombs ("free to about €10"), Appian Way car-free on Sundays,
  catacomb visit length (about 40 minutes), church lunch closures.

### rome-airport: OK, open items
- Changed: Leonardo Express runs every 15 minutes (was 15 to 30). Taxi: removed the unverified
  claim that Fiumicino-licensed taxis may charge more; the fixed fare now says supplements are
  included. Ciampino taxi fare made concrete: €40 to the centre (was "its own lower fixed fare").
  Bus now "about €6 to €7". Both languages.
- Confirmed: Leonardo Express €14 and 32 minutes; Fiumicino taxi €55 inside the Aurelian Walls,
  all supplements included; Ciampino €40.
- Sources: adr.it (train page, taxi pages for Fiumicino and Ciampino).
- Not verified: FL1 fare €8 (third-party sites only), bus fares (operators' own pages did not
  show prices), private transfer from €60, Uber Black.

### rome-best-time: OK, open items
- No changes.
- Not verified (general knowledge): temperatures and the August restaurant closures.

---

## Paris (`paris.ts`)

Since January 2026 several French state museums charge visitors from outside the European
Economic Area more. The English pages quote the non-EEA price, the Dutch pages the EEA price.

### paris-eiffel-tickets: OK
- Changed: booking window. Lift tickets go on sale online 90 days ahead (was "up to about 2
  months"). Both languages.
- Confirmed: lift to the top €36.70, stairs plus lift to the top €28, lift to the 2nd floor
  €23.50, stairs to the 2nd floor €14.80 (adults); opening 9:30 to 23:00 in November.
- Sources: toureiffel.paris "Rates and opening times", ticket.toureiffel.paris.
- Not verified: the 30 to 45 minute wait for the second lift, the 674 steps.

### paris-louvre-tickets: OK
- No changes. €32 non-EEA, €22 EEA; free under 18 and for EEA residents under 26; closed
  Tuesdays and on 1 January, 1 May, 25 December; 9:00 to 18:00, Wednesday and Friday to 21:00;
  free on the first Friday of the month after 18:00 except July and August.
- Source: louvre.fr "Hours and admission".
- Not verified: "about 35,000 works".

### paris-versailles: OK, open items
- No changes. Passport €35 non-EEA / €32 EEA from 1 April to 31 October, €25 / €22 in low
  season; closed Mondays; Palace needs a time slot; Trianon opens at noon.
- Source: chateauversailles.fr (confirmed 11 November 2026; the ticket page moved and was not
  re-read on 16 November).
- Not verified: RER C journey time (about 40 minutes), walking time to the Trianon.

### paris-seine-cruises: OK, open items
- No changes. Batobus (hop-on boat) day pass €23 adult, matching "about €20 to €25".
- Source: batobus.com.
- Not verified: one-hour cruise prices (€15 to €20) and dinner cruises from €90. Operator sites
  (Bateaux Mouches, Vedettes du Pont Neuf, Bateaux Parisiens) did not show prices to a fetch.

### paris-museum-pass: OK
- No changes. €85 for 2 days, €105 for 4 days, €125 for 6 days (hours count from the first
  visit). The sums in the article hold: Orsay €16, Sainte-Chapelle €22 non-EEA / €16 EEA.
- Sources: parismuseumpass.fr, musee-orsay.fr, sainte-chapelle.fr.

### paris-3-days: OK
- Changed: ticket budget. With Eiffel summit €36.70, Arc de Triomphe €16 to €22, Louvre,
  Sainte-Chapelle and Versailles or Orsay, the US total is €130 to €150 (was "about €130") and
  the EEA total €110 to €130 (was "about €110"). Both languages.
- Confirmed: Notre-Dame ground floor free, towers €16 and included in the Museum Pass; Arc de
  Triomphe €22 April to September (except Wednesdays, €16), €16 October to March.
- Sources: paris-arc-de-triomphe.fr, tours-notre-dame-de-paris.fr, parismuseumpass.fr,
  plus the ticket sources above.

### paris-hidden-gems: OK, open items
- No changes.
- Not verified (general knowledge): the covered passages (about twenty surviving), free
  permanent collections of the city museums, and the rest of the list.

### paris-airport: OK, open items
- Changed: the FAQ called bus 9517 "the cheaper and slower" replacement. According to
  Île-de-France Mobilités it runs from Saint-Denis-Pleyel (metro 13 and 14, RER D) to RoissyPôle
  in about 30 minutes on a Bus-Tram ticket, not from central Paris. Rewritten in both languages.
- Confirmed: RoissyBus stopped on 1 March 2026; RER B airport fare €14, a train every 6 to 15
  minutes. Taxi flat fares €56 Right Bank, €65 Left Bank (parisjetaime.com, confirmed
  11 November 2026).
- Sources: iledefrance-mobilites.fr "End of the RoissyBus".
- Not verified: RER B journey time (35 to 45 minutes), the €7 charge for a booked taxi, Orly
  flat fares, private transfer from €70, Eurostar Amsterdam to Paris "just over three hours",
  the Crit'Air sticker rule.

### paris-best-time: OK, open items
- No changes. Closing days confirmed: Louvre Tuesday, Musée d'Orsay Monday (and 1 May,
  25 December), Versailles Monday.
- Sources: louvre.fr, musee-orsay.fr.
- Not verified (general knowledge): climate figures and August closures.

---

## London (`london.ts`)

### london-tower: OK, open items
- Changed: adult ticket £38 (was "about £37"); added children 5 to 15 £19. Both languages.
- Confirmed: Crown Jewels and Yeoman Warder tour included; November hours 10:00 to 16:30 on
  Sunday and Monday (9:00 Tuesday to Saturday), last entry 15:00.
- Source: hrp.org.uk Tower of London home and tickets page.
- Not verified: length of the Yeoman Warder tour ("an hour"), Ceremony of the Keys details.

### london-westminster-abbey: OK
- No changes. Adults £32, 65+ and students £29, children 6 to 17 £14, under 6 free;
  multimedia guide included in 14 languages; open Monday to Saturday, Sunday for services only.
- Source: westminster-abbey.org "Opening times and prices" and "Visit us".
- Not verified: Changing of the Guard schedule (the article only says it is not daily).

### london-harry-potter: OK
- Changed: under 4s go free (was "under 5 free"). Both languages. Note: the official page lists
  child tickets as 5 to 15 and free entry for under 4s; it does not say what a 4-year-old pays.
- Confirmed: adults £58.50 and children £47 in 2026, family £188; Euston to Watford Junction
  about 20 minutes, free shuttle about 15 minutes. Package with transfer from £94 confirmed on
  11 November 2026.
- Source: wbstudiotour.co.uk "Tickets" and "Getting here".

### london-day-trips: OK, open items
- Changed: Windsor Castle £32 booked ahead, £36 on the day (was "about £31 to £36");
  Stonehenge about £25 to £32 (was "about £22 to £27"). The official Stonehenge rates are
  £24.65 to £27.20 online in advance and £29 to £32 on the day (without and with the optional
  donation). Both languages.
- Sources: rct.uk Windsor Castle, english-heritage.org.uk Stonehenge prices.
- Not verified: coach tour prices (£60 to £80, £90 to £130), train times to Windsor and Bath.

### london-pass: OK
- Changed: one-day pass costs £105 at full price (was "roughly £80 to £100"); the London Eye is
  included, so it was removed from "Not included"; the one-day sum is now Tower £38 + Abbey £32
  = £70, and a third sight "reaches" (no longer "passes") the price of a pass. Both languages.
- Source: londonpass.com product page "The London Pass" (adult £105, child £75) and home page.

### london-3-days: OK, open items
- No changes. Ticket budget "about £70" matches Tower £38 + Abbey £32.
- Not verified: Changing of the Guard start time (about 11 am), the 12.5 percent service charge.

### london-hidden-gems: OK, open items
- No changes.
- Not verified (general knowledge): the list itself, St Dunstan in the East history.

### london-arrival: OK, open items
- Changed: Heathrow Express £26 on the day, from £10 booked ahead (was "about £25").
- Confirmed: UK ETA £20, valid two years or until the passport expires, stays up to six months
  (gov.uk). Piccadilly line £5.90 and Elizabeth line £15.50 pay as you go from Heathrow to
  central London (TfL fares API, fares from 1 November 2026; Elizabeth line to Paddington is
  £14.60). Heathrow Express every 15 minutes, 15 minutes to Paddington.
- Sources: gov.uk/eta, api.tfl.gov.uk fares, heathrowexpress.com.
- Not verified: Heathrow Express fare from its own fares page (search results show £26; one
  page says £25), black cab £60 to £100, Eurostar Amsterdam to London "about 4 hours", train
  times from Gatwick, Stansted and Luton.

### london-best-time: OK, open items
- No changes.
- Not verified (general knowledge): climate figures, Buckingham Palace State Rooms in July to
  September, fewer Changing of the Guard days in winter.

---

## Barcelona (`barcelona.ts`)

### barcelona-sagrada-familia: OK, open items
- No changes. €26 with audioguide app, €30 with guided tour, €36 with towers, €40 with guided
  tour and towers; under 30 €24; under 11 free (sagradafamilia.org, confirmed 11 November 2026).
  Central tower (Tower of Jesus Christ) completed on 20 February 2026 at 172.5 metres (Vatican
  News and Catalan News reports).
- Not verified: opening hours and the age rule for the towers.

### barcelona-park-guell: OK
- No changes. €18 general, €13.50 for ages 7 to 12 and over 65, free under 7 with a ticket;
  entry slots between 9:30 and 17:30; no re-entry (parkguell.barcelona, confirmed 11 November
  2026).
- Not verified: walking time from Lesseps or Vallcarca metro.

### barcelona-gaudi-houses: OK, open items
- Changed: La Pedrera now starts at €29 online (was "about €25 online, €29 at the door"), so it
  is no longer the cheaper house on price alone. Rewritten: both start at about €29 online; every
  La Pedrera ticket includes the rooftop, while the basic Casa Batlló ticket does not. The
  "budget" bullet now points to the rooftop being included. Both languages.
- Confirmed: Casa Batlló General Visit from €29, up to €15 cheaper booked in advance; the
  Dragon's Rooftop is listed for the Silver tier and up. La Pedrera adult €29, 9:00 to 17:30 in
  November.
- Sources: casabatllo.es online tickets, lapedrera.com tickets and "La Pedrera by day".
- Not verified: La Pedrera box-office price, the "tablet" at Casa Batlló (the ticket page lists
  an audio guide in 15 languages), evening visit details.

### barcelona-montserrat: OK, open items
- Changed: the combined ticket. The official all-in Trans Montserrat ticket costs €50 (metro,
  return FGC train to Monistrol, rack railway or cable car, Sant Joan and Santa Cova funiculars,
  audiovisual space; open date until 31 December). The article said "roughly €22 to €29".
  Also removed "cheapest" from the do-it-yourself option, since a half-day tour starts at a
  similar price. Both languages.
- Sources: cremallerademontserrat.cat and its ticket shop, fgc.cat Trans Montserrat FAQ.
- Not verified: half-day tour prices (€50 to €80), train time (about one hour), boys' choir
  schedule.

### barcelona-3-days: OK, open items
- No changes. Ticket budget €70 to €100 matches Sagrada Família €26, Park Güell €18 and one
  Gaudí house from €29.
- Not verified: meal times, the ten-trip card covering three days.

### barcelona-hidden-gems: OK, open items
- No changes.
- Not verified (general knowledge): the list, Santa Maria del Mar built in 55 years, afternoon
  closing times, Bunkers del Carmel access rules.

### barcelona-airport: OK, open items
- No changes.
- Confirmed: Aerobús one way €7.75 (aerobusbarcelona.es rates); metro airport ticket €5.90
  (tmb.cat airport ticket).
- Not verified: R2 Nord train fare. The article says "about €5"; third-party sources give either
  €2.90 (integrated single) or €5.50 (zone 4 single). Check rodalies.gencat.cat before launch.
  Also not verified: taxi €35 to €40, journey times, the tourist tax. Press reports (Catalan
  News, Moncloa) agree that the Barcelona tourist tax rose on 1 April 2026 and that a five-star
  hotel now pays about €12 per person per night (€7 regional plus €5 city); one French source
  says up to €15. The article's "up to about €12" was kept but needs the official rate table.

### barcelona-best-time: OK, open items
- No changes.
- Not verified (general knowledge): climate and sea temperatures, La Mercè and Sant Jordi dates,
  the mobile congress timing.

---

## New York (`new-york.ts`)

### nyc-statue-of-liberty: OK
- Changed: general admission $26 for adults (was "roughly $26 to $33"); pedestal and crown
  tickets cost $26.30, only 30 cents more (was "about the same"). Added the pedestal price to the
  facts. Both languages.
- Confirmed: Statue City Cruises is the only authorised seller; crown climb of 162 steps; crown
  tickets need advance booking (nps.gov, confirmed 11 November 2026).
- Source: statuecitycruises.com FAQ (General Admission, Pedestal Reserve and Crown Reserve rates).
- Not verified: "book the crown 3 to 4 months ahead" (third-party sites agree), visit length.

### nyc-911-museum: OK
- Changed: adult price "up to $36" (the official range is $24 to $36; was "roughly $33 to $36");
  visit length 45 to 90 minutes, as the museum advises (was "about two hours"); free Monday
  window made exact: 5:30 to 7 pm, tickets online from 7 am that Monday; added the opening
  hours (Wednesday to Monday and many Tuesdays, 9 am to 7 pm). Both languages.
- Confirmed: the outdoor memorial is free, open daily 8 am to 8 pm.
- Source: 911memorial.org "Visit the Museum".

### nyc-broadway: OK, open items
- No changes.
- Not verified: full prices ($90 to $250), TKTS discounts (up to 50 percent), rush and lottery
  prices ($35 to $50), service fees, Monday dark day. These vary per show; no single official
  source.

### nyc-observation-decks: OK, open items
- Changed: Empire State Building from $46 (was $44); Edge from $44 (was "about $36 to $45");
  One World Observatory from $39 (was "about $31 to $44"). Both languages.
- Sources: esbnyc.com "Buy tickets", edgenyc.com tickets, oneworldobservatory.com tickets.
- Not verified: Top of the Rock "from about $45" (rockefellercenter.com refused the fetch and the
  browser timed out), SUMMIT One Vanderbilt price (not given in the article).

### nyc-citypass: OK
- Changed: the pass was rebuilt. It now costs $149 for adults plus a $2 processing fee (was
  "about $154 to $164") and you choose any 5 of 10 attractions: Empire State Building, American
  Museum of Natural History, Top of the Rock, 9/11 Memorial & Museum, Statue of Liberty ferry,
  Circle Line, Intrepid, Guggenheim, Edge and Whitney. Nothing is "always included" any more.
  Rewrote the facts, the answer, the observation-deck bullet and "Not included" (Edge is now an
  option; One World is not). Savings with five attractions now $30 to $50. Both languages.
- Source: citypass.com/new-york.
- Not verified: the separate-ticket total of $180 to $200 (it depends on the American Museum of
  Natural History and Top of the Rock prices, which could not be fetched).

### nyc-4-days: OK, open items
- No changes. Subway fare $3 since January 2026 and the weekly cap of $35 (MTA board decision,
  mta.info press release, via search; mta.info itself refused the fetch).
- Not verified: tipping norms, walking distances.

### nyc-hidden-gems: OK, open items
- No changes.
- Not verified (general knowledge): the list, Roosevelt Island Tramway fare (a subway fare).

### nyc-airports: OK, open items
- Changed: the JFK flat fare covers all of Manhattan (the article said "below 96th Street"); added
  the $5 weekday rush-hour surcharge (4 to 8 pm). Both languages.
- Confirmed: JFK to Manhattan flat fare $70 plus 50 cents MTA surcharge, $1 improvement
  surcharge, $2.50 congestion surcharge, 75 cents congestion toll, $2 airport pickup fee (nyc.gov
  TLC taxi fares); AirTrain JFK $8.75 (jfkairport.com); subway $3, so AirTrain plus subway
  $11.75; ESTA $40, valid two years or until the passport expires (cbp.gov).
- Not verified: total taxi cost $90 to $110, AirTrain plus LIRR $14 to $16, LaGuardia free bus
  and taxi $40 to $60, Newark AirTrain journey time, flight time from Amsterdam.

### nyc-best-time: OK, open items
- No changes.
- Not verified (general knowledge): climate figures, hotel price peaks, marathon date.

---

## Cancún and Riviera Maya (`cancun.ts`)

No official fee table (INAH, Cultur, SATQ, ADO, Xcaret) could be read: the INAH and Xcaret
pages load their prices dynamically and the others refused or hid them. The figures below rest on
recent press reports and the operators' booking pages where they showed a price. **Every peso and
dollar amount in this file must be re-checked by hand before launch.**

### cancun-chichen-itza: OK, open items
- Changed: entry "about 700 pesos" on one combined ticket (was "about 680 to 700 pesos"). Since
  27 March 2026 the INAH and state (Cultur) fees are sold as a single ticket of 697 pesos for
  foreigners, according to Diario de Yucatán and El Cronista. Both languages.
- Not verified: the official fee (no INAH or Cultur page readable), opening hours 8:00 to 16:00
  with last entry at 15:00, the one-hour time difference, toll costs, tour prices.

### cancun-tulum-ruins: OK, open items
- Changed: the article told readers to "bring up to 650 pesos" because reports ranged from 100 to
  600. Since a July 2026 decree, press reports (Tulum Times, 4 September 2026; Diario de Yucatán,
  4 August 2026) give 265 pesos for the ruins plus 100 pesos for the Jaguar Park around them,
  about 365 pesos in total. Rewritten with that figure and a warning to check locally. One July
  report (Por Esto) gives 165 pesos for the ruins instead. Both languages.
- Not verified: the official INAH fee, opening hours, travel times.

### cancun-isla-mujeres: OK, open items
- No changes. A ticket reseller quoting Ultramar's September 2026 fares gives 580 pesos round
  trip (290 one way) per adult, plus an environmental fee of about 37 pesos, which matches the
  article. Ultramar's own site shows tour prices in USD but not the plain ferry fare.
- Not verified: the official fare, the crossing time (20 to 30 minutes; one source says 15),
  catamaran tour prices, golf-cart rental.

### cancun-xcaret: OK, open items
- Changed: price per adult "about $150 to $200" (was "$100 to $160"). The official price guide on
  xcaret.com loads its table dynamically and could not be read; resellers list Xcaret Basic at
  about $149 to $159 and Xcaret Plus at about $179 to $199. Both languages. The official FAQ
  confirms children pay 25 percent less than adults.
- Not verified: the official price (high priority before launch), cenote prices.

### cancun-5-days: OK, open items
- No changes.
- Not verified (general knowledge): the itinerary timings, the ten percent exchange-rate loss
  when paying in dollars.

### cancun-hidden-gems: OK, open items
- No changes.
- Not verified (general knowledge): the list, "$5 to $25 per cenote or site", rules at Akumal
  and Cobá.

### cancun-airport: OK, open items
- No changes.
- Not verified: Visitax. The state announced in December 2025 that it stays at 285 pesos in 2026
  (Riviera Maya News); the state tax office (SATQ) has also been quoted at 293 pesos. The
  article's "about 290 pesos" sits between the two. visitax.gob.mx shows no amount before
  checkout. ADO fares (about 140 pesos to downtown Cancún, 200 to 255 pesos to Playa del Carmen
  in third-party guides; the article says 220), private transfer prices and travel times.

### cancun-best-time: OK, open items
- No changes.
- Not verified (general knowledge): hurricane season dates, sargassum outlook, climate figures.

### cancun-cozumel-shore: OK, open items
- No changes.
- Not verified: the three cruise piers (Punta Langosta, International, Puerta Maya; matches the
  11 November check of third-party sources), taxi and ferry times.
