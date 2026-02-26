# Phase 1 Deliverable — Light & Medium Duty: Understand

**Status:** Complete  
**Date:** 2026-02-23  
**Goal:** Full clarity on scope, content, design, and URL for the C1 landing page before Phase 2 (build).

---

## 1. Audit Summary — C1 Campaign & LP Spec

### 1.1 Campaign (Master Context)

- **Campaign name:** HeavyTowPro - C1 Light & Medium Duty Towing  
- **Ad groups:** 12 (Emergency, Flatbed, Luxury, Motorcycle, RV, Box Truck, Accident Recovery, SF, East Bay, Peninsula, South Bay, Private Property)  
- **Keywords:** 129  
- **Doc final URL:** `https://www.heavytowpro.com/towing` → **we will change to a keyword-rich path** (see URL section below).  
- **Primary CTA:** Call 650-881-2400 + Get a Free Quote  
- **RSA headlines:** 15 (e.g. Bay Area Towing in 15 Minutes, Call Now — Live Dispatch 24/7, Flatbed Tow — No Hidden Fees).  
- **RSA descriptions:** 4 (flatbed, 5 counties, 15-min response, no hidden fees, specialist towing, no jump-starts).  
- **Tracking template:** `{lpurl}?utm_source=google&utm_medium=cpc&utm_term={keyword}&utm_campaign={_campaignname}` — keep UTM-friendly; final URL will be the new keyword-rich path.

### 1.2 LP Spec (HeavyTowPro_LP_Light_Medium_Duty.md)

**12 sections in order:**

| # | Section | LP doc content / notes |
|---|--------|------------------------|
| 1 | **Hero** | H1: "Bay Area Towing in 15 Minutes. Call Now." Sub: flatbed, 5 counties, 24/7, no surprises. Primary CTA: CALL NOW — 650-881-2400. Secondary: Get a Free Quote →. Trust chips: 4.9 Google, 50K+ Tows, 15-Min Avg, 24/7 Live Dispatch, Licensed & Insured. |
| 2 | **Trust Bar** | Full-width bar, 5 stats: ★ 4.9/5 Google Rating, 50,000+ Tows Completed, 15 Min Avg Response, 24/7 Live Dispatch, 5 Counties Bay Area. Hook: "Trusted by Bay Area Drivers — By the Numbers." |
| 3 | **What We Tow** | Heading: "We Tow It All — Safely, Every Time." 6 cards: Flatbed, Luxury & Exotic, Motorcycle, RV & Motorhome, Box Truck & Medium-Duty, Accident & Recovery. Below: "We do NOT offer jump-starts, lockouts, tire changes, or fuel delivery. Dedicated towing specialists only." |
| 4 | **How It Works** | "3 Steps. 15 Minutes. You're Moving Again." Step 1: Call 24/7 Dispatch (phone 650-881-2400). Step 2: We Confirm & Dispatch (ETA 60 sec). Step 3: Expert Driver Arrives. CTA below: "Ready to get started?" + CALL NOW. |
| 5 | **Testimonials** | "What Bay Area Drivers Are Saying." 3 testimonials: Jennifer W. (SF, Sedan, Bay Bridge 2am), Marcus T. (Oakland, Motorcycle), Lisa K. (Palo Alto, EV Tesla). Google badge: "★★★★★ 4.9 / 5 · 500+ Google Reviews · View All Reviews on Google →". |
| 6 | **Coverage** | "We Cover the Entire Bay Area — 5 Counties, 60+ Cities." 5 county cards with city lists; 6 dispatch hubs (Brisbane HQ 650-881-2400, Oakland 510-800-3800, San Jose 408-800-3800, Fremont, Daly City, Concord). CTA: "Not sure if we cover your area? Call us — 650-881-2400." |
| 7 | **Why Choose Us** | "Why Thousands of Bay Area Drivers Choose Heavy Haulers." 5 differentiators: Right Truck for the Right Job, No Hidden Fees. Ever., Certified & Licensed Professionals, Real Human Dispatch. 24/7, 365., 4.9 Stars on Google — 50,000+ Tows. |
| 8 | **Pricing** | "Transparent Pricing — No Surprises." **Table:** Light-Duty From $150, Flatbed From $175, Motorcycle From $125, RV From $295, Medium-Duty From $250, After-Hours Standard rates. Callout: no fuel surcharges, dispatch fees, or after-hours premiums. CTA: Call 650-881-2400 for instant quote. |
| 9 | **FAQ** | "Got Questions? We've Got Answers." 8 Q&As: How fast, Do you cover my area, Will you damage my car, Jump-starts/lockouts, Tesla/EV, How do I pay, 3am/holidays, Licensed and insured. Accordion; add FAQPage schema. |
| 10 | **Secondary CTA** | "Ready to Get Moving?" Sub: One call. Live dispatcher. ETA in 60 seconds. Two CTAs: CALL NOW, Request a Quote Online →. 4 bullets: No obligation, Live dispatcher, Licensed/certified/insured, Serving Bay Area 24/7. |
| 11 | **Guarantee** | "Our Promise to Every Customer." 4 cards: Upfront Pricing, Damage-Free or We Make It Right, On-Time or We'll Tell You Why, Your Vehicle, Your Direction. |
| 12 | **Sticky Call Bar** | Mobile-only: "TAP TO CALL — 650-881-2400", fixed bottom, full-width. Use design system primary (not doc orange hex). |

