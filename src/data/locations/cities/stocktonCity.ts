import type { LandingImageId } from "../../landingImages";
import { countyHubInfo, cityToCounty, GEO } from "../_shared";
import type { LocationData } from "../types";

const img = (id: LandingImageId) => id;

const slug = "stockton";
const display = "Stockton";
const cs = cityToCounty[slug]!;
const info = countyHubInfo[cs];

export const stocktonLocation: LocationData = {
  slug,
  kind: "city",
  url: `/towing-${slug}`,
  city: display,
  county: info.city,
  countySlug: cs,
  state: "CA",
  phone: info.phone,
  nearestHub: info.hub,
  geo: GEO[slug]!,
  heroKicker: "I-5, CA-99 & Central Valley ag / logistics spine",
  metaTitle: "Stockton Towing | I-5, 99 & Port of Stockton Fleet",
  metaDescription:
    "Stockton tow trucks for I-5, CA-99, and Hammer Lane. Live dispatch, flatbed EV moves, and medium-duty for port and logistics corridors — not listed under Contra Costa.",
  h1: "Stockton Towing for I-5, CA-99 & the San Joaquin Logistics Belt",
  heroSubhead: "From the Port to Lincoln Village, dispatch routes Central Valley crews who understand ag traffic, delta wind, and heavy truck lanes.",
  neighborhoodIntro:
    "Stockton anchors I-5 and CA-99 freight with local port logistics and wide arterials. We plan for Hammer Lane speed, March Lane retail congestion, and delta breeze securement.",
  localIntro:
    "A blown tire on I-5 near Eight Mile or a fleet reefer at the Port needs GVWR honesty and wind awareness on open stretches. Heavy Tow Pro is routed as San Joaquin County service — not Contra Costa — with flatbed-first defaults for EV commuters and medium-duty depth for ag and logistics trucks.",
  primaryKeyword: "stockton towing",
  secondaryKeywords: ["tow truck stockton ca", "i-5 stockton towing", "ca-99 tow stockton", "flatbed stockton"],
  longTailKeywords: ["port of stockton tow truck", "hammer lane towing", "lincoln village tow", "ev towing stockton"],
  lsiTerms: ["i-5", "99", "port", "ag", "flatbed", "dispatch"],
  neighborhoodsServed: ["Lincoln Village", "Brookside", "Spanos Park", "Stonewood", "Lakeview", "Weston Ranch", "Valley Oak", "Park District", "Miracle Mile", "March Lane corridor", "Hammer Lane corridor", "Downtown Stockton"],
  freeways: ["I-5", "CA-99", "CA-4", "SR-4"],
  landmarks: ["Port of Stockton", "University of the Pacific", "Banner Island Ballpark", "Stockton Arena", "Miracle Mile", "San Joaquin River crossings"],
  confidencePoints: [
    { title: "I-5 / 99 truck-lane fluency", body: "We respect truck merge timing and stage with full reflective kit." },
    { title: "Port & logistics literacy", body: "Dock numbers, reefer height, and GVWR questions up front." },
    { title: "Delta wind securement", body: "Open fetch areas get extra strap checks on flatbeds." },
    { title: "Flatbed-first for commuters", body: "EV and AWD daily drivers protected." },
    { title: "Honest ETAs", body: "Freight incidents ripple fast — we communicate changes." },
  ],
  commonScenarios: [
    "I-5 shoulder stalls near Eight Mile Rd",
    "CA-99 overheating near Arch-Airport Rd",
    "March Lane retail lot assists",
    "Port gate fleet van tows",
    "Hammer Lane commuter breakdowns",
  ],
  faqs: [
    { q: "Is Stockton served under Contra Costa County?", a: "No — Stockton is in San Joaquin County. We route Central Valley dispatch separately from Contra Costa hub pages." },
    { q: "Do you tow on I-5 and CA-99?", a: "Yes — mile marker and direction help CHP coordination." },
    { q: "Port of Stockton pickups?", a: "Yes — share gate and escort instructions when required." },
    { q: "EV towing?", a: "Flatbed-first standard." },
    { q: "Work trucks?", a: "GVWR first." },
    { q: "Are you 24/7?", a: "Yes." },
  ],
  images: {
    hero: img("heavy_semi_reefer"),
    services: [img("light_suv_highway"), img("medium_commercial_truck_recovery"), img("light_rivian_ev")],
    finalCta: img("light_ram_truck"),
  },
  relatedCities: [
    { slug: "antioch", anchorBlurb: "CA-4 west toward Contra Costa" },
    { slug: "livermore", anchorBlurb: "Altamont / 580 toward Bay Area" },
    { slug: "pleasanton", anchorBlurb: "680 south Tri-Valley" },
    { slug: "concord", anchorBlurb: "680 toward Central CC" },
    { slug: "fremont", anchorBlurb: "Dumbarton / 880 corridor" },
    { slug: "san-jose", anchorBlurb: "South Bay via 580/680" },
  ],
  relatedGuides: [
    { slug: "stockton-towing-dispatch-checklist", title: "Stockton towing dispatch checklist" },
    { slug: "semi-truck-breakdown-highway-guide", title: "Semi truck highway breakdown guide" },
  ],
  serviceHighlights: [
    {
      title: "I-5 / 99 corridor rescue",
      body: "Truck-heavy lanes with CHP-aware staging and commuter EV flatbeds.",
      imageId: "light_suv_highway",
      featured: true,
    },
    { title: "Port & reefer logistics", body: "Medium-duty for work trucks and refrigerated units when needed.", imageId: "medium_commercial_truck_recovery" },
    { title: "EV commuter flatbed", body: "Protective loading for Central Valley EV adoption pockets.", imageId: "light_rivian_ev" },
  ],
  localKnowledge: [
    { icon: "Route", title: "5 vs 99", body: "We pick approach based on freight incidents and live closures." },
    { icon: "Truck", title: "GVWR", body: "Ag and logistics trucks need honest weight class up front." },
    { icon: "MountainSnow", title: "Delta breeze", body: "Wind can spike on river approaches — we adjust securement." },
    { icon: "ShieldCheck", title: "Trust", body: "DOT-compliant operators." },
  ],
  stats: [
    { value: "~20 min", label: "Typical Stockton ETA" },
    { value: "I-5/99", label: "Freight fluency" },
    { value: "24/7", label: "Live dispatch" },
    { value: "Port-aware", label: "Logistics routing" },
  ],
  testimonials: [
    { name: "Raul V.", neighborhood: "Lincoln Village", vehicle: "Freightliner Cascadia", rating: 5, quote: "Port gate codes, escort timing — they did not waste my clock." },
    { name: "Kimberly S.", neighborhood: "Brookside", vehicle: "Tesla Model 3", rating: 5, quote: "99 was crawling — dispatcher still beat the ETA window." },
    { name: "Darnell J.", neighborhood: "March Lane", vehicle: "RAM 2500", rating: 5, quote: "Straight talk, right truck, fast load. That is the whole job." },
  ],
  aggregateRating: { ratingValue: 4.82, reviewCount: 198 },
  signatureColor: "blue",
};
