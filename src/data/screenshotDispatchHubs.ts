/**
 * Canonical dispatch hub facts from the Bay Area Coverage screenshot.
 * Single source of truth for the eight hub cities — phone + address + city page URL.
 */

import { telHrefFromNational } from "../lib/phone";

export interface ScreenshotDispatchHub {
  slug: string;
  city: string;
  /** Full single-line address for display and schema */
  addressLine: string;
  /** Exact display string from screenshot (parentheses format) */
  phoneDisplay: string;
  /** Dedicated towing page path */
  path: string;
}

/** Site-wide default when no mapped hub line applies (Contra Costa, Central Valley, generic pages). */
export const SITE_WIDE_FALLBACK_PHONE_DISPLAY = "(650) 881-2400";

export const PRIMARY_DISPATCH_PHONE_DISPLAY = SITE_WIDE_FALLBACK_PHONE_DISPLAY;
export const PRIMARY_DISPATCH_TEL_HREF = telHrefFromNational(SITE_WIDE_FALLBACK_PHONE_DISPLAY);
/** E.164 without separators, for JSON-LD `telephone` */
export const PRIMARY_DISPATCH_E164 = `+1${SITE_WIDE_FALLBACK_PHONE_DISPLAY.replace(/\D/g, "").slice(-10)}`;

/** Header/footer when showing fallback phone — no street address. */
export const SHELL_BRANDING = {
  fallbackAddressLine: "Bay Area dispatch — 24/7",
} as const;

export const SCREENSHOT_DISPATCH_HUBS = [
  {
    slug: "oakland",
    city: "Oakland",
    addressLine: "1234 Broadway, Oakland, CA 94612",
    phoneDisplay: "(510) 900-5554",
    path: "/towing-oakland",
  },
  {
    slug: "redwood-city",
    city: "Redwood City",
    addressLine: "567 Main St, Redwood City, CA 94063",
    phoneDisplay: "(650) 667-0055",
    path: "/towing-redwood-city",
  },
  {
    slug: "san-mateo",
    city: "San Mateo",
    addressLine: "890 El Camino Real, San Mateo, CA 94401",
    phoneDisplay: "(650) 241-3344",
    path: "/towing-san-mateo",
  },
  {
    slug: "san-francisco",
    city: "San Francisco",
    addressLine: "101 Market St, San Francisco, CA 94105",
    phoneDisplay: "(415) 322-3333",
    path: "/towing-san-francisco",
  },
  {
    slug: "hayward",
    city: "Hayward",
    addressLine: "2345 Mission Blvd, Hayward, CA 94541",
    phoneDisplay: "(510) 400-8844",
    path: "/towing-hayward",
  },
  {
    slug: "san-jose",
    city: "San Jose",
    addressLine: "456 Santa Clara St, San Jose, CA 95113",
    phoneDisplay: "(408) 600-0044",
    path: "/towing-san-jose",
  },
  {
    slug: "fremont",
    city: "Fremont",
    addressLine: "6789 Mowry Ave, Fremont, CA 94538",
    phoneDisplay: "(510) 400-8844",
    path: "/towing-fremont",
  },
  {
    slug: "palo-alto",
    city: "Palo Alto",
    addressLine: "321 University Ave, Palo Alto, CA 94301",
    phoneDisplay: "(650) 241-3344",
    path: "/towing-palo-alto",
  },
] as const satisfies readonly ScreenshotDispatchHub[];

export type ScreenshotHubSlug = (typeof SCREENSHOT_DISPATCH_HUBS)[number]["slug"];

/** Blog / LP copy: official hub lines plus main fallback (Contra Costa & Central Valley). */
export const DISPATCH_HUB_LINES_MARKETING = `${SCREENSHOT_DISPATCH_HUBS.map((h) => `${h.city} ${h.phoneDisplay}`).join("; ")}. Main Bay Area line: ${SITE_WIDE_FALLBACK_PHONE_DISPLAY}.`;

export const SCREENSHOT_HUB_SLUGS: ScreenshotHubSlug[] = SCREENSHOT_DISPATCH_HUBS.map((h) => h.slug);

export const SCREENSHOT_DISPATCH_BY_SLUG: Record<string, ScreenshotDispatchHub> = Object.fromEntries(
  SCREENSHOT_DISPATCH_HUBS.map((h) => [h.slug, h]),
);

/** Hubs to show on a county hub page (`/locations/*-county`), in screenshot order within that county. */
export function getScreenshotHubsForCountyHubPage(countySlug: string): ScreenshotDispatchHub[] {
  const by = SCREENSHOT_DISPATCH_BY_SLUG;
  switch (countySlug) {
    case "alameda-county":
      return [by["oakland"]!, by["hayward"]!, by["fremont"]!];
    case "san-mateo-county":
      return [by["redwood-city"]!, by["san-mateo"]!, by["san-francisco"]!];
    case "santa-clara-county":
      return [by["san-jose"]!, by["palo-alto"]!];
    case "contra-costa-county":
      return [];
    default:
      return [];
  }
}
