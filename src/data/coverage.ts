/**
 * Shared coverage data: Bay Area counties and dispatch hubs.
 * Used by Locations page, LP CoverageMap, ServiceAreas, and schema.
 * Single source of truth for "5 Bay Area counties" and hub list.
 */

export const BAY_AREA_COUNTY_COUNT = 5;

export const BAY_AREA_COUNTIES = [
  { id: "san-francisco", name: "San Francisco County", phone: "650-881-2400", areas: ["Mission", "SOMA", "Financial District", "Richmond", "Pacific Heights", "Sunset"] },
  { id: "san-mateo", name: "San Mateo County", phone: "650-881-2400", areas: ["San Mateo", "Redwood City", "Daly City", "South San Francisco", "Menlo Park"] },
  { id: "alameda", name: "Alameda County", phone: "510-800-3800", areas: ["Oakland", "Hayward", "Berkeley", "Fremont", "San Leandro"] },
  { id: "santa-clara", name: "Santa Clara County", phone: "408-800-3800", areas: ["San Jose", "Santa Clara", "Sunnyvale", "Mountain View", "Palo Alto"] },
  { id: "contra-costa", name: "Contra Costa County", phone: "650-881-2400", areas: ["Walnut Creek", "Concord", "Richmond", "Antioch", "Brentwood", "Pittsburg", "San Ramon"] },
] as const;

/** Dispatch hubs with full addresses. Used by Locations page and LP CoverageMap. */
export const DISPATCH_HUBS = [
  { city: "Brisbane", address: "351 Industrial Way", cityState: "Brisbane, CA 94005", phone: "650-881-2400", hours: "Mon–Fri 8AM–5PM", emergency: "24/7" },
  { city: "San Leandro", address: "14305 Washington Ave", cityState: "San Leandro, CA 94578", phone: "510-800-3800", hours: "Mon–Fri 8AM–5PM", emergency: "24/7" },
  { city: "Hayward", address: "2454 Whipple Rd", cityState: "Hayward, CA 94544", phone: "510-800-3800", hours: "Mon–Fri 8AM–5PM", emergency: "24/7" },
  { city: "San Jose", address: "50 N Sunset Ave", cityState: "San Jose, CA 95116", phone: "408-800-3800", hours: "Mon–Fri 8AM–5PM", emergency: "24/7" },
  { city: "San Mateo", address: "403 1st Avenue", cityState: "San Mateo, CA 94401", phone: "650-881-2400", hours: "Mon–Fri 8AM–5PM", emergency: "24/7" },
  { city: "Stockton", address: "3990 N Wilson Way", cityState: "Stockton, CA 95205", phone: "916-701-2200", hours: "Mon–Fri 8AM–5PM", emergency: "24/7" },
] as const;

/** For LP CoverageMap: hub display name and full address string */
export const DISPATCH_HUBS_LP = DISPATCH_HUBS.map((hub, i) => ({
  name: i === 0 ? `${hub.city} (HQ)` : `${hub.city} Hub`,
  address: `${hub.address}, ${hub.cityState}`,
  phone: hub.phone,
}));

/** LP county list with cities string (for CoverageMap) */
export const BAY_AREA_COUNTIES_LP = [
  { name: "Santa Clara County", star: true, cities: "San Jose, Sunnyvale, Mountain View, Cupertino, Santa Clara, Milpitas, Gilroy" },
  { name: "Alameda County", cities: "Oakland, Berkeley, Fremont, Hayward, San Leandro, Livermore, Pleasanton, Newark" },
  { name: "San Francisco County", cities: "Financial District, Mission, SOMA, Richmond, Sunset, Bayview, Tenderloin, Marina" },
  { name: "San Mateo County", cities: "Daly City, South SF, San Mateo, Redwood City, Palo Alto, Menlo Park, Burlingame, Millbrae" },
  { name: "Contra Costa County", cities: "Walnut Creek, Concord, Richmond, Antioch, Brentwood, Pittsburg, San Ramon" },
] as const;
