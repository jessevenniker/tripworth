import type { Locale } from "./config";

const en = {
  nav: { destinations: "Destinations", guides: "Guides" },
  intro: { boarding: "Now boarding" },
  home: {
    metaTitle: "Things to do, tickets and hidden gems for your next trip",
    metaDescription:
      "Honest guides to the world's most-loved destinations: which tickets to buy, what is worth it, and the places locals keep to themselves.",
    eyebrow: "Travel guides that tell you what is worth it",
    title: "Land somewhere worth the flight.",
    lead: "Pick a destination. We tell you which tickets to buy, what to skip, and where the locals actually go.",
    cta: "Browse destinations",
  },
  regions: {
    europe: "Europe",
    caribbean: "Caribbean",
    americas: "North America & Pacific",
  },
  regionLeads: {
    europe: "The classics, without the queues.",
    caribbean: "Short flights, warm water, and the excursions worth leaving the resort for.",
    americas: "Big-ticket trips closer to home.",
  },
  hub: {
    title: (name: string) => `Things to do in ${name}`,
    metaDescription: (name: string) =>
      `What to do in ${name}: the tickets worth buying, the best tours compared, hidden gems and day-by-day itineraries.`,
    answerLabel: "The short answer",
    topPicks: "Start with",
    insideTitle: "What this guide covers",
    comingSoon: "In the works",
    back: "All destinations",
  },
  pageTypes: {
    tickets: ["Tickets", "Which ticket to buy for each attraction, and when to book."],
    comparisons: ["Tours compared", "The best tours side by side, tested and priced."],
    worthIt: ["Is it worth it?", "Straight answers on passes, upgrades and day trips."],
    itineraries: ["Itineraries", "Day-by-day plans for 1, 2, 3 and 5 days."],
    hiddenGems: ["Hidden gems", "Stories and places from people who live there."],
    practical: ["Practical", "Airport transfers, best time to visit, where to stay."],
    shoreExcursions: ["Shore excursions", "What to do with a few hours in port."],
  },
  guides: {
    metaTitle: "Travel guides (PDF)",
    metaDescription: "Downloadable day-by-day city guides with maps, booking links and local tips.",
    title: "Guides you can take with you",
    lead: "Day-by-day PDF guides with maps, booking links and tips from locals. Pay once, download instantly.",
    buy: "Buy guide",
    pages: "pages",
    waiver:
      "Digital product: by completing your purchase you agree that the download starts immediately and that you waive your right of withdrawal.",
  },
  thanks: {
    title: "Thank you. Your guide is ready.",
    download: "Download your guide",
    expires: "This link works for 7 days.",
    unpaid: "We could not confirm this payment yet. Refresh this page in a moment.",
    missing: "No order found. Open the link from your confirmation page again.",
    unavailable: "Checkout is not configured yet.",
  },
  footer: {
    disclosure:
      "We earn a commission when you book through links on this site, at no extra cost to you. It never changes what we recommend.",
    rights: "All rights reserved.",
  },
  switcher: { label: "Nederlands" },
  ui: {
    departures: "Departures",
    explore: "Explore",
    spotlightEyebrow: "Fully mapped",
    spotlightTitle: (name: string) => `${name}, sorted.`,
    spotlightLead: "What to book, what to skip, a day-by-day plan and the places most visitors miss.",
    spotlightCta: (name: string) => `Open the ${name} guide`,
    guidesEyebrow: "Take it with you",
    guidesTitle: "The whole trip in one PDF",
    guidesLead: "Day-by-day plans with maps and booking links, ready for your phone.",
    guidesCta: "See all guides",
    articles: (count: number) => `${count} guides`,
    minRead: (minutes: number) => `${minutes} min read`,
    updated: "Updated",
    keyFacts: "Key facts",
    tip: "Good to know",
    faq: "Common questions",
    bookTitle: "Ready to book?",
    bookLead: "Compare prices and availability with our booking partners.",
    bookOn: (partner: string) => `Check ${partner}`,
    moreFrom: (name: string) => `More from ${name}`,
    otherDestinations: "Keep exploring",
    guideUpsell: "Want it all in one place?",
    viewGuide: "View the guide",
    read: "Read",
    credits: "Photo credits",
    creditsLead: "Photos on this site come from Wikimedia Commons and are used under the licence shown.",
    photoBy: "Photo",
  },
};

type Dictionary = typeof en;

