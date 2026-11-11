import type { Article } from "../articles";

// Fact check, 11 November 2026.
//
// Confirmed on official pages:
// - Sagrada Familia (sagradafamilia.org/en/prices): EUR 26 with audioguide app, EUR 30 with
//   guided tour, EUR 36 with towers, EUR 40 with guided tour and towers; under 30 EUR 24;
//   under 11 free. The "temporarily closed" text on the tickets page is a stale fallback
//   notice: the home page shows no closure and news reports visitors on 11 November 2026.
// - Park Guell (parkguell.barcelona): EUR 18 general, EUR 13.50 for ages 7 to 12 and over 65,
//   free under 7; timed tickets with entry between 9:30 and 17:30; no re-entry.
//
// Only found on third-party sites or written from general knowledge. Re-check before launch:
// - Sagrada Familia central tower finished in February 2026 at 172.5 metres (news reports).
// - Casa Batllo (EUR 29 to 45, dynamic, roof not in the basic ticket) and La Pedrera
//   (EUR 25 online, EUR 29 on site).
// - Airport: metro EUR 5.90, Aerobus EUR 7.75, train about EUR 5, taxi EUR 35 to 40.
// - Montserrat combined ticket (sources give EUR 22 to 29) and travel time.
// - Tourist tax doubled in April 2026, up to about EUR 12 per person per night.
// - Opening hours of the Sagrada Familia, tower age rule, the Bunkers access rules,
//   climate figures and the hidden-gems list.

