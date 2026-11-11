import type { Article } from "../articles";

// Fact check, 11 November 2026.
//
// Confirmed on official pages:
// - Taxi fares (visitaruba.com taxi guide, official fare sheet of 18 May 2026): airport to
//   Oranjestad $26, Eagle Beach $37, Palm Beach $41; per car for up to 4 people; $5 surcharge
//   on Sundays, holidays and 11 pm to 7 am; extra bags $3; no Uber or Lyft.
// - Arikok National Park (acf.aw): $22 per adult, children under 17 free.
// - Natural Pool (aruba.com): reachable only by off-road vehicle, on horseback or on a guided hike.
// - ED card and $20 sustainability fee for air arrivals, children under 8 exempt (aruba.com).
// - US-bound flights: be at the airport three hours ahead (airportaruba.com).
// - Cruise port (aruba.com): north side of downtown Oranjestad, 5 to 10 minutes on foot to the
//   main boulevard, Surfside Beach 15 minutes on foot, Eagle Beach about 10 minutes by car.
// - Climate (aruba.com): 80 to 90 F, about 18 inches of rain a year, showers October to December,
//   outside the hurricane belt.
// - Antilla wreck (Wikipedia): 398 ft / 121 m, scuttled 10 May 1940, up to 60 ft / 18 m deep.
//
// Only found on third-party sites or written from general knowledge. Re-check before launch:
// - Arikok opening hours (sources give 8:00 to 16:00, ticket sales to 15:30) and which
//   vehicles may enter the park.
// - Renaissance Island day pass: about $125, limited, released on Saturdays.
// - Snorkel tour prices ($60 to $100) and off-road tour prices.
// - The hidden-gems list, driving times, the sunscreen rule and tap water.

