import type { Article } from "../articles";

// Fact check, 16 November 2026. Fees in Mexico changed several times during 2026 and no
// official fee table could be read; most figures rest on press reports. Sources, changes and
// open items are logged per article in FACTCHECK.md. Re-check every peso amount before launch.

export const cancunArticles: Article[] = [
  {
    id: "cancun-chichen-itza",
    destinationId: "cancun",
    type: "tickets",
    image: "mx-chichen",
    readMinutes: 5,
    updated: "2026-11",
    bookingQuery: "Chichen Itza tour from Cancun",
    en: {
      slug: "chichen-itza-tickets-and-tours",
      title: "Chichén Itzá from Cancún: entry fee, time zone and tour or drive",
      description: "What Chichén Itzá costs, why your watch is wrong when you get there, and whether to take a tour or drive.",
      answer:
        "Entry to Chichén Itzá costs foreign visitors about 700 pesos, roughly $35 to $40, on a single ticket paid at the gate. The site is two and a half hours from Cancún and one hour behind it, so a 7 am departure gets you there soon after it opens at 8 am local time. Take a tour if you do not want to drive five hours in a day; rent a car if you want to arrive before the buses.",
      facts: [
        ["Entry, foreign visitors", "About 700 pesos ($35 to $40), one ticket"],
        ["Open", "8 am to 4 pm, last entry around 3 pm"],
        ["Time zone", "One hour behind Cancún"],
        ["From Cancún", "About 2.5 hours each way"],
        ["Time on site", "2 to 3 hours"],
        ["Tour from Cancún", "Usually $60 to $120, 12 hours"],
      ],
      sections: [
        {
          heading: "Tour or drive yourself",
          bullets: [
            "Group tour: Pickup at your hotel, a guide on site, a cenote swim and lunch. Easy, but you arrive with every other bus around 11 am, in the heat.",
            "Early-access or small-group tour: Leaves around 5 am and reaches the site at opening. Costs more and is worth it.",
            "Rental car: The toll road is fast, straight and safe by day. You choose your own hours and can add Valladolid. Tolls add roughly $40 for the round trip.",
          ],
        },
        {
          heading: "What to check in a tour",
          bullets: [
            "Entry fee: Many cheap tours leave it out. Ask whether the price includes it.",
            "Time on site: Two hours is the minimum. Some tours spend longer at the buffet and the souvenir stop than at the ruins.",
            "Cenote: Most tours stop at one. Bring a towel and a swimsuit under your clothes.",
            "Pickup time: Tours from the Riviera Maya start earlier and return later than tours from Cancún.",
          ],
        },
        {
          heading: "On site",
          paragraphs: [
            "You cannot climb the pyramid; it has been closed to climbers for years. There is almost no shade, so bring a hat and water and walk the open plaza first, before the heat builds. Vendors line the paths inside the site: a polite no is enough.",
          ],
        },
      ],
      tip: "Clap once in front of the main staircase of the pyramid. The echo comes back as a chirp, like the call of the quetzal bird.",
      faq: [
        ["How much is the entrance fee to Chichén Itzá?", "About 700 pesos for foreign visitors, roughly $35 to $40, on one combined ticket since March 2026. The fee has changed during the year, so check before you go."],
        ["Is Chichén Itzá in a different time zone than Cancún?", "Yes. Chichén Itzá is in the state of Yucatán, one hour behind Cancún and the Riviera Maya."],
        ["Is Chichén Itzá worth the long day?", "Yes, once. It is one of the best-preserved Maya cities, but the day is long: go early or choose a closer site such as Cobá or Ek Balam."],
      ],
    },
    nl: {
      slug: "chichen-itza-tickets-en-tours",
      title: "Chichén Itzá vanuit Cancún: entree, tijdsverschil en tour of zelf rijden",
      description: "Wat Chichén Itzá kost, waarom je horloge er niet klopt en of je een tour neemt of zelf rijdt.",
      answer:
        "De entree van Chichén Itzá is voor buitenlandse bezoekers ongeveer 700 peso, op één ticket dat je bij de ingang betaalt. Het ligt op tweeënhalf uur rijden van Cancún en het is er een uur vroeger, dus als je om 7.00 uur vertrekt ben je er kort na de opening om 8.00 uur lokale tijd. Neem een tour als je geen vijf uur op een dag wilt rijden; huur een auto als je er vóór de bussen wilt zijn.",
      facts: [
        ["Entree, buitenlandse bezoekers", "Ongeveer 700 peso, één ticket"],
        ["Open", "8.00 tot 16.00 uur, laatste toegang rond 15.00 uur"],
        ["Tijdzone", "Een uur vroeger dan Cancún"],
        ["Vanuit Cancún", "Ongeveer 2,5 uur per rit"],
        ["Tijd ter plekke", "2 tot 3 uur"],
        ["Tour vanuit Cancún", "Meestal $60 tot $120, 12 uur"],
      ],
      sections: [
        {
          heading: "Tour of zelf rijden",
          bullets: [
            "Groepstour: Ophalen bij je hotel, een gids ter plekke, zwemmen in een cenote en lunch. Makkelijk, maar je komt met alle andere bussen rond 11.00 uur aan, in de hitte.",
            "Tour met vroege toegang of kleine groep: Vertrekt rond 5.00 uur en is er bij opening. Kost meer en is het waard.",
            "Huurauto: De tolweg is snel, recht en overdag veilig. Je bepaalt je eigen tijden en kunt Valladolid toevoegen. De tol kost heen en terug ruwweg $40.",
          ],
        },
        {
          heading: "Waar je bij een tour op let",
          bullets: [
            "Entree: Bij veel goedkope tours zit die er niet bij. Vraag of de prijs inclusief entree is.",
            "Tijd ter plekke: Twee uur is het minimum. Sommige tours staan langer stil bij het buffet en de souvenirwinkel dan bij de ruïnes.",
            "Cenote: De meeste tours stoppen er bij een. Neem een handdoek mee en trek je zwemkleding onder je kleren aan.",
            "Ophaaltijd: Tours vanuit de Riviera Maya beginnen vroeger en zijn later terug dan tours vanuit Cancún.",
          ],
        },
        {
          heading: "Ter plekke",
          paragraphs: [
            "Je mag de piramide niet beklimmen; dat is al jaren verboden. Er is bijna geen schaduw, dus neem een pet en water mee en loop eerst over het open plein, voordat het heet wordt. Langs de paden staan verkopers: een beleefd nee is genoeg.",
          ],
        },
      ],
      tip: "Klap één keer in je handen voor de hoofdtrap van de piramide. De echo komt terug als een tjilp, als de roep van de quetzal.",
      faq: [
        ["Wat kost de entree van Chichén Itzá?", "Ongeveer 700 peso voor buitenlandse bezoekers, sinds maart 2026 op één gecombineerd ticket. Het bedrag is in de loop van het jaar gewijzigd, dus controleer het voor je gaat."],
        ["Is het in Chichén Itzá een andere tijd dan in Cancún?", "Ja. Chichén Itzá ligt in de staat Yucatán, waar het een uur vroeger is dan in Cancún en de Riviera Maya."],
        ["Is Chichén Itzá de lange dag waard?", "Ja, één keer. Het is een van de best bewaarde Mayasteden, maar de dag is lang: ga vroeg, of kies een dichterbij gelegen plek zoals Cobá of Ek Balam."],
      ],
    },
  },
  {
    id: "cancun-tulum-ruins",
    destinationId: "cancun",
    type: "tickets",
    image: "cancun",
    readMinutes: 4,
    updated: "2026-11",
    bookingQuery: "Tulum ruins tour cenote",
    en: {
      slug: "tulum-ruins-tickets",
      title: "Tulum ruins: entry fees, opening hours and when to go",
      description: "The Tulum ruins now sit inside a national park with its own fees. What to expect at the gate and how to beat the crowds.",
      answer:
        "The Tulum ruins are small, set on a cliff above the sea, and take about 90 minutes. Fees for foreign visitors changed more than once in 2026; since the summer, reports give about 365 pesos in total, 265 for the ruins plus 100 for the Jaguar Park around them. Bring some margin in cash and check the current price before you go. Arrive at opening: by 10 am the site is full of tour groups and there is no shade.",
      facts: [
        ["Entry, foreign visitors", "About 365 pesos (ruins 265, Jaguar Park 100)"],
        ["Time on site", "About 90 minutes"],
        ["Best time", "At opening, around 8 am"],
        ["From Playa del Carmen", "About 1 hour"],
        ["From Cancún", "About 2 hours"],
        ["Bring", "Hat, water, swimsuit"],
      ],
      sections: [
        {
          heading: "Why the fees are confusing",
          paragraphs: [
            "The ruins now lie inside Parque del Jaguar, a protected area. A visit can involve three separate charges: one for the archaeological site, one for the protected area and one for the park itself. The amounts were raised in January 2026 and reportedly cut again in July, and websites still quote all the old figures. The ticket office at the park entrance is the only reliable source.",
          ],
        },
        {
          heading: "How to visit",
          bullets: [
            "On your own: Bus or rental car to the park entrance, then a shuttle or a ten-minute walk to the ruins. Cheapest and most flexible.",
            "Guided tour: Usually combined with a cenote and sometimes Cobá. Worth it for the explanation; the site has few signs.",
            "From a cruise ship in Cozumel: Possible but long. The ferry, the drive and the visit fill the whole port day.",
          ],
        },
        {
          heading: "What to combine it with",
          paragraphs: [
            "A cenote swim is the natural second half of the morning: several lie within twenty minutes of the ruins. The beach below the cliff is closed at times to protect nesting turtles, so do not count on swimming at the site itself.",
          ],
        },
      ],
      tip: "Tulum town, the hotel strip on the beach and the ruins are three different places several kilometres apart. Check which one your tour or taxi actually goes to.",
      faq: [
        ["How much does it cost to visit the Tulum ruins?", "The total changed several times in 2026. Since the summer, foreign visitors pay about 365 pesos: 265 for the ruins and 100 for the Jaguar Park. Check locally, as fees may change again."],
        ["How long do you need at the Tulum ruins?", "About 90 minutes. The site is compact and most of it is seen from marked paths."],
        ["Tulum or Chichén Itzá?", "Tulum for the setting and a short visit, Chichén Itzá for the scale. If you have time for one long day and one short morning, do both."],
      ],
    },
    nl: {
      slug: "tulum-ruines-tickets",
      title: "De ruïnes van Tulum: entree, openingstijden en wanneer je gaat",
      description: "De ruïnes van Tulum liggen nu in een nationaal park met eigen tarieven. Wat je bij de ingang kunt verwachten en hoe je de drukte voor bent.",
      answer:
        "De ruïnes van Tulum zijn klein, liggen op een klif boven zee en kosten je ongeveer anderhalf uur. De tarieven voor buitenlandse bezoekers zijn in 2026 meer dan eens gewijzigd; sinds de zomer gaat het om ongeveer 365 peso in totaal, 265 voor de ruïnes en 100 voor het Jaguarpark eromheen. Neem wat extra contant geld mee en controleer de actuele prijs voor je gaat. Kom bij opening: om 10.00 uur staat het vol met groepen en schaduw is er niet.",
      facts: [
        ["Entree, buitenlandse bezoekers", "Ongeveer 365 peso (ruïnes 265, Jaguarpark 100)"],
        ["Tijd ter plekke", "Ongeveer anderhalf uur"],
        ["Beste moment", "Bij opening, rond 8.00 uur"],
        ["Vanuit Playa del Carmen", "Ongeveer 1 uur"],
        ["Vanuit Cancún", "Ongeveer 2 uur"],
        ["Meenemen", "Pet, water, zwemkleding"],
      ],
      sections: [
        {
          heading: "Waarom de tarieven verwarrend zijn",
          paragraphs: [
            "De ruïnes liggen nu in het Parque del Jaguar, een beschermd gebied. Bij een bezoek kun je drie losse bedragen betalen: voor de archeologische zone, voor het beschermde gebied en voor het park zelf. De bedragen gingen in januari 2026 omhoog en zijn volgens berichten in juli weer verlaagd, en op websites staan alle oude cijfers nog door elkaar. Alleen de kassa bij de ingang van het park is betrouwbaar.",
          ],
        },
        {
          heading: "Hoe je het bezoekt",
          bullets: [
            "Zelf: Met de bus of een huurauto naar de ingang van het park, daarna een pendelbusje of tien minuten lopen naar de ruïnes. Het goedkoopst en het meest flexibel.",
            "Rondleiding: Meestal gecombineerd met een cenote en soms met Cobá. De moeite waard voor de uitleg; er staan weinig borden.",
            "Vanaf een cruiseschip in Cozumel: Het kan, maar het is lang. De veerboot, de rit en het bezoek vullen de hele dag in de haven.",
          ],
        },
        {
          heading: "Waarmee je het combineert",
          paragraphs: [
            "Zwemmen in een cenote is de logische tweede helft van de ochtend: er liggen er meerdere binnen twintig minuten van de ruïnes. Het strand onder de klif is soms dicht om nestelende schildpadden te beschermen, dus reken er niet op dat je bij de ruïnes zelf kunt zwemmen.",
          ],
        },
      ],
      tip: "Het dorp Tulum, de hotelstrook aan het strand en de ruïnes zijn drie verschillende plekken die kilometers uit elkaar liggen. Kijk goed naar welke van de drie je tour of taxi gaat.",
      faq: [
        ["Wat kost een bezoek aan de ruïnes van Tulum?", "Het totaal is in 2026 meerdere keren gewijzigd. Sinds de zomer betalen buitenlandse bezoekers ongeveer 365 peso: 265 voor de ruïnes en 100 voor het Jaguarpark. Vraag het ter plekke na, want de tarieven kunnen weer veranderen."],
        ["Hoeveel tijd heb je nodig bij de ruïnes van Tulum?", "Ongeveer anderhalf uur. Het terrein is compact en het meeste zie je vanaf de aangegeven paden."],
        ["Tulum of Chichén Itzá?", "Tulum voor de ligging en een kort bezoek, Chichén Itzá voor de omvang. Heb je tijd voor één lange dag en één korte ochtend, doe dan allebei."],
      ],
    },
  },
  {
    id: "cancun-isla-mujeres",
    destinationId: "cancun",
    type: "comparisons",
    image: "mx-isla",
    readMinutes: 4,
    updated: "2026-11",
    bookingQuery: "Isla Mujeres catamaran from Cancun",
    en: {
      slug: "isla-mujeres-catamaran-or-ferry",
      title: "Isla Mujeres from Cancún: catamaran tour or ferry on your own",
      description: "Two ways to do a day on Isla Mujeres compared on price, time on the island and what you actually get.",
      answer:
        "Take the ferry if you want a beach day on Isla Mujeres: it costs about 580 pesos round trip, roughly $30, runs every half hour and puts you on Playa Norte within ten minutes of landing. Take a catamaran tour, usually $75 to $160, if you want snorkeling, an open bar and a day on the water more than time on the island itself.",
      facts: [
        ["Ferry, round trip", "About 580 pesos (roughly $30)"],
        ["Crossing", "20 to 30 minutes"],
        ["Catamaran tour", "$75 to $160, 6 to 8 hours"],
        ["Best beach", "Playa Norte, a short walk from the ferry"],
        ["Getting around", "Golf cart, about $50 to $70 a day"],
      ],
      sections: [
        {
          heading: "The two options",
          bullets: [
            "Ferry on your own: Leave from Puerto Juárez or the Hotel Zone piers, stay as long as you like, and spend the day on Playa Norte, one of the calmest and shallowest beaches in the region.",
            "Catamaran tour: Sailing, a snorkel stop, open bar and a buffet lunch, with one to two hours of free time in town. More party than island.",
          ],
        },
        {
          heading: "How to choose",
          bullets: [
            "You want the beach: Ferry. A tour gives you too little time on shore.",
            "You want to snorkel and sail: Catamaran. Arranging a boat yourself on the island costs about the same.",
            "You are travelling with small children: Ferry. The water at Playa Norte is waist-deep far out, and you set your own schedule.",
            "You are a group celebrating something: Catamaran, and check whether the open bar is included.",
          ],
        },
        {
          heading: "A day on your own",
          paragraphs: [
            "Take a ferry before 10 am. Walk to Playa Norte, rent chairs at a beach club or lay a towel on the public sand. After lunch, rent a golf cart for a few hours and drive to Punta Sur at the southern tip for the cliffs and the view back to Cancún. The last ferries leave late in the evening, so there is no need to rush.",
          ],
        },
      ],
      tip: "The ferry terminal at Puerto Juárez is cheaper and has more departures than the piers in the Hotel Zone. A taxi there costs less than the difference for a family.",
      faq: [
        ["How do you get from Cancún to Isla Mujeres?", "By passenger ferry from Puerto Juárez, just north of downtown, or from piers in the Hotel Zone. The crossing takes 20 to 30 minutes."],
        ["Is Isla Mujeres worth a day trip?", "Yes. Playa Norte is calmer and prettier than most Hotel Zone beaches, and the island is usually less affected by seaweed."],
        ["Do you need to book the ferry in advance?", "No. Buy the ticket at the terminal and take the next boat."],
      ],
    },
    nl: {
      slug: "isla-mujeres-catamaran-of-veerboot",
      title: "Isla Mujeres vanuit Cancún: catamarantour of zelf met de veerboot",
      description: "Twee manieren om een dag naar Isla Mujeres te gaan, vergeleken op prijs, tijd op het eiland en wat je echt krijgt.",
      answer:
        "Neem de veerboot als je een stranddag op Isla Mujeres wilt: die kost ongeveer 580 peso retour, vaart elk half uur en je staat binnen tien minuten na aankomst op Playa Norte. Neem een catamarantour, meestal $75 tot $160, als je vooral wilt snorkelen, een open bar wilt en een dag op het water belangrijker vindt dan tijd op het eiland.",
      facts: [
        ["Veerboot, retour", "Ongeveer 580 peso"],
        ["Overtocht", "20 tot 30 minuten"],
        ["Catamarantour", "$75 tot $160, 6 tot 8 uur"],
        ["Mooiste strand", "Playa Norte, vlak bij de veerboot"],
        ["Vervoer op het eiland", "Golfkarretje, ongeveer $50 tot $70 per dag"],
      ],
      sections: [
        {
          heading: "De twee mogelijkheden",
          bullets: [
            "Zelf met de veerboot: Vertrek vanaf Puerto Juárez of de pieren in de hotelzone, blijf zo lang je wilt en breng de dag door op Playa Norte, een van de rustigste en ondiepste stranden van de regio.",
            "Catamarantour: Zeilen, een snorkelstop, open bar en een lunchbuffet, met één tot twee uur vrije tijd in het dorp. Meer feest dan eiland.",
          ],
        },
        {
          heading: "Hoe je kiest",
          bullets: [
            "Je wilt naar het strand: Veerboot. Met een tour heb je te weinig tijd aan wal.",
            "Je wilt snorkelen en zeilen: Catamaran. Zelf een boot regelen op het eiland kost ongeveer hetzelfde.",
            "Je reist met kleine kinderen: Veerboot. Bij Playa Norte staat het water tot ver in zee tot je middel, en je bepaalt je eigen tijden.",
            "Je bent met een groep en hebt iets te vieren: Catamaran, en kijk of de open bar is inbegrepen.",
          ],
        },
        {
          heading: "Een dag op eigen houtje",
          paragraphs: [
            "Neem een veerboot vóór 10.00 uur. Loop naar Playa Norte en huur stoelen bij een strandtent of leg je handdoek op het openbare strand. Huur na de lunch een paar uur een golfkarretje en rijd naar Punta Sur op de zuidpunt, voor de kliffen en het uitzicht op Cancún. De laatste boten gaan laat op de avond, dus je hoeft je niet te haasten.",
          ],
        },
      ],
      tip: "De terminal in Puerto Juárez is goedkoper en heeft meer afvaarten dan de pieren in de hotelzone. Voor een gezin kost een taxi erheen minder dan het verschil.",
      faq: [
        ["Hoe kom je van Cancún op Isla Mujeres?", "Met de veerboot vanaf Puerto Juárez, net ten noorden van het centrum, of vanaf pieren in de hotelzone. De overtocht duurt 20 tot 30 minuten."],
        ["Is Isla Mujeres een dagtrip waard?", "Ja. Playa Norte is rustiger en mooier dan de meeste stranden in de hotelzone, en het eiland heeft meestal minder last van zeewier."],
        ["Moet je de veerboot vooraf boeken?", "Nee. Koop het kaartje bij de terminal en neem de eerstvolgende boot."],
      ],
    },
  },
  {
    id: "cancun-xcaret",
    destinationId: "cancun",
    type: "worthIt",
    image: "mx-xcaret",
    readMinutes: 4,
    updated: "2026-11",
    bookingQuery: "Xcaret park tickets",
    en: {
      slug: "is-xcaret-worth-it",
      title: "Is Xcaret worth it?",
      description: "Xcaret is the most expensive day out on the Riviera Maya. Who gets their money's worth and who should pick something else.",
      answer:
        "Xcaret is worth it for families and first-time visitors who want one big day with everything in it: underground rivers, wildlife, beaches and an evening show. Expect to pay about $150 to $200 per adult depending on the ticket, and plan to stay from opening until the show ends. Skip it if you prefer nature without the theme-park setting, or if you only have half a day.",
      facts: [
        ["Price per adult", "About $150 to $200"],
        ["Where", "Just south of Playa del Carmen"],
        ["Time needed", "A full day, including the evening show"],
        ["Best for", "Families and first-time visitors"],
        ["Verdict", "Worth it, if you stay all day"],
      ],
      sections: [
        {
          heading: "What you get",
          paragraphs: [
            "Xcaret is a large park built around natural inlets and caves. You float down underground rivers in a life vest, walk past jaguars, flamingos and sea turtles, and end with a two-hour evening show about Mexican history with hundreds of performers. The show is the part people remember, and leaving before it wastes much of the ticket.",
          ],
        },
        {
          heading: "Which ticket",
          bullets: [
            "Basic entry: The park, the rivers and the show. Food and snorkel gear cost extra.",
            "Plus ticket: Adds a buffet meal, snorkel gear and the nicer changing area. Worth the upgrade for a full day.",
            "With transport: Adds a bus from your hotel. Handy from Cancún, where the park is more than an hour away.",
          ],
        },
        {
          heading: "The alternatives",
          bullets: [
            "Xel-Há: A natural lagoon for snorkeling with food and drinks included. Better for swimmers, no show.",
            "Cenotes on your own: A few dollars to about $25 each. The same clear water without the park around it.",
            "Akumal or Puerto Morelos: Snorkeling from the beach with a local guide, for a fraction of the price.",
          ],
        },
      ],
      tip: "Only biodegradable sunscreen is allowed in the water. Bring your own: the park's price is high.",
      faq: [
        ["How much does Xcaret cost?", "About $150 to $200 per adult in 2026, depending on the ticket type, the date and whether transport is included."],
        ["How many hours do you need at Xcaret?", "The whole day. Arrive at opening and stay for the evening show, which ends around 9 pm."],
        ["Xcaret or Xel-Há?", "Xcaret for variety and the show, Xel-Há for a relaxed day of snorkeling with food and drinks included."],
      ],
    },
    nl: {
      slug: "is-xcaret-de-moeite-waard",
      title: "Is Xcaret de moeite waard?",
      description: "Xcaret is het duurste dagje uit aan de Riviera Maya. Voor wie het zijn geld waard is en wie beter iets anders kiest.",
      answer:
        "Xcaret is de moeite waard voor gezinnen en voor wie hier voor het eerst is en één grote dag wil waar alles in zit: ondergrondse rivieren, dieren, stranden en een avondshow. Reken op ongeveer $150 tot $200 per volwassene, afhankelijk van het ticket, en blijf van opening tot het einde van de show. Sla het over als je natuur liever zonder pretpark ziet, of als je maar een halve dag hebt.",
      facts: [
        ["Prijs per volwassene", "Ongeveer $150 tot $200"],
        ["Waar", "Net ten zuiden van Playa del Carmen"],
        ["Benodigde tijd", "Een hele dag, inclusief de avondshow"],
        ["Het best voor", "Gezinnen en eerste bezoekers"],
        ["Oordeel", "De moeite waard, als je de hele dag blijft"],
      ],
      sections: [
        {
          heading: "Wat je krijgt",
          paragraphs: [
            "Xcaret is een groot park, aangelegd rond natuurlijke inhammen en grotten. Je drijft in een zwemvest door ondergrondse rivieren, loopt langs jaguars, flamingo's en zeeschildpadden, en sluit af met een avondshow van twee uur over de Mexicaanse geschiedenis, met honderden artiesten. De show is wat mensen onthouden; wie eerder weggaat, gooit een groot deel van het ticket weg.",
          ],
        },
        {
          heading: "Welk ticket",
          bullets: [
            "Basistoegang: Het park, de rivieren en de show. Eten en snorkeluitrusting kosten extra.",
            "Plus-ticket: Met een buffetmaaltijd, snorkeluitrusting en de betere kleedruimte. De meerprijs waard voor een hele dag.",
            "Met vervoer: Met een bus vanaf je hotel. Handig vanuit Cancún, waar het park ruim een uur vandaan ligt.",
          ],
        },
        {
          heading: "De alternatieven",
          bullets: [
            "Xel-Há: Een natuurlijke lagune om te snorkelen, met eten en drinken inbegrepen. Beter voor zwemmers, zonder show.",
            "Zelf naar cenotes: Een paar dollar tot ongeveer $25 per stuk. Hetzelfde heldere water zonder het park eromheen.",
            "Akumal of Puerto Morelos: Snorkelen vanaf het strand met een lokale gids, voor een fractie van de prijs.",
          ],
        },
      ],
      tip: "In het water mag alleen biologisch afbreekbare zonnebrand. Neem die zelf mee: in het park is hij duur.",
      faq: [
        ["Wat kost Xcaret?", "Ongeveer $150 tot $200 per volwassene in 2026, afhankelijk van het soort ticket, de datum en of vervoer is inbegrepen."],
        ["Hoeveel uur heb je nodig in Xcaret?", "De hele dag. Kom bij opening en blijf voor de avondshow, die rond 21.00 uur eindigt."],
        ["Xcaret of Xel-Há?", "Xcaret voor de afwisseling en de show, Xel-Há voor een ontspannen dag snorkelen met eten en drinken inbegrepen."],
      ],
    },
  },
  {
    id: "cancun-5-days",
    destinationId: "cancun",
    type: "itineraries",
    image: "mx-cancun",
    readMinutes: 6,
    updated: "2026-11",
    bookingQuery: "Riviera Maya tours",
    en: {
      slug: "cancun-riviera-maya-5-days",
      title: "Cancún and the Riviera Maya in 5 days: a day-by-day itinerary",
      description: "Five days from a resort base: two days out, three on the beach, and the one long day that is worth the early start.",
      answer:
        "With five days, spend three on the beach and two on trips: one long day to Chichén Itzá with a cenote swim, and one shorter day to either Isla Mujeres or the Tulum ruins, whichever is closer to your hotel. Put a beach day between the two trips. The distances are larger than the map suggests, and two long days in a row will wear you out.",
      facts: [
        ["Book first", "Chichén Itzá tour, airport transfer"],
        ["Trips", "2 out of 5 days"],
        ["Staying in Cancún", "Add Isla Mujeres"],
        ["Staying near Playa or Tulum", "Add the Tulum ruins and a cenote"],
        ["Cash", "Pesos for entry fees, buses and tips"],
      ],
      sections: [
        {
          heading: "Days 1 and 2: Arrive and settle",
          bullets: [
            "Day 1: Land, take your pre-booked transfer and walk straight past the salespeople in the arrivals hall. Beach or pool until sunset.",
            "Day 2: Beach day. Book your trips for the rest of the week if you have not already; prices at the hotel tour desk are usually higher than online.",
          ],
        },
        {
          heading: "Day 3: Chichén Itzá",
          bullets: [
            "5 to 7 am: Pickup. The earlier the tour, the cooler and emptier the site.",
            "Morning: Two to three hours at the ruins with a guide.",
            "Afternoon: Lunch and a swim in a cenote, then a stop in the colonial town of Valladolid if your tour includes it.",
            "Evening: Back around 7 pm. Dinner at the hotel and an early night.",
          ],
        },
        {
          heading: "Day 4: Recover",
          bullets: [
            "All day: Beach. If seaweed has come in, ask the hotel which nearby beach is clear, or spend the day at the pool.",
          ],
        },
        {
          heading: "Day 5: Island or ruins",
          bullets: [
            "From Cancún: The ferry to Isla Mujeres for Playa Norte and a golf cart to Punta Sur.",
            "From Playa del Carmen or Tulum: The Tulum ruins at opening, a cenote before lunch, and the afternoon on the beach.",
            "With children: Swap either option for a full day at Xcaret.",
          ],
        },
      ],
      tip: "Pay in pesos, not dollars. Shops and taxis that accept dollars use an exchange rate that costs you about ten percent.",
      faq: [
        ["Is it better to stay in Cancún or Playa del Carmen?", "Cancún for big resorts, nightlife and the shortest transfer; Playa del Carmen for a walkable town closer to Tulum, the cenotes and the parks."],
        ["Is the Riviera Maya safe for tourists?", "The resort areas are busy and heavily policed, and most visits are trouble-free. Use pre-booked transfers and official taxis, and stay out of isolated areas at night."],
        ["Can you drink the tap water?", "No. Drink bottled or filtered water; resorts provide it and use purified water for ice."],
      ],
    },
    nl: {
      slug: "cancun-riviera-maya-in-5-dagen",
      title: "Cancún en de Riviera Maya in 5 dagen: een planning per dag",
      description: "Vijf dagen vanuit een resort: twee dagen eropuit, drie op het strand, en de ene lange dag die het vroege opstaan waard is.",
      answer:
        "Besteed van vijf dagen er drie aan het strand en twee aan uitstapjes: één lange dag naar Chichén Itzá met zwemmen in een cenote, en één kortere dag naar Isla Mujeres of de ruïnes van Tulum, afhankelijk van wat dichter bij je hotel ligt. Plan een stranddag tussen de twee uitstapjes. De afstanden zijn groter dan de kaart doet vermoeden, en twee lange dagen achter elkaar putten je uit.",
      facts: [
        ["Eerst boeken", "Tour naar Chichén Itzá, transfer vanaf het vliegveld"],
        ["Uitstapjes", "2 van de 5 dagen"],
        ["Verblijf in Cancún", "Voeg Isla Mujeres toe"],
        ["Verblijf bij Playa of Tulum", "Voeg de ruïnes van Tulum en een cenote toe"],
        ["Contant geld", "Peso's voor entree, bussen en fooien"],
      ],
      sections: [
        {
          heading: "Dag 1 en 2: Aankomen",
          bullets: [
            "Dag 1: Landen, je vooraf geboekte transfer nemen en in de aankomsthal recht langs de verkopers lopen. Strand of zwembad tot zonsondergang. Na de lange vlucht uit Nederland doe je de eerste dag weinig.",
            "Dag 2: Stranddag. Boek je uitstapjes voor de rest van de week als je dat nog niet deed; bij de tourbalie van het hotel is het meestal duurder dan online.",
          ],
        },
        {
          heading: "Dag 3: Chichén Itzá",
          bullets: [
            "5.00 tot 7.00 uur: Ophalen. Hoe vroeger de tour, hoe koeler en leger het terrein. Met je jetlag ben je toch vroeg wakker.",
            "Ochtend: Twee tot drie uur bij de ruïnes met een gids.",
            "Middag: Lunch en zwemmen in een cenote, daarna een stop in het koloniale stadje Valladolid als dat bij je tour zit.",
            "Avond: Rond 19.00 uur terug. Eten in het hotel en vroeg naar bed.",
          ],
        },
        {
          heading: "Dag 4: Bijkomen",
          bullets: [
            "De hele dag: Strand. Is er zeewier aangespoeld, vraag het hotel dan welk strand in de buurt schoon is, of blijf bij het zwembad.",
          ],
        },
        {
          heading: "Dag 5: Eiland of ruïnes",
          bullets: [
            "Vanuit Cancún: De veerboot naar Isla Mujeres voor Playa Norte, en met een golfkarretje naar Punta Sur.",
            "Vanuit Playa del Carmen of Tulum: De ruïnes van Tulum bij opening, een cenote voor de lunch en de middag op het strand.",
            "Met kinderen: Vervang een van beide door een hele dag Xcaret.",
          ],
        },
      ],
      tip: "Betaal in peso's, niet in dollars of euro's. Winkels en taxi's die dollars aannemen, rekenen een koers die je ongeveer tien procent kost.",
      faq: [
        ["Kun je beter in Cancún of in Playa del Carmen verblijven?", "Cancún voor grote resorts, uitgaan en de kortste transfer; Playa del Carmen voor een stad waar je kunt lopen, dichter bij Tulum, de cenotes en de parken."],
        ["Is de Riviera Maya veilig voor toeristen?", "In de resortgebieden is het druk en is veel politie aanwezig, en de meeste vakanties verlopen zonder problemen. Neem vooraf geboekte transfers en officiële taxi's en blijf 's nachts weg uit afgelegen gebieden."],
        ["Kun je het kraanwater drinken?", "Nee. Drink flessenwater of gefilterd water; resorts verstrekken dat en gebruiken gezuiverd water voor ijs."],
      ],
    },
  },
  {
    id: "cancun-hidden-gems",
    destinationId: "cancun",
    type: "hiddenGems",
    image: "mx-cenote",
    readMinutes: 6,
    updated: "2026-11",
    bookingQuery: "Riviera Maya cenotes tour",
    en: {
      slug: "hidden-gems",
      title: "Hidden gems on the Riviera Maya: 9 places beyond the resorts",
      description: "Nine places away from the tour buses: quiet cenotes, a jungle pyramid, a fishing town and a pink colonial city.",
      answer:
        "The best places beyond the resorts on the Riviera Maya are the small cenotes along the highway south of Playa del Carmen, the jungle ruins of Cobá and the colonial town of Valladolid. All three are cheaper and calmer than the famous sights, and each is within two hours of the hotels. A rental car for one or two days is the easiest way to reach them.",
      facts: [
        ["Cost", "$5 to $25 per cenote or site"],
        ["Transport", "Rental car, or local minibuses along the highway"],
        ["Best area", "Between Playa del Carmen and Tulum"],
        ["Bring", "Cash in pesos, biodegradable sunscreen"],
      ],
      sections: [
        {
          heading: "The nine places",
          bullets: [
            "The cenotes near Puerto Aventuras: A cluster of open-air sinkholes with clear water, platforms to jump from and few tour groups. Go on a weekday morning.",
            "Cobá: Maya ruins spread through the jungle around two lagoons. Rent a bike at the entrance to ride between the temples.",
            "Valladolid: A colonial town with pastel streets, a cenote in the middle of town and the best regional food at local prices. On the way to Chichén Itzá.",
            "Ek Balam: A smaller Maya site north of Valladolid with carved stucco that survived in remarkable detail.",
            "Puerto Morelos: A fishing town between Cancún and Playa del Carmen with a reef close to shore. Snorkel trips leave from the pier.",
            "Akumal: A bay where green sea turtles feed on the seagrass. Snorkeling is regulated to protect them, so go with a licensed guide.",
            "Playa Delfines: The public beach in Cancún's Hotel Zone, with no hotel behind it, free palapas and the famous Cancún sign.",
            "Punta Laguna: A small reserve run by a Maya community where spider monkeys and howler monkeys live. Go early with a local guide.",
            "Bacalar: A long freshwater lagoon in seven shades of blue. Too far for a day trip, perfect for two nights at the end of your stay.",
          ],
        },
        {
          heading: "How to combine them",
          paragraphs: [
            "One day by car covers Cobá in the morning, a cenote on the way back and Akumal late in the afternoon. A second day links Valladolid, Ek Balam and a cenote, as a quieter alternative to Chichén Itzá. Puerto Morelos and Playa Delfines need no car at all: both are a short bus or taxi ride from Cancún.",
          ],
        },
      ],
      tip: "Shower before you enter a cenote and skip regular sunscreen. The water is part of an underground river system that the whole peninsula drinks from.",
      faq: [
        ["What is a cenote?", "A natural sinkhole filled with fresh water, formed where the limestone roof of an underground river collapsed. The Yucatán Peninsula has thousands of them."],
        ["Which cenotes are best for beginners?", "Open-air cenotes with steps, platforms and life vests for rent. Cave cenotes are more dramatic but darker and deeper."],
      ],
    },
    nl: {
      slug: "verborgen-plekken",
      title: "Verborgen plekken aan de Riviera Maya: 9 plekken buiten de resorts",
      description: "Negen plekken weg van de tourbussen: rustige cenotes, een piramide in de jungle, een vissersdorp en een roze koloniale stad.",
      answer:
        "De mooiste plekken buiten de resorts aan de Riviera Maya zijn de kleine cenotes langs de snelweg ten zuiden van Playa del Carmen, de ruïnes van Cobá in de jungle en het koloniale stadje Valladolid. Alle drie zijn goedkoper en rustiger dan de beroemde bezienswaardigheden, en ze liggen binnen twee uur van de hotels. Met een huurauto voor één of twee dagen kom je er het makkelijkst.",
      facts: [
        ["Kosten", "$5 tot $25 per cenote of bezienswaardigheid"],
        ["Vervoer", "Huurauto, of lokale minibusjes langs de snelweg"],
        ["Beste gebied", "Tussen Playa del Carmen en Tulum"],
        ["Meenemen", "Contante peso's, biologisch afbreekbare zonnebrand"],
      ],
      sections: [
        {
          heading: "De negen plekken",
          bullets: [
            "De cenotes bij Puerto Aventuras: Een groepje open cenotes met helder water, platforms om vanaf te springen en weinig groepen. Ga op een doordeweekse ochtend.",
            "Cobá: Mayaruïnes verspreid door de jungle rond twee lagunes. Huur bij de ingang een fiets om tussen de tempels te rijden.",
            "Valladolid: Een koloniaal stadje met pastelkleurige straten, een cenote midden in de stad en het beste streekeigen eten voor lokale prijzen. Het ligt op de route naar Chichén Itzá.",
            "Ek Balam: Een kleinere Mayastad ten noorden van Valladolid, met stucwerk dat opvallend gaaf bewaard is gebleven.",
            "Puerto Morelos: Een vissersdorp tussen Cancún en Playa del Carmen met een rif dicht bij de kust. Snorkeltochten vertrekken vanaf de pier.",
            "Akumal: Een baai waar groene zeeschildpadden zeegras eten. Snorkelen is er aan regels gebonden om ze te beschermen, dus ga met een erkende gids.",
            "Playa Delfines: Het openbare strand in de hotelzone van Cancún, zonder hotel erachter, met gratis palapa's en het bekende Cancún-bord.",
            "Punta Laguna: Een klein reservaat van een Mayagemeenschap waar slingerapen en brulapen leven. Ga vroeg, met een lokale gids.",
            "Bacalar: Een lange zoetwaterlagune in zeven tinten blauw. Te ver voor een dagtrip, ideaal voor twee nachten aan het eind van je reis.",
          ],
        },
        {
          heading: "Hoe je ze combineert",
          paragraphs: [
            "In één dag met de auto doe je 's ochtends Cobá, op de terugweg een cenote en aan het eind van de middag Akumal. Een tweede dag verbindt Valladolid, Ek Balam en een cenote, als rustiger alternatief voor Chichén Itzá. Voor Puerto Morelos en Playa Delfines heb je geen auto nodig: beide liggen op een korte bus- of taxirit van Cancún.",
          ],
        },
      ],
      tip: "Douche voordat je een cenote in gaat en gebruik geen gewone zonnebrand. Het water hoort bij een ondergronds rivierenstelsel waar het hele schiereiland uit drinkt.",
      faq: [
        ["Wat is een cenote?", "Een natuurlijk zinkgat gevuld met zoet water, ontstaan waar het kalkstenen dak van een ondergrondse rivier is ingestort. Het schiereiland Yucatán telt er duizenden."],
        ["Welke cenotes zijn het best voor beginners?", "Open cenotes met trappen, platforms en zwemvesten te huur. Grotcenotes zijn indrukwekkender, maar donkerder en dieper."],
      ],
    },
  },
  {
    id: "cancun-airport",
    destinationId: "cancun",
    type: "practical",
    image: "mx-airport",
    readMinutes: 5,
    updated: "2026-11",
    bookingQuery: "Cancun airport transfer",
    en: {
      slug: "cancun-airport-to-hotel",
      title: "Cancún airport to your hotel: transfer, bus or taxi, and the tourist tax",
      description: "How to get from Cancún airport to the Hotel Zone, Playa del Carmen or Tulum, and the tax to pay online.",
      answer:
        "Book a private transfer before you fly: it costs about $35 to $55 to the Cancún Hotel Zone and $50 to $80 to Playa del Carmen, per vehicle, and the driver waits outside with your name. The ADO bus is the cheap alternative at about 140 pesos to downtown Cancún and 220 pesos to Playa del Carmen. Each visitor also pays the Visitax, a state tourist tax of about 290 pesos.",
      facts: [
        ["Private transfer, Hotel Zone", "About $35 to $55 per vehicle"],
        ["Private transfer, Playa del Carmen", "About $50 to $80 per vehicle"],
        ["ADO bus to downtown Cancún", "About 140 pesos"],
        ["ADO bus to Playa del Carmen", "About 220 pesos"],
        ["Visitax", "About 290 pesos per person"],
        ["To Tulum", "About 2 hours by road"],
      ],
      sections: [
        {
          heading: "Which one to choose",
          bullets: [
            "Families and groups: A private transfer. One price for the vehicle, no stops, child seats on request.",
            "Solo travelers and couples on a budget: The ADO bus, an air-conditioned coach from every terminal. It goes to downtown Cancún, not the Hotel Zone, so you add a short taxi or local bus.",
            "Shared shuttle: Cheaper than private, but it drops other passengers first and can take twice as long.",
            "Airport taxi: Fixed rates sold at a booth, and usually the most expensive option.",
          ],
        },
        {
          heading: "Getting out of the terminal",
          paragraphs: [
            "Between customs and the exit you walk through a hall of people in uniforms offering transport, tours and help. They sell timeshare presentations and overpriced rides. Do not stop: your real driver is outside the building, holding a sign. If you booked nothing, the ADO ticket counter is also outside, to the right.",
          ],
        },
        {
          heading: "The Visitax",
          paragraphs: [
            "Quintana Roo charges foreign visitors a tourist tax of about 290 pesos per person. Pay it on the official state website, before or during your trip, and keep the QR code on your phone. Look-alike sites charge more for the same payment, so check the address before you enter your card.",
          ],
        },
        {
          heading: "Flying into Tulum",
          paragraphs: [
            "Tulum has its own international airport, about 45 minutes from the town. If your hotel is in Tulum or the southern Riviera Maya, a flight there saves most of the road transfer.",
          ],
        },
      ],
      faq: [
        ["How much is a transfer from Cancún airport to the Hotel Zone?", "About $35 to $55 for a private vehicle and about $17 per person for a shared shuttle. Prices rise sharply around Christmas and New Year."],
        ["Can you use Uber at Cancún airport?", "Uber operates in Cancún, but pickups at the airport have been restricted and disputed. Do not rely on it for your arrival."],
        ["Do US citizens need a visa for Mexico?", "No. A valid passport is enough for a vacation stay. Immigration records your entry at the airport."],
      ],
    },
    nl: {
      slug: "van-vliegveld-cancun-naar-je-hotel",
      title: "Van vliegveld Cancún naar je hotel: transfer, bus of taxi, en de toeristenbelasting",
      description: "Hoe je van het vliegveld van Cancún naar de hotelzone, Playa del Carmen of Tulum komt, en de belasting die je online betaalt.",
      answer:
        "Boek voor vertrek een privétransfer: die kost ongeveer $35 tot $55 naar de hotelzone van Cancún en $50 tot $80 naar Playa del Carmen, per voertuig, en de chauffeur wacht buiten met je naam. De ADO-bus is het goedkope alternatief, voor ongeveer 140 peso naar het centrum van Cancún en 220 peso naar Playa del Carmen. Elke bezoeker betaalt daarnaast de Visitax, een toeristenbelasting van de deelstaat van ongeveer 290 peso.",
      facts: [
        ["Privétransfer, hotelzone", "Ongeveer $35 tot $55 per voertuig"],
        ["Privétransfer, Playa del Carmen", "Ongeveer $50 tot $80 per voertuig"],
        ["ADO-bus naar centrum Cancún", "Ongeveer 140 peso"],
        ["ADO-bus naar Playa del Carmen", "Ongeveer 220 peso"],
        ["Visitax", "Ongeveer 290 peso per persoon"],
        ["Naar Tulum", "Ongeveer 2 uur over de weg"],
      ],
      sections: [
        {
          heading: "Welke kies je",
          bullets: [
            "Gezinnen en groepen: Een privétransfer. Eén prijs voor het voertuig, geen tussenstops, kinderzitjes op aanvraag.",
            "Alleenreizenden en stellen met een klein budget: De ADO-bus, een touringcar met airco vanaf elke terminal. Hij rijdt naar het centrum van Cancún en niet naar de hotelzone, dus daar komt een korte taxi- of busrit bij.",
            "Gedeelde shuttle: Goedkoper dan privé, maar hij zet eerst andere passagiers af en kan twee keer zo lang duren.",
            "Taxi van het vliegveld: Vaste tarieven die je bij een loket koopt, en meestal de duurste optie.",
          ],
        },
        {
          heading: "De terminal uit komen",
          paragraphs: [
            "Tussen de douane en de uitgang loop je door een hal vol mensen in uniform die vervoer, tours en hulp aanbieden. Ze verkopen timesharepresentaties en te dure ritten. Loop door: je echte chauffeur staat buiten het gebouw, met een bord. Heb je niets geboekt, dan vind je ook het loket van ADO buiten, aan de rechterkant.",
          ],
        },
        {
          heading: "De Visitax",
          paragraphs: [
            "Quintana Roo vraagt buitenlandse bezoekers een toeristenbelasting van ongeveer 290 peso per persoon. Betaal die op de officiële site van de deelstaat, voor of tijdens je reis, en bewaar de QR-code op je telefoon. Namaaksites rekenen meer voor dezelfde betaling, dus controleer het adres voordat je je kaartgegevens invult.",
          ],
        },
        {
          heading: "Vliegen op Tulum",
          paragraphs: [
            "Tulum heeft een eigen internationaal vliegveld, ongeveer 45 minuten van het dorp. Ligt je hotel in Tulum of in het zuiden van de Riviera Maya, kijk dan of je via die luchthaven kunt vliegen: dat scheelt het grootste deel van de transfer.",
          ],
        },
      ],
      faq: [
        ["Wat kost een transfer van het vliegveld van Cancún naar de hotelzone?", "Ongeveer $35 tot $55 voor een privévoertuig en ongeveer $17 per persoon voor een gedeelde shuttle. Rond kerst en oud en nieuw stijgen de prijzen sterk."],
        ["Kun je Uber gebruiken op het vliegveld van Cancún?", "Uber rijdt in Cancún, maar ophalen op het vliegveld is beperkt en omstreden. Reken er bij aankomst niet op."],
        ["Heb je als Nederlander een visum nodig voor Mexico?", "Nee. Voor een vakantie is een geldig paspoort genoeg. De immigratiedienst registreert je aankomst op het vliegveld."],
      ],
    },
  },
  {
    id: "cancun-best-time",
    destinationId: "cancun",
    type: "practical",
    image: "mx-tulum",
    readMinutes: 4,
    updated: "2026-11",
    en: {
      slug: "best-time-to-visit-cancun",
      title: "Best time to visit Cancún and the Riviera Maya: weather, seaweed and hurricanes",
      description: "The dry season, the seaweed season and the hurricane season do not line up. How to choose your dates.",
      answer:
        "The best time to visit Cancún and the Riviera Maya is from December to April: dry, sunny and warm, with the least seaweed. From roughly April to August sargassum seaweed washes ashore, and 2026 was reported as the worst season on record. Hurricane season runs from June to November, with the highest risk in September and October, when prices are also lowest.",
      facts: [
        ["Best months", "December to April"],
        ["Seaweed season", "Roughly April to August"],
        ["Hurricane season", "June to November, peak September and October"],
        ["Highest prices", "Christmas, New Year and Easter"],
        ["Lowest prices", "September and October"],
      ],
      sections: [
        {
          heading: "Season by season",
          bullets: [
            "December to April: The dry season. Warm days, cooler evenings and calm seas. Book months ahead for Christmas, Presidents' Day week and spring break.",
            "May to August: Hot and humid, with afternoon showers. Good hotel prices, but this is when seaweed is most likely on the beach.",
            "September to November: The wettest months and the heart of hurricane season. The cheapest time to go; buy travel insurance that covers storms.",
          ],
        },
        {
          heading: "Planning around the seaweed",
          paragraphs: [
            "Sargassum is brown seaweed that drifts in from the Atlantic and piles up on the beach. It varies by week and by beach: the coast from Playa del Carmen to Tulum is usually hit hardest, while Cancún's north-facing beaches and Isla Mujeres stay clearer. Resorts clean their beaches daily, and live trackers show current conditions. In season, choose a hotel with good pools, and plan days at cenotes and on Isla Mujeres.",
          ],
        },
      ],
      tip: "Spring break fills Cancún's Hotel Zone with students in March. Families looking for quiet do better in Playa Mujeres or the Riviera Maya that month.",
      faq: [
        ["When is seaweed season in Cancún?", "Roughly April to August, with large differences between years and beaches. Check a live sargassum tracker in the week before you travel."],
        ["Is it safe to travel to Cancún in hurricane season?", "Usually, yes. Most weeks pass without a storm, and hurricanes are forecast days ahead. Book flexible rates and travel insurance from August to October."],
        ["What is the cheapest month to go to Cancún?", "September and October, in the peak of hurricane season. Early December, before the holidays, combines low prices with good weather."],
      ],
    },
    nl: {
      slug: "beste-reistijd-cancun",
      title: "Beste reistijd voor Cancún en de Riviera Maya: weer, zeewier en orkanen",
      description: "Het droge seizoen, het zeewierseizoen en het orkaanseizoen vallen niet samen. Hoe je je data kiest.",
      answer:
        "De beste reistijd voor Cancún en de Riviera Maya is van december tot en met april: droog, zonnig en warm, met het minste zeewier. Van ruwweg april tot en met augustus spoelt sargassum aan, en 2026 was volgens berichten het zwaarste seizoen ooit. Het orkaanseizoen loopt van juni tot en met november, met het grootste risico in september en oktober, als de prijzen ook het laagst zijn.",
      facts: [
        ["Beste maanden", "December tot en met april"],
        ["Zeewierseizoen", "Ruwweg april tot en met augustus"],
        ["Orkaanseizoen", "Juni t/m november, piek in september en oktober"],
        ["Hoogste prijzen", "Kerst, oud en nieuw en Pasen"],
        ["Laagste prijzen", "September en oktober"],
      ],
      sections: [
        {
          heading: "Per seizoen",
          bullets: [
            "December tot en met april: Het droge seizoen. Warme dagen, koelere avonden en een rustige zee. Boek maanden vooruit voor de kerstvakantie en de voorjaarsvakantie.",
            "Mei tot en met augustus: Heet en vochtig, met buien in de middag. Goede hotelprijzen, maar in deze periode ligt er het vaakst zeewier op het strand. Dat geldt ook voor de zomervakantie.",
            "September tot en met november: De natste maanden en het hart van het orkaanseizoen. De goedkoopste tijd om te gaan; sluit een reisverzekering af die stormen dekt.",
          ],
        },
        {
          heading: "Rekening houden met het zeewier",
          paragraphs: [
            "Sargassum is bruin zeewier dat vanuit de Atlantische Oceaan aandrijft en zich ophoopt op het strand. Het verschilt per week en per strand: de kust van Playa del Carmen tot Tulum krijgt meestal het meeste, terwijl de stranden van Cancún die op het noorden liggen en Isla Mujeres schoner blijven. Resorts maken hun strand dagelijks schoon, en op live kaarten zie je de actuele situatie. Kies in het seizoen een hotel met goede zwembaden en plan dagen bij cenotes en op Isla Mujeres.",
          ],
        },
      ],
      tip: "In maart zit de hotelzone van Cancún vol Amerikaanse studenten die spring break vieren. Wie rust zoekt, zit die maand beter in Playa Mujeres of aan de Riviera Maya.",
      faq: [
        ["Wanneer is het zeewierseizoen in Cancún?", "Ruwweg van april tot en met augustus, met grote verschillen per jaar en per strand. Bekijk in de week voor vertrek een live sargassumkaart."],
        ["Is het veilig om in het orkaanseizoen naar Cancún te gaan?", "Meestal wel. De meeste weken gaan voorbij zonder storm, en orkanen worden dagen vooruit voorspeld. Boek van augustus tot en met oktober flexibele tarieven en een reisverzekering."],
        ["Wat is de goedkoopste maand voor Cancún?", "September en oktober, in de piek van het orkaanseizoen. Begin december, vóór de feestdagen, combineert lage prijzen met goed weer."],
      ],
    },
  },
  {
    id: "cancun-cozumel-shore",
    destinationId: "cancun",
    type: "shoreExcursions",
    image: "mx-cozumel",
    readMinutes: 5,
    updated: "2026-11",
    bookingQuery: "Cozumel shore excursion",
    en: {
      slug: "cozumel-shore-excursions",
      title: "Cozumel cruise port: the best shore excursions and what to skip",
      description: "How to spend a port day in Cozumel: which pier you dock at, what is worth booking and why Tulum is a stretch.",
      answer:
        "The best use of a port day in Cozumel is the island itself: a snorkeling trip on its reefs, among the best in the Caribbean, or a beach club on the west coast. Mainland trips to Tulum or Chichén Itzá take a ferry crossing each way and fill the whole day, so book those only through the ship or with plenty of margin.",
      facts: [
        ["Cruise piers", "Three: Punta Langosta, International, Puerta Maya"],
        ["Downtown from the southern piers", "5 to 10 minutes by taxi"],
        ["Ferry to the mainland", "30 to 45 minutes each way"],
        ["Best on the island", "Reef snorkeling, beach clubs"],
        ["Time zone", "Check ship time against local time"],
      ],
      sections: [
        {
          heading: "Which pier you dock at",
          paragraphs: [
            "Cozumel has three cruise piers. Punta Langosta is in the middle of the town of San Miguel, so shops and restaurants are steps away. The International Pier and Puerta Maya lie a few kilometres south, each with its own shopping village; from there the town is a short taxi ride at a fixed rate. Your cruise line's app tells you the pier the day before.",
          ],
        },
        {
          heading: "The best ways to spend the day",
          bullets: [
            "Reef snorkeling by boat: Two or three stops on the reefs of the marine park, including shallow sandbars with starfish. Two to four hours.",
            "Beach club day: A day pass with loungers, a pool and often food and drinks. The simplest good day, and easy to cut short.",
            "Island tour by jeep or buggy: The wild east coast, a Maya site in the middle of the island and a beach stop. You see the side most passengers miss.",
            "Scuba diving: Cozumel is a world-class drift-diving site. Certified divers can fit two tanks into a port day.",
          ],
        },
        {
          heading: "What to think twice about",
          bullets: [
            "Tulum: A ferry, a one-hour drive, the ruins and the same back. Possible, but tight and tiring.",
            "Chichén Itzá: Only by small plane or a very long day. Save it for a land vacation.",
            "Playa del Carmen on your own: The ferry is easy, but it can be rough and seasick-making, and the last boat back is not something to gamble on.",
          ],
        },
      ],
      tip: "The reefs are protected: only reef-safe sunscreen is allowed on snorkel boats. Wear a rash guard and you will need far less of it.",
      faq: [
        ["Can you walk from the Cozumel cruise port to town?", "From Punta Langosta, yes: it is downtown. From the International Pier and Puerta Maya, take a taxi; the walk is long and hot."],
        ["Is Cozumel good for snorkeling?", "Yes. The reefs off the west coast are part of a marine park and are among the best in the Caribbean, with clear water most of the year."],
        ["Can you visit Tulum from a Cozumel cruise stop?", "Yes, on a long day involving a ferry and a drive each way. Book it through the ship so that it waits if the excursion runs late."],
      ],
    },
  },
];
