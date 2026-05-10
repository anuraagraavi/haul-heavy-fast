import { SCREENSHOT_DISPATCH_BY_SLUG } from "../screenshotDispatchHubs";
import type { LocationData } from "./types";

const H = SCREENSHOT_DISPATCH_BY_SLUG;

export const countyHubInfo = {
  "san-mateo-county": {
    city: "San Mateo County",
    phone: H["san-mateo"]!.phoneDisplay,
    hub: { city: H["san-mateo"]!.city, address: H["san-mateo"]!.addressLine, phone: H["san-mateo"]!.phoneDisplay },
  },
  "alameda-county": {
    city: "Alameda County",
    phone: H["hayward"]!.phoneDisplay,
    hub: { city: H["hayward"]!.city, address: H["hayward"]!.addressLine, phone: H["hayward"]!.phoneDisplay },
  },
  "santa-clara-county": {
    city: "Santa Clara County",
    phone: H["san-jose"]!.phoneDisplay,
    hub: { city: H["san-jose"]!.city, address: H["san-jose"]!.addressLine, phone: H["san-jose"]!.phoneDisplay },
  },
  "contra-costa-county": {
    city: "Contra Costa County",
    phone: H["concord"]!.phoneDisplay,
    hub: { city: H["concord"]!.city, address: H["concord"]!.addressLine, phone: H["concord"]!.phoneDisplay },
  },
  "san-joaquin-county": {
    city: "San Joaquin County",
    phone: H["stockton"]!.phoneDisplay,
    hub: { city: H["stockton"]!.city, address: H["stockton"]!.addressLine, phone: H["stockton"]!.phoneDisplay },
  },
} as const;

export type CountyHubKey = keyof typeof countyHubInfo;

/** City pages inherit county hub phone + nearestHub unless overridden by H&H hub slugs or NON_HUB_ROUTING */
export const cityToCounty: Record<string, CountyHubKey> = {
  "san-francisco": "san-mateo-county",
  "san-mateo": "san-mateo-county",
  "redwood-city": "san-mateo-county",
  "palo-alto": "san-mateo-county",
  sunnyvale: "santa-clara-county",
  "mountain-view": "santa-clara-county",
  "daly-city": "san-mateo-county",
  "santa-clara": "santa-clara-county",
  burlingame: "san-mateo-county",
  "south-san-francisco": "san-mateo-county",
  "menlo-park": "san-mateo-county",
  oakland: "alameda-county",
  hayward: "alameda-county",
  fremont: "alameda-county",
  berkeley: "alameda-county",
  "san-leandro": "alameda-county",
  pleasanton: "alameda-county",
  livermore: "alameda-county",
  "san-jose": "santa-clara-county",
  cupertino: "santa-clara-county",
  milpitas: "santa-clara-county",
  concord: "contra-costa-county",
  "walnut-creek": "contra-costa-county",
  richmond: "contra-costa-county",
  antioch: "contra-costa-county",
  stockton: "san-joaquin-county",
};

export const cityDisplayName: Record<string, string> = {
  "san-francisco": "San Francisco",
  "san-mateo": "San Mateo",
  "redwood-city": "Redwood City",
  "palo-alto": "Palo Alto",
  sunnyvale: "Sunnyvale",
  "mountain-view": "Mountain View",
  "daly-city": "Daly City",
  "santa-clara": "Santa Clara",
  burlingame: "Burlingame",
  "south-san-francisco": "South San Francisco",
  "menlo-park": "Menlo Park",
  oakland: "Oakland",
  hayward: "Hayward",
  fremont: "Fremont",
  berkeley: "Berkeley",
  "san-leandro": "San Leandro",
  pleasanton: "Pleasanton",
  livermore: "Livermore",
  "san-jose": "San Jose",
  cupertino: "Cupertino",
  milpitas: "Milpitas",
  concord: "Concord",
  "walnut-creek": "Walnut Creek",
  richmond: "Richmond",
  antioch: "Antioch",
  stockton: "Stockton",
};