export const arubaArticles: Article[] = [
  {
    id: "aruba-snorkeling-tours",
    destinationId: "aruba",
    type: "comparisons",
    image: "aruba-catamaran",
    readMinutes: 5,
    updated: "2026-11",
    bookingQuery: "Aruba snorkeling catamaran Antilla",
    en: {
      slug: "best-snorkeling-tours",
      title: "Aruba snorkeling tours compared: catamaran, small boat or from shore",
      description: "The three ways to snorkel in Aruba side by side, including the Antilla shipwreck, and which one fits your trip.",
      answer:
        "For most visitors a morning catamaran trip is the best snorkeling tour in Aruba: about three hours, two or three stops including the Antilla shipwreck, with gear and drinks included for roughly $60 to $100. Choose a small-boat tour if you want fewer people in the water. Confident swimmers can snorkel for free from shore at Boca Catalina, Arashi and Mangel Halto.",
      facts: [
        ["Catamaran tour", "3 hours, about $60 to $100"],
        ["Typical stops", "Antilla wreck, Boca Catalina, Arashi"],
        ["Antilla wreck", "398 ft (121 m) long, up to 60 ft (18 m) deep"],
        ["Best time of day", "Morning: calmer water, better visibility"],
        ["Free from shore", "Boca Catalina, Arashi, Mangel Halto"],
      ],
      sections: [
        {
          heading: "The three options",
          bullets: [
            "Catamaran with open bar: The classic. Large groups, music, snacks and drinks, and a rope swing on some boats. Good value and easy with children who swim well.",
            "Small boat or semi-private: Up to about twelve people. More time in the water, a guide who points things out, and a higher price.",
            "From shore, on your own: Free apart from gear rental. Boca Catalina and Arashi have calm, shallow water and plenty of fish. You will not reach the Antilla from the beach.",
          ],
        },
        {
          heading: "The Antilla shipwreck",
          paragraphs: [
            "The Antilla was a German cargo ship. Her crew sank her on purpose on 10 May 1940, the day Germany invaded the Netherlands, to keep her out of Dutch hands. She lies in Malmok Bay off the northwest coast and is one of the largest wrecks in the Caribbean. Parts of the hull come close to the surface, so snorkelers see her from above without diving.",
          ],
        },
        {
          heading: "What to check before you book",
          bullets: [
            "Stops: Not every tour goes to the Antilla. Look for the name in the description.",
            "Departure point: Most boats leave from the piers on Palm Beach. Cruise passengers need a tour with port pickup.",
            "Wind: Aruba is windy. Morning trips are calmer, and trips can be rerouted on rough days.",
            "Group size: Catamarans carry 50 people or more. Check the maximum if that matters to you.",
          ],
        },
      ],
      tip: "Bring a reef-safe sunscreen and put it on before you board. The sun on the water is stronger than it feels in the wind.",
      faq: [
        ["Can you snorkel the Antilla wreck without scuba diving?", "Yes. The wreck lies in up to 60 feet (18 m) of water and its upper parts are close enough to the surface to see clearly while snorkeling."],
        ["Where is the best free snorkeling in Aruba?", "Boca Catalina and Arashi on the northwest coast for calm water, and Mangel Halto in the south for more fish and coral."],
        ["Is snorkeling in Aruba good for beginners?", "Yes on the northwest coast, where the water is shallow and calm. Tours provide flotation vests and a guide in the water."],
      ],
    },
    nl: {
      slug: "beste-snorkeltours",
      title: "Snorkeltours op Aruba vergeleken: catamaran, kleine boot of vanaf het strand",
      description: "De drie manieren om op Aruba te snorkelen naast elkaar, inclusief het wrak van de Antilla, en welke bij je reis past.",
      answer:
        "Voor de meeste bezoekers is een ochtendtocht per catamaran de beste snorkeltour op Aruba: ongeveer drie uur, twee of drie stops waaronder het wrak van de Antilla, met uitrusting en drankjes inbegrepen voor ruwweg $60 tot $100. Kies een tour met een kleine boot als je minder mensen in het water wilt. Geoefende zwemmers snorkelen gratis vanaf het strand bij Boca Catalina, Arashi en Mangel Halto.",
      facts: [
        ["Catamarantocht", "3 uur, ongeveer $60 tot $100"],
        ["Gebruikelijke stops", "Wrak van de Antilla, Boca Catalina, Arashi"],
        ["Wrak van de Antilla", "121 meter lang, tot 18 meter diep"],
        ["Beste moment", "Ochtend: rustiger water en beter zicht"],
        ["Gratis vanaf het strand", "Boca Catalina, Arashi, Mangel Halto"],
      ],
      sections: [
        {
          heading: "De drie mogelijkheden",
          bullets: [
            "Catamaran met open bar: De klassieker. Grote groepen, muziek, hapjes en drankjes, en op sommige boten een touwschommel. Veel waar voor je geld en makkelijk met kinderen die goed zwemmen.",
            "Kleine boot of semi-privé: Tot ongeveer twaalf personen. Meer tijd in het water, een gids die dingen aanwijst, en een hogere prijs.",
            "Zelf vanaf het strand: Gratis, op de huur van uitrusting na. Boca Catalina en Arashi hebben rustig, ondiep water en veel vis. De Antilla bereik je niet vanaf het strand.",
          ],
        },
        {
          heading: "Het wrak van de Antilla",
          paragraphs: [
            "De Antilla was een Duits vrachtschip. De bemanning bracht het op 10 mei 1940, de dag van de Duitse inval in Nederland, zelf tot zinken om het uit Nederlandse handen te houden. Het ligt in de Malmokbaai voor de noordwestkust en is een van de grootste wrakken van het Caribisch gebied. Delen van de romp komen dicht onder het oppervlak, dus als snorkelaar zie je het van bovenaf zonder te duiken.",
          ],
        },
        {
          heading: "Waar je op let voor je boekt",
          bullets: [
            "Stops: Niet elke tour gaat naar de Antilla. Zoek de naam in de beschrijving.",
            "Vertrekpunt: De meeste boten vertrekken vanaf de pieren op Palm Beach. Cruisepassagiers hebben een tour met ophalen bij de haven nodig.",
            "Wind: Op Aruba waait het. Ochtendtochten zijn rustiger, en bij ruw weer kan de route worden aangepast.",
            "Groepsgrootte: Op een catamaran passen 50 mensen of meer. Bekijk het maximum als dat voor je telt.",
          ],
        },
      ],
      tip: "Neem zonnebrand mee die veilig is voor het rif en smeer je in voordat je aan boord gaat. De zon op het water is sterker dan hij in de wind voelt.",
      faq: [
        ["Kun je het wrak van de Antilla zien zonder te duiken?", "Ja. Het wrak ligt in water tot 18 meter diep en de bovenste delen komen dicht genoeg onder het oppervlak om ze snorkelend goed te zien."],
        ["Waar snorkel je gratis het mooist op Aruba?", "Bij Boca Catalina en Arashi aan de noordwestkust voor rustig water, en bij Mangel Halto in het zuiden voor meer vis en koraal."],
        ["Is snorkelen op Aruba geschikt voor beginners?", "Aan de noordwestkust wel, waar het water ondiep en rustig is. Tours geven een drijfvest en er gaat een gids mee het water in."],
      ],
    },
  },
  {
    id: "aruba-arikok",
    destinationId: "aruba",
    type: "tickets",
    image: "aruba-pool",
    readMinutes: 5,
    updated: "2026-11",
    bookingQuery: "Aruba Arikok National Park Natural Pool tour",
    en: {
      slug: "arikok-national-park-natural-pool",
      title: "Arikok National Park and the Natural Pool: entry fee and how to visit",
      description: "What Arikok costs, what a normal rental car can and cannot reach, and how to get to the Natural Pool.",
      answer:
        "Entry to Arikok National Park costs $22 per adult and is free for children under 17. A normal rental car reaches the visitor center, the caves and Boca Prins, but not the Natural Pool: that is only reachable by off-road vehicle, on horseback or on a guided hike. If the Natural Pool is the reason you are going, book a 4x4 tour.",
      facts: [
        ["Entry", "$22 per adult, under 17 free"],
        ["Size", "Almost a fifth of the island"],
        ["Natural Pool access", "Off-road vehicle, horseback or guided hike"],
        ["Go early", "Ticket sales stop mid-afternoon"],
        ["Time needed", "Half a day"],
        ["Bring", "Water shoes, water, a hat"],
      ],
      sections: [
        {
          heading: "What you can see",
          bullets: [
            "The Natural Pool (Conchi): A pool behind a wall of volcanic rock on the wild north coast, filled by waves breaking over the edge.",
            "Fontein and Quadirikiri caves: Limestone caves with rock drawings and shafts of daylight through the roof.",
            "Boca Prins and Dos Playa: Dramatic coves with white dunes. Beautiful to look at, too rough to swim.",
            "The landscape: Cactus, divi-divi trees, wild goats and donkeys. Nothing like the hotel strip.",
          ],
        },
        {
          heading: "Tour or drive yourself",
          bullets: [
            "4x4 jeep tour: The easy way to the Natural Pool. A driver handles the rough track, and most tours add the caves and a beach stop.",
            "Rental 4x4: Works if you are used to rocky tracks. Check that your rental contract allows driving to the Natural Pool; many do not.",
            "Normal rental car: Fine for the paved road to the caves and Boca Prins. Leave the Natural Pool out.",
            "On foot: The hike to the pool is hot and exposed. Go with a guide and start early.",
          ],
        },
        {
          heading: "Before you go",
          paragraphs: [
            "The pool closes to swimmers when the sea is rough, and nobody can promise it will be open on your day. Ask your tour operator which vehicles they use inside the park, because the rules for off-road vehicles have changed over the years. The entry fee funds conservation and is often not included in the tour price.",
          ],
        },
      ],
      tip: "The rocks around the pool are sharp and slippery. Water shoes make the difference between enjoying it and limping back.",
      faq: [
        ["Can you drive to the Natural Pool in a rental car?", "Not in a normal car. The track needs a real off-road vehicle, and many rental contracts forbid it even for 4x4s."],
        ["How much is the entrance fee for Arikok National Park?", "$22 per adult. Children under 17 enter free."],
        ["Is Arikok National Park worth it?", "Yes, if you want to see the wild side of Aruba. It is the opposite of the beach resorts and takes only half a day."],
      ],
    },
    nl: {
      slug: "nationaal-park-arikok-natural-pool",
      title: "Nationaal Park Arikok en de Natural Pool: entree en hoe je er komt",
      description: "Wat Arikok kost, waar je met een gewone huurauto wel en niet komt, en hoe je de Natural Pool bereikt.",
      answer:
        "De entree van Nationaal Park Arikok is $22 per volwassene en gratis voor kinderen onder de 17. Met een gewone huurauto bereik je het bezoekerscentrum, de grotten en Boca Prins, maar niet de Natural Pool: daar kom je alleen met een terreinwagen, te paard of met een begeleide wandeling. Is de Natural Pool de reden van je bezoek, boek dan een 4x4-tour.",
      facts: [
        ["Entree", "$22 per volwassene, onder 17 gratis"],
        ["Grootte", "Bijna een vijfde van het eiland"],
        ["Toegang Natural Pool", "Terreinwagen, paard of begeleide wandeling"],
        ["Ga vroeg", "De kaartverkoop stopt halverwege de middag"],
        ["Benodigde tijd", "Een halve dag"],
        ["Meenemen", "Waterschoenen, water, een pet"],
      ],
      sections: [
        {
          heading: "Wat je er ziet",
          bullets: [
            "De Natural Pool (Conchi): Een bassin achter een wand van vulkanisch gesteente aan de ruige noordkust, gevuld door golven die over de rand slaan.",
            "De grotten Fontein en Quadirikiri: Kalksteengrotten met rotstekeningen en bundels daglicht door het dak.",
            "Boca Prins en Dos Playa: Indrukwekkende baaien met witte duinen. Mooi om te zien, te ruw om te zwemmen.",
            "Het landschap: Cactussen, divi-divibomen, wilde geiten en ezels. Totaal anders dan de hotelstrook.",
          ],
        },
        {
          heading: "Tour of zelf rijden",
          bullets: [
            "Jeeptour met 4x4: De makkelijke manier naar de Natural Pool. Een chauffeur neemt het ruwe pad, en de meeste tours doen ook de grotten en een strand aan.",
            "Gehuurde 4x4: Kan als je gewend bent aan rotsige paden. Controleer of je huurcontract rijden naar de Natural Pool toestaat; vaak mag het niet.",
            "Gewone huurauto: Prima voor de verharde weg naar de grotten en Boca Prins. Sla de Natural Pool over.",
            "Te voet: De wandeling naar het bassin is heet en zonder schaduw. Ga met een gids en begin vroeg.",
          ],
        },
        {
          heading: "Voor je gaat",
          paragraphs: [
            "Bij ruwe zee gaat het bassin dicht voor zwemmers, en niemand kan beloven dat het op jouw dag open is. Vraag je touraanbieder met welke voertuigen ze het park in gaan, want de regels voor terreinvoertuigen zijn in de loop der jaren veranderd. De entree komt ten goede aan natuurbehoud en zit vaak niet bij de tourprijs in.",
          ],
        },
      ],
      tip: "De rotsen rond het bassin zijn scherp en glad. Met waterschoenen geniet je ervan; zonder strompel je terug.",
      faq: [
        ["Kun je met een huurauto naar de Natural Pool rijden?", "Niet met een gewone auto. Het pad vraagt om een echte terreinwagen, en veel huurcontracten verbieden het zelfs voor een 4x4."],
        ["Wat kost de entree van Nationaal Park Arikok?", "$22 per volwassene. Kinderen onder de 17 mogen gratis naar binnen."],
        ["Is Nationaal Park Arikok de moeite waard?", "Ja, als je de ruige kant van Aruba wilt zien. Het is het tegenovergestelde van de strandresorts en kost maar een halve dag."],
      ],
    },
  },
  {
    id: "aruba-flamingo-beach",
    destinationId: "aruba",
    type: "worthIt",
    image: "aruba-oranjestad",
    readMinutes: 4,
    updated: "2026-11",
    en: {
      slug: "is-flamingo-beach-worth-it",
      title: "Is Flamingo Beach in Aruba worth it?",
      description: "How to get onto Renaissance Island, what a day pass costs, and when it makes more sense to book the hotel.",
      answer:
        "Flamingo Beach is worth it only if the flamingo photo matters to you. It sits on Renaissance Island, a private island owned by the Renaissance resort in Oranjestad: hotel guests go for free, everyone else needs a day pass of roughly $125 that is sold in small numbers and often sells out. For two people, one night at the hotel can cost little more than two passes.",
      facts: [
        ["Where", "Renaissance Island, by boat from Oranjestad"],
        ["Hotel guests", "Free, unlimited access"],
        ["Day pass", "About $125 per adult, limited"],
        ["Passes released", "Weekly, reported as Saturday morning"],
        ["Verdict", "Only for the photo, or stay at the hotel"],
      ],
      sections: [
        {
          heading: "How it works",
          paragraphs: [
            "A water taxi leaves from inside the Renaissance hotel lobby in downtown Oranjestad and reaches the island in about ten minutes. To board you need a room key, a day pass or a spa appointment on the island. The hotel only sells passes when it has room, so in high season there may be none at all.",
          ],
        },
        {
          heading: "Who should go",
          bullets: [
            "Go: You want the flamingo photo, you are happy with a quiet beach day, and you managed to get a pass.",
            "Stay the night instead: You are two or more. Compare the price of one night at the hotel with the price of your passes.",
            "Skip it: You have limited beach days. Eagle Beach is free, wider and more beautiful.",
          ],
        },
        {
          heading: "Good to know before you pay",
          paragraphs: [
            "There are only a handful of flamingos and they stay on one of the island's two beaches. That beach has its own rules about children, so families should check the current rules with the hotel before buying passes. Go on the first boat: by late morning there is a line for the photo.",
          ],
        },
      ],
      faq: [
        ["Can you visit Flamingo Beach without staying at the Renaissance?", "Yes, with a day pass, but only a limited number are sold and they are not available every day."],
        ["Are there wild flamingos in Aruba?", "No. The flamingos on Renaissance Island are kept there by the resort. Flamingos live in the wild on nearby Bonaire."],
      ],
    },
    nl: {
      slug: "is-flamingo-beach-de-moeite-waard",
      title: "Is Flamingo Beach op Aruba de moeite waard?",
      description: "Hoe je op Renaissance Island komt, wat een dagpas kost en wanneer het hotel boeken slimmer is.",
      answer:
        "Flamingo Beach is alleen de moeite waard als de foto met een flamingo voor jou telt. Het ligt op Renaissance Island, een privé-eiland van het Renaissance-resort in Oranjestad: hotelgasten gaan gratis, alle anderen hebben een dagpas van ruwweg $125 nodig, die in kleine aantallen wordt verkocht en vaak op is. Met z'n tweeën kost één nacht in het hotel soms weinig meer dan twee passen.",
      facts: [
        ["Waar", "Renaissance Island, per boot vanuit Oranjestad"],
        ["Hotelgasten", "Gratis, onbeperkt toegang"],
        ["Dagpas", "Ongeveer $125 per volwassene, beperkt"],
        ["Verkoop van passen", "Wekelijks, volgens bezoekers op zaterdagochtend"],
        ["Oordeel", "Alleen voor de foto, of slaap in het hotel"],
      ],
      sections: [
        {
          heading: "Hoe het werkt",
          paragraphs: [
            "Vanuit de lobby van het Renaissance-hotel in het centrum van Oranjestad vertrekt een watertaxi die in ongeveer tien minuten op het eiland is. Om aan boord te mogen heb je een kamersleutel, een dagpas of een afspraak bij de spa op het eiland nodig. Het hotel verkoopt alleen passen als er ruimte is, dus in het hoogseizoen zijn er soms helemaal geen.",
          ],
        },
        {
          heading: "Voor wie is het iets",
          bullets: [
            "Gaan: Je wilt de foto met de flamingo, je vindt een rustige stranddag prima en het is gelukt een pas te krijgen.",
            "Liever een nacht boeken: Je bent met z'n tweeën of meer. Vergelijk de prijs van één nacht in het hotel met die van je passen.",
            "Overslaan: Je hebt weinig stranddagen. Eagle Beach is gratis, breder en mooier.",
          ],
        },
        {
          heading: "Goed om te weten voor je betaalt",
          paragraphs: [
            "Er lopen maar een paar flamingo's rond en ze blijven op één van de twee stranden van het eiland. Voor dat strand gelden eigen regels voor kinderen, dus vraag als gezin de actuele regels na bij het hotel voordat je passen koopt. Neem de eerste boot: aan het eind van de ochtend staat er een rij voor de foto.",
          ],
        },
      ],
      faq: [
        ["Kun je naar Flamingo Beach zonder in het Renaissance te slapen?", "Ja, met een dagpas, maar er worden er maar weinig verkocht en ze zijn niet elke dag beschikbaar."],
        ["Leven er wilde flamingo's op Aruba?", "Nee. De flamingo's op Renaissance Island worden daar door het resort gehouden. In het wild leven flamingo's op het naburige Bonaire."],
      ],
    },
  },
  {
    id: "aruba-one-week",
    destinationId: "aruba",
    type: "itineraries",
    image: "aruba-eagle",
    readMinutes: 7,
    updated: "2026-11",
    bookingQuery: "Aruba tours",
    en: {
      slug: "aruba-one-week-itinerary",
      title: "One week in Aruba: a day-by-day itinerary",
      description: "Seven days in Aruba with the right mix of beach and island, and the two things to book before you fly.",
      answer:
        "A week in Aruba works best as four beach days and three days out: a snorkeling trip, a day in Arikok National Park, and a day driving to the south of the island. Book the snorkeling catamaran and the 4x4 tour before you fly, and rent a car for two or three days rather than the whole week.",
      facts: [
        ["Book first", "Snorkeling trip, Arikok 4x4 tour"],
        ["Rental car", "2 or 3 days is enough"],
        ["Best base", "Eagle Beach for quiet, Palm Beach for nightlife"],
        ["Island size", "About 20 miles (32 km) end to end"],
        ["Money", "US dollars are accepted everywhere"],
      ],
      sections: [
        {
          heading: "Days 1 and 2: Settle in",
          bullets: [
            "Day 1: Arrive, check in, and walk straight to the beach for sunset. Aruba faces west, so every evening ends over the water.",
            "Day 2: Beach day on Eagle Beach. Find the two divi-divi trees for the photo, and walk north to Palm Beach for dinner.",
          ],
        },
        {
          heading: "Days 3 and 4: Water and wilderness",
          bullets: [
            "Day 3: Morning snorkeling catamaran to the Antilla wreck. Afternoon by the pool; you will be tired from the sun.",
            "Day 4: Arikok National Park with a 4x4 tour to the Natural Pool. Start early, before the heat.",
          ],
        },
        {
          heading: "Days 5 and 6: The rest of the island",
          bullets: [
            "Day 5: Rental car. Drive north to the California Lighthouse and Alto Vista Chapel, snorkel at Boca Catalina, and watch the kitesurfers at Fisherman's Huts.",
            "Day 6: Drive south. Street art in San Nicolas, lunch at a fish shack in Savaneta, and the afternoon in the shallow lagoon at Baby Beach.",
          ],
        },
        {
          heading: "Day 7: Last day",
          bullets: [
            "Morning: One more swim, then Oranjestad for the pastel Dutch-style buildings and last shopping.",
            "Flying to the US: Be at the airport three hours before departure. You clear US customs in Aruba, and the lines are longest on weekend afternoons.",
          ],
        },
      ],
      tip: "You can drink the tap water in Aruba. Bring a refillable bottle and skip the plastic.",
      faq: [
        ["Is one week too long for Aruba?", "No, if you mix beach days with two or three days out. For pure sightseeing, four or five days is enough."],
        ["Do you need a rental car in Aruba?", "Not for the whole stay. Two or three days cover the north, the south and the national park entrance; taxis and buses handle the rest."],
        ["Is Aruba expensive?", "Yes, compared with most of the Caribbean. Restaurant prices are close to those in a large US city, and most resorts are not all-inclusive."],
      ],
    },
    nl: {
      slug: "een-week-aruba",
      title: "Een week Aruba: een planning per dag",
      description: "Zeven dagen Aruba met de juiste mix van strand en eiland, en de twee dingen die je voor vertrek boekt.",
      answer:
        "Een week Aruba werkt het best met vier stranddagen en drie dagen eropuit: een snorkeltocht, een dag in Nationaal Park Arikok en een dag rijden naar het zuiden van het eiland. Boek de snorkelcatamaran en de 4x4-tour voor vertrek, en huur een auto voor twee of drie dagen in plaats van de hele week.",
      facts: [
        ["Eerst boeken", "Snorkeltocht, 4x4-tour door Arikok"],
        ["Huurauto", "2 of 3 dagen is genoeg"],
        ["Beste uitvalsbasis", "Eagle Beach voor rust, Palm Beach voor uitgaan"],
        ["Grootte van het eiland", "Ongeveer 32 km van punt tot punt"],
        ["Geld", "Amerikaanse dollars worden overal geaccepteerd"],
      ],
      sections: [
        {
          heading: "Dag 1 en 2: Aankomen",
          bullets: [
            "Dag 1: Aankomen, inchecken en meteen naar het strand voor de zonsondergang. Aruba ligt op het westen, dus elke avond eindigt boven het water.",
            "Dag 2: Stranddag op Eagle Beach. Zoek de twee divi-divibomen voor de foto en loop naar het noorden om op Palm Beach te eten.",
          ],
        },
        {
          heading: "Dag 3 en 4: Water en wildernis",
          bullets: [
            "Dag 3: 's Ochtends met de snorkelcatamaran naar het wrak van de Antilla. 's Middags bij het zwembad; van de zon word je moe.",
            "Dag 4: Nationaal Park Arikok met een 4x4-tour naar de Natural Pool. Begin vroeg, vóór de hitte.",
          ],
        },
        {
          heading: "Dag 5 en 6: De rest van het eiland",
          bullets: [
            "Dag 5: Huurauto. Rijd naar het noorden voor de California-vuurtoren en de kapel van Alto Vista, snorkel bij Boca Catalina en kijk naar de kitesurfers bij Fisherman's Huts.",
            "Dag 6: Rijd naar het zuiden. Muurschilderingen in San Nicolas, lunch bij een vistent in Savaneta en de middag in de ondiepe lagune van Baby Beach.",
          ],
        },
        {
          heading: "Dag 7: Laatste dag",
          bullets: [
            "Ochtend: Nog één keer zwemmen, daarna naar Oranjestad voor de pastelkleurige gevels in Hollandse stijl en de laatste inkopen.",
            "Vertrek: Vlieg je via de Verenigde Staten, wees dan drie uur voor vertrek op het vliegveld. Voor vluchten naar Nederland geldt de gewone tijd van je luchtvaartmaatschappij.",
          ],
        },
      ],
      tip: "Het kraanwater op Aruba kun je drinken. Neem een hervulbare fles mee en laat het plastic staan.",
      faq: [
        ["Is een week te lang voor Aruba?", "Nee, als je stranddagen afwisselt met twee of drie dagen eropuit. Alleen voor bezienswaardigheden is vier of vijf dagen genoeg."],
        ["Heb je een huurauto nodig op Aruba?", "Niet voor het hele verblijf. In twee of drie dagen zie je het noorden, het zuiden en de ingang van het nationaal park; voor de rest zijn er taxi's en bussen."],
        ["Is Aruba duur?", "Ja, vergeleken met de rest van het Caribisch gebied. Restaurantprijzen liggen hoger dan in Nederland, en de meeste resorts zijn niet all-inclusive."],
      ],
    },
  },
  {
    id: "aruba-hidden-gems",
    destinationId: "aruba",
    type: "hiddenGems",
    image: "aruba-mangel",
    readMinutes: 6,
    updated: "2026-11",
    bookingQuery: "Aruba island tour",
    en: {
      slug: "hidden-gems",
      title: "Hidden gems in Aruba: 9 places beyond the hotel strip",
      description: "Nine places most Aruba visitors never see: a mangrove lagoon, a town covered in murals and a fish shack on a pier.",
      answer:
        "The best hidden places in Aruba are in the south, half an hour from the hotels: the mangrove lagoon of Mangel Halto, the murals of San Nicolas and the shallow bay of Baby Beach. All three are free. You need a rental car for a day, and you will share them mostly with locals.",
      facts: [
        ["Cost", "Free, apart from food and gear"],
        ["Transport", "Rental car for one day"],
        ["Best area", "Savaneta and San Nicolas, in the south"],
        ["Drive from Palm Beach", "30 to 45 minutes to the far south"],
      ],
      sections: [
        {
          heading: "The nine places",
          bullets: [
            "Mangel Halto: A calm lagoon between mangroves with wooden decks to enter the water. Some of the best shore snorkeling on the island.",
            "San Nicolas: The island's second town, with dozens of large murals on its walls. Walk the main street and the blocks around it.",
            "Baby Beach: A wide, shallow lagoon at the southern tip. You can walk far out with the water at your waist.",
            "The fish shacks of Savaneta: The catch of the day, fried and served on a pier, paid by weight. Go for lunch.",
            "Alto Vista Chapel: A small yellow chapel alone on a hill on the north coast. Quiet early in the morning.",
            "Bushiribana ruins: The stone shell of a 19th-century gold smelter, facing the surf.",
            "Tres Trapi: Three steps cut into the rock lead into clear water where sea turtles often feed.",
            "The Donkey Sanctuary: Volunteers care for the island's donkeys. Free to visit, and children can feed them.",
            "Arashi Beach at sunset: The last beach before the lighthouse. Locals come here when the hotel beaches are full.",
          ],
        },
        {
          heading: "How to combine them",
          paragraphs: [
            "Do the south in one day: Mangel Halto in the morning while the water is calm, lunch in Savaneta, the murals of San Nicolas after lunch, and Baby Beach for the afternoon. The north coast places, the chapel, the ruins and Tres Trapi, fit together in a morning on the way to the lighthouse.",
          ],
        },
      ],
      tip: "At Mangel Halto, stay inside the reef unless you are a strong swimmer. The current outside it is stronger than it looks.",
      faq: [
        ["Where can you see sea turtles in Aruba?", "Tres Trapi and Boca Catalina on the northwest coast are the most reliable spots from shore. Keep your distance and never touch them."],
        ["Is San Nicolas worth visiting?", "Yes, for the murals and for a look at Aruba away from tourism. An hour or two is enough."],
      ],
    },
    nl: {
      slug: "verborgen-plekken",
      title: "Verborgen plekken op Aruba: 9 plekken buiten de hotelstrook",
      description: "Negen plekken die de meeste bezoekers van Aruba nooit zien: een lagune tussen mangroven, een stad vol muurschilderingen en een vistent op een pier.",
      answer:
        "De mooiste verborgen plekken op Aruba liggen in het zuiden, een half uur van de hotels: de mangrovelagune Mangel Halto, de muurschilderingen van San Nicolas en de ondiepe baai Baby Beach. Alle drie zijn gratis. Je hebt een dag een huurauto nodig, en je deelt ze vooral met Arubanen.",
      facts: [
        ["Kosten", "Gratis, op eten en uitrusting na"],
        ["Vervoer", "Eén dag een huurauto"],
        ["Beste gebied", "Savaneta en San Nicolas, in het zuiden"],
        ["Rijden vanaf Palm Beach", "30 tot 45 minuten naar het uiterste zuiden"],
      ],
      sections: [
        {
          heading: "De negen plekken",
          bullets: [
            "Mangel Halto: Een rustige lagune tussen mangroven, met houten vlonders om het water in te gaan. Hier snorkel je vanaf de kant met het mooiste van het eiland.",
            "San Nicolas: De tweede stad van het eiland, met tientallen grote muurschilderingen. Loop door de hoofdstraat en de blokken eromheen.",
            "Baby Beach: Een brede, ondiepe lagune op de zuidpunt. Je loopt er ver in met het water tot je middel.",
            "De vistenten van Savaneta: De vangst van de dag, gebakken en geserveerd op een pier, betaald per gewicht. Ga er lunchen.",
            "Kapel van Alto Vista: Een kleine gele kapel, alleen op een heuvel aan de noordkust. Vroeg in de ochtend is het er stil.",
            "Ruïnes van Bushiribana: Het stenen omhulsel van een goudsmelterij uit de 19e eeuw, met uitzicht op de branding.",
            "Tres Trapi: Drie in de rots uitgehakte treden leiden naar helder water waar vaak zeeschildpadden eten.",
            "De ezelopvang: Vrijwilligers zorgen voor de ezels van het eiland. Gratis te bezoeken, en kinderen mogen ze voeren.",
            "Arashi Beach bij zonsondergang: Het laatste strand voor de vuurtoren. Arubanen komen hier als de hotelstranden vol zijn.",
          ],
        },
        {
          heading: "Hoe je ze combineert",
          paragraphs: [
            "Doe het zuiden in één dag: 's ochtends Mangel Halto, als het water rustig is, lunch in Savaneta, daarna de muurschilderingen van San Nicolas en de middag op Baby Beach. De plekken aan de noordkust, de kapel, de ruïnes en Tres Trapi, passen samen in een ochtend op weg naar de vuurtoren.",
          ],
        },
      ],
      tip: "Blijf bij Mangel Halto binnen het rif, tenzij je een sterke zwemmer bent. De stroming daarbuiten is sterker dan hij lijkt.",
      faq: [
        ["Waar zie je zeeschildpadden op Aruba?", "Bij Tres Trapi en Boca Catalina aan de noordwestkust heb je vanaf de kant de meeste kans. Houd afstand en raak ze nooit aan."],
        ["Is San Nicolas een bezoek waard?", "Ja, voor de muurschilderingen en om Aruba zonder toerisme te zien. Een uur of twee is genoeg."],
      ],
    },
  },
  {
    id: "aruba-best-time",
    destinationId: "aruba",
    type: "practical",
    image: "aruba-lighthouse",
    readMinutes: 4,
    updated: "2026-11",
    en: {
      slug: "best-time-to-visit-aruba",
      title: "Best time to visit Aruba: weather, prices and hurricane season",
      description: "Aruba is warm all year and outside the hurricane belt. What changes by season is the price and the wind.",
      answer:
        "Aruba is good to visit all year: temperatures stay between 80°F and 90°F (27°C to 32°C) and the island lies outside the hurricane belt. The cheapest months are mid-April to mid-December, when hotel rates drop while the weather barely changes. Expect short showers from October to December and the highest prices from Christmas to Easter.",
      facts: [
        ["Temperature", "80°F to 90°F (27°C to 32°C) all year"],
        ["Rain", "About 18 inches (460 mm) a year"],
        ["Showers", "October to December, short"],
        ["Hurricanes", "Outside the belt, extremely rare"],
        ["Highest prices", "Christmas to Easter"],
        ["Windiest", "May to October"],
      ],
      sections: [
        {
          heading: "Season by season",
          bullets: [
            "Mid-December to mid-April: High season. Americans and Canadians escape winter, hotels fill and rates peak. Book months ahead.",
            "Mid-April to August: The same sun at lower prices. The trade winds are strongest, which keeps the heat comfortable and draws kitesurfers.",
            "September to mid-December: The quietest period. The wind can drop for a few days, which makes it feel hotter, and showers pass through from October.",
          ],
        },
        {
          heading: "Why hurricane season matters less here",
          paragraphs: [
            "Aruba sits far south in the Caribbean, close to the coast of Venezuela, well below the usual path of Atlantic hurricanes. That makes it one of the safest Caribbean choices from June to November, when other islands carry real storm risk. Passing storms further north can still bring a still, humid day or a few showers.",
          ],
        },
      ],
      tip: "The breeze hides how strong the sun is. Aruba is only twelve degrees from the equator: you burn in twenty minutes without noticing.",
      faq: [
        ["Does Aruba get hurricanes?", "Almost never. The island lies south of the main Atlantic hurricane belt, and direct hits are extremely rare."],
        ["What is the rainy season in Aruba?", "October to December, but it means brief showers rather than days of rain. The island gets only about 18 inches (460 mm) a year."],
        ["When is the cheapest time to go to Aruba?", "From mid-April to mid-December, outside the winter high season. September and October are usually the lowest."],
      ],
    },
    nl: {
      slug: "beste-reistijd-aruba",
      title: "Beste reistijd voor Aruba: weer, prijzen en orkaanseizoen",
      description: "Aruba is het hele jaar warm en ligt buiten de orkaangordel. Wat per seizoen verandert, zijn de prijs en de wind.",
      answer:
        "Aruba kun je het hele jaar bezoeken: de temperatuur blijft tussen 27 °C en 32 °C en het eiland ligt buiten de orkaangordel. De goedkoopste maanden zijn half april tot half december, als de hotelprijzen dalen terwijl het weer nauwelijks verandert. Reken op korte buien van oktober tot en met december en op de hoogste prijzen van kerst tot Pasen.",
      facts: [
        ["Temperatuur", "27 °C tot 32 °C, het hele jaar"],
        ["Regen", "Ongeveer 460 mm per jaar"],
        ["Buien", "Oktober tot en met december, kort"],
        ["Orkanen", "Buiten de gordel, uiterst zeldzaam"],
        ["Hoogste prijzen", "Kerst tot Pasen"],
        ["Meeste wind", "Mei tot en met oktober"],
      ],
      sections: [
        {
          heading: "Per seizoen",
          bullets: [
            "Half december tot half april: Hoogseizoen. Amerikanen en Canadezen ontvluchten de winter, hotels zitten vol en de prijzen pieken. Boek maanden vooruit.",
            "Half april tot en met augustus: Dezelfde zon voor lagere prijzen. De passaatwind is het sterkst, wat de warmte aangenaam houdt en kitesurfers trekt. Let op de prijzen rond de Nederlandse zomervakantie.",
            "September tot half december: De rustigste periode. De wind kan een paar dagen wegvallen, waardoor het warmer voelt, en vanaf oktober trekken er buien over.",
          ],
        },
        {
          heading: "Waarom het orkaanseizoen hier minder telt",
          paragraphs: [
            "Aruba ligt ver in het zuiden van het Caribisch gebied, dicht bij de kust van Venezuela, ruim onder de gebruikelijke route van Atlantische orkanen. Daardoor is het een van de veiligste Caribische keuzes van juni tot en met november, als andere eilanden echt stormrisico lopen. Stormen die noordelijker overtrekken, kunnen nog wel een windstille, benauwde dag of een paar buien geven.",
          ],
        },
      ],
      tip: "De wind verbergt hoe sterk de zon is. Aruba ligt maar twaalf graden van de evenaar: je verbrandt in twintig minuten zonder het te merken.",
      faq: [
        ["Komen er orkanen op Aruba?", "Bijna nooit. Het eiland ligt ten zuiden van de Atlantische orkaangordel en voltreffers zijn uiterst zeldzaam."],
        ["Wanneer is het regenseizoen op Aruba?", "Van oktober tot en met december, maar dat betekent korte buien en geen dagen regen. Er valt maar ongeveer 460 mm per jaar."],
        ["Wanneer is Aruba het goedkoopst?", "Van half april tot half december, buiten het winterse hoogseizoen. September en oktober zijn meestal het laagst."],
      ],
    },
  },
  {
    id: "aruba-airport",
    destinationId: "aruba",
    type: "practical",
    image: "aruba-airport",
    readMinutes: 5,
    updated: "2026-11",
    bookingQuery: "Aruba airport transfer",
    en: {
      slug: "aruba-airport-to-hotel",
      title: "Aruba airport to your hotel: taxi fares, entry card and flying home",
      description: "Fixed taxi fares from Aruba airport, the entry card to fill in before you fly, and why you need three hours on the way back.",
      answer:
        "A taxi from Aruba's airport costs a fixed $37 to the Eagle Beach hotels and $41 to the Palm Beach hotels, per car for up to four people. Before you fly, fill in the free online ED card and pay the $20 sustainability fee. On the way home to the US, be at the airport three hours early: you clear US customs in Aruba.",
      facts: [
        ["Taxi to Oranjestad", "$26 per car"],
        ["Taxi to Eagle Beach", "$37 per car"],
        ["Taxi to Palm Beach", "$41 per car"],
        ["Surcharge", "$5 on Sundays, holidays and 11 pm to 7 am"],
        ["Entry", "Online ED card plus $20 fee"],
        ["Flying to the US", "Arrive 3 hours before departure"],
      ],
      sections: [
        {
          heading: "Taxis",
          paragraphs: [
            "Taxis have no meters. The government sets a fixed fare per destination, and the fare is for the car, not per person. It covers up to four passengers with one suitcase and one carry-on each; extra bags cost $3. Pay in US dollars, in cash unless the driver confirms cards first. Uber and Lyft do not operate in Aruba.",
          ],
        },
        {
          heading: "Before you fly: the ED card",
          bullets: [
            "What it is: Aruba's online embarkation and disembarkation card. Every traveler needs one, including children.",
            "When: You can fill it in from seven days before departure. Do it before you leave for the airport.",
            "What it costs: The card is free. Most visitors arriving by air pay a $20 sustainability fee with it. Children under 8 are exempt.",
            "Where: Only on the official Aruba site. Other sites charge a fee for the same form.",
          ],
        },
        {
          heading: "Flying home to the US",
          paragraphs: [
            "Aruba has US preclearance: you go through US immigration and customs before boarding and land in the US as a domestic passenger. It saves time on arrival but adds a second set of lines in Aruba. The airport asks US-bound passengers to arrive three hours before departure, and the busiest period is Friday to Sunday from late morning to mid-afternoon.",
          ],
        },
        {
          heading: "Rental car or taxi",
          bullets: [
            "Taxi: Best for a stay of a week on one beach with a couple of tours. Two airport rides cost about $80.",
            "Rental car: Worth it if you want to explore the south and the north coast on your own. Rent it for two or three days from your hotel area rather than the whole week.",
          ],
        },
      ],
      faq: [
        ["How much is a taxi from Aruba airport to Palm Beach?", "A fixed $41 per car for up to four passengers, plus $5 on Sundays, public holidays and at night."],
        ["Is there Uber in Aruba?", "No. Uber and Lyft do not operate in Aruba. Use the official taxis with fixed fares."],
        ["Do US citizens need a visa for Aruba?", "No. A valid passport, the online ED card and the sustainability fee are enough for a normal vacation stay."],
      ],
    },
    nl: {
      slug: "van-vliegveld-aruba-naar-je-hotel",
      title: "Van vliegveld Aruba naar je hotel: taxitarieven en de ED-card",
      description: "De vaste taxitarieven vanaf het vliegveld van Aruba en de ED-card die je voor vertrek invult.",
      answer:
        "Een taxi vanaf het vliegveld van Aruba kost een vast tarief van $37 naar de hotels aan Eagle Beach en $41 naar de hotels aan Palm Beach, per auto voor maximaal vier personen. Vul voor vertrek de gratis online ED-card in en betaal de duurzaamheidsbijdrage van $20. Vlieg je terug via de Verenigde Staten, wees dan drie uur voor vertrek op het vliegveld.",
      facts: [
        ["Taxi naar Oranjestad", "$26 per auto"],
        ["Taxi naar Eagle Beach", "$37 per auto"],
        ["Taxi naar Palm Beach", "$41 per auto"],
        ["Toeslag", "$5 op zondag, feestdagen en van 23.00 tot 7.00 uur"],
        ["Toegang", "Online ED-card plus $20 bijdrage"],
        ["Betalen", "Amerikaanse dollars, meestal contant"],
      ],
      sections: [
        {
          heading: "Taxi's",
          paragraphs: [
            "Taxi's hebben geen meter. De overheid stelt per bestemming een vast tarief vast, en dat geldt voor de auto, niet per persoon. Het dekt maximaal vier passagiers met elk één koffer en één stuk handbagage; extra koffers kosten $3. Betaal in Amerikaanse dollars, contant tenzij de chauffeur vooraf bevestigt dat pinnen kan. Uber en Lyft rijden niet op Aruba.",
          ],
        },
        {
          heading: "Voor vertrek: de ED-card",
          bullets: [
            "Wat het is: De online in- en uitreiskaart van Aruba. Elke reiziger heeft er een nodig, ook kinderen.",
            "Wanneer: Je kunt hem invullen vanaf zeven dagen voor vertrek. Doe het voordat je naar het vliegveld gaat.",
            "Wat het kost: De kaart is gratis. De meeste bezoekers die per vliegtuig aankomen, betalen er een duurzaamheidsbijdrage van $20 bij. Kinderen onder de 8 zijn vrijgesteld.",
            "Waar: Alleen op de officiële site van Aruba. Andere sites vragen geld voor hetzelfde formulier.",
          ],
        },
        {
          heading: "Terugvliegen",
          paragraphs: [
            "Vlieg je rechtstreeks naar Nederland, dan geldt de gewone inchecktijd van je luchtvaartmaatschappij. Vlieg je via de Verenigde Staten, dan ga je op Aruba al door de Amerikaanse grenscontrole. Het vliegveld vraagt die passagiers om drie uur voor vertrek aanwezig te zijn; van vrijdag tot en met zondag is het rond het middaguur het drukst.",
          ],
        },
        {
          heading: "Huurauto of taxi",
          bullets: [
            "Taxi: Het best voor een week op één strand met een paar tours. Twee ritten van en naar het vliegveld kosten samen ongeveer $80.",
            "Huurauto: De moeite waard als je zelf het zuiden en de noordkust wilt verkennen. Huur hem twee of drie dagen bij je hotel in plaats van de hele week.",
          ],
        },
      ],
      faq: [
        ["Wat kost een taxi van het vliegveld van Aruba naar Palm Beach?", "Een vast tarief van $41 per auto voor maximaal vier personen, plus $5 op zondag, op feestdagen en 's nachts."],
        ["Is er Uber op Aruba?", "Nee. Uber en Lyft rijden niet op Aruba. Neem de officiële taxi's met vaste tarieven."],
        ["Kun je op Aruba met euro's betalen?", "Reken er niet op. De Arubaanse florin en de Amerikaanse dollar zijn de gangbare munten; pinnen met een Nederlandse pas kan op de meeste plekken."],
      ],
    },
  },
  {
    id: "aruba-shore-excursions",
    destinationId: "aruba",
    type: "shoreExcursions",
    image: "aruba-cruise",
    readMinutes: 5,
    updated: "2026-11",
    bookingQuery: "Aruba shore excursion",
    en: {
      slug: "best-shore-excursions",
      title: "Aruba cruise port: the best shore excursions and what to do on your own",
      description: "How to spend a port day in Aruba: what is in walking distance, which excursions are worth booking, and how to be back on time.",
      answer:
        "With one day in port, the best use of your time in Aruba is either a beach day at Eagle Beach, a ten-minute taxi ride from the ship, or a morning snorkeling catamaran to the Antilla wreck. The ship docks in downtown Oranjestad, so shops and restaurants are a five to ten-minute walk and need no excursion at all.",
      facts: [
        ["Port", "Downtown Oranjestad"],
        ["Walk to main street", "5 to 10 minutes"],
        ["Nearest beach", "Surfside Beach, 15 minutes on foot"],
        ["Eagle Beach", "About 10 minutes by taxi"],
        ["Taxis", "Fixed fares per car, no meters"],
        ["Fees", "No ED card fee for cruise passengers"],
      ],
      sections: [
        {
          heading: "The four best ways to spend the day",
          bullets: [
            "Beach day on your own: Taxi to Eagle Beach, rent chairs and stay until two hours before all-aboard. The cheapest good option.",
            "Snorkeling catamaran: Three hours on the water with stops at the Antilla wreck and a reef. Book one that picks up at the port.",
            "Island tour by 4x4: The north coast, the lighthouse, the chapel and the Natural Pool in half a day. Rough roads; not for bad backs.",
            "Oranjestad on foot: Pastel buildings, the waterfront and lunch. Easy, free and good for a short call.",
          ],
        },
        {
          heading: "Ship excursion or independent",
          paragraphs: [
            "Independent tours are usually cheaper and smaller than the ship's own. The trade-off is the clock: the ship waits for its own excursions, not for you. Choose tours that end at least two hours before all-aboard and that promise to return you to the port. Aruba is small and traffic is light, so delays are rare, but check the time difference between ship time and island time when you step off.",
          ],
        },
        {
          heading: "Getting around from the port",
          paragraphs: [
            "Taxis wait outside the terminal and charge a fixed fare per car, set by the government. Agree on the fare before you get in and pay in US dollars. Public buses to the beaches leave from the station across the road from the terminal. Renting a car for a single port day is rarely worth the paperwork.",
          ],
        },
      ],
      tip: "Aruba is one of the few Caribbean ports where you can simply walk off the ship into town. If you only want a look around, save the excursion money for another island.",
      faq: [
        ["Can you walk from the Aruba cruise port to a beach?", "Yes, to Surfside Beach in about 15 minutes. Eagle Beach and Palm Beach are nicer and need a taxi or bus."],
        ["How far is Eagle Beach from the cruise port?", "About ten minutes by car."],
        ["Do cruise passengers pay the Aruba sustainability fee?", "No. The $20 fee applies only to visitors arriving through the airport."],
      ],
    },
  },
];
