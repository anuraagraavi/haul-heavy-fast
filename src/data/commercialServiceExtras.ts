/**
 * Extra depth for the commercial service pages: pre hookup assessment, city links and caller FAQs.
 * Copy rule: no hyphens or dashes in visible text, plain trade voice, no invented times or prices.
 */
export type ServiceExtras = {
  assessTitle: string;
  assessIntro: string;
  assess: { title: string; body: string }[];
  citiesIntro: string;
  cities: { name: string; path: string }[];
  faqs: { q: string; a: string }[];
  photoPrompt?: boolean;
};

const c = (name: string, slug: string) => ({ name, path: `/towing-${slug}` });

export const SERVICE_EXTRAS: Record<string, ServiceExtras> = {
  "semi-truck-towing": {
    assessTitle: "What we look at before we hook up",
    assessIntro: "A semi tow goes right or wrong in the first ten minutes on scene. Before anything gets chained, our operator walks the truck and checks a few things.",
    assess: [
      { title: "Weight and axles", body: "A bobtail tractor and a loaded tandem trailer are two different jobs. We want to know the axle setup and roughly what the load weighs so the wrecker is not working past its rating." },
      { title: "Air and driveline", body: "No air means the brakes are locked. We cage the brakes or supply air, and pull the driveline or axles when towing on the drive wheels would damage the transmission." },
      { title: "The load itself", body: "Reefer running or not, hazmat placards, a shifted load inside the van. Each one changes whether the trailer stays hooked or gets moved on its own." },
      { title: "Where the truck is sitting", body: "Shoulder width, traffic speed, soft dirt or a slope. On a busy freeway that decides where our truck parks and how the lane gets protected." },
    ],
    citiesIntro: "Semi calls come in from all over, but these cities sit on the freight roads that keep us busiest.",
    cities: [c("Oakland", "oakland"), c("San Leandro", "san-leandro"), c("Hayward", "hayward"), c("Fremont", "fremont"), c("San Jose", "san-jose"), c("Richmond", "richmond"), c("Livermore", "livermore"), c("Stockton", "stockton")],
    faqs: [
      { q: "Can the driver ride along in the tow truck?", a: "Usually yes, when there is room in the cab and it is safe. Ask dispatch when you call so the operator knows to expect a passenger." },
      { q: "What happens to my trailer if only the tractor is broken?", a: "If the load needs to keep moving, we can drop the trailer somewhere secure or hand it off to another tractor, and tow the tractor on its own. Tell dispatch early so we plan for it." },
    ],
    photoPrompt: true,
  },
  "winch-out-recovery": {
    assessTitle: "What we look at before we start pulling",
    assessIntro: "Recovery is mostly reading the scene. A truck in a ditch can roll further if the first pull is wrong, so we take a few minutes to look before anyone grabs a cable.",
    assess: [
      { title: "How the vehicle is sitting", body: "Upright, on its side, nose down or hung up on its frame. That tells us which way it wants to move and where to set the pull." },
      { title: "Ground and anchor points", body: "Wet clay, gravel, a slope or a soft shoulder. We need solid ground under our own truck and a safe angle for the winch line." },
      { title: "Load and fluids", body: "A loaded box or trailer is heavier and can shift. Leaking fuel or oil gets contained before we move anything." },
      { title: "One truck or two", body: "Some recoveries need a second wrecker or a rotator to hold the vehicle while the other pulls. We decide that early so you are not waiting halfway through." },
    ],
    citiesIntro: "Stuck trucks show up on hillsides, construction sites and freeway ramps. These are areas we cover often.",
    cities: [c("Concord", "concord"), c("Antioch", "antioch"), c("Walnut Creek", "walnut-creek"), c("Livermore", "livermore"), c("Pleasanton", "pleasanton"), c("San Jose", "san-jose"), c("Stockton", "stockton"), c("Richmond", "richmond")],
    faqs: [
      { q: "Should I try to drive out of the ditch first?", a: "Please don't. Spinning the wheels digs the truck in deeper, and on a slope it can make the vehicle slide or tip. Shut it down, get to a safe spot and call." },
      { q: "What affects the cost of a recovery?", a: "How far the vehicle is off the road, whether it is upright, how much it weighs, the equipment needed and the time on scene. Dispatch can give you a better idea once you describe it or send photos." },
    ],
    photoPrompt: true,
  },
  "box-truck-towing": {
    assessTitle: "What we look at before we hook up",
    assessIntro: "Box trucks look simple, but they come in a lot of sizes and most of them are carrying something. A quick check saves trouble later.",
    assess: [
      { title: "Size and weight class", body: "A small cutaway and a 26 foot straight truck need different trucks. The weight rating on the door jamb tells us which one to send." },
      { title: "Cargo in the box", body: "Packages, furniture, food or tools. If the load is valuable or temperature sensitive, tell us so we can plan the drop off around it." },
      { title: "Rear clearance", body: "Liftgates and long rear overhangs can scrape or catch. We check how low the back sits before choosing a wheel lift or a flatbed." },
      { title: "Where it is parked", body: "Loading docks, tight alleys and parking garages are common. Clearance height and turning room decide how we get in and out." },
    ],
    citiesIntro: "Delivery routes run through every city we serve. These are the ones where box truck calls come up most.",
    cities: [c("San Francisco", "san-francisco"), c("South San Francisco", "south-san-francisco"), c("Oakland", "oakland"), c("San Jose", "san-jose"), c("Santa Clara", "santa-clara"), c("Hayward", "hayward"), c("Redwood City", "redwood-city"), c("Milpitas", "milpitas")],
    faqs: [
      { q: "Can you tow the truck with the cargo still inside?", a: "In most cases, yes. Tell dispatch roughly what is in the box and how heavy it is so we send the right unit." },
      { q: "Can you tow a rental box truck?", a: "Yes. Have the rental agreement handy and check whether the rental company wants it at a particular branch or shop." },
    ],
  },
  "commercial-towing": {
    assessTitle: "What we ask when a fleet sets up with us",
    assessIntro: "Fleet work runs smoother when we know your trucks before the first breakdown. These are the things we talk through.",
    assess: [
      { title: "What you run", body: "Pickups, vans, box trucks, tractors or equipment. Knowing the mix means dispatch already knows what to send when your driver calls." },
      { title: "Where they go", body: "Your yards, routes and regular job sites help us plan which hub covers which part of your operation." },
      { title: "Where they should end up", body: "Your shop, a dealer, a particular repair partner. We keep it on file so drivers do not have to guess on the side of the road." },
      { title: "How billing works", body: "Who approves the tow, what reference numbers you need on the invoice and where it gets sent." },
    ],
    citiesIntro: "Our fleet customers run all over the Bay Area and out to the Valley. These cities come up on a lot of their calls.",
    cities: [c("Oakland", "oakland"), c("San Jose", "san-jose"), c("Hayward", "hayward"), c("Fremont", "fremont"), c("Concord", "concord"), c("Redwood City", "redwood-city"), c("San Mateo", "san-mateo"), c("Stockton", "stockton")],
    faqs: [
      { q: "Do our drivers need to explain everything on every call?", a: "Less than you'd think. Once your account is set up, the driver gives their name, the unit and where they are. The rest is already on file." },
      { q: "Can you handle light and heavy units for the same fleet?", a: "Yes. We run light, medium and heavy trucks, so one number covers a pickup and a tractor." },
    ],
  },
  "bus-towing": {
    assessTitle: "What we look at before we hook up",
    assessIntro: "Buses are long, low and heavy at the back. Getting one moving without damage takes a little planning.",
    assess: [
      { title: "Length and type", body: "A shuttle, a school bus and a 45 foot coach each need a different setup. Tell us the make and length when you call." },
      { title: "Engine and air", body: "Most coaches have rear engines and air brakes. We may need to supply air or disconnect the driveline before towing." },
      { title: "Ground clearance", body: "Long overhangs and low bumpers scrape easily on ramps and driveways. We plan the lift height and route out with that in mind." },
      { title: "Passengers", body: "If people are on board, getting them somewhere safe comes first. Let dispatch know so you can arrange a replacement bus while we work." },
    ],
    citiesIntro: "Shuttle, charter and school bus calls come up most around the Peninsula and South Bay campuses and in the city.",
    cities: [c("San Francisco", "san-francisco"), c("Palo Alto", "palo-alto"), c("Mountain View", "mountain-view"), c("Sunnyvale", "sunnyvale"), c("Cupertino", "cupertino"), c("Menlo Park", "menlo-park"), c("San Jose", "san-jose"), c("Burlingame", "burlingame")],
    faqs: [
      { q: "Can you move a bus out of a depot or tight lot?", a: "Yes. Tell us about gate width and overhead clearance so the operator can plan the way in and out." },
      { q: "What should passengers do while they wait?", a: "Stay off the road side of the bus and well away from traffic. If it is safe, wait at a nearby building or behind a barrier." },
    ],
  },
  "rv-towing": {
    assessTitle: "What we look at before we hook up",
    assessIntro: "RVs are homes on wheels, which means extra weight, extra height and a lot of personal stuff inside. We check a few things first.",
    assess: [
      { title: "Class and length", body: "A Class A motorhome, a Class C and a fifth wheel trailer each tow differently. The make, model and length tell us what to bring." },
      { title: "Height and slides", body: "Roof units, awnings and slide outs need clearance. Slides must be fully in before we move anything." },
      { title: "Toad or trailer behind", body: "If you are pulling a car or carrying a dinghy, we plan how to move both, either together or one at a time." },
      { title: "What is loose inside", body: "Cabinets, fridge and anything on the counters. Secure what you can so it does not shift on the way." },
    ],
    citiesIntro: "Motorhome calls pick up along the main travel routes and around the campgrounds and storage lots we know well.",
    cities: [c("Livermore", "livermore"), c("Pleasanton", "pleasanton"), c("Concord", "concord"), c("Antioch", "antioch"), c("Stockton", "stockton"), c("San Jose", "san-jose"), c("Fremont", "fremont"), c("Walnut Creek", "walnut-creek")],
    faqs: [
      { q: "Can my family ride with the RV?", a: "Passengers cannot ride inside the RV while it is being towed. Depending on cab space, one or two people may ride in the tow truck. Ask dispatch about your situation." },
      { q: "Can you tow my car that I tow behind the motorhome?", a: "Yes. Let dispatch know about it on the first call so we can plan for both vehicles." },
    ],
  },
};
