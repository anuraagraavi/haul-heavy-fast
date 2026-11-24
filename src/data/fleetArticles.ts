/** Fleet focused articles (Nov 2026). Copy rule: no hyphens or dashes, human voice, verifiable facts only. */
import type { BlogPostData } from "@/types/blog";
import semiImg from "@/assets/gallery/heavy-wrecker-container-semi-1600.webp";
import lowboyImg from "@/assets/gallery/linkbelt-crane-lowboy-load-1600.webp";
import dumpImg from "@/assets/gallery/dump-truck-peterbilt-haul-1600.webp";

export type FleetArticle = {
  data: BlogPostData;
  intro: string;
  sections: {
    id: string;
    heading: string;
    paragraphs: string[];
    checklist?: string[];
    checklistTitle?: string;
    callout?: { title: string; text: string };
    table?: { caption: string; headers: string[]; rows: string[][] };
    links?: { text: string; href: string }[];
  }[];
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
      metaDescription: "What truck drivers and fleet dispatchers should do after a jackknife on Interstate 880: scene safety, CHP, warning triangles, mechanical risks and the right recovery equipment.",
      canonicalUrl: "https://heavytowpro.com/blog/jackknifed-semi-interstate-880-what-to-do",
      primaryKeyword: "jackknifed semi recovery",
      secondaryKeywords: ["semi truck towing", "I 880 heavy duty towing", "rotator recovery"],
      publishDate: "2026-11-24", dateModified: "2026-11-24", readTime: "10 min read",
      excerpt: "The first thirty minutes after a jackknife decide how long the lanes stay closed. Here is what to do, in order, and why.",
      heroImage: { src: semiImg, alt: "Heavy wrecker connected to a semi truck on a Bay Area job", caption: "One of our heavy wreckers on a semi tow." },
      atAGlance: { bestUseCase: "Tractor trailers folded across lanes or the shoulder", responseWorkflow: "Safety, call 911, warning triangles, then call for heavy recovery", safetyNote: "Stay out of live lanes and away from the trailer pivot", dispatchNeeds: "Location, load, trailer type and whether fuel is leaking", relatedServiceLink: { text: "Semi Truck Towing", href: "/semi-truck-towing" } },
      tableOfContents: [
        { id: "first-minutes", title: "The first few minutes", level: 2 },
        { id: "do-not-drive-out", title: "Why you should not drive out of it", level: 2 },
        { id: "what-to-tell-dispatch", title: "What to tell the tow dispatcher", level: 2 },
        { id: "chp-and-your-tow", title: "CHP and choosing your tow provider", level: 2 },
        { id: "why-rotators", title: "Why a jackknife usually needs a rotator", level: 2 },
        { id: "load-comparison", title: "How the load changes the job", level: 2 },
        { id: "the-880-corridor", title: "Why Interstate 880 is different", level: 2 },
        { id: "for-fleet-managers", title: "For fleet managers", level: 2 },
      ],
      faq: [
        { question: "Who calls the tow truck after a jackknife on the freeway?", answer: "CHP can call a tow from its rotation list. A carrier can often ask for its own provider instead, as long as that provider can respond in a reasonable time. The officer on scene makes the final call, so ask early." },
        { question: "Can a regular heavy wrecker straighten a jackknifed trailer?", answer: "Sometimes, on a dry flat road with an empty trailer. Loaded trailers, anything off the pavement and scenes with limited room usually need a rotator." },
        { question: "Should the driver try to pull forward and straighten the rig?", answer: "No. Pulling forward can roll the trailer, tear air lines or damage the fifth wheel and kingpin. Leave it where it is until the recovery operator has rigged it." },
        { question: "What happens to the cargo after a jackknife?", answer: "If the trailer is sound, it can often be towed loaded. If it is damaged or the load has shifted, the cargo may need to be transferred to another trailer on scene or at a nearby yard. Tell dispatch what you are hauling so they can plan for it." },
        { question: "How long does a jackknife recovery take?", answer: "It depends on the load, the damage, the weather and how much room there is to work. An honest answer is only possible once the operator sees the scene, so be wary of anyone who promises a time over the phone." },
      ],
      relatedPosts: ["semi-truck-breakdown-highway-guide"],
      relatedServices: [
        { title: "Semi Truck Towing", href: "/semi-truck-towing", description: "Tractors and trailers, loaded or empty" },
        { title: "Winch Out and Recovery", href: "/winch-out-recovery", description: "Rollovers and vehicles off the road" },
      ],
    },
    intro: "Interstate 880 carries a huge share of the Port of Oakland's container traffic, and when a tractor trailer folds across it, every lane behind it stops. What the driver and dispatcher do in the first half hour has more effect on the clearance time than anything that happens afterward. This guide walks through that half hour, explains what is going on mechanically, and shows how the type of load changes the recovery.",
    sections: [
      { id: "first-minutes", heading: "The first few minutes", paragraphs: [
        "If you are hurt, or anyone else is, call 911 before anything else. If you can move safely, set the parking brakes, turn on the hazards and get out on the side away from traffic.",
        "Federal rules require a stopped commercial vehicle to put out warning devices within ten minutes, placed at 10, 100 and 200 feet behind the truck on a divided highway. On a curve or a hill, put the last triangle farther back so drivers see it in time.",
        "Then get yourself behind the barrier or well off the shoulder. Most of the serious injuries at freeway incidents happen to people standing near the vehicle, not to the people inside it when it stopped.",
      ], checklist: ["Call 911 if anyone is injured or lanes are blocked", "Hazards on, brakes set, engine off if fuel is leaking", "Warning triangles out within ten minutes", "Stand behind the barrier, never between the truck and traffic", "Photos of the scene once it is safe"] },
      { id: "do-not-drive-out", heading: "Why you should not drive out of it", paragraphs: [
        "When the trailer swings past the tractor, a few things can break that you cannot see from the cab. The air lines between tractor and trailer stretch or tear, which can set the trailer spring brakes. The fifth wheel and the kingpin take a load from the side they were never designed for. The tractor's fuel tanks often end up right where the trailer nose swings, and a cracked tank turns a recovery into a cleanup.",
        "Trying to pull forward with any of that going on can roll the trailer, rip the coupling apart or spread diesel across the lanes. Even if it looks like the rig would straighten with a little throttle, leave it. The operator will check the coupling, the lines and the tanks before anything moves.",
      ], callout: { title: "Do not try to drive it out", text: "Pulling forward on a jackknifed rig can roll the trailer or break the kingpin. Leave it where it is until the operator has rigged it." } },
      { id: "what-to-tell-dispatch", heading: "What to tell the tow dispatcher", paragraphs: [
        "The quicker we know what is on the ground, the quicker the right truck leaves the yard. A jackknife with a loaded reefer needs different equipment from an empty dry van that just slid on a wet ramp.",
        "If you are a fleet dispatcher taking the call from your driver, get these details before you call us. It saves a second round of phone calls while the driver is standing on the shoulder.",
      ], checklist: ["Direction of travel and nearest exit or mile marker", "Loaded or empty, and roughly what the cargo is", "Trailer type: dry van, reefer, flatbed, tanker, container", "Any fuel or fluid on the road", "Whether CHP is already on scene"] },
      { id: "chp-and-your-tow", heading: "CHP and choosing your tow provider", paragraphs: [
        "On California freeways, CHP is in charge of the scene. If nobody has a tow on the way, the officer will usually call the next company on the CHP rotation list for that area.",
        "Carriers can often ask for their own provider instead. Whether the officer agrees depends on how quickly that company can arrive and what the scene needs, since a blocked freeway cannot wait long. That is the practical reason to have one heavy recovery number ready before anything goes wrong: if you can tell the officer who is coming and roughly when, you have a much better chance of keeping your own provider.",
        "Rules and local practice can change, so treat the officer on scene as the final word.",
      ] },
      { id: "why-rotators", heading: "Why a jackknife usually needs a rotator", paragraphs: [
        "Straightening a folded combination means lifting and swinging tens of thousands of pounds without tearing the fifth wheel or twisting the trailer frame. A rotator can lift from the side and turn its boom, so it can do that from a single position in a single lane.",
        "On tight shoulders and overpasses that is often the only way to keep at least one lane open while the work happens.",
      ], links: [{ text: "Winch out and recovery service", href: "/winch-out-recovery" }] },
      { id: "load-comparison", heading: "How the load changes the job", paragraphs: [
        "No two jackknifes are the same, but the type of trailer and what is in it tell us a lot before we arrive. Here is a general comparison. Every scene is assessed in person.",
      ], table: { caption: "General comparison of common jackknife scenarios", headers: ["Scenario", "Likely equipment", "What makes it harder", "Typical lane impact"], rows: [
        ["Empty dry van on dry pavement", "Heavy wrecker, sometimes a rotator", "Coupling damage, tight shoulder", "Often one or two lanes"],
        ["Loaded container or dry van", "Rotator plus heavy wrecker", "Weight, shifted load, frame damage", "Usually several lanes for a period"],
        ["Tanker", "Rotator, plus hazmat or cleanup crews when needed", "Product type, leaks, venting", "Can close the full roadway"],
        ["Trailer off the pavement", "Rotator, rigging, sometimes a second wrecker", "Soft ground, embankments", "Depends on where the work can be staged"],
      ] } },
      { id: "the-880-corridor", heading: "Why Interstate 880 is different", paragraphs: [
        "Interstate 880 runs from Oakland down through San Leandro, Hayward, Union City and Fremont to San Jose, and it is one of the main routes for trucks moving to and from the Port of Oakland. Container chassis, warehouse traffic and commuters all share the same lanes, and the shoulders in older sections are narrow.",
        "That means a jackknife here backs traffic up quickly, and there is not always room to park recovery equipment off the travel lanes. It is one more reason the right truck on the first dispatch matters so much on this corridor.",
      ], links: [{ text: "Towing in Oakland", href: "/towing-oakland" }, { text: "Towing in Hayward", href: "/towing-hayward" }, { text: "Towing in San Jose", href: "/towing-san-jose" }] },
      { id: "for-fleet-managers", heading: "For fleet managers", paragraphs: [
        "Give every driver one dispatch number before the bad day happens, along with your billing details and preferred repair shop. When the call comes in, the only questions left are where and what.",
        "After the scene clears, collect the driver's photos, the CHP report number and the tow invoice in one place. Your insurer will ask for all three.",
        "If you run regular loads through the East Bay, a commercial account with us means the invoice arrives with your unit number and PO already on it.",
      ], links: [{ text: "Commercial fleet towing accounts", href: "/commercial-towing" }] },
    ],
  },
  {
    data: {
      ...base,
      slug: "california-oversize-permit-basics-equipment-moves",
      title: "California Oversize Load Permits: The Basics for Equipment Moves",
      metaTitle: "California Oversize Load Permits for Equipment Moves",
      metaDescription: "When a construction equipment move in California needs an oversize permit, single trip versus annual permits, pilot cars, Bay Area restrictions and choosing the right trailer.",
      canonicalUrl: "https://heavytowpro.com/blog/california-oversize-permit-basics-equipment-moves",
      primaryKeyword: "california oversize load permit",
      secondaryKeywords: ["construction equipment transport", "lowboy hauling Bay Area", "Caltrans transportation permit"],
      publishDate: "2026-11-24", dateModified: "2026-11-24", readTime: "9 min read",
      excerpt: "Most equipment moves that go wrong fail on paperwork, not trucks. Here is when you need a permit, which kind, and what else to plan for.",
      heroImage: { src: lowboyImg, alt: "Crane loaded on a lowboy trailer for transport", caption: "A crane loaded on a lowboy before a permit move." },
      atAGlance: { bestUseCase: "Excavators, loaders, cranes and other machines on lowboys", responseWorkflow: "Measure, check legal limits, apply for the right permit, plan the route", safetyNote: "Measure the loaded height, not just the machine", dispatchNeeds: "Machine make and model, weight, loaded width and height", relatedServiceLink: { text: "Commercial Fleet Towing", href: "/commercial-towing" } },
      tableOfContents: [
        { id: "legal-limits", title: "The legal limits", level: 2 },
        { id: "who-issues", title: "Who issues the permit", level: 2 },
        { id: "permit-types", title: "Single trip and annual permits", level: 2 },
        { id: "pilot-cars", title: "When you need pilot cars", level: 2 },
        { id: "bay-area-restrictions", title: "Bay Area travel restrictions", level: 2 },
        { id: "trailer-choice", title: "Choosing the right trailer", level: 2 },
        { id: "before-the-move", title: "Before the move", level: 2 },
      ],
      faq: [
        { question: "Does every excavator move need a permit?", answer: "No. Many compact and midsize machines fit inside legal width, height and weight on a lowboy. Larger machines often do not." },
        { question: "Do I need a city permit as well?", answer: "If the route uses local streets, the city or county that owns those streets may require its own permit. Caltrans covers state highways and interstates." },
        { question: "What is the difference between a single trip and an annual permit?", answer: "A single trip permit covers one specific move on a specific route. An annual permit covers repeated moves within set limits over a year, which suits contractors who move the same class of equipment often." },
        { question: "When does an oversize load need a pilot car in California?", answer: "It depends on the width, the overall length, the overhang and the route. Caltrans classifies routes by color on its pilot car maps, and the requirement changes from one route class to another." },
        { question: "Can an oversize load cross the Bay Bridge?", answer: "Caltrans has special conditions for oversize loads on the San Francisco Oakland Bay Bridge. Check the current permit conditions for the bridge before you plan the route." },
      ],
      relatedPosts: [],
      relatedServices: [
        { title: "Commercial Fleet Towing", href: "/commercial-towing", description: "Equipment moves and fleet accounts" },
        { title: "Heavy Duty Towing", href: "/services/heavy-duty", description: "Equipment and machinery transport" },
      ],
    },
    intro: "We haul excavators, loaders and cranes around the Bay Area on lowboy trailers, and the question we hear most is not about the truck. It is whether the move needs a permit. This guide covers the legal limits, the kinds of permits Caltrans issues, when pilot cars come into it, and what we need from you to plan the move. Rules change, so always confirm the current requirements with Caltrans before the move.",
    sections: [
      { id: "legal-limits", heading: "The legal limits", paragraphs: [
        "In California, a load generally stays legal without a special permit when it is no wider than 102 inches, no taller than 14 feet measured from the road, and the combination stays within the 80,000 pound gross weight limit and the axle limits that apply to it.",
        "Go over any of those and the move needs a transportation permit. Remember that the height includes the trailer deck. A machine that looks short on the ground can be well over 14 feet once it sits on a lowboy.",
      ], checklist: ["Loaded width over 102 inches", "Loaded height over 14 feet", "Gross weight over 80,000 pounds or over axle limits", "Unusual length or overhang"], table: { caption: "Quick reference for California equipment loads", headers: ["Measurement", "Generally legal without a permit", "Over this, plan for a permit"], rows: [
        ["Width", "Up to 102 inches", "Over 102 inches"],
        ["Height from the road", "Up to 14 feet", "Over 14 feet"],
        ["Gross weight", "Up to 80,000 pounds within axle limits", "Over 80,000 pounds or over any axle limit"],
        ["Length and overhang", "Within standard combination limits", "Long loads or large rear overhang"],
      ] } },
      { id: "who-issues", heading: "Who issues the permit", paragraphs: [
        "Caltrans issues transportation permits for state highways and interstates. Cities and counties issue their own for the local roads they own, and a route from a yard in Hayward to a job site in the hills may need both.",
        "That handoff catches people out. The state permit gets you to the off ramp. The last mile through a city often needs a separate permit with its own conditions and lead time, so ask the city early.",
      ] },
      { id: "permit-types", heading: "Single trip and annual permits", paragraphs: [
        "Caltrans offers single trip permits and annual permits. A single trip permit covers one move on one approved route. An annual permit covers repeated moves within set size and weight limits for a year, which suits contractors and haulers who move similar equipment all the time.",
        "Larger or heavier loads usually have to go the single trip route, because Caltrans needs to check the specific bridges and roads involved. Plan on the extra time that takes.",
      ] },
      { id: "pilot-cars", heading: "When you need pilot cars", paragraphs: [
        "Pilot cars, often called escorts, are not triggered by a single number. Caltrans classifies state routes by color, and its pilot car maps show how many escorts a load needs on each class of road, based on width, overall length and rear overhang.",
        "On many multilane freeways a load of moderate width can travel with no escort, while the same load on a narrow two lane highway may need one or two. That is why the route matters as much as the machine.",
      ] },
      { id: "bay-area-restrictions", heading: "Bay Area travel restrictions", paragraphs: [
        "Caltrans sets curfew areas and travel time restrictions for permit loads in busy metro areas, along with holiday travel restrictions and weather limits. The Bay Area has some of the busiest corridors in the state, and the San Francisco Oakland Bay Bridge has its own special conditions for permit loads.",
        "In practice that means an oversize move may have to run outside commute hours or on certain days. Read the conditions printed on your permit carefully, because they are part of the permit, not suggestions.",
      ], callout: { title: "Check the conditions on the permit", text: "Times, routes and escort requirements are written on the permit itself. If anything on it does not match your plan, sort it out before the truck rolls." } },
      { id: "trailer-choice", heading: "Choosing the right trailer", paragraphs: [
        "The trailer affects whether a move is legal at all. A lower deck buys you height. A removable gooseneck trailer, often called an RGN, lets tracked machines drive on from the front instead of climbing ramps.",
      ], table: { caption: "Common trailer types for equipment moves", headers: ["Trailer", "Good for", "Keep in mind"], rows: [
        ["Flatbed", "Smaller machines, attachments, materials", "Higher deck means less room for height"],
        ["Step deck", "Medium machines with some height", "Lower rear deck, loading usually by ramps"],
        ["Lowboy or RGN", "Excavators, dozers, cranes, tall or heavy machines", "Lowest deck height, front loading on an RGN"],
      ] }, links: [{ text: "Heavy duty towing and equipment transport", href: "/services/heavy-duty" }] },
      { id: "before-the-move", heading: "Before the move", paragraphs: [
        "Send us the make and model, the operating weight and any attachments that stay on. We will tell you which trailer we would use and whether the loaded dimensions put the move into permit territory.",
        "Measure the machine in the position it will travel, with the boom or bucket stowed the way it will be on the trailer. A few inches either way can decide whether you need a permit.",
      ], checklist: ["Make, model and operating weight", "Attachments staying on the machine", "Pickup and delivery addresses", "Loading conditions at both ends", "Target move date"], checklistTitle: "What to send us", callout: { title: "Plan ahead", text: "Permits are not always same day. If the move is on a deadline, call as soon as you know the dates." } },
    ],
  },
  {
    data: {
      ...base,
      slug: "box-truck-breakdown-checklist-bay-area-fleets",
      title: "Box Truck Breakdown Checklist for Bay Area Fleets",
      metaTitle: "Box Truck Breakdown Checklist for Bay Area Fleets",
      metaDescription: "A practical box truck breakdown checklist for Bay Area delivery fleets: liftgate failures, emissions derates, overheating, protecting the cargo and getting the right tow.",
      canonicalUrl: "https://heavytowpro.com/blog/box-truck-breakdown-checklist-bay-area-fleets",
      primaryKeyword: "box truck breakdown",
      secondaryKeywords: ["box truck towing", "delivery truck towing Bay Area", "fleet breakdown checklist"],
      publishDate: "2026-11-24", dateModified: "2026-11-24", readTime: "9 min read",
      excerpt: "Print this, tape it to the visor, and your drivers will never stand on a shoulder wondering who to call.",
      heroImage: { src: dumpImg, alt: "Heavy tow truck moving a commercial truck on a Bay Area road", caption: "Commercial tows run smoother when the driver has the details ready." },
      atAGlance: { bestUseCase: "Delivery, moving and route trucks up to 26 feet", responseWorkflow: "Make it safe, call dispatch, protect the cargo, tow to the approved shop", safetyNote: "Never stand between the truck and traffic", dispatchNeeds: "Truck length, cargo status, rental or owned, location", relatedServiceLink: { text: "Box Truck Towing", href: "/box-truck-towing" } },
      tableOfContents: [
        { id: "visor-checklist", title: "The visor checklist", level: 2 },
        { id: "on-the-road", title: "When it happens on the road", level: 2 },
        { id: "city-or-freeway", title: "City street or freeway", level: 2 },
        { id: "common-failures", title: "The breakdowns we see most", level: 2 },
        { id: "the-call", title: "The call", level: 2 },
        { id: "the-cargo", title: "The cargo", level: 2 },
        { id: "tow-options", title: "How a box truck gets towed", level: 2 },
      ],
      faq: [
        { question: "Should we tow a loaded box truck or unload it first?", answer: "Most loaded box trucks can be towed as they are. If the cargo is perishable or time critical, plan a transfer to a second truck." },
        { question: "What if the liftgate is stuck down?", answer: "Tell dispatch before the truck is sent. A gate hanging down affects how the truck can be hooked and towed, and the operator may need to secure or raise it first." },
        { question: "The dash says the engine is derated. Can the driver keep going?", answer: "A derate is the engine protecting itself, often because of an emissions or DEF problem. Crawling along a freeway at low speed is dangerous, so get off at the next safe spot and call it in." },
        { question: "Can you tow a rental box truck?", answer: "Yes, but rental companies often have their own roadside process. Check the agreement first, and have the agreement number ready when you call." },
        { question: "Wheel lift or flatbed for a box truck?", answer: "It depends on the truck's weight, its drivetrain and what is wrong with it. Tell dispatch the length, the make and model and the problem, and they will send the right truck." },
      ],
      relatedPosts: ["box-truck-towing-san-francisco"],
      relatedServices: [
        { title: "Box Truck Towing", href: "/box-truck-towing", description: "Delivery trucks, step vans, rentals" },
        { title: "Commercial Fleet Towing", href: "/commercial-towing", description: "One number for all your drivers" },
      ],
    },
    intro: "A box truck breakdown costs more than the tow. There is a route that will not get finished, cargo with a delivery window and a driver who may never have dealt with this before. A short checklist fixes most of that. Below is one you can print, followed by the details behind each step and the breakdowns we see most often on Bay Area routes.",
    sections: [
      { id: "visor-checklist", heading: "The visor checklist", paragraphs: [
        "Print this and keep it in every cab. Drivers under stress forget things, and a list in front of them saves a lot of back and forth.",
      ], checklistTitle: "Driver visor checklist", checklist: ["Get off the travel lane if you safely can", "Hazards on, triangles out behind the truck", "Call your fleet dispatcher, then the tow line", "Give the location, unit number and truck length", "Say whether it is loaded and if the reefer is running", "Photograph the dash warnings and any damage", "Lock the cargo door and stay with the truck"] },
      { id: "on-the-road", heading: "When it happens on the road", paragraphs: [
        "Get as far right as you safely can, hazards on, and put out triangles behind the truck. In the city, a loading zone or side street is far better than a travel lane.",
        "If the truck dies in a live lane and you cannot move it, call 911 first. Then get out on the side away from traffic and wait somewhere safe.",
      ], checklist: ["Hazards on and triangles out", "Note the cross street or freeway exit", "Photo of the dashboard warnings", "Check the cargo door is locked"] },
      { id: "city-or-freeway", heading: "City street or freeway", paragraphs: [
        "In San Francisco, Oakland and Berkeley, the problem is usually space. A box truck stuck in a narrow street or a loading zone needs a tow truck that can get in and line up, so tell dispatch about parked cars, slopes and anything overhead.",
        "On Interstate 880, Highway 101 or the bridge approaches, the problem is traffic. Shoulders can be narrow and the safest thing is often to stay well away from the truck until help arrives.",
      ], links: [{ text: "Towing in San Francisco", href: "/towing-san-francisco" }, { text: "Towing in Oakland", href: "/towing-oakland" }] },
      { id: "common-failures", heading: "The breakdowns we see most", paragraphs: [
        "Liftgate failures. A gate stuck down or hanging loose changes how the truck can be towed. Do not try to force it. Tell dispatch so the operator comes ready to secure it.",
        "Emissions and DEF derates. Newer diesel trucks cut power when the emissions system has a fault or the DEF runs low or goes bad. The truck may still move, but slowly. On a freeway that is dangerous, so get off and call it in.",
        "Overheating in stop and go traffic. Long climbs and slow bridge traffic work engines and transmissions hard. If the temperature gauge climbs, pull over before something fails.",
        "Low clearance strikes. Older underpasses, parking structures and tree branches catch box trucks every week. If the box is damaged, photograph it and do not drive on until someone checks the roof and the door.",
      ] },
      { id: "the-call", heading: "The call", paragraphs: [
        "Call your fleet dispatcher first, then the tow line they gave you. Have the truck length, unit number and the shop it should go to. If it is a rental, have the agreement number ready.",
      ] },
      { id: "the-cargo", heading: "The cargo", paragraphs: [
        "Refrigerated loads have a clock on them. Tell the tow dispatcher if the reefer is running so they can plan around it, and decide early whether a second truck should come for a transfer.",
        "For any transfer, keep a simple record: photos of the load before and after, seal numbers if there are any, and who signed for the goods. It protects the driver, the fleet and the customer.",
      ], callout: { title: "Keep one number on the visor", text: "Fleets with an account call one line and the invoice lands with the unit number on it." } },
      { id: "tow-options", heading: "How a box truck gets towed", paragraphs: [
        "The right tow depends on the truck and the fault. Here is how the main choices compare. Dispatch makes the final call once they hear the details.",
      ], table: { caption: "General comparison of box truck towing situations", headers: ["Situation", "What to consider"], rows: [
        ["Empty truck", "Simplest tow. Weight is lower and there is no cargo to protect."],
        ["Loaded truck", "Weight goes up, so the tow truck has to be rated for it. Time sensitive cargo may need a transfer."],
        ["Wheel lift tow", "Common for many box trucks. Drivetrain and damage decide whether it is suitable."],
        ["Flatbed tow", "Useful for lighter box trucks and some damaged trucks, within the flatbed's weight limits."],
        ["Heavy wrecker", "Used for the larger and heavier box trucks, or when the truck needs recovery first."],
      ] }, links: [{ text: "Box truck towing service", href: "/box-truck-towing" }, { text: "Commercial fleet towing accounts", href: "/commercial-towing" }] },
    ],
  },
];

export const FLEET_ARTICLE_BY_SLUG = Object.fromEntries(FLEET_ARTICLES.map((a) => [a.data.slug, a]));
