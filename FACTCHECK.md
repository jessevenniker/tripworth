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
