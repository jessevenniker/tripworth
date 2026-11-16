// Direct booking links per article: the specific tour or ticket we recommend, instead of a search page.
// URLs are stored clean (no tracking); partner IDs are added in bookingPicksFor() in articles.ts.
// For itinerary articles the pick is the partner's city page, since those cover several bookings.
// Picked November 2026 from Viator and GetYourGuide. Re-check when an article is updated:
// tours get delisted, and a dead product URL falls back to the partner's 404 page.

export type Partner = "Viator" | "GetYourGuide";
export type BookingPick = { partner: Partner; title: string; url: string };

const V = (path: string, title: string): BookingPick => ({ partner: "Viator", title, url: `https://www.viator.com${path}` });
const G = (path: string, title: string): BookingPick => ({ partner: "GetYourGuide", title, url: `https://www.getyourguide.com${path}` });

export const bookingPicks: Record<string, BookingPick[]> = {
  // Rome
  "rome-colosseum-tickets": [
    V("/tours/Rome/Self-Guided-Priority-Access-Ticket-Including-the-Colosseum-Roman-Forum-and-Palatine-Hill/d511-5831P36", "Colosseum priority ticket with Forum and Palatine"),
    G("/colosseum-l2619/", "All Colosseum tickets and tours"),
  ],
  "rome-vatican-tickets": [
    V("/tours/Vatican-City/Skip-the-line-ticket-to-the-Vatican-Museum-and-the-Sistine-Chapel/d60477-62416P8", "Vatican Museums and Sistine Chapel skip-the-line ticket"),
    G("/rome-l33/skip-the-line-vatican-museums-sistine-chapel-ticket-t62214/", "Vatican Museums and Sistine Chapel entrance ticket"),
  ],
  "rome-pantheon-tickets": [
    V("/tours/Rome/Pantheon-Entry-Ticket-and-Audio-Guide/d511-195834P16", "Pantheon timed entry with audio guide"),
    G("/rome-l33/pantheon-rome-fast-track-ticket-and-only-official-audioguide-t122912/", "Pantheon entry with the official audio guide"),
  ],
  "rome-colosseum-tours": [
    V("/tours/Rome/Skip-the-line-Colosseum-Roman-Forum-and-Palatine-Hill/d511-62570P2", "Small-group Colosseum, Forum and Palatine tour"),
    G("/rome-l33/rome-skip-the-line-group-tour-colosseum-forum-palatine-hill-t405524/", "Guided tour of the Colosseum, Forum and Palatine"),
  ],
  "rome-colosseum-underground": [
    V("/tours/Rome/Expert-Guided-Tour-of-Colosseum-Underground-Arena-and-Forum/d511-55341P7", "Colosseum tour with underground or arena floor"),
    G("/rome-l33/colosseum-underground-arena-premium-tour-with-expert-guide-t1378461/", "Colosseum arena tour with optional underground"),
  ],
  "rome-3-days": [
    V("/Rome/d511-ttd", "Top-rated tours in Rome"),
    G("/rome-l33/", "Best things to do in Rome"),
  ],
  "rome-hidden-gems": [
    V("/tours/Rome/Rome-Catacombs-and-Appian-Way-Small-Group-Tour-by-Golf-Cart/d511-141019P5", "Catacombs and Appian Way by golf cart"),
    G("/catacombs-of-rome-l2621/catacombs-and-the-appian-way-day-trip-from-rome-t6587/", "Catacomb of St. Callixtus and Appian Way tour"),
  ],
  "rome-airport": [
    V("/tours/Rome/Private-Arrival-Transfer-Fiumicino-Airport-to-Rome/d511-191893P2", "Private transfer from Fiumicino to your hotel"),
    G("/rome-l33/fiumicino-airport-private-transfers-t31158/", "Private Fiumicino airport transfer"),
  ],

  // Paris
  "paris-eiffel-tickets": [
    V("/tours/Paris/Priority-Eiffel-Tower-ticket-with-Summit-Access/d479-5045P70", "Eiffel Tower summit with reserved elevator access"),
    G("/paris-l16/paris-eiffel-tower-2nd-floor-access-or-summit-access-t403458/", "Eiffel Tower 2nd floor or summit access"),
  ],
  "paris-louvre-tickets": [
    V("/tours/Paris/Paris-Louvre-Museum-Timed-Entrance-Ticket-with-Phone-Audio-Guide/d479-462362P4", "Louvre timed entry with audio tour"),
    G("/paris-l16/paris-louvre-museum-timed-entrance-ticket-audioguide-t405076/", "Louvre timed entrance with audio guide"),
  ],
  "paris-versailles": [
    V("/tours/Paris/Palace-of-Versailles-Priority-Admission/d479-374952P11", "Versailles skip-the-line ticket"),
    G("/paris-l16/skip-the-line-versailles-half-day-tour-from-paris-t3399/", "Versailles guided tour from Paris"),
  ],
  "paris-seine-cruises": [
    V("/tours/Paris/Bateaux-Parisiens-Seine-River-Sightseeing-Cruise/d479-5756SIGHTSEEING", "Bateaux Parisiens sightseeing cruise"),
    G("/paris-l16/paris-1-hour-seine-cruise-departing-from-the-eiffel-tower-t193940/", "1-hour Seine cruise from the Eiffel Tower"),
  ],
  "paris-3-days": [
    V("/Paris/d479-ttd", "Top-rated tours in Paris"),
    G("/paris-l16/", "Best things to do in Paris"),
  ],
  "paris-hidden-gems": [
    V("/tours/Paris/Paris-Hidden-Gems-in-Le-Marais/d479-47475P18", "Hidden gems of Le Marais walking tour"),
    G("/paris-l16/paris-hidden-montmartre-cultural-tour-with-local-guide-t141603/", "Hidden Montmartre walk with a local guide"),
  ],
  "paris-airport": [
    V("/tours/Paris/Paris-Private-Arrival-Transfer-from-Charles-de-Gaulle-airport-CDG-to-Paris-city/d479-136425P4", "Private transfer from CDG to Paris"),
    G("/paris-l16/paris-cdg-airport-to-paris-city-private-transfer-t784408/", "Private CDG transfer with 90 min free wait"),
  ],

  // London
  "london-tower": [
    V("/tours/London/Tower-of-London-Admission-Ticket/d737-5461P285", "Tower of London and Crown Jewels ticket"),
    G("/tower-of-london-l2708/", "All Tower of London tickets and tours"),
  ],
  "london-westminster-abbey": [
    V("/tours/London/Westminster-Abbey-Entrance-Ticket-with-Audio-Guide/d737-3858P94", "Westminster Abbey ticket with audio guide"),
    G("/westminster-abbey-l2710/london-westminster-abbey-entrance-ticket-t399163/", "Westminster Abbey entrance ticket"),
  ],
  "london-harry-potter": [
    V("/tours/London/Warner-Bros-Studio-Tour-London-Entry-Ticket-and-Escorted-Transfer/d737-6295P39", "Studio Tour ticket with escorted transfer"),
    G("/london-l57/london-harry-potter-warner-bros-studio-tour-transfers-t491628/", "Warner Bros. Studio Tour with transfer"),
  ],
  "london-day-trips": [
    V("/tours/London/Small-Group-Day-Trip-to-Stonehenge-Bath-and-Windsor-from-London/d737-5528CROWN", "Small-group Stonehenge, Bath and Windsor trip"),
    G("/london-l57/windsor-castle-stonehenge-bath-day-tour-from-london-t7319/", "Windsor Castle, Stonehenge and Bath day tour"),
  ],
  "london-3-days": [
    V("/London/d737-ttd", "Top-rated tours in London"),
    G("/london-l57/", "Best things to do in London"),
  ],
  "london-hidden-gems": [
    V("/tours/London/Secret-London-Walking-Tour/d737-9086P2", "Secret walking tour of central London"),
    G("/london-l57/secret-london-walking-tour-t71547/", "Secrets of London walking tour"),
  ],
  "london-arrival": [
    V("/tours/London/Private-Transfer-from-Heathrow-central-London/d737-26601P9", "Private Heathrow to central London transfer"),
    G("/london-l57/heathrow-airport-to-central-london-private-transfer-t594084/", "Heathrow to central London private transfer"),
  ],

  // Barcelona
  "barcelona-sagrada-familia": [
    V("/tours/Barcelona/Sagrada-Familia-Fast-Track-Ticket-with-Audio-Guide/d562-31070P114", "Sagrada Familia fast-track ticket with audio guide"),
    G("/barcelona-l45/sagrada-familia-skip-the-line-t29293/", "Sagrada Familia skip-the-line guided tour"),
  ],
  "barcelona-park-guell": [
    V("/tours/Barcelona/Park-Guell-Tickets-with-Tour-Guide/d562-340934P1", "Park Güell ticket with guided tour"),
    G("/barcelona-l45/skip-the-line-park-guell-entrance-ticket-t53791/", "Park Güell admission ticket"),
  ],
  "barcelona-gaudi-houses": [
    V("/tours/Barcelona/Skip-the-Line-Gaudis-Casa-Batllo-Ticket-with-Audio-Tour/d562-41211BATLLO", "Casa Batlló ticket with audio guide"),
    G("/casa-batllo-l3027/", "All Casa Batlló tickets"),
  ],
  "barcelona-montserrat": [
    V("/tours/Barcelona/Montserrat-Royal-Basilica-Half-Day-Trip-from-Barcelona/d562-2140JTEBA07", "Montserrat with cogwheel train and Black Madonna"),
    G("/barcelona-l45/from-barcelona-montserrat-day-trip-with-optional-tickets-t243552/", "Montserrat day trip from Barcelona"),
  ],
  "barcelona-3-days": [
    V("/Barcelona/d562-ttd", "Top-rated tours in Barcelona"),
    G("/barcelona-l45/", "Best things to do in Barcelona"),
  ],
  "barcelona-hidden-gems": [
    V("/tours/Barcelona/Barcelona-Gothic-Quarter-Morning-Walking-Tour/d562-2512BWALK01", "Gothic Quarter walking tour"),
    G("/barcelona-l45/barcelona-2-hour-gothic-walking-tour-t22653/", "2-hour Gothic Quarter walk"),
  ],
  "barcelona-airport": [
    V("/tours/Barcelona/Private-Airport-Transfer-between-Barcelona-Airport-El-Prat-BCN-and-Barcelona/d562-365256P10", "Private El Prat airport transfer"),
    G("/barcelona-l45/barcelona-private-transfer-tofrom-el-prat-airport-t125123/", "Private transfer to or from El Prat"),
  ],

  // New York
  "nyc-statue-of-liberty": [
    V("/tours/New-York-City/Statue-of-Liberty-Pedestal-Reserve-Access-Ticket-Includes-Ellis-Island/d687-162649P3", "Statue of Liberty pedestal and Ellis Island ticket"),
    G("/new-york-city-l59/statue-of-liberty-ellis-island-ticket-options-with-ferry-t393246/", "Official Statue City Cruises ferry ticket"),
  ],
  "nyc-911-museum": [
    V("/tours/New-York-City/9-11-Memorial-Museum-Admission/d687-7195SEPT11", "9/11 Memorial Museum admission"),
    G("/new-york-city-l59/911-memorial-museum-admission-skip-the-ticket-line-t109024/", "9/11 Museum timed ticket"),
  ],
  "nyc-broadway": [
    V("/New-York-City-tours/Theater-Shows-and-Musicals/d687-g11-c44", "Broadway shows and musicals"),
    G("/broadway-new-york-city-l3362/shows-musicals-tc124/", "Broadway shows and musicals"),
  ],
  "nyc-observation-decks": [
    V("/tours/New-York-City/SUMMIT-One-Vanderbilt-Skip-the-Line-Premium-Experience-with-Tour/d687-77354P5", "SUMMIT One Vanderbilt skip-the-line experience"),
    G("/summit-one-vanderbilt-l165436/", "All SUMMIT One Vanderbilt tickets"),
  ],
  "nyc-4-days": [
    V("/New-York-City/d687-ttd", "Top-rated tours in New York"),
    G("/new-york-city-l59/", "Best things to do in New York"),
  ],
  "nyc-hidden-gems": [
    V("/tours/New-York-City/Greenwich-Village-Food-Tour/d687-9510P2", "Greenwich Village food walking tour"),
    G("/new-york-city-l59/greenwich-village-tour-t72313/", "Greenwich Village walking tour"),
  ],
  "nyc-airports": [
    V("/tours/New-York-City/JFK-Luxury-SUV-NYC-transfer/d687-234480P4", "Private JFK to Manhattan transfer"),
    G("/queens-new-york-city-l87699/jfk-airport-to-manhattan-private-transfers-t43502/", "Private JFK transfer to Manhattan"),
  ],

  // Cancún and Riviera Maya
  "cancun-chichen-itza": [
    V("/tours/Cancun/Chichen-Itza-Ik-Kil-Cenote-and-Valladolid-Full-Day-Tour/d631-110186P2", "Chichén Itzá, cenote and Valladolid day tour"),
    G("/chichen-itza-l785/", "All Chichén Itzá tours"),
  ],
  "cancun-tulum-ruins": [
    V("/tours/Cancun/Tulum-Ruins-and-Underground-Cenote-and-Cave-Tour-from-Cancun/d631-44670P2", "Tulum ruins and underground cenote tour"),
    G("/playa-del-carmen-l308/from-puerto-morelos-mayan-ruins-guided-trip-cenote-swim-t414132/", "Tulum ruins, Cenote Mariposa and Playa del Carmen"),
  ],
  "cancun-isla-mujeres": [
    V("/tours/Cancun/Isla-Mujeres-All-Inclusive-Catamaran-Tour/d631-110186P10", "Isla Mujeres catamaran with snorkel and open bar"),
    G("/cancun-l150/isla-mujeres-catamaran-tour-with-open-bar-optional-lunch-t69067/", "Isla Mujeres catamaran with open bar and snorkeling"),
  ],
  "cancun-xcaret": [
    V("/tours/Cancun/Xcaret-Admission-Ticket/d631-6140P17", "Xcaret admission with the night show"),
    G("/xcaret-park-l4454/entry-tickets-tc123/", "All Xcaret tickets"),
  ],
  "cancun-5-days": [
    V("/Cancun/d631-ttd", "Top-rated tours in Cancún"),
    G("/cancun-l150/", "Best things to do in Cancún"),
  ],
  "cancun-hidden-gems": [
    V("/tours/Playa-del-Carmen/Half-day-excursion-to-Tulum-and-swim-in-cenote/d5501-144472P4", "Tulum and two cenotes half-day tour"),
    G("/riviera-maya-l1099/cenote-tours-tc177/", "Riviera Maya cenote tours"),
  ],
  "cancun-airport": [
    V("/tours/Cancun/Cancun-Hotel-Zone-Private-Transportation-From-To-Airport/d631-106758P1", "Private airport transfer to the Hotel Zone"),
    G("/cancun-l150/airport-transfers-tc153/", "Cancún airport transfers"),
  ],
  "cancun-cozumel-shore": [
    V("/tours/Cozumel/Cozumel-Shore-Excursion-3-Reefs-Snorkel-and-El-Cielo-Experience/d632-8916P8", "3-reef snorkel and El Cielo shore excursion"),
    G("/cozumel-l309/shore-excursions-tc156/", "Cozumel shore excursions"),
  ],

  // Aruba
  "aruba-snorkeling-tours": [
    V("/tours/Aruba/Catalina-Bay-and-Antilla-Shipwreck-Snorkel-Cruise/d28-2785AFTSNORKEL", "Antilla shipwreck and Catalina Bay snorkel cruise"),
    G("/noord-l1101/aruba-catamaran-snorkeling-adventure-t400644/", "Catamaran snorkeling adventure"),
  ],
  "aruba-arikok": [
    V("/tours/Aruba/4x4-Tour-and-Natural-Pool-Snorkeling-in-Aruba/d28-6841POOL", "Arikok and Natural Pool jeep safari"),
    G("/santa-cruz-aruba-l111930/aruba-arikok-national-park-jeep-safari-t678325/", "Arikok National Park jeep safari"),
  ],
  "aruba-one-week": [
    V("/Aruba/d28-ttd", "Top-rated tours in Aruba"),
    G("/aruba-l169061/", "Best things to do in Aruba"),
  ],
  "aruba-hidden-gems": [
    V("/tours/Aruba/Aruba-Off-Road-Island-Tour-Including-Natural-Pool-and-Baby-Beach/d28-6841ISLAND", "Off-road island tour with Baby Beach"),
    G("/santa-cruz-aruba-l111930/aruba-3-hour-guided-island-sightseeing-tour-t299955/", "Guided island sightseeing tour"),
  ],
  "aruba-airport": [
    V("/tours/Aruba/Round-Trip-Private-Transfer-Queen-Beatrix-International-Airport-Aruba-AUA-to-Hotels/d28-17972P634", "Round-trip private airport transfer"),
    G("/oranjestad-l341/aruba-private-transfer-t27214/", "Private airport transfer to your hotel"),
  ],
  "aruba-shore-excursions": [
    V("/tours/Aruba/Aruba-Shore-Excursion-4x4-Tour-and-Natural-Pool-Snorkeling/d28-6841PRTAUAPOOL", "Natural Pool jeep safari from the cruise port"),
    V("/tours/Aruba/Aruba-Shore-Excursion-The-Highlights-and-Delights-Tour/d28-89829P36", "Small-group island highlights from the port"),
  ],
  // Passes ("is it worth it?"): the pass itself, for readers who decide it is.
  "rome-roma-pass": [
    G("/rome-l33/roma-pass-48-or-72-hour-city-card-t68896/", "Roma Pass: 48 or 72-hour city card"),
    V("/Rome-tours/Sightseeing-Tickets-and-Passes/d511-g8", "Rome tickets and passes"),
  ],
  "paris-museum-pass": [
    G("/paris-l16/paris-museum-pass-t49746/", "Paris Museum Pass: 2, 4 or 6 days"),
    V("/tours/Paris/Paris-Museum-Pass-Your-Ticket-to-Art-History-and-Culture/d479-460119P14", "Paris Museum Pass: 2, 4 or 6 days"),
  ],
  "london-pass": [
    V("/tours/London/London-Pass/d737-3138LONDON", "The London Pass: 1 to 10 days"),
    G("/london-l57/london-london-passr-save-up-to-50-includes-london-eye-t26207/", "The London Pass: 100+ attractions"),
  ],
  "nyc-citypass": [
    G("/new-york-city-l59/new-york-citypassr-save-up-to-41-at-5-top-attractions-t18597/", "New York CityPASS: 5 attractions"),
    V("/tours/New-York-City/New-York-CityPass/d687-2640NYC", "New York CityPASS"),
  ],

  // "Best time to visit" and other pages without one obvious product: the partner's city page.
  "rome-best-time": [V("/Rome/d511-ttd", "Top-rated tours in Rome"), G("/rome-l33/", "Best things to do in Rome")],
  "paris-best-time": [V("/Paris/d479-ttd", "Top-rated tours in Paris"), G("/paris-l16/", "Best things to do in Paris")],
  "london-best-time": [V("/London/d737-ttd", "Top-rated tours in London"), G("/london-l57/", "Best things to do in London")],
  "barcelona-best-time": [V("/Barcelona/d562-ttd", "Top-rated tours in Barcelona"), G("/barcelona-l45/", "Best things to do in Barcelona")],
  "nyc-best-time": [V("/New-York-City/d687-ttd", "Top-rated tours in New York"), G("/new-york-city-l59/", "Best things to do in New York")],
  "cancun-best-time": [V("/Cancun/d631-ttd", "Top-rated tours in Cancún"), G("/cancun-l150/", "Best things to do in Cancún")],
  "aruba-best-time": [V("/Aruba/d28-ttd", "Top-rated tours in Aruba"), G("/aruba-l169061/", "Best things to do in Aruba")],
  "aruba-flamingo-beach": [V("/Aruba/d28-ttd", "Top-rated tours in Aruba"), G("/aruba-l169061/", "Best things to do in Aruba")],
};
