import type { Locale } from "@/i18n/config";
import { SITE_NAME } from "@/i18n/config";
import { companyField } from "./company";

// Privacy policy and terms, per language.
// A starting point written for this site's actual setup (Vercel, Plausible, Stripe, Wikimedia photos,
// Viator and GetYourGuide links). Have it checked by a lawyer before launch.

export type LegalSection = { id?: string; heading: string; paragraphs: string[] };
export type LegalDocument = { title: string; description: string; updated: string; intro: string; sections: LegalSection[] };

const UPDATED = "2026-11-16";

function who(locale: Locale) {
  const nl = locale === "nl";
  return {
    name: companyField("legalName", nl ? "bedrijfsnaam" : "company name"),
    address: companyField("address", nl ? "adres" : "address"),
    kvk: companyField("chamberOfCommerce", nl ? "KvK-nummer" : "Chamber of Commerce number"),
    vat: companyField("vatNumber", nl ? "btw-nummer" : "VAT number"),
    email: companyField("email", nl ? "e-mailadres" : "email address"),
  };
}

function privacy(locale: Locale): LegalDocument {
  const c = who(locale);
  if (locale === "nl") {
    return {
      title: "Privacyverklaring",
      description: `Welke gegevens ${SITE_NAME} verwerkt, waarom en welke rechten je hebt.`,
      updated: UPDATED,
      intro: `${SITE_NAME} verzamelt zo weinig mogelijk gegevens. We plaatsen geen trackingcookies, verkopen geen gegevens en tonen geen advertenties op basis van je gedrag.`,
      sections: [
        {
          heading: "Wie we zijn",
          paragraphs: [
            `${SITE_NAME} wordt uitgegeven door ${c.name}, ${c.address}, KvK ${c.kvk}. Wij zijn verantwoordelijk voor de verwerking van je gegevens. Vragen of verzoeken stuur je naar ${c.email}.`,
          ],
        },
        {
          heading: "Als je de site bezoekt",
          paragraphs: [
            "Onze hostingpartij Vercel verwerkt technische gegevens zoals je IP-adres en de opgevraagde pagina, om de site te leveren en te beveiligen. Deze logs worden kort bewaard. Grondslag: ons gerechtvaardigd belang bij een veilige, werkende site.",
            "Voor bezoekersstatistieken gebruiken we Plausible Analytics. Plausible plaatst geen cookies, slaat geen IP-adressen op en maakt geen profielen. We zien alleen totalen, zoals het aantal bezoekers per pagina en hoe vaak er op een boekingslink is geklikt.",
            "Foto's worden geladen vanaf de servers van Wikimedia Commons (Wikimedia Foundation, Verenigde Staten). Je browser stuurt daarbij je IP-adres naar Wikimedia, net als bij elke andere afbeelding die je online bekijkt.",
          ],
        },
        {
          id: "affiliate-links",
          heading: "Als je op een boekingslink klikt",
          paragraphs: [
            "Links naar Viator en GetYourGuide bevatten onze partnercode. Klik je erop, dan kom je op de site van die partner en geldt hun privacybeleid. Zij kunnen cookies plaatsen om een boeking aan ons toe te rekenen. Wij krijgen van hen alleen overzichten van commissies, geen namen of contactgegevens.",
          ],
        },
        {
          heading: "Als je een gids koopt",
          paragraphs: [
            "Betalingen lopen via Stripe. Wij ontvangen je naam, e-mailadres, factuurland of -adres en wat je hebt gekocht. Je kaartgegevens zien we nooit. Grondslag: de uitvoering van de koopovereenkomst en onze wettelijke plicht om een administratie bij te houden.",
            "Gegevens over aankopen bewaren we zeven jaar, omdat de fiscale bewaarplicht dat voorschrijft.",
          ],
        },
        {
          heading: "Cookies",
          paragraphs: [
            "Wij plaatsen zelf geen cookies. De site onthoudt alleen in je browser (sessionStorage) dat je de openingsanimatie al hebt gezien; dat wordt nergens heen gestuurd. Op de betaalpagina van Stripe gelden de cookies van Stripe, die nodig zijn om de betaling veilig af te handelen.",
          ],
        },
        {
          heading: "Doorgifte buiten de EU",
          paragraphs: [
            "Vercel, Stripe en de Wikimedia Foundation zijn gevestigd in de Verenigde Staten. Doorgifte gebeurt op basis van het EU-VS Data Privacy Framework of de standaardcontractbepalingen van de Europese Commissie.",
          ],
        },
        {
          heading: "Je rechten",
          paragraphs: [
            `Je mag je gegevens inzien, laten corrigeren of laten verwijderen, de verwerking laten beperken, bezwaar maken en je gegevens laten overdragen. Stuur je verzoek naar ${c.email}; we reageren binnen een maand.`,
            "Ben je het niet eens met hoe we met je gegevens omgaan, dan kun je een klacht indienen bij de Autoriteit Persoonsgegevens.",
          ],
        },
        {
          heading: "Wijzigingen",
          paragraphs: ["Als we deze verklaring aanpassen, staat de nieuwe datum bovenaan deze pagina."],
        },
      ],
    };
  }
  return {
    title: "Privacy policy",
    description: `What data ${SITE_NAME} processes, why, and what rights you have.`,
    updated: UPDATED,
    intro: `${SITE_NAME} collects as little data as possible. We set no tracking cookies, sell no data and show no ads based on your behavior.`,
    sections: [
      {
        heading: "Who we are",
        paragraphs: [
          `${SITE_NAME} is published by ${c.name}, ${c.address}, Chamber of Commerce no. ${c.kvk}. We are the controller of your data. Send questions or requests to ${c.email}.`,
        ],
      },
      {
        heading: "When you visit the site",
        paragraphs: [
          "Our host, Vercel, processes technical data such as your IP address and the page you request, to deliver and secure the site. These logs are kept briefly. Legal basis: our legitimate interest in a secure, working site.",
          "For visitor statistics we use Plausible Analytics. Plausible sets no cookies, stores no IP addresses and builds no profiles. We only see totals, such as visitors per page and how often a booking link was clicked.",
          "Photos load from the servers of Wikimedia Commons (Wikimedia Foundation, United States). Your browser sends your IP address to Wikimedia in the process, as it does for any image you view online.",
        ],
      },
      {
        id: "affiliate-links",
        heading: "When you click a booking link",
        paragraphs: [
          "Links to Viator and GetYourGuide carry our partner code. When you click one you land on that partner's site and their privacy policy applies. They may set cookies to credit a booking to us. We only receive commission reports from them, never names or contact details.",
        ],
      },
      {
        heading: "When you buy a guide",
        paragraphs: [
          "Payments are handled by Stripe. We receive your name, email address, billing country or address and what you bought. We never see your card details. Legal basis: performing the purchase contract and our legal duty to keep business records.",
          "Purchase records are kept for seven years, as Dutch tax law requires.",
        ],
      },
      {
        heading: "Cookies",
        paragraphs: [
          "We set no cookies ourselves. The site only remembers in your browser (sessionStorage) that you have seen the opening animation; this is never sent anywhere. Stripe's checkout page uses Stripe's own cookies, which are needed to process the payment securely.",
        ],
      },
      {
        heading: "Transfers outside the EU",
        paragraphs: [
          "Vercel, Stripe and the Wikimedia Foundation are based in the United States. Transfers rely on the EU-US Data Privacy Framework or the European Commission's standard contractual clauses.",
        ],
      },
      {
        heading: "Your rights",
        paragraphs: [
          `You can ask to see, correct or delete your data, restrict or object to its processing, and receive a copy. Email ${c.email}; we reply within a month.`,
          "If you disagree with how we handle your data, you can complain to the Dutch Data Protection Authority (Autoriteit Persoonsgegevens) or the authority in your own country.",
          "For US visitors: we do not sell or share your personal information as defined by the California Consumer Privacy Act.",
        ],
      },
      {
        heading: "Changes",
        paragraphs: ["When we update this policy, the new date appears at the top of this page."],
      },
    ],
  };
}

