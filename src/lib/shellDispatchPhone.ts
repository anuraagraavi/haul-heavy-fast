import { LOCATIONS_BY_SLUG } from "@/data/locations";
import {
  PRIMARY_DISPATCH_PHONE_DISPLAY,
  PRIMARY_DISPATCH_TEL_HREF,
  SITE_WIDE_FALLBACK_PHONE_DISPLAY,
  SHELL_BRANDING,
} from "@/data/screenshotDispatchHubs";
import { telHrefFromNational } from "@/lib/phone";

export type ShellDispatchResolved = {
  phoneDisplay: string;
  phoneHref: string;
  addressLine: string;
};

/**
 * Header/footer mega menu: show a location’s dispatch line on `/towing-*` and `/locations/*`
 * when we have data; otherwise the site-wide fallback and generic address line.
 */
export function resolveShellDispatchFromPathname(pathname: string): ShellDispatchResolved {
  const normalized = pathname.replace(/\/$/, "") || "/";
  const towing = normalized.match(/^\/towing-([^/]+)$/);
  const locations = normalized.match(/^\/locations\/([^/]+)$/);
  const slug = towing?.[1] ?? locations?.[1];
  if (slug) {
    const data = LOCATIONS_BY_SLUG[slug];
    if (data) {
      const display = data.phone;
      const href = telHrefFromNational(display);
      const isFallback = display === SITE_WIDE_FALLBACK_PHONE_DISPLAY;
      return {
        phoneDisplay: display,
        phoneHref: href,
        addressLine: isFallback ? SHELL_BRANDING.fallbackAddressLine : data.nearestHub.address,
      };
    }
  }
  return {
    phoneDisplay: PRIMARY_DISPATCH_PHONE_DISPLAY,
    phoneHref: PRIMARY_DISPATCH_TEL_HREF,
    addressLine: SHELL_BRANDING.fallbackAddressLine,
  };
}
