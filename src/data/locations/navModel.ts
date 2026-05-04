import type { LocationData } from "./types";
import { CITY_LOCATIONS, COUNTY_HUB_LOCATIONS, CITIES_BY_COUNTY } from "./index";

export interface LocationNavRegion {
  hub: LocationData;
  cities: LocationData[];
}

export interface LocationNavOrphanGroup {
  countySlug: string;
  displayLabel: string;
  cities: LocationData[];
}

export interface LocationNavModel {
  regions: LocationNavRegion[];
  orphanGroups: LocationNavOrphanGroup[];
}

function sortCitiesByName(cities: LocationData[]): LocationData[] {
  return [...cities].sort((a, b) => a.city.localeCompare(b.city, undefined, { sensitivity: "base" }));
}

/** Single source for header mega-menu and mobile location navigation. */
export function getLocationNavModel(): LocationNavModel {
  const hubSlugs = new Set(COUNTY_HUB_LOCATIONS.map((h) => h.slug));

  const regions: LocationNavRegion[] = COUNTY_HUB_LOCATIONS.map((hub) => ({
    hub,
    cities: sortCitiesByName(CITIES_BY_COUNTY[hub.slug] ?? []),
  }));

  const orphans = CITY_LOCATIONS.filter((c) => !hubSlugs.has(c.countySlug));
  const byCountySlug = new Map<string, LocationData[]>();
  for (const city of orphans) {
    const list = byCountySlug.get(city.countySlug) ?? [];
    list.push(city);
    byCountySlug.set(city.countySlug, list);
  }

  const orphanGroups: LocationNavOrphanGroup[] = [...byCountySlug.entries()]
    .map(([countySlug, cities]) => ({
      countySlug,
      displayLabel: cities[0]?.county ?? countySlug,
      cities: sortCitiesByName(cities),
    }))
    .sort((a, b) => a.displayLabel.localeCompare(b.displayLabel, undefined, { sensitivity: "base" }));

  return { regions, orphanGroups };
}

/** Module-level snapshot; location data is static at build time. */
export const LOCATION_NAV_MODEL: LocationNavModel = getLocationNavModel();
