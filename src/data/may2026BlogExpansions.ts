import type { AtAGlanceData } from "@/types/blog";
import type { CohortBlogSection, OfficialResourceLink } from "@/types/cohortBlog";

export interface MayBlogSectionExtras {
  paragraphs?: string[];
  bullets?: string[];
}

export interface MayBlogEnrichOverride {
  callout?: { type: "tip" | "warning" | "legal" | "info"; title: string; body: string };
  steps?: Array<{ step: number; title: string; description: string }>;
  twoColumn?: {
    leftTitle: string;
    leftItems: string[];
    rightTitle: string;
    rightItems: string[];
  };
}

export interface MayBlogExpansion {
  metaDescription: string;
  heroAlt: string;
  heroCaption: string;
  atAGlance: AtAGlanceData;
  fifthSection: CohortBlogSection;
  sectionExtras?: Record<string, MayBlogSectionExtras>;
  officialResources: OfficialResourceLink[];
  enrich: MayBlogEnrichOverride;
}

export const may2026BlogExpansions: Record<string, MayBlogExpansion> = {
  "sjc-towed-vehicle-release-form": {
    metaDescription:
      "SJC towed vehicle release: SJPD Auto Desk steps, IDs, airport vs city yards, and post-release transport—official sources cited, step-by-step 2026 guide.",
    heroAlt: "Airport parking and ground transportation area near Mineta San Jose International Airport",
    heroCaption: "Confirm which SJC lot or curb zone your vehicle was towed from before driving to a storage yard.",
    atAGlance: {
      bestUseCase:
        "Drivers retrieving a vehicle towed from SJC terminal curbs, economy lots, cell phone waiting areas, or adjacent city streets.",
      responseWorkflow:
        "Call SJPD Auto Desk → confirm yard and SJPD release requirement → gather ID/registration → pay city + tow fees → schedule transport if needed.",
      safetyNote:
        "Fly San Jose parking rules cite reclaim via SJPD at (408) 277-4156—do not leave baggage unattended at the terminal while you research impound status.",
      dispatchNeeds:
        "Yard address, SJPD release confirmation, rolling status, drivetrain type (AWD/EV), and scheduled release window.",
      relatedServiceLink: { text: "placeholder", href: "/" },
    },
    fifthSection: {
      id: "release-day-checklist",
      title: "Release Day Checklist",
      paragraphs: [
        "Morning-of: call the tow yard and SJPD Auto Desk to confirm both are open and that your release cleared—holiday staffing compresses windows at airport-area yards.",
        "Screenshot the Fly San Jose parking page for the lot type you used if the yard asks which zone originated the tow.",
        "Bring two payment methods: SJPD city release fee (per published fee list) plus tow-company storage—yards and the city may not accept the same card types.",
        "Walk around the vehicle before signing release paperwork and photograph any damage that was not present when the car was towed.",
      ],
      bullets: [
        "Plate, VIN, or case number for SJPD lookup",
        "Government photo ID and current registration",
        "SJPD release before yard pickup (most cases)",
        "Flatbed plan if AWD, EV, or no-start",
      ],
    },
    sectionExtras: {
      "what-release-covers": {
        paragraphs: [
          "SJPD lobby hours at 201 W. Mission St run Monday–Friday 8 AM–5 PM; public Auto Desk counter is 8 AM–4 PM per the July 2025 schedule posted on sjpd.org.",
        ],
        bullets: [
          "Terminal curbs vs economy lots use different enforcement partners",
          "Cell phone lot tows may route to off-airport yards",
          "Online SJPD release available outside counter hours",
        ],
      },
      "documents-to-bring": {
        paragraphs: [
          "To obtain personal property still inside the vehicle, contact the tow company directly—SJPD states this department does not issue property-only releases.",
        ],
      },
      "when-to-call-tow": {
        bullets: [
          "Dead 12V on EV—plan flatbed even without crash damage",
          "Rental fleet may require their vendor to authorize payment",
          "Dispute? File SJPD hearing within 10 days of notice date",
        ],
      },
    },
    officialResources: [
      { text: "SJPD recover towed vehicle", href: "https://www.sjpd.org/i-want-to/contact-us/recover-towed-vehicle" },
      { text: "Fly San Jose parking & ground transport", href: "https://www.flysanjose.com/parking-transportation" },
    ],
    enrich: {
      callout: {
        type: "legal",
        title: "Before you drive to the yard",
        body: "Call (408) 277-4263 for 24-hour Auto Desk assistance (except daily 12–2 PM) and confirm whether SJPD must issue a release before the tow company will hand over the vehicle.",
      },
      steps: [
        {
          step: 1,
          title: "Confirm tow origin",
          description: "Match terminal, economy, cell lot, or city street to the agency and yard on your notice.",
        },
        {
          step: 2,
          title: "Obtain SJPD release",
          description: "Auto Desk at 201 W. Mission St, online form after hours, or call (408) 277-4156 with plate/VIN.",
        },
        {
          step: 3,
          title: "Pay city + tow fees",
          description: "SJPD release fee to City of San Jose; separate storage/tow bill to the tow company—confirm methods by phone.",
        },
        {
          step: 4,
          title: "Plan transport out",
          description: "If the car will not roll or is AWD/EV, book flatbed pickup timed to your release window.",
        },
      ],
      twoColumn: {
        leftTitle: "Bring to release",
        leftItems: [
          "Valid ID and DMV registration",
          "Licensed driver if needed",
          "SJPD release confirmation",
          "Payment for city and yard fees",
        ],
        rightTitle: "Skip these mistakes",
        rightItems: [
          "Driving to wrong yard without calling",
          "Arriving during 12–2 PM phone gap unprepared",
          "Assuming wheel-lift for AWD/EV",
        ],
      },
    },
  },
  "san-jose-tow-hearing-request": {
    metaDescription:
      "San Jose tow hearing request: 10-day SJPD deadline, CVC 22852 review, evidence checklist, and DOT vs police paths—step-by-step, not legal advice.",
    heroAlt: "San Jose Police Department Auto Desk area for tow hearings and vehicle releases",
    heroCaption: "SJPD tow hearing requests must be filed within 10 days of the date on your Police Department notice.",
    atAGlance: {
      bestUseCase:
        "Registered owners disputing a San Jose Police Department or DOT tow who need to file an impound hearing under CVC §22852.",
      responseWorkflow:
        "Read notice → identify authority (SJPD vs DOT vs private) → file within 10 days → gather timestamped evidence → attend informal hearing.",
      safetyNote:
        "Storage and tow-yard fees often continue during the hearing—confirm accrual rules with the yard the same day you file.",
      dispatchNeeds:
        "Yard address, release paperwork if you need the vehicle moved after a decision, and whether the car rolls or needs flatbed.",
      relatedServiceLink: { text: "placeholder", href: "/" },
    },
    fifthSection: {
      id: "sjpd-resources",
      title: "SJPD Contacts and Online Filing",
      paragraphs: [
        "Vehicle status and recorded release information: SJPD Vehicle Records at (408) 277-4156—have your license plate, VIN, or case number ready.",
        "24-hour Auto Desk assistance (except daily 12–2 PM break): (408) 277-4263. Public counter at 201 W. Mission St is open Monday through Friday, 8 AM to 4 PM per SJPD's July 2025 schedule update.",
        "Vehicle releases can also be obtained online outside regular counter hours through SJPD's published online release form—screenshot your confirmation if you file digitally before a hearing.",
        "When contacting the Tow Hearing Unit, include whose authority ordered the tow, the stated reason, and the removal location. Incomplete requests delay the two-business-day informal hearing schedule.",
      ],
      bullets: [
        "Tow Hearing Unit: (408) 277-5429",
        "DOT Tow Hearings: (408) 975-3718",
        "10-day request window from notice date",
        "Supervisor review available under CVC 22852(e)",
      ],
    },
    sectionExtras: {
      "when-hearing-applies": {
        paragraphs: [
          "Orange courtesy warnings on San Jose streets are not required before every tow—absence of a warning does not invalidate enforcement under SJPD's published vehicle abatement FAQ.",
        ],
      },
      "filing-steps": {
        paragraphs: [
          "Online portals and email submissions should receive a time-stamped confirmation—save the reference number and a screenshot the same day you file.",
        ],
        bullets: [
          "Include authority, reason, and tow location in request",
          "Ask whether storage fees continue during review",
        ],
      },
      "evidence-checklist": {
        paragraphs: [
          "If disputing a private-property tow, request the signed authorization or trespass notice the property owner filed—hearing officers compare it to CVC §22658 posting rules.",
        ],
      },
    },
    officialResources: [
      { text: "SJPD recover towed vehicle & hearings", href: "https://www.sjpd.org/i-want-to/contact-us/recover-towed-vehicle" },
      { text: "California DMV vehicle registration", href: "https://www.dmv.ca.gov/portal/vehicle-registration/" },
    ],
    enrich: {
      callout: {
        type: "legal",
        title: "Not legal advice",
        body: "Verify deadlines and forms on sjpd.org. CVC §22852 exclusions apply to some abatement, investigation, and low-value abandoned vehicle removals—confirm your notice type before filing.",
      },
      steps: [
        {
          step: 1,
          title: "Identify authority",
          description: "Police (277-5429), DOT (975-3718), or private tow company—the channel on your notice controls where you file.",
        },
        {
          step: 2,
          title: "File within 10 days",
          description: "Contact the Tow Hearing Unit in person, by mail, email, or phone. SJPD targets an informal hearing within two business days.",
        },
        {
          step: 3,
          title: "Prepare evidence",
          description: "Wide-angle signage photos, permits, and reason-code-specific documents—timestamp everything.",
        },
        {
          step: 4,
          title: "Plan release transport",
          description: "If you pay to remove the car before or after the hearing, book yard pickup with release paperwork ready.",
        },
      ],
      twoColumn: {
        leftTitle: "Strong evidence",
        leftItems: [
          "Wide-angle signage from driver's view",
          "Permit matching registration address",
          "Dated witness or manager statements",
          "Hearing filing confirmation screenshot",
        ],
        rightTitle: "Weak arguments",
        rightItems: [
          "Hearsay without documents",
          "Issues unrelated to reason code",
          "Missing 10-day filing deadline",
          "Assuming storage fees pause automatically",
        ],
      },
    },
  },
  "sjc-cell-phone-lot-towing-rules": {
    metaDescription:
      "SJC cell phone lot rules: 30-minute limit at 2470 Airport Blvd, no commercial vehicles, curbside pickup law—plus what to do if towed. Step-by-step 2026 guide.",
    heroAlt: "Cell phone waiting area near Mineta San Jose International Airport on Airport Boulevard",
    heroCaption: "Free staging at 2470 Airport Blvd—but only for 30 minutes, and you must stay with the vehicle.",
    atAGlance: {
      bestUseCase:
        "Drivers and rideshare operators waiting at Mineta SJC's cell phone lot or curbside pickup zones who need to avoid ticketing and towing.",
      responseWorkflow:
        "Stage at 2470 Airport Blvd → set 30-min timer → stay with vehicle → move to curbside only when passenger is ready → call dispatch if breakdown before tagging.",
      safetyNote:
        "Curbside terminals allow active loading only—unattended vehicles are prohibited for any reason, including baggage check.",
      dispatchNeeds:
        "Lot row or space at 2470 Airport Blvd, terminal (A or B), rolling status, EV/AWD flag, and whether enforcement is on scene.",
      relatedServiceLink: { text: "placeholder", href: "/" },
    },
    fifthSection: {
      id: "curbside-vs-lot",
      title: "Curbside Pickup vs Cell Lot",
      paragraphs: [
        "Fly San Jose states that vehicles at terminal curbs must be actively loading or unloading—drivers cannot wait, park, or leave vehicles unattended curbside for any reason.",
        "Unattended vehicles are not permitted at the curb even for baggage check. To check bags, park in a lot or garage first, then proceed inside.",
        "Wheelchair or personal assistance at curbside requires advance airline coordination—do not block active lanes while waiting for support staff.",
      ],
      bullets: [
        "Cell lot: wait until passenger texts curbside-ready",
        "Curbside: load and go—no queueing",
        "International arrivals: separate curb past Terminal A",
        "Tow inquiries: SJPD (408) 277-4156",
      ],
    },
    sectionExtras: {
      "official-rules": {
        paragraphs: [
          "The cell phone area is at 2470 Airport Boulevard northeast of the terminals—verify signage if you have not used SJC since the lot relocated from older Airport Parkway references.",
        ],
      },
      "rideshare-workflow": {
        bullets: [
          "Confirm TNC staging map before entering lot",
          "No commercial vehicles in public cell lot",
          "Platform coverage may not cover airport tows—save receipts",
        ],
      },
    },
    officialResources: [
      { text: "SJC cell phone waiting area", href: "https://www.flysanjose.com/parking/cell-phone-waiting-area" },
      { text: "SJC passenger pick-up & drop-off", href: "https://www.flysanjose.com/meet" },
    ],
    enrich: {
      callout: {
        type: "tip",
        title: "Set a 25-minute timer",
        body: "Airport enforcement measures from entry, not from when your passenger lands. Build in traffic time on Airport Boulevard so you are not moving to curbside after the 30-minute mark.",
      },
      steps: [
        {
          step: 1,
          title: "Enter the correct zone",
          description: "Public cell lot at 2470 Airport Blvd for personal vehicles—confirm TNC map if you drive for a platform.",
        },
        {
          step: 2,
          title: "Stay with the vehicle",
          description: "Unattended cars are ticketed and towed. No exceptions for quick restroom or terminal trips.",
        },
        {
          step: 3,
          title: "Move on passenger ready",
          description: "Wait for curbside-ready text, then proceed to Terminal A or B arrivals—no waiting at the curb.",
        },
        {
          step: 4,
          title: "Breakdown or tow response",
          description: "Call dispatch while with the vehicle; if towed, start SJPD release at (408) 277-4156.",
        },
      ],
      twoColumn: {
        leftTitle: "Stay compliant",
        leftItems: [
          "30-minute maximum",
          "Personal vehicles only in cell lot",
          "Stay seated in or next to car",
          "Curbside active loading only",
        ],
        rightTitle: "Fastest tow triggers",
        rightItems: [
          "Unattended vehicle",
          "Over 30 minutes",
          "Commercial vehicle in cell lot",
          "No-start car left alone",
        ],
      },
    },
  },
  "ca-87-breakdown-san-jose-guide": {
    metaDescription:
      "CA-87 breakdown San Jose guide: Guadalupe Parkway mile markers, I-280/101 interchanges, CHP vs private tow, and dispatch checklist—step-by-step 2026.",
    heroAlt: "Guadalupe Parkway SR-87 freeway corridor through downtown San Jose",
    heroCaption: "Postmile and overhead sign text beat vague landmarks on SR-87—especially near Skyport and US-101.",
    atAGlance: {
      bestUseCase:
        "Drivers stalled on SR-87 between SR-85 and US-101 who need safe shoulder positioning and accurate tow dispatch in San Jose.",
      responseWorkflow:
        "Hazards on → pull right → 911 if blocking lanes → dial 511 for FSP when applicable → share direction and postmile with private dispatch.",
      safetyNote:
        "Julian Street tunnel and merge zones have narrow shoulders—follow CHP direction before hookup in live lanes.",
      dispatchNeeds:
        "Northbound or southbound, nearest overhead sign, postmile if visible, express vs local lane, EV/AWD/low clearance, destination shop or home.",
      relatedServiceLink: { text: "placeholder", href: "/" },
    },
    fifthSection: {
      id: "fsp-and-chp",
      title: "FSP and CHP on CA-87",
      paragraphs: [
        "Freeway Service Patrol covers Bay Area congested corridors during published hours—dial 511 and say Freeway Assist for free minor repairs or a tow to a CHP drop site, not your home.",
        "Lane-blocking collisions or injuries require 911 first. Private tow to your shop can run in parallel once CHP clears the hazard.",
        "Caltrans District 4 maintains SR-87; Capitol Expressway interchange work can narrow shoulders—mention construction when postmile signs are missing.",
      ],
      bullets: [
        "Taylor St SPUI ~ postmile 6.8",
        "Skyport / airport ~ postmile 8.3",
        "No I-880 interchange from SR-87",
        "CHP Golden Gate Division patrol",
      ],
    },
    sectionExtras: {
      "corridor-context": {
        paragraphs: [
          "Older locals still call SR-87 Guadalupe Parkway—dispatch understands both names, but overhead signs increasingly show SR-87 or Guadalupe Freeway.",
        ],
      },
      "dispatch-details": {
        bullets: [
          "Airport-bound traffic stacks near Skyport",
          "Downtown merges tighten at I-280",
          "Express lane stalls need lane closure for rollback",
        ],
      },
    },
    officialResources: [
      { text: "Caltrans District 4", href: "https://dot.ca.gov/caltrans-near-me/district-4" },
      { text: "511 Bay Area Freeway Assist", href: "https://511.org" },
      { text: "CHP Golden Gate Division", href: "https://www.chp.ca.gov/find-an-office/golden-gate-division" },
    ],
    enrich: {
      callout: {
        type: "warning",
        title: "Tunnel stops",
        body: "Julian Street tunnel breakdowns have minimal shoulder. Keep seatbelts on unless officers direct you out, and give dispatch tunnel + direction—not just downtown San Jose.",
      },
      steps: [
        {
          step: 1,
          title: "Secure the scene",
          description: "Pull right, hazards on, 911 if blocking; passengers exit away from lanes only when safe.",
        },
        {
          step: 2,
          title: "Choose the right help",
          description: "511 FSP during hours for free minor aid; CHP for hazards; private tow for shop or home destination.",
        },
        {
          step: 3,
          title: "Brief dispatch precisely",
          description: "NB/SB, express vs local, postmile or overhead sign, drivetrain type, callback number.",
        },
        {
          step: 4,
          title: "Confirm tow method",
          description: "Flatbed for EV/AWD/low clearance; verify destination clearance before loading.",
        },
      ],
      twoColumn: {
        leftTitle: "Tell dispatch",
        leftItems: [
          "Northbound or southbound",
          "Express vs local lane",
          "Postmile or overhead sign",
          "EV / AWD / motorcycle flag",
        ],
        rightTitle: "Avoid",
        rightItems: [
          "Standing between car and traffic",
          "Wheel-lift on AWD without clearance",
          "Moving before photos if collision",
          "Vague landmark only calls",
        ],
      },
    },
  },
  "san-mateo-county-vehicle-release": {
    metaDescription:
      "San Mateo County vehicle release: SMC Sheriff ID requirements, sheriffs_recordsrequest@smcgov.org after-hours, city vs CHP paths, and Peninsula dispatch after yard pickup.",
    heroAlt: "Peninsula suburban street and parking enforcement context in San Mateo County",
    heroCaption: "County release paths differ by authorizing agency—confirm the holding yard before you leave home.",
    atAGlance: {
      bestUseCase: "Peninsula drivers retrieving vehicles impounded by SMC Sheriff or navigating city/CHP holds in San Mateo County.",
      responseWorkflow:
        "Read notice authorizing agency → obtain SMC vehicle release if sheriff impound → call yard for fees/hours → gather ID → plan flatbed if no-start.",
      safetyNote:
        "Storage fees accrue daily at the tow yard even while release paperwork processes—call the yard the day you get notice.",
      dispatchNeeds: "Yard city and address, gate hours, rolling status, EV/AWD flag, and destination after release.",
      relatedServiceLink: { text: "San Mateo towing", href: "/towing-san-mateo" },
    },
    fifthSection: {
      id: "agency-paths",
      title: "Sheriff vs City vs CHP",
      paragraphs: [
        "Unincorporated San Mateo County tows and sheriff-enforced impounds route through the SMC Sheriff Vehicle Release desk before the storage operator releases the vehicle.",
        "Municipal tows in San Mateo, Redwood City, Daly City, and other cities may use city parking enforcement partners or private yards—the authorizing agency on your notice is the starting point.",
        "CHP freeway impounds include a case number and state storage operator. Private property tows may require landlord authorization in addition to standard ID.",
        "SMC Sheriff release fees vary by impound location—use the fee schedule matching where your vehicle was stored, payable in exact cash or credit card per current sheriff instructions.",
      ],
      bullets: [
        "Authorizing agency on tow notice",
        "SMC Sheriff plate or case number",
        "CHP case number if freeway-related",
        "Landlord letter for some private lots",
      ],
    },

    officialResources: [
      { text: "SMC Sheriff vehicle releases", href: "https://www.smcsheriff.com/vehicle-releases-requirements" },
      { text: "SMC Criminal Records Bureau", href: "https://www.smcsheriff.com/support-services/criminal-records-bureau" },
      { text: "City of San Mateo", href: "https://www.cityofsanmateo.org" },
    ],
    enrich: {
      callout: {
        type: "legal",
        title: "After-hours release requires email",
        body: "SMC Sheriff instructs owners requesting vehicle release outside normal counter hours, on weekends, or holidays to email sheriffs_recordsrequest@smcgov.org. Build that processing time into your yard pickup plan.",
      },
      steps: [
        {
          step: 1,
          title: "Identify agency",
          description:
            "Match sheriff, city, CHP, or private operator on your notice to the correct release desk before you drive.",
        },
        {
          step: 2,
          title: "Obtain sheriff release",
          description:
            "If SMC Sheriff impound: registered owner, valid DL (or ID plus licensed driver), plate/case number, location-specific fee.",
        },
        {
          step: 3,
          title: "Confirm yard details",
          description: "Hours, payment types, storage balance, and appointment requirements by phone before driving.",
        },
        {
          step: 4,
          title: "Retrieve and transport",
          description: "Inspect vehicle at pickup; book flatbed if it will not roll safely—650-881-2400.",
        },
      ],
      twoColumn: {
        leftTitle: "Documents",
        leftItems: [
          "Government photo ID",
          "Registration or ownership proof",
          "Sheriff release receipt",
          "Authorization if not owner",
        ],
        rightTitle: "Delays",
        rightItems: [
          "Wrong agency desk",
          "Weekend without email request",
          "Assuming hearing stops storage fees",
        ],
      },
    },
  },
  "ca-92-breakdown-san-mateo-towing": {
    metaDescription:
      "CA-92 breakdown San Mateo towing: San Mateo-Hayward Bridge stalls, 511 Freeway Assist, CHP coordination, and Peninsula flatbed dispatch near the 101 interchange.",
    heroAlt: "Highway 92 bridge approach corridor toward the San Mateo-Hayward Bridge",
    heroCaption: "Bridge approaches leave little shoulder room—get fully onto the shoulder before calling dispatch.",
    atAGlance: {
      bestUseCase:
        "Drivers broken down on CA-92 near San Mateo bridge approaches, the high-rise section, or the US-101 interchange.",
      responseWorkflow:
        "Fully onto shoulder → hazards → 911 if blocking → 511 Freeway Assist or commercial dispatch with direction and mile marker.",
      safetyNote:
        "Regional bridges route through Caltrans via 511—stay belted on the bridge deck until CHP confirms it is safe to exit.",
      dispatchNeeds: "Eastbound or westbound, mile marker, overheating vs mechanical fault, EV/AWD flatbed flag.",
      relatedServiceLink: { text: "San Mateo towing", href: "/towing-san-mateo" },
    },
    fifthSection: {
      id: "bridge-approaches",
      title: "Bridge Approach Staging",
      paragraphs: [
        "Westbound climbs toward the J. Arthur Younger Bridge high-rise section leave minimal shoulder—use hazard lights and stay belted until CHP confirms it is safe to exit.",
        "Eastbound grades from the 101 interchange through Foster City are common overheat zones in summer; share whether coolant loss or electrical fault caused the stall.",
        "511 Freeway Assist routes bridge incidents through Caltrans. FSP relocates to CHP-approved safe spots during peak commute hours—not your home shop.",
        "Commercial dispatch from a rotational drop lot requires your drop address, destination shop hours, and whether flatbed is needed for AWD/EV.",
        "Motorcycles and high-profile vans feel bridge crosswinds more than sedans—mention vehicle type so dispatch sends appropriate equipment.",
        "Weekend beach traffic can back up toll plazas; a stall in stop-and-go heat is different from a moving-lane failure. Describe whether traffic is flowing past you.",
        "Rideshare and delivery drivers stopping on 92 should share app trip context only after scene safety is handled—dispatch needs location facts first, not passenger details.",
      ],
      bullets: [
        "State bridge direction (toward 101 or Hayward)",
        "Note steam or fluid under vehicle",
        "CHP or Caltrans incident number if officer responded",
        "FSP drop lot address if applicable",
      ],
    },

    officialResources: [
      { text: "511 Freeway Assist", href: "https://511.org/511phone/assist" },
      { text: "CHP Freeway Service Patrol", href: "https://www.chp.ca.gov/programs-services/services-information/freeway-service-patrol/" },
      { text: "CHP Golden Gate Division", href: "https://www.chp.ca.gov/find-an-office/golden-gate-division" },
    ],
    enrich: {
      callout: {
        type: "warning",
        title: "Summer overheat cluster",
        body: "CA-92 eastbound grades see frequent cooling failures. Shut down the engine if temperature spikes and wait for shoulder clearance before opening the hood.",
      },
      steps: [
        {
          step: 1,
          title: "Maximize shoulder space",
          description: "Pull as far right as possible; wheels turned away from traffic when parked.",
        },
        {
          step: 2,
          title: "Call 911 or 511",
          description: "Blocking lanes → 911. Otherwise 511 Freeway Assist for bridge/tunnel coordination.",
        },
        {
          step: 3,
          title: "Coordinate with CHP",
          description: "Officer direction governs when tow trucks approach the bridge deck.",
        },
        {
          step: 4,
          title: "Commercial dispatch briefing",
          description: "Direction, mile marker, fault type, flatbed need, and destination shop hours—650-881-2400.",
        },
      ],
      twoColumn: {
        leftTitle: "Dispatch facts",
        leftItems: [
          "EB or WB toward 101/Hayward",
          "Mile marker or high-rise landmark",
          "Overheat vs collision",
          "EV tow mode status",
        ],
        rightTitle: "Risky moves",
        rightItems: [
          "Partial lane block without 911",
          "Wheel-lift on AWD",
          "Opening hood in live lanes",
        ],
      },
    },
  },
  "san-mateo-caltrain-tow-truck-pickup": {
    metaDescription:
      "Caltrain San Mateo tow pickup: 385 First Ave station, Transit Center garage, Laz Parking enforcement, kiss-and-ride rules, and Peninsula flatbed staging.",
    heroAlt: "Caltrain San Mateo station area with commuter parking and kiss-and-ride zones",
    heroCaption: "Station lots have one-way aisles—tell dispatch which corner and garage level you are on.",
    atAGlance: {
      bestUseCase:
        "Breakdown or impound pickup near downtown San Mateo Caltrain station, Transit Center garage, or kiss-and-ride zones.",
      responseWorkflow:
        "Confirm curb legality → share cross streets and lot name → give garage height if underground → meet truck at safe visible point.",
      safetyNote:
        "Pedestrian peaks every hour—do not block crosswalks, bus islands, or SamTrans stops while staging a tow truck.",
      dispatchNeeds:
        "North or south of station house, Transit Center vs 2nd Ave lot, garage P-level, ceiling height, rolling status.",
      relatedServiceLink: { text: "San Mateo towing", href: "/towing-san-mateo" },
    },
    fifthSection: {
      id: "downtown-staging",
      title: "Downtown Staging Points",
      paragraphs: [
        "B Street and 2nd Avenue have different curb rules block by block—photograph the sign at your exact space if enforcement is a concern.",
        "Transit Center underground aisles are one-way with tight turns—give P-level and stall number so the operator does not need to reverse out.",
        "Evening train arrivals pack sidewalks; choose a visible meeting point away from the busiest crosswalk when coordinating with dispatch.",
        "Private garages near the station may require manager escort—call building security before the truck enters.",
      ],
      bullets: [
        "Cross streets north or south of 385 First Ave",
        "Transit Center vs 2nd Ave lot",
        "Garage P-level and clearance",
        "Permit zone signs if street parked",
      ],
    },

    officialResources: [
      { text: "Caltrain San Mateo station", href: "https://www.caltrain.com/station/70091" },
      { text: "City of San Mateo parking", href: "https://www.cityofsanmateo.org/parking" },
      { text: "Laz Parking enforcement", href: "https://www.cityofsanmateo.org/680/Traffic-Parking" },
    ],
    enrich: {
      callout: {
        type: "info",
        title: "Commuter lot payment hours",
        body: "Transit Center paid parking runs 8 AM–6 PM on weekdays per Caltrain lot guidance—after 6 PM surface parking may be free while rules still apply to kiss-and-ride and metered streets.",
      },
      steps: [
        {
          step: 1,
          title: "Pick legal staging",
          description:
            "Identify a curb or lot corner that does not block buses, trains, SamTrans stops, or crosswalks.",
        },
        {
          step: 2,
          title: "Brief dispatch",
          description:
            "Lot name (Transit Center or 2nd Ave), cross streets, garage level, clearance, pedestrian volume.",
        },
        {
          step: 3,
          title: "Meet the operator",
          description: "Stand visible and safe; share keys, AWD/EV flag, and drivetrain details before hookup.",
        },
        {
          step: 4,
          title: "Confirm method",
          description: "Request flatbed for EV/AWD; share gate codes for underground pickup.",
        },
      ],
      twoColumn: {
        leftTitle: "Share with dispatch",
        leftItems: [
          "Transit Center or 2nd Ave lot",
          "Garage height and P-level",
          "AWD/EV flatbed flag",
          "Visible meet point",
        ],
        rightTitle: "Avoid",
        rightItems: [
          "Blocking kiss-and-ride",
          "Staging in bus island",
          "Wheel-lift on EV downtown",
        ],
      },
    },
  },
  "flatbed-ev-towing-san-mateo-checklist": {
    metaDescription:
      "Flatbed EV towing San Mateo: 12V vs HV faults, Tesla/Rivian transport mode, Peninsula garage clearance, and flatbed dispatch script—electric vehicle towing checklist.",
    heroAlt: "Electric vehicle secured on flatbed tow truck in San Mateo County",
    heroCaption: "Confirm manufacturer tow mode or neutral procedure before the flatbed ramps deploy.",
    atAGlance: {
      bestUseCase:
        "Peninsula EV and AWD owners who need flatbed transport in San Mateo city, Hillsdale, or downtown garages.",
      responseWorkflow:
        "Check 12V → enable tow/transport mode if possible → share garage height → request flatbed explicitly on the call.",
      safetyNote:
        "Tesla and Rivian manuals require flatbed with all wheels off the ground—wheel-lift can damage motors and affect warranty claims.",
      dispatchNeeds:
        "Make/model, tow mode status, 12V alive or dead, garage clearance, EV-certified destination shop.",
      relatedServiceLink: { text: "get a quote", href: "/get-a-quote" },
    },
    fifthSection: {
      id: "peninsula-garages",
      title: "Peninsula Garage Constraints",
      paragraphs: [
        "Downtown San Mateo Transit Center underground and Hillsdale garages often post 6'8\"–7'0\" clearance—measure the lowest pipe, not just the entrance sign.",
        "Air suspension and Rivian Conserve/lowest ride height settings help cross ramp transitions without scraping.",
        "Charging stalls are not repair bays—move to a legal loading zone before hookup when possible.",
        "Tell dispatch if the vehicle is near Caltrain kiss-and-ride—see our Caltrain San Mateo tow pickup guide for pedestrian staging.",
      ],
      bullets: [
        "Tow mode enabled or manual neutral confirmed",
        "12V jump attempted only if manual allows",
        "Ramp photo if clearance is tight",
        "Flatbed requested on first call",
      ],
    },

    officialResources: [
      { text: "Rivian towing support", href: "https://rivian.com/support/article/towing-your-rivian" },
      { text: "Tesla roadside assistance", href: "https://www.tesla.com/support/roadside-assistance" },
      { text: "Bay Area EV towing guide", href: "https://heavytowpro.com/blog/electric-vehicle-towing-guide" },
    ],
    enrich: {
      callout: {
        type: "tip",
        title: "Say flatbed on the first call",
        body: "Phrase it clearly: \"Electric vehicle, flatbed required, [make/model], tow mode [on/off].\" Peninsula dispatch routes EV-aware rollback trucks by default when you flag it upfront.",
      },
      steps: [
        {
          step: 1,
          title: "Diagnose 12V vs pack",
          description:
            "Note whether accessories work, shifter responds, and tow mode menu is reachable—tell dispatch which system failed.",
        },
        {
          step: 2,
          title: "Enable tow mode",
          description:
            "Tesla Transport Mode, Rivian park brake release, or brand equivalent; say if menu is unreachable.",
        },
        {
          step: 3,
          title: "Share garage context",
          description: "Ceiling height, P-level, steep driveway, or freeway shoulder mile marker.",
        },
        {
          step: 4,
          title: "Confirm flatbed hookup",
          description: "Decline wheel-lift; photograph strap points and receipt for insurance.",
        },
      ],
      twoColumn: {
        leftTitle: "Pre-tow checklist",
        leftItems: [
          "Flatbed requested",
          "Tow mode status known",
          "12V vs HV clarified",
          "Garage height shared",
        ],
        rightTitle: "Do not",
        rightItems: [
          "Wheel-lift on dual-motor EV",
          "Flat-tow behind RV",
          "Skip ramp measurement",
        ],
      },
    },
  },
  "oakland-towed-vehicle-how-to-get-back": {
    metaDescription:
      "Oakland towed vehicle release: OPD Records 510-238-3021, Auto Plus Towing lookup, administrative release fee, and East Bay dispatch transport from industrial yards.",
    heroAlt: "East Bay urban street with Oakland parking enforcement context",
    heroCaption: "Confirm tow status with OPD Records before driving to Auto Plus Towing.",
    atAGlance: {
      bestUseCase:
        "East Bay drivers retrieving vehicles towed by Oakland Police, OakDOT, or city-contract Auto Plus storage.",
      responseWorkflow:
        "Auto Plus plate lookup → OPD Records release at Room 306 → pay yard fees → plan transport from industrial yard.",
      safetyNote:
        "Industrial yards may be far from BART—plan ground transport while dispatch meets you at release.",
      dispatchNeeds:
        "Yard address, bay number, rolling status, EV/AWD flag, and post-release destination.",
      relatedServiceLink: { text: "Oakland towing", href: "/towing-oakland" },
    },
    fifthSection: {
      id: "oakland-yards",
      title: "Oakland Yard Logistics",
      paragraphs: [
        "Auto Plus Towing holds many city-contract impounds—use their public lookup before assuming a private lot address on an old blog post.",
        "Monday mornings see heavy release traffic; call (510) 261-8199 for balance and hours before you leave home.",
        "If plates were stolen, bring police report numbers—the yard may require them before release.",
        "Evidence holds need investigator clearance at OPD before Records can issue a standard release form.",
      ],
      bullets: [
        "Auto Plus: (510) 261-8199",
        "OPD Records: Room 306, 455 7th St",
        "Payment type confirmed by phone",
        "Flatbed if no-start or EV/AWD",
      ],
    },

    officialResources: [
      { text: "City of Oakland towed vehicles", href: "https://www.oaklandca.gov/Public-Safety-Streets/Parking-Vehicles/Towed-Vehicles" },
      { text: "Oakland Abandoned Auto Unit", href: "https://www.oaklandca.gov/Government/Departments/Transportation-OakDOT/Abandoned-Auto-Unit" },
    ],
    enrich: {
      callout: {
        type: "legal",
        title: "No payment plans for towed vehicles",
        body: "City of Oakland states there are no payment plans for towed vehicles. Pay parking tickets and release fees to remove the car—then dispute via the Administrative Hearing Examiner if appropriate.",
      },
      steps: [
        {
          step: 1,
          title: "Confirm tow online",
          description: "Auto Plus public lookup by plate/VIN or call OPD Records 510-238-3021.",
        },
        {
          step: 2,
          title: "Clear tickets if required",
          description: "Pay Oakland parking tickets and any blocking out-of-city tickets before release.",
        },
        {
          step: 3,
          title: "OPD Records release",
          description: "Room 306 with DL and ownership proof; pay administrative release fee.",
        },
        {
          step: 4,
          title: "Pay Auto Plus and transport",
          description: "Towing/storage to yard; book East Bay dispatch 510-800-3800 if no-start.",
        },
      ],
      twoColumn: {
        leftTitle: "Bring",
        leftItems: [
          "Valid driver's license",
          "Ownership proof",
          "Ticket payment receipts",
          "OPD release form",
        ],
        rightTitle: "Avoid",
        rightItems: [
          "Wrong yard trip",
          "Ignoring daily storage",
          "Disputing without examiner call",
        ],
      },
    },
  },
  "oakland-tow-hearing-request": {
    metaDescription:
      "Oakland tow hearing request: Administrative Hearing Examiner 510-238-4484, evidence photos, storage fee rules during review, and East Bay transport after a decision.",
    heroAlt: "Oakland urban parking and street enforcement near downtown",
    heroCaption: "Call the Administrative Hearing Examiner promptly if you believe your vehicle was towed in error.",
    atAGlance: {
      bestUseCase:
        "Registered owners disputing an Oakland tow or seeking fee waiver when the city towed the vehicle in error.",
      responseWorkflow:
        "Read notice → call 510-238-4484 → gather evidence → request hearing → plan vehicle removal regardless of outcome.",
      safetyNote:
        "Storage at Auto Plus often continues during review—confirm accrual the day you file.",
      dispatchNeeds:
        "Post-decision yard pickup, release paperwork in hand, flatbed flag if needed.",
      relatedServiceLink: { text: "Oakland towing", href: "/towing-oakland" },
    },
    fifthSection: {
      id: "oakland-filing",
      title: "Administrative Hearing Examiner",
      paragraphs: [
        "City of Oakland routes many tow disputes to the Administrative Hearing Examiner at (510) 238-4484—not a generic parking portal.",
        "Separate from OPD Records release at Room 306: hearings challenge the tow; release forms authorize pickup after fees.",
        "CVC §14602.6 thirty-day license holds may involve additional OPD tow review—ask the examiner which path applies.",
        "Private property tows may not use the same examiner workflow—read the notice category.",
        "Multilingual city assistance line (800) 500-6484 offers English, Spanish, Cantonese, and Mandarin for general tow questions.",
        "If the examiner schedules an in-person review, bring two printed copies of every photo and receipt—one for the file and one for your records.",
      ],
      bullets: [
        "Examiner: (510) 238-4484",
        "Plate, VIN, tow date ready",
        "Wide signage photos",
        "Photograph the vehicle at pickup if damage occurred during storage—note dents, missing parts, or interior tampering before signing release.",
        "Copy of every call log with examiner, OPD Records, and Auto Plus",
      ],
    },

    officialResources: [
      { text: "City of Oakland towed vehicles", href: "https://www.oaklandca.gov/Public-Safety-Streets/Parking-Vehicles/Towed-Vehicles" },
      { text: "CVC §22659.5", href: "https://california.public.law/codes/vehicle_code_section_22659.5" },
    ],
    enrich: {
      callout: {
        type: "legal",
        title: "Storage during review",
        body: "Daily storage at the tow company typically continues while a hearing is pending. Pay release fees to stop accrual if costs are compounding—the hearing addresses tow validity, not automatic fee freezes.",
      },
      steps: [
        {
          step: 1,
          title: "Call examiner",
          description: "510-238-4484 with plate, VIN, tow date, and reason you believe the tow was improper.",
        },
        {
          step: 2,
          title: "Submit evidence",
          description: "Timestamped signage, permits, ticket payment proof—factual documents only.",
        },
        {
          step: 3,
          title: "Track storage",
          description: "Call Auto Plus Towing same day to confirm daily balance while waiting.",
        },
        {
          step: 4,
          title: "Plan removal",
          description: "After decision, OPD release plus yard fees plus dispatch 510-800-3800 if the vehicle will not roll from the lot.",
        },
      ],
      twoColumn: {
        leftTitle: "Useful evidence",
        leftItems: [
          "Wide signage photos",
          "Permit or lease proof",
          "Ticket payment receipts",
          "Oak311 contact records",
        ],
        rightTitle: "Weak filings",
        rightItems: [
          "Wrong owner disputing",
          "Evidence hold without court order",
          "No notice copy referenced",
        ],
      },
    },
  },
  "sfo-vehicle-towed-what-to-do": {
    metaDescription:
      "SFO vehicle towed what to do: SFPD Airport Bureau 650-821-7111, cell lot 60-minute rules, garage impound release, and Peninsula flatbed dispatch from off-airport yards.",
    heroAlt: "San Francisco International Airport terminals and parking structures",
    heroCaption: "Airport property tows route through SFPD Airport Bureau—not the city SFMTA impound line.",
    atAGlance: {
      bestUseCase: "Travelers whose vehicle was towed from SFO terminals, garages, cell phone lot, or airport roadways.",
      responseWorkflow: "Confirm SFO vs city tow → 650-821-7111 → ID and payment → yard release → flatbed if no-start.",
      safetyNote: "Do not leave baggage unattended at curbside while locating impound information.",
      dispatchNeeds: "Terminal, garage level, yard address, rental authorization, EV/AWD flag.",
      relatedServiceLink: { text: "light-duty towing", href: "/services/light-duty" },
    },
    fifthSection: {
      id: "sfo-lots",
      title: "SFO Lot Types and Tow Triggers",
      paragraphs: [
        "Domestic Garage, International Garages A and G, Long-Term Parking, and ParkFAST each post different height limits and occupancy rules on FlySFO—your tow notice should name which structure you used.",
        "The free cell phone lot at North McDonnell Road and San Bruno Avenue caps waiting at 60 minutes, requires an attended vehicle, bans commercial vehicles, and closes 1:00 a.m. to 5:00 a.m.",
        "SFO Rule 4.3 authorizes removal of disabled, abandoned, or improperly parked vehicles to official airport impound areas at owner expense.",
      ],
      bullets: [
        "SFPD Airport Bureau: (650) 821-7111",
        "Cell lot: 60-minute attended maximum",
        "Garage: park only marked stalls",
        "Flatbed for EV/AWD from yard",
      ],
    },

    officialResources: [
      { text: "SFO parking information", href: "https://www.flysfo.com/parking" },
      { text: "SFO cell phone waiting lot", href: "https://www.flysfo.com/passengers/ground-transportation/cell-phone-waiting-lot" },
      { text: "SFPD Airport Bureau", href: "https://www.sanfranciscopolice.org/your-sfpd/explore-department/airport" },
    ],
    enrich: {
      callout: {
        type: "warning",
        title: "Not the city impound",
        body: "SFO airport property tows are not handled by SFMTA AutoReturn at 415-865-8200 unless Airport Police confirms your vehicle was transferred there. Call 650-821-7111 first.",
      },
      steps: [
        {
          step: 1,
          title: "Call Airport Police",
          description: "650-821-7111 with plate, VIN, and parking location (garage, cell lot, or curb).",
        },
        {
          step: 2,
          title: "Confirm yard",
          description: "Get storage contractor name, address, hours, and fee estimate before you travel.",
        },
        {
          step: 3,
          title: "Release and transport",
          description: "ID, registration, payment at yard—then 650-881-2400 if the vehicle will not roll.",
        },
      ],
      twoColumn: {
        leftTitle: "Bring to release",
        leftItems: [
          "Government photo ID",
          "Registration or ownership proof",
          "Rental authorization if applicable",
          "Payment method yard accepts",
        ],
        rightTitle: "Common mistakes",
        rightItems: [
          "Driving to city impound first",
          "Leaving bags at curbside",
          "Wheel-lift on AWD from gravel yard",
        ],
      },
    },
  },
  "511-freeway-assist-vs-tow-truck-bay-area": {
    metaDescription:
      "511 Freeway Assist vs private tow truck in the Bay Area: FSP free services, weekday 5:30 a.m.–7:30 p.m. hours, CHP rotational tow off-hours, and commercial flatbed dispatch script.",
    heroAlt: "Freeway Service Patrol truck and commercial tow truck on Bay Area highway shoulder",
    heroCaption: "FSP handles quick fixes and CHP-approved relocations—home and shop destinations need a private operator.",
    atAGlance: {
      bestUseCase: "Bay Area freeway drivers deciding between 511 FSP and a private tow after a non-emergency breakdown.",
      responseWorkflow: "911 if blocking → 511 Freeway Assist if eligible → private tow when FSP scope ends.",
      safetyNote: "Stay belted on narrow shoulders until CHP or FSP confirms a safe exit.",
      dispatchNeeds: "FSP notes, mile marker, direction, flatbed flag, destination address.",
      relatedServiceLink: { text: "light-duty towing", href: "/services/light-duty" },
    },
    fifthSection: {
      id: "coverage-hours",
      title: "Coverage and Hours",
      paragraphs: [
        "511.org lists FSP Monday through Friday 5:30 a.m. to 7:30 p.m. on many corridors—verify fsp-bayarea.org before you rely on patrol.",
      ],
      bullets: [
        "Dial 511, say Freeway Assist",
        "FSP is not a tow to your home",
        "EV HV faults need private flatbed",
      ],
    },

    officialResources: [
      { text: "511 Freeway Assist", href: "https://511.org/driving/assist" },
      { text: "FSP Bay Area FAQ", href: "https://www.fsp-bayarea.org/faq" },
      { text: "CHP Freeway Service Patrol", href: "https://www.chp.ca.gov/programs-services/services-information/freeway-service-patrol/" },
    ],
    enrich: {
      callout: {
        type: "tip",
        title: "After FSP visits",
        body: "Tell private dispatch what FSP already tried—failed jump, no spare tire, or relocation to an FSP lot—so the right truck is sent the first time.",
      },
      steps: [
        {
          step: 1,
          title: "Assess hazard",
          description: "911 for blocking; 511 Freeway Assist for eligible shoulder breakdowns.",
        },
        {
          step: 2,
          title: "Call private tow",
          description: "Share mile marker, FSP notes, and flatbed need when FSP cannot finish.",
        },
      ],
      twoColumn: {
        leftTitle: "Call FSP/511 when",
        leftItems: [
          "Non-blocking breakdown",
          "Need jump, tire, or fuel",
          "During published FSP hours",
        ],
        rightTitle: "Call private tow when",
        rightItems: [
          "Transmission or engine failure",
          "Collision damage",
          "Home or shop destination",
        ],
      },
    },
  },
  "fremont-bridge-corridor-breakdown-towing": {
    metaDescription:
      "Fremont bridge corridor breakdown towing: Dumbarton Bridge CA-84 toll plaza, I-880/680 split, medium-duty dispatch, 511/Caltrans routing, and East Bay safety checklist.",
    heroAlt: "East Bay bridge approach highway corridor near Fremont",
    heroCaption: "Name the bridge and direction in your first dispatch sentence—Dumbarton and San Mateo Bridge differ.",
    atAGlance: {
      bestUseCase: "Breakdowns on Dumbarton Bridge approaches, CA-84 toll plaza queues, and I-880/I-680 merge zones near Fremont.",
      responseWorkflow: "Fully clear travel lanes → 911 if blocking → bridge name and direction to dispatch.",
      safetyNote: "Toll plaza and bridge merges have minimal shoulder—follow CHP before exiting the vehicle.",
      dispatchNeeds: "Bridge name, EB/WB, mile marker, GVWR if commercial, EV tow mode status.",
      relatedServiceLink: { text: "medium-duty towing", href: "/services/medium-duty" },
    },
    fifthSection: {
      id: "bridge-names",
      title: "Dumbarton vs San Mateo Bridge",
      paragraphs: [
        "Dumbarton Bridge (CA-84) connects Fremont/Newark to Menlo Park with westbound-only toll collection at the Fremont-side plaza per 511.org. San Mateo Bridge (SR-92) lies south through Hayward—different toll authority, approaches, and CHP staging.",
        "MTC notes the Dumbarton is 1.6 miles with three lanes each direction and a bike/pedestrian path. Summer queues before the toll plaza hide disabled vehicles—hazards on and 911 if you are stopped in a live lane.",
        "Medium-duty wreckers handle loaded vans and small box trucks on grade-heavy approaches better than undersized rollbacks. State GVWR before the truck leaves the yard.",
        "511 routes regional bridges through Caltrans—not the same workflow as a standard freeway shoulder. Dial 511 and say Freeway Assist for non-emergency help; commercial dispatch handles shop and home destinations.",
      ],
      bullets: [
        "Dumbarton (CA-84) vs San Mateo (SR-92)—state which bridge",
        "Westbound toll plaza on Fremont side only",
        "GVWR and axle config for commercial units",
        "CHP incident number if officers are on scene",
      ],
    },

    officialResources: [
      { text: "511 Dumbarton Bridge", href: "https://511.org/driving/bridges/dumbarton-bridge" },
      { text: "MTC Dumbarton Bridge", href: "https://mtc.ca.gov/operations/programs-projects/bridges/dumbarton-bridge" },
      { text: "Caltrans District 4", href: "https://dot.ca.gov/caltrans-near-me/district-4" },
    ],
    enrich: {
      "callout": {
            type: "warning",
            "title": "Toll plaza stalls",
            "body": "If you lose power in a toll lane queue, stay belted, call 911, and do not attempt to push across live lanes without officer direction."
      },
      "steps": [
            {
                  "step": 1,
                  "title": "Identify bridge",
                  "description": "Dumbarton (84) vs San Mateo (92)—direction and nearest toll or merge point."
            },
            {
                  "step": 2,
                  "title": "Clear lanes",
                  "description": "911 for blocking; hazards and CHP coordination before hookup."
            },
            {
                  "step": 3,
                  "title": "Size the truck",
                  "description": "GVWR and axle config determine medium-duty vs light rollback."
            }
      ],
      "twoColumn": {
            "leftTitle": "Dispatch essentials",
            "leftItems": [
                  "Bridge name",
                  "Direction",
                  "GVWR if commercial",
                  "Flatbed for EV"
            ],
            "rightTitle": "Avoid",
            "rightItems": [
                  "Wrong bridge assumption",
                  "Hookup in live lane",
                  "Undersized wrecker"
            ]
      }
},
  },
  "i-880-breakdown-hayward-guide": {
    metaDescription:
      "I-880 breakdown Hayward guide: Whipple Rd exits, industrial corridor mile markers, 511 FSP vs private tow, CHP Oakland coordination, and East Bay dispatch script.",
    heroAlt: "I-880 Nimitz Freeway through Hayward with commercial traffic",
    heroCaption: "I-880 mile markers and direction of travel are the first facts East Bay dispatch needs.",
    atAGlance: {
      bestUseCase: "Drivers stalled on I-880 through Hayward and the industrial East Bay corridor.",
      responseWorkflow: "Shoulder fully → hazards → 911 if blocking → mile marker and direction to dispatch.",
      safetyNote: "Truck traffic is heavy—stay belted until officers clear you to exit on narrow shoulders.",
      dispatchNeeds: "NB/SB, mile marker, Hayward vs San Leandro segment, commercial GVWR if applicable.",
      relatedServiceLink: { text: "light-duty towing", href: "/services/light-duty" },
    },
    fifthSection: {
      id: "hayward-segments",
      title: "Hayward Corridor Segments",
      paragraphs: [
        "Exit 24 (mile ~23.9) serves Whipple Road, Industrial Parkway Southwest, and Dyer Street at the Union City–Hayward line per Caltrans exit numbering. Exit 25 is Industrial Parkway; Exit 26 connects to SR-92 and the San Mateo Bridge.",
        "Alameda CTC's I-880 interchange improvement project is reconfiguring Whipple and Industrial Parkway ramps—expect shifting lane patterns and reduced shoulder space during construction.",
        "Industrial exits near Whipple Road see frequent commercial overheating—state GVWR early for Sprinters and box trucks. Rear-end collisions at the SR-92 merge are common; photograph the scene before moving if safe.",
        "FSP may assist during published weekday hours on eligible freeway segments—private tow still required for shop destinations. Share FSP case notes when you call commercial dispatch.",
      ],
      bullets: [
        "Exit 24 Whipple / Exit 26 SR-92 bridge",
        "Mile marker in the low-20s through Hayward",
        "GVWR for box trucks and loaded vans",
        "Flatbed flag for EV/AWD",
      ],
    },

    officialResources: [
      { text: "511 Freeway Assist", href: "https://511.org/driving/assist" },
      { text: "CHP Oakland Area Office", href: "https://www.chp.ca.gov/find-an-office/golden-gate-division-oakland-area" },
      { text: "I-880 Whipple interchange project", href: "https://www.alamedactc.org/programs-projects/highway-improvement/880whippleindustrial" },
    ],
    enrich: {
      "callout": {
            type: "warning",
            "title": "Commercial volume",
            "body": "I-880 carries dense truck traffic. Use maximum shoulder space and cones if you can deploy them without crossing live lanes."
      },
      "steps": [
            {
                  "step": 1,
                  "title": "Secure shoulder position",
                  "description": "As far right as possible; hazards on; passengers exit away from traffic when safe."
            },
            {
                  "step": 2,
                  "title": "Call appropriate agency",
                  "description": "911 blocking; FSP if eligible; private for destination tow."
            },
            {
                  "step": 3,
                  "title": "Brief dispatch",
                  "description": "Mile marker, direction, GVWR, and flatbed need."
            }
      ],
      "twoColumn": {
            "leftTitle": "Tell dispatch",
            "leftItems": [
                  "NB or SB",
                  "Mile marker",
                  "GVWR if truck",
                  "Collision yes/no"
            ],
            "rightTitle": "Risky",
            "rightItems": [
                  "Lane partial block",
                  "Standing behind trailer",
                  "Wheel-lift on AWD"
            ]
      }
},
  },
  "i-680-breakdown-walnut-creek-checklist": {
    metaDescription:
      "I-680 breakdown Walnut Creek checklist: Ygnacio Valley exits, Sunol grade overheating, 511 FSP vs private tow, Pleasant Hill merges, and Contra Costa dispatch script.",
    heroAlt: "I-680 freeway corridor through Contra Costa suburban hills",
    heroCaption: "Sunol grade segments need brake and cooling status in your first call—especially summer afternoons.",
    atAGlance: {
      bestUseCase: "Drivers broken down on I-680 near Walnut Creek, Pleasant Hill merges, and Sunol grade approaches.",
      responseWorkflow: "Note grade location → hazards → cooling shutdown if overheating → mile marker to dispatch.",
      safetyNote: "Sunol grade runaway truck ramps are emergency-only—never enter unless brakes truly fail with CHP direction.",
      dispatchNeeds: "NB/SB, mile marker, Sunol grade yes/no, overheating vs mechanical, destination.",
      relatedServiceLink: { text: "light-duty towing", href: "/services/light-duty" },
    },
    fifthSection: {
      id: "sunol-grade",
      title: "Sunol Grade Considerations",
      paragraphs: [
        "Mission Pass—Sunol Grade—is the I-680 climb through the Coast Ranges south of Pleasanton. Southbound drivers from Walnut Creek toward Fremont hit sustained grade where cooling systems and brakes work hardest on summer afternoons.",
        "Share smoke, hot-brake smell, or gauge readings with dispatch. Ygnacio Valley Road merges (Exit 46B) and the SR-24 interchange (Exit 46A) are high-friction zones with narrow shoulders during commute peaks.",
        "Northbound toward Pleasant Hill and Martinez, mile markers continue into the high 40s and 50s—useful for drivers searching towing near Pleasant Hill or Martinez on the same corridor.",
        "Motorcycles need explicit mention—tip-over changes tie-down and flatbed requirements even without collision damage.",
      ],
      bullets: [
        "Exit 46A SR-24 vs Exit 46B Ygnacio Valley",
        "Sunol grade flag if southbound climbing",
        "Overheat shutdown before engine seizure",
        "Flatbed for EV/AWD when in doubt",
      ],
    },

    officialResources: [
      { text: "511 Freeway Assist", href: "https://511.org/driving/assist" },
      { text: "Caltrans District 4", href: "https://dot.ca.gov/caltrans-near-me/district-4" },
      { text: "CHP Golden Gate Division", href: "https://www.chp.ca.gov/find-an-office/golden-gate-division" },
    ],
    enrich: {
      "callout": {
            type: "warning",
            "title": "Overheat on the grade",
            "body": "Shut down the engine if temperature spikes on Sunol grade. Wait for shoulder clearance—opening the hood in a live lane is dangerous."
      },
      "steps": [
            {
                  "step": 1,
                  "title": "Identify segment",
                  "description": "Sunol grade vs Ygnacio merge vs downtown Walnut Creek exits."
            },
            {
                  "step": 2,
                  "title": "Stabilize vehicle",
                  "description": "Cooling shutdown if needed; hazards; CHP if blocking."
            },
            {
                  "step": 3,
                  "title": "Dispatch details",
                  "description": "Mile marker, fault type, motorcycle/EV/AWD flags."
            }
      ],
      "twoColumn": {
            "leftTitle": "Include",
            "leftItems": [
                  "Grade location",
                  "Mile marker",
                  "Overheat symptoms",
                  "Flatbed if AWD"
            ],
            "rightTitle": "Avoid",
            "rightItems": [
                  "Driving on blown tire",
                  "Wrong exit guess",
                  "Runaway ramp misuse"
            ]
      }
},
  },
  "delivery-van-towing-concord-ca": {
    metaDescription:
      "Delivery van towing Concord CA: Sprinter and Transit GVWR classes, medium-duty dispatch, Willow Pass fleet corridors, and Contra Costa towing near me script.",
    heroAlt: "Commercial delivery van on urban East Bay street in Concord",
    heroCaption: "GVWR on the door sticker picks the wrecker class—call it in before the truck rolls.",
    atAGlance: {
      bestUseCase: "Last-mile delivery vans and sprinter fleets broken down in Concord and central Contra Costa.",
      responseWorkflow: "Read GVWR sticker → note loaded cargo → share company fleet ID → request medium-duty if Class 3+.",
      safetyNote: "Loaded vans shift weight aft—tell dispatch if cargo is secured and whether refrigeration is running.",
      dispatchNeeds: "GVWR, wheelbase, loaded status, dock or curb location, destination shop.",
      relatedServiceLink: { text: "medium-duty towing", href: "/services/medium-duty" },
    },
    fifthSection: {
      id: "concord-corridors",
      title: "Concord Industrial Corridors",
      paragraphs: [
        "Willow Pass Road and Port Chicago Highway corridors see frequent Sprinter and step-van breakdowns at logistics gates—share business name and cross street for yard access.",
        "Sunvalley Shopping Center aprons and Todos Santos Plaza curb stops need patient staging during peak retail hours. I-680 shoulders near Willow Pass and the SR-242 merge require CHP coordination before hookup.",
        "Refrigerated bodies add height and weight—medium-duty flatbeds may be required for high-roof extended vans. Fleet PO numbers speed billing for Amazon, courier, and contractor accounts.",
        "FHWA Class 3 begins at 10,001 lbs GVWR—many Transit T-250 and Sprinter 2500 configs sit at or above that threshold even when empty on the sticker.",
      ],
      bullets: [
        "GVWR from B-pillar sticker",
        "Willow Pass or 680 mile marker",
        "Fleet or company billing ID",
        "Lift gate and reefer unit status",
      ],
    },

    officialResources: [
      { text: "FHWA vehicle weight classes", href: "https://afdc.energy.gov/vehicles/weight-classes" },
      { text: "FMCSA CMV overview", href: "https://www.fmcsa.dot.gov/regulations/cmv/definition-commercial-motor-vehicle" },
      { text: "City of Concord", href: "https://www.cityofconcord.org" },
    ],
    enrich: {
      "callout": {
            type: "warning",
            "title": "Class matters",
            "body": "Sprinter and Transit vans often exceed light rollback capacity when fully loaded—state GVWR honestly to avoid a second truck roll."
      },
      "steps": [
            {
                  "step": 1,
                  "title": "Read GVWR",
                  "description": "Door jamb sticker and axle configuration before calling."
            },
            {
                  "step": 2,
                  "title": "Describe cargo",
                  "description": "Loaded weight, hazmat placards, and refrigeration if applicable."
            },
            {
                  "step": 3,
                  "title": "Book medium-duty",
                  "description": "Confirm wrecker class and destination shop hours before hookup."
            }
      ],
      "twoColumn": {
            "leftTitle": "Fleet dispatch card",
            "leftItems": [
                  "GVWR and VIN last six",
                  "Fleet account number",
                  "Driver callback",
                  "Dock or gate code"
            ],
            "rightTitle": "Avoid",
            "rightItems": [
                  "Understating weight",
                  "Light truck on Class 6",
                  "No destination shop hours"
            ]
      }
},
  },
  "low-clearance-garage-towing-palo-alto": {
    metaDescription:
      "Low clearance garage towing Palo Alto: measure ramps and pipes, 7 ft deck clearances, low-profile flatbed extraction, Stanford structures, and HOA escort rules.",
    heroAlt: "Low clearance underground parking garage entrance in Palo Alto",
    heroCaption: "Measure the tightest ramp point—not just the portal sign—before booking a flatbed.",
    atAGlance: {
      bestUseCase: "Vehicles stuck in Palo Alto downtown or Stanford-adjacent low-clearance garages.",
      responseWorkflow: "Measure lowest point → photo clearance sign → get HOA/security OK → dispatch low-profile flatbed.",
      safetyNote: "Spiral ramps magnify effective height—measure at the tightest bend, not the entrance.",
      dispatchNeeds: "Garage level, lowest clearance in feet/inches, gate code, air suspension or EV tow mode status.",
      relatedServiceLink: { text: "light-duty towing", href: "/services/light-duty" },
    },
    fifthSection: {
      id: "measurement-walkthrough",
      title: "Measurement Walkthrough",
      paragraphs: [
        "Walk the exit ramp with a tape measure at the lowest hanging pipe and steepest transition—portal signs often overstate available height by 2–4 inches.",
        "Palo Alto municipal parking design standards target roughly 7.5 feet in stall areas, but spiral bends and ductwork frequently run lower—photograph both the sign and the tightest obstruction.",
        "Air suspension and adaptive ride vehicles may need transport mode before rolling onto a flatbed wedge in tight decks.",
        "Stanford campus and hospital structures may require permit verification—share building name, lot letter, and security escort requirement with dispatch.",
      ],
      bullets: [
        "Photo of clearance sign and tightest pipe",
        "P-level and stall or pillar number",
        "HOA or security escort requirement",
        "EV tow mode before hookup",
      ],
    },

    officialResources: [
      { text: "Palo Alto parking facility standards (Ch. 18.54)", href: "https://codelibrary.amlegal.com/codes/paloalto/latest/paloalto_ca/0-0-0-81120" },
      { text: "City of Palo Alto", href: "https://www.cityofpaloalto.org" },
      { text: "Stanford Transportation", href: "https://transportation.stanford.edu" },
    ],
    enrich: {
      "callout": {
            type: "tip",
            "title": "Typical downtown clearances",
            "body": "Many Palo Alto towers post 6'8\"–7'0\"—but spiral ramps can be lower at the bend. Measure; do not assume."
      },
      "steps": [
            {
                  "step": 1,
                  "title": "Measure clearance",
                  "description": "Lowest pipe and ramp bend; photograph for dispatch."
            },
            {
                  "step": 2,
                  "title": "Clear with building",
                  "description": "Security escort and after-hours rules before truck enters."
            },
            {
                  "step": 3,
                  "title": "Book low-profile flatbed",
                  "description": "Skilled operator plus wedge lift—wheel-lift rarely works underground."
            }
      ],
      "twoColumn": {
            "leftTitle": "Send dispatch",
            "leftItems": [
                  "Clearance in inches",
                  "P-level",
                  "Gate code",
                  "EV tow mode status"
            ],
            "rightTitle": "Avoid",
            "rightItems": [
                  "Guessing height",
                  "Wheel-lift in deck",
                  "Skipping HOA approval"
            ]
      }
},
  },
  "tow-truck-mountain-view-shoreline": {
    metaDescription:
      "Tow truck Mountain View Shoreline guide: Amphitheatre Parkway pickup zone, Lots A/C/D, post-concert egress, 101 shoulder dispatch, and EV flatbed staging.",
    heroAlt: "Shoreline Amphitheatre parking and event traffic in Mountain View",
    heroCaption: "Event nights need lot section and pedestrian gate details—traffic patterns change after shows.",
    atAGlance: {
      bestUseCase: "Breakdowns near Shoreline Amphitheatre, Shoreline Park, and North Shoreline 101 access.",
      responseWorkflow: "Share lot section → note event traffic → pick visible meet point → call South Bay dispatch.",
      safetyNote: "Post-event pedestrian surges make tight lots hazardous—stage away from main exit paths.",
      dispatchNeeds: "Lot letter/section, event yes/no, rolling status, EV/AWD flag.",
      relatedServiceLink: { text: "light-duty towing", href: "/services/light-duty" },
    },
    fifthSection: {
      id: "event-nights",
      title: "Concert Night Staging",
      paragraphs: [
        "Shoreline Amphitheatre directs all rideshare and taxi pickup to Amphitheatre Parkway across from the main pedestrian path—tow operators should use the same approach when security allows.",
        "Lots C and D serve accessible parking; Lot A may handle overflow accessible parking with a shuttle per venue FAQ. Name your lot letter when calling dispatch.",
        "Post-show gridlock on major nights can delay truck entry 30–90 minutes—pick a meet point with line-of-sight and update your pin if you walk toward Shoreline Blvd.",
        "Mountain View Police assist with oversized vehicle and bus staging on event nights—follow officer direction before a commercial truck enters a restricted lane.",
      ],
      bullets: [
        "Lot letter (A/C/D) and row",
        "Event night yes/no",
        "Meet point away from exit crush",
        "Security approval if inside venue lot",
      ],
    },

    officialResources: [
      { text: "Shoreline Amphitheatre — Know Before You Go", href: "https://www.shorelineamphitheatre.com/know-before-you-go" },
      { text: "Shoreline Amphitheatre FAQ", href: "https://www.shorelineamphitheatre.com/faq" },
      { text: "City of Mountain View", href: "https://www.mountainview.gov" },
    ],
    enrich: {
      "callout": {
            type: "info",
            "title": "After-show traffic",
            "body": "If you are inside a venue lot, security may direct staging—get their OK before the tow truck enters a restricted lane."
      },
      "steps": [
            {
                  "step": 1,
                  "title": "Locate precisely",
                  "description": "Lot section, row, and whether you are in amphitheatre vs park roads."
            },
            {
                  "step": 2,
                  "title": "Pick safe meet",
                  "description": "Visible point away from post-event pedestrian crush."
            },
            {
                  "step": 3,
                  "title": "Call South Bay",
                  "description": "408-800-3800 with rolling status and flatbed need."
            }
      ],
      "twoColumn": {
            "leftTitle": "Share",
            "leftItems": [
                  "Lot section",
                  "Event night yes/no",
                  "AWD/EV flag",
                  "Visible meet point"
            ],
            "rightTitle": "Avoid",
            "rightItems": [
                  "Blocking exit lane",
                  "Hookup in pedestrian flow",
                  "Wrong lot entrance"
            ]
      }
},
  },
  "commercial-towing-redwood-city-seaport": {
    metaDescription: "Commercial towing Redwood City Seaport: port-adjacent GVWR dispatch, gate contacts, medium-duty recovery, and industrial waterfront staging near Seaport Blvd.",
    heroAlt: "Commercial recovery truck at industrial waterfront setting near Redwood City Seaport",
    heroCaption: "Port-adjacent staging needs gate contacts and GVWR confirmed before wheels roll.",
    atAGlance: {
      bestUseCase: "Commercial breakdowns on Seaport Blvd, port-adjacent yards, and industrial waterfront roads.",
      responseWorkflow: "Confirm gate access → state GVWR and cargo → share dock or yard number → medium-duty dispatch.",
      safetyNote: "Active port traffic mixes forklifts and trucks—stage cones and keep pedestrians clear.",
      dispatchNeeds: "GVWR, axle config, gate contact, TWIC requirement if applicable, destination yard.",
      relatedServiceLink: { text: "medium-duty towing", href: "/services/medium-duty" },
    },
    fifthSection: {
      id: "port-access",
      title: "Port Access and Credentials",
      paragraphs: [
        "Some terminals require TWIC or escort for non-port vehicles—confirm whether your breakdown is inside a secured gate before dispatch sends a truck.",
        "Seaport Blvd connects marine industrial sites to 101—state cross streets and business names; mile markers are sparse on surface roads.",
        "Winch-out may precede tow on soft shoulders near marsh edges—describe surface conditions honestly.",
        "After-hours tenant contacts matter—many maritime yards use on-call guards; get a name and direct line before dispatch leaves the yard.",
      ],
      bullets: [
        "Gate contact or guard phone",
        "GVWR and loaded status",
        "TWIC or escort requirement",
      ],
    },
    
    officialResources: [
      { text: "Port of Redwood City", href: "https://www.redwoodcityport.com" },
      { text: "City of Redwood City", href: "https://www.redwoodcity.org" },
    ],
    enrich: {
      "callout": {
            type: "warning",
            "title": "Secured terminals",
            "body": "If the vehicle is inside a fenced terminal, the tow operator may need gate clearance—start that call before the truck en route."
      },
      "steps": [
            {
                  "step": 1,
                  "title": "Confirm access",
                  "description": "Gate codes, guard phones, TWIC needs for port interiors."
            },
            {
                  "step": 2,
                  "title": "Size the job",
                  "description": "GVWR, cargo, and whether winch-out is needed on soft ground."
            },
            {
                  "step": 3,
                  "title": "Stage safely",
                  "description": "Cones and spotter if forklifts are active nearby."
            }
      ],
      "twoColumn": {
            "leftTitle": "Commercial brief",
            "leftItems": [
                  "GVWR and axles",
                  "Gate contact",
                  "Loaded status",
                  "Destination yard"
            ],
            "rightTitle": "Avoid",
            "rightItems": [
                  "Sending light rollback",
                  "No gate clearance",
                  "Ignoring soft shoulder"
            ]
      }
},
  },
  "stockton-towing-dispatch-checklist": {
    metaDescription: "Stockton towing dispatch checklist: I-5, Hwy 99, and Hwy 4 corridors, GVWR routing, agricultural season traffic, and Central Valley heavy-duty fleet billing.",
    heroAlt: "Central Valley highway and agricultural corridor near Stockton",
    heroCaption: "Corridor name beats city alone when you are between Stockton exits on I-5 or 99.",
    atAGlance: {
      bestUseCase: "Fleet and owner-operators needing freight-aware dispatch in Stockton and San Joaquin corridors.",
      responseWorkflow: "Corridor + mile marker → GVWR → loaded/hazmat flags → fleet account or PO → heavy-duty if Class 7–8.",
      safetyNote: "Agricultural harvest seasons spike truck volume—shoulder space on Hwy 99 can be minimal.",
      dispatchNeeds: "Freeway vs surface, mile marker, GVWR, axle config, hazmat placards, company fleet number.",
      relatedServiceLink: { text: "heavy-duty towing", href: "/services/heavy-duty" },
    },
    fifthSection: {
      id: "harvest-season",
      title: "Agricultural Season Traffic",
      paragraphs: [
        "Harvest windows concentrate slow-moving equipment on Hwy 99 and connector roads—expect delayed shoulder access and longer CHP response.",
        "I-5 and Hwy 4 junction areas need explicit corridor naming; 'Stockton' alone is ambiguous between exits.",
        "Document downtime with timestamps for customer SLA disputes—itemized tow invoices support cargo delay claims.",
      ],
      bullets: [
        "I-5 vs 99 vs Hwy 4",
        "Mile marker or last exit",
        "Fleet billing contact",
      ],
    },
    
    officialResources: [
      { text: "Caltrans District 10", href: "https://dot.ca.gov/caltrans-near-me/district-10" },
      { text: "511 Northern California", href: "https://511.org" },
    ],
    enrich: {
      "callout": {
            type: "warning",
            "title": "Heavy-duty default",
            "body": "Class 7–8 trucks and loaded doubles need heavy wreckers—not light rollbacks. State GVWR before the first truck rolls."
      },
      "steps": [
            {
                  "step": 1,
                  "title": "Corridor brief",
                  "description": "Freeway, mile marker, and direction—especially between Stockton exits."
            },
            {
                  "step": 2,
                  "title": "Weight class",
                  "description": "GVWR, axles, loaded status, hazmat placards if any."
            },
            {
                  "step": 3,
                  "title": "Fleet billing",
                  "description": "Company PO, fleet account, and itemized invoice requirements."
            }
      ],
      "twoColumn": {
            "leftTitle": "Dispatch card",
            "leftItems": [
                  "Corridor + mile marker",
                  "GVWR and axles",
                  "Fleet number",
                  "CHP on scene yes/no"
            ],
            "rightTitle": "Avoid",
            "rightItems": [
                  "City-only location",
                  "Undersized wrecker",
                  "Missing hazmat flag"
            ]
      }
},
  },
};