function terms(locale: Locale): LegalDocument {
  const c = who(locale);
  if (locale === "nl") {
    return {
      title: "Algemene voorwaarden",
      description: `De voorwaarden voor het gebruik van ${SITE_NAME} en de aankoop van pdf-gidsen.`,
      updated: UPDATED,
      intro: `Deze voorwaarden gelden voor het gebruik van ${SITE_NAME} en voor de aankoop van onze digitale reisgidsen.`,
      sections: [
        {
          heading: "Wie we zijn",
          paragraphs: [`${c.name}, ${c.address}. KvK ${c.kvk}, btw-nummer ${c.vat}. E-mail: ${c.email}.`],
        },
        {
          heading: "Reisinformatie",
          paragraphs: [
            "We controleren prijzen, openingstijden en regels zorgvuldig, maar ze veranderen vaak. Controleer belangrijke informatie altijd bij de aanbieder voordat je reist. Bij elk artikel staat wanneer het voor het laatst is bijgewerkt.",
          ],
        },
        {
          id: "affiliate-links",
          heading: "Hoe wij geld verdienen",
          paragraphs: [
            "Een deel van de links op deze site zijn affiliate-links naar boekingspartners zoals Viator en GetYourGuide. Boek je via zo'n link, dan ontvangen wij een commissie van die partner. Jij betaalt daardoor niets extra.",
            "Commissies bepalen niet wat we aanraden. Als iets het geld niet waard is, schrijven we dat ook.",
            "Een boeking sluit je af met de partner of de aanbieder van de activiteit, niet met ons. Hun voorwaarden en annuleringsbeleid gelden voor die boeking.",
          ],
        },
        {
          heading: "Pdf-gidsen kopen",
          paragraphs: [
            "De prijs bij de checkout is inclusief btw. Je betaalt via Stripe. De koop is gesloten zodra de betaling is gelukt.",
            "Direct na de betaling krijg je een downloadlink. Die werkt zeven dagen. Lukt het downloaden niet, mail ons dan en we sturen een nieuwe link.",
          ],
        },
        {
          heading: "Herroepingsrecht",
          paragraphs: [
            "Normaal heb je als consument in de EU veertien dagen bedenktijd. Bij digitale inhoud die direct wordt geleverd vervalt dat recht als je daar bij de aankoop uitdrukkelijk mee instemt. Die instemming vragen we in de checkout.",
            "Is de gids beschadigd of niet wat we beloofden, mail ons dan. We lossen het op of betalen je terug.",
          ],
        },
        {
          heading: "Gebruik van de gidsen",
          paragraphs: [
            "Je mag een gekochte gids gebruiken voor jezelf en je reisgezelschap. Doorverkopen, delen of publiceren is niet toegestaan.",
            "De teksten op deze site zijn van ons. Foto's vallen onder de licentie die bij elke foto en op de pagina met fotocredits staat.",
          ],
        },
        {
          heading: "Aansprakelijkheid",
          paragraphs: [
            "We zijn niet aansprakelijk voor schade door het gebruik van reisinformatie die inmiddels is veranderd, of door boekingen bij partners. Onze aansprakelijkheid is in alle gevallen beperkt tot het bedrag dat je ons hebt betaald, voor zover de wet dat toestaat.",
          ],
        },
        {
          heading: "Toepasselijk recht",
          paragraphs: [
            "Op deze voorwaarden is Nederlands recht van toepassing. Woon je in een ander EU-land, dan houd je de bescherming die het dwingende recht van dat land je geeft.",
          ],
        },
      ],
    };
  }
  return {
    title: "Terms of use",
    description: `The terms for using ${SITE_NAME} and buying PDF guides.`,
    updated: UPDATED,
    intro: `These terms apply to your use of ${SITE_NAME} and to purchases of our digital travel guides.`,
    sections: [
      {
        heading: "Who we are",
        paragraphs: [`${c.name}, ${c.address}. Chamber of Commerce no. ${c.kvk}, VAT no. ${c.vat}. Email: ${c.email}.`],
      },
      {
        heading: "Travel information",
        paragraphs: [
          "We check prices, opening hours and rules carefully, but they change often. Always confirm important details with the provider before you travel. Every article shows when it was last updated.",
        ],
      },
      {
        id: "affiliate-links",
        heading: "How we make money",
        paragraphs: [
          "Some links on this site are affiliate links to booking partners such as Viator and GetYourGuide. When you book through one of them, the partner pays us a commission. It costs you nothing extra.",
          "Commissions never decide what we recommend. If something is not worth the money, we say so.",
          "A booking is a contract between you and the partner or activity provider, not us. Their terms and cancellation policy apply to it.",
        ],
      },
      {
        heading: "Buying a PDF guide",
        paragraphs: [
          "The price at checkout includes any VAT or sales tax that applies. Payment is handled by Stripe. The purchase is complete once the payment succeeds.",
          "You get a download link right after paying. It works for seven days. If the download fails, email us and we will send a new link.",
        ],
      },
      {
        heading: "Right of withdrawal",
        paragraphs: [
          "EU consumers normally have 14 days to cancel. For digital content delivered immediately, that right ends when you expressly agree to it at purchase, which we ask you to do at checkout.",
          "If a guide is damaged or not what we described, email us and we will fix it or refund you.",
        ],
      },
      {
        heading: "Using the guides",
        paragraphs: [
          "You may use a guide you bought for yourself and the people you travel with. Reselling, sharing or publishing it is not allowed.",
          "The text on this site is ours. Photos are used under the license shown with each photo and on the photo credits page.",
        ],
      },
      {
        heading: "Liability",
        paragraphs: [
          "We are not liable for losses caused by travel information that has since changed, or by bookings made with partners. In all cases our liability is limited to the amount you paid us, as far as the law allows.",
        ],
      },
      {
        heading: "Governing law",
        paragraphs: [
          "These terms are governed by Dutch law. If you live elsewhere, you keep any protection the mandatory consumer law of your country gives you.",
        ],
      },
    ],
  };
}

export function getLegalDocument(kind: "privacy" | "terms", locale: Locale): LegalDocument {
  return kind === "privacy" ? privacy(locale) : terms(locale);
}
