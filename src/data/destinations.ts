import type { Locale } from "@/i18n/config";
import type { ImageKey } from "./images";

export type Region = "europe" | "caribbean" | "americas";

type Localized = {
  slug: string;
  name: string;
  country: string;
  tagline: string;
  highlights: [string, string, string];
};

export type Destination = {
  /** Also the key of the destination's photo in images.ts. */
  id: ImageKey;
  /** Main airport code, shown on the departure board. */
  code: string;
  region: Region;
  lat: number;
  lng: number;
  /** Two colours for the placeholder artwork until real photography is added. */
  palette: [string, string];
  cruisePort?: boolean;
  en: Localized;
  /** Missing when there is no Dutch version (yet). */
  nl?: Localized;
};

export const regionOrder: Region[] = ["europe", "caribbean", "americas"];

export const destinations: Destination[] = [
  {
    id: "rome",
    code: "FCO",
    region: "europe",
    lat: 41.9028,
    lng: 12.4964,
    palette: ["#c8553d", "#f2b880"],
    en: {
      slug: "rome",
      name: "Rome",
      country: "Italy",
      tagline: "Two thousand years of history, best seen with the right ticket",
      highlights: ["Colosseum and Roman Forum", "Vatican Museums and Sistine Chapel", "Trastevere after dark"],
    },
    nl: {
      slug: "rome",
      name: "Rome",
      country: "Italië",
      tagline: "Tweeduizend jaar geschiedenis, het best gezien met het juiste ticket",
      highlights: ["Colosseum en Forum Romanum", "Vaticaanse Musea en Sixtijnse Kapel", "Trastevere in de avond"],
    },
  },
  {
    id: "paris",
    code: "CDG",
    region: "europe",
    lat: 48.8566,
    lng: 2.3522,
    palette: ["#3d5a80", "#e0b1cb"],
    en: {
      slug: "paris",
      name: "Paris",
      country: "France",
      tagline: "The icons are worth it, if you book the right time slot",
      highlights: ["Eiffel Tower summit", "The Louvre", "Day trip to Versailles"],
    },
    nl: {
      slug: "parijs",
      name: "Parijs",
      country: "Frankrijk",
      tagline: "De iconen zijn het waard, als je het juiste tijdslot boekt",
      highlights: ["Top van de Eiffeltoren", "Het Louvre", "Dagtrip naar Versailles"],
    },
  },
  {
    id: "london",
    code: "LHR",
    region: "europe",
    lat: 51.5074,
    lng: -0.1278,
    palette: ["#2b2d42", "#d90429"],
    en: {
      slug: "london",
      name: "London",
      country: "United Kingdom",
      tagline: "Free museums, pricey attractions: know which to pay for",
      highlights: ["Tower of London", "Westminster Abbey", "Harry Potter Studio Tour"],
    },
    nl: {
      slug: "londen",
      name: "Londen",
      country: "Verenigd Koninkrijk",
      tagline: "Gratis musea en dure attracties: weet waarvoor je betaalt",
      highlights: ["Tower of London", "Westminster Abbey", "Harry Potter Studio Tour"],
    },
  },
  {
    id: "barcelona",
    code: "BCN",
    region: "europe",
    lat: 41.3874,
    lng: 2.1686,
    palette: ["#e76f51", "#2a9d8f"],
    en: {
      slug: "barcelona",
      name: "Barcelona",
      country: "Spain",
      tagline: "Gaudí sells out weeks ahead: plan those first",
      highlights: ["Sagrada Família", "Park Güell", "The Gothic Quarter"],
    },
    nl: {
      slug: "barcelona",
      name: "Barcelona",
      country: "Spanje",
      tagline: "Gaudí is weken vooruit uitverkocht: plan dat als eerste",
      highlights: ["Sagrada Família", "Park Güell", "De Gotische wijk"],
    },
  },
  {
    id: "florence",
    code: "FLR",
    region: "europe",
    lat: 43.7696,
    lng: 11.2558,
    palette: ["#9c6644", "#e6ccb2"],
    en: {
      slug: "florence",
      name: "Florence",
      country: "Italy",
      tagline: "Renaissance art in the morning, Tuscan wine by afternoon",
      highlights: ["Uffizi Gallery", "Climbing the Duomo", "Chianti wine day trip"],
    },
    nl: {
      slug: "florence",
      name: "Florence",
      country: "Italië",
      tagline: "'s Ochtends renaissancekunst, 's middags Toscaanse wijn",
      highlights: ["Uffizi", "De koepel van de Duomo beklimmen", "Wijndagtrip naar Chianti"],
    },
  },
  {
    id: "amsterdam",
    code: "AMS",
    region: "europe",
    lat: 52.3676,
    lng: 4.9041,
    palette: ["#bc4b51", "#f4a259"],
    en: {
      slug: "amsterdam",
      name: "Amsterdam",
      country: "Netherlands",
      tagline: "Written by people who live here, not by a tour desk",
      highlights: ["Anne Frank House", "Van Gogh Museum", "A canal cruise at dusk"],
    },
  },
  {
    id: "lisbon",
    code: "LIS",
    region: "europe",
    lat: 38.7223,
    lng: -9.1393,
    palette: ["#f4a261", "#264653"],
    en: {
      slug: "lisbon",
      name: "Lisbon",
      country: "Portugal",
      tagline: "Hills, tiles and the best day trip in Portugal",
      highlights: ["Belém Tower and Jerónimos Monastery", "Alfama on foot", "Day trip to Sintra"],
    },
    nl: {
      slug: "lissabon",
      name: "Lissabon",
      country: "Portugal",
      tagline: "Heuvels, tegels en de mooiste dagtrip van Portugal",
      highlights: ["Toren van Belém en Jerónimosklooster", "Alfama te voet", "Dagtrip naar Sintra"],
    },
  },
  {
    id: "reykjavik",
    code: "KEF",
    region: "europe",
    lat: 64.1466,
    lng: -21.9426,
    palette: ["#1d3557", "#52b69a"],
    en: {
      slug: "reykjavik",
      name: "Reykjavik",
      country: "Iceland",
      tagline: "Expensive tours, so choose the ones that deliver",
      highlights: ["Golden Circle", "Northern lights tour", "Blue Lagoon"],
    },
    nl: {
      slug: "reykjavik",
      name: "Reykjavik",
      country: "IJsland",
      tagline: "Dure tours, dus kies degene die het waarmaken",
      highlights: ["Golden Circle", "Noorderlichttour", "Blue Lagoon"],
    },
  },
  {
    id: "aruba",
    code: "AUA",
    region: "caribbean",
    lat: 12.5211,
    lng: -69.9683,
    palette: ["#00b4d8", "#ffd166"],
    cruisePort: true,
    en: {
      slug: "aruba",
      name: "Aruba",
      country: "Dutch Caribbean",
      tagline: "Sun almost every day, and more to do than the beach",
      highlights: ["Eagle Beach", "Arikok National Park by 4x4", "Snorkeling the Antilla wreck"],
    },
    nl: {
      slug: "aruba",
      name: "Aruba",
      country: "Koninkrijk der Nederlanden",
      tagline: "Bijna elke dag zon, en meer te doen dan het strand",
      highlights: ["Eagle Beach", "Nationaal Park Arikok per 4x4", "Snorkelen bij het wrak van de Antilla"],
    },
  },
  {
    id: "cancun",
    code: "CUN",
    region: "caribbean",
    lat: 21.1619,
    lng: -86.8515,
    palette: ["#0096c7", "#f77f00"],
    cruisePort: true,
    en: {
      slug: "cancun-riviera-maya",
      name: "Cancún & Riviera Maya",
      country: "Mexico",
      tagline: "Ruins, cenotes and islands, all a day trip from your resort",
      highlights: ["Chichén Itzá", "Swimming in a cenote", "Isla Mujeres by catamaran"],
    },
    nl: {
      slug: "cancun-riviera-maya",
      name: "Cancún en Riviera Maya",
      country: "Mexico",
      tagline: "Ruïnes, cenotes en eilanden, allemaal een dagtrip vanaf je resort",
      highlights: ["Chichén Itzá", "Zwemmen in een cenote", "Isla Mujeres per catamaran"],
    },
  },
  {
    id: "punta-cana",
    code: "PUJ",
    region: "caribbean",
    lat: 18.5601,
    lng: -68.3725,
    palette: ["#48cae4", "#ff9f1c"],
    en: {
      slug: "punta-cana",
      name: "Punta Cana",
      country: "Dominican Republic",
      tagline: "The excursions worth leaving the all-inclusive for",
      highlights: ["Saona Island", "Catamaran and snorkeling trip", "Hoyo Azul cenote"],
    },
    nl: {
      slug: "punta-cana",
      name: "Punta Cana",
      country: "Dominicaanse Republiek",
      tagline: "De excursies waarvoor je het all-inclusive resort verlaat",
      highlights: ["Isla Saona", "Catamaran- en snorkeltocht", "Cenote Hoyo Azul"],
    },
  },
  {
    id: "jamaica",
    code: "MBJ",
    region: "caribbean",
    lat: 18.4762,
    lng: -77.8939,
    palette: ["#2d6a4f", "#ffba08"],
    cruisePort: true,
    en: {
      slug: "jamaica",
      name: "Jamaica",
      country: "Montego Bay & Ocho Rios",
      tagline: "Waterfalls, rafting and the best use of a port day",
      highlights: ["Dunn's River Falls", "Bamboo rafting on the Martha Brae", "Blue Hole"],
    },
  },
  {
    id: "new-york",
    code: "JFK",
    region: "americas",
    lat: 40.7128,
    lng: -74.006,
    palette: ["#22223b", "#f2a65a"],
    en: {
      slug: "new-york",
      name: "New York",
      country: "United States",
      tagline: "Five observation decks, one worth your money",
      highlights: ["Statue of Liberty and Ellis Island", "An observation deck at sunset", "A Broadway show"],
    },
    nl: {
      slug: "new-york",
      name: "New York",
      country: "Verenigde Staten",
      tagline: "Vijf uitkijkplatforms, waarvan één je geld waard is",
      highlights: ["Vrijheidsbeeld en Ellis Island", "Een uitkijkplatform bij zonsondergang", "Een Broadway-show"],
    },
  },
  {
    id: "oahu",
    code: "HNL",
    region: "americas",
    lat: 21.4389,
    lng: -157.9989,
    palette: ["#118ab2", "#ef476f"],
    en: {
      slug: "oahu",
      name: "Oahu",
      country: "Hawaii, United States",
      tagline: "Pearl Harbor, the North Shore and reservations you need early",
      highlights: ["Pearl Harbor and the USS Arizona", "Hiking Diamond Head", "North Shore day trip"],
    },
  },
];

export function getDestinationBySlug(locale: Locale, slug: string): Destination | undefined {
  return destinations.find((destination) => destination[locale]?.slug === slug);
}

export function destinationsFor(locale: Locale): Destination[] {
  return destinations.filter((destination) => destination[locale]);
}
