# Commercial service pages: ordering, SEO and conversion upgrade

Applies to the six pages: Semi Truck, Winch Out and Recovery, Box Truck, Commercial Fleet, Bus, RV.

## 1. Reorder everywhere
New order: Semi Truck, Winch Out and Recovery, Box Truck, Commercial Fleet, Bus, RV.
Applied to the service list data (drives "related services" on each page), the desktop menu, the mobile menu, the footer and the city page commercial section.

## 2. Search upgrades
- Add FAQ rich result data built from each page's existing visible questions, so answers can show directly in Google.
- Grow each page from roughly 500 to roughly 850 words with two new sections:
  - "What we look at before we hook up": weight, axle setup, load, damage and site access, written the way a dispatcher explains it.
  - "Where we run these calls most": named Bay Area cities with links to their city pages (Oakland, San Jose, Hayward, Richmond, Stockton and others relevant to each service).
- Add one or two more FAQs per page, written from real caller questions (cost factors, whether the driver can ride along, what happens with the load).

## 3. Conversion upgrades
- Mobile call bar fixed at the bottom on these six pages, appearing after the visitor scrolls past the top section, with Google Ads call tracking like the existing ad pages.
- Trust strip under the top buttons using only confirmed facts: 24/7 dispatch, number of dispatch hubs (from the location list), real job photos, phone number. Claims like arrival times, PO billing or licensing wording stay out until the client confirms them.
- "Send us photos" prompt on Semi Truck and Winch Out pages linking to the quote form with photo upload.

## 4. Writing standard
- No hyphens or dashes in visible copy, no stock AI phrases (for example "seamless", "look no further", "rest assured", "in today's fast paced world", "we've got you covered", "navigate").
- Short concrete sentences, trade vocabulary, specific situations instead of adjectives, varied sentence length, no made up numbers, prices or response times.
- Final scan of all six pages for dashes and a banned phrase list.

## 5. Checks
- Typecheck and build log clean.
- Open all six pages on desktop and phone: one main title each, call bar appears on phone after scrolling, trust strip fits, menus show the new order.
- Confirm FAQ data matches the visible questions.

## Technical details
- `src/data/commercialServices.ts`: reorder array; add `sections` for the two new blocks, `cities` (slug list) and extra `faqs`.
- `src/pages/services/CommercialServicePage.tsx`: add `FAQPage` to the JSON-LD array, render new sections, trust strip, photo prompt; mount `StickyMobileCTA` (reuse existing component, pass a `gtagCampaign` value for commercial pages).
- `Header.tsx`, `Footer.tsx`, `CityTemplateBelowFold.tsx`: reorder links (prefer mapping from the data array).
- AGENTS.md: note that service order is defined by the data array.
