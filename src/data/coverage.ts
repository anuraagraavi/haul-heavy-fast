/**
 * Shared coverage data: Bay Area counties and dispatch hubs.
 * Used by Locations page, LP CoverageMap, ServiceAreas, and schema.
 * Dispatch hub list — H&H Towing Co. roster (eight hubs).
 */

import { SCREENSHOT_DISPATCH_BY_SLUG, SCREENSHOT_DISPATCH_HUBS } from "./screenshotDispatchHubs";

const H = SCREENSHOT_DISPATCH_BY_SLUG;

export const BAY_AREA_COUNTY_COUNT = 5;

/** County list: representative dispatch line per county (aligned to closest H&H hub). */
export const BAY_AREA_COUNTIES = [
  { id: "san-francisco", name: "San Francisco County", phone: H["brisbane"]!.phoneDisplay, areas: ["Mission", "SOMA", "Financial District", "Richmond", "Pacific Heights", "Sunset"] },
  { id: "san-mateo", name: "San Mateo County", phone: H["san-mateo"]!.phoneDisplay, areas: ["San Mateo", "Redwood City", "Daly City", "South San Francisco", "Menlo Park"] },
  { id: "alameda", name: "Alameda County", phone: H["hayward"]!.phoneDisplay, areas: ["Oakland", "Hayward", "Berkeley", "Fremont", "San Leandro"] },
  { id: "santa-clara", name: "Santa Clara County", phone: H["san-jose"]!.phoneDisplay, areas: ["San Jose", "Santa Clara", "Sunnyvale", "Mountain View", "Palo Alto"] },
  { id: "contra-costa", name: "Contra Costa County", phone: H["concord"]!.phoneDisplay, areas: ["Walnut Creek", "Concord", "Richmond", "Antioch", "Brentwood", "Pittsburg", "San Ramon"] },
] as const;

const hubHours = { hours: "Mon–Fri 8AM–5PM", emergency: "24/7" } as const;

/** Dispatch hubs — H&H roster. Used by Locations page and LP CoverageMap. */
export const DISPATCH_HUBS = SCREENSHOT_DISPATCH_HUBS.map((h) => ({
  city: h.city,
  address: h.addressLine,
  cityState: "" as const,
  phone: h.phoneDisplay,
  url: h.path,
  ...hubHours,
}));

/** For LP CoverageMap: hub display name and full address string */
export const DISPATCH_HUBS_LP = DISPATCH_HUBS.map((hub, i) => ({
  name: i === 0 ? `${hub.city} Hub` : `${hub.city} Hub`,
  address: hub.cityState ? `${hub.address}, ${hub.cityState}` : hub.address,
  phone: hub.phone,
  url: hub.url,
}));

/** LP county list with cities string (for CoverageMap) */
export const BAY_AREA_COUNTIES_LP = [
  { name: "Santa Clara County", star: true, cities: "San Jose, Sunnyvale, Mountain View, Cupertino, Santa Clara, Milpitas, Gilroy" },
  { name: "Alameda County", cities: "Oakland, Berkeley, Fremont, Hayward, San Leandro, Livermore, Pleasanton, Newark" },
  { name: "San Francisco County", cities: "Financial District, Mission, SOMA, Richmond, Sunset, Bayview, Tenderloin, Marina" },
  { name: "San Mateo County", cities: "Daly City, South SF, San Mateo, Redwood City, Palo Alto, Menlo Park, Burlingame, Millbrae" },
  { name: "Contra Costa County", cities: "Walnut Creek, Concord, Richmond, Antioch, Brentwood, Pittsburg, San Ramon" },
] as const;
