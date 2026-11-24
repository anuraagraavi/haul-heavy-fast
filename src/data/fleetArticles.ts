/** Fleet focused articles (Nov 2026). Copy rule: no hyphens or dashes, human voice, verifiable facts only. */
import type { BlogPostData } from "@/types/blog";
import semiImg from "@/assets/gallery/heavy-wrecker-container-semi-1600.webp";
import lowboyImg from "@/assets/gallery/linkbelt-crane-lowboy-load-1600.webp";
import dumpImg from "@/assets/gallery/dump-truck-peterbilt-haul-1600.webp";

export type FleetArticle = {
  data: BlogPostData;
  intro: string;
  sections: { id: string; heading: string; paragraphs: string[]; checklist?: string[]; callout?: { title: string; text: string } }[];
};

const base = { author: "Heavy Haulers Dispatch Team", category: "Heavy Duty", serviceAreas: [
  { name: "Oakland", href: "/towing-oakland" }, { name: "San Jose", href: "/towing-san-jose" },
  { name: "Hayward", href: "/towing-hayward" }, { name: "Stockton", href: "/towing-stockton" },
] };

export const FLEET_ARTICLES: FleetArticle[] = [
  {
    data: {
      ...base,
      slug: "jackknifed-semi-interstate-880-what-to-do",
      title: "Jackknifed Semi on Interstate 880: What Drivers and Dispatchers Should Do",
      metaTitle: "Jackknifed Semi on I 880: What to Do Next",
      metaDescription: "A practical guide for truck drivers and fleet dispatchers after a jackknife on Interstate 880: safety, CHP, warning triangles and getting the right rotator.",
      canonicalUrl: "https://heavytowpro.com/blog/jackknifed-semi-interstate-880-what-to-do",
      primaryKeyword: "jackknifed semi recovery",
      secondaryKeywords: ["semi truck towing", "I 880 heavy duty towing", "rotator recovery"],
      publishDate: "2026-11-24", dateModified: "2026-11-24", readTime: "7 min read",
      excerpt: "The first thirty minutes after a jackknife decide how long the lanes stay closed. Here is what to do, in order.",
      heroImage: { src: semiImg, alt: "Heavy wrecker connected to a semi truck on a Bay Area job", caption: "One of our heavy wreckers on a semi tow." },
      atAGlance: { bestUseCase: "Tractor trailers folded across lanes or the shoulder", responseWorkflow: "Safety, call 911, warning triangles, then call for a rotator", safetyNote: "Stay out of live lanes and away from the trailer pivot", dispatchNeeds: "Location, load, trailer type and whether fuel is leaking", relatedServiceLink: { text: "Semi Truck Towing", href: "/semi-truck-towing" } },
      tableOfContents: [
        { id: "first-minutes", title: "The first few minutes", level: 2 },
        { id: "what-to-tell-dispatch", title: "What to tell the tow dispatcher", level: 2 },
        { id: "why-rotators", title: "Why a jackknife usually needs a rotator", level: 2 },
        { id: "for-fleet-managers", title: "For fleet managers", level: 2 },
      ],
      faq: [
        { question: "Who calls the tow truck after a jackknife on the freeway?", answer: "CHP can call a rotation tow, but carriers can usually request their own provider if it can respond promptly. Ask the officer on scene." },
        { question: "Can a regular heavy wrecker straighten a jackknifed trailer?", answer: "Sometimes, on a dry flat road with an empty trailer. Loaded trailers or anything off the pavement usually need a rotator." },
      ],
      relatedPosts: ["semi-truck-breakdown-highway-guide"],
      relatedServices: [
        { title: "Semi Truck Towing", href: "/semi-truck-towing", description: "Tractors and trailers, loaded or empty" },
        { title: "Winch Out and Recovery", href: "/winch-out-recovery", description: "Rollovers and vehicles off the road" },
      ],
    },
    intro: "Interstate 880 carries a huge share of the Port of Oakland's container traffic, and when a tractor trailer folds across it, every lane behind it stops. What the driver and dispatcher do in the first half hour has more effect on the clearance time than anything that happens afterward.",
    sections: [
      { id: "first-minutes", heading: "The first few minutes", paragraphs: [
        "If you are hurt, or anyone else is, call 911 before anything else. If you can move safely, set the parking brakes, turn on the hazards and get out on the side away from traffic.",
        "Federal rules require a stopped commercial vehicle to put out warning devices within ten minutes, placed at 10, 100 and 200 feet behind the truck on a divided highway. On a curve or a hill, put the last triangle farther back so drivers see it in time.",
      ], checklist: ["Call 911 if anyone is injured or lanes are blocked", "Hazards on, brakes set, engine off if fuel is leaking", "Warning triangles out within ten minutes", "Stand behind the barrier, never between the truck and traffic", "Photos of the scene once it is safe"] },
      { id: "what-to-tell-dispatch", heading: "What to tell the tow dispatcher", paragraphs: [
        "The quicker we know what is on the ground, the quicker the right truck leaves the yard. A jackknife with a loaded reefer needs different equipment from an empty dry van that just slid on a wet ramp.",
      ], checklist: ["Direction of travel and nearest exit or mile marker", "Loaded or empty, and roughly what the cargo is", "Trailer type: dry van, reefer, flatbed, tanker, container", "Any fuel or fluid on the road", "Whether CHP is already on scene"] },
      { id: "why-rotators", heading: "Why a jackknife usually needs a rotator", paragraphs: [
        "Straightening a folded combination means lifting and swinging tens of thousands of pounds without tearing the fifth wheel or twisting the trailer frame. A rotator can lift from the side and turn its boom, so it can do that from a single position in a single lane.",
        "On tight shoulders and overpasses that is often the only way to keep at least one lane open while the work happens.",
      ], callout: { title: "Do not try to drive it out", text: "Pulling forward on a jackknifed rig can roll the trailer or break the kingpin. Leave it where it is until the operator has rigged it." } },
      { id: "for-fleet-managers", heading: "For fleet managers", paragraphs: [
        "Give every driver one dispatch number before the bad day happens, along with your billing details and preferred repair shop. When the call comes in, the only questions left are where and what.",
        "If you run regular loads through the East Bay, a commercial account with us means the invoice arrives with your unit number and PO already on it.",
      ] },
    ],
  },
  {
    data: {
      ...base,
      slug: "california-oversize-permit-basics-equipment-moves",
      title: "California Oversize Load Permits: The Basics for Equipment Moves",
      metaTitle: "California Oversize Permit Basics for Equipment",
      metaDescription: "When a construction equipment move in California needs an oversize permit, who issues it, and what to plan before the lowboy shows up.",
      canonicalUrl: "https://heavytowpro.com/blog/california-oversize-permit-basics-equipment-moves",
      primaryKeyword: "california oversize load permit",
      secondaryKeywords: ["construction equipment transport", "lowboy hauling Bay Area", "Caltrans transportation permit"],
      publishDate: "2026-11-24", dateModified: "2026-11-24", readTime: "6 min read",
      excerpt: "Most equipment moves that go wrong fail on paperwork, not trucks. Here is when you need a permit and who issues it.",
      heroImage: { src: lowboyImg, alt: "Crane loaded on a lowboy trailer for transport", caption: "A crane loaded on a lowboy before a permit move." },
      atAGlance: { bestUseCase: "Excavators, loaders, cranes and other machines on lowboys", responseWorkflow: "Measure, check legal limits, apply for the right permit, plan the route", safetyNote: "Measure the loaded height, not just the machine", dispatchNeeds: "Machine make and model, weight, loaded width and height", relatedServiceLink: { text: "Commercial Fleet Towing", href: "/commercial-towing" } },
      tableOfContents: [
        { id: "legal-limits", title: "The legal limits", level: 2 },
        { id: "who-issues", title: "Who issues the permit", level: 2 },
        { id: "before-the-move", title: "Before the move", level: 2 },
      ],
      faq: [
        { question: "Does every excavator move need a permit?", answer: "No. Many compact and midsize machines fit inside legal width, height and weight on a lowboy. Larger machines often do not." },
        { question: "Do I need a city permit as well?", answer: "If the route uses local streets, the city or county that owns those streets may require its own permit. Caltrans covers state highways." },
      ],
      relatedPosts: [],
      relatedServices: [
        { title: "Commercial Fleet Towing", href: "/commercial-towing", description: "Equipment moves and fleet accounts" },
        { title: "Heavy Duty Towing", href: "/services/heavy-duty", description: "Equipment and machinery transport" },
      ],
    },
    intro: "We haul excavators, loaders and cranes around the Bay Area on lowboy trailers, and the question we hear most is not about the truck. It is whether the move needs a permit. Here is the short version.",
    sections: [
      { id: "legal-limits", heading: "The legal limits", paragraphs: [
        "In California, a load generally stays legal without a special permit when it is no wider than 102 inches, no taller than 14 feet measured from the road, and the combination stays within the 80,000 pound gross weight limit and the axle limits that apply to it.",
        "Go over any of those and the move needs a transportation permit. Remember that the height includes the trailer deck. A machine that looks short on the ground can be well over 14 feet once it sits on a lowboy.",
      ], checklist: ["Loaded width over 102 inches", "Loaded height over 14 feet", "Gross weight over 80,000 pounds or over axle limits", "Unusual length or overhang"] },
      { id: "who-issues", heading: "Who issues the permit", paragraphs: [
        "Caltrans issues transportation permits for state highways and interstates. Cities and counties issue their own for the local roads they own, and a route from a yard in Hayward to a job site in the hills may need both.",
        "Larger loads can require escort vehicles, travel time restrictions and specific routes. Your hauler should plan the route around those before quoting the job.",
      ] },
      { id: "before-the-move", heading: "Before the move", paragraphs: [
        "Send us the make and model, the operating weight and any attachments that stay on. We will tell you which trailer we would use and whether the loaded dimensions put the move into permit territory.",
      ], callout: { title: "Plan ahead", text: "Permits are not always same day. If the move is on a deadline, call as soon as you know the dates." } },
    ],
  },
  {
    data: {
      ...base,
      slug: "box-truck-breakdown-checklist-bay-area-fleets",
      title: "Box Truck Breakdown Checklist for Bay Area Fleets",
      metaTitle: "Box Truck Breakdown Checklist for Bay Area Fleets",
      metaDescription: "A simple breakdown checklist for delivery and box truck drivers in the Bay Area, from the first call to getting the cargo moving again.",
      canonicalUrl: "https://heavytowpro.com/blog/box-truck-breakdown-checklist-bay-area-fleets",
      primaryKeyword: "box truck breakdown",
      secondaryKeywords: ["box truck towing", "delivery truck towing Bay Area", "fleet breakdown checklist"],
      publishDate: "2026-11-24", dateModified: "2026-11-24", readTime: "5 min read",
      excerpt: "Print this, tape it to the visor, and your drivers will never stand on a shoulder wondering who to call.",
      heroImage: { src: dumpImg, alt: "Heavy tow truck moving a commercial truck on a Bay Area road", caption: "Commercial tows run smoother when the driver has the details ready." },
      atAGlance: { bestUseCase: "Delivery, moving and route trucks up to 26 feet", responseWorkflow: "Make it safe, call dispatch, protect the cargo, tow to the approved shop", safetyNote: "Never stand between the truck and traffic", dispatchNeeds: "Truck length, cargo status, rental or owned, location", relatedServiceLink: { text: "Box Truck Towing", href: "/box-truck-towing" } },
      tableOfContents: [
        { id: "on-the-road", title: "When it happens on the road", level: 2 },
        { id: "the-call", title: "The call", level: 2 },
        { id: "the-cargo", title: "The cargo", level: 2 },
      ],
      faq: [
        { question: "Should we tow a loaded box truck or unload it first?", answer: "Most loaded box trucks can be towed as they are. If the cargo is perishable or time critical, plan a transfer to a second truck." },
      ],
      relatedPosts: ["box-truck-towing-san-francisco"],
      relatedServices: [
        { title: "Box Truck Towing", href: "/box-truck-towing", description: "Delivery trucks, step vans, rentals" },
        { title: "Commercial Fleet Towing", href: "/commercial-towing", description: "One number for all your drivers" },
      ],
    },
    intro: "A box truck breakdown costs more than the tow. There is a route that will not get finished, cargo with a delivery window and a driver who may never have dealt with this before. A short checklist fixes most of that.",
    sections: [
      { id: "on-the-road", heading: "When it happens on the road", paragraphs: ["Get as far right as you safely can, hazards on, and put out triangles behind the truck. In the city, a loading zone or side street is far better than a travel lane."], checklist: ["Hazards on and triangles out", "Note the cross street or freeway exit", "Photo of the dashboard warnings", "Check the cargo door is locked"] },
      { id: "the-call", heading: "The call", paragraphs: ["Call your fleet dispatcher first, then the tow line they gave you. Have the truck length, unit number and the shop it should go to. If it is a rental, have the agreement number ready."] },
      { id: "the-cargo", heading: "The cargo", paragraphs: ["Refrigerated loads have a clock on them. Tell the tow dispatcher if the reefer is running so they can plan around it, and decide early whether a second truck should come for a transfer."], callout: { title: "Keep one number on the visor", text: "Fleets with an account call one line and the invoice lands with the unit number on it." } },
    ],
  },
];

export const FLEET_ARTICLE_BY_SLUG = Object.fromEntries(FLEET_ARTICLES.map((a) => [a.data.slug, a]));
