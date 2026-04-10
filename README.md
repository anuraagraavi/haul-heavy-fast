## Heavy Tow Pro – Leadgen Marketing Site

This repo contains the React/Vite marketing site and lead-generation funnels for **Heavy Tow Pro / Heavy Haulers** in the San Francisco Bay Area and Central Valley.

- Light/medium-duty leadgen landings at:
  - `/towing-services`
  - `/towing/bay-area-flatbed-emergency-towing-24-7`
- Heavy-duty / fleet leadgen landing at:
  - `/towing/heavy-duty-towing-bay-area`
- Supporting pages: services, locations/coverage, contact, quote, privacy, terms, HTML sitemap, and a full blog.

The landing pages are designed for **paid search & fleet leadgen** with:

- Clear above-the-fold phone CTAs (`650-881-2400`) and sticky mobile tap-to-call.
- 60-second quote forms wired to Supabase edge email functions.
- JSON-LD for LocalBusiness, Service, and FAQPage on key pages.
- Vite prerendering for all main pages, landings, and blog articles.

---

## Tech stack

- Vite (React + SWC)
- TypeScript
- React Router
- Tailwind CSS + tailwind-animate
- shadcn/ui + Radix primitives
- @tanstack/react-query
- Supabase (edge function for email lead delivery)

---

## Local development

Requirements:

- Node.js 18+ and npm

Setup:

```sh
git clone https://github.com/anuraagraavi/haul-heavy-fast.git
cd haul-heavy-fast
npm install
npm run dev
```

The app runs on `http://localhost:5173` by default (or whatever Vite prints).

---

## Leadgen & forms

- **Quick quote forms**
  - `src/components/landing/QuickQuoteForm.tsx`
  - Used by:
    - `src/pages/LandingLightMedium.tsx` (campaign C1 – light/medium)
    - `src/pages/LandingHeavyDuty.tsx` (campaign C2 – heavy/fleet)
  - Submits to `submitQuoteForm` in `src/lib/formSubmission.ts`, which invokes the Supabase `send-email` edge function and sends to:
    - `anuraagraavi@gmail.com`
    - `heavyhaulers.ca@gmail.com`
    - `dispatch@heavytowpro.com`
  - On success, redirects to `/thank-you?type=quick-quote-c1` or `/thank-you?type=quick-quote-c2`.

- **Contact form**
  - `src/pages/Contact.tsx` uses `submitContactForm` from `src/lib/formSubmission.ts`.
  - On success, redirects to `/thank-you?type=contact`.

- **Thank-you page**
  - `src/pages/ThankYou.tsx` reads `type` from the query string and renders tailored copy for:
    - `contact`
    - `quote` / `quick-quote` / `quick-quote-c1` / `quick-quote-c2`
    - `newsletter`

Analytics hooks (`window.gtag`) are guarded so they fail safe when GA is not present.

---

## SEO & indexability checklist

Use this quick checklist whenever you add or significantly change a page:

- **1. Route & sitemap**
  - Add or update the route in `src/App.tsx`.
  - Add the full URL to `public/sitemap.xml` (keep structure and priorities consistent).

- **2. Page-level SEO**
  - Ensure the page component under `src/pages` uses `Helmet` with:
    - Descriptive `<title>`
    - Clear `<meta name="description">`
    - Correct `<link rel="canonical">` that matches the sitemap URL/path.
  - For important pages, optionally add Open Graph / Twitter meta tags and JSON-LD schema.

- **3. Build & prerender**
  - Run `npm run build` to generate the production build.
  - Confirm `public/robots.txt` and `public/sitemap.xml` are present in the built output (under `dist`).
  - For high-priority routes (including the Google Ads landing pages and blog articles), ensure they are listed in the `vite-plugin-prerender-esm-fix` `routes` array in `vite.config.ts` so static HTML is generated.

- **4. Post-deploy verification**
  - In Google Search Console, use URL Inspection for:
    - The homepage (`/`)
    - The new/updated page
    - A representative blog or landing page
  - Confirm:
    - The URL is indexable (not blocked by robots or `noindex`).
    - The rendered HTML contains the expected content and meta tags.
    - The updated sitemap has been submitted and processed.

---

## Production & ads status

This site is currently **ready for paid ads traffic** to:

- Light/medium landing: `https://heavytowpro.com/towing-services`
- Emergency flatbed landing: `https://heavytowpro.com/towing/bay-area-flatbed-emergency-towing-24-7`
- Heavy/fleet landing: `https://heavytowpro.com/towing/heavy-duty-towing-bay-area`

The hero imagery, tracking guards, routing, leadgen forms, and prerendering have been verified in a production build.

---

## Latest changes (Apr 2026)

- Added a new batch of March 2026 blog articles under `src/pages/blog`.
- Added the March blog post data source in `src/data/march2026BlogPosts.ts` and wired it into the blog registry.
- Updated routing in `src/App.tsx` so the new article pages are reachable.
- Updated `public/sitemap.xml` with the new blog URLs for crawl/index coverage.
- Updated blog CTA blocks and article rendering support in `src/components/blog/BlogCTABlocks.tsx` and `src/components/blog/MarchBlogPostPage.tsx`.