const nl: Dictionary = {
  nav: { destinations: "Bestemmingen", guides: "Gidsen" },
  intro: { boarding: "Boarding gestart" },
  home: {
    metaTitle: "Wat te doen, tickets en verborgen plekken voor je volgende reis",
    metaDescription:
      "Eerlijke gidsen voor de populairste bestemmingen: welke tickets je koopt, wat de moeite waard is en de plekken die locals voor zichzelf houden.",
    eyebrow: "Reisgidsen die zeggen wat de moeite waard is",
    title: "Land op een plek die de vlucht waard is.",
    lead: "Kies een bestemming. Wij vertellen welke tickets je koopt, wat je overslaat en waar de locals echt komen.",
    cta: "Bekijk bestemmingen",
  },
  regions: {
    europe: "Europa",
    caribbean: "Caribisch gebied",
    americas: "Noord-Amerika",
  },
  regionLeads: {
    europe: "De klassiekers, zonder de rijen.",
    caribbean: "Warm water en de excursies waarvoor je het resort verlaat.",
    americas: "De grote reis aan de overkant.",
  },
  hub: {
    title: (name: string) => `Wat te doen in ${name}`,
    metaDescription: (name: string) =>
      `Wat te doen in ${name}: de tickets die je moet kopen, de beste tours vergeleken, verborgen plekken en routes per dag.`,
    answerLabel: "Het korte antwoord",
    topPicks: "Begin met",
    insideTitle: "Wat deze gids behandelt",
    comingSoon: "In de maak",
    back: "Alle bestemmingen",
  },
  pageTypes: {
    tickets: ["Tickets", "Welk ticket je per attractie koopt en wanneer je boekt."],
    comparisons: ["Tours vergeleken", "De beste tours naast elkaar, getest en met prijs."],
    worthIt: ["Is het de moeite waard?", "Duidelijke antwoorden over passen, upgrades en dagtrips."],
    itineraries: ["Routes", "Dagindelingen voor 1, 2, 3 en 5 dagen."],
    hiddenGems: ["Verborgen plekken", "Verhalen en plekken van mensen die er wonen."],
    practical: ["Praktisch", "Vervoer vanaf het vliegveld, beste reistijd, waar je slaapt."],
    shoreExcursions: ["Excursies vanaf de cruise", "Wat je doet met een paar uur in de haven."],
  },
  guides: {
    metaTitle: "Reisgidsen (pdf)",
    metaDescription: "Downloadbare stadsgidsen per dag, met kaarten, boekingslinks en tips van locals.",
    title: "Gidsen die je meeneemt",
    lead: "Pdf-gidsen per dag, met kaarten, boekingslinks en tips van locals. Eén keer betalen, direct downloaden.",
    buy: "Koop gids",
    pages: "pagina's",
    waiver:
      "Digitaal product: door je aankoop af te ronden ga je ermee akkoord dat de download direct start en dat je afziet van je herroepingsrecht.",
  },
  thanks: {
    title: "Bedankt. Je gids staat klaar.",
    download: "Download je gids",
    expires: "Deze link werkt 7 dagen.",
    unpaid: "We konden deze betaling nog niet bevestigen. Ververs de pagina over een moment.",
    missing: "Geen bestelling gevonden. Open de link van je bevestigingspagina opnieuw.",
    unavailable: "De checkout is nog niet ingesteld.",
  },
  footer: {
    disclosure:
      "Wij ontvangen een commissie als je boekt via links op deze site, zonder extra kosten voor jou. Dat verandert nooit wat we aanraden.",
    rights: "Alle rechten voorbehouden.",
  },
  switcher: { label: "English" },
  ui: {
    departures: "Vertrek",
    explore: "Ontdek",
    spotlightEyebrow: "Volledig uitgewerkt",
    spotlightTitle: (name: string) => `${name}, geregeld.`,
    spotlightLead: "Wat je boekt, wat je overslaat, een planning per dag en de plekken die de meeste bezoekers missen.",
    spotlightCta: (name: string) => `Open de gids van ${name}`,
    guidesEyebrow: "Neem het mee",
    guidesTitle: "De hele reis in één pdf",
    guidesLead: "Planningen per dag met kaarten en boekingslinks, klaar voor je telefoon.",
    guidesCta: "Bekijk alle gidsen",
    articles: (count: number) => `${count} artikelen`,
    minRead: (minutes: number) => `${minutes} min lezen`,
    updated: "Bijgewerkt",
    keyFacts: "De feiten",
    tip: "Goed om te weten",
    faq: "Veelgestelde vragen",
    bookTitle: "Klaar om te boeken?",
    bookLead: "Vergelijk prijzen en beschikbaarheid bij onze boekingspartners.",
    bookOn: (partner: string) => `Bekijk ${partner}`,
    moreFrom: (name: string) => `Meer over ${name}`,
    otherDestinations: "Verder kijken",
    guideUpsell: "Alles liever op één plek?",
    viewGuide: "Bekijk de gids",
    read: "Lees",
    credits: "Fotocredits",
    creditsLead: "De foto's op deze site komen van Wikimedia Commons en worden gebruikt onder de vermelde licentie.",
    photoBy: "Foto",
  },
};

const dictionaries: Record<Locale, Dictionary> = { en, nl };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export type { Dictionary };
