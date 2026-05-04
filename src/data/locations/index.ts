import { applyNonHubDispatchRouting, applyScreenshotHubIfNeeded } from "./_shared";
import { contraCostaCityLocations } from "./cities/contraCostaCities";
import { eastBayCityLocations } from "./cities/eastBay";
import { peninsulaCityLocations } from "./cities/peninsula";
import { southBayCityLocations } from "./cities/southBay";
import { stocktonLocation } from "./cities/stocktonCity";
import { countyHubLocations } from "./counties";
import type { LocationData } from "./types";

export type {
  AggregateRating,
  ConfidencePoint,
  CorridorCoverageItem,
  LocalKnowledgeIconName,
  LocalKnowledgeItem,
  LocationData,
  LocationKind,
  LocationSignatureColor,
  LocationStat,
  LocationTestimonial,
  RelatedCityLink,
  ServiceHighlight,
} from "./types";

const rawCityLocations: LocationData[] = [
  ...peninsulaCityLocations,
  ...eastBayCityLocations,
  ...southBayCityLocations,
  ...contraCostaCityLocations,
  stocktonLocation,
];

function finalizeCityLocation(data: LocationData): LocationData {
  return applyNonHubDispatchRouting(applyScreenshotHubIfNeeded(data));
}

export const LOCATIONS: LocationData[] = [...countyHubLocations, ...rawCityLocations.map(finalizeCityLocation)];

export const LOCATIONS_BY_SLUG: Record<string, LocationData> = Object.fromEntries(LOCATIONS.map((location) => [location.slug, location]));

export const LOCATION_URLS = LOCATIONS.map((location) => location.url);

export const CITY_LOCATIONS = LOCATIONS.filter((location) => location.kind === "city");
export const COUNTY_HUB_LOCATIONS = LOCATIONS.filter((location) => location.kind === "county-hub");

export const CITIES_BY_COUNTY: Record<string, LocationData[]> = COUNTY_HUB_LOCATIONS.reduce(
  (acc, county) => {
    acc[county.slug] = CITY_LOCATIONS.filter((city) => city.countySlug === county.slug);
    return acc;
  },
  {} as Record<string, LocationData[]>,
);

const primaryKeywordSet = new Set<string>();
for (const location of LOCATIONS) {
  if (primaryKeywordSet.has(location.primaryKeyword)) {
    throw new Error(`Duplicate primary keyword detected: ${location.primaryKeyword}`);
  }
  primaryKeywordSet.add(location.primaryKeyword);
}
