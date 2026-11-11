import type { Article } from "../articles";

// Fact check, 11 November 2026.
//
// Confirmed on official pages:
// - Colosseum (colosseo.it): ticket types and validity, tickets in the holder's name,
//   sales open 30 days ahead, opens 8:30, free first Sunday of the month.
// - Pantheon (direzionemuseiroma.cultura.gov.it): EUR 7 since 1 July 2026, under 18 free,
//   9:00 to 19:00, last entry 18:30, free first Sunday without online booking.
// - Roma Pass (museicapitolini.org): EUR 38 for 48 hours, EUR 62.90 for 72 hours.
// - Transport (atac.roma.it): 72-hour ticket EUR 22. Taxi (adr.it): EUR 55 fixed fare.
//
// Only found on third-party sites, official page not reachable. Re-check before launch:
// - Colosseum prices (EUR 18 standard, EUR 24 Full Experience).
// - Vatican Museums price (EUR 20 plus EUR 5 booking fee) and opening hours.
// - Borghese Gallery price (EUR 18 including booking fee) and two-hour slots.
// - Leonardo Express EUR 14, FL1 train EUR 8, airport bus about EUR 7.
// - Higher fare for taxis licensed in Fiumicino, Appian Way car-free Sundays, tour price ranges.

export const romeArticles: Article[] = [
  {
    id: "rome-colosseum-tickets",
    destinationId: "rome",
    type: "tickets",
    image: "rome",
    readMinutes: 5,
    updated: "2026-11",
    bookingQuery: "Colosseum Rome tickets",
    en: {
      slug: "colosseum-tickets",
      title: "Colosseum tickets: which one to buy and when to book",
      description: "The three Colosseum ticket types explained, what each one includes, and how far ahead to book.",
      answer:
        "Buy the standard timed ticket if you just want to see the Colosseum, Roman Forum and Palatine Hill; it costs about €18. Pay more for a Full Experience ticket only if you want to stand on the arena floor or go underground. Book as soon as your dates are fixed: official tickets are released about 30 days ahead and summer slots sell out within hours.",
      facts: [
        ["Standard ticket", "About €18, valid 24 hours"],
        ["Includes", "Colosseum, Roman Forum, Palatine Hill"],
        ["Arena and underground", "About €24 (Full Experience), valid 2 days"],
        ["Book ahead", "30 days for April to October"],
        ["Time needed", "3 to 4 hours for all three sites"],
        ["Bring", "Photo ID: tickets carry your name"],
      ],
      sections: [
        {
          heading: "The three ticket types",
          bullets: [
            "Standard (24 hours): One timed entry to the Colosseum plus the Forum and Palatine. Right for most first-time visitors.",
            "Full Experience Arena: Adds the reconstructed arena floor, where you look up at the stands the way a gladiator did. Valid two days and includes the extra sites in the Forum.",
            "Full Experience Underground and Arena: Adds the tunnels and cells below the arena as well. Limited places, and the first to sell out.",
          ],
        },
        {
          heading: "When official tickets are sold out",
          paragraphs: [
            "Sold out on the official site does not mean sold out everywhere. Tour companies hold their own allocations, so a guided tour or a reseller ticket is often still available at a higher price. For a first visit a guide is worth it anyway: the Forum is a field of ruins that means little without one.",
          ],
        },
        {
          heading: "Best time of day",
          paragraphs: [
            "Take the first slot of the morning or one in the last two hours before closing. Midday in summer is hot, crowded and has almost no shade in the Forum. Visit the Colosseum first while your timed slot is fixed, then walk the Forum and Palatine at your own pace.",
          ],
        },
      ],
      tip: "Entry is free on the first Sunday of the month, but the crowds are at their worst that day. With limited days in Rome it is not worth it.",
      faq: [
        ["Can I buy Colosseum tickets at the door?", "There is a ticket office, but same-day tickets are rarely available from April to October. Book online in advance."],
        ["Is the Roman Forum included?", "Yes. Every Colosseum ticket includes one entry to the Roman Forum and Palatine Hill, which share a single site."],
        ["How long do you need at the Colosseum?", "About one hour inside the Colosseum and two more for the Forum and Palatine Hill."],
      ],
    },
    nl: {
      slug: "colosseum-tickets",
      title: "Colosseum-tickets: welke koop je en wanneer boek je",
      description: "De drie soorten Colosseum-tickets uitgelegd, wat erbij zit en hoe ver vooruit je boekt.",
      answer:
        "Koop het standaardticket met tijdslot als je het Colosseum, het Forum Romanum en de Palatijn wilt zien; dat kost ongeveer €18. Betaal alleen meer voor een Full Experience-ticket als je op de arenavloer wilt staan of de ondergrondse gangen in wilt. Boek zodra je data vaststaan: officiële tickets komen ongeveer 30 dagen vooruit vrij en zijn in de zomer binnen een paar uur weg.",
      facts: [
        ["Standaardticket", "Ongeveer €18, 24 uur geldig"],
        ["Inclusief", "Colosseum, Forum Romanum, Palatijn"],
        ["Arena en ondergronds", "Ongeveer €24 (Full Experience), 2 dagen geldig"],
        ["Vooruit boeken", "30 dagen voor april tot en met oktober"],
        ["Benodigde tijd", "3 tot 4 uur voor alle drie"],
        ["Meenemen", "Legitimatie: tickets staan op naam"],
      ],
      sections: [
        {
          heading: "De drie soorten tickets",
          bullets: [
            "Standaard (24 uur): Eén toegang met tijdslot tot het Colosseum, plus het Forum en de Palatijn. Goed voor de meeste eerste bezoeken.",
            "Full Experience Arena: Met de herbouwde arenavloer, waar je omhoogkijkt naar de tribunes zoals een gladiator dat deed. Twee dagen geldig en inclusief de extra locaties op het Forum.",
            "Full Experience Underground and Arena: Ook met de gangen en cellen onder de arena. Beperkt aantal plaatsen en als eerste uitverkocht.",
          ],
        },
        {
          heading: "Als de officiële tickets op zijn",
          paragraphs: [
            "Uitverkocht op de officiële site betekent niet overal uitverkocht. Touraanbieders hebben eigen contingenten, dus een rondleiding of een ticket via een wederverkoper is vaak nog te krijgen, tegen een hogere prijs. Bij een eerste bezoek is een gids het sowieso waard: het Forum is een veld met ruïnes dat zonder uitleg weinig zegt.",
          ],
        },
        {
          heading: "Beste moment van de dag",
          paragraphs: [
            "Neem het eerste tijdslot van de ochtend of een slot in de laatste twee uur voor sluiting. Midden op de dag is het in de zomer heet en druk, en op het Forum is bijna geen schaduw. Ga eerst naar het Colosseum, omdat je tijdslot vastligt, en loop daarna in je eigen tempo over het Forum en de Palatijn.",
          ],
        },
      ],
      tip: "Op de eerste zondag van de maand is de toegang gratis, maar dan is de drukte het grootst. Met weinig dagen in Rome is dat het niet waard.",
      faq: [
        ["Kan ik Colosseum-tickets aan de deur kopen?", "Er is een kassa, maar van april tot en met oktober zijn er zelden tickets voor dezelfde dag. Boek vooraf online."],
        ["Zit het Forum Romanum erbij?", "Ja. Elk Colosseum-ticket geeft één keer toegang tot het Forum Romanum en de Palatijn, die samen één terrein vormen."],
        ["Hoeveel tijd heb je nodig?", "Ongeveer een uur in het Colosseum en nog twee uur voor het Forum en de Palatijn."],
      ],
    },
  },
  {
    id: "rome-vatican-tickets",
    destinationId: "rome",
    type: "tickets",
    image: "vatican-museums",
    readMinutes: 5,
    updated: "2026-11",
    bookingQuery: "Vatican Museums Sistine Chapel tickets",
    en: {
      slug: "vatican-museums-tickets",
      title: "Vatican Museums and Sistine Chapel tickets: what to book",
      description: "How Vatican tickets work, what skip-the-line really means, and the entry time that avoids the worst crowds.",
      answer:
        "Book a timed ticket for the Vatican Museums online; it costs about €25 including the booking fee and it includes the Sistine Chapel. Without a reservation you can wait two hours or more in the sun. St. Peter's Basilica is separate and free, so do not pay for a ticket to enter it.",
      facts: [
        ["Online ticket", "About €25 (€20 plus booking fee)"],
        ["Includes", "Museums and Sistine Chapel"],
        ["St. Peter's Basilica", "Free, separate entrance"],
        ["Closed", "Sundays, except the last of the month"],
        ["Time needed", "3 hours for the museums"],
        ["Dress code", "Shoulders and knees covered"],
      ],
      sections: [
        {
          heading: "Ticket or guided tour",
          bullets: [
            "Timed ticket: Cheapest. You follow the one-way route to the Sistine Chapel on your own. Download an audio guide first.",
            "Guided tour: Costs two to three times as much, but a guide picks the rooms that matter out of seven kilometres of galleries.",
            "Early-entry tour: Enters before the general public. The only way to see the Sistine Chapel without a crowd, and priced accordingly.",
          ],
        },
        {
          heading: "The best entry time",
          paragraphs: [
            "The first slot of the day fills with tour groups. A slot after 2 pm is usually calmer, because morning groups have left and the museums stay open into the evening. Avoid Mondays, when other Rome museums are closed, and the free last Sunday of the month.",
          ],
        },
        {
          heading: "Combining it with St. Peter's",
          paragraphs: [
            "The museums and the basilica have entrances fifteen minutes apart on foot. Do the museums first, then walk around to St. Peter's Square and join the security line for the basilica. Climbing the dome costs extra and is paid on the spot.",
          ],
        },
      ],
      tip: "No photos and no talking in the Sistine Chapel. Guards enforce both, so look up and take it in.",
      faq: [
        ["Is the Sistine Chapel included in the Vatican Museums ticket?", "Yes. The Sistine Chapel is the last stop on the museum route and cannot be visited separately."],
        ["Do I need a ticket for St. Peter's Basilica?", "No. Entry is free. You only wait for the security check, which is shortest before 9 am."],
        ["What does skip-the-line mean at the Vatican?", "It means you have a reserved time slot and skip the ticket-office line. Everyone still passes security."],
      ],
    },
    nl: {
      slug: "vaticaanse-musea-tickets",
      title: "Tickets voor de Vaticaanse Musea en Sixtijnse Kapel: wat boek je",
      description: "Hoe Vaticaan-tickets werken, wat skip-the-line echt betekent en het tijdslot met de minste drukte.",
      answer:
        "Boek online een ticket met tijdslot voor de Vaticaanse Musea; dat kost ongeveer €25 inclusief reserveringskosten en de Sixtijnse Kapel zit erbij. Zonder reservering sta je al snel twee uur of langer in de zon. De Sint-Pietersbasiliek staat hier los van en is gratis, dus betaal daar niet voor.",
      facts: [
        ["Online ticket", "Ongeveer €25 (€20 plus reserveringskosten)"],
        ["Inclusief", "Musea en Sixtijnse Kapel"],
        ["Sint-Pietersbasiliek", "Gratis, aparte ingang"],
        ["Gesloten", "Zondag, behalve de laatste van de maand"],
        ["Benodigde tijd", "3 uur voor de musea"],
        ["Kledingvoorschrift", "Schouders en knieën bedekt"],
      ],
      sections: [
        {
          heading: "Ticket of rondleiding",
          bullets: [
            "Ticket met tijdslot: Het goedkoopst. Je volgt zelf de vaste route naar de Sixtijnse Kapel. Download vooraf een audiogids.",
            "Rondleiding: Kost twee tot drie keer zoveel, maar een gids kiest de zalen die ertoe doen uit zeven kilometer aan galerijen.",
            "Rondleiding met vroege toegang: Je gaat naar binnen vóór het gewone publiek. De enige manier om de Sixtijnse Kapel zonder menigte te zien, met een prijs die daarbij hoort.",
          ],
        },
        {
          heading: "Het beste tijdslot",
          paragraphs: [
            "Het eerste tijdslot zit vol met groepen. Een slot na 14.00 uur is meestal rustiger, omdat de ochtendgroepen weg zijn en de musea tot in de avond open blijven. Vermijd de maandag, als andere musea in Rome dicht zijn, en de gratis laatste zondag van de maand.",
          ],
        },
        {
          heading: "Combineren met de Sint-Pieter",
          paragraphs: [
            "De ingangen van de musea en de basiliek liggen een kwartier lopen uit elkaar. Doe eerst de musea, loop daarna om naar het Sint-Pietersplein en sluit aan bij de veiligheidscontrole voor de basiliek. De koepel beklimmen kost extra en betaal je ter plekke.",
          ],
        },
      ],
      tip: "In de Sixtijnse Kapel mag je niet fotograferen en niet praten. De bewakers letten op allebei, dus kijk omhoog en neem het in je op.",
      faq: [
        ["Zit de Sixtijnse Kapel bij het ticket voor de Vaticaanse Musea?", "Ja. De Sixtijnse Kapel is de laatste stop van de museumroute en is niet los te bezoeken."],
        ["Heb ik een ticket nodig voor de Sint-Pietersbasiliek?", "Nee, de toegang is gratis. Je wacht alleen op de veiligheidscontrole, die vóór 9.00 uur het kortst is."],
        ["Wat betekent skip-the-line bij het Vaticaan?", "Dat je een gereserveerd tijdslot hebt en de rij voor de kassa overslaat. Iedereen gaat nog wel door de beveiliging."],
      ],
    },
  },
  {
    id: "rome-pantheon-tickets",
    destinationId: "rome",
    type: "tickets",
    image: "pantheon",
    readMinutes: 3,
    updated: "2026-11",
    bookingQuery: "Pantheon Rome tickets",
    en: {
      slug: "pantheon-tickets",
      title: "Pantheon tickets: do you need to book ahead?",
      description: "The Pantheon now charges entry. What it costs, how to pay and when the line is shortest.",
      answer:
        "The Pantheon costs €7 and you can usually pay at the door. Booking ahead is only worth it on weekends and in high season, when the line crosses the square. Thirty minutes inside is enough.",
      facts: [
        ["Ticket", "€7 (since July 2026)"],
        ["Under 18", "Free"],
        ["Book ahead", "Only weekends and high season"],
        ["Time needed", "30 minutes"],
        ["Dress code", "Shoulders and knees covered"],
        ["Open", "Daily 9 am to 7 pm, last entry 6:30 pm"],
      ],
      sections: [
        {
          heading: "How to get in",
          paragraphs: [
            "There are two lines on the square: one for card payment at the machines and one for people who booked online. On a weekday morning both move in ten minutes. An audio guide is sold separately and is worth it, because the building has almost no signs.",
          ],
        },
        {
          heading: "What you are looking at",
          paragraphs: [
            "The dome is nearly 2,000 years old and still the largest unreinforced concrete dome in the world. The round opening at the top, the oculus, is open to the sky: when it rains, it rains inside, and the floor drains it away. Raphael is buried to the left of the altar.",
          ],
        },
      ],
      tip: "Come around noon on a sunny day to see the beam of light from the oculus cross the interior.",
      faq: [
        ["Is the Pantheon free?", "Not anymore. Entry was introduced in 2023 and has cost €7 since July 2026. It is still free on the first Sunday of the month, when you cannot book online and have to line up."],
        ["Is a Pantheon guided tour worth it?", "Not for most visitors. The audio guide covers it in half an hour for a fraction of the price."],
      ],
    },
    nl: {
      slug: "pantheon-tickets",
      title: "Pantheon-tickets: moet je vooraf boeken?",
      description: "Het Pantheon vraagt nu entree. Wat het kost, hoe je betaalt en wanneer de rij het kortst is.",
      answer:
        "Het Pantheon kost €7 en je kunt meestal aan de deur betalen. Vooraf boeken loont alleen in het weekend en in het hoogseizoen, als de rij over het plein staat. Een half uur binnen is genoeg.",
      facts: [
        ["Ticket", "€7 (sinds juli 2026)"],
        ["Onder 18 jaar", "Gratis"],
        ["Vooruit boeken", "Alleen weekend en hoogseizoen"],
        ["Benodigde tijd", "30 minuten"],
        ["Kledingvoorschrift", "Schouders en knieën bedekt"],
        ["Open", "Dagelijks 9.00 tot 19.00 uur, laatste toegang 18.30 uur"],
      ],
      sections: [
        {
          heading: "Hoe je binnenkomt",
          paragraphs: [
            "Op het plein staan twee rijen: één voor betalen met pin bij de automaten en één voor wie online heeft geboekt. Op een doordeweekse ochtend ben je in beide in tien minuten binnen. Een audiogids koop je apart en is het waard, want in het gebouw hangt bijna geen uitleg.",
          ],
        },
        {
          heading: "Waar je naar kijkt",
          paragraphs: [
            "De koepel is bijna 2.000 jaar oud en nog altijd de grootste ongewapende betonnen koepel ter wereld. De ronde opening bovenin, de oculus, is open: als het regent, regent het binnen, en de vloer voert het water af. Rafaël ligt links van het altaar begraven.",
          ],
        },
      ],
      tip: "Kom op een zonnige dag rond het middaguur om de lichtbundel uit de oculus door het interieur te zien trekken.",
      faq: [
        ["Is het Pantheon gratis?", "Niet meer. Sinds 2023 betaal je entree en sinds juli 2026 is dat €7. Op de eerste zondag van de maand is het nog wel gratis; dan kun je niet online boeken en sluit je aan in de rij."],
        ["Is een rondleiding in het Pantheon de moeite waard?", "Voor de meeste bezoekers niet. De audiogids vertelt het in een half uur voor een fractie van de prijs."],
      ],
    },
  },
  {
    id: "rome-colosseum-tours",
    destinationId: "rome",
    type: "comparisons",
    image: "forum",
    readMinutes: 4,
    updated: "2026-11",
    bookingQuery: "Colosseum guided tour Roman Forum",
    en: {
      slug: "best-colosseum-tours",
      title: "Colosseum tours compared: which type is right for you",
      description: "Standard group tour, arena floor, underground or private: the four kinds of Colosseum tour side by side.",
      answer:
        "For most visitors a small-group tour of the Colosseum, Forum and Palatine Hill is the best value: about three hours with a guide who makes sense of the ruins. Choose an underground tour if ancient history is the reason you came. A private tour only pays off for families and groups of four or more.",
      facts: [
        ["Small-group tour", "3 hours, usually €50 to €70"],
        ["Arena floor tour", "3 hours, usually €60 to €90"],
        ["Underground tour", "3 hours, usually €90 to €130"],
        ["Private tour", "From about €250 per group"],
      ],
      sections: [
        {
          heading: "The four types",
          bullets: [
            "Small group, standard access: The levels every visitor sees, plus the Forum and Palatine. Look for groups of 15 or fewer and a headset.",
            "Arena floor: Enters through the Gladiator's Gate onto the arena. A shorter line and a better first view.",
            "Underground: The tunnels where animals and fighters waited. The most memorable, and the hardest to book.",
            "Private: Your own guide and your own pace. Best with children, who get their questions answered.",
          ],
        },
        {
          heading: "What to check before you book",
          bullets: [
            "Group size: Anything above 25 people means you spend the tour looking for the guide's flag.",
            "What is included: Some cheap tours cover the Colosseum only and leave you alone at the Forum.",
            "Cancellation: Pick free cancellation up to 24 hours ahead. Rome plans change.",
            "Meeting point: It is outside the site. Allow 15 minutes to find it.",
          ],
        },
      ],
      faq: [
        ["Is a guided Colosseum tour worth it?", "Yes for a first visit. The Colosseum explains itself, but the Roman Forum does not, and a guide turns it from rubble into a city."],
        ["Which Colosseum tour includes the underground?", "Only tours that name the underground or hypogeum in the title. Arena floor tours do not go below ground."],
      ],
    },
    nl: {
      slug: "beste-colosseum-tours",
      title: "Colosseum-tours vergeleken: welk type past bij jou",
      description: "Standaard groepstour, arenavloer, ondergronds of privé: de vier soorten Colosseum-tours naast elkaar.",
      answer:
        "Voor de meeste bezoekers geeft een tour in een kleine groep door het Colosseum, het Forum en de Palatijn de meeste waarde: ongeveer drie uur met een gids die de ruïnes tot leven brengt. Kies een ondergrondse tour als de oudheid de reden van je reis is. Een privétour loont alleen voor gezinnen en groepen vanaf vier personen.",
      facts: [
        ["Tour in kleine groep", "3 uur, meestal €50 tot €70"],
        ["Tour met arenavloer", "3 uur, meestal €60 tot €90"],
        ["Ondergrondse tour", "3 uur, meestal €90 tot €130"],
        ["Privétour", "Vanaf ongeveer €250 per groep"],
      ],
      sections: [
        {
          heading: "De vier soorten",
          bullets: [
            "Kleine groep, standaardtoegang: De verdiepingen die elke bezoeker ziet, plus het Forum en de Palatijn. Let op groepen van maximaal 15 personen en een headset.",
            "Arenavloer: Je komt via de Gladiatorenpoort de arena op. Een kortere rij en een mooier eerste beeld.",
            "Ondergronds: De gangen waar dieren en vechters wachtten. Het meest indrukwekkend en het lastigst te boeken.",
            "Privé: Een eigen gids en je eigen tempo. Het best met kinderen, die dan al hun vragen kunnen stellen.",
          ],
        },
        {
          heading: "Waar je op let voor je boekt",
          bullets: [
            "Groepsgrootte: Boven de 25 personen ben je de hele tour bezig het vlaggetje van de gids te zoeken.",
            "Wat erbij zit: Sommige goedkope tours doen alleen het Colosseum en laten je op het Forum alleen.",
            "Annuleren: Kies gratis annuleren tot 24 uur vooraf. Plannen in Rome veranderen.",
            "Verzamelpunt: Dat ligt buiten het terrein. Reken op een kwartier om het te vinden.",
          ],
        },
      ],
      faq: [
        ["Is een rondleiding door het Colosseum de moeite waard?", "Bij een eerste bezoek wel. Het Colosseum spreekt voor zich, maar het Forum Romanum niet, en een gids maakt van het puin weer een stad."],
        ["Welke Colosseum-tour gaat ondergronds?", "Alleen tours met underground of hypogeum in de naam. Tours met de arenavloer gaan niet onder de grond."],
      ],
    },
  },
  {
    id: "rome-roma-pass",
    destinationId: "rome",
    type: "worthIt",
    image: "santangelo",
    readMinutes: 4,
    updated: "2026-11",
    en: {
      slug: "is-the-roma-pass-worth-it",
      title: "Is the Roma Pass worth it?",
      description: "A straight answer with the numbers: when the Roma Pass saves money and when it does not.",
      answer:
        "For most visitors the Roma Pass is not worth it. The 72-hour pass costs €62.90 and covers two sights plus public transport, but it does not include the Vatican and you still have to reserve a Colosseum time slot. It only pays off if you visit the Colosseum and Borghese Gallery and use the metro and buses several times a day.",
      facts: [
        ["48-hour pass", "€38, one sight included"],
        ["72-hour pass", "€62.90, two sights included"],
        ["Also includes", "Metro, bus and tram"],
        ["Not included", "Vatican Museums, airport trains"],
        ["Verdict", "Skip it, unless you ride transit a lot"],
      ],
      sections: [
        {
          heading: "The maths for three days",
          paragraphs: [
            "Colosseum (about €18) plus Borghese Gallery (about €18) comes to €36. A 72-hour transport ticket costs €22. Bought separately that is €58, against €62.90 for the pass. The pass only wins once you add a third and fourth sight at the reduced rate.",
          ],
        },
        {
          heading: "Who should buy it",
          bullets: [
            "Buy it: You stay outside the centre, ride transit four or more times a day, and plan three or more paid sights.",
            "Skip it: You stay central and walk, or the Vatican is your main paid visit.",
          ],
        },
      ],
      tip: "Central Rome is small. From the Colosseum to the Pantheon is a 25-minute walk, and most visitors use transit less than they expect.",
      faq: [
        ["Does the Roma Pass include the Vatican?", "No. The Vatican is a separate state and its museums are not part of any Rome city pass run by the city."],
        ["Does the Roma Pass skip the line at the Colosseum?", "No. Pass holders must still reserve a timed entry in advance, for a €2 booking fee, and those slots also sell out."],
      ],
    },
    nl: {
      slug: "is-de-roma-pass-de-moeite-waard",
      title: "Is de Roma Pass de moeite waard?",
      description: "Een duidelijk antwoord met de cijfers: wanneer de Roma Pass geld bespaart en wanneer niet.",
      answer:
        "Voor de meeste bezoekers is de Roma Pass het niet waard. De pas voor 72 uur kost €62,90 en dekt twee bezienswaardigheden plus het openbaar vervoer, maar het Vaticaan zit er niet bij en je moet nog steeds een tijdslot voor het Colosseum reserveren. Hij loont alleen als je het Colosseum en de Galleria Borghese bezoekt en meerdere keren per dag metro en bus neemt.",
      facts: [
        ["Pas voor 48 uur", "€38, één bezienswaardigheid"],
        ["Pas voor 72 uur", "€62,90, twee bezienswaardigheden"],
        ["Ook inbegrepen", "Metro, bus en tram"],
        ["Niet inbegrepen", "Vaticaanse Musea, treinen naar het vliegveld"],
        ["Oordeel", "Overslaan, tenzij je veel met het ov reist"],
      ],
      sections: [
        {
          heading: "De rekensom voor drie dagen",
          paragraphs: [
            "Colosseum (ongeveer €18) plus Galleria Borghese (ongeveer €18) is samen €36. Een ov-kaart voor 72 uur kost €22. Los gekocht is dat €58, tegenover €62,90 voor de pas. De pas wint pas als je er een derde en vierde bezienswaardigheid met korting bij doet.",
          ],
        },
        {
          heading: "Voor wie is hij wel iets",
          bullets: [
            "Kopen: Je slaapt buiten het centrum, neemt vier keer of vaker per dag het ov en plant drie of meer betaalde bezienswaardigheden.",
            "Overslaan: Je slaapt centraal en loopt, of het Vaticaan is je belangrijkste betaalde bezoek.",
          ],
        },
      ],
      tip: "Het centrum van Rome is klein. Van het Colosseum naar het Pantheon is 25 minuten lopen, en de meeste bezoekers gebruiken het ov minder dan ze denken.",
      faq: [
        ["Zit het Vaticaan bij de Roma Pass?", "Nee. Het Vaticaan is een aparte staat en de musea vallen niet onder een stadspas van Rome."],
        ["Sla je met de Roma Pass de rij bij het Colosseum over?", "Nee. Ook pashouders moeten vooraf een tijdslot reserveren, tegen €2 reserveringskosten, en ook die plekken raken op."],
      ],
    },
  },
  {
    id: "rome-colosseum-underground",
    destinationId: "rome",
    type: "worthIt",
    image: "colosseum-inside",
    readMinutes: 3,
    updated: "2026-11",
    bookingQuery: "Colosseum underground tour",
    en: {
      slug: "is-the-colosseum-underground-worth-it",
      title: "Is the Colosseum underground worth it?",
      description: "What you actually see below the arena, what it costs extra, and who should skip it.",
      answer:
        "Yes, if you care about how the Colosseum worked. The underground shows the lifts, cages and corridors that brought animals and gladiators up into the arena, and far fewer people are allowed down at once. Skip it if you are short on time or travelling with young children: the standard visit already shows the underground from above.",
      facts: [
        ["Extra cost", "About €6 on a ticket, €40 or more on a tour"],
        ["Extra time", "30 to 45 minutes"],
        ["Access", "Full Experience Underground and Arena ticket, or a guided tour"],
        ["Verdict", "Worth it for history lovers"],
      ],
      sections: [
        {
          heading: "What is down there",
          paragraphs: [
            "Two levels of brick corridors run under the arena floor. Around 80 lifts, worked by hand, raised scenery and animals through trapdoors. One lift has been rebuilt and shows the scale of the operation. You stand at the level where the fighters waited and hear the crowd above you.",
          ],
        },
        {
          heading: "Arena floor as the cheaper alternative",
          paragraphs: [
            "If underground places are gone, the arena floor is a good second choice. You look straight down into the corridors from the edge of the platform and get the view the fighters had of the stands.",
          ],
        },
      ],
      faq: [
        ["Can you visit the Colosseum underground without a tour?", "Yes, with the Full Experience Underground and Arena ticket, but places are limited and sell out first."],
        ["Is the underground suitable for children?", "It is safe, but children under about eight tend to lose interest. The arena floor works better for families."],
      ],
    },
    nl: {
      slug: "is-colosseum-ondergronds-de-moeite-waard",
      title: "Is het ondergrondse deel van het Colosseum de moeite waard?",
      description: "Wat je onder de arena echt ziet, wat het extra kost en wie het beter overslaat.",
      answer:
        "Ja, als je wilt begrijpen hoe het Colosseum werkte. Ondergronds zie je de liften, kooien en gangen waarmee dieren en gladiatoren de arena in kwamen, en er mogen veel minder mensen tegelijk naar beneden. Sla het over als je weinig tijd hebt of met jonge kinderen reist: bij het gewone bezoek zie je het ondergrondse deel al van bovenaf.",
      facts: [
        ["Meerprijs", "Ongeveer €6 op een ticket, €40 of meer bij een tour"],
        ["Extra tijd", "30 tot 45 minuten"],
        ["Toegang", "Ticket Full Experience Underground and Arena, of een rondleiding"],
        ["Oordeel", "De moeite waard voor wie van geschiedenis houdt"],
      ],
      sections: [
        {
          heading: "Wat er beneden is",
          paragraphs: [
            "Onder de arenavloer lopen twee lagen bakstenen gangen. Ongeveer 80 liften, met de hand bediend, brachten decors en dieren via luiken omhoog. Eén lift is herbouwd en laat zien hoe groot de operatie was. Je staat op de plek waar de vechters wachtten en hoort het publiek boven je.",
          ],
        },
        {
          heading: "De arenavloer als goedkoper alternatief",
          paragraphs: [
            "Zijn de ondergrondse plekken op, dan is de arenavloer een goede tweede keus. Vanaf de rand van het platform kijk je recht de gangen in en zie je de tribunes zoals de vechters ze zagen.",
          ],
        },
      ],
      faq: [
        ["Kun je ondergronds zonder rondleiding?", "Ja, met het ticket Full Experience Underground and Arena, maar het aantal plekken is beperkt en ze zijn als eerste weg."],
        ["Is het ondergrondse deel geschikt voor kinderen?", "Het is veilig, maar kinderen onder de acht jaar haken vaak af. De arenavloer werkt beter voor gezinnen."],
      ],
    },
  },
  {
    id: "rome-3-days",
    destinationId: "rome",
    type: "itineraries",
    image: "trevi",
    readMinutes: 7,
    updated: "2026-11",
    bookingQuery: "Rome tours",
    en: {
      slug: "rome-in-3-days",
      title: "Rome in 3 days: a day-by-day itinerary",
      description: "Three days in Rome planned by area, with the two bookings you must make first.",
      answer:
        "Three days is enough for Rome's main sights if you group them by area: ancient Rome on day one, the Vatican and the historic centre on day two, and the Borghese Gallery and Trastevere on day three. Book the Colosseum and the Vatican Museums before anything else, then build the rest around those two time slots.",
      facts: [
        ["Book first", "Colosseum, Vatican Museums, Borghese Gallery"],
        ["Walking", "8 to 10 miles (13 to 16 km) a day"],
        ["Best base", "Monti, Centro Storico or Trastevere"],
        ["Budget for tickets", "About €70 per person"],
      ],
      sections: [
        {
          heading: "Day 1: Ancient Rome",
          bullets: [
            "8:30 am: Colosseum on the first time slot, before the heat and the groups.",
            "10:00 am: Roman Forum and Palatine Hill on the same ticket. Enter from the Colosseum side and exit near the Capitoline.",
            "1:00 pm: Lunch in Monti, the old neighbourhood behind the Forum.",
            "3:00 pm: Capitoline Hill for the free view over the Forum, then the Capitoline Museums if you have energy left.",
            "Evening: Walk back past the Colosseum when it is lit.",
          ],
        },
        {
          heading: "Day 2: Vatican and the historic centre",
          bullets: [
            "8:00 am: St. Peter's Basilica before the security line builds.",
            "10:00 am: Vatican Museums and Sistine Chapel. Allow three hours.",
            "2:00 pm: Late lunch in Prati, away from the tourist menus by the walls.",
            "4:00 pm: Cross the river at Castel Sant'Angelo and walk to Piazza Navona and the Pantheon.",
            "Evening: Dinner near Campo de' Fiori.",
          ],
        },
        {
          heading: "Day 3: Fountains, art and Trastevere",
          bullets: [
            "7:30 am: Trevi Fountain while it is nearly empty, then the Spanish Steps.",
            "9:00 am: Borghese Gallery. Entry is by two-hour slot and must be reserved.",
            "12:00 pm: Walk through the Villa Borghese gardens to the Pincio terrace.",
            "3:00 pm: Aventine Hill for the Orange Garden and the keyhole view.",
            "Evening: Trastevere for dinner. Go deep into the lanes, away from the main square.",
          ],
        },
      ],
      tip: "Rome's public fountains run with cold drinking water. Carry a bottle and refill it for free all day.",
      faq: [
        ["Is 3 days enough for Rome?", "Yes for the main sights. With four or five days you can add a day trip to Pompeii, Tivoli or Ostia Antica."],
        ["What should I book in advance for Rome?", "The Colosseum, the Vatican Museums and the Borghese Gallery. Everything else can be decided on the day."],
      ],
    },
    nl: {
      slug: "rome-in-3-dagen",
      title: "Rome in 3 dagen: een route per dag",
      description: "Drie dagen Rome ingedeeld per wijk, met de twee reserveringen die je als eerste maakt.",
      answer:
        "Drie dagen is genoeg voor de hoogtepunten van Rome als je ze per gebied bundelt: het oude Rome op dag één, het Vaticaan en het historische centrum op dag twee, en de Galleria Borghese en Trastevere op dag drie. Boek eerst het Colosseum en de Vaticaanse Musea en bouw de rest om die twee tijdsloten heen.",
      facts: [
        ["Eerst boeken", "Colosseum, Vaticaanse Musea, Galleria Borghese"],
        ["Lopen", "13 tot 16 km per dag"],
        ["Beste uitvalsbasis", "Monti, Centro Storico of Trastevere"],
        ["Budget voor tickets", "Ongeveer €70 per persoon"],
      ],
      sections: [
        {
          heading: "Dag 1: Het oude Rome",
          bullets: [
            "8.30 uur: Colosseum in het eerste tijdslot, vóór de hitte en de groepen.",
            "10.00 uur: Forum Romanum en Palatijn op hetzelfde ticket. Ga naar binnen aan de kant van het Colosseum en eruit bij het Capitool.",
            "13.00 uur: Lunch in Monti, de oude wijk achter het Forum.",
            "15.00 uur: Het Capitool voor het gratis uitzicht over het Forum, en daarna de Capitolijnse Musea als je nog energie hebt.",
            "Avond: Loop terug langs het verlichte Colosseum.",
          ],
        },
        {
          heading: "Dag 2: Vaticaan en het historische centrum",
          bullets: [
            "8.00 uur: Sint-Pietersbasiliek, voordat de rij voor de beveiliging groeit.",
            "10.00 uur: Vaticaanse Musea en Sixtijnse Kapel. Reken op drie uur.",
            "14.00 uur: Late lunch in Prati, weg van de toeristenmenu's bij de muren.",
            "16.00 uur: Steek de rivier over bij de Engelenburcht en loop naar Piazza Navona en het Pantheon.",
            "Avond: Diner bij Campo de' Fiori.",
          ],
        },
        {
          heading: "Dag 3: Fonteinen, kunst en Trastevere",
          bullets: [
            "7.30 uur: Trevifontein nu het er nog bijna leeg is, daarna de Spaanse Trappen.",
            "9.00 uur: Galleria Borghese. Toegang gaat per tijdslot van twee uur en reserveren is verplicht.",
            "12.00 uur: Loop door het park Villa Borghese naar het terras van de Pincio.",
            "15.00 uur: De Aventijn voor de Sinaasappeltuin en het uitzicht door het sleutelgat.",
            "Avond: Eten in Trastevere. Ga diep de steegjes in, weg van het hoofdplein.",
          ],
        },
      ],
      tip: "Uit de openbare fonteintjes in Rome komt koud drinkwater. Neem een fles mee en vul hem de hele dag gratis bij.",
      faq: [
        ["Is 3 dagen genoeg voor Rome?", "Voor de hoogtepunten wel. Met vier of vijf dagen kun je een dagtrip naar Pompeï, Tivoli of Ostia Antica toevoegen."],
        ["Wat moet ik vooraf boeken voor Rome?", "Het Colosseum, de Vaticaanse Musea en de Galleria Borghese. De rest kun je op de dag zelf beslissen."],
      ],
    },
  },
  {
    id: "rome-hidden-gems",
    destinationId: "rome",
    type: "hiddenGems",
    image: "appia",
    readMinutes: 6,
    updated: "2026-11",
    bookingQuery: "Rome catacombs Appian Way tour",
    en: {
      slug: "hidden-gems",
      title: "Hidden gems in Rome: 9 places most visitors walk past",
      description: "Nine places in Rome with no line: a keyhole, a church with three floors of history, and a power station full of statues.",
      answer:
        "The best hidden places in Rome are the Aventine keyhole, the Basilica of San Clemente, the Appian Way and the Centrale Montemartini museum. All four are free or cost a few euros, none needs a reservation, and each is within half an hour of the Colosseum.",
      facts: [
        ["Cost", "Free to about €10 each"],
        ["Reservation", "Not needed"],
        ["Best area", "Aventine, Celio and Testaccio"],
        ["Time", "Half a day covers four or five"],
      ],
      sections: [
        {
          heading: "The nine places",
          bullets: [
            "The Aventine keyhole: Look through the keyhole of the Knights of Malta gate and St. Peter's dome appears, framed by a garden hedge.",
            "The Orange Garden: A terrace next door with a wide view over the river and the domes. Best at sunset.",
            "Basilica of San Clemente: A 12th-century church built on a 4th-century church, built on a Roman house and temple. You walk down through all three.",
            "The Appian Way: The original Roman road, still paved with basalt. Closed to cars on Sundays. Rent a bike and visit the catacombs on the way.",
            "Centrale Montemartini: Ancient marble statues displayed between the turbines of an old power station. Almost always empty.",
            "Quartiere Coppedè: A few streets of fairy-tale Art Nouveau buildings in a residential district. Ten minutes, free.",
            "Testaccio market: Where Romans buy lunch. Go for a sandwich filled with a classic Roman stew.",
            "Santo Stefano Rotondo: A round 5th-century church on the quiet Celio hill.",
            "The Protestant Cemetery: Keats and Shelley are buried here, beside an ancient pyramid.",
          ],
        },
        {
          heading: "How to combine them",
          paragraphs: [
            "The keyhole, the Orange Garden, Testaccio market and the Protestant Cemetery are a short walk from each other and make one easy afternoon. San Clemente is five minutes from the Colosseum and fits after your morning visit. Give the Appian Way its own half day.",
          ],
        },
      ],
      tip: "Many small churches close from about noon to 3 pm. Plan them for the morning or late afternoon.",
      faq: [
        ["What is the Aventine keyhole?", "A keyhole in the gate of the Knights of Malta priory on the Aventine Hill that lines up exactly with the dome of St. Peter's."],
        ["Are the Rome catacombs worth visiting?", "Yes. They can only be seen on a guided visit of about 40 minutes, sold at each catacomb entrance."],
      ],
    },
    nl: {
      slug: "verborgen-plekken",
      title: "Verborgen plekken in Rome: 9 plekken waar de meeste bezoekers langslopen",
      description: "Negen plekken in Rome zonder rij: een sleutelgat, een kerk met drie lagen geschiedenis en een elektriciteitscentrale vol beelden.",
      answer:
        "De mooiste verborgen plekken in Rome zijn het sleutelgat op de Aventijn, de basiliek San Clemente, de Via Appia en het museum Centrale Montemartini. Alle vier zijn gratis of kosten een paar euro, je hoeft nergens te reserveren, en ze liggen binnen een half uur van het Colosseum.",
      facts: [
        ["Kosten", "Gratis tot ongeveer €10 per plek"],
        ["Reserveren", "Niet nodig"],
        ["Beste gebied", "Aventijn, Celio en Testaccio"],
        ["Tijd", "In een halve dag zie je er vier of vijf"],
      ],
      sections: [
        {
          heading: "De negen plekken",
          bullets: [
            "Het sleutelgat op de Aventijn: Kijk door het sleutelgat van de poort van de Maltezer Orde en je ziet de koepel van de Sint-Pieter, omlijst door een heg.",
            "De Sinaasappeltuin: Een terras ernaast met weids uitzicht over de rivier en de koepels. Het mooist bij zonsondergang.",
            "Basiliek San Clemente: Een kerk uit de 12e eeuw, gebouwd op een kerk uit de 4e eeuw, gebouwd op een Romeins huis en een tempel. Je daalt door alle drie af.",
            "De Via Appia: De oorspronkelijke Romeinse weg, nog altijd geplaveid met basalt. Op zondag autovrij. Huur een fiets en bezoek onderweg de catacomben.",
            "Centrale Montemartini: Antieke marmeren beelden tussen de turbines van een oude elektriciteitscentrale. Bijna altijd leeg.",
            "Quartiere Coppedè: Een paar straten met sprookjesachtige art-nouveaugebouwen in een woonwijk. Tien minuten, gratis.",
            "De markt van Testaccio: Waar Romeinen hun lunch halen. Neem een broodje gevuld met een klassieke Romeinse stoofpot.",
            "Santo Stefano Rotondo: Een ronde kerk uit de 5e eeuw op de rustige Celio.",
            "De Protestantse Begraafplaats: Keats en Shelley liggen hier begraven, naast een antieke piramide.",
          ],
        },
        {
          heading: "Hoe je ze combineert",
          paragraphs: [
            "Het sleutelgat, de Sinaasappeltuin, de markt van Testaccio en de Protestantse Begraafplaats liggen op loopafstand van elkaar en vullen samen een rustige middag. San Clemente ligt vijf minuten van het Colosseum en past na je ochtendbezoek. Geef de Via Appia een eigen halve dag.",
          ],
        },
      ],
      tip: "Veel kleine kerken zijn dicht van ongeveer 12.00 tot 15.00 uur. Plan ze in de ochtend of aan het eind van de middag.",
      faq: [
        ["Wat is het sleutelgat op de Aventijn?", "Een sleutelgat in de poort van de priorij van de Maltezer Orde op de Aventijn, dat precies uitkomt op de koepel van de Sint-Pieter."],
        ["Zijn de catacomben van Rome de moeite waard?", "Ja. Je kunt ze alleen zien met een rondleiding van ongeveer 40 minuten, die je bij de ingang van elke catacombe koopt."],
      ],
    },
  },
  {
    id: "rome-airport",
    destinationId: "rome",
    type: "practical",
    image: "vatican",
    readMinutes: 4,
    updated: "2026-11",
    bookingQuery: "Rome Fiumicino airport transfer",
    en: {
      slug: "fiumicino-airport-to-rome",
      title: "Fiumicino Airport to Rome city centre: train, taxi or bus",
      description: "The four ways from Fiumicino into Rome compared on price and time, and which one suits your hotel.",
      answer:
        "The Leonardo Express train is the fastest way from Fiumicino Airport to central Rome: 32 minutes non-stop to Termini station for about €14. With two or more people and luggage, an official white taxi at the fixed fare of €55 costs little more and goes to your door. The bus is cheapest at about €7 but takes an hour or longer.",
      facts: [
        ["Leonardo Express", "32 minutes, about €14, to Termini"],
        ["Regional train FL1", "About €8, to Trastevere and Ostiense"],
        ["Official taxi", "Fixed fare of €55 to the centre"],
        ["Airport bus", "About €7, 55 minutes or more"],
        ["Private transfer", "From about €60, driver meets you"],
      ],
      sections: [
        {
          heading: "Which one to choose",
          bullets: [
            "Staying near Termini or Monti: Leonardo Express. It runs every 15 to 30 minutes.",
            "Staying in Trastevere: The FL1 regional train stops at Trastevere station and is cheaper. It does not go to Termini.",
            "Two or more people, or late arrival: Taxi at the fixed fare. Use only white licensed taxis from the official rank.",
            "After a long-haul flight with children: A pre-booked transfer. The driver waits in arrivals and the price is fixed.",
          ],
        },
        {
          heading: "What to watch for",
          paragraphs: [
            "Ignore anyone who approaches you inside the terminal offering a taxi. The fixed fare is per car, not per person, and applies to addresses inside the old city walls. It holds for taxis licensed by the city of Rome; taxis licensed in the town of Fiumicino may charge more, so confirm the fare before you get in. Stamp paper train tickets in the green machines on the platform before boarding, or you risk a fine.",
          ],
        },
      ],
      faq: [
        ["How much is a taxi from Fiumicino to Rome?", "A fixed fare of €55 per car to anywhere inside the Aurelian Walls, in a taxi licensed by the city of Rome."],
        ["Does Uber work in Rome?", "Yes, but mostly as Uber Black, which usually costs more than the fixed taxi fare."],
        ["What about Ciampino Airport?", "Ciampino has no train. Take an airport bus to Termini or a taxi at its own lower fixed fare."],
      ],
    },
    nl: {
      slug: "van-fiumicino-naar-rome",
      title: "Van vliegveld Fiumicino naar het centrum van Rome: trein, taxi of bus",
      description: "De vier manieren van Fiumicino naar Rome vergeleken op prijs en tijd, en welke bij je hotel past.",
      answer:
        "De Leonardo Express is de snelste manier van vliegveld Fiumicino naar het centrum van Rome: in 32 minuten zonder tussenstop naar station Termini voor ongeveer €14. Met twee of meer personen en bagage kost een officiële witte taxi tegen het vaste tarief van €55 weinig meer, en die zet je voor de deur af. De bus is met ongeveer €7 het goedkoopst, maar doet er een uur of langer over.",
      facts: [
        ["Leonardo Express", "32 minuten, ongeveer €14, naar Termini"],
        ["Regionale trein FL1", "Ongeveer €8, naar Trastevere en Ostiense"],
        ["Officiële taxi", "Vast tarief van €55 naar het centrum"],
        ["Vliegveldbus", "Ongeveer €7, 55 minuten of langer"],
        ["Privétransfer", "Vanaf ongeveer €60, de chauffeur wacht op je"],
      ],
      sections: [
        {
          heading: "Welke kies je",
          bullets: [
            "Je slaapt bij Termini of in Monti: De Leonardo Express. Die rijdt elke 15 tot 30 minuten.",
            "Je slaapt in Trastevere: De regionale trein FL1 stopt op station Trastevere en is goedkoper. Hij rijdt niet naar Termini.",
            "Twee of meer personen, of een late aankomst: Een taxi tegen het vaste tarief. Neem alleen witte taxi's met vergunning bij de officiële standplaats.",
            "Na een lange vlucht met kinderen: Een vooraf geboekte transfer. De chauffeur wacht in de aankomsthal en de prijs ligt vast.",
          ],
        },
        {
          heading: "Waar je op let",
          paragraphs: [
            "Negeer iedereen die je in de terminal aanspreekt met een taxi. Het vaste tarief geldt per auto, niet per persoon, en voor adressen binnen de oude stadsmuren. Het geldt voor taxi's met een vergunning van de stad Rome; taxi's met een vergunning van de gemeente Fiumicino kunnen meer rekenen, dus vraag het tarief voordat je instapt. Stempel papieren treinkaartjes af in de groene automaten op het perron voordat je instapt, anders riskeer je een boete.",
          ],
        },
      ],
      faq: [
        ["Wat kost een taxi van Fiumicino naar Rome?", "Een vast tarief van €55 per auto naar elk adres binnen de Aureliaanse Muren, in een taxi met een vergunning van de stad Rome."],
        ["Werkt Uber in Rome?", "Ja, maar vooral als Uber Black, en dat is meestal duurder dan het vaste taxitarief."],
        ["En vliegveld Ciampino?", "Ciampino heeft geen trein. Neem een vliegveldbus naar Termini of een taxi tegen het eigen, lagere vaste tarief."],
      ],
    },
  },
  {
    id: "rome-best-time",
    destinationId: "rome",
    type: "practical",
    image: "aventine",
    readMinutes: 4,
    updated: "2026-11",
    en: {
      slug: "best-time-to-visit-rome",
      title: "Best time to visit Rome: month by month",
      description: "When Rome is at its best, when it is too hot or too crowded, and what each season costs you.",
      answer:
        "The best time to visit Rome is from mid-April to early June and from mid-September to the end of October: warm days, long light and lines you can live with. July and August are hot, often above 90°F (32°C), and many Romans leave the city. November to March is the cheapest and quietest period, with short days and some rain.",
      facts: [
        ["Best months", "April, May, late September, October"],
        ["Hottest", "July and August, 90°F (32°C) and up"],
        ["Cheapest", "November, January and February"],
        ["Busiest", "Easter week, June to August"],
        ["Rainiest", "November"],
      ],
      sections: [
        {
          heading: "Season by season",
          bullets: [
            "Spring (April to early June): The best balance. Book the big sights a month ahead and expect higher hotel prices around Easter.",
            "Summer (mid-June to August): Sightsee before 11 am and after 5 pm. In August many family-run restaurants close for holidays.",
            "Autumn (September and October): Warm enough to eat outside, with thinner crowds from late September.",
            "Winter (November to March): Low prices and empty museums, apart from Christmas and New Year. Bring a rain jacket.",
          ],
        },
        {
          heading: "Days to plan around",
          paragraphs: [
            "State museums are free on the first Sunday of the month, which means long lines. The Vatican Museums are closed on Sundays except the last of the month. During Easter week and on Wednesday mornings, when the Pope holds his audience, the area around St. Peter's is at its busiest.",
          ],
        },
      ],
      faq: [
        ["Is Rome too hot in August?", "For most visitors, yes. Afternoons regularly pass 90°F (32°C) and the main sights have little shade."],
        ["How many days do you need in Rome?", "Three full days cover the main sights. Four or five let you slow down and add a day trip."],
      ],
    },
    nl: {
      slug: "beste-reistijd-rome",
      title: "Beste reistijd voor Rome: per maand",
      description: "Wanneer Rome op zijn best is, wanneer het te heet of te druk is, en wat elk seizoen je kost.",
      answer:
        "De beste reistijd voor Rome is van half april tot begin juni en van half september tot eind oktober: warme dagen, lang licht en rijen waar mee te leven valt. Juli en augustus zijn heet, vaak boven de 32 °C, en veel Romeinen verlaten dan de stad. November tot en met maart is de goedkoopste en rustigste periode, met korte dagen en af en toe regen.",
      facts: [
        ["Beste maanden", "April, mei, eind september, oktober"],
        ["Heetst", "Juli en augustus, 32 °C en hoger"],
        ["Goedkoopst", "November, januari en februari"],
        ["Drukst", "De week van Pasen, juni tot en met augustus"],
        ["Meeste regen", "November"],
      ],
      sections: [
        {
          heading: "Per seizoen",
          bullets: [
            "Lente (april tot begin juni): De beste balans. Boek de grote bezienswaardigheden een maand vooruit en reken rond Pasen op hogere hotelprijzen. Ook de meivakantie valt hierin.",
            "Zomer (half juni tot en met augustus): Bezoek bezienswaardigheden vóór 11.00 uur en na 17.00 uur. In augustus zijn veel familierestaurants dicht wegens vakantie.",
            "Herfst (september en oktober): Warm genoeg om buiten te eten, en vanaf eind september minder druk. De herfstvakantie is een goed moment.",
            "Winter (november tot en met maart): Lage prijzen en lege musea, behalve rond kerst en oud en nieuw. Neem een regenjas mee.",
          ],
        },
        {
          heading: "Dagen om rekening mee te houden",
          paragraphs: [
            "Staatsmusea zijn gratis op de eerste zondag van de maand, en dat betekent lange rijen. De Vaticaanse Musea zijn op zondag dicht, behalve de laatste van de maand. In de week van Pasen en op woensdagochtend, als de paus audiëntie houdt, is het rond de Sint-Pieter het drukst.",
          ],
        },
      ],
      faq: [
        ["Is Rome te heet in augustus?", "Voor de meeste bezoekers wel. 's Middags wordt het geregeld warmer dan 32 °C en bij de grote bezienswaardigheden is weinig schaduw."],
        ["Hoeveel dagen heb je nodig in Rome?", "In drie volle dagen zie je de hoogtepunten. Met vier of vijf dagen kun je rustiger aan doen en een dagtrip toevoegen."],
      ],
    },
  },
];
