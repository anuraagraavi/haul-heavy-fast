export type LandingImageId =
  | "light_luxury_flatbed"
  | "light_accident_recovery"
  | "light_suv_highway"
  | "light_suv_mountain"
  | "light_ram_truck"
  | "light_hillside_recovery"
  | "light_suv_tree_lined"
  | "light_rivian_ev"
  | "medium_att_service_truck"
  | "medium_industrial_pump"
  | "medium_recology_street"
  | "medium_recology_yard"
  | "medium_commercial_truck_recovery"
  | "medium_refuse_detail";

export interface LandingImageMeta {
  id: LandingImageId;
  /** Public path under /work-images/... served from Vite's public dir */
  src: string;
  /** Alt text, taken directly from IMAGE-REFERENCE.md */
  alt: string;
  /** SEO title from IMAGE-REFERENCE.md (where provided) */
  seoTitle: string;
  /** SEO description from IMAGE-REFERENCE.md (where provided) */
  seoDescription: string;
}

export const landingImages: LandingImageMeta[] = [
  {
    id: "light_luxury_flatbed",
    src: "/work-images/light-duty/heavy-haulers-towing-luxury-car-transport-mercedes-benz-flatbed-light-duty.webp",
    alt: "H&H Towing flatbed truck transporting two Mercedes-Benz vehicles in the Bay Area",
    seoTitle: "Luxury Car Transport & Towing – H&H Towing Co. Bay Area",
    seoDescription:
      "H&H Towing Co. provides professional luxury and exotic car transport across the Bay Area. Our flatbed trucks ensure your Mercedes, BMW, or high-value vehicle is transported safely.",
  },
  {
    id: "light_accident_recovery",
    src: "/work-images/light-duty/heavy-haulers-towing-accident-vehicle-recovery-collision-car-flatbed-light-duty.webp",
    alt: "H&H Towing flatbed truck recovering a collision-damaged vehicle in San Francisco Bay Area",
    seoTitle: "Accident & Collision Vehicle Recovery – H&H Towing Co.",
    seoDescription:
      "Involved in an accident? H&H Towing Co. provides fast, professional accident vehicle recovery and towing throughout the San Francisco Bay Area. Available 24/7.",
  },
  {
    id: "light_suv_highway",
    src: "/work-images/light-duty/heavy-haulers-towing-suv-roadside-assistance-highway-light-duty-bay-area.webp",
    alt: "H&H Towing white Ram 5500 tow truck roadside assisting a white SUV on a Bay Area highway",
    seoTitle: "SUV & Truck Towing & Roadside Assistance – H&H Towing Bay Area",
    seoDescription:
      "H&H Towing Co. offers fast roadside assistance and towing for SUVs, trucks, and vans throughout the Bay Area. Call us anytime — we'll get you moving.",
  },
  {
    id: "light_suv_mountain",
    src: "/work-images/light-duty/heavy-haulers-towing-suv-mountain-road-roadside-recovery-light-duty.webp",
    alt: "H&H Towing truck assisting a stranded SUV on a California mountain road",
    seoTitle: "Mountain & Rural Route Towing – H&H Towing Co. Bay Area",
    seoDescription:
      "Broken down on a mountain road or rural highway? H&H Towing Co. serves all Bay Area routes including hillside and rural roads. Fast response, any location.",
  },
  {
    id: "light_ram_truck",
    src: "/work-images/light-duty/heavy-haulers-towing-ram-5500-tow-truck-light-duty-roadside-service.webp",
    alt: "H&H Towing Co. Ram 5500 light duty tow truck ready for roadside service",
    seoTitle: "H&H Towing Fleet – Professional Light Duty Tow Trucks Bay Area",
    seoDescription:
      "H&H Towing Co. operates a modern fleet of light duty tow trucks for fast, reliable roadside service across the San Francisco Bay Area.",
  },
  {
    id: "light_hillside_recovery",
    src: "/work-images/light-duty/heavy-haulers-towing-car-recovery-hillside-road-light-duty-san-francisco.webp",
    alt: "H&H Towing recovering a black car on a hillside road in San Francisco",
    seoTitle: "San Francisco Car Towing & Recovery – H&H Towing Co.",
    seoDescription:
      "H&H Towing Co. provides expert car recovery and towing across San Francisco's hills and neighborhoods. Fast dispatch, 24/7 availability.",
  },
  {
    id: "light_suv_tree_lined",
    src: "/work-images/light-duty/heavy-haulers-towing-suv-recovery-tree-lined-road-light-duty-bay-area.webp",
    alt: "H&H Towing recovering a black Cadillac Escalade SUV on a tree-lined residential road in the Bay Area",
    seoTitle: "Premium SUV Recovery & Towing Service – H&H Towing Co.",
    seoDescription:
      "H&H Towing Co. offers premium roadside recovery and towing for luxury SUVs and high-value vehicles. Trusted across Bay Area's residential and urban neighborhoods.",
  },
  {
    id: "light_rivian_ev",
    src: "/work-images/light-duty/heavy-haulers-towing-rivian-electric-suv-roadside-light-duty-bay-area.webp",
    alt: "H&H Towing light duty truck recovering a Rivian R1S electric SUV in the Bay Area",
    seoTitle: "Electric Vehicle (EV) Towing & Recovery – H&H Towing Bay Area",
    seoDescription:
      "H&H Towing Co. has experience towing and recovering all types of electric vehicles including Rivian, Tesla, and other EVs throughout the San Francisco Bay Area.",
  },
  {
    id: "medium_att_service_truck",
    src: "/work-images/medium-duty/heavy-haulers-towing-att-service-truck-flatbed-medium-duty-commercial.webp",
    alt: "H&H Towing flatbed truck transporting an AT&T utility service truck for commercial fleet towing",
    seoTitle: "Commercial Fleet & Utility Truck Towing – H&H Towing Co.",
    seoDescription:
      "H&H Towing provides reliable commercial fleet towing and recovery for utility, telecom, and service vehicles across the Bay Area. Available 24/7 for fleet operators.",
  },
  {
    id: "medium_industrial_pump",
    src: "/work-images/medium-duty/heavy-haulers-towing-industrial-pump-equipment-flatbed-medium-duty.webp",
    alt: "H&H Towing flatbed truck transporting a red industrial pump unit at a Bay Area industrial facility",
    seoTitle: "Industrial Equipment Transport & Towing – H&H Towing Co.",
    seoDescription:
      "H&H Towing Co. safely transports industrial pumps, generators, and heavy equipment for construction and industrial clients throughout the Bay Area.",
  },
  {
    id: "medium_recology_street",
    src: "/work-images/medium-duty/heavy-haulers-towing-recology-garbage-truck-wrecker-medium-duty-san-francisco.webp",
    alt: "H&H Towing heavy wrecker recovering a Recology garbage truck on a San Francisco street",
    seoTitle: "Municipal Fleet Towing San Francisco – H&H Towing Co.",
    seoDescription:
      "H&H Towing Co. is trusted by San Francisco municipal fleet operators including Recology for professional towing and recovery of refuse and service vehicles.",
  },
  {
    id: "medium_recology_yard",
    src: "/work-images/medium-duty/heavy-haulers-towing-recology-refuse-truck-heavy-wrecker-medium-duty.webp",
    alt: "H&H Towing heavy wrecker parked alongside a Recology refuse truck at a Bay Area depot",
    seoTitle: "Commercial Refuse & Fleet Truck Towing – H&H Towing Co.",
    seoDescription:
      "H&H Towing Co. specialises in commercial refuse truck towing and fleet recovery for Bay Area municipal and waste management operators.",
  },
  {
    id: "medium_commercial_truck_recovery",
    src: "/work-images/medium-duty/heavy-haulers-towing-commercial-truck-recovery-medium-duty-municipal.webp",
    alt: "Close-up of H&H Towing heavy wrecker rigging a commercial municipal truck for recovery",
    seoTitle: "Commercial Truck Recovery & Towing Operations – H&H Towing",
    seoDescription:
      "See H&H Towing Co.'s professional commercial truck recovery in action. We safely rig and recover municipal and commercial vehicles across the Bay Area.",
  },
  {
    id: "medium_refuse_detail",
    src: "/work-images/medium-duty/heavy-haulers-towing-refuse-truck-flatbed-transport-medium-duty.webp",
    alt: "H&H Towing transporting a Recology refuse truck — rear detail view of medium duty towing operation",
    seoTitle: "Refuse & Garbage Truck Transport – H&H Towing Co. Bay Area",
    seoDescription:
      "H&H Towing Co. provides specialist refuse and garbage truck transport and recovery for Bay Area waste management fleets. Call for a commercial rate.",
  },
];

export const landingImagesById: Record<LandingImageId, LandingImageMeta> = landingImages.reduce(
  (acc, image) => {
    acc[image.id] = image;
    return acc;
  },
  {} as Record<LandingImageId, LandingImageMeta>,
);

