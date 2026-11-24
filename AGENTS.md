# Project architecture rules

- Gate temporary whole-site suspension at the top of `App` with one boolean so all original routes and features remain untouched and instantly restorable.- The site-wide job photo gallery mounts once in `AppShell` (`GlobalJobGallery`); page exclusions live in `isGalleryExcluded` in `src/data/galleryImages.ts`. Why: one place to control where it shows.
- Job photos are pre-optimized WebP in `src/assets/gallery/` (600px grid, 1600px viewer) generated from `public/lovable-uploads/` originals. Why: fast pages without build-time image transforms.

- Job gallery uses a uniform 4:3 crop grid (featured 2x2 first tile on "All"), not masonry. Why: mixed photo shapes left ragged dark gaps.
- Homepage renders the gallery inline above WhyChooseUs (`<GlobalJobGallery inline />`); AppShell copy skips "/". Why: client wanted it higher on home.
- Commercial service pages (/semi-truck-towing etc.) render from `src/data/commercialServices.ts` through one `CommercialServicePage`; fleet articles from `src/data/fleetArticles.ts`. Why: copy lives in one place and pages stay consistent.
- Visible copy avoids hyphens and dashes and only states facts the business confirmed. Why: client writing standard and EEAT.
- Commercial service display order is set by `COMMERCIAL_SERVICE_ORDER` in `src/data/commercialServices.ts`; menus and footer follow it; extra page depth lives in `src/data/commercialServiceExtras.ts`. Why: one place to change order and content.
