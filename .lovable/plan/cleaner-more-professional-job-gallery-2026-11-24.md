# Cleaner, more professional job gallery

## Why it looks messy now
The gallery uses free-flowing columns where each photo keeps its own shape. Tall phone photos sit beside short landscape ones, so columns end at different heights and leave big dark gaps, especially at the bottom.

## New layout: uniform, organized grid
- Every tile gets the same shape (landscape 4:3), photos are cropped neatly to fill the tile, centered on the subject. No gaps, every row lines up.
- Desktop: one large "featured" tile (2x2) at the start, then even rows of 4. Tablet: 3 across. Phone: 2 across.
- Rows always end flush: the first view shows a set number of photos that fills complete rows (e.g. 1 featured + 8 = 3 full rows on desktop), and "Show more photos" adds full rows.
- Consistent rounded corners, thin border, soft hover zoom, and a small category label on each tile (Heavy Haul, Recovery, etc.) for an organized look.
- Captions stay at the bottom of each tile on a subtle gradient.
- The full-screen viewer stays the same and still shows the whole, uncropped photo.

## Per-photo framing
Some tall photos would lose the top or bottom when cropped. Each photo gets a focus point (top, center, bottom) so the truck or equipment stays in frame. I'll check every tile visually after the change.

## What stays the same
Filters, photo set, pages where the gallery shows or hides, the viewer, and the Call button.

## Technical details
- `src/components/gallery/JobGallery.tsx`: replace `columns-*` masonry with CSS grid (`grid-cols-2 md:grid-cols-3 lg:grid-cols-4`), tiles `aspect-[4/3]` with `object-cover`; first tile `lg:col-span-2 lg:row-span-2`; page size chosen so rows are full per breakpoint.
- `src/data/galleryImages.ts`: add optional `focus` (object-position) per image.
- Verify with Playwright screenshots at desktop and mobile.
