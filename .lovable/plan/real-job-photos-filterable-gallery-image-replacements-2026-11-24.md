# Real job photos: filterable gallery + image replacements

## Quality check of what was said earlier (corrections)
- The upload folder holds 23 job photos plus 1 older image already used for sharing previews; that one stays out of the gallery.
- Several earlier replacement picks were wrong. They were described as wide shots, but they are actually tall phone photos (22 (2), 24, 24 (1), 24 (2), 25, 23 (1), 26 (2)). Some file names were also mixed up. None of the tall photos will go into wide slots, so no layout changes and no awkward crops.
- None of the photos is stored sideways, so the earlier "rotation fix" isn't needed.
- 21 (2) and 25 (2) are the same Hyundai excavator haul. Only one goes in the gallery.
- The heavy-duty ad landing page's "Real Heavy Jobs" grid already uses its own photo set. It stays as it is, so nothing that affects ad conversions changes.
- Calling the current images "AI-generated" was a guess and isn't confirmed. The plan only treats them as images we are replacing.

## Corrected 1:1 replacements (wide photos only, same boxes, same styling)
| Page slot | New photo | What it shows |
|---|---|---|
| Heavy Duty, Equipment Transport | 23 (2) | CAT excavator on lowboy, Peterbilt |
| Heavy Duty, Fleet Recovery | 26 | H&H heavy wrecker towing a container semi |
| Heavy Duty, Specialized Hauling | 20 | Rotator rigging a Link-Belt crane |
| Corporate Fleet banner | 21 (3) | Peterbilt hauling a fleet of generators |
| Medium Duty, commercial/municipal card | 20 (2) | H&H wrecker towing an SFPD patrol car |
| Medium Duty, process banner | 23 | Specialty equipment on a lowboy |
| Light Duty, Flatbed slot | 20 (1) | H&H rollback flatbed, phone number on the door |

Light-duty luxury/EV, motorcycle, RV and private-property slots keep their current images because no wide photo fits them. The tall EV photo goes in the gallery only.

## Filterable gallery (Option A)
- Filter chips: All, Heavy Haul, Recovery & Rotator, Municipal, Flatbed, plus a count on each chip.
- Masonry layout that keeps each photo's real shape (tall and wide mixed), dark cards, orange active chip, a short caption that sits over each photo on hover or tap.
- Clicking a photo opens a full-screen viewer with arrows, swipe, Esc to close and the caption. A "Call 650-881-2400" button sits in the viewer.
- Shows on all pages except blog pages, Get a Quote and Contact. On long pages it shows 8 photos plus a "View all" button.

## Optimization
- Each photo gets two optimized versions: a small one (~600px wide) for the grid and a large one (~1600px) for the viewer. They're compressed to keep pages fast, and their true width and height are saved so the page doesn't jump while loading.
- The grid photos load only as you scroll to them. Original uploads are kept, untouched.

## Technical details
- Convert to WebP with Pillow into `src/assets/gallery/` (`*-600.webp`, `*-1600.webp`). Import them as ES modules (no imagetools query params, per memory). Data lives in `src/data/galleryImages.ts` (id, category, caption, alt, w/h).
- `src/components/gallery/JobGallery.tsx` uses CSS columns for masonry and the existing shadcn Dialog for the viewer. The gallery is lazy-loaded with React.lazy and an IntersectionObserver so it stays out of the first-load bundle.
- Mount it once in the shared layout/App route wrapper, with an exclusion check on pathname (`/blog*`, `/get-quote` or the actual quote path, `/contact`). This needs confirming against the router during build.
- Replacements change only the import lines in HeavyDuty.tsx, CorporateFleet.tsx, MediumDuty.tsx and LightDuty.tsx, plus the alt text. classNames don't change.
- Check in the browser: desktop and mobile on a few pages, confirm the gallery is missing on the excluded pages, open the viewer, and check the build log.

## Optional ideas
- Add ImageGallery schema markup for SEO.
