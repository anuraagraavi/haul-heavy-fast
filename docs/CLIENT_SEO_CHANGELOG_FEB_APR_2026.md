# Heavy Tow Pro — client-facing SEO and product changelog (Feb–Apr 2026 program)

**Production domain:** [https://heavytowpro.com](https://heavytowpro.com)  
**Document purpose:** Summarize **what categories of work** were delivered—keyword and topic coverage, on-page SEO, technical SEO, performance, content, local footprint, CRO, measurement, and backend reliability—for the **February through April 2026** program window. This version is **ordered by work type**, not by calendar day.  
**Last updated:** May 4, 2026

---

## Executive summary

- **Thirty** new long-form blog URLs under `/blog/{slug}`, each targeting defined search intents (emergency, commercial, compliance, specialized vehicles, Bay Area corridors, seasonal risk, and fleet topics).
- **Campaign landings** for light/medium and heavy-duty positioning, plus core service routes—documented under [Campaign landings and CRO](#campaign-landings-and-cro).
- **Local footprint:** `/locations` index, four county hub URLs, and **twenty-six** city-style towing URLs—documented under [Information architecture and local SEO](#information-architecture-and-local-seo).
- **Technical SEO:** XML sitemap, legacy **301** redirects, JSON-LD (site and blog), optional static prerender when enabled—plus a documented **prerender route gap** for the new blog slugs.
- **Front-end performance:** Route-level code splitting, image tooling, vendor chunking, CLS-oriented fixes, lazy media patterns where used.
- **On-page SEO:** Centralized blog meta, canonical, Open Graph, Twitter, Article and BreadcrumbList schema, FAQ schema when content includes FAQs; landing SEO alignment pass.
- **Internal linking:** Category-aware related posts on each article.
- **Measurement:** Google Tag / GA and conversion labeling for attribution and landing optimization.
- **Backend / reliability:** Contact and quote flows supported by a hardened Supabase Edge Function (email, rate limits, attachment rules); email provider integration fixes where applicable; build-time prerender tradeoffs for stable deploys.

---

## Expected impact rubric (no ranking promises)

| Workstream | Typical expected effect | What we do not claim |
|------------|-------------------------|----------------------|
| **New blog URLs** | More indexed long-tail entry points; topical clustering; internal paths to quote, contact, services, and locations | Guaranteed page-one rankings or fixed traffic levels |
| **Local / county / city pages** | Stronger local relevance; clearer region-to-conversion paths | Dominance in every local pack query |
| **Sitemap + `lastmod`** | Discovery and recrawl hints | Immediate indexation of every URL |
| **301 redirects** | Consolidated signals from legacy URL shapes | Automatic transfer of all historical metrics |
| **Structured data** | Rich result **eligibility** where Google chooses to show enhancements | Rich results on every query |
| **Performance (bundle, images, CLS)** | Better LCP/CLS/INP potential; lower mobile bounce risk | A specific Lighthouse score without measurement |
| **GA / GTM / conversion labels** | Attribution and optimization for **paid** and **direct** funnels | Higher organic rankings by themselves |
| **Blog CTA contrast / readability** | Clearer next step; better accessibility | Measured conversion lift without A/B data |

---

## How this document was produced (brief)

| Source | Role |
|--------|------|
| **Repository structure** | Routes, components, sitemap, redirects, build config |
| **[`src/data/blogRegistry.ts`](../src/data/blogRegistry.ts)** | Titles, slugs, categories for the 30 new articles |
| **[`public/sitemap.xml`](../public/sitemap.xml)** | Declared URL set and crawl hints |
| **Git (optional)** | Detailed commit history available on request for audit |

**Repository milestone (May 4, 2026):** The large batch that had been present only as local modifications (location hub and city pages under `src/pages/locations/`, shared `src/data/locations/`, April blog pages and `april2026BlogPosts`, cohort blog rendering, `public/_redirects`, sitemap and route updates, SEO/schema helpers, and aligned component and dependency changes) is **committed on `main` and pushed to `origin/main`**. For strict production parity, still compare your host’s deployed SHA to `git rev-parse HEAD` on the branch you release from.

**On-site “publish” fields** in the blog registry are primarily for **freshness and reader context**; they are not used in this document as a day-by-day delivery schedule.

---

## Keyword and topic strategy (research embodied in implementation)

There is no separate keyword spreadsheet embedded in this repo snapshot; **strategy is visible in what shipped**:

- **Intent clusters:** Emergency and highway recovery, commercial and fleet (semi, DOT, tire, dealer transport, shuttles, construction), compliance and rights (insurance, impound, predatory towing, HOA), specialized equipment (EV/12V, classic/exotic, lowered, trailers, food trucks), and **local geography** (Bay Area, named freeways, bridges, subregions such as North Bay / Peninsula).
- **Query shaping in URLs:** Keyword-rich, human-readable **slugs** (`/blog/{slug}`) aligned with titles and categories in [`blogRegistry.ts`](../src/data/blogRegistry.ts).
- **Geographic modifiers:** California and Bay Area language on compliance and corridor posts; city and county **landing URLs** under [Information architecture and local SEO](#information-architecture-and-local-seo) for local discovery.
- **Implementation layer:** Primary and secondary keywords feed HTML meta tags and JSON-LD on blog posts via [`src/components/blog/BlogSchemas.tsx`](../src/components/blog/BlogSchemas.tsx) (see next section).

**Expected impact:** Broader **topical authority** and more **long-tail entry points** without claiming specific ranking positions.

---

## On-page SEO

### Blog articles (template-driven)

Implemented in [`src/components/blog/BlogSchemas.tsx`](../src/components/blog/BlogSchemas.tsx) and composed through [`src/components/blog/BlogPostTemplate.tsx`](../src/components/blog/BlogPostTemplate.tsx):

- **`<title>` and meta title** from `metaTitle` (with brand suffix).
- **Meta description** from `metaDescription`.
- **Meta keywords** from `primaryKeyword` and `secondaryKeywords`.
- **Canonical URL** (`<link rel="canonical">`) to reduce duplicate URL ambiguity.
- **Open Graph** (`og:type`, `og:url`, `og:title`, `og:description`, `og:image` with dimensions, `article:*` where applicable).
- **Twitter Card** (`summary_large_image`) with matching title, description, and image.
- **JSON-LD:** `Article` (including keyword semantics), `BreadcrumbList`, and **FAQ** blocks when the post supplies FAQ content.

### Blog UX that supports SEO

- **Visible breadcrumbs and H1** in [`src/components/blog/BlogHeroSection.tsx`](../src/components/blog/BlogHeroSection.tsx) (navigation context + clear primary heading).
- **Table of contents** (desktop sidebar and mobile) in [`BlogPostTemplate.tsx`](../src/components/blog/BlogPostTemplate.tsx) for skim-friendly structure and clearer heading hierarchy in the article body.

### Broader site and landings

- **Landing audit and SEO alignment:** Cross-page pass aligning meta, content, funnel, and technical SEO consistency (high-level; exact checklist lives in project process, not in this summary).

**Expected impact:** Clearer relevance signals to search engines and users; better snippet and social preview control; improved crawl and index clarity via canonical URLs.

---

## Technical SEO

### XML sitemap

- **File:** [`public/sitemap.xml`](../public/sitemap.xml)
- **Includes:** Core pages, services (index + duty tiers), **both** light/medium campaign paths, heavy-duty campaign path, `/locations`, county hubs, all listed city towing URLs, `/blog`, individual blog URLs (including the 30 new articles) with `changefreq` / `priority` / `lastmod` as configured, plus legal and utility pages.

### Legacy location redirects (301)

- **File:** [`public/_redirects`](../public/_redirects)
- **Purpose:** Send old hash-style location URLs (for example `/locations#san-francisco`) to **canonical** city or county routes so link equity and crawlers converge on one URL per destination (hosting must honor this file, for example Netlify-style `_redirects`).

### Structured data (non-blog and shared)

- **Component:** [`src/components/StructuredData.tsx`](../src/components/StructuredData.tsx)
- **Patterns in code:** `Article`, `LocalBusiness`, FAQ-oriented payloads, and service-style schema depending on page wiring.

### Static prerender (optional build)

- **Config:** [`vite.config.ts`](../vite.config.ts) — prerender runs in production only when `ENABLE_PRERENDER === "true"`.
- **Curated routes:** Core marketing URLs, dynamic location URL list, `/blog`, a fixed set of older blog paths, campaign landings, legal/thank-you.
- **Gap — newest 30 blog paths:** The following routes are **declared in the app and sitemap** but are **not** in the prerender array today. When you need full HTML at fetch time for bots or tools, append these paths to the prerender list (in addition to keeping routes and sitemap aligned):

```
/blog/what-to-do-after-car-accident-bay-area
/blog/flatbed-vs-wheel-lift-towing
/blog/does-insurance-cover-towing-california
/blog/tesla-towing-bay-area-guide
/blog/get-car-out-of-impound-bay-area
/blog/awd-4wd-towing-guide-flatbed
/blog/predatory-towing-california-rights
/blog/semi-truck-breakdown-highway-guide
/blog/how-to-choose-towing-company
/blog/dui-impound-california
/blog/long-distance-towing-cost-california
/blog/spring-driving-bay-area-breakdown-prevention
/blog/apartment-hoa-towing-rights-california
/blog/i-880-bay-area-interstate-accident-recovery
/blog/towing-lowered-modified-car-guide
/blog/food-truck-towing-bay-area
/blog/us-101-peninsula-freeway-breakdown-guide
/blog/bay-area-bridge-stall-towing-guide
/blog/winch-out-mudslide-rain-bay-area
/blog/rideshare-driver-breakdown-towing-bay-area
/blog/dot-out-of-service-weight-station-bay-area
/blog/classic-exotic-car-towing-bay-area
/blog/travel-trailer-sway-blowout-towing-recovery
/blog/shuttle-bus-transit-minibus-breakdown-towing
/blog/ev-dead-12v-battery-towing-flatbed-guide
/blog/north-bay-golden-gate-corridor-towing
/blog/catalytic-converter-theft-car-immobilized-towing
/blog/commercial-tire-blowout-highway-bay-area
/blog/dealer-auction-vehicle-transport-bay-area
/blog/construction-dump-truck-roll-off-recovery-bay-area
```

**Reliability note:** Prerender was temporarily relaxed in some hosting pipelines so **publish stability** took priority over static HTML generation; URLs remain reachable via normal client routing and sitemap discovery.

---

## Front-end performance and Core Web Vitals

- **Route-level code splitting:** [`src/App.tsx`](../src/App.tsx) uses `React.lazy` for pages and `Suspense` for loading UI—smaller initial JavaScript for first paint.
- **Bundle strategy:** [`vite.config.ts`](../vite.config.ts) — `manualChunks` for vendor, router, UI primitives, icons, and forms; `cssCodeSplit` enabled.
- **Images:** `vite-imagetools` in the Vite pipeline; lazy loading helpers such as [`src/components/LazyImage.tsx`](../src/components/LazyImage.tsx) and [`src/components/LazySection.tsx`](../src/components/LazySection.tsx) where integrated.
- **Lighthouse-oriented pass:** Code splitting, image optimization, and **CLS** improvements to support Core Web Vitals signals.

**Expected impact:** Faster load and interaction on typical mobile hardware; reduced layout shift and perceived jank.

---

## Information architecture and local SEO

**County hubs** (canonical examples):

- [https://heavytowpro.com/locations/san-mateo-county](https://heavytowpro.com/locations/san-mateo-county)  
- [https://heavytowpro.com/locations/alameda-county](https://heavytowpro.com/locations/alameda-county)  
- [https://heavytowpro.com/locations/santa-clara-county](https://heavytowpro.com/locations/santa-clara-county)  
- [https://heavytowpro.com/locations/contra-costa-county](https://heavytowpro.com/locations/contra-costa-county)  

**Locations index:** [https://heavytowpro.com/locations](https://heavytowpro.com/locations)

**City / market pages** (clickable):

[https://heavytowpro.com/towing-oakland](https://heavytowpro.com/towing-oakland), [https://heavytowpro.com/towing-san-jose](https://heavytowpro.com/towing-san-jose), [https://heavytowpro.com/towing-san-francisco](https://heavytowpro.com/towing-san-francisco), [https://heavytowpro.com/towing-hayward](https://heavytowpro.com/towing-hayward), [https://heavytowpro.com/towing-fremont](https://heavytowpro.com/towing-fremont), [https://heavytowpro.com/towing-berkeley](https://heavytowpro.com/towing-berkeley), [https://heavytowpro.com/towing-san-mateo](https://heavytowpro.com/towing-san-mateo), [https://heavytowpro.com/towing-redwood-city](https://heavytowpro.com/towing-redwood-city), [https://heavytowpro.com/towing-palo-alto](https://heavytowpro.com/towing-palo-alto), [https://heavytowpro.com/towing-sunnyvale](https://heavytowpro.com/towing-sunnyvale), [https://heavytowpro.com/towing-mountain-view](https://heavytowpro.com/towing-mountain-view), [https://heavytowpro.com/towing-daly-city](https://heavytowpro.com/towing-daly-city), [https://heavytowpro.com/towing-concord](https://heavytowpro.com/towing-concord), [https://heavytowpro.com/towing-walnut-creek](https://heavytowpro.com/towing-walnut-creek), [https://heavytowpro.com/towing-santa-clara](https://heavytowpro.com/towing-santa-clara), [https://heavytowpro.com/towing-stockton](https://heavytowpro.com/towing-stockton), [https://heavytowpro.com/towing-san-leandro](https://heavytowpro.com/towing-san-leandro), [https://heavytowpro.com/towing-pleasanton](https://heavytowpro.com/towing-pleasanton), [https://heavytowpro.com/towing-livermore](https://heavytowpro.com/towing-livermore), [https://heavytowpro.com/towing-burlingame](https://heavytowpro.com/towing-burlingame), [https://heavytowpro.com/towing-south-san-francisco](https://heavytowpro.com/towing-south-san-francisco), [https://heavytowpro.com/towing-menlo-park](https://heavytowpro.com/towing-menlo-park), [https://heavytowpro.com/towing-cupertino](https://heavytowpro.com/towing-cupertino), [https://heavytowpro.com/towing-milpitas](https://heavytowpro.com/towing-milpitas), [https://heavytowpro.com/towing-richmond](https://heavytowpro.com/towing-richmond), [https://heavytowpro.com/towing-antioch](https://heavytowpro.com/towing-antioch)

**Expected impact:** Local long-tail coverage; strong targets for internal links from corridor- and city-specific blog content.

---

## Campaign landings and CRO

| URL | Role |
|-----|------|
| [https://heavytowpro.com/towing-services](https://heavytowpro.com/towing-services) | Light/medium campaign entry |
| [https://heavytowpro.com/towing/bay-area-flatbed-emergency-towing-24-7](https://heavytowpro.com/towing/bay-area-flatbed-emergency-towing-24-7) | Flatbed / emergency Bay Area positioning |
| [https://heavytowpro.com/towing/heavy-duty-towing-bay-area](https://heavytowpro.com/towing/heavy-duty-towing-bay-area) | Heavy-duty campaign entry |

**Also in scope:** [https://heavytowpro.com/services](https://heavytowpro.com/services), [https://heavytowpro.com/services/light-duty](https://heavytowpro.com/services/light-duty), [https://heavytowpro.com/services/medium-duty](https://heavytowpro.com/services/medium-duty), [https://heavytowpro.com/services/heavy-duty](https://heavytowpro.com/services/heavy-duty).

**CRO-related work:** Landing design and funnel fixes; restoration of key service card imagery (luxury, motorcycle, RV); heavy-duty landing UX and hero imagery correctness; **dispatch hub** model and **contact / quote flow** wiring; **blog CTA** readability and contrast for accessibility and clearer conversion from organic content; dispatch hub **data refreshes** for consistency where hubs are shown.

**Expected impact:** Message match for ads and organic landings; fewer broken visuals; clearer path to call or quote; improved trust on hub and blog pages.

---

## Internal linking

- **Related posts:** [`src/components/blog/BlogPostTemplate.tsx`](../src/components/blog/BlogPostTemplate.tsx) uses `getRelatedPostsForTemplate` from [`src/data/blogRegistry.ts`](../src/data/blogRegistry.ts) and renders the [`BlogRelatedContent`](../src/components/blog/BlogRelatedContent.tsx) module so each article surfaces a small set of same-category / related URLs.
- **Expected impact:** Extra crawl paths between related topics; keeps users in the content cluster toward conversion pages.

---

## Content: blog deliverables (30 articles)

Canonical pattern: `https://heavytowpro.com/blog/{slug}`.  
**Batch 1** = posts 1–15 (original content batch A). **Batch 2** = posts 16–30 (original content batch B). *No per-day delivery schedule is implied.*

| # | Batch | Title | URL | Category | Intent / topic cluster | Expected SEO role |
|---|-------|-------|-----|----------|--------------------------|-------------------|
| 1 | 1 | What to Do After a Car Accident in the Bay Area: A Step-by-Step Guide | [https://heavytowpro.com/blog/what-to-do-after-car-accident-bay-area](https://heavytowpro.com/blog/what-to-do-after-car-accident-bay-area) | Emergency Response | Post-accident, CHP, documentation | High-intent local emergency |
| 2 | 1 | Flatbed vs Wheel-Lift Towing: Which Method Is Right for Your Vehicle? | [https://heavytowpro.com/blog/flatbed-vs-wheel-lift-towing](https://heavytowpro.com/blog/flatbed-vs-wheel-lift-towing) | Safety Tips | Method comparison, drivetrain safety | Educational pillar supporting service semantics |
| 3 | 1 | Does Car Insurance Cover Towing in California? Complete 2026 Guide | [https://heavytowpro.com/blog/does-insurance-cover-towing-california](https://heavytowpro.com/blog/does-insurance-cover-towing-california) | Regulations & Compliance | Coverage, reimbursement | Trust + insurance adjacency |
| 4 | 1 | Tesla Towing in the Bay Area: What Every Owner Must Know Before Calling a Tow Truck | [https://heavytowpro.com/blog/tesla-towing-bay-area-guide](https://heavytowpro.com/blog/tesla-towing-bay-area-guide) | Specialized Services | EV, Tow Mode, flatbed | EV vertical + Bay Area modifier |
| 5 | 1 | How to Get Your Car Out of Impound in the Bay Area: Complete Guide | [https://heavytowpro.com/blog/get-car-out-of-impound-bay-area](https://heavytowpro.com/blog/get-car-out-of-impound-bay-area) | SF Local Services | Impound release, documents | Very high local intent |
| 6 | 1 | Towing an AWD or 4WD Vehicle: Why Your Subaru, Audi, or BMW Needs a Flatbed | [https://heavytowpro.com/blog/awd-4wd-towing-guide-flatbed](https://heavytowpro.com/blog/awd-4wd-towing-guide-flatbed) | Safety Tips | AWD/4WD damage avoidance | Technical FAQ long-tail |
| 7 | 1 | Predatory Towing in California: Know Your Rights and Fight Back | [https://heavytowpro.com/blog/predatory-towing-california-rights](https://heavytowpro.com/blog/predatory-towing-california-rights) | Regulations & Compliance | Consumer rights | Broad California demand |
| 8 | 1 | Semi-Truck Breakdown on the Highway: A Driver's Step-by-Step Survival Guide | [https://heavytowpro.com/blog/semi-truck-breakdown-highway-guide](https://heavytowpro.com/blog/semi-truck-breakdown-highway-guide) | Commercial Services | Fleet, highway safety | Commercial fleet vertical |
| 9 | 1 | How to Choose a Reliable Towing Company: 10 Red Flags and Must-Haves | [https://heavytowpro.com/blog/how-to-choose-towing-company](https://heavytowpro.com/blog/how-to-choose-towing-company) | Safety Tips | Vendor selection | Branded + generic evaluation queries |
| 10 | 1 | Vehicle Impound After a DUI in California: Fees, Timelines, and Getting Your Car Back | [https://heavytowpro.com/blog/dui-impound-california](https://heavytowpro.com/blog/dui-impound-california) | Regulations & Compliance | DUI impound | High-stress informational |
| 11 | 1 | Long-Distance Towing Costs in California: Bay Area to Sacramento, LA, and Beyond | [https://heavytowpro.com/blog/long-distance-towing-cost-california](https://heavytowpro.com/blog/long-distance-towing-cost-california) | Commercial Services | Pricing, long routes | Cost + geography long-tail |
| 12 | 1 | Spring Driving in the Bay Area: Rainy Season Breakdown Prevention Guide | [https://heavytowpro.com/blog/spring-driving-bay-area-breakdown-prevention](https://heavytowpro.com/blog/spring-driving-bay-area-breakdown-prevention) | Safety Tips | Seasonal maintenance | Seasonal freshness |
| 13 | 1 | Apartment and HOA Parking Towing in California: A Tenant's Complete Guide | [https://heavytowpro.com/blog/apartment-hoa-towing-rights-california](https://heavytowpro.com/blog/apartment-hoa-towing-rights-california) | Regulations & Compliance | Tenant, HOA | Distinct audience vs driver-only topics |
| 14 | 1 | I-880 and Bay Area Interstate Accident Recovery: What Happens After a Highway Crash | [https://heavytowpro.com/blog/i-880-bay-area-interstate-accident-recovery](https://heavytowpro.com/blog/i-880-bay-area-interstate-accident-recovery) | Emergency Response | Freeway corridor | Corridor authority |
| 15 | 1 | Towing a Lowered or Modified Car Without Damage: The Enthusiast's Guide | [https://heavytowpro.com/blog/towing-lowered-modified-car-guide](https://heavytowpro.com/blog/towing-lowered-modified-car-guide) | Specialized Services | Clearance, mods | Enthusiast niche |
| 16 | 2 | Food Truck Towing in the Bay Area: Generators, Propane, and Safe Recovery | [https://heavytowpro.com/blog/food-truck-towing-bay-area](https://heavytowpro.com/blog/food-truck-towing-bay-area) | Commercial Services | Mobile food, hazards | Commercial vertical |
| 17 | 2 | US-101 Peninsula Freeway Breakdowns: Safety, CHP, and Tow Dispatch | [https://heavytowpro.com/blog/us-101-peninsula-freeway-breakdown-guide](https://heavytowpro.com/blog/us-101-peninsula-freeway-breakdown-guide) | Emergency Response | Peninsula, US-101 | Corridor authority |
| 18 | 2 | Bay Area Bridge Stalls: Towing, Tunnels, and CHP Coordination | [https://heavytowpro.com/blog/bay-area-bridge-stall-towing-guide](https://heavytowpro.com/blog/bay-area-bridge-stall-towing-guide) | Emergency Response | Bridges, tunnels | Regional infrastructure angles |
| 19 | 2 | Winch-Outs, Mud, and Late-Season Rain on Bay Area Hills | [https://heavytowpro.com/blog/winch-out-mudslide-rain-bay-area](https://heavytowpro.com/blog/winch-out-mudslide-rain-bay-area) | Heavy Duty | Weather, terrain, winch | Seasonal + heavy recovery |
| 20 | 2 | Rideshare Driver Breakdowns in the Bay Area: Tow vs Roadside | [https://heavytowpro.com/blog/rideshare-driver-breakdown-towing-bay-area](https://heavytowpro.com/blog/rideshare-driver-breakdown-towing-bay-area) | Safety Tips | Gig drivers | Audience-specific long-tail |
| 21 | 2 | DOT Out-of-Service at a California Weight Station: Fleet Towing Playbook | [https://heavytowpro.com/blog/dot-out-of-service-weight-station-bay-area](https://heavytowpro.com/blog/dot-out-of-service-weight-station-bay-area) | Commercial Services | DOT, fleets | B2B fleet vertical |
| 22 | 2 | Classic and Exotic Car Towing in the Bay Area: Clearance and Care | [https://heavytowpro.com/blog/classic-exotic-car-towing-bay-area](https://heavytowpro.com/blog/classic-exotic-car-towing-bay-area) | Specialized Services | Collector vehicles | High-trust niche |
| 23 | 2 | Travel Trailer Sway and Blowouts: When Towing Is the Safer Exit | [https://heavytowpro.com/blog/travel-trailer-sway-blowout-towing-recovery](https://heavytowpro.com/blog/travel-trailer-sway-blowout-towing-recovery) | Specialized Services | RV / trailer safety | Recreational towing |
| 24 | 2 | Shuttle Bus and Minibus Breakdowns: Passenger Safety and Tow Class | [https://heavytowpro.com/blog/shuttle-bus-transit-minibus-breakdown-towing](https://heavytowpro.com/blog/shuttle-bus-transit-minibus-breakdown-towing) | Commercial Services | Passenger transport | Institutional operators |
| 25 | 2 | EV Dead 12V Battery: Why a Flatbed Tow Still Matters (Beyond Tesla) | [https://heavytowpro.com/blog/ev-dead-12v-battery-towing-flatbed-guide](https://heavytowpro.com/blog/ev-dead-12v-battery-towing-flatbed-guide) | Specialized Services | EV 12V, flatbed | EV ecosystem |
| 26 | 2 | North Bay and Golden Gate Corridor Towing: Approaches, Curves, and Dispatch | [https://heavytowpro.com/blog/north-bay-golden-gate-corridor-towing](https://heavytowpro.com/blog/north-bay-golden-gate-corridor-towing) | SF Local Services | North Bay, Golden Gate | Regional geo modifiers |
| 27 | 2 | Catalytic Converter Theft: When Your Car Will Not Move and You Need a Tow | [https://heavytowpro.com/blog/catalytic-converter-theft-car-immobilized-towing](https://heavytowpro.com/blog/catalytic-converter-theft-car-immobilized-towing) | SF Local Services | Theft damage | Trend-driven demand |
| 28 | 2 | Commercial Tire Blowouts on Bay Area Highways: Scene Control and Towing | [https://heavytowpro.com/blog/commercial-tire-blowout-highway-bay-area](https://heavytowpro.com/blog/commercial-tire-blowout-highway-bay-area) | Commercial Services | Fleet, debris | Fleet + safety intersection |
| 29 | 2 | Dealer and Auction Vehicle Transport in the Bay Area: Keys, Gates, and Paperwork | [https://heavytowpro.com/blog/dealer-auction-vehicle-transport-bay-area](https://heavytowpro.com/blog/dealer-auction-vehicle-transport-bay-area) | Commercial Services | Dealer logistics | B2B transport |
| 30 | 2 | Construction Dump Trucks and Roll-Offs: Job Site Recovery in the Bay Area | [https://heavytowpro.com/blog/construction-dump-truck-roll-off-recovery-bay-area](https://heavytowpro.com/blog/construction-dump-truck-roll-off-recovery-bay-area) | Construction Services | Job site recovery | Construction-adjacent towing |

---

## Measurement (analytics and ads)

- **Google Tag / Google Analytics** implementation and iteration, including **conversion labels** for measurable actions.
- **Expected impact:** Attribution for paid and owned traffic, landing-page testing, and budget decisions—not a direct substitute for organic ranking improvements.

---

## Backend and reliability

- **Supabase Edge Function — email delivery:** [`supabase/functions/send-email/index.ts`](../supabase/functions/send-email/index.ts) sends mail via **Resend**, with **recipient allowlisting**, **rate limiting**, **CORS** headers, and validated **attachment** paths against storage—supporting quote and contact workflows securely.
- **Email integration fixes:** Corrections to Resend import paths where builds or deploys required it.
- **Build / deploy:** Prerender toggled off in constrained publish environments when needed so releases remain reliable; see [Technical SEO](#technical-seo) for SEO tradeoffs and follow-up.

---

## Optional: paste your KPIs here

_Add Search Console and GA4 exports for your reporting period. Suggested cuts:_

1. **Search Console:** impressions, clicks, CTR — site-wide and filtered to `/blog/` and `/towing-`.
2. **GA4:** sessions and conversions by landing page for campaign URLs and top blog posts.
3. **Call tracking (if configured):** mapped to the same landing pages.

---

## May 2026 — repository sync to GitHub

_This section records the **engineering milestone** of landing previously local-only work in version control and on `origin/main`. It does not define a new editorial publishing month._

### What landed (May 4, 2026)

- **Local SEO:** County and city routes under `src/pages/locations/`, reusable modules under `src/components/locations/`, and structured data under `src/data/locations/` (including navigation model updates).
- **Blog:** Additional April 2026 article files, `april2026BlogPosts.ts`, cohort blog post page (`CohortBlogPostPage.tsx`), blog registry and `Blog.tsx` wiring, and related blog component updates.
- **Technical SEO:** `public/_redirects`, `public/sitemap.xml` refresh, and updates in [`vite.config.ts`](../vite.config.ts) for build and optional prerender behavior.
- **Helpers:** FAQ and location JSON-LD utilities and phone helpers under `src/lib/`.
- **Sitewide:** Core pages, landings, layout and SEO components, UI primitives, lockfiles, and [`supabase/functions/send-email/index.ts`](../supabase/functions/send-email/index.ts) updated in step with the rollout.

**Audit:** This file ships in the same `main` commit as the sync. After pull, run `git log -1 -- docs/CLIENT_SEO_CHANGELOG_FEB_APR_2026.md` for the handoff SHA, or `git log -1` on `main` if that commit is still tip.

---

## Appendix — engineering audit trail

Detailed **per-commit** history is available in **git** on request; this client document intentionally omits day-by-day commit listings. The **May 4, 2026** sync is the commit that adds this changelog path on `main` for the batch that was previously only in a dirty worktree (resolve SHA with `git log -1 -- docs/CLIENT_SEO_CHANGELOG_FEB_APR_2026.md`).

---

## Appendix — production vs git

If strict alignment with **production** is required, compare the live site to the **deployed** branch or commit in your hosting dashboard. The May 2026 sync removed the prior gap where substantial SEO and location work existed only locally; any new drift will be ordinary ongoing development after that push.

---

*End of document.*
