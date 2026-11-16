import type { Article } from "../articles";

// Fact check, 16 November 2026. Since January 2026 several French state museums charge
// visitors from outside the European Economic Area (EEA) more. The English pages quote the
// non-EEA price, the Dutch pages the EEA price. Sources, changes and the items that could not
// be verified on an official page are logged per article in FACTCHECK.md.

export const parisArticles: Article[] = [
  {
    id: "paris-eiffel-tickets",
    destinationId: "paris",
    type: "tickets",
    image: "paris",
    readMinutes: 5,
    updated: "2026-11",
    bookingQuery: "Eiffel Tower tickets summit",
    en: {
      slug: "eiffel-tower-tickets",
      title: "Eiffel Tower tickets: second floor or summit, stairs or lift",
      description: "The four Eiffel Tower tickets with their prices, which one is worth it, and how early to book.",
      answer:
        "Book the lift ticket to the summit if this is your one visit: it costs €36.70 and includes the second floor on the way. The second floor alone, at €23.50 by lift, has the better view of the city's landmarks and is enough for most people. Buy only on the official site, as far ahead as you can: summit slots sell out first.",
      facts: [
        ["Summit by lift", "€36.70"],
        ["Summit by stairs and lift", "€28"],
        ["Second floor by lift", "€23.50"],
        ["Second floor by stairs", "€14.80"],
        ["Time needed", "2 to 3 hours with the summit"],
        ["Book ahead", "Lift tickets go on sale 90 days ahead"],
      ],
      sections: [
        {
          heading: "The four tickets",
          bullets: [
            "Lift to the summit: The full visit. A second lift takes you from the second floor to the top at 276 metres (906 feet).",
            "Stairs to the second floor, then lift to the summit: Cheaper, and the 674 steps are easier than they sound. A good choice if lift tickets are gone.",
            "Lift to the second floor: The best view-for-money. You are high enough to see everything and low enough to recognise it.",
            "Stairs to the second floor: The cheapest ticket and often the shortest line.",
          ],
        },
        {
          heading: "Is the summit worth it?",
          paragraphs: [
            "Go to the top for the experience of having been there, not for a better photo. From the summit the city flattens into a map; from the second floor you look across at Sacré-Cœur, the Arc de Triomphe and the Seine. The summit also closes in strong wind, and the wait for the second lift can add 30 to 45 minutes.",
          ],
        },
        {
          heading: "When official tickets are sold out",
          paragraphs: [
            "Try the stairs ticket first: it often has places when the lift does not. Guided tours and resellers hold their own tickets and cost more. Every visitor passes the same security check, so no ticket skips that line.",
          ],
        },
      ],
      tip: "The best photo of the tower is not on the tower. Go to the Trocadéro terrace across the river at sunrise, or to the Bir-Hakeim bridge.",
      faq: [
        ["How much does it cost to go up the Eiffel Tower?", "From €14.80 for the stairs to the second floor to €36.70 for the lift to the summit, for adults."],
        ["Can you buy Eiffel Tower tickets on the day?", "Yes, at the ticket office under the tower, but lines are long and the summit is often sold out. Book online in advance."],
        ["Is it better to visit the Eiffel Tower by day or at night?", "Late afternoon gives you both: go up in daylight and come down after dark. The tower sparkles for five minutes on the hour after sunset."],
      ],
    },
    nl: {
      slug: "eiffeltoren-tickets",
      title: "Eiffeltoren-tickets: tweede verdieping of top, trap of lift",
      description: "De vier tickets voor de Eiffeltoren met hun prijzen, welke het waard is en hoe vroeg je boekt.",
      answer:
        "Boek het liftticket naar de top als dit je enige bezoek is: het kost €36,70 en de tweede verdieping zit erbij. Alleen de tweede verdieping, voor €23,50 met de lift, geeft het mooiste uitzicht op de bezienswaardigheden en is voor de meeste mensen genoeg. Koop alleen op de officiële site en zo vroeg mogelijk: de tijdsloten voor de top zijn als eerste weg.",
      facts: [
        ["Top met de lift", "€36,70"],
        ["Top met trap en lift", "€28"],
        ["Tweede verdieping met de lift", "€23,50"],
        ["Tweede verdieping met de trap", "€14,80"],
        ["Benodigde tijd", "2 tot 3 uur met de top"],
        ["Vooruit boeken", "Lifttickets komen 90 dagen vooruit in de verkoop"],
      ],
      sections: [
        {
          heading: "De vier tickets",
          bullets: [
            "Lift naar de top: Het volledige bezoek. Vanaf de tweede verdieping brengt een tweede lift je naar de top op 276 meter.",
            "Trap naar de tweede verdieping, daarna lift naar de top: Goedkoper, en de 674 treden vallen mee. Een goede keus als de lifttickets op zijn.",
            "Lift naar de tweede verdieping: Het meeste uitzicht voor je geld. Je staat hoog genoeg om alles te zien en laag genoeg om het te herkennen.",
            "Trap naar de tweede verdieping: Het goedkoopste ticket en vaak de kortste rij.",
          ],
        },
        {
          heading: "Is de top de moeite waard?",
          paragraphs: [
            "Ga naar de top om er geweest te zijn, niet voor een mooiere foto. Vanaf de top wordt de stad een plattegrond; vanaf de tweede verdieping kijk je uit op de Sacré-Cœur, de Arc de Triomphe en de Seine. De top gaat bovendien dicht bij harde wind, en het wachten op de tweede lift kost soms 30 tot 45 minuten extra.",
          ],
        },
        {
          heading: "Als de officiële tickets op zijn",
          paragraphs: [
            "Probeer eerst het trapticket: daar is vaak nog plek als de lift vol is. Rondleidingen en wederverkopers hebben eigen tickets en kosten meer. Iedereen gaat door dezelfde veiligheidscontrole, dus die rij sla je met geen enkel ticket over.",
          ],
        },
      ],
      tip: "De mooiste foto van de toren maak je niet op de toren. Ga bij zonsopgang naar het terras van het Trocadéro aan de overkant van de rivier, of naar de brug Bir-Hakeim.",
      faq: [
        ["Wat kost de Eiffeltoren?", "Van €14,80 voor de trap naar de tweede verdieping tot €36,70 voor de lift naar de top, voor volwassenen."],
        ["Kun je op de dag zelf tickets kopen?", "Ja, bij de kassa onder de toren, maar de rijen zijn lang en de top is vaak uitverkocht. Boek vooraf online."],
        ["Kun je de Eiffeltoren beter overdag of 's avonds bezoeken?", "Aan het eind van de middag heb je allebei: je gaat bij daglicht omhoog en komt in het donker naar beneden. Na zonsondergang fonkelt de toren elk heel uur vijf minuten."],
      ],
    },
  },
  {
    id: "paris-louvre-tickets",
    destinationId: "paris",
    type: "tickets",
    image: "paris-louvre",
    readMinutes: 5,
    updated: "2026-11",
    bookingQuery: "Louvre Museum tickets",
    en: {
      slug: "louvre-tickets",
      title: "Louvre tickets: the price for US visitors, time slots and the best hours",
      description: "The Louvre now charges visitors from outside Europe more. What you pay, how time slots work and when to go.",
      answer:
        "A Louvre ticket costs €32 for visitors from outside the European Economic Area, which includes Americans; European residents pay €22. Book a time slot online in advance: it is not strictly required, but without one you can wait an hour or more. The quietest hours are Wednesday and Friday evenings, when the museum stays open until 9 pm.",
      facts: [
        ["Ticket, non-European visitors", "€32"],
        ["Under 18", "Free"],
        ["Closed", "Tuesdays"],
        ["Open", "9 am to 6 pm; Wed and Fri to 9 pm"],
        ["Last entry", "One hour before closing"],
        ["Time needed", "3 hours for the highlights"],
      ],
      sections: [
        {
          heading: "How the ticket works",
          paragraphs: [
            "You choose a date and a half-hour entry slot. The ticket covers the permanent collection and the temporary exhibitions for the whole day. Children under 18 are free whatever their nationality, but should have a free time slot booked too. Bring ID that shows your age or residence if you claim a reduced price.",
          ],
        },
        {
          heading: "Which entrance",
          bullets: [
            "The Pyramid: The main entrance and the longest line, even with a time slot.",
            "Carrousel du Louvre: The underground entrance through the shopping arcade at 99 rue de Rivoli. Usually faster and under cover.",
            "With a guided tour: Groups use their own entrance and go straight in.",
          ],
        },
        {
          heading: "A route for three hours",
          paragraphs: [
            "Do not try to see everything: the museum holds about 35,000 works. Go first to the Mona Lisa in the Denon wing while the room is calmest, then the Winged Victory on the staircase and the Venus de Milo below. Spend what is left on one section you care about, such as the Egyptian rooms or the French crown jewels.",
          ],
        },
      ],
      tip: "On the first Friday of the month the Louvre is free after 6 pm, except in July and August. It is busy, and you still need a time slot.",
      faq: [
        ["How much is the Louvre for Americans?", "€32 since January 2026. The lower €22 price is only for residents of the European Economic Area."],
        ["Do you need to book the Louvre in advance?", "It is strongly recommended. Time slots are not mandatory, but visitors without one wait in a separate, much slower line."],
        ["What day is the Louvre closed?", "Tuesday. It is also closed on 1 January, 1 May and 25 December."],
      ],
    },
    nl: {
      slug: "louvre-tickets",
      title: "Louvre-tickets: prijs, tijdsloten en de rustigste uren",
      description: "Wat het Louvre kost, hoe de tijdsloten werken en wanneer je het best gaat.",
      answer:
        "Een ticket voor het Louvre kost €22 voor inwoners van de Europese Economische Ruimte, dus ook voor Nederlanders; bezoekers van buiten Europa betalen €32. Boek vooraf online een tijdslot: verplicht is het niet, maar zonder sta je al snel een uur of langer in de rij. De rustigste uren zijn woensdag- en vrijdagavond, als het museum tot 21.00 uur open is.",
      facts: [
        ["Ticket, Europese inwoners", "€22"],
        ["Gratis", "Onder 18, en inwoners van de EER onder 26"],
        ["Gesloten", "Dinsdag"],
        ["Open", "9.00 tot 18.00 uur; wo en vr tot 21.00 uur"],
        ["Laatste toegang", "Een uur voor sluiting"],
        ["Benodigde tijd", "3 uur voor de hoogtepunten"],
      ],
      sections: [
        {
          heading: "Hoe het ticket werkt",
          paragraphs: [
            "Je kiest een datum en een tijdslot van een half uur. Het ticket geldt de hele dag voor de vaste collectie en de tijdelijke tentoonstellingen. Ben je jonger dan 26 en woon je in Nederland, dan is de toegang gratis; boek dan wel een gratis tijdslot en neem je identiteitsbewijs mee.",
          ],
        },
        {
          heading: "Welke ingang",
          bullets: [
            "De Piramide: De hoofdingang en de langste rij, ook met een tijdslot.",
            "Carrousel du Louvre: De ondergrondse ingang via de winkelgalerij aan de rue de Rivoli 99. Meestal sneller en overdekt.",
            "Met een rondleiding: Groepen hebben een eigen ingang en lopen direct door.",
          ],
        },
        {
          heading: "Een route voor drie uur",
          paragraphs: [
            "Probeer niet alles te zien: het museum toont ongeveer 35.000 werken. Ga eerst naar de Mona Lisa in de Denon-vleugel, als de zaal het rustigst is, daarna naar de Nikè van Samothrake op de trap en de Venus van Milo eronder. Besteed de rest aan één afdeling die je aanspreekt, zoals de Egyptische zalen of de Franse kroonjuwelen.",
          ],
        },
      ],
      tip: "Op de eerste vrijdag van de maand is het Louvre gratis na 18.00 uur, behalve in juli en augustus. Het is dan druk, en je hebt nog steeds een tijdslot nodig.",
      faq: [
        ["Is het Louvre gratis voor jongeren?", "Ja, voor iedereen onder de 18 en voor inwoners van de Europese Economische Ruimte onder de 26. Neem een identiteitsbewijs mee."],
        ["Moet je het Louvre vooraf boeken?", "Het wordt sterk aangeraden. Een tijdslot is niet verplicht, maar zonder sta je in een aparte, veel tragere rij."],
        ["Op welke dag is het Louvre dicht?", "Op dinsdag. Het is ook dicht op 1 januari, 1 mei en 25 december."],
      ],
    },
  },
  {
    id: "paris-versailles",
    destinationId: "paris",
    type: "tickets",
    image: "paris-versailles",
    readMinutes: 5,
    updated: "2026-11",
    bookingQuery: "Versailles Palace tickets from Paris",
    en: {
      slug: "versailles-tickets-day-trip",
      title: "Versailles tickets and day trip from Paris: what to book",
      description: "Which Versailles ticket to buy, what it costs in each season and how to plan the day from Paris.",
      answer:
        "Buy the Passport ticket: it covers the Palace, the gardens and the Trianon estate, and costs €35 for non-European visitors from April to October and €25 in winter. You must book a time slot for the Palace. Take the first slot of the morning, and never go on a Monday, when the Palace is closed.",
      facts: [
        ["Passport, April to October", "€35 (non-European visitors)"],
        ["Passport, November to March", "€25 (non-European visitors)"],
        ["Under 18", "Free, time slot still required"],
        ["Closed", "Mondays"],
        ["From Paris", "RER C train, roughly 40 minutes"],
        ["Time needed", "A full day"],
      ],
      sections: [
        {
          heading: "What the Passport includes",
          bullets: [
            "The Palace: The state apartments and the Hall of Mirrors. This is the part with the time slot.",
            "The gardens: Free to walk in on most winter days; on fountain-show days in high season they need a ticket, which the Passport covers.",
            "The Trianon estate: Two smaller palaces and Marie-Antoinette's hamlet. Opens at noon, a 25-minute walk from the Palace.",
          ],
        },
        {
          heading: "How to plan the day",
          paragraphs: [
            "Book the 9 am slot and be at the gate early: by 11 am the Hall of Mirrors is shoulder to shoulder. After the Palace, walk down through the gardens, have lunch by the Grand Canal and reach the Trianon when it opens at noon. Rent a bike or a golf cart if walking the whole estate is too much; it is far larger than it looks on the map.",
          ],
        },
        {
          heading: "Guided tour or on your own",
          bullets: [
            "On your own: Cheapest. Train plus Passport, with the free audio guide in the official app.",
            "Guided tour with transport: Costs two to three times as much, but includes the coach from Paris and a guide through the Palace.",
            "Bike tour: A full day with a market picnic by the canal. The most relaxed way to see the grounds.",
          ],
        },
      ],
      tip: "The park behind the gardens is free and open daily. If you only want the setting and not the rooms, you can picnic by the Grand Canal without any ticket.",
      faq: [
        ["How much are Versailles tickets for US visitors?", "The Passport costs €35 from 1 April to 31 October and €25 the rest of the year for visitors from outside the European Economic Area."],
        ["Is Versailles closed on Mondays?", "Yes. The Palace and the Trianon estate are closed every Monday, and on 1 January, 1 May and 25 December."],
        ["Is half a day enough for Versailles?", "Only for the Palace itself. With the gardens and the Trianon you need a full day."],
      ],
    },
    nl: {
      slug: "versailles-tickets-dagtrip",
      title: "Versailles-tickets en dagtrip vanuit Parijs: wat boek je",
      description: "Welk ticket je voor Versailles koopt, wat het per seizoen kost en hoe je de dag vanuit Parijs indeelt.",
      answer:
        "Koop het Passport-ticket: dat geldt voor het paleis, de tuinen en het landgoed Trianon, en kost voor Europese inwoners €32 van april tot en met oktober en €22 in de winter. Voor het paleis moet je een tijdslot boeken. Neem het eerste tijdslot van de ochtend, en ga nooit op maandag, want dan is het paleis dicht.",
      facts: [
        ["Passport, april t/m oktober", "€32 (Europese inwoners)"],
        ["Passport, november t/m maart", "€22 (Europese inwoners)"],
        ["Gratis", "Onder 18, en EU-inwoners onder 26"],
        ["Gesloten", "Maandag"],
        ["Vanuit Parijs", "Trein RER C, ruwweg 40 minuten"],
        ["Benodigde tijd", "Een hele dag"],
      ],
      sections: [
        {
          heading: "Wat bij het Passport zit",
          bullets: [
            "Het paleis: De staatsievertrekken en de Spiegelzaal. Dit is het deel met het tijdslot.",
            "De tuinen: Op de meeste winterdagen gratis toegankelijk; op dagen met fonteinshows in het hoogseizoen heb je een ticket nodig, en dat zit bij het Passport.",
            "Het landgoed Trianon: Twee kleinere paleizen en het gehucht van Marie-Antoinette. Gaat om 12.00 uur open, op 25 minuten lopen van het paleis.",
          ],
        },
        {
          heading: "Hoe je de dag indeelt",
          paragraphs: [
            "Boek het tijdslot van 9.00 uur en sta vroeg bij de poort: om 11.00 uur sta je in de Spiegelzaal schouder aan schouder. Loop na het paleis door de tuinen naar beneden, lunch bij het Grand Canal en kom bij het Trianon aan als het om 12.00 uur opengaat. Huur een fiets of een golfkarretje als het hele landgoed lopen te veel is; het is veel groter dan het op de kaart lijkt.",
          ],
        },
        {
          heading: "Rondleiding of zelf",
          bullets: [
            "Zelf: Het goedkoopst. Trein plus Passport, met de gratis audiogids in de officiële app.",
            "Rondleiding met vervoer: Kost twee tot drie keer zoveel, maar is inclusief de bus vanuit Parijs en een gids door het paleis.",
            "Fietstour: Een hele dag, met een picknick van de markt aan het kanaal. De meest ontspannen manier om het park te zien.",
          ],
        },
      ],
      tip: "Het park achter de tuinen is gratis en elke dag open. Wil je alleen de omgeving en niet de zalen, dan kun je zonder ticket picknicken aan het Grand Canal.",
      faq: [
        ["Wat kost Versailles?", "Het Passport kost voor inwoners van de Europese Economische Ruimte €32 van 1 april tot en met 31 oktober en €22 in de rest van het jaar."],
        ["Is Versailles op maandag dicht?", "Ja. Het paleis en het landgoed Trianon zijn elke maandag dicht, en ook op 1 januari, 1 mei en 25 december."],
        ["Is een halve dag genoeg voor Versailles?", "Alleen voor het paleis zelf. Met de tuinen en het Trianon heb je een hele dag nodig."],
      ],
    },
  },
  {
    id: "paris-seine-cruises",
    destinationId: "paris",
    type: "comparisons",
    image: "paris-seine",
    readMinutes: 4,
    updated: "2026-11",
    bookingQuery: "Seine river cruise Paris",
    en: {
      slug: "best-seine-river-cruises",
      title: "Seine river cruises compared: sightseeing, dinner or hop-on boat",
      description: "The three kinds of Seine cruise side by side, what they cost and the time of day that makes the difference.",
      answer:
        "A one-hour sightseeing cruise is the best Seine cruise for most visitors: it costs about €15 to €20, passes the Eiffel Tower, the Louvre and Notre-Dame, and needs no planning. Take it at dusk, so the monuments light up while you are on the water. A dinner cruise is only worth the price for an occasion.",
      facts: [
        ["Sightseeing cruise", "About 1 hour, €15 to €20"],
        ["Dinner cruise", "2 to 2.5 hours, from about €90"],
        ["Hop-on boat", "Day pass, about €20 to €25"],
        ["Best time", "The hour around sunset"],
        ["Departure points", "Near the Eiffel Tower and Pont Neuf"],
      ],
      sections: [
        {
          heading: "The three types",
          bullets: [
            "One-hour sightseeing cruise: Large open boats with recorded or live commentary. Several companies sail the same loop; choose by departure point, not by name.",
            "Dinner cruise: A glass-roofed boat, a set menu and the same route at a slower pace. The window tables cost extra and are the point of the evening.",
            "Hop-on, hop-off boat: A river shuttle with stops at the main sights. Slow as transport, pleasant as a way to rest your feet.",
          ],
        },
        {
          heading: "How to choose",
          bullets: [
            "Departure point: Boats near the Eiffel Tower suit a visit to the tower; boats from Pont Neuf suit a day around the Louvre and Notre-Dame.",
            "Open deck: In good weather sit on top. Under a glass roof, photos pick up reflections.",
            "Commentary: Smaller boats tend to have a live guide; the largest use a recording in several languages.",
            "Cancellation: Pick a ticket you can move. Rain changes the experience completely.",
          ],
        },
      ],
      tip: "Book the cruise for your first evening. It shows you how the city fits together, and you sit down after the flight.",
      faq: [
        ["How long is a Seine river cruise?", "A standard sightseeing cruise lasts about an hour. Dinner cruises take two to two and a half hours."],
        ["Is a Seine cruise worth it?", "Yes. For the price of a museum ticket you see most of the city's monuments from the river, without walking."],
        ["Do you need to book a Seine cruise in advance?", "Not for a daytime sightseeing cruise outside summer. Book sunset departures and all dinner cruises ahead."],
      ],
    },
    nl: {
      slug: "beste-rondvaarten-seine",
      title: "Rondvaarten over de Seine vergeleken: rondvaart, diner of hop-on boot",
      description: "De drie soorten rondvaarten over de Seine naast elkaar, wat ze kosten en het moment van de dag dat het verschil maakt.",
      answer:
        "Een rondvaart van een uur is voor de meeste bezoekers de beste keus: hij kost ongeveer €15 tot €20, vaart langs de Eiffeltoren, het Louvre en de Notre-Dame, en vraagt geen planning. Ga in de schemering, zodat de monumenten verlicht worden terwijl je op het water bent. Een dinervaart is de prijs alleen waard bij een bijzondere gelegenheid.",
      facts: [
        ["Rondvaart", "Ongeveer 1 uur, €15 tot €20"],
        ["Dinervaart", "2 tot 2,5 uur, vanaf ongeveer €90"],
        ["Hop-on boot", "Dagkaart, ongeveer €20 tot €25"],
        ["Beste moment", "Het uur rond zonsondergang"],
        ["Vertrekpunten", "Bij de Eiffeltoren en de Pont Neuf"],
      ],
      sections: [
        {
          heading: "De drie soorten",
          bullets: [
            "Rondvaart van een uur: Grote open boten met uitleg via een opname of een gids. Meerdere maatschappijen varen hetzelfde rondje; kies op vertrekpunt, niet op naam.",
            "Dinervaart: Een boot met glazen dak, een vast menu en dezelfde route in een lager tempo. De tafels aan het raam kosten extra, en daar draait de avond om.",
            "Hop-on, hop-off boot: Een pendelboot met haltes bij de grote bezienswaardigheden. Traag als vervoer, prettig om je voeten rust te geven.",
          ],
        },
        {
          heading: "Hoe je kiest",
          bullets: [
            "Vertrekpunt: Boten bij de Eiffeltoren passen bij een bezoek aan de toren; boten vanaf de Pont Neuf bij een dag rond het Louvre en de Notre-Dame.",
            "Open dek: Ga bij mooi weer boven zitten. Onder een glazen dak krijg je spiegelingen op je foto's.",
            "Uitleg: Kleinere boten hebben vaker een gids; de grootste gebruiken een opname in meerdere talen.",
            "Annuleren: Kies een ticket dat je kunt verzetten. Regen maakt er een heel andere ervaring van.",
          ],
        },
      ],
      tip: "Boek de rondvaart voor je eerste avond. Je ziet hoe de stad in elkaar zit, en je zit na de reis even rustig.",
      faq: [
        ["Hoe lang duurt een rondvaart over de Seine?", "Een gewone rondvaart duurt ongeveer een uur. Een dinervaart duurt twee tot tweeënhalf uur."],
        ["Is een rondvaart over de Seine de moeite waard?", "Ja. Voor de prijs van een museumkaartje zie je de meeste monumenten van de stad vanaf het water, zonder te lopen."],
        ["Moet je een rondvaart vooraf boeken?", "Buiten de zomer niet voor een rondvaart overdag. Boek vaarten rond zonsondergang en alle dinervaarten wel vooraf."],
      ],
    },
  },
  {
    id: "paris-museum-pass",
    destinationId: "paris",
    type: "worthIt",
    image: "paris-chapelle",
    readMinutes: 4,
    updated: "2026-11",
    en: {
      slug: "is-the-paris-museum-pass-worth-it",
      title: "Is the Paris Museum Pass worth it?",
      description: "With the higher museum prices for non-European visitors, the Paris Museum Pass pays off sooner. The numbers.",
      answer:
        "For American visitors the Paris Museum Pass is now worth it if you visit four or more major sights in two days. The two-day pass costs about €85, while the Louvre (€32) and Versailles (€35) alone come to €67 at the prices for non-European visitors. It does not include the Eiffel Tower, and you still have to reserve time slots at the Louvre and Versailles.",
      facts: [
        ["2-day pass", "About €85"],
        ["4-day pass", "About €105"],
        ["6-day pass", "About €125"],
        ["Includes", "Louvre, Versailles, Orsay, Sainte-Chapelle and more"],
        ["Not included", "Eiffel Tower, Seine cruises"],
        ["Verdict", "Worth it from four major sights"],
      ],
      sections: [
        {
          heading: "The maths for two days",
          paragraphs: [
            "Louvre €32 plus Versailles €35 is €67. Add two more sights, such as the Musée d'Orsay and Sainte-Chapelle, and you pass €85. The pass costs the same for everyone, while single tickets cost more for visitors from outside Europe, so it favours American visitors more than it used to.",
          ],
        },
        {
          heading: "What it does not do",
          bullets: [
            "Skip the line: Not by itself. The Louvre, Versailles and Sainte-Chapelle still require a reserved time slot, which is free with the pass.",
            "Save money for children: Under-18s enter most of these museums free anyway. Buy the pass for the adults only.",
            "Run on your schedule: The days are consecutive and start at first use. A closing day in the middle wastes part of the pass.",
          ],
        },
        {
          heading: "Who should buy it",
          bullets: [
            "Buy it: Adults from outside Europe who plan the Louvre, Versailles and at least two more sights within the pass period.",
            "Skip it: You want one or two museums and prefer to wander, or most of your group is under 18.",
          ],
        },
      ],
      tip: "Check the closing days before you start the pass: the Louvre closes on Tuesday, Versailles and the Musée d'Orsay on Monday.",
      faq: [
        ["Does the Paris Museum Pass include the Eiffel Tower?", "No. The Eiffel Tower is run by the city, not the state museums, and always needs its own ticket."],
        ["Do you still need to reserve with the Paris Museum Pass?", "Yes, at the busiest sights. The Louvre and Versailles require a time slot, booked free of charge on their own sites."],
      ],
    },
    nl: {
      slug: "is-de-paris-museum-pass-de-moeite-waard",
      title: "Is de Paris Museum Pass de moeite waard?",
      description: "Een duidelijk antwoord met de cijfers: wanneer de Paris Museum Pass voor Nederlanders loont en wanneer niet.",
      answer:
        "Voor Nederlandse bezoekers is de Paris Museum Pass meestal alleen de moeite waard als je vijf of meer grote bezienswaardigheden in twee dagen bezoekt. De pas voor twee dagen kost ongeveer €85, terwijl het Louvre (€22) en Versailles (€32) samen op €54 komen. Ben je jonger dan 26, dan zijn de meeste musea al gratis en heb je de pas niet nodig.",
      facts: [
        ["Pas voor 2 dagen", "Ongeveer €85"],
        ["Pas voor 4 dagen", "Ongeveer €105"],
        ["Pas voor 6 dagen", "Ongeveer €125"],
        ["Inbegrepen", "Louvre, Versailles, Orsay, Sainte-Chapelle en meer"],
        ["Niet inbegrepen", "Eiffeltoren, rondvaarten"],
        ["Oordeel", "Loont pas vanaf vijf grote bezienswaardigheden"],
      ],
      sections: [
        {
          heading: "De rekensom voor twee dagen",
          paragraphs: [
            "Louvre €22 plus Versailles €32 is €54. Je hebt dan nog twee of drie bezienswaardigheden nodig, zoals het Musée d'Orsay, de Sainte-Chapelle en de Arc de Triomphe, om boven de €85 uit te komen. De pas kost voor iedereen hetzelfde, terwijl losse kaartjes voor bezoekers van buiten Europa duurder zijn; voor Europeanen loont hij dus minder snel.",
          ],
        },
        {
          heading: "Wat hij niet doet",
          bullets: [
            "De rij overslaan: Niet vanzelf. Het Louvre, Versailles en de Sainte-Chapelle vragen nog steeds een gereserveerd tijdslot, dat met de pas gratis is.",
            "Geld besparen voor jongeren: Wie onder de 26 is en in de EU woont, mag bij de meeste van deze musea al gratis naar binnen.",
            "Jouw planning volgen: De dagen zijn aaneengesloten en gaan in bij het eerste gebruik. Een sluitingsdag ertussen kost je een deel van de pas.",
          ],
        },
        {
          heading: "Voor wie is hij wel iets",
          bullets: [
            "Kopen: Volwassenen vanaf 26 jaar die het Louvre, Versailles en minstens drie andere bezienswaardigheden binnen de looptijd plannen.",
            "Overslaan: Je wilt één of twee musea en verder vooral rondlopen, of je bent jonger dan 26.",
          ],
        },
      ],
      tip: "Bekijk de sluitingsdagen voordat je de pas laat ingaan: het Louvre is dicht op dinsdag, Versailles en het Musée d'Orsay op maandag.",
      faq: [
        ["Zit de Eiffeltoren bij de Paris Museum Pass?", "Nee. De Eiffeltoren valt onder de stad en niet onder de staatsmusea, en heeft altijd een eigen ticket nodig."],
        ["Moet je met de Paris Museum Pass nog reserveren?", "Ja, bij de drukste bezienswaardigheden. Het Louvre en Versailles vragen een tijdslot, dat je gratis op hun eigen site boekt."],
      ],
    },
  },
  {
    id: "paris-3-days",
    destinationId: "paris",
    type: "itineraries",
    image: "paris-montmartre",
    readMinutes: 7,
    updated: "2026-11",
    bookingQuery: "Paris tours",
    en: {
      slug: "paris-in-3-days",
      title: "Paris in 3 days: a day-by-day itinerary",
      description: "Three days in Paris planned around the closing days, with the three bookings to make first.",
      answer:
        "Three days is enough for the main sights of Paris if you plan around the closing days: the Louvre is closed on Tuesday and Versailles on Monday. Spend day one on the Eiffel Tower and the river, day two on the Louvre and the islands, and day three on Versailles or Montmartre. Book the Eiffel Tower, the Louvre and Versailles before you fly.",
      facts: [
        ["Book first", "Eiffel Tower, Louvre, Versailles"],
        ["Closed days", "Louvre Tuesday, Versailles Monday"],
        ["Walking", "7 to 9 miles (11 to 15 km) a day"],
        ["Best base", "The Marais, Saint-Germain or near the Louvre"],
        ["Budget for tickets", "About €130 to €150 per adult from the US"],
      ],
      sections: [
        {
          heading: "Day 1: The tower and the river",
          bullets: [
            "9:30 am: Eiffel Tower on a morning slot. Start at the Trocadéro for the photo, then cross the bridge.",
            "12:30 pm: Lunch on Rue Cler, a market street ten minutes from the tower.",
            "2:30 pm: Walk the river to the Pont Alexandre III and up the Champs-Élysées to the Arc de Triomphe. Climb it for the view down twelve avenues.",
            "Sunset: A one-hour Seine cruise, timed so the lights come on while you sail.",
          ],
        },
        {
          heading: "Day 2: The Louvre and the islands",
          bullets: [
            "9:00 am: The Louvre at opening. Three hours, with a plan.",
            "12:30 pm: Lunch near the Palais Royal, then a walk through its arcades and garden.",
            "3:00 pm: Sainte-Chapelle for the stained glass, then Notre-Dame. The cathedral is free; a free reservation shortens the wait.",
            "Evening: Cross to the Left Bank for dinner in Saint-Germain or the Latin Quarter.",
          ],
        },
        {
          heading: "Day 3: Versailles or Montmartre",
          bullets: [
            "Option A, Versailles: The first Palace slot, the gardens and the Trianon. You are back in Paris by early evening.",
            "Option B, Paris: The Musée d'Orsay in the morning for the Impressionists, then Montmartre in the afternoon: Sacré-Cœur, the back streets and the vineyard.",
            "Evening: A last walk along the Canal Saint-Martin or through the Marais.",
          ],
        },
      ],
      tip: "Greet with a bonjour before anything else, in every shop and café. It changes the service you get more than any tip.",
      faq: [
        ["Is 3 days enough for Paris?", "Yes for the main sights. With four or five days you can do both Versailles and Montmartre and add a second museum."],
        ["What should I book in advance for Paris?", "The Eiffel Tower, the Louvre and Versailles. Add Sainte-Chapelle and the Notre-Dame towers in high season."],
        ["Do you tip in Paris?", "Service is included in restaurant prices. Leaving a euro or two for good service is appreciated but not expected."],
      ],
    },
    nl: {
      slug: "parijs-in-3-dagen",
      title: "Parijs in 3 dagen: een route per dag",
      description: "Drie dagen Parijs ingedeeld rond de sluitingsdagen, met de drie reserveringen die je als eerste maakt.",
      answer:
        "Drie dagen is genoeg voor de hoogtepunten van Parijs als je rekening houdt met de sluitingsdagen: het Louvre is dicht op dinsdag en Versailles op maandag. Besteed dag één aan de Eiffeltoren en de rivier, dag twee aan het Louvre en de eilanden, en dag drie aan Versailles of Montmartre. Boek de Eiffeltoren, het Louvre en Versailles voor vertrek.",
      facts: [
        ["Eerst boeken", "Eiffeltoren, Louvre, Versailles"],
        ["Sluitingsdagen", "Louvre dinsdag, Versailles maandag"],
        ["Lopen", "11 tot 15 km per dag"],
        ["Beste uitvalsbasis", "De Marais, Saint-Germain of bij het Louvre"],
        ["Budget voor tickets", "Ongeveer €110 tot €130 per volwassene"],
      ],
      sections: [
        {
          heading: "Dag 1: De toren en de rivier",
          bullets: [
            "9.30 uur: Eiffeltoren in een ochtendslot. Begin bij het Trocadéro voor de foto en steek daarna de brug over.",
            "12.30 uur: Lunch in de Rue Cler, een marktstraat op tien minuten van de toren.",
            "14.30 uur: Loop langs de rivier naar de Pont Alexandre III en over de Champs-Élysées naar de Arc de Triomphe. Beklim hem voor het uitzicht over twaalf avenues.",
            "Zonsondergang: Een rondvaart van een uur over de Seine, zo gepland dat de lichten aangaan terwijl je vaart.",
          ],
        },
        {
          heading: "Dag 2: Het Louvre en de eilanden",
          bullets: [
            "9.00 uur: Het Louvre bij opening. Drie uur, met een plan.",
            "12.30 uur: Lunch bij het Palais Royal, daarna een wandeling door de galerijen en de tuin.",
            "15.00 uur: De Sainte-Chapelle voor de glas-in-loodramen, daarna de Notre-Dame. De kathedraal is gratis; met een gratis reservering wacht je korter.",
            "Avond: Steek over naar de linkeroever voor een diner in Saint-Germain of het Quartier Latin.",
          ],
        },
        {
          heading: "Dag 3: Versailles of Montmartre",
          bullets: [
            "Optie A, Versailles: Het eerste tijdslot in het paleis, de tuinen en het Trianon. Aan het begin van de avond ben je terug in Parijs.",
            "Optie B, Parijs: 's Ochtends het Musée d'Orsay voor de impressionisten, 's middags Montmartre: de Sacré-Cœur, de achterstraatjes en de wijngaard.",
            "Avond: Een laatste wandeling langs het Canal Saint-Martin of door de Marais.",
          ],
        },
      ],
      tip: "Begin altijd met bonjour, in elke winkel en elk café. Dat verandert de bediening meer dan welke fooi ook.",
      faq: [
        ["Is 3 dagen genoeg voor Parijs?", "Voor de hoogtepunten wel. Met vier of vijf dagen kun je zowel Versailles als Montmartre doen en een tweede museum toevoegen."],
        ["Wat moet ik vooraf boeken voor Parijs?", "De Eiffeltoren, het Louvre en Versailles. Boek in het hoogseizoen ook de Sainte-Chapelle en de torens van de Notre-Dame."],
        ["Geef je fooi in Parijs?", "De bediening zit bij de restaurantprijs in. Een euro of twee voor goede service wordt gewaardeerd, maar is niet verplicht."],
      ],
    },
  },
  {
    id: "paris-hidden-gems",
    destinationId: "paris",
    type: "hiddenGems",
    image: "paris-passage",
    readMinutes: 6,
    updated: "2026-11",
    bookingQuery: "Paris hidden gems walking tour",
    en: {
      slug: "hidden-gems",
      title: "Hidden gems in Paris: 9 places most visitors walk past",
      description: "Nine places in Paris without a line: glass-roofed arcades, a park on an old railway and a Roman arena.",
      answer:
        "The best hidden places in Paris are the covered passages near the Palais Royal, the Coulée Verte walkway on an old railway viaduct, and the Musée Carnavalet, the free museum of the city's history. None needs a ticket or a reservation, and all three are within twenty minutes of the Louvre.",
      facts: [
        ["Cost", "Free, or a few euros"],
        ["Reservation", "Not needed"],
        ["Best area", "2nd, 3rd, 5th and 12th arrondissements"],
        ["Time", "Half a day covers four or five"],
      ],
      sections: [
        {
          heading: "The nine places",
          bullets: [
            "Galerie Vivienne and the covered passages: Shopping arcades from the 1820s with mosaic floors and glass roofs. The first malls in the world, still in use.",
            "The Coulée Verte: A planted walkway on top of a disused railway viaduct, running east from the Bastille. It opened years before New York's High Line.",
            "Musée Carnavalet: The history of Paris in two mansions in the Marais. The permanent collection is free.",
            "Arènes de Lutèce: A Roman amphitheatre hidden behind apartment buildings in the Latin Quarter. Locals play boules in it.",
            "Canal Saint-Martin: Iron footbridges, locks and tree-lined quays. Come on a Sunday, when the roads along it close to cars.",
            "Parc des Buttes-Chaumont: A park with cliffs, a lake and a temple on a rock, built in an old quarry. The best picnic view in the city.",
            "The tea room of the Grande Mosquée: Mint tea and pastries in a tiled courtyard next to the Jardin des Plantes.",
            "Petit Palais: A free fine-arts museum across from the Grand Palais, with a garden café few visitors find.",
            "Square du Vert-Galant: The tip of the Île de la Cité, at water level under the Pont Neuf. Where Parisians sit with a bottle at sunset.",
          ],
        },
        {
          heading: "How to combine them",
          paragraphs: [
            "Galerie Vivienne is five minutes from the Palais Royal and fits after the Louvre. The Musée Carnavalet and the start of the Coulée Verte are both in or beside the Marais and make an easy afternoon. The Arènes de Lutèce and the Grande Mosquée are a short walk apart in the Latin Quarter.",
          ],
        },
      ],
      tip: "Many small museums in Paris close on Monday or Tuesday. Check the day before you cross the city for one.",
      faq: [
        ["What are the covered passages of Paris?", "Glass-roofed shopping arcades built in the early 19th century. About twenty survive, mostly on the Right Bank between the Palais Royal and the Grands Boulevards."],
        ["What is free to do in Paris?", "The permanent collections of the city-run museums such as the Carnavalet and the Petit Palais, Notre-Dame, all parks, and the views from Montmartre and the Trocadéro."],
      ],
    },
    nl: {
      slug: "verborgen-plekken",
      title: "Verborgen plekken in Parijs: 9 plekken waar de meeste bezoekers langslopen",
      description: "Negen plekken in Parijs zonder rij: overdekte winkelgalerijen, een park op een oud spoorviaduct en een Romeinse arena.",
      answer:
        "De mooiste verborgen plekken in Parijs zijn de overdekte passages bij het Palais Royal, de wandelroute Coulée Verte op een oud spoorviaduct en het Musée Carnavalet, het gratis museum over de geschiedenis van de stad. Je hebt nergens een ticket of reservering nodig, en alle drie liggen binnen twintig minuten van het Louvre.",
      facts: [
        ["Kosten", "Gratis, of een paar euro"],
        ["Reserveren", "Niet nodig"],
        ["Beste gebied", "Het 2e, 3e, 5e en 12e arrondissement"],
        ["Tijd", "In een halve dag zie je er vier of vijf"],
      ],
      sections: [
        {
          heading: "De negen plekken",
          bullets: [
            "Galerie Vivienne en de overdekte passages: Winkelgalerijen uit de jaren 1820 met mozaïekvloeren en glazen daken. De eerste winkelcentra ter wereld, en nog steeds in gebruik.",
            "De Coulée Verte: Een beplante wandelroute boven op een buiten gebruik geraakt spoorviaduct, vanaf de Bastille naar het oosten. Hij ging jaren eerder open dan de High Line in New York.",
            "Musée Carnavalet: De geschiedenis van Parijs in twee stadspaleizen in de Marais. De vaste collectie is gratis.",
            "Arènes de Lutèce: Een Romeins amfitheater, verscholen achter appartementen in het Quartier Latin. Buurtbewoners spelen er jeu de boules.",
            "Canal Saint-Martin: IJzeren voetgangersbruggen, sluizen en kades met bomen. Kom op zondag, als de wegen erlangs autovrij zijn.",
            "Parc des Buttes-Chaumont: Een park met rotswanden, een meer en een tempeltje op een rots, aangelegd in een oude steengroeve. Het mooiste picknickuitzicht van de stad.",
            "De theesalon van de Grande Mosquée: Muntthee en gebak op een betegelde binnenplaats naast de Jardin des Plantes.",
            "Petit Palais: Een gratis museum voor schone kunsten tegenover het Grand Palais, met een tuincafé dat weinig bezoekers vinden.",
            "Square du Vert-Galant: De punt van het Île de la Cité, op waterhoogte onder de Pont Neuf. Waar Parijzenaars bij zonsondergang met een fles gaan zitten.",
          ],
        },
        {
          heading: "Hoe je ze combineert",
          paragraphs: [
            "De Galerie Vivienne ligt op vijf minuten van het Palais Royal en past na het Louvre. Het Musée Carnavalet en het begin van de Coulée Verte liggen in of naast de Marais en vullen samen een rustige middag. De Arènes de Lutèce en de Grande Mosquée liggen op loopafstand van elkaar in het Quartier Latin.",
          ],
        },
      ],
      tip: "Veel kleine musea in Parijs zijn dicht op maandag of dinsdag. Controleer de dag voordat je er de stad voor doorkruist.",
      faq: [
        ["Wat zijn de overdekte passages van Parijs?", "Winkelgalerijen met glazen daken uit het begin van de 19e eeuw. Er zijn er nog ongeveer twintig, vooral op de rechteroever tussen het Palais Royal en de Grands Boulevards."],
        ["Wat is er gratis te doen in Parijs?", "De vaste collecties van de stedelijke musea, zoals het Carnavalet en het Petit Palais, de Notre-Dame, alle parken, en het uitzicht vanaf Montmartre en het Trocadéro."],
      ],
    },
  },
  {
    id: "paris-airport",
    destinationId: "paris",
    type: "practical",
    image: "paris-cdg",
    readMinutes: 4,
    updated: "2026-11",
    bookingQuery: "Paris CDG airport transfer",
    en: {
      slug: "cdg-airport-to-paris",
      title: "CDG Airport to Paris: train, taxi or transfer",
      description: "The ways from Charles de Gaulle Airport into Paris compared on price and time, and what changed in 2026.",
      answer:
        "The RER B train is the cheapest fast way from Charles de Gaulle Airport to central Paris: €14 per adult, about 35 to 45 minutes. With two or more people and luggage, an official taxi at the flat fare of €56 to the Right Bank or €65 to the Left Bank costs little more and goes to your door. The RoissyBus to Opéra stopped running in March 2026.",
      facts: [
        ["RER B train", "€14, about 35 to 45 minutes"],
        ["Taxi to the Right Bank", "Flat fare of €56"],
        ["Taxi to the Left Bank", "Flat fare of €65"],
        ["Booked taxi", "Adds a €7 reservation charge"],
        ["RoissyBus", "Discontinued since 1 March 2026"],
        ["Private transfer", "From about €70, driver meets you"],
      ],
      sections: [
        {
          heading: "Which one to choose",
          bullets: [
            "Solo or a couple with light bags: The RER B. It stops at Gare du Nord, Châtelet and Saint-Michel, where you change to the metro.",
            "Two or more with suitcases, or after an overnight flight: A taxi at the flat fare. It is per car, not per person.",
            "Families or late arrivals: A pre-booked transfer with a driver waiting in arrivals and child seats on request.",
          ],
        },
        {
          heading: "What to watch for",
          paragraphs: [
            "Take taxis only from the official rank outside the terminal, and ignore drivers who approach you inside. The flat fare is fixed by law and includes luggage; the Seine decides whether your hotel counts as Right Bank or Left Bank. The airport train needs its own airport ticket, loaded on a Navigo Easy card or in a phone wallet: an ordinary metro ticket is not valid and inspectors fine on the spot.",
          ],
        },
        {
          heading: "Flying into Orly",
          paragraphs: [
            "Orly is closer to the city. Metro line 14 runs from the airport to the centre with the same airport ticket, and taxis have their own lower flat fares.",
          ],
        },
      ],
      faq: [
        ["How much is a taxi from CDG to Paris?", "A flat fare of €56 to addresses on the Right Bank and €65 to the Left Bank, per car, luggage included."],
        ["Is the RER B from CDG safe?", "Yes. Keep your bags close and your phone away near the doors, as on any big-city train, and avoid the last trains if you arrive very late."],
        ["Is there still a RoissyBus?", "No. It stopped on 1 March 2026. Use the RER B, a taxi, or express bus 9517, which runs from Saint-Denis-Pleyel (metro line 14) to the airport in about 30 minutes on a bus ticket."],
      ],
    },
    nl: {
      slug: "naar-parijs-trein-of-vliegveld",
      title: "Naar Parijs: met de trein, het vliegtuig of de auto",
      description: "Hoe je vanuit Nederland in Parijs komt, en hoe je van station of vliegveld bij je hotel raakt.",
      answer:
        "Vanuit Nederland is de trein de makkelijkste manier naar Parijs: de Eurostar rijdt rechtstreeks van Amsterdam en Rotterdam naar Gare du Nord, midden in de stad. Vlieg je naar Charles de Gaulle, dan kost de trein RER B naar het centrum €14 en een taxi een vast tarief van €56 naar de rechteroever of €65 naar de linkeroever. Met de auto de stad in is het minst handig.",
      facts: [
        ["Trein", "Eurostar, rechtstreeks naar Gare du Nord"],
        ["RER B vanaf het vliegveld", "€14, ongeveer 35 tot 45 minuten"],
        ["Taxi naar de rechteroever", "Vast tarief van €56"],
        ["Taxi naar de linkeroever", "Vast tarief van €65"],
        ["RoissyBus", "Opgeheven sinds 1 maart 2026"],
        ["Auto", "Milieusticker verplicht, parkeren is duur"],
      ],
      sections: [
        {
          heading: "Met de trein",
          paragraphs: [
            "De Eurostar, de vroegere Thalys, brengt je in ruim drie uur van Amsterdam naar Parijs. Je komt aan op Gare du Nord, vanwaar de metro en de RER in een kwartier in het centrum zijn. Boek vroeg: de prijzen stijgen naarmate de trein voller raakt, en rond vakanties is hij weken vooruit uitverkocht.",
          ],
        },
        {
          heading: "Met het vliegtuig",
          bullets: [
            "RER B: De goedkoopste snelle manier. Stopt op Gare du Nord, Châtelet en Saint-Michel, waar je overstapt op de metro.",
            "Taxi: Een vast tarief per auto, inclusief bagage. Neem alleen taxi's bij de officiële standplaats buiten de terminal.",
            "Let op het kaartje: De trein vanaf het vliegveld vraagt een eigen vliegveldticket op een Navigo Easy-kaart of in je telefoon. Een gewoon metrokaartje is niet geldig.",
          ],
        },
        {
          heading: "Met de auto",
          paragraphs: [
            "Rijden naar Parijs kan, rijden in Parijs wil je niet. Voor de stad heb je een Franse milieusticker nodig, die je vooraf online bestelt, en parkeren in het centrum is duur. Zet de auto bij een station aan de rand van de stad of bij je hotel en doe de rest met de metro.",
          ],
        },
      ],
      faq: [
        ["Hoe lang duurt de trein van Amsterdam naar Parijs?", "Ruim drie uur met de rechtstreekse Eurostar naar Gare du Nord."],
        ["Wat kost een taxi van Charles de Gaulle naar Parijs?", "Een vast tarief van €56 naar adressen op de rechteroever en €65 naar de linkeroever, per auto en inclusief bagage."],
        ["Rijdt de RoissyBus nog?", "Nee. Die is op 1 maart 2026 gestopt. Neem de RER B, een taxi, of expresbus 9517, die met een busticket in ongeveer 30 minuten van Saint-Denis-Pleyel (metrolijn 14) naar het vliegveld rijdt."],
      ],
    },
  },
  {
    id: "paris-best-time",
    destinationId: "paris",
    type: "practical",
    image: "paris-luxembourg",
    readMinutes: 4,
    updated: "2026-11",
    en: {
      slug: "best-time-to-visit-paris",
      title: "Best time to visit Paris: season by season",
      description: "When Paris is at its best, when it is crowded or closed, and what each season costs you.",
      answer:
        "The best time to visit Paris is from April to early June and from September to October: mild weather, long days and the city in full swing. July and August are warm and crowded with visitors while many Parisians are away, and some family-run restaurants close in August. November to March is the cheapest and quietest period, cold and grey, with the Christmas lights as its bright spot.",
      facts: [
        ["Best months", "April to early June, September, October"],
        ["Warmest", "July and August, highs around 77°F (25°C)"],
        ["Cheapest", "January and February"],
        ["Busiest", "June to August, and Christmas week"],
        ["Ticket prices", "Versailles is cheaper from November to March"],
      ],
      sections: [
        {
          heading: "Season by season",
          bullets: [
            "Spring (April to early June): Gardens in bloom and café terraces open. Pack a layer and an umbrella; showers pass quickly.",
            "Summer (mid-June to August): Daylight until 10 pm. Book everything ahead, and note that many small restaurants and shops close for part of August.",
            "Autumn (September and October): Parisians are back, the cultural season starts and the light is at its best.",
            "Winter (November to March): Short days and low prices. Museums are calm apart from the weeks around Christmas and New Year.",
          ],
        },
        {
          heading: "Days to plan around",
          paragraphs: [
            "The Louvre is closed on Tuesdays, and Versailles and the Musée d'Orsay on Mondays. Most museums close on 1 May, and the city is busy around 14 July, the national holiday. On the first Sunday of the month some museums are free, which means lines.",
          ],
        },
      ],
      faq: [
        ["Is Paris worth visiting in winter?", "Yes, if you come for museums, food and the Christmas lights rather than terraces and parks. Prices are at their lowest."],
        ["Is August a bad time to visit Paris?", "Not bad, but different. The big sights are full of visitors while many local restaurants and shops are closed for the holidays."],
      ],
    },
    nl: {
      slug: "beste-reistijd-parijs",
      title: "Beste reistijd voor Parijs: per seizoen",
      description: "Wanneer Parijs op zijn best is, wanneer het druk of dicht is, en wat elk seizoen je kost.",
      answer:
        "De beste reistijd voor Parijs is van april tot begin juni en in september en oktober: zacht weer, lange dagen en een stad die volop draait. Juli en augustus zijn warm en vol toeristen, terwijl veel Parijzenaars weg zijn en sommige familierestaurants in augustus dicht zijn. November tot en met maart is de goedkoopste en rustigste periode, koud en grijs, met de kerstverlichting als lichtpunt.",
      facts: [
        ["Beste maanden", "April tot begin juni, september, oktober"],
        ["Warmst", "Juli en augustus, rond de 25 °C"],
        ["Goedkoopst", "Januari en februari"],
        ["Drukst", "Juni tot en met augustus, en de kerstweek"],
        ["Ticketprijzen", "Versailles is goedkoper van november t/m maart"],
      ],
      sections: [
        {
          heading: "Per seizoen",
          bullets: [
            "Lente (april tot begin juni): Tuinen in bloei en terrassen open. Neem een extra laag en een paraplu mee; buien trekken snel over. Rond de meivakantie en Hemelvaart is het druk met Nederlanders.",
            "Zomer (half juni tot en met augustus): Licht tot 22.00 uur. Boek alles vooraf, en houd er rekening mee dat veel kleine restaurants en winkels een deel van augustus dicht zijn.",
            "Herfst (september en oktober): De Parijzenaars zijn terug, het culturele seizoen begint en het licht is op zijn mooist. De herfstvakantie is een goed moment.",
            "Winter (november tot en met maart): Korte dagen en lage prijzen. In de musea is het rustig, behalve in de weken rond kerst en oud en nieuw.",
          ],
        },
        {
          heading: "Dagen om rekening mee te houden",
          paragraphs: [
            "Het Louvre is dicht op dinsdag, Versailles en het Musée d'Orsay op maandag. De meeste musea zijn dicht op 1 mei, en rond 14 juli, de nationale feestdag, is het druk in de stad. Op de eerste zondag van de maand zijn sommige musea gratis, en dat betekent rijen.",
          ],
        },
      ],
      faq: [
        ["Is Parijs in de winter de moeite waard?", "Ja, als je komt voor musea, eten en de kerstverlichting en niet voor terrassen en parken. De prijzen zijn dan het laagst."],
        ["Is augustus een slechte tijd voor Parijs?", "Niet slecht, maar anders. De grote bezienswaardigheden zijn vol bezoekers, terwijl veel buurtrestaurants en winkels dicht zijn wegens vakantie."],
      ],
    },
  },
];
