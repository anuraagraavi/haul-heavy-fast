# SEO Growth Plan: Commercial Keywords, City Pages and Content

## Goal
Win more calls from fleet dispatchers, truck drivers and commercial buyers by targeting the keyword gaps found in the Semrush review (semi truck towing, heavy duty towing near me, box truck, bus, RV, big rig, commercial towing, winch out and recovery), while following Google EEAT and the writing rules: no hyphens or dashes in copy, human professional voice, only verifiable facts.

## Writing rules for every page
- No hyphens or dashes anywhere in visible copy, titles or descriptions ("24 hour", "heavy duty", "on site").
- Write like an experienced dispatcher explaining the job: specific roads, equipment, hubs and steps. No filler such as "look no further", "in today's world", "seamless", "unparalleled".
- EEAT: show experience (real job photos already on the site, eight named dispatch hubs with addresses and phone numbers), expertise (equipment, process, permits), trust (clear pricing approach, licensing only if you confirm it). Never invent reviews, years in business, fleet counts or certifications.

## Phase 1: New commercial service pages
Six new pages, each about 900 to 1,200 words, built on the existing service page layout:
1. /semi-truck-towing (targets semi truck towing, semi truck towing near me, big rig towing, 18 wheeler towing)
2. /box-truck-towing (box truck towing, delivery truck towing)
3. /bus-towing (bus towing, coach and shuttle recovery)
4. /rv-towing (rv towing near me, motorhome towing)
5. /commercial-towing (commercial towing, fleet towing accounts)
6. /winch-out-recovery (off road recovery, winch out service)

Each page: one H1 with the main keyword, sections for what we tow, how a call works, equipment used, hubs that cover it (linked to city pages), corridors (I-880, I-80, US 101, I-580, Port of Oakland), real job photos with descriptive alt text, a short FAQ written from real customer questions, call and quote buttons, unique title and description, Service and BreadcrumbList schema, sitemap and llms.txt entries.

## Phase 2: City page upgrades
Add a "Commercial and heavy duty towing in [City]" section to the shared city template, fed by new per city fields: local freight roads, typical commercial calls, nearest hub with real address and phone. Rewrite the eight hub cities first (Concord, Redwood City, Stockton, Brisbane/San Francisco, San Jose, Oakland, San Mateo and the remaining hub), then the other 22 cities with lighter but unique copy. Titles become "Heavy Duty and Semi Truck Towing in [City] | Heavy Tow Pro" style, under 60 characters.

## Phase 3: Internal linking
- Header mega menu and footer: add a "Commercial" group linking the six new pages.
- Homepage, heavy duty page and city pages: descriptive anchors ("semi truck towing in San Jose") instead of "learn more".
- Existing semi, box truck and RV blog posts link to the matching new service page.

## Phase 4: Content direction
- Stop new impound and parking ticket posts. Keep existing ones but add a clear link to the commercial pages.
- Write three new fleet focused articles: jackknifed semi on I-880 response steps, California oversize permit basics for equipment moves, box truck breakdown checklist for Bay Area fleets.

## Phase 5: Quality checks
- Scan all new and changed copy for hyphens and dashes and AI filler phrases.
- Check each page has one H1, unique title under 60 characters and description under 160.
- Validate schema JSON, check sitemap, typecheck, and view each new page at desktop and phone size.
- Confirm Google Ads landing pages and conversion tracking are untouched.

## Off site tasks for you (cannot be done in the app)
- Verify a Google Business Profile for each of the eight hubs with matching name, address and phone, linked to its city page.
- Claim listings on TruckDown, FleetNet, NTTS Breakdown Directory and local chambers.
- Send real facts so pages can show them: years operating, license or CA numbers, fleet size, any certifications, and real customer reviews you have permission to use.

## Technical details
- New pages in src/pages/services/, lazy routes in src/App.tsx, content in src/data/commercialServices.ts so one template renders all six.
- City fields added to src/data/locations/types.ts and cities data; section rendered in CityTemplateBelowFold.tsx.
- Nav updates in src/data/locations/navModel.ts / Header.tsx and Footer.tsx; public/sitemap.xml and public/llms.txt updated.
- Per page head handled by the existing SEO approach already used on service pages.
