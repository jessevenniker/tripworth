import type { Article } from "../articles";

// Fact check, 11 November 2026.
//
// Confirmed on official pages (read through search results, not fetched directly):
// - Statue of Liberty (nps.gov): Statue City Cruises is the only authorised ticket seller;
//   general admission does not include the pedestal or crown; the crown is a climb of
//   162 steps and must be booked in advance.
// - CityPASS (citypass.com): adult price shown as $154 and $164 on different pages; covers
//   the Empire State Building, the American Museum of Natural History and three more.
//
// Only found on third-party sites or written from general knowledge. Re-check before launch:
// - Statue ferry price (sources give $25.50 to $32.50).
// - Observation deck prices: Empire State from $44, Top of the Rock from $45, One World
//   from about $31 to $44, Edge about $36 to $45; SUMMIT price not found.
// - JFK: taxi flat fare $70 plus extras, AirTrain $8.75, subway $3; LaGuardia and Newark figures.
// - 9/11 Museum price (about $33 to $36) and free Monday evening window.
// - ESTA about $40, valid two years; Broadway discounts (TKTS up to 50 percent, rush $35 to $50).
// - Tipping and sales-tax rates, flight time from Amsterdam, climate figures and the
//   hidden-gems list.

export const newYorkArticles: Article[] = [
  {
    id: "nyc-statue-of-liberty",
    destinationId: "new-york",
    type: "tickets",
    image: "nyc-liberty",
    readMinutes: 5,
    updated: "2026-11",
    bookingQuery: "Statue of Liberty Ellis Island tickets",
    en: {
      slug: "statue-of-liberty-tickets",
      title: "Statue of Liberty tickets: ferry, pedestal or crown, and the one official seller",
      description: "The three Statue of Liberty tickets, what each includes, and how to avoid the ticket sellers at the Battery.",
      answer:
        "Statue City Cruises is the only authorised seller of Statue of Liberty tickets, and its ferry is the only one that lands on the island. The basic ticket costs roughly $26 to $33 and covers the ferry, Liberty Island and Ellis Island. Pedestal and crown access cost about the same but are limited: book the crown three to four months ahead for spring and summer.",
      facts: [
        ["Official seller", "Statue City Cruises only"],
        ["General ticket", "Roughly $26 to $33, both islands"],
        ["Pedestal", "Limited; book weeks ahead"],
        ["Crown", "162 steps; book 3 to 4 months ahead"],
        ["Departs from", "The Battery in Manhattan, or New Jersey"],
        ["Time needed", "4 to 5 hours for both islands"],
      ],
      sections: [
        {
          heading: "The three tickets",
          bullets: [
            "General admission: The ferry, the grounds of Liberty Island, the Statue of Liberty Museum and Ellis Island. You see the statue from below and from the water.",
            "Pedestal: Adds the stone base, with a balcony view and a look up inside the statue. A good middle option.",
            "Crown: Adds the climb of 162 narrow steps from the top of the pedestal to the windows in the crown. Small, hot and unforgettable; not for anyone uneasy in tight spaces.",
          ],
        },
        {
          heading: "How to do it",
          paragraphs: [
            "Take the first ferry of the day: there is airport-style security before boarding, and the line grows through the morning. Sit on the right side of the boat leaving Manhattan for the best view of the statue. Do Liberty Island first, then Ellis Island, where 12 million immigrants were processed; its museum deserves at least an hour.",
          ],
        },
        {
          heading: "Avoid the street sellers",
          paragraphs: [
            "People in vests around Battery Park sell boat tickets that look official. Their boats circle the harbour but do not land on the island. Buy online from Statue City Cruises or at its ticket office in Castle Clinton, the round fort in the park.",
          ],
        },
      ],
      tip: "The Staten Island Ferry is free, runs all day and passes the statue. If you only want the photo, that is the way to get it.",
      faq: [
        ["Can you go inside the Statue of Liberty?", "Yes, with a pedestal or crown ticket booked in advance. General admission covers the island but not the inside of the statue."],
        ["How far in advance should you book the crown?", "Three to four months for April to September. In winter a few weeks is often enough."],
        ["Is Ellis Island included?", "Yes. Every ticket includes the ferry stop at Ellis Island and its immigration museum."],
      ],
    },
    nl: {
      slug: "vrijheidsbeeld-tickets",
      title: "Vrijheidsbeeld-tickets: veerboot, voetstuk of kroon, en de enige officiële verkoper",
      description: "De drie tickets voor het Vrijheidsbeeld, wat erbij zit en hoe je de kaartverkopers bij de Battery ontloopt.",
      answer:
        "Statue City Cruises is de enige erkende verkoper van tickets voor het Vrijheidsbeeld, en alleen die veerboot legt aan op het eiland. Het basisticket kost ruwweg $26 tot $33 en geldt voor de veerboot, Liberty Island en Ellis Island. Toegang tot het voetstuk en de kroon kost ongeveer hetzelfde, maar is beperkt: boek de kroon voor het voorjaar en de zomer drie tot vier maanden vooruit.",
      facts: [
        ["Officiële verkoper", "Alleen Statue City Cruises"],
        ["Basisticket", "Ruwweg $26 tot $33, beide eilanden"],
        ["Voetstuk", "Beperkt; boek weken vooruit"],
        ["Kroon", "162 treden; boek 3 tot 4 maanden vooruit"],
        ["Vertrek", "The Battery in Manhattan, of New Jersey"],
        ["Benodigde tijd", "4 tot 5 uur voor beide eilanden"],
      ],
      sections: [
        {
          heading: "De drie tickets",
          bullets: [
            "Basisticket: De veerboot, het terrein van Liberty Island, het museum van het Vrijheidsbeeld en Ellis Island. Je ziet het beeld van onderaf en vanaf het water.",
            "Voetstuk: Met de stenen sokkel, een uitzicht vanaf het balkon en een blik omhoog in het beeld. Een goede tussenvorm.",
            "Kroon: Met de klim over 162 smalle treden van de bovenkant van het voetstuk naar de ramen in de kroon. Klein, warm en onvergetelijk; niets voor wie moeite heeft met krappe ruimtes.",
          ],
        },
        {
          heading: "Hoe je het aanpakt",
          paragraphs: [
            "Neem de eerste veerboot van de dag: voor het instappen is er een controle zoals op een vliegveld, en de rij groeit in de loop van de ochtend. Ga bij vertrek uit Manhattan aan de rechterkant van de boot zitten voor het mooiste zicht op het beeld. Doe eerst Liberty Island en daarna Ellis Island, waar 12 miljoen immigranten zijn geregistreerd; het museum verdient minstens een uur.",
          ],
        },
        {
          heading: "Ontloop de straatverkopers",
          paragraphs: [
            "Rond Battery Park verkopen mensen in hesjes boottickets die er officieel uitzien. Hun boten varen een rondje door de haven, maar leggen niet aan op het eiland. Koop online bij Statue City Cruises of bij het loket in Castle Clinton, het ronde fort in het park.",
          ],
        },
      ],
      tip: "De Staten Island Ferry is gratis, vaart de hele dag en komt langs het beeld. Wil je alleen de foto, dan is dat de manier.",
      faq: [
        ["Kun je in het Vrijheidsbeeld?", "Ja, met een vooraf geboekt ticket voor het voetstuk of de kroon. Met het basisticket kom je op het eiland, maar niet in het beeld."],
        ["Hoe ver vooruit boek je de kroon?", "Drie tot vier maanden voor april tot en met september. In de winter is een paar weken vaak genoeg."],
        ["Zit Ellis Island erbij?", "Ja. Bij elk ticket hoort de stop van de veerboot op Ellis Island, met het immigratiemuseum."],
      ],
    },
  },
  {
    id: "nyc-911-museum",
    destinationId: "new-york",
    type: "tickets",
    image: "nyc-911",
    readMinutes: 4,
    updated: "2026-11",
    bookingQuery: "9/11 Memorial Museum tickets",
    en: {
      slug: "911-memorial-museum-tickets",
      title: "9/11 Memorial and Museum: what is free, what the ticket costs and how to visit",
      description: "The memorial pools are free and open to everyone. What the museum adds, what it costs and when it is free.",
      answer:
        "The 9/11 Memorial, the two pools where the towers stood, is free and needs no ticket. The museum beneath it costs roughly $33 to $36 for adults and takes about two hours; book a timed ticket online. On Monday evenings the museum is free, with a limited number of tickets released online that morning.",
      facts: [
        ["Memorial pools", "Free, open daily"],
        ["Museum, adult", "Roughly $33 to $36"],
        ["Free museum entry", "Monday evenings, limited tickets"],
        ["Time needed", "30 minutes for the memorial, 2 hours for the museum"],
        ["Nearest subway", "World Trade Center, Cortlandt Street"],
      ],
      sections: [
        {
          heading: "The memorial",
          paragraphs: [
            "Two square pools fill the footprints of the Twin Towers, with water falling into a void at the centre. The names of the nearly 3,000 people killed are cut into the bronze edges. A white rose is placed on a name on that person's birthday. Come early in the morning or after dark, when it is quietest.",
          ],
        },
        {
          heading: "The museum",
          paragraphs: [
            "The museum lies seven storeys underground, at the foundations of the towers. It holds a fire engine, steel bent by the impact, the last column removed from the site and recordings from the day. The historical exhibition is thorough and hard to walk through; it is not suitable for young children, and the museum itself advises care for those under ten.",
          ],
        },
        {
          heading: "Combining it",
          bullets: [
            "One World Observatory: The view from the top of the new tower, next door. Book separately.",
            "The Oculus: The white, winged transit hall beside the memorial. Free to walk through.",
            "Wall Street and the Battery: A fifteen-minute walk south, ending at the ferries to the Statue of Liberty.",
          ],
        },
      ],
      tip: "This is a grave site for many families. Keep voices low at the pools, and do not sit on or lean over the names.",
      faq: [
        ["Is the 9/11 Memorial free?", "Yes. The outdoor memorial is free and open daily. Only the museum charges admission."],
        ["How long does the 9/11 Museum take?", "About two hours. Many visitors stay longer in the historical exhibition."],
        ["Is the 9/11 Museum worth it?", "Yes. It is the most affecting museum in the city, and the artifacts carry the story better than any film."],
      ],
    },
    nl: {
      slug: "911-memorial-museum-tickets",
      title: "9/11 Memorial en Museum: wat gratis is, wat het ticket kost en hoe je het bezoekt",
      description: "De herdenkingsbassins zijn gratis en voor iedereen open. Wat het museum toevoegt, wat het kost en wanneer het gratis is.",
      answer:
        "Het 9/11 Memorial, de twee bassins op de plek van de torens, is gratis en vraagt geen ticket. Het museum eronder kost ruwweg $33 tot $36 voor volwassenen en neemt ongeveer twee uur; boek online een ticket met tijdslot. Op maandagavond is het museum gratis, met een beperkt aantal tickets dat die ochtend online vrijkomt.",
      facts: [
        ["Herdenkingsbassins", "Gratis, dagelijks open"],
        ["Museum, volwassene", "Ruwweg $33 tot $36"],
        ["Gratis naar het museum", "Maandagavond, beperkt aantal tickets"],
        ["Benodigde tijd", "30 minuten voor het memorial, 2 uur voor het museum"],
        ["Metrostation", "World Trade Center, Cortlandt Street"],
      ],
      sections: [
        {
          heading: "Het memorial",
          paragraphs: [
            "Twee vierkante bassins vullen de plattegrond van de Twin Towers, met water dat in het midden in een leegte valt. De namen van de bijna 3.000 doden staan in de bronzen randen gegraveerd. Op de verjaardag van een slachtoffer wordt een witte roos bij die naam gelegd. Kom vroeg in de ochtend of in het donker, dan is het er het stilst.",
          ],
        },
        {
          heading: "Het museum",
          paragraphs: [
            "Het museum ligt zeven verdiepingen onder de grond, bij de funderingen van de torens. Er staan een brandweerwagen, staal dat door de inslag is verbogen, de laatste kolom die van het terrein is gehaald en geluidsopnamen van die dag. De historische tentoonstelling is grondig en zwaar om doorheen te lopen; ze is niet geschikt voor jonge kinderen, en het museum raadt zelf voorzichtigheid aan onder de tien jaar.",
          ],
        },
        {
          heading: "Combineren",
          bullets: [
            "One World Observatory: Het uitzicht vanaf de top van de nieuwe toren, ernaast. Apart boeken.",
            "De Oculus: De witte stationshal met vleugels naast het memorial. Je loopt er gratis doorheen.",
            "Wall Street en de Battery: Een kwartier lopen naar het zuiden, tot aan de veerboten naar het Vrijheidsbeeld.",
          ],
        },
      ],
      tip: "Voor veel families is dit een graf. Praat zacht bij de bassins, en ga niet op de namen zitten of leunen.",
      faq: [
        ["Is het 9/11 Memorial gratis?", "Ja. Het memorial in de buitenlucht is gratis en dagelijks open. Alleen het museum vraagt entree."],
        ["Hoe lang duurt het 9/11 Museum?", "Ongeveer twee uur. Veel bezoekers blijven langer in de historische tentoonstelling."],
        ["Is het 9/11 Museum de moeite waard?", "Ja. Het is het meest aangrijpende museum van de stad, en de voorwerpen vertellen het verhaal beter dan welke film ook."],
      ],
    },
  },
  {
    id: "nyc-broadway",
    destinationId: "new-york",
    type: "tickets",
    image: "nyc-times",
    readMinutes: 5,
    updated: "2026-11",
    bookingQuery: "Broadway show tickets New York",
    en: {
      slug: "broadway-tickets-guide",
      title: "Broadway tickets: how to pay less without getting scammed",
      description: "Four ways to buy Broadway tickets, from full price to same-day discounts, and which one fits your trip.",
      answer:
        "Buy in advance from the show's official seller if there is one show you must see: the biggest hits rarely discount. For everything else, the TKTS booth in Times Square sells same-day tickets at up to 50 percent off, and most shows offer rush tickets or a digital lottery for about $35 to $50. Never buy from someone on the street.",
      facts: [
        ["Full price", "About $90 to $250, more for hit shows"],
        ["TKTS booth", "Same-day tickets, up to 50% off"],
        ["Rush and lottery", "About $35 to $50"],
        ["Dark day", "Most theatres are closed on Monday"],
        ["Show length", "2 to 3 hours with an intermission"],
      ],
      sections: [
        {
          heading: "The four ways to buy",
          bullets: [
            "In advance, official seller: The theatre's own box office or its official ticketing partner. The only reliable route for the most popular shows and for good seats on a fixed date.",
            "TKTS booth: Under the red steps in Times Square, selling that day's leftover seats. The line moves fast, the list of shows changes daily and you choose from what is on the board.",
            "Rush tickets: A small batch of cheap seats sold when the box office opens on the day. First come, first served, usually two per person.",
            "Digital lottery: Enter online the day before or the morning of the show. Cheap if you win, so have a second plan.",
          ],
        },
        {
          heading: "How to choose a show",
          paragraphs: [
            "Long-running musicals are the safe choice for a first visit and are the ones most likely to appear at TKTS. Plays and new musicals are where the season's best work often is; check recent reviews. Wednesday and Saturday have matinees, which are easier to get into and leave your evening free.",
          ],
        },
        {
          heading: "Where to sit",
          paragraphs: [
            "Broadway theatres are small, and the front of the mezzanine often has a better view than the back of the orchestra for less money. Seats marked partial view are sold cheaply for a reason; read what is blocked before you buy.",
          ],
        },
      ],
      tip: "Buying at the theatre's box office in person avoids the online service fees, which can add $15 or more to each ticket.",
      faq: [
        ["What is the cheapest way to see a Broadway show?", "Rush tickets and digital lotteries, at about $35 to $50, followed by the TKTS booth at up to half price."],
        ["Is there a dress code on Broadway?", "No. Most people wear what they wore to dinner. Jeans are fine."],
        ["Can you buy Broadway tickets on the day?", "Yes, for most shows: at TKTS, by rush, or at full price at the box office. The biggest hits sell out weeks ahead."],
      ],
    },
    nl: {
      slug: "broadway-tickets",
      title: "Broadway-tickets: hoe je minder betaalt zonder opgelicht te worden",
      description: "Vier manieren om Broadway-tickets te kopen, van de volle prijs tot korting op de dag zelf, en welke bij je reis past.",
      answer:
        "Koop vooraf bij de officiële verkoper van de voorstelling als er één show is die je per se wilt zien: de grootste hits geven zelden korting. Voor al het andere verkoopt het TKTS-loket op Times Square kaartjes voor dezelfde dag met tot 50 procent korting, en de meeste shows hebben rush-tickets of een digitale loterij voor ongeveer $35 tot $50. Koop nooit van iemand op straat.",
      facts: [
        ["Volle prijs", "Ongeveer $90 tot $250, meer voor grote hits"],
        ["TKTS-loket", "Kaartjes voor dezelfde dag, tot 50% korting"],
        ["Rush en loterij", "Ongeveer $35 tot $50"],
        ["Vrije dag", "De meeste theaters zijn op maandag dicht"],
        ["Duur", "2 tot 3 uur, met pauze"],
      ],
      sections: [
        {
          heading: "De vier manieren om te kopen",
          bullets: [
            "Vooraf, bij de officiële verkoper: De kassa van het theater of de officiële ticketpartner. De enige betrouwbare route voor de populairste shows en voor goede plaatsen op een vaste datum.",
            "TKTS-loket: Onder de rode trappen op Times Square, met de overgebleven plaatsen van die dag. De rij gaat snel, het aanbod wisselt dagelijks en je kiest uit wat er op het bord staat.",
            "Rush-tickets: Een klein aantal goedkope plaatsen dat wordt verkocht zodra de kassa die dag opengaat. Wie het eerst komt, meestal twee per persoon.",
            "Digitale loterij: Meld je online aan op de dag ervoor of de ochtend van de voorstelling. Goedkoop als je wint, dus zorg voor een tweede plan.",
          ],
        },
        {
          heading: "Hoe je een show kiest",
          paragraphs: [
            "Langlopende musicals zijn de veilige keus voor een eerste bezoek en duiken het vaakst op bij TKTS. Toneelstukken en nieuwe musicals zijn vaak het beste van het seizoen; lees recente recensies. Op woensdag en zaterdag zijn er matinees, waar je makkelijker binnenkomt en waarna je avond vrij is. Alles is in het Engels, zonder boventiteling.",
          ],
        },
        {
          heading: "Waar je gaat zitten",
          paragraphs: [
            "De theaters op Broadway zijn klein, en vooraan op het balkon zie je vaak beter dan achter in de zaal, voor minder geld. Plaatsen met beperkt zicht zijn niet voor niets goedkoop; lees wat er aan het zicht ontbreekt voordat je koopt.",
          ],
        },
      ],
      tip: "Als je aan de kassa van het theater koopt, betaal je geen online servicekosten, die al snel $15 of meer per kaartje zijn.",
      faq: [
        ["Wat is de goedkoopste manier om een Broadway-show te zien?", "Rush-tickets en digitale loterijen, voor ongeveer $35 tot $50, gevolgd door het TKTS-loket met tot de helft korting."],
        ["Is er een kledingvoorschrift op Broadway?", "Nee. De meeste mensen dragen wat ze bij het eten aanhadden. Een spijkerbroek is prima."],
        ["Kun je op de dag zelf kaartjes kopen?", "Voor de meeste shows wel: bij TKTS, via rush, of voor de volle prijs aan de kassa. De grootste hits zijn weken vooruit uitverkocht."],
      ],
    },
  },
  {
    id: "nyc-observation-decks",
    destinationId: "new-york",
    type: "comparisons",
    image: "nyc-decks",
    readMinutes: 5,
    updated: "2026-11",
    bookingQuery: "New York observation deck tickets",
    en: {
      slug: "best-observation-decks",
      title: "New York observation decks compared: which of the five is worth it",
      description: "Empire State, Top of the Rock, Edge, SUMMIT and One World side by side: the view, the price and the one to pick.",
      answer:
        "Top of the Rock is the best observation deck for most visitors: it has open-air terraces, a full view of Central Park and the Empire State Building in the picture, from about $45. Choose the Empire State Building, from $44, for the building itself and its history. One deck is enough; go an hour before sunset and stay until the lights come on.",
      facts: [
        ["Top of the Rock", "From about $45; best overall view"],
        ["Empire State Building", "From $44; the classic, open-air 86th floor"],
        ["SUMMIT One Vanderbilt", "Mirrored rooms; the most theatrical"],
        ["Edge", "From about $36 to $45; glass floor over the street"],
        ["One World Observatory", "From about $31 to $44; highest, indoors"],
        ["Best time", "One hour before sunset"],
      ],
      sections: [
        {
          heading: "The five decks",
          bullets: [
            "Top of the Rock: Three levels at Rockefeller Center, the top one fully open. Central Park to the north, the Empire State Building to the south. The photographer's choice.",
            "Empire State Building: The famous one, with an open-air deck on the 86th floor and a good museum on the way up. You cannot see the Empire State Building from it, which is the drawback.",
            "SUMMIT One Vanderbilt: Rooms of mirrors and glass next to Grand Central. Spectacular and crowded, and more of an experience than a viewpoint. Wear trousers: the floors reflect.",
            "Edge: A triangular platform jutting out from Hudson Yards, with a glass panel in the floor. The best sunset view over the river, further from the classic skyline.",
            "One World Observatory: The highest, at the tip of Manhattan, entirely behind glass. Best for the harbour and the bridges, and easy to combine with the 9/11 Memorial.",
          ],
        },
        {
          heading: "How to choose",
          bullets: [
            "First time in New York: Top of the Rock.",
            "You want the icon: The Empire State Building, at night, when it is quieter.",
            "You are travelling with teenagers: SUMMIT or Edge.",
            "You are already downtown: One World Observatory.",
            "You have a pass: Use the deck it includes, and do not pay for a second one.",
          ],
        },
        {
          heading: "Tickets and timing",
          paragraphs: [
            "All five sell timed tickets, and all charge more for the sunset slots. Buying online in advance is cheaper than at the door. Check the forecast the day before: on a hazy or low-cloud day the view is poor at any height, and most tickets can be moved for a fee.",
          ],
        },
      ],
      tip: "For a free view, ride the Roosevelt Island Tramway at dusk or walk the Brooklyn Bridge towards Manhattan.",
      faq: [
        ["Which is better, the Empire State Building or Top of the Rock?", "Top of the Rock for the view, because it includes Central Park and the Empire State Building itself. The Empire State Building for the experience of the building."],
        ["Is it better to visit an observation deck by day or at night?", "Arrive an hour before sunset. You see the city in daylight, at dusk and lit up, on one ticket."],
      ],
    },
    nl: {
      slug: "beste-uitkijkplatforms",
      title: "Uitkijkplatforms in New York vergeleken: welke van de vijf is het waard",
      description: "Empire State, Top of the Rock, Edge, SUMMIT en One World naast elkaar: het uitzicht, de prijs en welke je kiest.",
      answer:
        "Top of the Rock is voor de meeste bezoekers het beste uitkijkplatform: het heeft terrassen in de buitenlucht, vol zicht op Central Park en het Empire State Building in beeld, vanaf ongeveer $45. Kies het Empire State Building, vanaf $44, voor het gebouw zelf en zijn geschiedenis. Eén platform is genoeg; ga een uur voor zonsondergang en blijf tot de lichten aangaan.",
      facts: [
        ["Top of the Rock", "Vanaf ongeveer $45; het mooiste uitzicht"],
        ["Empire State Building", "Vanaf $44; de klassieker, 86e verdieping in de buitenlucht"],
        ["SUMMIT One Vanderbilt", "Spiegelzalen; het meest theatraal"],
        ["Edge", "Vanaf ongeveer $36 tot $45; glazen vloer boven de straat"],
        ["One World Observatory", "Vanaf ongeveer $31 tot $44; het hoogst, binnen"],
        ["Beste moment", "Een uur voor zonsondergang"],
      ],
      sections: [
        {
          heading: "De vijf platforms",
          bullets: [
            "Top of the Rock: Drie niveaus in het Rockefeller Center, het bovenste helemaal open. Central Park in het noorden, het Empire State Building in het zuiden. De keus van fotografen.",
            "Empire State Building: De beroemdste, met een open platform op de 86e verdieping en onderweg een goed museum. Je ziet het Empire State Building zelf niet, en dat is het nadeel.",
            "SUMMIT One Vanderbilt: Zalen van spiegels en glas naast Grand Central. Spectaculair en druk, en meer een belevenis dan een uitkijkpunt. Draag een broek: de vloeren spiegelen.",
            "Edge: Een driehoekig platform dat uit Hudson Yards steekt, met een glazen paneel in de vloer. Het mooiste zicht op de zonsondergang boven de rivier, verder van de klassieke skyline.",
            "One World Observatory: Het hoogst, op de punt van Manhattan, helemaal achter glas. Het best voor de haven en de bruggen, en makkelijk te combineren met het 9/11 Memorial.",
          ],
        },
        {
          heading: "Hoe je kiest",
          bullets: [
            "Voor het eerst in New York: Top of the Rock.",
            "Je wilt het icoon: Het Empire State Building, 's avonds, als het rustiger is.",
            "Je reist met tieners: SUMMIT of Edge.",
            "Je bent al in het zuiden van Manhattan: One World Observatory.",
            "Je hebt een pas: Gebruik het platform dat erbij zit en betaal niet voor een tweede.",
          ],
        },
        {
          heading: "Tickets en timing",
          paragraphs: [
            "Alle vijf verkopen tickets met een tijdslot, en alle vijf rekenen meer voor de tijdsloten rond zonsondergang. Vooraf online kopen is goedkoper dan aan de deur. Bekijk de dag ervoor de weersverwachting: bij nevel of laaghangende bewolking is het uitzicht op elke hoogte slecht, en de meeste tickets kun je tegen betaling verzetten.",
          ],
        },
      ],
      tip: "Voor een gratis uitzicht neem je in de schemering de kabelbaan naar Roosevelt Island, of loop je over de Brooklyn Bridge richting Manhattan.",
      faq: [
        ["Wat is beter, het Empire State Building of Top of the Rock?", "Top of the Rock voor het uitzicht, omdat je Central Park en het Empire State Building zelf ziet. Het Empire State Building voor de belevenis van het gebouw."],
        ["Kun je een uitkijkplatform beter overdag of 's avonds bezoeken?", "Kom een uur voor zonsondergang. Dan zie je de stad bij daglicht, in de schemering en verlicht, op één ticket."],
      ],
    },
  },
  {
    id: "nyc-citypass",
    destinationId: "new-york",
    type: "worthIt",
    image: "nyc-night",
    readMinutes: 4,
    updated: "2026-11",
    en: {
      slug: "is-the-new-york-citypass-worth-it",
      title: "Is the New York CityPASS worth it?",
      description: "Five attractions for one price. When the New York CityPASS saves money and when single tickets are cheaper.",
      answer:
        "The New York CityPASS is worth it if you were going to visit at least four of its five attractions anyway. It costs about $154 to $164 for adults and covers the Empire State Building, the American Museum of Natural History and three more of your choice, such as the Statue of Liberty ferry, the 9/11 Museum and Top of the Rock. For three attractions or fewer, buy single tickets.",
      facts: [
        ["Adult price", "About $154 to $164"],
        ["Covers", "5 attractions over 9 days"],
        ["Always included", "Empire State Building, Natural History Museum"],
        ["Choose 3 more", "Statue ferry, 9/11 Museum, Top of the Rock and others"],
        ["Verdict", "Worth it from four attractions"],
      ],
      sections: [
        {
          heading: "The maths",
          paragraphs: [
            "Bought separately, the Empire State Building, the Natural History Museum, the Statue of Liberty ferry, the 9/11 Museum and Top of the Rock come to roughly $180 to $200. The pass saves $20 to $40 if you use all five and breaks even at about four. It does not make an expensive city cheap: it trims the cost of a classic first visit.",
          ],
        },
        {
          heading: "What to know before you buy",
          bullets: [
            "Two observation decks: The pass includes the Empire State Building, and Top of the Rock is one of the options. Most people do not need both; choose a museum or the ferry instead.",
            "Reservations: Most attractions still need a timed booking, made through the pass after you buy it. Do that straight away.",
            "Nine days: The pass runs for nine days from first use, so there is no need to rush.",
            "Not included: Broadway, SUMMIT One Vanderbilt, Edge, and the crown and pedestal of the Statue of Liberty.",
          ],
        },
        {
          heading: "Who should skip it",
          paragraphs: [
            "Skip it if your trip is mostly neighbourhoods, food, parks and one or two big sights. Much of what is best in New York is free: Central Park, the High Line, the Brooklyn Bridge, the Staten Island Ferry and the 9/11 Memorial.",
          ],
        },
      ],
      tip: "Other passes sell by the day and by the number of attractions. They only pay off at a pace of three or more paid sights a day, which leaves no time for the city itself.",
      faq: [
        ["How long is the New York CityPASS valid?", "Nine consecutive days from the first attraction you visit."],
        ["Does CityPASS include the Statue of Liberty?", "It includes the ferry to Liberty Island and Ellis Island as one of the options, not access to the pedestal or crown."],
      ],
    },
    nl: {
      slug: "is-de-new-york-citypass-de-moeite-waard",
      title: "Is de New York CityPASS de moeite waard?",
      description: "Vijf attracties voor één prijs. Wanneer de New York CityPASS geld bespaart en wanneer losse tickets goedkoper zijn.",
      answer:
        "De New York CityPASS is de moeite waard als je minstens vier van de vijf attracties toch al wilde bezoeken. Hij kost ongeveer $154 tot $164 voor volwassenen en geldt voor het Empire State Building, het American Museum of Natural History en nog drie naar keuze, zoals de veerboot naar het Vrijheidsbeeld, het 9/11 Museum en Top of the Rock. Voor drie attracties of minder koop je losse tickets.",
      facts: [
        ["Prijs volwassene", "Ongeveer $154 tot $164"],
        ["Geldt voor", "5 attracties in 9 dagen"],
        ["Altijd inbegrepen", "Empire State Building, Natural History Museum"],
        ["Kies er 3 bij", "Veerboot Vrijheidsbeeld, 9/11 Museum, Top of the Rock en andere"],
        ["Oordeel", "De moeite waard vanaf vier attracties"],
      ],
      sections: [
        {
          heading: "De rekensom",
          paragraphs: [
            "Los gekocht kosten het Empire State Building, het Natural History Museum, de veerboot naar het Vrijheidsbeeld, het 9/11 Museum en Top of the Rock samen ruwweg $180 tot $200. De pas bespaart $20 tot $40 als je ze alle vijf gebruikt en speelt quitte bij ongeveer vier. Hij maakt een dure stad niet goedkoop: hij haalt iets van de kosten van een klassiek eerste bezoek af.",
          ],
        },
        {
          heading: "Wat je moet weten voor je koopt",
          bullets: [
            "Twee uitkijkplatforms: Het Empire State Building zit in de pas, en Top of the Rock is een van de keuzes. De meeste mensen hebben niet allebei nodig; kies liever een museum of de veerboot.",
            "Reserveren: De meeste attracties vragen nog steeds een tijdslot, dat je na aankoop via de pas boekt. Doe dat meteen.",
            "Negen dagen: De pas loopt negen dagen vanaf het eerste gebruik, dus haasten hoeft niet.",
            "Niet inbegrepen: Broadway, SUMMIT One Vanderbilt, Edge, en de kroon en het voetstuk van het Vrijheidsbeeld.",
          ],
        },
        {
          heading: "Wie hem beter overslaat",
          paragraphs: [
            "Sla hem over als je reis vooral bestaat uit wijken, eten, parken en één of twee grote bezienswaardigheden. Veel van het mooiste in New York is gratis: Central Park, de High Line, de Brooklyn Bridge, de Staten Island Ferry en het 9/11 Memorial.",
          ],
        },
      ],
      tip: "Andere passen worden per dag of per aantal attracties verkocht. Die lonen pas bij drie of meer betaalde bezienswaardigheden per dag, en dan blijft er geen tijd over voor de stad zelf.",
      faq: [
        ["Hoe lang is de New York CityPASS geldig?", "Negen aaneengesloten dagen vanaf de eerste attractie die je bezoekt."],
        ["Zit het Vrijheidsbeeld bij de CityPASS?", "De veerboot naar Liberty Island en Ellis Island is een van de keuzes; toegang tot het voetstuk of de kroon zit er niet bij."],
      ],
    },
  },
  {
    id: "nyc-4-days",
    destinationId: "new-york",
    type: "itineraries",
    image: "nyc-bridge",
    readMinutes: 7,
    updated: "2026-11",
    bookingQuery: "New York City tours",
    en: {
      slug: "new-york-in-4-days",
      title: "New York in 4 days: a day-by-day itinerary",
      description: "Four days in New York planned by neighbourhood, with one area a day and the bookings to make first.",
      answer:
        "Four days covers New York's main sights if you take one part of the city each day: Midtown, Lower Manhattan, Central Park with the museums, and Brooklyn. Book the Statue of Liberty ferry, one observation deck and a Broadway show before you arrive. Walk as much as you can; the subway connects the days, and the streets are the point.",
      facts: [
        ["Book first", "Statue of Liberty, one observation deck, Broadway"],
        ["Getting around", "Subway: tap a card or phone, $3 a ride"],
        ["Walking", "8 to 10 miles (13 to 16 km) a day"],
        ["Best base", "Midtown for first-timers, downtown for food"],
        ["Tipping", "18 to 20% in restaurants"],
      ],
      sections: [
        {
          heading: "Day 1: Midtown",
          bullets: [
            "Morning: Grand Central Terminal, the New York Public Library and Bryant Park, all free and within ten minutes of each other.",
            "Midday: Fifth Avenue north to St. Patrick's Cathedral and Rockefeller Center.",
            "Afternoon: The Museum of Modern Art, or shopping.",
            "Sunset: Top of the Rock or the Empire State Building.",
            "Evening: Times Square after dark, then a Broadway show.",
          ],
        },
        {
          heading: "Day 2: Lower Manhattan",
          bullets: [
            "8:30 am: The first ferry to the Statue of Liberty and Ellis Island.",
            "1:30 pm: Lunch in the Financial District, then Wall Street on foot.",
            "3:00 pm: The 9/11 Memorial, and the museum if you booked it.",
            "Evening: Dinner in Chinatown, Little Italy or the West Village.",
          ],
        },
        {
          heading: "Day 3: Central Park and the museums",
          bullets: [
            "Morning: The Metropolitan Museum of Art. Pick two or three sections; it cannot be seen in a day.",
            "Afternoon: Walk Central Park from the museum to Bethesda Terrace, Bow Bridge and Strawberry Fields.",
            "Late afternoon: The American Museum of Natural History, or the Upper West Side for coffee.",
            "Evening: Jazz in Harlem or the Village.",
          ],
        },
        {
          heading: "Day 4: Brooklyn and the High Line",
          bullets: [
            "Morning: The High Line from Hudson Yards south to Chelsea Market for lunch.",
            "Afternoon: Subway to Brooklyn. Walk DUMBO and the Brooklyn Heights Promenade.",
            "Sunset: Walk back over the Brooklyn Bridge towards the skyline.",
            "Evening: A last dinner downtown.",
          ],
        },
      ],
      tip: "Avenues run north to south and streets run east to west. Twenty street blocks make a mile, so a walk from 42nd to 59th Street takes about fifteen minutes.",
      faq: [
        ["Is 4 days enough for New York?", "Yes for a first visit. A fifth day lets you add more of Brooklyn, a second museum or simply a slower pace."],
        ["What should I book in advance for New York?", "The Statue of Liberty ferry, especially the crown or pedestal, one observation deck at sunset and any Broadway show you care about."],
        ["Is the New York subway safe?", "Yes for normal use. It is busy at all hours; stay in the middle of the platform and use the cars with other passengers late at night."],
      ],
    },
    nl: {
      slug: "new-york-in-4-dagen",
      title: "New York in 4 dagen: een route per dag",
      description: "Vier dagen New York ingedeeld per wijk, met één gebied per dag en de reserveringen die je als eerste maakt.",
      answer:
        "In vier dagen zie je de hoogtepunten van New York als je elke dag één deel van de stad neemt: Midtown, het zuiden van Manhattan, Central Park met de musea, en Brooklyn. Boek voor vertrek de veerboot naar het Vrijheidsbeeld, één uitkijkplatform en een Broadway-show. Loop zo veel als je kunt; de metro verbindt de dagen, maar het gaat om de straten.",
      facts: [
        ["Eerst boeken", "Vrijheidsbeeld, één uitkijkplatform, Broadway"],
        ["Vervoer", "Metro: houd je pas of telefoon tegen het poortje, $3 per rit"],
        ["Lopen", "13 tot 16 km per dag"],
        ["Beste uitvalsbasis", "Midtown voor een eerste keer, downtown voor het eten"],
        ["Fooi", "18 tot 20% in restaurants"],
      ],
      sections: [
        {
          heading: "Dag 1: Midtown",
          bullets: [
            "Ochtend: Grand Central Terminal, de New York Public Library en Bryant Park, allemaal gratis en binnen tien minuten van elkaar. Door de jetlag ben je vroeg wakker; maak daar gebruik van.",
            "Middag: Over Fifth Avenue naar het noorden, naar St. Patrick's Cathedral en het Rockefeller Center.",
            "Namiddag: Het Museum of Modern Art, of winkelen.",
            "Zonsondergang: Top of the Rock of het Empire State Building.",
            "Avond: Times Square in het donker, en daarna een Broadway-show.",
          ],
        },
        {
          heading: "Dag 2: Het zuiden van Manhattan",
          bullets: [
            "8.30 uur: De eerste veerboot naar het Vrijheidsbeeld en Ellis Island.",
            "13.30 uur: Lunch in het Financial District, daarna te voet door Wall Street.",
            "15.00 uur: Het 9/11 Memorial, en het museum als je het hebt geboekt.",
            "Avond: Eten in Chinatown, Little Italy of de West Village.",
          ],
        },
        {
          heading: "Dag 3: Central Park en de musea",
          bullets: [
            "Ochtend: Het Metropolitan Museum of Art. Kies twee of drie afdelingen; in een dag zie je het niet.",
            "Middag: Loop door Central Park van het museum naar Bethesda Terrace, Bow Bridge en Strawberry Fields.",
            "Namiddag: Het American Museum of Natural History, of koffie in de Upper West Side.",
            "Avond: Jazz in Harlem of de Village.",
          ],
        },
        {
          heading: "Dag 4: Brooklyn en de High Line",
          bullets: [
            "Ochtend: De High Line van Hudson Yards naar het zuiden, tot Chelsea Market voor de lunch.",
            "Middag: Met de metro naar Brooklyn. Loop door DUMBO en over de Brooklyn Heights Promenade.",
            "Zonsondergang: Loop terug over de Brooklyn Bridge, met de skyline voor je.",
            "Avond: Een laatste diner downtown.",
          ],
        },
      ],
      tip: "Prijzen in winkels en op menukaarten zijn zonder belasting en fooi. Reken in een restaurant op bijna dertig procent boven de prijs op de kaart.",
      faq: [
        ["Is 4 dagen genoeg voor New York?", "Voor een eerste bezoek wel. Met een vijfde dag kun je meer van Brooklyn zien, een tweede museum doen of het gewoon rustiger aan doen."],
        ["Wat moet ik vooraf boeken voor New York?", "De veerboot naar het Vrijheidsbeeld, zeker met kroon of voetstuk, één uitkijkplatform rond zonsondergang en de Broadway-show die je echt wilt zien."],
        ["Is de metro van New York veilig?", "Bij normaal gebruik wel. Het is er op elk uur druk; blijf in het midden van het perron en kies 's avonds laat een rijtuig met andere reizigers."],
      ],
    },
  },
  {
    id: "nyc-hidden-gems",
    destinationId: "new-york",
    type: "hiddenGems",
    image: "nyc-dumbo",
    readMinutes: 6,
    updated: "2026-11",
    bookingQuery: "New York hidden gems walking tour",
    en: {
      slug: "hidden-gems",
      title: "Hidden gems in New York: 9 places most visitors walk past",
      description: "Nine places in New York without a ticket line: a cable car over the river, a medieval cloister and an island with no cars.",
      answer:
        "The best hidden places in New York are the Roosevelt Island Tramway, a cable car over the East River for the price of a subway ride; the Brooklyn Heights Promenade, with the full skyline across the water; and The Cloisters, a medieval monastery rebuilt at the northern tip of Manhattan. Most cost nothing, and all are reachable by subway.",
      facts: [
        ["Cost", "Mostly free, or a subway fare"],
        ["Reservation", "Not needed"],
        ["Best area", "Brooklyn Heights, the East River and upper Manhattan"],
        ["Time", "Half a day covers three or four"],
      ],
      sections: [
        {
          heading: "The nine places",
          bullets: [
            "Roosevelt Island Tramway: A red cable car from 59th Street over the East River, with a view down the avenues. You pay a subway fare.",
            "Brooklyn Heights Promenade: A quiet walkway above the harbour, facing Lower Manhattan and the Brooklyn Bridge. Best at dusk.",
            "The Cloisters: Part of the Metropolitan Museum, built from pieces of medieval French abbeys in a park above the Hudson. One ticket covers both museums on the same day.",
            "Governors Island: A former military base seven minutes by ferry from Manhattan, with lawns, bike paths and no cars. Check the ferry times before you go.",
            "The Staten Island Ferry: Free, round the clock, and it passes the Statue of Liberty. Ride it there and straight back.",
            "The whispering gallery at Grand Central: Stand in opposite corners of the tiled arch outside the Oyster Bar and whisper into the wall.",
            "Little Island: A park on tulip-shaped columns over the Hudson, at the south end of the High Line.",
            "The Tenement Museum: Guided visits to the restored apartments of immigrant families on the Lower East Side. Book ahead; it is the best small museum in the city.",
            "Green-Wood Cemetery: Hills, ponds and elaborate tombs in Brooklyn, with a view to the harbour and wild parrots at the gate.",
          ],
        },
        {
          heading: "How to combine them",
          paragraphs: [
            "The Staten Island Ferry leaves from the same corner of Manhattan as the Governors Island ferry, so the two fit into one morning. The Brooklyn Heights Promenade is a ten-minute walk from DUMBO and the foot of the Brooklyn Bridge. The Cloisters is a half-day trip on its own, 30 minutes north by subway.",
          ],
        },
      ],
      tip: "Many museums have pay-what-you-wish or free evenings once a week. Check before you buy a full-price ticket.",
      faq: [
        ["What is free to do in New York?", "Central Park, the High Line, the Brooklyn Bridge, the Staten Island Ferry, the 9/11 Memorial, Grand Central and the New York Public Library."],
        ["Is the Roosevelt Island Tramway worth it?", "Yes. It costs a subway fare, takes four minutes and gives one of the best views of the East Side."],
      ],
    },
    nl: {
      slug: "verborgen-plekken",
      title: "Verborgen plekken in New York: 9 plekken waar de meeste bezoekers langslopen",
      description: "Negen plekken in New York zonder rij voor de kassa: een kabelbaan over de rivier, een middeleeuws klooster en een eiland zonder auto's.",
      answer:
        "De mooiste verborgen plekken in New York zijn de Roosevelt Island Tramway, een kabelbaan over de East River voor de prijs van een metrorit; de Brooklyn Heights Promenade, met de hele skyline aan de overkant van het water; en The Cloisters, een middeleeuws klooster dat is herbouwd op de noordpunt van Manhattan. De meeste kosten niets, en ze zijn allemaal met de metro te bereiken.",
      facts: [
        ["Kosten", "Meestal gratis, of een metrorit"],
        ["Reserveren", "Niet nodig"],
        ["Beste gebied", "Brooklyn Heights, de East River en het noorden van Manhattan"],
        ["Tijd", "In een halve dag zie je er drie of vier"],
      ],
      sections: [
        {
          heading: "De negen plekken",
          bullets: [
            "Roosevelt Island Tramway: Een rode kabelbaan vanaf 59th Street over de East River, met zicht langs de avenues. Je betaalt een metrorit.",
            "Brooklyn Heights Promenade: Een rustige wandelpromenade boven de haven, tegenover het zuiden van Manhattan en de Brooklyn Bridge. Het mooist in de schemering.",
            "The Cloisters: Onderdeel van het Metropolitan Museum, gebouwd van delen van middeleeuwse Franse abdijen in een park boven de Hudson. Eén ticket geldt op dezelfde dag voor beide musea.",
            "Governors Island: Een voormalige militaire basis op zeven minuten varen van Manhattan, met grasvelden, fietspaden en geen auto's. Bekijk de vaartijden voordat je gaat.",
            "De Staten Island Ferry: Gratis, dag en nacht, en hij vaart langs het Vrijheidsbeeld. Vaar heen en meteen weer terug.",
            "De fluistergalerij in Grand Central: Ga in tegenoverliggende hoeken van de betegelde boog voor de Oyster Bar staan en fluister tegen de muur.",
            "Little Island: Een park op tulpvormige pijlers boven de Hudson, aan het zuidelijke eind van de High Line.",
            "Het Tenement Museum: Rondleidingen door de gerestaureerde woningen van immigrantengezinnen in de Lower East Side. Boek vooraf; het is het beste kleine museum van de stad.",
            "Green-Wood Cemetery: Heuvels, vijvers en uitbundige graftombes in Brooklyn, met uitzicht op de haven en wilde papegaaien bij de poort.",
          ],
        },
        {
          heading: "Hoe je ze combineert",
          paragraphs: [
            "De Staten Island Ferry vertrekt vanaf dezelfde hoek van Manhattan als de veerboot naar Governors Island, dus die twee passen in één ochtend. De Brooklyn Heights Promenade ligt op tien minuten lopen van DUMBO en de voet van de Brooklyn Bridge. The Cloisters is een uitstapje van een halve dag, 30 minuten met de metro naar het noorden.",
          ],
        },
      ],
      tip: "Veel musea hebben één avond per week waarop je zelf de prijs bepaalt of gratis naar binnen mag. Kijk daarnaar voordat je de volle prijs betaalt.",
      faq: [
        ["Wat is er gratis te doen in New York?", "Central Park, de High Line, de Brooklyn Bridge, de Staten Island Ferry, het 9/11 Memorial, Grand Central en de New York Public Library."],
        ["Is de Roosevelt Island Tramway de moeite waard?", "Ja. Hij kost een metrorit, duurt vier minuten en geeft een van de mooiste uitzichten op de East Side."],
      ],
    },
  },
  {
    id: "nyc-airports",
    destinationId: "new-york",
    type: "practical",
    image: "nyc-cab",
    readMinutes: 5,
    updated: "2026-11",
    bookingQuery: "New York JFK airport transfer",
    en: {
      slug: "jfk-laguardia-newark-to-manhattan",
      title: "JFK, LaGuardia and Newark to Manhattan: taxi, train or subway",
      description: "The ways into Manhattan from New York's three airports compared on price and time.",
      answer:
        "From JFK, a yellow taxi to Manhattan costs a flat $70 before tolls, surcharges and tip, about $90 to $110 in all. The AirTrain plus the subway costs about $11.75 and takes roughly an hour. With two or more people and luggage the taxi is worth it; alone, take the train.",
      facts: [
        ["JFK taxi", "$70 flat fare; $90 to $110 with extras"],
        ["JFK AirTrain plus subway", "About $11.75, around 1 hour"],
        ["JFK AirTrain plus commuter rail", "About $14 to $16, around 40 minutes"],
        ["LaGuardia", "Free airport bus to the subway, then $3"],
        ["Newark", "AirTrain plus train to Penn Station, about 30 minutes"],
        ["Paying", "Tap a contactless card on subways and buses"],
      ],
      sections: [
        {
          heading: "From JFK",
          bullets: [
            "Yellow taxi: A flat fare to anywhere in Manhattan below 96th Street. Join the official line outside the terminal and ignore anyone offering a ride inside.",
            "AirTrain and subway: The AirTrain to Jamaica or Howard Beach, then the subway. Cheap and reliable, slow with large suitcases and stairs.",
            "AirTrain and commuter rail: The AirTrain to Jamaica, then the Long Island Rail Road to Penn Station or Grand Central. Faster and more comfortable than the subway for a few dollars more.",
            "Ride apps: Usually close to the taxi price, and higher at busy times.",
          ],
        },
        {
          heading: "From LaGuardia and Newark",
          paragraphs: [
            "LaGuardia has no train. A free express bus runs from the terminals to the subway in Queens, and from there Midtown is about 30 minutes; a taxi costs roughly $40 to $60 on the meter. Newark is in New Jersey: its AirTrain connects to trains that reach Penn Station in about half an hour, and taxis into Manhattan are the most expensive of the three airports.",
          ],
        },
        {
          heading: "Getting around the city",
          paragraphs: [
            "The subway runs all night and costs $3 a ride. Tap a contactless card or phone at the turnstile; after a set number of paid rides in a week, further rides that week are free on the same card. Use the same card every time for the cap to count.",
          ],
        },
      ],
      faq: [
        ["How much is a taxi from JFK to Manhattan?", "A flat $70, plus tolls, state and congestion surcharges and a tip. Expect $90 to $110 in total."],
        ["What is the cheapest way from JFK to Manhattan?", "The AirTrain and the subway, about $11.75 per person."],
        ["Which New York airport is closest to Manhattan?", "LaGuardia, about 8 miles from Midtown. JFK and Newark are both about 15 miles away."],
      ],
    },
    nl: {
      slug: "naar-new-york-esta-vliegveld-fooien",
      title: "Naar New York: ESTA, van het vliegveld naar Manhattan, en fooien",
      description: "Wat je als Nederlander regelt voor vertrek, hoe je van JFK of Newark in Manhattan komt en hoe het werkt met fooien en belasting.",
      answer:
        "Voor de Verenigde Staten heb je als Nederlander een ESTA nodig: die kost ongeveer $40, is twee jaar geldig en vraag je online aan voor vertrek. Vanaf JFK kost een gele taxi naar Manhattan een vast tarief van $70, met tol, toeslagen en fooi samen ongeveer $90 tot $110; de AirTrain met de metro kost ongeveer $11,75. Reken in restaurants op 18 tot 20 procent fooi boven op de rekening.",
      facts: [
        ["ESTA", "Ongeveer $40, 2 jaar geldig, vooraf aanvragen"],
        ["Vlucht", "Ongeveer 8 uur vanaf Amsterdam"],
        ["JFK, taxi", "$70 vast tarief; $90 tot $110 met alles erbij"],
        ["JFK, AirTrain plus metro", "Ongeveer $11,75, ruim een uur"],
        ["Fooi", "18 tot 20% in restaurants"],
        ["Tijdsverschil", "6 uur vroeger dan in Nederland"],
      ],
      sections: [
        {
          heading: "Voor vertrek",
          bullets: [
            "ESTA: De reistoestemming voor verblijven tot 90 dagen. Vraag hem aan op de officiële site van de Amerikaanse overheid, minstens drie dagen voor vertrek. Andere sites rekenen een veelvoud voor dezelfde aanvraag.",
            "Paspoort: Een geldig paspoort met chip. Een identiteitskaart is niet genoeg.",
            "Verzekering: Zorgkosten in de Verenigde Staten zijn hoog. Controleer of je reisverzekering werelddekking heeft.",
            "Stroom: Amerikaanse stopcontacten hebben twee platte pinnen en 110 volt. Neem een reisstekker mee.",
          ],
        },
        {
          heading: "Van het vliegveld naar Manhattan",
          bullets: [
            "JFK, taxi: Een vast tarief naar heel Manhattan onder 96th Street. Sluit aan bij de officiële rij buiten de terminal en negeer iedereen die je binnen een rit aanbiedt.",
            "JFK, AirTrain en metro: De AirTrain naar Jamaica of Howard Beach, daarna de metro. Goedkoop en betrouwbaar, maar traag met grote koffers en trappen.",
            "Newark: De AirTrain sluit aan op treinen die in ongeveer een half uur op Penn Station zijn. Een taxi is hier het duurst.",
          ],
        },
        {
          heading: "Fooien en belasting",
          paragraphs: [
            "Prijzen in winkels en op menukaarten zijn zonder belasting, die er bij de kassa bij komt. In restaurants met bediening is 18 tot 20 procent fooi de norm, omdat het personeel ervan leeft; aan de bar geef je een dollar of twee per drankje, en ook taxichauffeurs en hotelpersoneel krijgen een fooi. Het voelt ongewoon, maar het hoort bij de prijs.",
          ],
        },
      ],
      faq: [
        ["Heb je als Nederlander een visum nodig voor New York?", "Geen visum, wel een ESTA: een online reistoestemming van ongeveer $40 die twee jaar geldig is, voor verblijven tot 90 dagen."],
        ["Wat kost een taxi van JFK naar Manhattan?", "Een vast tarief van $70, plus tol, toeslagen en fooi. Reken op $90 tot $110 in totaal."],
        ["Hoeveel fooi geef je in New York?", "18 tot 20 procent in restaurants met bediening, en een dollar of twee per drankje aan de bar."],
      ],
    },
  },
  {
    id: "nyc-best-time",
    destinationId: "new-york",
    type: "practical",
    image: "nyc-park",
    readMinutes: 4,
    updated: "2026-11",
    en: {
      slug: "best-time-to-visit-new-york",
      title: "Best time to visit New York: season by season",
      description: "When New York is at its best, what each season costs and the weeks to avoid.",
      answer:
        "The best time to visit New York is from late April to June and from September to early November: mild weather, clear skies and the city fully open. December is magical and the most expensive month of the year. July and August are hot and humid, around 85°F (29°C), and January and February are the cheapest, with temperatures near freezing.",
      facts: [
        ["Best months", "May, June, September, October"],
        ["Hottest", "July and August, around 85°F (29°C)"],
        ["Coldest", "January and February, around 39°F (4°C)"],
        ["Most expensive", "December, especially before Christmas"],
        ["Cheapest", "January to early March"],
      ],
      sections: [
        {
          heading: "Season by season",
          bullets: [
            "Spring (April to June): Blossom in Central Park, outdoor tables and long evenings. April can still be cold and wet; May and June are reliable.",
            "Summer (July and August): Heat, humidity and afternoon thunderstorms. Free outdoor concerts and films make up for it, and hotels are cheaper than in spring.",
            "Autumn (September to early November): The best weather of the year, and colour in the park from mid-October to early November.",
            "Winter (mid-November to March): The holiday season, from the Thanksgiving parade to New Year, is crowded and expensive. January and February are cold, quiet and good value.",
          ],
        },
        {
          heading: "Weeks to plan around",
          paragraphs: [
            "Hotel prices peak in the first three weeks of December, during the United Nations General Assembly in late September and around the marathon on the first Sunday of November. Thanksgiving week and New Year's Eve bring the biggest crowds; Times Square on 31 December means standing in a pen for hours without facilities.",
          ],
        },
      ],
      faq: [
        ["Is New York worth visiting in winter?", "Yes. December has the lights and the windows; January and February have empty museums and the lowest prices. Pack for wind and real cold."],
        ["When do the leaves change in Central Park?", "Usually from mid-October, with peak colour in late October and early November."],
      ],
    },
    nl: {
      slug: "beste-reistijd-new-york",
      title: "Beste reistijd voor New York: per seizoen",
      description: "Wanneer New York op zijn best is, wat elk seizoen kost en welke weken je beter vermijdt.",
      answer:
        "De beste reistijd voor New York is van eind april tot en met juni en van september tot begin november: zacht weer, heldere luchten en een stad die volop draait. December is sprookjesachtig en de duurste maand van het jaar. Juli en augustus zijn heet en vochtig, rond de 29 °C, en januari en februari zijn het goedkoopst, met temperaturen rond het vriespunt.",
      facts: [
        ["Beste maanden", "Mei, juni, september, oktober"],
        ["Heetst", "Juli en augustus, rond de 29 °C"],
        ["Koudst", "Januari en februari, rond de 4 °C"],
        ["Duurst", "December, vooral vóór kerst"],
        ["Goedkoopst", "Januari tot begin maart"],
      ],
      sections: [
        {
          heading: "Per seizoen",
          bullets: [
            "Lente (april tot en met juni): Bloesem in Central Park, terrassen en lange avonden. April kan nog koud en nat zijn; mei en juni zijn betrouwbaar. De meivakantie is een goed moment.",
            "Zomer (juli en augustus): Hitte, vochtigheid en onweer in de middag. Gratis concerten en films in de buitenlucht maken veel goed, en hotels zijn goedkoper dan in de lente.",
            "Herfst (september tot begin november): Het mooiste weer van het jaar, en herfstkleuren in het park van half oktober tot begin november. De herfstvakantie valt precies goed.",
            "Winter (half november tot en met maart): Rond de feestdagen, van de Thanksgiving-parade tot oud en nieuw, is het druk en duur. Januari en februari zijn koud, rustig en voordelig.",
          ],
        },
        {
          heading: "Weken om rekening mee te houden",
          paragraphs: [
            "De hotelprijzen pieken in de eerste drie weken van december, tijdens de Algemene Vergadering van de Verenigde Naties eind september en rond de marathon op de eerste zondag van november. In de week van Thanksgiving en met oud en nieuw is het het drukst; oudejaarsavond op Times Square betekent urenlang in een afgezet vak staan, zonder voorzieningen.",
          ],
        },
      ],
      faq: [
        ["Is New York in de winter de moeite waard?", "Ja. December heeft de lichtjes en de etalages; januari en februari hebben lege musea en de laagste prijzen. Kleed je op wind en echte kou."],
        ["Wanneer verkleuren de bladeren in Central Park?", "Meestal vanaf half oktober, met de mooiste kleuren eind oktober en begin november."],
      ],
    },
  },
];
