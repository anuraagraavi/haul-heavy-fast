/**
 * Commercial service landing pages. Copy rule: no hyphens or dashes in visible text,
 * human voice, only facts the business can stand behind (see AGENTS.md).
 */
import semiImg from "@/assets/gallery/heavy-wrecker-container-semi-1600.webp";
import rotatorImg from "@/assets/gallery/dual-rotator-recovery-1600.webp";
import rigImg from "@/assets/gallery/linkbelt-rotator-rigging-1600.webp";
import dumpImg from "@/assets/gallery/dump-truck-peterbilt-haul-1600.webp";
import equipImg from "@/assets/gallery/cat-excavator-peterbilt-1600.webp";
import rollbackImg from "@/assets/gallery/hh-rollback-flatbed-1600.webp";
import craneImg from "@/assets/gallery/rotator-crane-lift-closeup-1600.webp";
import hillImg from "@/assets/gallery/dump-truck-lowboy-hillside-1600.webp";
import genImg from "@/assets/gallery/generator-fleet-stepdeck-1600.webp";

export type CommercialService = {
  slug: string;
  path: string;
  navLabel: string;
  navBlurb: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  eyebrow: string;
  intro: string[];
  heroImage: { src: string; alt: string };
  whatWeTow: { title: string; items: string[] };
  steps: { title: string; body: string }[];
  equipment: { title: string; body: string }[];
  sideImage: { src: string; alt: string };
  corridorsIntro: string;
  readyChecklist: string[];
  faqs: { q: string; a: string }[];
  related: { label: string; href: string }[];
};

export const CORRIDORS = [
  { name: "Interstate 880", note: "Port of Oakland to San Jose, the busiest truck route in the East Bay" },
  { name: "Interstate 80", note: "Bay Bridge, Emeryville, Richmond and out toward Vallejo" },
  { name: "US 101", note: "San Francisco down the Peninsula through Redwood City to San Jose" },
  { name: "Interstate 580", note: "Oakland, Dublin, Livermore and the Altamont Pass grade" },
  { name: "Interstate 680", note: "Concord, Walnut Creek, the Sunol grade and Fremont" },
  { name: "Highway 4 and Interstate 5", note: "Antioch, the Delta and the Stockton freight yards" },
];

