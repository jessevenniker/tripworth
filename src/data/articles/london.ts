import type { Article } from "../articles";

// Fact check, 16 November 2026. Sources, changes and the items that could not be
// verified on an official page are logged per article in FACTCHECK.md.

export const londonArticles: Article[] = [
  {
    id: "london-tower",
    destinationId: "london",
    type: "tickets",
    image: "ldn-tower",
    readMinutes: 4,
    updated: "2026-11",
    bookingQuery: "Tower of London tickets Crown Jewels",
    en: {
      slug: "tower-of-london-tickets",
      title: "Tower of London tickets: price, Crown Jewels and the best time to go",
      description: "What a Tower of London ticket costs, what it includes and how to see the Crown Jewels without the line.",
      answer:
        "A Tower of London ticket costs £38 for adults and includes the Crown Jewels, the White Tower and a tour with a Yeoman Warder. Book online for a date in advance, arrive at opening and walk straight to the Crown Jewels: the line there is the longest in the fortress by late morning. Allow three hours.",
      facts: [
        ["Adult ticket", "£38, children 5 to 15 £19"],
        ["Includes", "Crown Jewels, White Tower, Yeoman Warder tour"],
        ["Time needed", "3 hours"],
        ["Best time", "At opening, on a weekday"],
        ["Nearest Tube", "Tower Hill"],
      ],
      sections: [
        {
          heading: "What you see",
          bullets: [
            "The Crown Jewels: The working regalia of the British monarchy, including the crown used at coronations. You pass them on a moving walkway.",
            "The White Tower: The Norman keep at the centre, about 950 years old, with the royal armour collection.",
            "The Yeoman Warder tour: An hour with one of the Beefeaters who live in the Tower. Included, funny and the best introduction to the place.",
            "The ravens: Legend says the kingdom falls if they leave. Their wings are clipped to be safe.",
          ],
        },
        {
          heading: "How to plan the visit",
          paragraphs: [
            "Go to the Crown Jewels first, then join the next Yeoman Warder tour from the entrance, and finish with the White Tower and a walk along the walls. Tower Bridge is next door and makes a natural follow-up; its glass walkway needs a separate ticket.",
          ],
        },
        {
          heading: "Ticket or pass",
          bullets: [
            "Single ticket: Right if the Tower is one of only two or three paid sights on your trip.",
            "London Pass: Includes the Tower. Worth it only if you fill each pass day with several paid sights.",
            "Guided tour with early access: Enters before the public for an almost empty Crown Jewels room. Costs about twice as much.",
          ],
        },
      ],
      tip: "The Ceremony of the Keys, the locking of the Tower every night, has taken place for about 700 years. Tickets are cheap, limited and sell out months ahead.",
      faq: [
        ["Are the Crown Jewels included in the Tower of London ticket?", "Yes. They are an exhibition inside the Tower and need no separate ticket."],
        ["How long do you need at the Tower of London?", "About three hours, including the Yeoman Warder tour and the Crown Jewels."],
        ["Is the Tower of London worth it?", "Yes. It is the most complete historic site in London, and the tour with a Yeoman Warder alone is worth the visit."],
      ],
    },
    nl: {
      slug: "tower-of-london-tickets",
      title: "Tower of London-tickets: prijs, kroonjuwelen en het beste moment",
      description: "Wat een ticket voor de Tower of London kost, wat erbij zit en hoe je de kroonjuwelen ziet zonder rij.",
      answer:
        "Een ticket voor de Tower of London kost £38 voor volwassenen en is inclusief de kroonjuwelen, de White Tower en een rondleiding met een Yeoman Warder. Boek vooraf online voor een vaste datum, kom bij opening en loop meteen door naar de kroonjuwelen: daar staat aan het eind van de ochtend de langste rij van het fort. Reken op drie uur.",
      facts: [
        ["Ticket volwassene", "£38, kinderen van 5 t/m 15 £19"],
        ["Inclusief", "Kroonjuwelen, White Tower, rondleiding"],
        ["Benodigde tijd", "3 uur"],
        ["Beste moment", "Bij opening, op een doordeweekse dag"],
        ["Metrostation", "Tower Hill"],
      ],
      sections: [
        {
          heading: "Wat je ziet",
          bullets: [
            "De kroonjuwelen: De regalia die het Britse koningshuis nog gebruikt, waaronder de kroon van de kroningen. Je glijdt erlangs op een rolband.",
            "De White Tower: De Normandische burchttoren in het midden, ongeveer 950 jaar oud, met de koninklijke wapenrustingen.",
            "De rondleiding met een Yeoman Warder: Een uur met een van de Beefeaters die in de Tower wonen. Inbegrepen, grappig en de beste introductie.",
            "De raven: Volgens de legende valt het koninkrijk als ze vertrekken. Voor de zekerheid zijn hun vleugels gekortwiekt.",
          ],
        },
        {
          heading: "Hoe je het bezoek indeelt",
          paragraphs: [
            "Ga eerst naar de kroonjuwelen, sluit daarna bij de ingang aan bij de eerstvolgende rondleiding en eindig met de White Tower en een wandeling over de muren. De Tower Bridge ligt ernaast en is een logisch vervolg; voor de glazen loopbrug heb je een apart ticket nodig.",
          ],
        },
        {
          heading: "Los ticket of pas",
          bullets: [
            "Los ticket: Goed als de Tower een van de twee of drie betaalde bezienswaardigheden van je reis is.",
            "London Pass: De Tower zit erbij. Loont alleen als je elke dag van de pas vult met meerdere betaalde bezienswaardigheden.",
            "Rondleiding met vroege toegang: Je gaat vóór het publiek naar binnen en ziet de kroonjuwelen in een bijna lege zaal. Kost ongeveer het dubbele.",
          ],
        },
      ],
      tip: "De Ceremony of the Keys, het afsluiten van de Tower, vindt al ongeveer 700 jaar elke avond plaats. Kaartjes zijn goedkoop, beperkt en maanden vooruit uitverkocht.",
      faq: [
        ["Zitten de kroonjuwelen bij het ticket voor de Tower of London?", "Ja. Het is een tentoonstelling in de Tower waarvoor je geen apart ticket nodig hebt."],
        ["Hoeveel tijd heb je nodig in de Tower of London?", "Ongeveer drie uur, inclusief de rondleiding en de kroonjuwelen."],
        ["Is de Tower of London de moeite waard?", "Ja. Het is de meest complete historische plek van Londen, en alleen de rondleiding met een Yeoman Warder is het bezoek al waard."],
      ],
    },
  },
  {
    id: "london-westminster-abbey",
    destinationId: "london",
    type: "tickets",
    image: "ldn-abbey",
    readMinutes: 4,
    updated: "2026-11",
    bookingQuery: "Westminster Abbey tickets",
    en: {
      slug: "westminster-abbey-tickets",
      title: "Westminster Abbey tickets: price, opening days and what is included",
      description: "What Westminster Abbey costs, when visitors can enter and how to see it for free.",
      answer:
        "Westminster Abbey costs £32 for adults and £14 for children aged 6 to 17, with a multimedia guide included. Book a timed ticket online, and check the day: the Abbey is a working church, closes to sightseers for services and is not open for visits on Sundays. An hour and a half is enough.",
      facts: [
        ["Adult ticket", "£32"],
        ["Children 6 to 17", "£14, under 6 free"],
        ["Includes", "Multimedia guide in 14 languages"],
        ["Sundays", "Services only, no sightseeing"],
        ["Time needed", "1.5 hours"],
        ["Nearest Tube", "Westminster"],
      ],
      sections: [
        {
          heading: "What you see",
          paragraphs: [
            "Every English and British coronation since 1066 has taken place here. The route leads past the Coronation Chair, the tombs of Elizabeth I and Mary, Queen of Scots, and Poets' Corner, where Chaucer, Dickens and many others are buried or remembered. The cloisters and the Chapter House are included.",
          ],
        },
        {
          heading: "How to visit for free",
          paragraphs: [
            "Attending a service costs nothing. Evensong, sung by the Abbey choir on most weekday afternoons, lets you sit in the quire for 45 minutes. You cannot walk around or take photos, but you hear the building used as it was meant to be.",
          ],
        },
        {
          heading: "Combining it",
          bullets: [
            "Big Ben and Parliament: Across the street. The best photo is from Westminster Bridge.",
            "Changing of the Guard: A 15-minute walk through St James's Park to Buckingham Palace. It does not take place every day, so check the schedule.",
            "Churchill War Rooms: Five minutes away. The underground wartime headquarters, with its own ticket.",
          ],
        },
      ],
      tip: "Opening hours are shorter than at most sights, and last entry is mid-afternoon. Make the Abbey your first stop of the day, not your last.",
      faq: [
        ["How much is Westminster Abbey?", "£32 for adults, £29 for students and visitors over 65, and £14 for children aged 6 to 17."],
        ["Is Westminster Abbey open on Sundays?", "Only for worship. Sightseeing visits take place from Monday to Saturday."],
        ["Is Westminster Abbey worth the price?", "Yes, if British history interests you. For the building and the music alone, attend Evensong for free."],
      ],
    },
    nl: {
      slug: "westminster-abbey-tickets",
      title: "Westminster Abbey-tickets: prijs, openingsdagen en wat erbij zit",
      description: "Wat Westminster Abbey kost, wanneer je als bezoeker naar binnen kunt en hoe je de kerk gratis ziet.",
      answer:
        "Westminster Abbey kost £32 voor volwassenen en £14 voor kinderen van 6 tot en met 17 jaar, inclusief een multimediagids. Boek online een ticket met tijdslot en let op de dag: de Abbey is een kerk in gebruik, gaat voor diensten dicht voor bezoekers en is op zondag niet te bezichtigen. Anderhalf uur is genoeg.",
      facts: [
        ["Ticket volwassene", "£32"],
        ["Kinderen 6 t/m 17", "£14, onder 6 gratis"],
        ["Inclusief", "Multimediagids in 14 talen"],
        ["Zondag", "Alleen diensten, geen bezichtiging"],
        ["Benodigde tijd", "1,5 uur"],
        ["Metrostation", "Westminster"],
      ],
      sections: [
        {
          heading: "Wat je ziet",
          paragraphs: [
            "Elke Engelse en Britse kroning sinds 1066 vond hier plaats. De route voert langs de kroningsstoel, de graven van Elizabeth I en Mary Stuart, en Poets' Corner, waar Chaucer, Dickens en vele anderen begraven liggen of herdacht worden. De kloostergangen en de kapittelzaal zitten erbij.",
          ],
        },
        {
          heading: "Hoe je er gratis binnenkomt",
          paragraphs: [
            "Een dienst bijwonen kost niets. Bij de Evensong, op de meeste doordeweekse middagen gezongen door het koor van de Abbey, zit je drie kwartier in het koor. Rondlopen en fotograferen mag niet, maar je hoort het gebouw zoals het bedoeld is.",
          ],
        },
        {
          heading: "Combineren",
          bullets: [
            "Big Ben en het parlement: Aan de overkant van de straat. De mooiste foto maak je vanaf Westminster Bridge.",
            "Wisseling van de wacht: Een kwartier lopen door St James's Park naar Buckingham Palace. De wisseling is niet elke dag, dus bekijk het schema.",
            "Churchill War Rooms: Op vijf minuten. Het ondergrondse hoofdkwartier uit de oorlog, met een eigen ticket.",
          ],
        },
      ],
      tip: "De openingstijden zijn korter dan bij de meeste bezienswaardigheden, en de laatste toegang is halverwege de middag. Maak van de Abbey je eerste stop van de dag, niet je laatste.",
      faq: [
        ["Wat kost Westminster Abbey?", "£32 voor volwassenen, £29 voor studenten en 65-plussers, en £14 voor kinderen van 6 tot en met 17 jaar."],
        ["Is Westminster Abbey op zondag open?", "Alleen voor kerkdiensten. Bezichtigen kan van maandag tot en met zaterdag."],
        ["Is Westminster Abbey de prijs waard?", "Ja, als de Britse geschiedenis je interesseert. Voor alleen het gebouw en de muziek kun je gratis de Evensong bijwonen."],
      ],
    },
  },
  {
    id: "london-harry-potter",
    destinationId: "london",
    type: "tickets",
    image: "ldn-potter",
    readMinutes: 4,
    updated: "2026-11",
    bookingQuery: "Harry Potter Warner Bros Studio Tour London tickets transfer",
    en: {
      slug: "harry-potter-studio-tour-tickets",
      title: "Harry Potter Studio Tour tickets: price, how to get there and what to do when it is sold out",
      description: "What the Warner Bros. Studio Tour costs, how far ahead to book and how to get tickets when the official site has none.",
      answer:
        "Tickets for the Warner Bros. Studio Tour cost £58.50 for adults and £47 for children aged 5 to 15, and must be booked in advance for a timed slot. Popular dates sell out weeks or months ahead. If the official site is full, a package with coach transfer from central London, from about £94, often still has places.",
      facts: [
        ["Adult ticket", "£58.50"],
        ["Children 5 to 15", "£47, under 4s free"],
        ["With coach from London", "From about £94"],
        ["Book ahead", "As early as possible; no tickets at the door"],
        ["Where", "Leavesden, near Watford, north-west of London"],
        ["Time needed", "3.5 to 4 hours, plus travel"],
      ],
      sections: [
        {
          heading: "What it is",
          paragraphs: [
            "This is not a theme park: there are no rides. It is the studio where the films were made, with the original sets, costumes and props. You walk through the Great Hall, Diagon Alley and the Forbidden Forest, board the Hogwarts Express and end at the huge scale model of the castle used for the wide shots.",
          ],
        },
        {
          heading: "How to get there",
          bullets: [
            "Train and shuttle: A fast train from London Euston to Watford Junction takes about 20 minutes, then a shuttle bus runs to the studio. Cheapest, and you choose your own time.",
            "Coach package: A return coach from central London with the ticket included. Costs more, but solves both the transport and the sold-out problem.",
            "By car: Free parking at the studio. Handy if you rent a car for a trip beyond London anyway.",
          ],
        },
        {
          heading: "When it is sold out",
          bullets: [
            "Check for returns: Cancelled slots reappear on the official site, often a few days ahead.",
            "Look at packages: Tour companies hold their own tickets, sold with transport.",
            "Try weekdays in term time: Late slots on school days are the last to go.",
          ],
        },
      ],
      tip: "Butterbeer is sold halfway through the tour. Share one first: it is very sweet.",
      faq: [
        ["How much are Harry Potter Studio Tour tickets?", "£58.50 for adults and £47 for children aged 5 to 15 in 2026. A family ticket costs £188."],
        ["Can you buy tickets at the door?", "No. Every ticket is for a booked time slot and must be bought in advance."],
        ["Is the Harry Potter Studio Tour worth it?", "Yes for fans of the films, including adults. If nobody in your group has seen them, spend the half day in London instead."],
      ],
    },
    nl: {
      slug: "harry-potter-studio-tour-tickets",
      title: "Tickets voor de Harry Potter Studio Tour: prijs, vervoer en wat je doet als het vol is",
      description: "Wat de Warner Bros. Studio Tour kost, hoe ver vooruit je boekt en hoe je aan tickets komt als de officiële site vol is.",
      answer:
        "Tickets voor de Warner Bros. Studio Tour kosten £58,50 voor volwassenen en £47 voor kinderen van 5 tot en met 15 jaar, en je moet ze vooraf boeken voor een vast tijdslot. Populaire data zijn weken of maanden vooruit uitverkocht. Is de officiële site vol, dan is er vaak nog plek in een pakket met busvervoer vanuit het centrum van Londen, vanaf ongeveer £94.",
      facts: [
        ["Ticket volwassene", "£58,50"],
        ["Kinderen 5 t/m 15", "£47, onder 4 jaar gratis"],
        ["Met bus vanuit Londen", "Vanaf ongeveer £94"],
        ["Vooruit boeken", "Zo vroeg mogelijk; geen verkoop aan de deur"],
        ["Waar", "Leavesden, bij Watford, ten noordwesten van Londen"],
        ["Benodigde tijd", "3,5 tot 4 uur, plus reistijd"],
      ],
      sections: [
        {
          heading: "Wat het is",
          paragraphs: [
            "Dit is geen pretpark: er zijn geen attracties. Het is de studio waar de films zijn gemaakt, met de originele decors, kostuums en rekwisieten. Je loopt door de Grote Zaal, de Wegisweg en het Verboden Bos, stapt in de Zweinsteinexpres en eindigt bij de enorme maquette van het kasteel die voor de overzichtsshots is gebruikt.",
          ],
        },
        {
          heading: "Hoe je er komt",
          bullets: [
            "Trein en pendelbus: Een snelle trein van London Euston naar Watford Junction doet er ongeveer 20 minuten over, daarna rijdt een pendelbus naar de studio. Het goedkoopst, en je kiest je eigen tijd.",
            "Buspakket: Een retourbus vanuit het centrum van Londen, inclusief ticket. Kost meer, maar lost zowel het vervoer als het probleem van uitverkochte tickets op.",
            "Met de auto: Gratis parkeren bij de studio. Handig als je met de eigen auto of een huurauto in Engeland bent.",
          ],
        },
        {
          heading: "Als het uitverkocht is",
          bullets: [
            "Kijk naar teruggekomen tickets: Geannuleerde tijdsloten verschijnen weer op de officiële site, vaak een paar dagen vooraf.",
            "Bekijk pakketten: Touraanbieders hebben eigen tickets, die ze met vervoer verkopen.",
            "Probeer doordeweekse dagen buiten de vakanties: Late tijdsloten op Britse schooldagen gaan als laatste weg.",
          ],
        },
      ],
      tip: "Halverwege de tour wordt boterbier verkocht. Deel er eerst een: het is erg zoet.",
      faq: [
        ["Wat kosten tickets voor de Harry Potter Studio Tour?", "£58,50 voor volwassenen en £47 voor kinderen van 5 tot en met 15 jaar in 2026. Een gezinsticket kost £188."],
        ["Kun je tickets aan de deur kopen?", "Nee. Elk ticket hoort bij een geboekt tijdslot en moet vooraf worden gekocht."],
        ["Is de Harry Potter Studio Tour de moeite waard?", "Voor fans van de films wel, ook voor volwassenen. Heeft niemand in je gezelschap ze gezien, besteed de halve dag dan in Londen."],
      ],
    },
  },
  {
    id: "london-day-trips",
    destinationId: "london",
    type: "comparisons",
    image: "ldn-stonehenge",
    readMinutes: 5,
    updated: "2026-11",
    bookingQuery: "Stonehenge Windsor Bath day trip from London",
    en: {
      slug: "best-day-trips-stonehenge-windsor-bath",
      title: "Day trips from London compared: Stonehenge, Windsor and Bath",
      description: "The classic coach tours from London side by side: what each stop is worth, and which you can do yourself by train.",
      answer:
        "The best day trip from London for most visitors is Windsor Castle by train: 30 to 50 minutes each way, no tour needed, and half a day is enough. Take a coach tour only for Stonehenge, which is awkward to reach on your own. The popular Stonehenge, Windsor and Bath tour covers all three in twelve hours, with little time at each.",
      facts: [
        ["Windsor Castle", "£32 booked ahead, £36 on the day; half a day by train"],
        ["Stonehenge", "About £25 to £32, cheaper booked ahead"],
        ["Stonehenge coach tour", "Usually £60 to £80, 6 hours"],
        ["Three-stop coach tour", "Usually £90 to £130, 12 hours"],
        ["Bath by train", "About 1 hour 20 minutes from Paddington"],
      ],
      sections: [
        {
          heading: "The four options",
          bullets: [
            "Windsor on your own: Trains run from Paddington and Waterloo. The castle is a five-minute walk from the station. Check the opening days: it closes on some weekdays.",
            "Stonehenge half-day tour: A coach there and back with about an hour and a half at the stones. Efficient, and the visitor centre explains what you are looking at.",
            "Stonehenge, Windsor and Bath in one day: Three places, three coach legs and a rushed lunch. Good if you want to say you have seen them; tiring if you want to look around.",
            "Bath on your own: A direct train, a compact Georgian city, the Roman Baths and a proper lunch. The most relaxed of the four.",
          ],
        },
        {
          heading: "How to choose",
          bullets: [
            "You have one spare day: Windsor in the morning and back for the afternoon, or Bath for the whole day.",
            "Stonehenge is the goal: A half-day tour, or a full-day tour that pairs it with Bath only.",
            "You are travelling with children: Windsor. The castle, the guards and the short train ride all work.",
            "You want inside the stone circle: Book a special-access tour at sunrise or sunset. The normal visit keeps you on a path around the stones.",
          ],
        },
      ],
      tip: "Stonehenge tickets are cheaper online in advance than at the gate, and the time slots do sell out in summer.",
      faq: [
        ["Can you visit Stonehenge without a tour?", "Yes: a train to Salisbury and the tour bus from the station. It takes most of a day and costs about the same as a coach tour."],
        ["Is the Stonehenge, Windsor and Bath tour worth it?", "Only if seeing all three matters more than spending time at any of them. Two stops in a day is far more comfortable."],
        ["Is Windsor Castle worth visiting?", "Yes. It is the oldest occupied castle in the world, and the State Apartments and St George's Chapel fill a morning."],
      ],
    },
    nl: {
      slug: "dagtrips-stonehenge-windsor-bath",
      title: "Dagtrips vanuit Londen vergeleken: Stonehenge, Windsor en Bath",
      description: "De klassieke bustours vanuit Londen naast elkaar: wat elke stop waard is en welke je zelf met de trein doet.",
      answer:
        "De beste dagtrip vanuit Londen is voor de meeste bezoekers Windsor Castle met de trein: 30 tot 50 minuten per rit, geen tour nodig, en een halve dag is genoeg. Neem alleen een bustour voor Stonehenge, dat op eigen gelegenheid lastig te bereiken is. De populaire tour langs Stonehenge, Windsor en Bath doet alle drie in twaalf uur, met weinig tijd per plek.",
      facts: [
        ["Windsor Castle", "£32 vooraf, £36 op de dag zelf; halve dag met de trein"],
        ["Stonehenge", "Ongeveer £25 tot £32, goedkoper vooraf geboekt"],
        ["Bustour Stonehenge", "Meestal £60 tot £80, 6 uur"],
        ["Bustour met drie stops", "Meestal £90 tot £130, 12 uur"],
        ["Bath met de trein", "Ongeveer 1 uur en 20 minuten vanaf Paddington"],
      ],
      sections: [
        {
          heading: "De vier mogelijkheden",
          bullets: [
            "Zelf naar Windsor: Treinen vertrekken vanaf Paddington en Waterloo. Het kasteel ligt op vijf minuten lopen van het station. Bekijk de openingsdagen: op sommige doordeweekse dagen is het dicht.",
            "Halve dag naar Stonehenge: Een bus heen en terug, met ongeveer anderhalf uur bij de stenen. Efficiënt, en het bezoekerscentrum legt uit waar je naar kijkt.",
            "Stonehenge, Windsor en Bath op één dag: Drie plekken, drie busritten en een gehaaste lunch. Goed als je ze gezien wilt hebben; vermoeiend als je wilt rondkijken.",
            "Zelf naar Bath: Een rechtstreekse trein, een compacte stad in Georgiaanse stijl, de Romeinse baden en een fatsoenlijke lunch. De meest ontspannen van de vier.",
          ],
        },
        {
          heading: "Hoe je kiest",
          bullets: [
            "Je hebt één dag over: 's Ochtends Windsor en 's middags terug, of de hele dag Bath.",
            "Stonehenge is het doel: Een halvedagtour, of een dagtour die het alleen met Bath combineert.",
            "Je reist met kinderen: Windsor. Het kasteel, de wachters en de korte treinrit werken allemaal.",
            "Je wilt binnen de steencirkel staan: Boek een tour met speciale toegang bij zonsopgang of zonsondergang. Bij een gewoon bezoek blijf je op een pad om de stenen heen.",
          ],
        },
      ],
      tip: "Tickets voor Stonehenge zijn vooraf online goedkoper dan aan de kassa, en in de zomer raken de tijdsloten echt op.",
      faq: [
        ["Kun je Stonehenge zonder tour bezoeken?", "Ja: met de trein naar Salisbury en vanaf het station met de tourbus. Het kost het grootste deel van een dag en ongeveer evenveel als een bustour."],
        ["Is de tour langs Stonehenge, Windsor en Bath de moeite waard?", "Alleen als alle drie zien belangrijker is dan ergens tijd doorbrengen. Twee stops op een dag is veel aangenamer."],
        ["Is Windsor Castle een bezoek waard?", "Ja. Het is het oudste bewoonde kasteel ter wereld, en de staatsievertrekken en St George's Chapel vullen een ochtend."],
      ],
    },
  },
  {
    id: "london-pass",
    destinationId: "london",
    type: "worthIt",
    image: "ldn-museum",
    readMinutes: 4,
    updated: "2026-11",
    en: {
      slug: "is-the-london-pass-worth-it",
      title: "Is the London Pass worth it?",
      description: "London's best museums are free, which changes the maths. When the London Pass pays off and when it does not.",
      answer:
        "For most visitors the London Pass is not worth it. A one-day pass costs £105 at full price, often less in a sale, and you need three major paid sights in a single day to break even. London's best museums, including the British Museum, the National Gallery and Tate Modern, are free, so most trips involve only two or three paid sights in total.",
      facts: [
        ["1-day pass", "£105 at full price, often discounted"],
        ["Break-even", "About three major paid sights per day"],
        ["Free anyway", "British Museum, National Gallery, Tate Modern, V&A"],
        ["Not included", "Harry Potter Studio Tour"],
        ["Verdict", "Skip it, unless you sightsee at full speed"],
      ],
      sections: [
        {
          heading: "The maths for one day",
          paragraphs: [
            "The Tower of London (£38) plus Westminster Abbey (£32) comes to £70. Add a third paid sight, such as St Paul's Cathedral or the view from The Shard, and you reach the price of a one-day pass. That is a full day with no time for a free museum, a park or a long lunch.",
          ],
        },
        {
          heading: "Who should buy it",
          bullets: [
            "Buy it: You have two or three days, want to see as many paid sights as possible and are happy to start at opening time every day.",
            "Skip it: You plan the Tower, the Abbey and otherwise free museums, markets and walks. Single tickets cost less.",
            "Consider the multi-day pass: The price per day drops sharply for three days or more, and a day trip to Windsor Castle is included.",
          ],
        },
        {
          heading: "What is free in London",
          paragraphs: [
            "The permanent collections of the national museums cost nothing: the British Museum, the National Gallery, Tate Modern, the Victoria and Albert Museum, the Natural History Museum and the Science Museum. So do the Changing of the Guard, the parks, the markets and the view from the Sky Garden, which needs a free booking.",
          ],
        },
      ],
      tip: "Popular sights still require a time slot with the pass. Book those slots as soon as you buy it, or the pass will not get you in.",
      faq: [
        ["Does the London Pass include the Harry Potter Studio Tour?", "No. The studio tour is always a separate ticket."],
        ["Are museums in London free?", "The big national museums are free for their permanent collections. Special exhibitions and sights such as the Tower of London charge admission."],
      ],
    },
    nl: {
      slug: "is-de-london-pass-de-moeite-waard",
      title: "Is de London Pass de moeite waard?",
      description: "De beste musea van Londen zijn gratis, en dat verandert de rekensom. Wanneer de London Pass loont en wanneer niet.",
      answer:
        "Voor de meeste bezoekers is de London Pass het niet waard. Een pas voor één dag kost £105 voor de volle prijs, in een actie vaak minder, en je hebt drie grote betaalde bezienswaardigheden op één dag nodig om quitte te spelen. De beste musea van Londen, waaronder het British Museum, de National Gallery en Tate Modern, zijn gratis, dus de meeste reizen tellen in totaal maar twee of drie betaalde bezienswaardigheden.",
      facts: [
        ["Pas voor 1 dag", "£105 voor de volle prijs, vaak met korting"],
        ["Quitte spelen", "Ongeveer drie grote betaalde bezienswaardigheden per dag"],
        ["Toch al gratis", "British Museum, National Gallery, Tate Modern, V&A"],
        ["Niet inbegrepen", "Harry Potter Studio Tour"],
        ["Oordeel", "Overslaan, tenzij je in hoog tempo wilt bezichtigen"],
      ],
      sections: [
        {
          heading: "De rekensom voor één dag",
          paragraphs: [
            "De Tower of London (£38) plus Westminster Abbey (£32) is samen £70. Met een derde betaalde bezienswaardigheid, zoals St Paul's Cathedral of het uitzicht vanaf The Shard, kom je op de prijs van een dagpas. Dat is een volle dag, zonder tijd voor een gratis museum, een park of een lange lunch.",
          ],
        },
        {
          heading: "Voor wie is hij wel iets",
          bullets: [
            "Kopen: Je hebt twee of drie dagen, wilt zo veel mogelijk betaalde bezienswaardigheden zien en begint elke dag graag bij opening.",
            "Overslaan: Je plant de Tower, de Abbey en verder gratis musea, markten en wandelingen. Losse tickets kosten dan minder.",
            "Overweeg de meerdaagse pas: De prijs per dag daalt flink bij drie dagen of meer, en een dagtrip naar Windsor Castle zit erbij.",
          ],
        },
        {
          heading: "Wat gratis is in Londen",
          paragraphs: [
            "De vaste collecties van de nationale musea kosten niets: het British Museum, de National Gallery, Tate Modern, het Victoria and Albert Museum, het Natural History Museum en het Science Museum. Dat geldt ook voor de wisseling van de wacht, de parken, de markten en het uitzicht vanaf de Sky Garden, waarvoor je gratis reserveert.",
          ],
        },
      ],
      tip: "Ook met de pas vragen populaire bezienswaardigheden een tijdslot. Boek die zodra je de pas koopt, anders kom je er met de pas niet in.",
      faq: [
        ["Zit de Harry Potter Studio Tour bij de London Pass?", "Nee. Voor de studiotour heb je altijd een apart ticket nodig."],
        ["Zijn musea in Londen gratis?", "De grote nationale musea zijn gratis voor hun vaste collectie. Voor tijdelijke tentoonstellingen en voor bezienswaardigheden zoals de Tower of London betaal je entree."],
      ],
    },
  },
  {
    id: "london-3-days",
    destinationId: "london",
    type: "itineraries",
    image: "ldn-bigben",
    readMinutes: 7,
    updated: "2026-11",
    bookingQuery: "London tours",
    en: {
      slug: "london-in-3-days",
      title: "London in 3 days: a day-by-day itinerary",
      description: "Three days in London planned by area, mixing two paid sights with the best of what is free.",
      answer:
        "Three days is enough for London's main sights if you group them by area: Westminster and the royal parks on day one, the Tower and the South Bank on day two, and the British Museum with either Greenwich or the Harry Potter studio on day three. Book the Tower of London and Westminster Abbey ahead; most of the rest is free and needs no ticket.",
      facts: [
        ["Book first", "Tower of London, Westminster Abbey"],
        ["Free highlights", "British Museum, National Gallery, Tate Modern"],
        ["Getting around", "Tap a contactless card on the Tube and buses"],
        ["Walking", "7 to 9 miles (11 to 15 km) a day"],
        ["Budget for tickets", "About £70 for the two paid sights"],
      ],
      sections: [
        {
          heading: "Day 1: Westminster and the royal parks",
          bullets: [
            "9:30 am: Westminster Abbey at opening, then Big Ben and Parliament from Westminster Bridge.",
            "11:00 am: Walk through St James's Park to Buckingham Palace. On the days it takes place, the Changing of the Guard starts around 11 am.",
            "1:00 pm: Lunch near Trafalgar Square, then the National Gallery, which is free.",
            "Evening: Covent Garden and a West End show. Same-day tickets are sold at a discount in Leicester Square.",
          ],
        },
        {
          heading: "Day 2: The Tower and the South Bank",
          bullets: [
            "9:00 am: Tower of London at opening. Crown Jewels first.",
            "12:30 pm: Cross Tower Bridge and walk the river to Borough Market for lunch.",
            "2:30 pm: Tate Modern, free, then the Millennium Bridge to St Paul's Cathedral.",
            "Sunset: The Sky Garden for a free view over the city. Book the slot in advance.",
          ],
        },
        {
          heading: "Day 3: The British Museum and one more",
          bullets: [
            "10:00 am: The British Museum, free. See the Rosetta Stone and the Parthenon sculptures before the rooms fill.",
            "Option A: Greenwich by riverboat for the observatory, the meridian line and the view back to the city.",
            "Option B: The Harry Potter Studio Tour, if you booked it. It takes the rest of the day.",
            "Option C: The museums of South Kensington, all free, and a walk through Hyde Park.",
          ],
        },
      ],
      tip: "Stand on the right on escalators and let people pass on the left. It is the one rule Londoners enforce.",
      faq: [
        ["Is 3 days enough for London?", "Yes for the main sights. With four or five days you can add a day trip to Windsor, Bath or Stonehenge."],
        ["Do you need an Oyster card?", "No. A contactless bank card or phone works on the Tube, buses and trains at the same fares, with a daily cap."],
        ["Do you tip in London?", "Restaurants often add a service charge of about 12.5 percent to the bill. If they do, no further tip is needed."],
      ],
    },
    nl: {
      slug: "londen-in-3-dagen",
      title: "Londen in 3 dagen: een route per dag",
      description: "Drie dagen Londen ingedeeld per wijk, met twee betaalde bezienswaardigheden en het beste van wat gratis is.",
      answer:
        "Drie dagen is genoeg voor de hoogtepunten van Londen als je ze per gebied bundelt: Westminster en de koninklijke parken op dag één, de Tower en de South Bank op dag twee, en het British Museum met Greenwich of de Harry Potter-studio op dag drie. Boek de Tower of London en Westminster Abbey vooraf; het meeste andere is gratis en vraagt geen ticket.",
      facts: [
        ["Eerst boeken", "Tower of London, Westminster Abbey"],
        ["Gratis hoogtepunten", "British Museum, National Gallery, Tate Modern"],
        ["Vervoer", "Houd je bankpas tegen de poortjes van metro en bus"],
        ["Lopen", "11 tot 15 km per dag"],
        ["Budget voor tickets", "Ongeveer £70 voor de twee betaalde bezienswaardigheden"],
      ],
      sections: [
        {
          heading: "Dag 1: Westminster en de koninklijke parken",
          bullets: [
            "9.30 uur: Westminster Abbey bij opening, daarna Big Ben en het parlement vanaf Westminster Bridge.",
            "11.00 uur: Loop door St James's Park naar Buckingham Palace. Op de dagen dat hij plaatsvindt, begint de wisseling van de wacht rond 11.00 uur.",
            "13.00 uur: Lunch bij Trafalgar Square, daarna de National Gallery, die gratis is.",
            "Avond: Covent Garden en een voorstelling in West End. Op Leicester Square worden met korting kaartjes voor dezelfde dag verkocht.",
          ],
        },
        {
          heading: "Dag 2: De Tower en de South Bank",
          bullets: [
            "9.00 uur: Tower of London bij opening. Eerst de kroonjuwelen.",
            "12.30 uur: Steek de Tower Bridge over en loop langs de rivier naar Borough Market voor de lunch.",
            "14.30 uur: Tate Modern, gratis, daarna over de Millennium Bridge naar St Paul's Cathedral.",
            "Zonsondergang: De Sky Garden voor een gratis uitzicht over de stad. Reserveer het tijdslot vooraf.",
          ],
        },
        {
          heading: "Dag 3: Het British Museum en nog iets",
          bullets: [
            "10.00 uur: Het British Museum, gratis. Bekijk de Steen van Rosetta en de beelden van het Parthenon voordat de zalen vollopen.",
            "Optie A: Met de rivierboot naar Greenwich voor het observatorium, de nulmeridiaan en het uitzicht op de stad.",
            "Optie B: De Harry Potter Studio Tour, als je die hebt geboekt. Daar ben je de rest van de dag mee bezig.",
            "Optie C: De musea van South Kensington, allemaal gratis, en een wandeling door Hyde Park.",
          ],
        },
      ],
      tip: "Sta rechts op de roltrap en laat mensen links passeren. Het is de enige regel die Londenaren echt handhaven.",
      faq: [
        ["Is 3 dagen genoeg voor Londen?", "Voor de hoogtepunten wel. Met vier of vijf dagen kun je een dagtrip naar Windsor, Bath of Stonehenge toevoegen."],
        ["Heb je een Oyster-kaart nodig?", "Nee. Met een contactloze bankpas of je telefoon reis je in de metro, bus en trein voor dezelfde tarieven, met een maximum per dag."],
        ["Geef je fooi in Londen?", "Restaurants zetten vaak een servicetoeslag van ongeveer 12,5 procent op de rekening. Staat die erop, dan is een extra fooi niet nodig."],
      ],
    },
  },
  {
    id: "london-hidden-gems",
    destinationId: "london",
    type: "hiddenGems",
    image: "ldn-market",
    readMinutes: 6,
    updated: "2026-11",
    bookingQuery: "London hidden gems walking tour",
    en: {
      slug: "hidden-gems",
      title: "Hidden gems in London: 9 places most visitors walk past",
      description: "Nine places in London without a line: a garden in a bombed church, a Victorian market and a museum in an architect's house.",
      answer:
        "The best hidden places in London are St Dunstan in the East, a garden growing inside a bombed church; Leadenhall Market, a Victorian arcade in the financial district; and Sir John Soane's Museum, an architect's house packed with his collection. All three are free, and all are within twenty minutes of the Tower of London or the British Museum.",
      facts: [
        ["Cost", "Free"],
        ["Reservation", "Only for the Sky Garden"],
        ["Best area", "The City, Holborn and along the canals"],
        ["Time", "Half a day covers four or five"],
      ],
      sections: [
        {
          heading: "The nine places",
          bullets: [
            "St Dunstan in the East: A church bombed in 1941 and left as a ruin, with trees and climbing plants growing through the window arches. Five minutes from the Tower.",
            "Leadenhall Market: A covered Victorian market with a painted iron roof, among the glass towers of the City. Busy at weekday lunchtime, empty at weekends.",
            "Sir John Soane's Museum: The house of an architect who filled every wall with paintings, casts and an Egyptian sarcophagus. Free, small and often with a short line.",
            "Little Venice and the Regent's Canal: Houseboats and a towpath that leads in an hour past the zoo to Camden Market.",
            "The Wallace Collection: Old Masters and armour in a townhouse behind Oxford Street. Free, with a courtyard café.",
            "Postman's Park: A small garden near St Paul's with a Victorian wall of plaques to ordinary people who died saving others.",
            "Neal's Yard: A hidden courtyard of brightly painted buildings in Covent Garden.",
            "Parliament Hill on Hampstead Heath: The classic view over the whole skyline, from a hill where Londoners fly kites.",
            "The Sky Garden: A free viewing garden at the top of a City skyscraper. The view rivals The Shard; you only need to book.",
          ],
        },
        {
          heading: "How to combine them",
          paragraphs: [
            "St Dunstan in the East, Leadenhall Market and the Sky Garden are within ten minutes of each other and fit after the Tower of London. Sir John Soane's Museum is a short walk from the British Museum, and Neal's Yard is on the way to Covent Garden. Keep the canal walk for a sunny morning.",
          ],
        },
      ],
      tip: "The City of London, the financial district, is quiet at weekends. Its lanes and churches are best on a Saturday morning, but many cafés there are closed.",
      faq: [
        ["Is the Sky Garden free?", "Yes. Entry is free with a time slot booked in advance on its website; slots are released a few weeks ahead."],
        ["What can you do for free in London?", "The national museums, the parks, the Changing of the Guard, the markets, the Sky Garden and all the places on this list."],
      ],
    },
    nl: {
      slug: "verborgen-plekken",
      title: "Verborgen plekken in Londen: 9 plekken waar de meeste bezoekers langslopen",
      description: "Negen plekken in Londen zonder rij: een tuin in een gebombardeerde kerk, een victoriaanse markt en een museum in het huis van een architect.",
      answer:
        "De mooiste verborgen plekken in Londen zijn St Dunstan in the East, een tuin in een gebombardeerde kerk; Leadenhall Market, een victoriaanse galerij in het financiële district; en Sir John Soane's Museum, het huis van een architect, volgestouwd met zijn verzameling. Alle drie zijn gratis en liggen binnen twintig minuten van de Tower of London of het British Museum.",
      facts: [
        ["Kosten", "Gratis"],
        ["Reserveren", "Alleen voor de Sky Garden"],
        ["Beste gebied", "De City, Holborn en langs de kanalen"],
        ["Tijd", "In een halve dag zie je er vier of vijf"],
      ],
      sections: [
        {
          heading: "De negen plekken",
          bullets: [
            "St Dunstan in the East: Een kerk die in 1941 is gebombardeerd en als ruïne is gelaten, met bomen en klimplanten door de raambogen. Op vijf minuten van de Tower.",
            "Leadenhall Market: Een overdekte victoriaanse markt met een beschilderd ijzeren dak, tussen de glazen torens van de City. Druk rond de lunch op werkdagen, leeg in het weekend.",
            "Sir John Soane's Museum: Het huis van een architect die elke muur vulde met schilderijen, afgietsels en een Egyptische sarcofaag. Gratis, klein en vaak met een korte rij.",
            "Little Venice en het Regent's Canal: Woonboten en een jaagpad dat in een uur langs de dierentuin naar Camden Market leidt.",
            "The Wallace Collection: Oude meesters en wapenrustingen in een stadspaleis achter Oxford Street. Gratis, met een café op de binnenplaats.",
            "Postman's Park: Een kleine tuin bij St Paul's met een victoriaanse muur vol plaquettes voor gewone mensen die omkwamen toen ze anderen redden.",
            "Neal's Yard: Een verborgen binnenplaats met felgekleurde gevels in Covent Garden.",
            "Parliament Hill op Hampstead Heath: Het klassieke uitzicht over de hele skyline, vanaf een heuvel waar Londenaren vliegeren.",
            "De Sky Garden: Een gratis uitkijktuin boven in een wolkenkrabber in de City. Het uitzicht doet niet onder voor The Shard; je hoeft alleen te reserveren.",
          ],
        },
        {
          heading: "Hoe je ze combineert",
          paragraphs: [
            "St Dunstan in the East, Leadenhall Market en de Sky Garden liggen binnen tien minuten van elkaar en passen na de Tower of London. Sir John Soane's Museum ligt op loopafstand van het British Museum, en Neal's Yard ligt op weg naar Covent Garden. Bewaar de wandeling langs het kanaal voor een zonnige ochtend.",
          ],
        },
      ],
      tip: "De City of London, het financiële district, is in het weekend stil. De steegjes en kerken zijn op zaterdagochtend op hun mooist, maar veel cafés zijn er dan dicht.",
      faq: [
        ["Is de Sky Garden gratis?", "Ja. De toegang is gratis met een tijdslot dat je vooraf op de website boekt; de tijdsloten komen een paar weken vooruit vrij."],
        ["Wat kun je gratis doen in Londen?", "De nationale musea, de parken, de wisseling van de wacht, de markten, de Sky Garden en alle plekken op deze lijst."],
      ],
    },
  },
  {
    id: "london-arrival",
    destinationId: "london",
    type: "practical",
    image: "ldn-heathrow",
    readMinutes: 5,
    updated: "2026-11",
    bookingQuery: "London Heathrow airport transfer",
    en: {
      slug: "heathrow-to-london-and-uk-eta",
      title: "Heathrow to central London, and the UK ETA you need before you fly",
      description: "The travel permit Americans now need for the UK, and the four ways from Heathrow into London compared.",
      answer:
        "Americans now need an Electronic Travel Authorisation, or ETA, to enter the UK: it costs £20, is valid for two years and must be arranged online before you fly. From Heathrow, the Elizabeth line is the best way into central London: about 35 minutes for £15.50. The Piccadilly line is cheapest at £5.90 but takes close to an hour.",
      facts: [
        ["UK ETA", "£20, valid 2 years, apply before travel"],
        ["Elizabeth line", "£15.50, about 35 minutes"],
        ["Piccadilly line (Tube)", "£5.90, 50 to 60 minutes"],
        ["Heathrow Express", "£26 on the day, from £10 booked ahead; 15 minutes to Paddington"],
        ["Black cab", "About £60 to £100"],
        ["Paying", "Tap a contactless card; no ticket needed"],
      ],
      sections: [
        {
          heading: "The ETA",
          bullets: [
            "Who needs it: Visitors who do not need a visa, including US citizens. Each traveler needs one, children included.",
            "How to get it: Only through the official UK ETA app or the UK government website. It is linked to your passport.",
            "When: Most decisions come within minutes, but apply at least three days ahead.",
            "Watch out: Look-alike websites charge several times the official fee for the same application.",
          ],
        },
        {
          heading: "Which way into London",
          bullets: [
            "Elizabeth line: Fast, air-conditioned, with room for luggage, and it stops at Paddington, Bond Street and Tottenham Court Road. The best choice for most hotels.",
            "Piccadilly line: The cheapest. Direct to South Kensington, Piccadilly Circus and King's Cross, but slow and cramped with suitcases.",
            "Heathrow Express: The fastest to Paddington, and the most expensive unless you book weeks ahead. You still need the Tube or a taxi from there.",
            "Taxi or booked car: Worth it for families and late arrivals. A pre-booked car is usually cheaper than a black cab from the rank.",
          ],
        },
        {
          heading: "Paying for transport",
          paragraphs: [
            "You do not need a ticket or an Oyster card. Tap the same contactless card or phone on the yellow reader when you enter and when you leave, and the system charges the right fare, with a daily maximum. Each person needs their own card or device.",
          ],
        },
      ],
      faq: [
        ["Do US citizens need a visa for the UK?", "Not a visa, but an ETA: an online travel permit costing £20, valid for two years and for stays of up to six months."],
        ["What is the cheapest way from Heathrow to London?", "The Piccadilly line of the Tube, at £5.90 with a contactless card."],
        ["Is the Heathrow Express worth it?", "Only if you are staying near Paddington or booked a cheap advance fare. The Elizabeth line is nearly as fast and goes further into the centre."],
      ],
    },
    nl: {
      slug: "naar-londen-trein-vliegtuig-eta",
      title: "Naar Londen: met de trein of het vliegtuig, en de ETA die je vooraf regelt",
      description: "Wat je als Nederlander nodig hebt om het Verenigd Koninkrijk in te komen, en hoe je van station of vliegveld bij je hotel raakt.",
      answer:
        "Als Nederlander heb je voor het Verenigd Koninkrijk een paspoort en een Electronic Travel Authorisation (ETA) nodig: die kost £20, is twee jaar geldig en regel je online voor vertrek. De Eurostar rijdt in ongeveer vier uur rechtstreeks van Amsterdam naar station St Pancras, midden in Londen. Vlieg je naar Heathrow, dan is de Elizabeth line voor £15,50 de beste verbinding met het centrum.",
      facts: [
        ["Reisdocument", "Paspoort; een identiteitskaart is niet genoeg"],
        ["UK ETA", "£20, 2 jaar geldig, vooraf aanvragen"],
        ["Eurostar", "Ongeveer 4 uur, Amsterdam naar St Pancras"],
        ["Elizabeth line vanaf Heathrow", "£15,50, ongeveer 35 minuten"],
        ["Metro vanaf Heathrow", "£5,90, 50 tot 60 minuten"],
        ["Betalen", "Contactloos met je bankpas; geen kaartje nodig"],
      ],
      sections: [
        {
          heading: "De ETA en je paspoort",
          bullets: [
            "Wie hem nodig heeft: Iedereen die geen visum nodig heeft, dus ook Nederlanders. Elke reiziger heeft er een nodig, ook kinderen.",
            "Hoe je hem krijgt: Alleen via de officiële UK ETA-app of de site van de Britse overheid. Hij is gekoppeld aan je paspoort.",
            "Wanneer: De meeste aanvragen zijn binnen een paar minuten goedgekeurd, maar vraag hem minstens drie dagen vooraf aan.",
            "Let op: Namaaksites rekenen een veelvoud van het officiële bedrag voor dezelfde aanvraag.",
          ],
        },
        {
          heading: "Met de trein",
          paragraphs: [
            "De Eurostar rijdt rechtstreeks van Amsterdam en Rotterdam naar London St Pancras. De paspoortcontrole is vóór vertrek op het station in Nederland, dus wees ruim op tijd. In Londen stap je uit naast King's Cross, met zes metrolijnen onder het station. Boek vroeg: de prijzen stijgen naarmate de trein voller raakt.",
          ],
        },
        {
          heading: "Met het vliegtuig",
          bullets: [
            "Heathrow: De Elizabeth line is snel en ruim en stopt in het centrum. De Piccadilly line is het goedkoopst, maar traag en krap met koffers.",
            "Gatwick, Stansted en Luton: Hier landen de prijsvechters. Reken op 30 tot 50 minuten met de trein naar het centrum, en tel de prijs van dat kaartje op bij je vlucht.",
            "London City: Het dichtst bij het centrum, met de lichtmetro voor de deur.",
          ],
        },
        {
          heading: "Betalen en stroom",
          paragraphs: [
            "Je hebt geen kaartje of Oyster-kaart nodig: houd bij het in- en uitstappen dezelfde contactloze bankpas of telefoon tegen de gele lezer. Engeland heeft het pond en eigen stopcontacten met drie platte pinnen, dus neem een reisstekker mee.",
          ],
        },
      ],
      faq: [
        ["Heb je als Nederlander een visum nodig voor Engeland?", "Geen visum, wel een ETA: een online reistoestemming van £20 die twee jaar geldig is, voor verblijven tot zes maanden."],
        ["Kun je met een identiteitskaart naar Engeland?", "Nee. Sinds de brexit heb je een geldig paspoort nodig."],
        ["Trein of vliegtuig naar Londen?", "De trein is van centrum tot centrum ongeveer even snel als vliegen, zonder transfer vanaf het vliegveld. Vliegen is vaak goedkoper als je laat boekt."],
      ],
    },
  },
  {
    id: "london-best-time",
    destinationId: "london",
    type: "practical",
    image: "ldn-park",
    readMinutes: 4,
    updated: "2026-11",
    en: {
      slug: "best-time-to-visit-london",
      title: "Best time to visit London: season by season",
      description: "When London is at its best, what the weather really does, and which months are cheapest.",
      answer:
        "The best time to visit London is from May to September: long days, parks in full leaf and temperatures around 68°F to 75°F (20°C to 24°C). December is the other good choice, for the Christmas lights and markets. January and February are the cheapest and quietest months, cold and dark by 4:30 pm. It can rain in any month, usually briefly.",
      facts: [
        ["Best months", "May to September, and December"],
        ["Warmest", "July and August, around 75°F (24°C)"],
        ["Cheapest", "January and February"],
        ["Busiest", "July, August and Christmas week"],
        ["Royal extras", "Buckingham Palace opens its State Rooms in summer"],
      ],
      sections: [
        {
          heading: "Season by season",
          bullets: [
            "Spring (March to May): Parks in bloom and manageable crowds. Pack layers; a day can swing from sun to showers.",
            "Summer (June to August): Daylight until after 9 pm, outdoor theatre and festivals. The Tube gets hot, and prices peak.",
            "Autumn (September to November): September is often as good as summer with fewer visitors. By November the days are short.",
            "Winter (December to February): Christmas lights, ice rinks and cosy pubs in December; low prices and empty museums in January.",
          ],
        },
        {
          heading: "Dates to plan around",
          paragraphs: [
            "Buckingham Palace opens its State Rooms to visitors only in summer, from July to September. The Changing of the Guard runs on fewer days in winter. School holidays in late July and August fill the museums with families, and a rail or Tube strike can disrupt a day, so check for announcements in the week before you travel.",
          ],
        },
      ],
      faq: [
        ["Does it rain a lot in London?", "Less than its reputation suggests. Rain is frequent but usually light and short; carry a compact umbrella all year."],
        ["Is London worth visiting in winter?", "Yes, especially in December. Most of what you come for is indoors, and prices in January and February are the lowest of the year."],
      ],
    },
    nl: {
      slug: "beste-reistijd-londen",
      title: "Beste reistijd voor Londen: per seizoen",
      description: "Wanneer Londen op zijn best is, wat het weer echt doet en welke maanden het goedkoopst zijn.",
      answer:
        "De beste reistijd voor Londen is van mei tot en met september: lange dagen, parken vol in blad en temperaturen rond de 20 °C tot 24 °C. December is de andere goede keus, voor de kerstverlichting en de kerstmarkten. Januari en februari zijn de goedkoopste en rustigste maanden, koud en om half vijf donker. Regenen kan het in elke maand, meestal kort.",
      facts: [
        ["Beste maanden", "Mei tot en met september, en december"],
        ["Warmst", "Juli en augustus, rond de 24 °C"],
        ["Goedkoopst", "Januari en februari"],
        ["Drukst", "Juli, augustus en de kerstweek"],
        ["Koninklijk extraatje", "Buckingham Palace opent in de zomer de staatsievertrekken"],
      ],
      sections: [
        {
          heading: "Per seizoen",
          bullets: [
            "Lente (maart tot en met mei): Parken in bloei en te overziene drukte. Neem laagjes mee; een dag kan omslaan van zon naar buien. De meivakantie is een goed moment.",
            "Zomer (juni tot en met augustus): Licht tot na 21.00 uur, openluchttheater en festivals. In de metro wordt het heet, en de prijzen pieken.",
            "Herfst (september tot en met november): September is vaak even mooi als de zomer, met minder bezoekers. In november zijn de dagen kort. De herfstvakantie valt goed.",
            "Winter (december tot en met februari): Kerstverlichting, ijsbanen en knusse pubs in december; lage prijzen en lege musea in januari.",
          ],
        },
        {
          heading: "Data om rekening mee te houden",
          paragraphs: [
            "Buckingham Palace opent de staatsievertrekken alleen in de zomer, van juli tot en met september. De wisseling van de wacht is in de winter op minder dagen. In de Britse schoolvakantie, eind juli en augustus, zitten de musea vol gezinnen, en een staking bij het spoor of de metro kan een dag in de war sturen; kijk dus in de week voor vertrek naar aankondigingen.",
          ],
        },
      ],
      faq: [
        ["Regent het veel in Londen?", "Minder dan de reputatie doet vermoeden, en niet meer dan in Nederland. Het regent vaak, maar meestal licht en kort; neem het hele jaar een opvouwbare paraplu mee."],
        ["Is Londen in de winter de moeite waard?", "Ja, vooral in december. Het meeste waarvoor je komt is binnen, en de prijzen zijn in januari en februari de laagste van het jaar."],
      ],
    },
  },
];