### 1.3 Cursor Prompts (Section Order)

LP1 section order from prompts: HeroSection → TrustBar → ServicesSection → HowItWorksSection → TestimonialsSection → CoverageSection → WhyUsSection → **PricingSection** → FaqSection → SecondaryCTA → GuaranteeSection → StickyCallBar.  
This matches the LP doc order (Pricing before FAQ). Use this order for Phase 2.

---

## 2. Map to Existing Site

### 2.1 Current C1 LP: LandingLightMedium.tsx

- **Current route:** `/towing-services` (in App.tsx).  
- **Current section order:** LandingHero → TrustBar → ServiceCards → PricingPromise → ResponseTime → ProcessSteps → TestimonialCarousel → CoverageMap → **VehicleGallery** → WhyChooseUsLanding → LandingFAQ → GuaranteeSection → FinalCTA → StickyMobileCTA.

### 2.2 Component-by-Component Mapping

| LP doc section | Existing component | Action |
|----------------|--------------------|--------|
| 1. Hero | `LandingHero` | **Update copy** to LP doc (H1, subhead, trust chips, CTAs). Keep design tokens (primary, accent). |
| 2. Trust Bar | `TrustBar` | **Refactor layout + copy**: LP wants single full-width bar, 5 stats only (4.9/5, 50K+, 15 Min, 24/7, 5 Counties), hook "Trusted by Bay Area Drivers — By the Numbers." Current has 4 stats + 4 badges; align to 5-column bar using `bg-muted` or `bg-card` (dark bar). |
| 3. What We Tow | `ServiceCards` | **Replace content**: LP wants one grid of 6 cards (Flatbed, Luxury, Motorcycle, RV, Box Truck, Accident & Recovery) with exact titles/body + "We do NOT offer..." callout. Current has Light Duty 6 + Medium Duty 6; change to single 6-card grid. |
| 4. How It Works | `ProcessSteps` | **Update to 3 steps** with LP copy: Call 24/7 Dispatch, We Confirm & Dispatch, Expert Driver Arrives. Add phone link and "Ready to get started?" CTA. Current has 4 steps. |
| 5. Testimonials | `TestimonialCarousel` | **Update to 3 fixed testimonials** (Jennifer W., Marcus T., Lisa K.) + Google rating badge text/link. |
| 6. Coverage | `CoverageMap` | **Update copy**: 5 counties with LP doc city lists; 6 hubs with Brisbane/Oakland/San Jose phones; CTA line. Keep map or placeholder. |
| 7. Why Choose Us | `WhyChooseUsLanding` | **Replace with 5 differentiators** and exact LP copy (Right Truck, No Hidden Fees, Certified & Licensed, Real Human Dispatch, 4.9 Stars). |
| 8. Pricing | `PricingPromise` | **Replace with pricing table**: 5 service rows + After-Hours row (Service Type, Starting Rate, Notes). Add no-surge callout and quote CTA. Current is promise cards + "Competitive rates"; LP requires explicit table. |
| 9. FAQ | `LandingFAQ` | **Replace with 8 LP Q&As** and FAQPage schema. |
| 10. Secondary CTA | `FinalCTA` | **Update copy**: "Ready to Get Moving?", sub, two CTAs, 4 reassurance bullets. |
| 11. Guarantee | `GuaranteeSection` | **Replace with 4 promise cards** and exact LP copy (Upfront Pricing, Damage-Free, On-Time, Your Vehicle Your Direction). |
| 12. Sticky Call Bar | `StickyMobileCTA` | **Option A:** Simplify to single "TAP TO CALL — 650-881-2400" bar (always visible on mobile) per LP spec. **Option B:** Keep Call + Quote; ensure copy matches. Use `bg-primary` (design system). Add `tel:+16508812400`. |

### 2.3 VehicleGallery

- LP doc has **no** "Vehicle Gallery" section. **Recommendation:** Remove from C1 LP section order so the page matches the 12-section spec. If desired for engagement, could be a later A/B add.

### 2.4 ResponseTime

- LP doc does not have a standalone "Response Time" section; "15 min" is in Hero, Trust Bar, and How It Works. **Recommendation:** Remove ResponseTime from C1 LP; its messaging is covered elsewhere.

### 2.5 Header / Footer