export const barcelonaArticles: Article[] = [
  {
    id: "barcelona-sagrada-familia",
    destinationId: "barcelona",
    type: "tickets",
    image: "bcn-sagrada",
    readMinutes: 5,
    updated: "2026-11",
    bookingQuery: "Sagrada Familia tickets",
    en: {
      slug: "sagrada-familia-tickets",
      title: "Sagrada Família tickets: which one to buy and whether the towers are worth it",
      description: "The four Sagrada Família tickets with their prices, how far ahead to book and what the tower visit adds.",
      answer:
        "The standard Sagrada Família ticket costs €26 and includes an audioguide in the official app; it is enough for most visitors. Add the towers, for €36 in total, only if you want the view and are comfortable with a long, narrow spiral staircase down. Tickets are sold online for a timed slot and sell out days or weeks ahead from spring to autumn.",
      facts: [
        ["Standard ticket", "€26, audioguide app included"],
        ["With guided tour", "€30"],
        ["With towers", "€36"],
        ["Under 30", "€24; under 11 free"],
        ["Time needed", "1.5 to 2 hours"],
        ["Dress code", "Shoulders and thighs covered"],
      ],
      sections: [
        {
          heading: "The four tickets",
          bullets: [
            "Basilica with audioguide: The interior, the museum and the two finished façades at your own pace. The right choice for most people.",
            "Basilica with guided tour: A guide for about 50 minutes, then free time inside. Worth the extra €4: the symbolism is dense and easy to miss.",
            "Basilica with towers: Adds a lift up one of the towers and the walk down. You choose the tower when you book.",
            "Guided tour and towers: Everything, for €40.",
          ],
        },
        {
          heading: "Are the towers worth it?",
          paragraphs: [
            "The towers give you a close look at the spires and a view over the city, but the best part of the Sagrada Família is the interior, and that is in every ticket. You go up by lift and come down a tight spiral stair of several hundred steps, with no way to turn back. Skip the towers if you dislike heights or confined spaces; they also close in rain and strong wind.",
          ],
        },
        {
          heading: "When to go",
          paragraphs: [
            "Book a slot in the late afternoon. The stained glass on the west side is in warm reds and oranges, and the low sun fills the nave with colour in the two hours before closing. Mornings light the cooler blue and green side. The central tower was completed in 2026, making the basilica the tallest church in the world; work on the main façade continues.",
          ],
        },
      ],
      tip: "Buy only on the official site or from a seller you know. Many look-alike sites charge more for the same ticket.",
      faq: [
        ["How much is a ticket to the Sagrada Família?", "€26 for the standard ticket with audioguide app, €30 with a guided tour and €36 with tower access. Children under 11 enter free."],
        ["Can you buy Sagrada Família tickets at the door?", "No. Tickets are sold online for a timed entry and are often sold out for the same day."],
        ["Is the Sagrada Família finished?", "Not entirely. The central tower reached its full height in 2026, but work on the main façade and details continues for several more years."],
      ],
    },
    nl: {
      slug: "sagrada-familia-tickets",
      title: "Sagrada Família-tickets: welke koop je en zijn de torens de moeite waard",
      description: "De vier tickets voor de Sagrada Família met hun prijzen, hoe ver vooruit je boekt en wat de torens toevoegen.",
      answer:
        "Het standaardticket voor de Sagrada Família kost €26, inclusief een audiogids in de officiële app, en is voor de meeste bezoekers genoeg. Voeg de torens toe, voor €36 in totaal, als je het uitzicht wilt en geen moeite hebt met een lange, smalle wenteltrap naar beneden. Tickets koop je online voor een vast tijdslot, en van het voorjaar tot de herfst zijn ze dagen of weken vooruit uitverkocht.",
      facts: [
        ["Standaardticket", "€26, inclusief audiogids in de app"],
        ["Met rondleiding", "€30"],
        ["Met torens", "€36"],
        ["Onder 30 jaar", "€24; onder 11 gratis"],
        ["Benodigde tijd", "1,5 tot 2 uur"],
        ["Kledingvoorschrift", "Schouders en bovenbenen bedekt"],
      ],
      sections: [
        {
          heading: "De vier tickets",
          bullets: [
            "Basiliek met audiogids: Het interieur, het museum en de twee voltooide gevels in je eigen tempo. Voor de meeste mensen de juiste keus.",
            "Basiliek met rondleiding: Ongeveer 50 minuten met een gids, daarna vrije tijd binnen. De €4 extra waard: de symboliek is rijk en ontgaat je snel.",
            "Basiliek met torens: Met een lift omhoog in een van de torens en te voet naar beneden. Je kiest de toren bij het boeken.",
            "Rondleiding en torens: Alles, voor €40.",
          ],
        },
        {
          heading: "Zijn de torens de moeite waard?",
          paragraphs: [
            "Vanaf de torens zie je de spitsen van dichtbij en kijk je uit over de stad, maar het mooiste van de Sagrada Família is het interieur, en dat zit bij elk ticket. Je gaat met de lift omhoog en daalt af via een nauwe wenteltrap van een paar honderd treden, zonder mogelijkheid om om te keren. Sla de torens over als je niet van hoogtes of kleine ruimtes houdt; bij regen en harde wind gaan ze bovendien dicht.",
          ],
        },
        {
          heading: "Wanneer je gaat",
          paragraphs: [
            "Boek een tijdslot aan het eind van de middag. Het glas-in-lood aan de westkant is in warm rood en oranje, en de lage zon vult het schip in de twee uur voor sluiting met kleur. 's Ochtends valt het licht door de koelere blauwe en groene kant. De middentoren is in 2026 voltooid, waarmee de basiliek de hoogste kerk ter wereld is; aan de hoofdgevel wordt nog gewerkt.",
          ],
        },
      ],
      tip: "Koop alleen op de officiële site of bij een aanbieder die je kent. Veel namaaksites rekenen meer voor hetzelfde ticket.",
      faq: [
        ["Wat kost een ticket voor de Sagrada Família?", "€26 voor het standaardticket met audiogids in de app, €30 met rondleiding en €36 met toegang tot de torens. Kinderen onder de 11 mogen gratis naar binnen."],
        ["Kun je tickets aan de deur kopen?", "Nee. Tickets worden online verkocht voor een vast tijdslot en zijn voor dezelfde dag vaak uitverkocht."],
        ["Is de Sagrada Família af?", "Niet helemaal. De middentoren bereikte in 2026 zijn volle hoogte, maar aan de hoofdgevel en de details wordt nog jaren gewerkt."],
      ],
    },
  },
  {
    id: "barcelona-park-guell",
    destinationId: "barcelona",
    type: "tickets",
    image: "bcn-guell",
    readMinutes: 4,
    updated: "2026-11",
    bookingQuery: "Park Guell tickets",
    en: {
      slug: "park-guell-tickets",
      title: "Park Güell tickets: price, time slots and how to get there",
      description: "What Park Güell costs, how the timed entry works and the route that saves you the climb.",
      answer:
        "A Park Güell ticket costs €18 for adults and €13.50 for children aged 7 to 12, and it is tied to a time slot: you can enter up to 30 minutes after it starts. Book online a few days ahead, more in summer. Once inside you can stay as long as you like, but you cannot leave and come back.",
      facts: [
        ["Adult ticket", "€18"],
        ["Children 7 to 12, over 65", "€13.50; under 7 free"],
        ["Entry slots", "Between 9:30 am and 5:30 pm"],
        ["Late arrival", "Up to 30 minutes after your slot starts"],
        ["Time needed", "1.5 to 2 hours"],
        ["Best time", "First slot of the morning"],
      ],
      sections: [
        {
          heading: "What you see",
          paragraphs: [
            "Park Güell was planned as a garden suburb and became a public park when the project failed. Gaudí's part is concentrated near the main entrance: the mosaic lizard on the staircase, the hall of columns and the terrace above it, edged by a long tiled bench with a view over the city to the sea. The rest is a hillside park with paths and viewpoints.",
          ],
        },
        {
          heading: "How to get there",
          bullets: [
            "Metro and walk: Line 3 to Lesseps or Vallcarca, then 15 to 20 minutes on foot, partly uphill.",
            "Bus: Routes from the centre stop a few minutes from the entrance, with far less climbing.",
            "Taxi: About ten euros from the Sagrada Família, and it drops you at the gate. The easiest option in summer heat.",
          ],
        },
        {
          heading: "Combining it",
          paragraphs: [
            "Park Güell and the Sagrada Família are fifteen minutes apart by taxi and pair well in one day: the park at opening, the basilica in the late afternoon for the light. Leave at least three hours between the two slots.",
          ],
        },
      ],
      tip: "There is little shade on the main terrace and no re-entry. Bring water and a hat, and use the toilets near the entrance before you start.",
      faq: [
        ["How much is Park Güell?", "€18 for adults and €13.50 for children aged 7 to 12 and visitors over 65. Children under 7 are free but still need a ticket."],
        ["Is Park Güell free?", "Not for visitors. Local residents have free access and their own early and evening hours."],
        ["Is Park Güell worth it?", "Yes, for the terrace and the mosaics. If you have seen the Sagrada Família and a Gaudí house and are short of time, it is the one to drop."],
      ],
    },
    nl: {
      slug: "park-guell-tickets",
      title: "Park Güell-tickets: prijs, tijdsloten en hoe je er komt",
      description: "Wat Park Güell kost, hoe de toegang met tijdslot werkt en de route die je de klim bespaart.",
      answer:
        "Een ticket voor Park Güell kost €18 voor volwassenen en €13,50 voor kinderen van 7 tot en met 12 jaar, en het hoort bij een tijdslot: je kunt tot 30 minuten na het begin naar binnen. Boek online een paar dagen vooruit, in de zomer eerder. Eenmaal binnen mag je zo lang blijven als je wilt, maar je kunt er niet uit en weer in.",
      facts: [
        ["Ticket volwassene", "€18"],
        ["Kinderen 7 t/m 12, 65-plus", "€13,50; onder 7 gratis"],
        ["Tijdsloten", "Tussen 9.30 en 17.30 uur"],
        ["Te laat komen", "Tot 30 minuten na het begin van je tijdslot"],
        ["Benodigde tijd", "1,5 tot 2 uur"],
        ["Beste moment", "Het eerste tijdslot van de ochtend"],
      ],
      sections: [
        {
          heading: "Wat je ziet",
          paragraphs: [
            "Park Güell was bedoeld als tuinwijk en werd een openbaar park toen het project mislukte. Het werk van Gaudí ligt bij de hoofdingang: de mozaïekhagedis op de trap, de zuilenhal en het terras erboven, omzoomd door een lange betegelde bank met uitzicht over de stad tot aan zee. De rest is een park op een helling, met paden en uitkijkpunten.",
          ],
        },
        {
          heading: "Hoe je er komt",
          bullets: [
            "Metro en lopen: Lijn 3 naar Lesseps of Vallcarca, daarna 15 tot 20 minuten te voet, deels bergop.",
            "Bus: Lijnen vanuit het centrum stoppen op een paar minuten van de ingang, met veel minder klimmen.",
            "Taxi: Ongeveer tien euro vanaf de Sagrada Família, en je wordt voor de poort afgezet. In de zomerhitte het makkelijkst.",
          ],
        },
        {
          heading: "Combineren",
          paragraphs: [
            "Park Güell en de Sagrada Família liggen een kwartier met de taxi uit elkaar en passen goed op één dag: het park bij opening, de basiliek aan het eind van de middag voor het licht. Houd minstens drie uur tussen de twee tijdsloten.",
          ],
        },
      ],
      tip: "Op het grote terras is weinig schaduw en je kunt niet opnieuw naar binnen. Neem water en een pet mee, en ga naar de wc bij de ingang voordat je begint.",
      faq: [
        ["Wat kost Park Güell?", "€18 voor volwassenen en €13,50 voor kinderen van 7 tot en met 12 jaar en voor 65-plussers. Kinderen onder de 7 zijn gratis, maar hebben wel een ticket nodig."],
        ["Is Park Güell gratis?", "Niet voor bezoekers. Buurtbewoners hebben gratis toegang en eigen uren, vroeg in de ochtend en 's avonds."],
        ["Is Park Güell de moeite waard?", "Ja, voor het terras en de mozaïeken. Heb je de Sagrada Família en een huis van Gaudí gezien en weinig tijd, dan is dit degene die je laat vallen."],
      ],
    },
  },
  {
    id: "barcelona-gaudi-houses",
    destinationId: "barcelona",
    type: "comparisons",
    image: "bcn-pedrera",
    readMinutes: 4,
    updated: "2026-11",
    bookingQuery: "Casa Batllo La Pedrera tickets",
    en: {
      slug: "casa-batllo-or-la-pedrera",
      title: "Casa Batlló or La Pedrera: which Gaudí house to visit",
      description: "Two Gaudí houses on the same avenue, both expensive. What each offers and which to pick if you only do one.",
      answer:
        "Choose Casa Batlló if you want the most striking interior: curved rooms, a blue-tiled light well and a façade like a skeleton. Choose La Pedrera for the rooftop, with its chimneys like helmeted warriors, and for a lower price of about €25 booked online. Casa Batlló starts around €29 and climbs with demand, and its basic ticket no longer includes the roof.",
      facts: [
        ["Casa Batlló", "From about €29, more close to the date"],
        ["La Pedrera", "About €25 online, €29 at the door"],
        ["Distance apart", "Five minutes on foot"],
        ["Time needed", "1 to 1.5 hours each"],
        ["Free alternative", "Both façades from the street"],
      ],
      sections: [
        {
          heading: "Side by side",
          bullets: [
            "Casa Batlló: A remodelled townhouse with no straight line in it. The visit uses a tablet and light effects, which some love and some find too much. The busier and more expensive of the two.",
            "La Pedrera (Casa Milà): An apartment block around two courtyards. You see the rooftop, the attic with its brick arches and a furnished flat from the period. Calmer, and closer to how Gaudí's buildings were lived in.",
          ],
        },
        {
          heading: "How to choose",
          bullets: [
            "You want one photo-filled hour: Casa Batlló.",
            "You care about architecture and how it works: La Pedrera.",
            "You are on a budget: La Pedrera, booked online in advance.",
            "You want the roof at Casa Batlló: Check the ticket level; the roof terrace needs the next tier up.",
            "You have already seen the Sagrada Família: One house is enough for most people.",
          ],
        },
        {
          heading: "Seeing them for free",
          paragraphs: [
            "Both stand on Passeig de Gràcia, five minutes apart, and the façades cost nothing. Casa Batlló shares its block with two other showpiece houses by rival architects, so a walk up the avenue gives you a short history of Barcelona's Modernisme without a ticket.",
          ],
        },
      ],
      tip: "Both houses run evening visits with rooftop light shows at a higher price. They are atmospheric, but you see less of the architecture.",
      faq: [
        ["Which is better, Casa Batlló or La Pedrera?", "Casa Batlló for the interior, La Pedrera for the rooftop and the price. If you can only see one and want the more dramatic house, choose Casa Batlló."],
        ["Do you need to book Casa Batlló in advance?", "Yes in high season. Prices rise as the date approaches, so booking a week or more ahead is also cheaper."],
      ],
    },
    nl: {
      slug: "casa-batllo-of-la-pedrera",
      title: "Casa Batlló of La Pedrera: welk huis van Gaudí bezoek je",
      description: "Twee huizen van Gaudí aan dezelfde laan, allebei duur. Wat elk biedt en welke je kiest als je er maar één doet.",
      answer:
        "Kies Casa Batlló als je het meest opvallende interieur wilt: gebogen kamers, een blauw betegelde lichtschacht en een gevel als een skelet. Kies La Pedrera voor het dak, met schoorstenen als gehelmde krijgers, en voor de lagere prijs van ongeveer €25 als je online boekt. Casa Batlló begint rond de €29 en wordt duurder bij drukte, en bij het basisticket zit het dak niet meer.",
      facts: [
        ["Casa Batlló", "Vanaf ongeveer €29, duurder kort vooraf"],
        ["La Pedrera", "Ongeveer €25 online, €29 aan de deur"],
        ["Afstand", "Vijf minuten lopen van elkaar"],
        ["Benodigde tijd", "1 tot 1,5 uur per huis"],
        ["Gratis alternatief", "Beide gevels vanaf de straat"],
      ],
      sections: [
        {
          heading: "Naast elkaar",
          bullets: [
            "Casa Batlló: Een verbouwd herenhuis zonder één rechte lijn. Het bezoek werkt met een tablet en lichteffecten, wat de een prachtig vindt en de ander te veel. De drukste en duurste van de twee.",
            "La Pedrera (Casa Milà): Een appartementengebouw rond twee binnenplaatsen. Je ziet het dak, de zolder met bakstenen bogen en een ingerichte woning uit die tijd. Rustiger, en dichter bij hoe er in Gaudí's gebouwen werd gewoond.",
          ],
        },
        {
          heading: "Hoe je kiest",
          bullets: [
            "Je wilt één uur vol foto's: Casa Batlló.",
            "Je geeft om architectuur en hoe die werkt: La Pedrera.",
            "Je let op je budget: La Pedrera, vooraf online geboekt.",
            "Je wilt het dak van Casa Batlló op: Kijk naar het soort ticket; voor het dakterras heb je het volgende niveau nodig.",
            "Je hebt de Sagrada Família al gezien: Eén huis is voor de meeste mensen genoeg.",
          ],
        },
        {
          heading: "Gratis bekijken",
          paragraphs: [
            "Beide staan aan de Passeig de Gràcia, vijf minuten van elkaar, en de gevels kosten niets. Casa Batlló deelt zijn huizenblok met twee andere pronkhuizen van rivaliserende architecten, dus een wandeling over de laan geeft je zonder ticket een korte geschiedenis van het modernisme in Barcelona.",
          ],
        },
      ],
      tip: "Beide huizen hebben avondbezoeken met een lichtshow op het dak, tegen een hogere prijs. Sfeervol, maar je ziet minder van de architectuur.",
      faq: [
        ["Wat is beter, Casa Batlló of La Pedrera?", "Casa Batlló voor het interieur, La Pedrera voor het dak en de prijs. Kun je er maar één zien en wil je het meest spectaculaire huis, kies dan Casa Batlló."],
        ["Moet je Casa Batlló vooraf boeken?", "In het hoogseizoen wel. De prijzen stijgen naarmate de datum nadert, dus een week of langer vooruit boeken is ook goedkoper."],
      ],
    },
  },
  {
    id: "barcelona-montserrat",
    destinationId: "barcelona",
    type: "worthIt",
    image: "bcn-montserrat",
    readMinutes: 4,
    updated: "2026-11",
    bookingQuery: "Montserrat day trip from Barcelona",
    en: {
      slug: "is-montserrat-worth-it",
      title: "Is Montserrat worth a day trip from Barcelona?",
      description: "A mountain monastery an hour from the city. Who should go, how to get there and whether to take a tour.",
      answer:
        "Montserrat is worth a day trip if you have four days or more in Barcelona and want a break from the city: a monastery set among saw-toothed rock, an hour away by train, with easy mountain walks. With three days or fewer, stay in town. You can go on your own with a combined train and mountain-railway ticket of roughly €22 to €29, or take a tour that adds a guide and often a winery.",
      facts: [
        ["From Barcelona", "About 1 hour by train, plus the ride up"],
        ["Combined ticket", "Roughly €22 to €29"],
        ["Half-day tour", "Usually €50 to €80"],
        ["Time needed", "6 to 8 hours door to door"],
        ["Verdict", "Worth it from four days in Barcelona"],
      ],
      sections: [
        {
          heading: "What is there",
          bullets: [
            "The monastery and basilica: A working Benedictine abbey with the Black Madonna, the patron of Catalonia, above the altar.",
            "The mountain: Funiculars and marked paths lead to viewpoints over the rock pinnacles. The walk to Sant Joan is the classic.",
            "The boys' choir: One of the oldest in Europe. It sings in the basilica on many days; check the schedule before you choose your date.",
          ],
        },
        {
          heading: "On your own or with a tour",
          bullets: [
            "On your own: The R5 train from Plaça d'Espanya, then the rack railway or the cable car up. The combined ticket covers both. Cheapest and flexible.",
            "Half-day tour: A coach there and back with a guide, home by early afternoon. Good if your time is tight.",
            "Tour with winery: Adds a tasting at a cava or wine estate nearby. A full day, and the most relaxed way to do it.",
          ],
        },
        {
          heading: "Who should skip it",
          paragraphs: [
            "If this is your first visit and you have three days, Barcelona itself deserves them. Skip Montserrat too on days of low cloud, when the views disappear, and on Sundays and holidays, when the monastery is at its most crowded.",
          ],
        },
      ],
      tip: "It is several degrees cooler on the mountain than in the city, and windier. Bring a layer even in summer.",
      faq: [
        ["How do you get to Montserrat from Barcelona?", "By the R5 train from Plaça d'Espanya, about an hour, then the rack railway or cable car up to the monastery."],
        ["How long do you need at Montserrat?", "Three to four hours on the mountain. With travel, plan six to eight hours in total."],
      ],
    },
    nl: {
      slug: "is-montserrat-de-moeite-waard",
      title: "Is Montserrat een dagtrip vanuit Barcelona waard?",
      description: "Een bergklooster op een uur van de stad. Voor wie het iets is, hoe je er komt en of je een tour neemt.",
      answer:
        "Montserrat is een dagtrip waard als je vier dagen of langer in Barcelona bent en even de stad uit wilt: een klooster tussen grillige rotspieken, op een uur met de trein, met makkelijke bergwandelingen. Met drie dagen of minder blijf je in de stad. Je kunt zelf gaan met een gecombineerd ticket voor trein en bergspoor van ruwweg €22 tot €29, of een tour nemen met een gids en vaak een wijnhuis.",
      facts: [
        ["Vanuit Barcelona", "Ongeveer 1 uur met de trein, plus de rit omhoog"],
        ["Gecombineerd ticket", "Ruwweg €22 tot €29"],
        ["Halvedagtour", "Meestal €50 tot €80"],
        ["Benodigde tijd", "6 tot 8 uur van deur tot deur"],
        ["Oordeel", "De moeite waard vanaf vier dagen Barcelona"],
      ],
      sections: [
        {
          heading: "Wat er is",
          bullets: [
            "Het klooster en de basiliek: Een benedictijnenabdij in gebruik, met boven het altaar de Zwarte Madonna, de beschermheilige van Catalonië.",
            "De berg: Kabelspoorwegen en gemarkeerde paden leiden naar uitkijkpunten over de rotspieken. De wandeling naar Sant Joan is de klassieker.",
            "Het jongenskoor: Een van de oudste van Europa. Het zingt op veel dagen in de basiliek; bekijk het rooster voordat je je datum kiest.",
          ],
        },
        {
          heading: "Zelf of met een tour",
          bullets: [
            "Zelf: De trein R5 vanaf Plaça d'Espanya, daarna de tandradbaan of de kabelbaan omhoog. Het gecombineerde ticket dekt beide. Het goedkoopst en flexibel.",
            "Halvedagtour: Een bus heen en terug met een gids, en aan het begin van de middag terug. Goed als je weinig tijd hebt.",
            "Tour met wijnhuis: Met een proeverij bij een cava- of wijnhuis in de buurt. Een hele dag, en de meest ontspannen manier.",
          ],
        },
        {
          heading: "Wie het beter overslaat",
          paragraphs: [
            "Is dit je eerste bezoek en heb je drie dagen, dan verdient Barcelona zelf die dagen. Sla Montserrat ook over bij laaghangende bewolking, als het uitzicht verdwijnt, en op zon- en feestdagen, als het bij het klooster het drukst is.",
          ],
        },
      ],
      tip: "Op de berg is het een paar graden koeler dan in de stad, en het waait er meer. Neem ook in de zomer een extra laag mee.",
      faq: [
        ["Hoe kom je van Barcelona naar Montserrat?", "Met de trein R5 vanaf Plaça d'Espanya, ongeveer een uur, en daarna met de tandradbaan of de kabelbaan omhoog naar het klooster."],
        ["Hoeveel tijd heb je nodig op Montserrat?", "Drie tot vier uur op de berg. Met de reis erbij ben je in totaal zes tot acht uur onderweg."],
      ],
    },
  },
  {
    id: "barcelona-3-days",
    destinationId: "barcelona",
    type: "itineraries",
    image: "bcn-bunkers",
    readMinutes: 7,
    updated: "2026-11",
    bookingQuery: "Barcelona tours",
    en: {
      slug: "barcelona-in-3-days",
      title: "Barcelona in 3 days: a day-by-day itinerary",
      description: "Three days in Barcelona built around two bookings, with late lunches and the light in the right place.",
      answer:
        "Three days is enough for Barcelona's main sights if you book the Sagrada Família and Park Güell first and plan around them. Spend day one on Gaudí, day two in the old town and at the beach, and day three on Montjuïc and one Gaudí house. Eat on local time: lunch at 2 pm and dinner after 8:30 pm, when the kitchens are at their best.",
      facts: [
        ["Book first", "Sagrada Família, Park Güell"],
        ["Meal times", "Lunch from 1:30 pm, dinner from 8:30 pm"],
        ["Getting around", "Metro and walking; a 10-trip card covers three days"],
        ["Best base", "Eixample, the Gothic Quarter or Gràcia"],
        ["Budget for tickets", "About €70 to €100 per adult"],
      ],
      sections: [
        {
          heading: "Day 1: Gaudí",
          bullets: [
            "9:30 am: Park Güell on the first slot, before the heat and the groups.",
            "12:00 pm: Walk down through Gràcia, a former village of small squares, and have a late lunch there.",
            "3:00 pm: Passeig de Gràcia for Casa Batlló and La Pedrera, from the street or inside one of them.",
            "5:00 pm: The Sagrada Família, timed for the afternoon light through the west windows.",
          ],
        },
        {
          heading: "Day 2: The old town and the sea",
          bullets: [
            "10:00 am: The Gothic Quarter on foot: the cathedral, the bridge on Carrer del Bisbe and the Roman walls.",
            "12:00 pm: Cross to El Born for the church of Santa Maria del Mar and the Picasso Museum.",
            "2:00 pm: Lunch at the Santa Caterina market, calmer than the Boqueria.",
            "4:30 pm: Walk to the beach at Barceloneta and along the seafront. Swim from June to September.",
            "Evening: Tapas back in El Born.",
          ],
        },
        {
          heading: "Day 3: Montjuïc and a last look",
          bullets: [
            "10:00 am: Montjuïc hill by cable car or bus: the castle for the view over the port, then the gardens.",
            "12:30 pm: The Catalan art museum, or the Joan Miró Foundation, both on the hill.",
            "4:00 pm: The Gaudí house you skipped on day one, or the modernist hospital of Sant Pau.",
            "Sunset: The Bunkers del Carmel for the full panorama of the city. Check the current opening hours; access is limited in the evening.",
          ],
        },
      ],
      tip: "Barcelona's pickpockets are skilled, and they work the metro and La Rambla. Carry your phone in a front pocket and keep bags zipped and in front of you.",
      faq: [
        ["Is 3 days enough for Barcelona?", "Yes for the main sights. With four or five days you can add Montserrat, a beach day or the Costa Brava."],
        ["What should I book in advance for Barcelona?", "The Sagrada Família and Park Güell, and Casa Batlló or La Pedrera in high season."],
        ["Do you tip in Barcelona?", "It is not expected. Locals leave small change or round up; five to ten percent for good service is generous."],
      ],
    },
    nl: {
      slug: "barcelona-in-3-dagen",
      title: "Barcelona in 3 dagen: een route per dag",
      description: "Drie dagen Barcelona, opgebouwd rond twee reserveringen, met late lunches en het licht op de goede plek.",
      answer:
        "Drie dagen is genoeg voor de hoogtepunten van Barcelona als je eerst de Sagrada Família en Park Güell boekt en de rest daaromheen plant. Besteed dag één aan Gaudí, dag twee aan de oude stad en het strand, en dag drie aan de Montjuïc en één huis van Gaudí. Eet op lokale tijden: lunch om 14.00 uur en diner na 20.30 uur, als de keukens op hun best zijn.",
      facts: [
        ["Eerst boeken", "Sagrada Família, Park Güell"],
        ["Etenstijden", "Lunch vanaf 13.30 uur, diner vanaf 20.30 uur"],
        ["Vervoer", "Metro en lopen; een tienrittenkaart is genoeg voor drie dagen"],
        ["Beste uitvalsbasis", "Eixample, de Gotische wijk of Gràcia"],
        ["Budget voor tickets", "Ongeveer €70 tot €100 per volwassene"],
      ],
      sections: [
        {
          heading: "Dag 1: Gaudí",
          bullets: [
            "9.30 uur: Park Güell in het eerste tijdslot, vóór de hitte en de groepen.",
            "12.00 uur: Loop naar beneden door Gràcia, een voormalig dorp met kleine pleinen, en lunch er laat.",
            "15.00 uur: De Passeig de Gràcia voor Casa Batlló en La Pedrera, vanaf de straat of in een van de twee.",
            "17.00 uur: De Sagrada Família, gepland op het middaglicht door de ramen aan de westkant.",
          ],
        },
        {
          heading: "Dag 2: De oude stad en de zee",
          bullets: [
            "10.00 uur: De Gotische wijk te voet: de kathedraal, de brug in de Carrer del Bisbe en de Romeinse muren.",
            "12.00 uur: Steek over naar El Born voor de kerk Santa Maria del Mar en het Picassomuseum.",
            "14.00 uur: Lunch op de markt Santa Caterina, rustiger dan de Boqueria.",
            "16.30 uur: Loop naar het strand van Barceloneta en over de boulevard. Zwemmen kan van juni tot en met september.",
            "Avond: Tapas, terug in El Born.",
          ],
        },
        {
          heading: "Dag 3: Montjuïc en een laatste blik",
          bullets: [
            "10.00 uur: De heuvel Montjuïc met de kabelbaan of de bus: het kasteel voor het uitzicht over de haven, daarna de tuinen.",
            "12.30 uur: Het museum voor Catalaanse kunst of de Fundació Joan Miró, beide op de heuvel.",
            "16.00 uur: Het huis van Gaudí dat je op dag één oversloeg, of het modernistische ziekenhuis Sant Pau.",
            "Zonsondergang: De Bunkers del Carmel voor het volledige panorama over de stad. Bekijk de actuele openingstijden; 's avonds is de toegang beperkt.",
          ],
        },
      ],
      tip: "De zakkenrollers van Barcelona zijn bedreven en werken in de metro en op de Rambla. Draag je telefoon in je voorzak en houd tassen dicht en voor je.",
      faq: [
        ["Is 3 dagen genoeg voor Barcelona?", "Voor de hoogtepunten wel. Met vier of vijf dagen kun je Montserrat, een stranddag of de Costa Brava toevoegen."],
        ["Wat moet ik vooraf boeken voor Barcelona?", "De Sagrada Família en Park Güell, en in het hoogseizoen ook Casa Batlló of La Pedrera."],
        ["Geef je fooi in Barcelona?", "Het wordt niet verwacht. Mensen laten kleingeld liggen of ronden af; vijf tot tien procent voor goede service is royaal."],
      ],
    },
  },
  {
    id: "barcelona-hidden-gems",
    destinationId: "barcelona",
    type: "hiddenGems",
    image: "bcn-gothic",
    readMinutes: 6,
    updated: "2026-11",
    bookingQuery: "Barcelona Gothic Quarter walking tour",
    en: {
      slug: "hidden-gems",
      title: "Hidden gems in Barcelona: 9 places most visitors walk past",
      description: "Nine places in Barcelona beyond Gaudí: a scarred square, a modernist hospital, a market with a wave for a roof and a hilltop view.",
      answer:
        "The best hidden places in Barcelona are the modernist hospital of Sant Pau, ten minutes from the Sagrada Família; the quiet square of Sant Felip Neri in the Gothic Quarter; and the neighbourhood of Gràcia, with its village squares. All are within the city, and most are free or cheap.",
      facts: [
        ["Cost", "Mostly free; Sant Pau charges admission"],
        ["Reservation", "Not needed"],
        ["Best area", "Gràcia, El Born and the Gothic Quarter"],
        ["Time", "Half a day covers four or five"],
      ],
      sections: [
        {
          heading: "The nine places",
          bullets: [
            "Sant Pau Art Nouveau Site: A former hospital built as a garden city of tiled pavilions by Gaudí's contemporary Domènech i Montaner. Far fewer visitors than any Gaudí building.",
            "Plaça de Sant Felip Neri: A small square with a fountain and a church wall pitted by a bomb in the Civil War. Quiet, and moving once you know the story.",
            "Santa Maria del Mar: A plain, soaring Gothic church in El Born, built by the people of the port in 55 years.",
            "Santa Caterina market: A working food market under a rippling roof of coloured tiles. The calmer alternative to the Boqueria.",
            "The squares of Gràcia: Plaça del Sol and Plaça de la Virreina fill with locals in the evening. Come for a drink, not a sight.",
            "The Bunkers del Carmel: Old anti-aircraft batteries on a hilltop with a view over the whole city. Check the opening hours; evening access is restricted.",
            "The Labyrinth Park of Horta: The city's oldest garden, with a cypress maze. Small fee, almost no tourists.",
            "The Rambla del Poblenou: A tree-lined promenade in a former factory district, leading to a quieter beach than Barceloneta.",
            "The Palau de la Música Catalana: A concert hall with a stained-glass ceiling like an upturned sun. Take the tour, or better, buy a ticket for a concert.",
          ],
        },
        {
          heading: "How to combine them",
          paragraphs: [
            "Sant Pau is a ten-minute walk up a pedestrian avenue from the Sagrada Família and fits before or after it. Sant Felip Neri, Santa Maria del Mar, the Santa Caterina market and the Palau de la Música are all in the old town within fifteen minutes of each other. Keep Gràcia for an evening.",
          ],
        },
      ],
      tip: "Many shops and smaller sights close from about 2 pm to 5 pm. Plan a long lunch then, as the locals do.",
      faq: [
        ["What is there to see in Barcelona besides Gaudí?", "The Gothic Quarter, the church of Santa Maria del Mar, the Sant Pau hospital, the Picasso Museum, Montjuïc and the city's beaches."],
        ["Is the Boqueria market worth visiting?", "For a look, yes, early in the morning. To eat and shop without the crowds, go to the Santa Caterina or Sant Antoni markets."],
      ],
    },
    nl: {
      slug: "verborgen-plekken",
      title: "Verborgen plekken in Barcelona: 9 plekken waar de meeste bezoekers langslopen",
      description: "Negen plekken in Barcelona naast Gaudí: een plein met littekens, een modernistisch ziekenhuis, een markt met een golvend dak en een uitzicht vanaf een heuvel.",
      answer:
        "De mooiste verborgen plekken in Barcelona zijn het modernistische ziekenhuis Sant Pau, op tien minuten van de Sagrada Família; het stille plein Sant Felip Neri in de Gotische wijk; en de wijk Gràcia met zijn dorpspleinen. Alles ligt in de stad, en het meeste is gratis of goedkoop.",
      facts: [
        ["Kosten", "Meestal gratis; Sant Pau vraagt entree"],
        ["Reserveren", "Niet nodig"],
        ["Beste gebied", "Gràcia, El Born en de Gotische wijk"],
        ["Tijd", "In een halve dag zie je er vier of vijf"],
      ],
      sections: [
        {
          heading: "De negen plekken",
          bullets: [
            "Sant Pau: Een voormalig ziekenhuis, gebouwd als tuinstad van betegelde paviljoens door Domènech i Montaner, een tijdgenoot van Gaudí. Veel minder bezoekers dan welk gebouw van Gaudí ook.",
            "Plaça de Sant Felip Neri: Een pleintje met een fontein en een kerkmuur vol putten van een bom uit de burgeroorlog. Stil, en aangrijpend als je het verhaal kent.",
            "Santa Maria del Mar: Een sobere, hoge gotische kerk in El Born, in 55 jaar gebouwd door de mensen van de haven.",
            "De markt Santa Caterina: Een versmarkt in gebruik, onder een golvend dak van gekleurde tegels. Het rustige alternatief voor de Boqueria.",
            "De pleinen van Gràcia: De Plaça del Sol en de Plaça de la Virreina lopen 's avonds vol met buurtbewoners. Kom voor een drankje, niet voor een bezienswaardigheid.",
            "De Bunkers del Carmel: Oude luchtafweerstellingen op een heuveltop met uitzicht over de hele stad. Bekijk de openingstijden; 's avonds is de toegang beperkt.",
            "Het Labyrintpark van Horta: De oudste tuin van de stad, met een doolhof van cipressen. Kleine entree, bijna geen toeristen.",
            "De Rambla del Poblenou: Een promenade met bomen in een voormalige fabriekswijk, die uitkomt op een rustiger strand dan Barceloneta.",
            "Het Palau de la Música Catalana: Een concertzaal met een glas-in-loodplafond als een omgekeerde zon. Neem de rondleiding, of beter nog, koop een kaartje voor een concert.",
          ],
        },
        {
          heading: "Hoe je ze combineert",
          paragraphs: [
            "Sant Pau ligt op tien minuten lopen van de Sagrada Família, via een voetgangerslaan, en past ervoor of erna. Sant Felip Neri, Santa Maria del Mar, de markt Santa Caterina en het Palau de la Música liggen allemaal in de oude stad, binnen een kwartier van elkaar. Bewaar Gràcia voor een avond.",
          ],
        },
      ],
      tip: "Veel winkels en kleinere bezienswaardigheden zijn dicht van ongeveer 14.00 tot 17.00 uur. Plan dan een lange lunch, zoals de inwoners doen.",
      faq: [
        ["Wat is er in Barcelona te zien naast Gaudí?", "De Gotische wijk, de kerk Santa Maria del Mar, het ziekenhuis Sant Pau, het Picassomuseum, de Montjuïc en de stranden van de stad."],
        ["Is de Boqueria een bezoek waard?", "Om even te kijken wel, vroeg in de ochtend. Om zonder drukte te eten en te winkelen ga je naar de markten Santa Caterina of Sant Antoni."],
      ],
    },
  },
  {
    id: "barcelona-airport",
    destinationId: "barcelona",
    type: "practical",
    image: "bcn-airport",
    readMinutes: 4,
    updated: "2026-11",
    bookingQuery: "Barcelona airport transfer",
    en: {
      slug: "barcelona-airport-to-city",
      title: "Barcelona airport to the city centre: bus, train, metro or taxi, and the tourist tax",
      description: "The four ways from Barcelona El Prat into the city compared, plus the nightly tax that doubled in 2026.",
      answer:
        "The Aerobús is the easiest way from Barcelona airport to the centre: about 35 minutes to Plaça de Catalunya for €7.75, with buses every few minutes from both terminals. A taxi costs roughly €35 to €40 and is the better choice for three or more people. Your hotel will also add a tourist tax, which doubled in April 2026 and now runs up to about €12 per person per night.",
      facts: [
        ["Aerobús", "€7.75, about 35 minutes"],
        ["Train (R2 Nord)", "About €5, 20 minutes to Sants, from Terminal 2"],
        ["Metro (L9 Sud)", "€5.90, about 50 minutes with a change"],
        ["Taxi", "Roughly €35 to €40"],
        ["Tourist tax", "Up to about €12 per person per night"],
      ],
      sections: [
        {
          heading: "Which one to choose",
          bullets: [
            "Aerobús: Direct, frequent and simple, with luggage racks. It stops at Plaça d'Espanya and Plaça de Catalunya. Best for most visitors.",
            "Train: The fastest and cheapest, but it leaves only from Terminal 2. From Terminal 1, where most long-haul flights arrive, you first take the free shuttle bus.",
            "Metro: Leaves from both terminals, but needs a special airport ticket and a change of line to reach the centre. Useful for hotels along its route.",
            "Taxi: The official cabs are black and yellow and use the meter, with a minimum fare from the airport. Fair value for a group, and door to door.",
          ],
        },
        {
          heading: "The tourist tax",
          paragraphs: [
            "Catalonia and the city of Barcelona both charge a nightly tax on visitors, collected by your hotel or apartment, usually at check-out. Both raised it in April 2026. The amount depends on the type of accommodation: the top rate, for five-star hotels, is about €12 per person per night, and apartments and mid-range hotels pay less. It is rarely included in the price you see when you book.",
          ],
        },
        {
          heading: "Getting around once you arrive",
          paragraphs: [
            "The centre is compact and the metro is fast. A ten-trip card is enough for most three-day visits; each person needs their own. An ordinary ticket is not valid on the metro to the airport, so keep that journey separate.",
          ],
        },
      ],
      faq: [
        ["How much is a taxi from Barcelona airport to the city centre?", "Roughly €35 to €40 on the meter, depending on traffic, time of day and luggage."],
        ["What is the cheapest way from Barcelona airport to the city?", "The R2 Nord train from Terminal 2, at about €5, or with a ten-trip card."],
        ["How much is the tourist tax in Barcelona?", "It depends on your accommodation. Since April 2026 it runs up to about €12 per person per night at the top end, charged for the first seven nights."],
      ],
    },
    nl: {
      slug: "van-vliegveld-barcelona-naar-het-centrum",
      title: "Van vliegveld Barcelona naar het centrum: bus, trein, metro of taxi, en de toeristenbelasting",
      description: "De vier manieren van Barcelona El Prat naar de stad vergeleken, plus de belasting per nacht die in 2026 is verdubbeld.",
      answer:
        "De Aerobús is de makkelijkste manier van het vliegveld van Barcelona naar het centrum: in ongeveer 35 minuten naar de Plaça de Catalunya voor €7,75, met om de paar minuten een bus vanaf beide terminals. Een taxi kost ruwweg €35 tot €40 en is de betere keus met drie of meer personen. Je hotel rekent daarnaast toeristenbelasting, die in april 2026 is verdubbeld en nu oploopt tot ongeveer €12 per persoon per nacht.",
      facts: [
        ["Aerobús", "€7,75, ongeveer 35 minuten"],
        ["Trein (R2 Nord)", "Ongeveer €5, 20 minuten naar Sants, vanaf Terminal 2"],
        ["Metro (L9 Sud)", "€5,90, ongeveer 50 minuten met overstap"],
        ["Taxi", "Ruwweg €35 tot €40"],
        ["Toeristenbelasting", "Tot ongeveer €12 per persoon per nacht"],
      ],
      sections: [
        {
          heading: "Welke kies je",
          bullets: [
            "Aerobús: Rechtstreeks, vaak en eenvoudig, met bagagerekken. Hij stopt bij de Plaça d'Espanya en de Plaça de Catalunya. Voor de meeste bezoekers het best.",
            "Trein: Het snelst en het goedkoopst, maar hij vertrekt alleen vanaf Terminal 2, waar veel prijsvechters aankomen. Vanaf Terminal 1 neem je eerst de gratis pendelbus.",
            "Metro: Vertrekt vanaf beide terminals, maar vraagt een speciaal vliegveldticket en een overstap om in het centrum te komen. Handig voor hotels langs de lijn.",
            "Taxi: De officiële taxi's zijn zwart met geel en rijden op de meter, met een minimumtarief vanaf het vliegveld. Voor een groep een eerlijke prijs, en van deur tot deur.",
          ],
        },
        {
          heading: "De toeristenbelasting",
          paragraphs: [
            "Catalonië en de stad Barcelona heffen allebei een belasting per nacht, die je hotel of appartement int, meestal bij het uitchecken. Beide hebben die in april 2026 verhoogd. Het bedrag hangt af van het soort accommodatie: het hoogste tarief, voor vijfsterrenhotels, is ongeveer €12 per persoon per nacht, en appartementen en middenklassehotels betalen minder. Het zit zelden in de prijs die je bij het boeken ziet.",
          ],
        },
        {
          heading: "Vervoer in de stad",
          paragraphs: [
            "Het centrum is compact en de metro is snel. Een tienrittenkaart is genoeg voor de meeste bezoeken van drie dagen; elke reiziger heeft een eigen kaart nodig. Een gewoon kaartje is niet geldig in de metro naar het vliegveld, dus reken die rit apart.",
          ],
        },
      ],
      faq: [
        ["Wat kost een taxi van het vliegveld van Barcelona naar het centrum?", "Ruwweg €35 tot €40 op de meter, afhankelijk van het verkeer, het tijdstip en de bagage."],
        ["Wat is de goedkoopste manier van het vliegveld naar de stad?", "De trein R2 Nord vanaf Terminal 2, voor ongeveer €5, of met een tienrittenkaart."],
        ["Hoe hoog is de toeristenbelasting in Barcelona?", "Dat hangt af van je accommodatie. Sinds april 2026 loopt die op tot ongeveer €12 per persoon per nacht in de duurste categorie, voor de eerste zeven nachten."],
      ],
    },
  },
  {
    id: "barcelona-best-time",
    destinationId: "barcelona",
    type: "practical",
    image: "bcn-beach",
    readMinutes: 4,
    updated: "2026-11",
    en: {
      slug: "best-time-to-visit-barcelona",
      title: "Best time to visit Barcelona: season by season",
      description: "When Barcelona is at its best, when it is too hot or too crowded, and when you can swim.",
      answer:
        "The best time to visit Barcelona is May, June and September: warm enough for the beach, with long evenings and without the heat and crowds of high summer. July and August are hot and humid, around 86°F (30°C), and the busiest months. Winter is mild, sunny and quiet, good for sightseeing but not for swimming.",
      facts: [
        ["Best months", "May, June, September"],
        ["Hottest", "July and August, around 86°F (30°C)"],
        ["Swimming", "June to early October"],
        ["Cheapest", "November to February"],
        ["Busiest", "July, August and Easter week"],
      ],
      sections: [
        {
          heading: "Season by season",
          bullets: [
            "Spring (March to May): Mild and bright. April can bring showers; by May the terraces are full and the sea is warming.",
            "Summer (June to August): Beach weather. Book the Sagrada Família weeks ahead, sightsee early and late, and do as the locals do in the afternoon heat: lunch slowly indoors.",
            "Autumn (September and October): September is the best month of all, with warm sea and thinner crowds. The city's main festival, La Mercè, fills the streets around 24 September.",
            "Winter (November to February): Daytime temperatures around 57°F (14°C), clear skies and the lowest prices. Christmas markets in December.",
          ],
        },
        {
          heading: "Dates to plan around",
          paragraphs: [
            "Large trade fairs, especially the mobile technology congress at the end of February or early March, fill the hotels and multiply their prices for a few days. On Sant Jordi's day, 23 April, the streets fill with book and rose stalls. Many restaurants and small shops close for part of August.",
          ],
        },
      ],
      faq: [
        ["Is Barcelona too hot in August?", "It is hot and humid, and the sights are crowded. It works if you plan beach time and sightsee in the morning and evening."],
        ["Can you swim in Barcelona in May?", "The air is warm but the sea is still cool, around 63°F (17°C). Most people find it comfortable from mid-June."],
      ],
    },
    nl: {
      slug: "beste-reistijd-barcelona",
      title: "Beste reistijd voor Barcelona: per seizoen",
      description: "Wanneer Barcelona op zijn best is, wanneer het te heet of te druk is, en wanneer je kunt zwemmen.",
      answer:
        "De beste reistijd voor Barcelona is mei, juni en september: warm genoeg voor het strand, met lange avonden en zonder de hitte en drukte van de hoogzomer. Juli en augustus zijn heet en vochtig, rond de 30 °C, en de drukste maanden. De winter is zacht, zonnig en rustig, goed om de stad te bekijken maar niet om te zwemmen.",
      facts: [
        ["Beste maanden", "Mei, juni, september"],
        ["Heetst", "Juli en augustus, rond de 30 °C"],
        ["Zwemmen", "Juni tot begin oktober"],
        ["Goedkoopst", "November tot en met februari"],
        ["Drukst", "Juli, augustus en de week van Pasen"],
      ],
      sections: [
        {
          heading: "Per seizoen",
          bullets: [
            "Lente (maart tot en met mei): Zacht en licht. In april kunnen er buien vallen; in mei zitten de terrassen vol en warmt de zee op. De meivakantie is een goed moment.",
            "Zomer (juni tot en met augustus): Strandweer. Boek de Sagrada Família weken vooruit, bekijk de stad vroeg en laat, en doe in de middaghitte wat de inwoners doen: lang en binnen lunchen.",
            "Herfst (september en oktober): September is de mooiste maand, met warm zeewater en minder drukte. Het grote stadsfeest La Mercè vult de straten rond 24 september. Ook de herfstvakantie valt goed.",
            "Winter (november tot en met februari): Overdag rond de 14 °C, heldere luchten en de laagste prijzen. In december zijn er kerstmarkten.",
          ],
        },
        {
          heading: "Data om rekening mee te houden",
          paragraphs: [
            "Grote beurzen, vooral het congres voor mobiele technologie eind februari of begin maart, vullen de hotels en vermenigvuldigen de prijzen voor een paar dagen. Op Sant Jordi, 23 april, staan de straten vol kramen met boeken en rozen. Veel restaurants en kleine winkels zijn een deel van augustus dicht.",
          ],
        },
      ],
      faq: [
        ["Is Barcelona te heet in augustus?", "Het is heet en vochtig, en bij de bezienswaardigheden is het druk. Het werkt als je strandtijd inplant en de stad 's ochtends en 's avonds bekijkt."],
        ["Kun je in mei zwemmen in Barcelona?", "De lucht is warm, maar de zee is nog fris, rond de 17 °C. De meeste mensen vinden het vanaf half juni aangenaam."],
      ],
    },
  },
];