export const GEO: Record<string, { lat: number; lng: number }> = {
  "san-francisco": { lat: 37.7749, lng: -122.4194 },
  "san-mateo": { lat: 37.563, lng: -122.3255 },
  "redwood-city": { lat: 37.4852, lng: -122.2364 },
  "palo-alto": { lat: 37.4419, lng: -122.143 },
  sunnyvale: { lat: 37.3688, lng: -122.0363 },
  "mountain-view": { lat: 37.3861, lng: -122.0839 },
  "daly-city": { lat: 37.6879, lng: -122.4702 },
  "santa-clara": { lat: 37.3541, lng: -121.9552 },
  burlingame: { lat: 37.5779, lng: -122.3481 },
  "south-san-francisco": { lat: 37.6547, lng: -122.4077 },
  "menlo-park": { lat: 37.453, lng: -122.1817 },
  oakland: { lat: 37.8044, lng: -122.2712 },
  hayward: { lat: 37.6688, lng: -122.0808 },
  fremont: { lat: 37.5483, lng: -121.9886 },
  berkeley: { lat: 37.8715, lng: -122.273 },
  "san-leandro": { lat: 37.7249, lng: -122.1561 },
  pleasanton: { lat: 37.6624, lng: -121.8747 },
  livermore: { lat: 37.6819, lng: -121.768 },
  "san-jose": { lat: 37.3382, lng: -121.8863 },
  cupertino: { lat: 37.3229, lng: -122.0322 },
  milpitas: { lat: 37.4323, lng: -121.8996 },
  concord: { lat: 37.978, lng: -122.0311 },
  "walnut-creek": { lat: 37.9101, lng: -122.0652 },
  richmond: { lat: 37.9358, lng: -122.3477 },
  antioch: { lat: 38.0049, lng: -121.8058 },
  stockton: { lat: 37.9577, lng: -121.2908 },
  "san-mateo-county": { lat: 37.563, lng: -122.3255 },
  "alameda-county": { lat: 37.7249, lng: -122.1561 },
  "santa-clara-county": { lat: 37.3382, lng: -121.8863 },
  "contra-costa-county": { lat: 37.978, lng: -122.0311 },
  "san-joaquin-county": { lat: 37.9577, lng: -121.2908 },
};

/** Cities routed to another H&H hub (slug keys must exist in SCREENSHOT_DISPATCH_BY_SLUG). */
const NON_HUB_ROUTING: Partial<Record<string, keyof typeof SCREENSHOT_DISPATCH_BY_SLUG>> = {
  "san-francisco": "brisbane",
  "daly-city": "brisbane",
  "south-san-francisco": "brisbane",
  burlingame: "san-mateo",
  "menlo-park": "redwood-city",
  "palo-alto": "redwood-city",
  "mountain-view": "redwood-city",
  sunnyvale: "san-jose",
  "santa-clara": "san-jose",
  cupertino: "san-jose",
  milpitas: "san-jose",
  oakland: "san-leandro",
  berkeley: "san-leandro",
  fremont: "hayward",
  pleasanton: "hayward",
  livermore: "hayward",
  "walnut-creek": "concord",
  richmond: "concord",
  antioch: "concord",
};

export function applyScreenshotHubIfNeeded(data: LocationData): LocationData {
  const hub = SCREENSHOT_DISPATCH_BY_SLUG[data.slug];
  if (!hub) return data;
  const prevHubCity = data.nearestHub.city;
  const escapeCity = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const neighborhoodIntro = data.neighborhoodIntro.replace(new RegExp(escapeCity(prevHubCity), "g"), hub.city);
  const localIntro = data.localIntro.replace(new RegExp(escapeCity(prevHubCity), "g"), hub.city);

  const patchFirstConfidence = (points: LocationData["confidencePoints"]) =>
    points.map((p, i) =>
      i === 0
        ? {
            title: `Dispatch from ${hub.city}`,
            body: `Direct routing to the ${hub.city} dispatch hub shortens response uncertainty and keeps updates clear.`,
          }
        : p,
    );

  return {
    ...data,
    phone: hub.phoneDisplay,
    nearestHub: { city: hub.city, address: hub.addressLine, phone: hub.phoneDisplay },
    metaDescription: `Professional towing in ${data.city}, CA with 24/7 dispatch, flatbed transport, and light-to-heavy duty service. Call ${hub.phoneDisplay} for fast routing.`,
    heroSubhead: `Live dispatch from ${hub.city} for ${data.city} drivers, businesses, and fleet operators.`,
    neighborhoodIntro,
    localIntro,
    confidencePoints: patchFirstConfidence(data.confidencePoints),
  };
}

export function applyNonHubDispatchRouting(data: LocationData): LocationData {
  const routeTo = NON_HUB_ROUTING[data.slug];
  if (!routeTo) return data;
  const hub = SCREENSHOT_DISPATCH_BY_SLUG[routeTo];
  if (!hub) return data;

  const prevPhone = data.phone;
  const metaDescription = data.metaDescription.includes(prevPhone)
    ? data.metaDescription.replaceAll(prevPhone, hub.phoneDisplay)
    : data.metaDescription;

  return {
    ...data,
    phone: hub.phoneDisplay,
    nearestHub: { city: hub.city, address: hub.addressLine, phone: hub.phoneDisplay },
    metaDescription,
  };
}
