export const SITE_URL = "https://heavytowpro.com";

export function absoluteUrl(pathname: string): string {
  if (!pathname) return SITE_URL;
  if (pathname.startsWith("http://") || pathname.startsWith("https://")) return pathname;
  if (!pathname.startsWith("/")) return `${SITE_URL}/${pathname}`;
  return `${SITE_URL}${pathname}`;
}

