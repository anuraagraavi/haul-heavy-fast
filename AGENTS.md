# Project architecture rules

- Gate temporary whole-site suspension at the top of `App` with one boolean so all original routes and features remain untouched and instantly restorable.- The site-wide job photo gallery mounts once in `AppShell` (`GlobalJobGallery`); page exclusions live in `isGalleryExcluded` in `src/data/galleryImages.ts`. Why: one place to control where it shows.
- Job photos are pre-optimized WebP in `src/assets/gallery/` (600px grid, 1600px viewer) generated from `public/lovable-uploads/` originals. Why: fast pages without build-time image transforms.

- Job gallery uses a uniform 4:3 crop grid (featured 2x2 first tile on "All"), not masonry. Why: mixed photo shapes left ragged dark gaps.
- Homepage renders the gallery inline above WhyChooseUs (`<GlobalJobGallery inline />`); AppShell copy skips "/". Why: client wanted it higher on home.