- C1 LP does not include Header/Footer in the LP doc. Current LandingLightMedium has no Header/Footer (only `<main>`). **Recommendation:** Add site Header and Footer (reuse from Index) so the LP matches site chrome and navigation. Per Cursor prompts, header should include tap-to-call; use existing `Header` if it already has phone.

---

## 3. Design Alignment — Use Home Page Styling

- **Do not use** Campaign doc colors (#1A3C6E, #E87722, #0D2B4E, etc.).  
- **Use only** the existing design system:

  - **CSS variables:** [src/index.css](src/index.css) — `--background`, `--foreground`, `--primary`, `--secondary`, `--card`, `--muted`, `--accent`, `--gradient-primary`, `--gradient-hero`, `--shadow-orange`, `--shadow-blue`, `--radius`.  
  - **Tailwind:** `bg-background`, `text-foreground`, `bg-primary`, `text-primary`, `bg-muted`, `border-border`, `bg-card`, `gradient-hero`, etc.  
  - **Components:** Existing landing components already use these tokens; any new or refactored sections must use the same (e.g. hero background `bg-primary` or `gradient-hero`, trust bar `bg-muted` or `bg-card`, buttons `bg-primary` / `border-primary`).

- **Sticky bar:** Use `bg-primary` and `text-primary-foreground` (or white) so it matches the site; no hardcoded orange hex.

- **Net-new or heavily changed:** Pricing **table** (alternating rows, header row) — style with `border-border`, `bg-muted/30` or similar so it fits the dark theme. Trust Bar as a single full-width bar — use `bg-muted` or `bg-card` for the dark bar effect.

---

## 4. URL and Routing

- **Chosen C1 path (keyword-rich):**  
  **`/towing/bay-area-flatbed-emergency-towing-24-7`**

- **Full URL:** `https://www.heavytowpro.com/towing/bay-area-flatbed-emergency-towing-24-7`

- **Actions for Phase 2:**  
  1. Add route in App.tsx for this path, pointing to the C1 LP page (refactored LandingLightMedium or new component).  
  2. Set canonical, meta title, description, and schema `url` to this URL.  
  3. **Post–Phase 2:** Update Google Ads C1 campaign final URL (and tracking template if needed) to this path so all ad traffic lands here.

- **Alternative path** if you prefer shorter: `/bay-area-towing-flatbed-emergency-24-7` (no `/towing` prefix). Confirm before or during Phase 2.

---

## 5. Content Source and Gaps

- **Single source of truth for copy:** [HeavyTowPro_LP_Light_Medium_Duty.md](Landing Pages/HeavyTowPro_LP_Light_Medium_Duty.md). All headlines, body copy, testimonials, FAQ Q&As, pricing table rows, and CTA text must match this file.  
- **Phones:** 650-881-2400 (HQ), 510-800-3800 (Oakland), 408-800-3800 (San Jose). Always `<a href="tel:+1...">`; never in images.  
- **Schema:** LocalBusiness (address 351 Industrial Way, Brisbane, CA 94005; phone; areaServed 5 counties) + FAQPage (8 questions). Fix LandingLightMedium schema `url` and `@id` to heavytowpro.com and new canonical.  
- **Gaps:**  
  - Hero imagery: LP doc doesn’t specify asset; reuse existing hero background or gradient from Home.  
  - Google Reviews link: Add for "View All Reviews on Google →" (use actual GBP URL).  
  - Map: CoverageMap has inline SVG; LP allows "Google Maps embed or static map placeholder." Keep or replace in Phase 2.

---

## 6. Phase 1 Summary — Ready for Phase 2

| Item | Decision |
|------|----------|
| **Sections to build/refactor** | 12 sections in order: Hero, Trust Bar, What We Tow (6 cards), How It Works (3 steps), Testimonials, Coverage, Why Us (5), Pricing (table), FAQ (8), Secondary CTA, Guarantee (4), Sticky Call Bar. |
| **Content source** | HeavyTowPro_LP_Light_Medium_Duty.md for all copy. |
| **Design tokens** | index.css + tailwind theme only; no Campaign doc hex colors. |
| **C1 URL** | `/towing/bay-area-flatbed-emergency-towing-24-7` (keyword-rich). |
| **Existing components** | Reuse and update: LandingHero, TrustBar, ServiceCards, ProcessSteps, TestimonialCarousel, CoverageMap, WhyChooseUsLanding, LandingFAQ, GuaranteeSection, FinalCTA, StickyMobileCTA. Replace PricingPromise with a pricing table section. Remove VehicleGallery and ResponseTime from C1 LP order. |
| **Header/Footer** | Add site Header and Footer to C1 LP. |
| **Conversion tracking** | Phase 2: ensure all phone links use `tel:` and add gtag `phone_click` with `campaign: 'C1'` when implementing. |

Phase 1 complete. Proceed to **Phase 2 — Light & Medium Towing: Achieve** when ready.
