/**
 * H&H Towing Co. dispatch hubs — single source of truth for hub addresses, phones, and paths.
 * Generic Bay Area marketing CTA (Ads, header fallback, /contact hero) is SITE_WIDE_FALLBACK_PHONE_DISPLAY.
 */

import { telHrefFromNational } from "../lib/phone";

export interface ScreenshotDispatchHub {
  slug: string;
  city: string;
  /** Full single-line address for display and schema */
  addressLine: string;
  /** Display string for UI (parentheses format) */
  phoneDisplay: string;
  /** Primary page path for this hub (Brisbane HQ uses /contact) */
  path: string;
}

/** Generic CTA when not on a specific location URL — matches Ads / marketing line. */
export const SITE_WIDE_FALLBACK_PHONE_DISPLAY = "(650) 881-2400";

export const PRIMARY_DISPATCH_PHONE_DISPLAY = SITE_WIDE_FALLBACK_PHONE_DISPLAY;
export const PRIMARY_DISPATCH_TEL_HREF = telHrefFromNational(SITE_WIDE_FALLBACK_PHONE_DISPLAY);
/** E.164 without separators, for JSON-LD `telephone` on generic pages */
export const PRIMARY_DISPATCH_E164 = `+1${SITE_WIDE_FALLBACK_PHONE_DISPLAY.replace(/\D/g, "").slice(-10)}`;

export const SHELL_BRANDING = {
  fallbackAddressLine: "Bay Area dispatch — 24/7",
} as const;

/** H&H registered HQ — JSON-LD / legal address (generic marketing CTA remains PRIMARY_*). */
export const REGISTERED_HQ = {
  streetAddress: "351 Industrial Way",
  addressLocality: "Brisbane",
  addressRegion: "CA",
  postalCode: "94005",
  addressCountry: "US",
  latitude: "37.6879",
  longitude: "-122.3999",
} as const;

export const SCREENSHOT_DISPATCH_HUBS = [
  {
    slug: "brisbane",
    city: "Brisbane (HQ)",
    addressLine: "351 Industrial Way, Brisbane, CA 94005",
    phoneDisplay: "(415) 800-3800",
    path: "/contact",
  },
  {
    slug: "concord",
    city: "Concord",
    addressLine: "4075 Folsom Ct, Concord, CA 94520",
    phoneDisplay: "(925) 888-2400",
    path: "/towing-concord",
  },
  {
    slug: "hayward",
    city: "Hayward",
    addressLine: "2454 Whipple Rd, Hayward, CA 94544",
    phoneDisplay: "(510) 800-3800",
    path: "/towing-hayward",
  },
  {
    slug: "redwood-city",
    city: "Redwood City",
    addressLine: "1320 Marshall St, Redwood City, CA 94063",
    phoneDisplay: "(650) 881-2400",
    path: "/towing-redwood-city",
  },
  {
    slug: "san-jose",
    city: "San Jose",
    addressLine: "50 N Sunset Ave, San Jose, CA 95116",
    phoneDisplay: "(408) 800-3800",
    path: "/towing-san-jose",
  },
  {
    slug: "san-leandro",
    city: "San Leandro",
    addressLine: "14305 Washington Avenue, San Leandro, CA 94578",
    phoneDisplay: "(510) 800-3800",
    path: "/towing-san-leandro",
  },
  {
    slug: "san-mateo",
    city: "San Mateo",
    addressLine: "403 1st Ave, San Mateo, CA 94401",
    phoneDisplay: "(650) 881-2400",
    path: "/towing-san-mateo",
  },
  {
    slug: "stockton",
    city: "Stockton",
    addressLine: "3990 N Wilson Way, Stockton, CA 95205",
    phoneDisplay: "(916) 701-2200",
    path: "/towing-stockton",
  },
] as const satisfies readonly ScreenshotDispatchHub[];

export type ScreenshotHubSlug = (typeof SCREENSHOT_DISPATCH_HUBS)[number]["slug"];

export const DISPATCH_HUB_LINES_MARKETING = `${SCREENSHOT_DISPATCH_HUBS.map((h) => `${h.city} ${h.phoneDisplay}`).join("; ")}. Main Bay Area line: ${SITE_WIDE_FALLBACK_PHONE_DISPLAY}.`;

export const SCREENSHOT_HUB_SLUGS: ScreenshotHubSlug[] = SCREENSHOT_DISPATCH_HUBS.map((h) => h.slug);

export const SCREENSHOT_DISPATCH_BY_SLUG: Record<string, ScreenshotDispatchHub> = Object.fromEntries(
  SCREENSHOT_DISPATCH_HUBS.map((h) => [h.slug, h]),
);

/** Hubs to show on a county hub page (`/locations/*-county`). */
export function getScreenshotHubsForCountyHubPage(countySlug: string): ScreenshotDispatchHub[] {
  const by = SCREENSHOT_DISPATCH_BY_SLUG;
  switch (countySlug) {
    case "alameda-county":
      return [by["hayward"]!, by["san-leandro"]!];
    case "san-mateo-county":
      return [by["brisbane"]!, by["san-mateo"]!, by["redwood-city"]!];
    case "santa-clara-county":
      return [by["san-jose"]!];
    case "contra-costa-county":
      return [by["concord"]!];
    case "san-joaquin-county":
      return [by["stockton"]!];
    default:
      return [];
  }
}
