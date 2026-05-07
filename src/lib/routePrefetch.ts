/**
 * Warm Vite route chunks (same dynamic import paths as `App.tsx` lazy routes).
 */
export function prefetchServices(): void {
  void import("@/pages/Services");
}

export function prefetchLocations(): void {
  void import("@/pages/Locations");
}

export function prefetchGetQuote(): void {
  void import("@/pages/GetQuote");
}

export function prefetchBlog(): void {
  void import("@/pages/Blog");
}