const ALL_SERVICES: CommercialService[] = [
  {
    slug: "semi-truck-towing",
    path: "/semi-truck-towing",
    navLabel: "Semi Truck Towing",
    navBlurb: "Tractors, trailers, 18 wheelers",
    metaTitle: "Semi Truck Towing Bay Area | 24/7 Big Rig Tow",
    metaDescription: "Semi truck and big rig towing across the Bay Area, day or night. Heavy wreckers and rotators dispatched from eight hubs. Call (650) 881-2400.",
    h1: "Semi Truck Towing Across the Bay Area",
    eyebrow: "Big rig and 18 wheeler towing",
    intro: [
      "When a loaded tractor trailer quits on the shoulder of Interstate 880 at two in the morning, the driver needs one thing: a heavy wrecker that can actually lift it. That is the call we built this company around.",
      "We tow and recover semi trucks, tractors, trailers and full 18 wheeler combinations from eight dispatch hubs between Brisbane and Stockton. That spread lets us send the closest heavy unit instead of pulling one across the bay, which matters when every hour of downtime costs your load.",
    ],
    heroImage: { src: semiImg, alt: "Heavy wrecker hooked to a container semi truck at a Bay Area job" },
    whatWeTow: {
      title: "Semi trucks and trailers we handle",
      items: [
        "Sleeper and day cab tractors, bobtail or loaded",
        "Dry vans, reefers and flatbed trailers",
        "Container chassis coming out of the Port of Oakland",
        "Tankers and dump trailers",
        "Jackknifed and overturned combinations",
        "Tractors with blown drivelines, brakes locked up or no air",
      ],
    },
    steps: [
      { title: "Tell us what is on the ground", body: "Give dispatch the truck make, whether it is loaded, the trailer type and your exact location, including the mile marker or nearest exit if you are on the freeway." },
      { title: "We match the truck to the job", body: "A bobtail on a flat shoulder needs a different unit than a loaded van in a ditch. We pick the wrecker or rotator before it leaves the yard, so you are not waiting on a second truck." },
      { title: "Hook up and secure the scene", body: "Our operator sets cones, talks with CHP if they are on scene, and rigs the tow with the air lines and driveline handled correctly." },
      { title: "Delivery where you need it", body: "We take the truck to your shop, a dealer, your yard or one of our secured lots, and we can drop or recover the trailer separately if the load needs to keep moving." },
    ],
    equipment: [
      { title: "Heavy wreckers", body: "Underlift units sized for loaded Class 8 tractors, so the truck rides on its own rear axles without damage." },
      { title: "Rotators", body: "Boom trucks that lift and turn, used for rollovers, jackknifes and anything stuck below the road edge." },
      { title: "Lowboy trailers", body: "For tractors that cannot be towed safely on their own wheels, and for trailers that need to come off the scene in one piece." },
    ],
    sideImage: { src: rotatorImg, alt: "Two H&H rotator tow trucks with booms raised, working together on a heavy lift" },
    corridorsIntro: "Most of our semi calls come from the same handful of freight roads. Our hubs sit close to each one.",
    readyChecklist: [
      "Truck make, model and whether the trailer is loaded",
      "Exact location, mile marker or nearest exit",
      "Is the truck blocking a lane?",
      "Where it should go: shop, dealer, yard or our lot",
      "Billing contact, fleet account number or PO if you have one",
    ],
    faqs: [
      { q: "How fast can you get to a semi truck breakdown?", a: "It depends on where the truck is and what traffic is doing, so dispatch gives you a real arrival estimate on the phone instead of a promise. Having hubs in Brisbane, Hayward, San Leandro, San Jose, Redwood City, San Mateo, Concord and Stockton keeps the closest heavy unit as short a drive away as we can make it." },
      { q: "Can you tow a loaded trailer?", a: "Yes. We tow loaded combinations regularly. Tell dispatch the approximate weight and what is inside so we send a unit rated for it." },
      { q: "What does semi truck towing cost?", a: "Price depends on distance, the equipment needed, time on scene and whether recovery work is involved. We quote over the phone before we roll whenever the situation allows it, and fleet accounts get agreed rates." },
      { q: "Do you work with fleets and brokers?", a: "Yes. We set up accounts for carriers, owner operators, leasing companies and brokers so drivers can call one number and billing goes where it should." },
    ],
    related: [
      { label: "Box truck towing", href: "/box-truck-towing" },
      { label: "Commercial fleet towing", href: "/commercial-towing" },
      { label: "Semi breakdown on the highway: what to do", href: "/blog/semi-truck-breakdown-highway-guide" },
      { label: "Heavy duty towing in the Bay Area", href: "/towing/heavy-duty-towing-bay-area" },
    ],
  },
  {
    slug: "box-truck-towing",
    path: "/box-truck-towing",
    navLabel: "Box Truck Towing",
    navBlurb: "Delivery trucks, step vans, moving trucks",
    metaTitle: "Box Truck Towing Bay Area | Delivery Truck Tow",
    metaDescription: "Box truck, step van and delivery truck towing across the Bay Area. Medium and heavy wreckers ready around the clock. Call (650) 881-2400.",
    h1: "Box Truck Towing for Bay Area Fleets",
    eyebrow: "Delivery and moving truck towing",
    intro: [
      "Box trucks sit in an awkward spot. They are too heavy for a regular flatbed and too light to justify pulling a rotator off the freeway. Plenty of tow companies get that wrong and show up with the wrong truck.",
      "We send medium duty and heavy wreckers sized to the actual truck, whether it is a 16 foot rental from a moving job, a refrigerated route truck or a 26 foot delivery unit that died at a loading dock in South San Francisco.",
    ],
    heroImage: { src: dumpImg, alt: "Heavy tow truck moving a commercial truck on a Bay Area road" },
    whatWeTow: {
      title: "Trucks in this class",
      items: [
        "16 to 26 foot box trucks and moving trucks",
        "Step vans and parcel delivery vehicles",
        "Refrigerated route trucks",
        "Stake beds and liftgate trucks",
        "Rental fleet units from Penske, Ryder and U Haul",
        "Food trucks and mobile service vehicles",
      ],
    },
    steps: [
      { title: "Call with the truck size", body: "Length, roughly how much cargo is on board, and whether there is a liftgate or a reefer unit. That decides which wrecker we send." },
      { title: "Clearance check", body: "Box trucks often break down in parking garages, alleys and loading docks. Tell us about low ceilings or tight turns and we will plan the hook before we arrive." },
      { title: "Tow to the right place", body: "Rental units usually go to an approved shop, so have your rental agreement or roadside number handy and we will coordinate with them." },
    ],
    equipment: [
      { title: "Medium duty wreckers", body: "The right fit for most box trucks. They tow from the front or rear without dragging the cargo box." },
      { title: "Heavy wreckers", body: "For fully loaded 26 foot trucks or anything with a damaged front end." },
      { title: "Rollback carriers", body: "For smaller step vans and electric delivery vans that should not be towed on their drive wheels." },
    ],
    sideImage: { src: rollbackImg, alt: "Black H&H Towing rollback flatbed truck parked on a gravel lot" },
    corridorsIntro: "Delivery routes run everywhere, but most box truck calls we take come off these roads and the distribution parks next to them.",
    readyChecklist: [
      "Truck length and rough cargo weight",
      "Is it a rental? Have the agreement number ready",
      "Any height limits where it is parked",
      "Destination shop or yard",
    ],
    faqs: [
      { q: "Can you tow a box truck out of a parking garage?", a: "Often yes, but it depends on clearance. Tell dispatch the ceiling height and we will tell you honestly whether we can get in or need to winch it out to the street first." },
      { q: "My rental box truck broke down. Will you work with the rental company?", a: "Yes. We regularly tow rental units to the shop the rental company approves. Have your agreement number ready when you call." },
      { q: "Do you tow electric delivery vans?", a: "Yes. Electric vans go on a rollback with the wheels off the ground, which is what most manufacturers require." },
    ],
    related: [
      { label: "Box truck towing in San Francisco", href: "/blog/box-truck-towing-san-francisco" },
      { label: "Medium duty towing", href: "/services/medium-duty" },
      { label: "Commercial fleet towing", href: "/commercial-towing" },
    ],
  },
  {
    slug: "bus-towing",
    path: "/bus-towing",
    navLabel: "Bus Towing",
    navBlurb: "Coaches, shuttles, school buses",
    metaTitle: "Bus Towing Bay Area | Coach and Shuttle Towing",
    metaDescription: "Bus, motor coach and shuttle towing in the Bay Area. Heavy wreckers built for long wheelbase vehicles, ready day and night. Call (650) 881-2400.",
    h1: "Bus and Motor Coach Towing in the Bay Area",
    eyebrow: "Coaches, transit and shuttles",
    intro: [
      "A broken down bus is rarely just a mechanical problem. There are passengers to move, a schedule falling apart and often a vehicle sitting in a spot where it cannot stay.",
      "We tow motor coaches, tech campus shuttles, school buses, church and charter buses using heavy wreckers that can handle the long wheelbase and low ground clearance these vehicles have. Our operators know how to tow a bus without tearing up the air suspension or the front cap.",
    ],
    heroImage: { src: rigImg, alt: "Rotator rigging lines set up for a heavy vehicle lift" },
    whatWeTow: {
      title: "Buses we tow",
      items: [
        "45 foot motor coaches and charter buses",
        "Corporate and campus shuttles",
        "School buses and activity buses",
        "Cutaway and mini buses",
        "Transit buses",
        "Party buses and limo coaches",
      ],
    },
    steps: [
      { title: "Passengers first", body: "If people are still on board, tell dispatch. We can time our arrival around the replacement bus so nobody stands on a freeway shoulder longer than they have to." },
      { title: "Right lift for the chassis", body: "Coaches are usually towed from the front with the driveshaft or axles pulled. Our operators do that on scene." },
      { title: "Delivered to your garage", body: "We bring the bus to your maintenance yard or the dealer and coordinate with your fleet manager on drop instructions." },
    ],
    equipment: [
      { title: "Heavy wreckers with long reach underlifts", body: "Built to get under a coach bumper without crushing it." },
      { title: "Rotators", body: "For buses that slid off the road or need to be lifted before they can be towed." },
    ],
    sideImage: { src: craneImg, alt: "H&H heavy wrecker with rigging lines attached to a red and white mobile crane" },
    corridorsIntro: "Shuttle and charter routes run up and down these roads every day, and those are where we see most bus calls.",
    readyChecklist: [
      "Bus length and make",
      "Are passengers still on board?",
      "Air suspension or other warnings on the dash",
      "Your yard address and gate contact",
    ],
    faqs: [
      { q: "Can you tow a full size motor coach?", a: "Yes. We use heavy wreckers that handle 45 foot coaches. Let dispatch know the length so we send the correct unit." },
      { q: "Do you work with school districts and shuttle operators?", a: "Yes. We can set up an account so your drivers call one number and the invoice goes straight to your fleet office." },
    ],
    related: [
      { label: "Heavy duty towing", href: "/services/heavy-duty" },
      { label: "Commercial fleet towing", href: "/commercial-towing" },
    ],
  },
  {
    slug: "rv-towing",
    path: "/rv-towing",
    navLabel: "RV Towing",
    navBlurb: "Motorhomes, fifth wheels, trailers",
    metaTitle: "RV Towing Bay Area | Motorhome and Trailer Tow",
    metaDescription: "RV and motorhome towing across the Bay Area. Class A, B and C motorhomes, fifth wheels and travel trailers towed with care. Call (650) 881-2400.",
    h1: "RV and Motorhome Towing in the Bay Area",
    eyebrow: "Class A, B and C motorhomes",
    intro: [
      "Your RV is not just a vehicle. For a lot of owners it is a second home, sometimes a first one, and it deserves more care than a standard tow.",
      "We tow motorhomes, fifth wheels and travel trailers from campgrounds, storage lots, driveways and freeway shoulders across the Bay Area. For the big Class A coaches that weigh as much as a loaded truck, we send the same heavy wreckers we use on commercial trucks.",
    ],
    heroImage: { src: hillImg, alt: "Heavy hauling truck working on a Bay Area hillside road" },
    whatWeTow: {
      title: "RVs we tow",
      items: [
        "Class A diesel pushers and gas motorhomes",
        "Class C and Class B camper vans",
        "Fifth wheels and toy haulers",
        "Travel trailers and pop ups",
        "Motorhomes towing a car behind them",
      ],
    },
    steps: [
      { title: "Tell us the class and length", body: "A Class B van goes on a rollback. A 40 foot diesel pusher needs a heavy wrecker. Knowing which one saves you a long wait." },
      { title: "Prep before we hook", body: "Turn off propane, pull in slide outs and awnings and secure loose items inside. Our operator will walk through it with you." },
      { title: "Your toad comes too", body: "If you are towing a car behind the motorhome, we can bring it along or arrange a second truck." },
    ],
    equipment: [
      { title: "Heavy wreckers", body: "For Class A motorhomes, rigged to protect the rear overhang and the generator compartment." },
      { title: "Rollbacks", body: "For camper vans and smaller Class C units." },
      { title: "Fifth wheel hitch service", body: "For trailers whose tow vehicle broke down, we can move the trailer itself." },
    ],
    sideImage: { src: genImg, alt: "Peterbilt tractor pulling a step deck trailer loaded with industrial generators" },
    corridorsIntro: "RV calls follow the routes people take to the coast, the Delta and the Sierra.",
    readyChecklist: [
      "RV class, length and fuel type",
      "Are slide outs and awnings retracted?",
      "Is a car being towed behind it?",
      "Destination: RV shop, storage lot or dealer",
    ],
    faqs: [
      { q: "Can you tow a Class A motorhome?", a: "Yes. Diesel pushers and large gas coaches go behind a heavy wrecker. Tell dispatch the length and we will send the right truck." },
      { q: "Will my roadside plan cover this?", a: "Many RV roadside plans reimburse heavy towing. We provide an itemized invoice you can submit to your plan." },
      { q: "Can you move a travel trailer if my truck broke down?", a: "Yes. We can hitch and move most travel trailers and fifth wheels." },
    ],
    related: [
      { label: "RV towing guide for the Bay Area", href: "/blog/rv-towing-bay-area" },
      { label: "Heavy duty towing", href: "/services/heavy-duty" },
    ],
  },
  {
    slug: "commercial-towing",
    path: "/commercial-towing",
    navLabel: "Commercial Fleet Towing",
    navBlurb: "Accounts for carriers and businesses",
    metaTitle: "Commercial Towing Bay Area | Fleet Tow Accounts",
    metaDescription: "Commercial and fleet towing for Bay Area carriers, contractors and service fleets. One call, eight dispatch hubs, clear invoicing. Call (650) 881-2400.",
    h1: "Commercial Towing and Fleet Accounts",
    eyebrow: "For carriers, contractors and service fleets",
    intro: [
      "Fleet managers do not need another tow company that answers on the third try. They need one number their drivers can call from anywhere between San Francisco and Stockton, and an invoice that shows up with the right PO on it.",
      "That is what a commercial account with us looks like. We tow everything from service vans to Class 8 tractors, and because we run eight dispatch hubs, the truck we send usually comes from your side of the bay.",
    ],
    heroImage: { src: equipImg, alt: "Peterbilt truck hauling a CAT excavator for a commercial customer" },
    whatWeTow: {
      title: "Who uses our commercial accounts",
      items: [
        "Trucking carriers and owner operators",
        "Construction and equipment rental companies",
        "Utility, plumbing and HVAC service fleets",
        "Delivery and last mile fleets",
        "Dealerships and repair shops",
        "Property managers and business parks",
      ],
    },
    steps: [
      { title: "Set up the account", body: "Send us your billing details, approved drop locations and who can authorize a tow. It takes one short call." },
      { title: "Drivers call one number", body: "Every driver gets the same dispatch line. We route the call to the closest hub." },
      { title: "Clean paperwork", body: "Each invoice lists the unit number, pickup and drop locations, times and your PO." },
    ],
    equipment: [
      { title: "Light, medium and heavy units", body: "One provider for the whole fleet, from pickups to tractors." },
      { title: "Lowboys and step decks", body: "For moving equipment between job sites, not just breakdowns." },
      { title: "Rotators", body: "For the rare bad day when a truck ends up on its side." },
    ],
    sideImage: { src: semiImg, alt: "H&H heavy wrecker towing a semi truck hauling a shipping container" },
    corridorsIntro: "Our hubs sit along the roads your trucks drive every day.",
    readyChecklist: [
      "Company name and billing contact",
      "Vehicle types in your fleet",
      "Preferred repair shops and drop locations",
      "Who is allowed to authorize a tow",
    ],
    faqs: [
      { q: "Is there a fee to open a commercial account?", a: "Call dispatch and we will walk you through account terms for your fleet size and vehicle types." },
      { q: "Can you move equipment between job sites, not just tow breakdowns?", a: "Yes. We haul excavators, loaders, generators and similar equipment on lowboys and step deck trailers." },
    ],
    related: [
      { label: "Semi truck towing", href: "/semi-truck-towing" },
      { label: "Box truck towing", href: "/box-truck-towing" },
      { label: "Heavy duty towing in the Bay Area", href: "/towing/heavy-duty-towing-bay-area" },
    ],
  },
  {
    slug: "winch-out-recovery",
    path: "/winch-out-recovery",
    navLabel: "Winch Out and Recovery",
    navBlurb: "Ditches, mud, rollovers, embankments",
    metaTitle: "Winch Out and Recovery Service | Bay Area 24/7",
    metaDescription: "Winch out, off road recovery and rollover recovery across the Bay Area for cars, trucks and heavy equipment. Call (650) 881-2400 any hour.",
    h1: "Winch Out and Vehicle Recovery Service",
    eyebrow: "Ditches, mud, embankments and rollovers",
    intro: [
      "Recovery is a different job from towing. Before anything gets hooked, someone has to work out how to pull a vehicle out of a ditch, off an embankment or back onto its wheels without making the damage worse.",
      "Our operators do that work on hillside roads in the East Bay, soft shoulders in the Delta and construction sites all over the region, for everything from a pickup stuck in mud to a loaded dump truck that slid off a grade.",
    ],
    heroImage: { src: rotatorImg, alt: "Two rotators recovering a heavy vehicle" },
    whatWeTow: {
      title: "Recovery jobs we take",
      items: [
        "Cars and pickups stuck in mud, sand or a ditch",
        "Trucks off the shoulder or down an embankment",
        "Rollovers and vehicles on their side",
        "Equipment stuck on soft ground at job sites",
        "Vehicles in parking structures and tight spaces",
      ],
    },
    steps: [
      { title: "Describe the angle and ground", body: "How far off the road, what the ground is like and whether the vehicle is upright. Photos texted to dispatch help a lot." },
      { title: "Plan the pull", body: "Our operator sets anchor points, picks winch lines and snatch blocks and decides whether a rotator is needed." },
      { title: "Recover, then tow", body: "Once the vehicle is back on solid ground we check it and either let you drive away or tow it in." },
    ],
    equipment: [
      { title: "Winch trucks", body: "For light and medium vehicles off the pavement." },
      { title: "Rotators", body: "For heavy vehicles, rollovers and anything that needs to be lifted." },
      { title: "Rigging gear", body: "Recovery straps and snatch blocks rigged to protect the vehicle body." },
    ],
    sideImage: { src: craneImg, alt: "Rotator rigging lines attached to a mobile crane during a heavy lift" },
    corridorsIntro: "Recovery calls come from the hills and the soft shoulders along these routes.",
    readyChecklist: [
      "Vehicle type and whether it is upright",
      "How far off the road it is",
      "Any fluids leaking",
      "Photos if you can send them safely",
    ],
    faqs: [
      { q: "Is a winch out cheaper than a tow?", a: "Often, yes, if the vehicle can drive away once it is back on the road. Recovery pricing depends on the time and equipment the job takes." },
      { q: "Can you recover a rolled over truck?", a: "Yes. Rollovers are rotator work, and we have rotators in our fleet for exactly that." },
    ],
    related: [
      { label: "Semi truck towing", href: "/semi-truck-towing" },
      { label: "Heavy duty towing", href: "/services/heavy-duty" },
    ],
  },
];

export const COMMERCIAL_BY_SLUG = Object.fromEntries(ALL_SERVICES.map((s) => [s.slug, s]));

/** Display order everywhere (menus, footer, city pages, related links). */
export const COMMERCIAL_SERVICE_ORDER = [
  "semi-truck-towing",
  "winch-out-recovery",
  "box-truck-towing",
  "commercial-towing",
  "bus-towing",
  "rv-towing",
];

export const COMMERCIAL_SERVICES: CommercialService[] = COMMERCIAL_SERVICE_ORDER.map(
  (slug) => ALL_SERVICES.find((s) => s.slug === slug)!,
);
