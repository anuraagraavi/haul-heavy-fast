# HeavyTowPro Campaign — Implementation Plan (Updated)

**Design:** Use existing Home page styling (site design system).  
**URLs:** Longer, keyword-rich paths.  
**Phases:** 4 phases — Light/medium (understand → achieve), Heavy duty (understand → achieve).

---

## How to view locally

- **Dev server port:** This project uses **port 8080** (configured in `vite.config.ts`), not 5173.
- **Steps:** From the project root run `npm run dev`, then in your browser open:
  - **Home:** http://localhost:8080
  - **C1 landing page (Light & Medium):** http://localhost:8080/towing/bay-area-flatbed-emergency-towing-24-7
  - **Legacy towing-services URL:** http://localhost:8080/towing-services
- If you see 404 on port 8080, ensure no other app is using 8080 and that `npm run dev` is running in this project.

---

## Design Styling — Use Home Page, Not Campaign Doc Colors

- **Do not use** the Campaign document color scheme (e.g. brandBlue `#1A3C6E`, accentOrange `#E87722`, navy `#0D2B4E` from the Cursor prompts).
- **Use the existing site design system** so the landing pages match the Home page and the rest of heavytowpro.com:
  - **Tokens:** [src/index.css](src/index.css) — `:root` CSS variables: `--background`, `--foreground`, `--primary`, `--secondary`, `--card`, `--muted`, `--accent`, gradients (`--gradient-primary`, `--gradient-hero`, `--gradient-subtle`), shadows (`--shadow-orange`, `--shadow-blue`, `--shadow-elevated`), `--radius`.
  - **Tailwind:** [tailwind.config.ts](tailwind.config.ts) — semantic colors (`primary`, `secondary`, `accent`, `muted`, `card`, etc.), animations (`fade-in`, `fade-in-up`, `pulse-glow`, etc.).
  - **Components:** Reuse patterns from [Index.tsx](src/pages/Index.tsx) (Hero, WhyChooseUs, ServicesOverview, etc.) and existing landing components under [src/components/landing/](src/components/landing/) (TrustBar, StickyMobileCTA, etc.) so styling is consistent.
- **Result:** LPs use `bg-background`, `text-foreground`, `bg-primary`, `text-primary`, `gradient-hero`, etc., and match the dark professional theme of the Home page.

---

## URLs — Longer, Keyword-Rich Paths

- **Current (doc):** `/towing` and `/heavy-duty` (short).
- **Requirement:** Longer URLs with top campaign keywords in the path for relevance and clarity.
- **Proposed (to confirm):**
  - **C1 (Light & medium):**  
    `/towing/bay-area-flatbed-emergency-towing-24-7`  
    (keywords: bay area, flatbed, emergency towing, 24/7)
  - **C2 (Heavy duty):**  
    `/heavy-duty/semi-truck-rotator-recovery-bay-area`  
    (keywords: heavy duty, semi truck, rotator recovery, bay area)
- **Alternative C1:** `/bay-area-towing-flatbed-emergency-24-7`  
- **Alternative C2:** `/heavy-duty-towing-semi-truck-bay-area`
- **Action:** Finalise exact slugs with you if needed; then implement routes and update **Google Ads final URLs** (and any tracking templates) in the campaign import/editor to point to these new paths. Canonicals and schema `url` must use the same paths.

---

## Four-Phase Structure

| Phase | Focus | Goal |
|-------|--------|------|
| **1** | Light & medium towing | **Understand** — what needs to be done (audit, scope, design alignment, URL) |
| **2** | Light & medium towing | **Achieve** — build/refactor LP1 to spec using Home styling and keyword-rich URL |
| **3** | Heavy duty towing | **Understand** — what needs to be done (audit, scope, LP2 spec, URL) |
| **4** | Heavy duty towing | **Achieve** — build LP2 with dual CTA, fleet form, Home styling, keyword-rich URL |

---

## Phase 1 — Light & Medium Towing: Understand

**Goal:** Full clarity on scope, content, design, and URL for the C1 landing page before any build.

1. **Audit campaign and LP spec**
   - [Campaign - Cursor/Dev Context/HeavyTowPro_Master_Context.md](Campaign - Cursor/Dev Context/HeavyTowPro_Master_Context.md) — C1 ad groups, headlines, final URL intent.
   - [Campaign - Cursor/Landing Pages/HeavyTowPro_LP_Light_Medium_Duty.md](Campaign - Cursor/Landing Pages/HeavyTowPro_LP_Light_Medium_Duty.md) — all 12 sections, copy, CTAs, trust bar, FAQ.
   - [Campaign - Cursor/Dev Context/HeavyTowPro_Cursor_Prompts.md](Campaign - Cursor/Dev Context/HeavyTowPro_Cursor_Prompts.md) — LP1 prompts P1.1–P1.9 for section order and components (ignoring doc-only colors/fonts; using Home styling instead).

2. **Map to existing site**
   - [src/pages/Index.tsx](src/pages/Index.tsx) — Home layout, Hero, sections, Footer.
   - [src/pages/LandingLightMedium.tsx](src/pages/LandingLightMedium.tsx) — current `/towing-services` LP; which sections/copy to reuse vs replace.
   - [src/components/landing/](src/components/landing/) — TrustBar, StickyMobileCTA, CoverageMap, etc.; what to reuse and what to add.

3. **Design alignment**
   - Confirm: all C1 LP styling comes from [src/index.css](src/index.css) and [tailwind.config.ts](tailwind.config.ts) (no Campaign doc hex colors).
   - List any net-new components (e.g. specific hero variant, pricing table) and how they use `primary`, `secondary`, `background`, `card`, etc.

4. **URL and routing**
   - Choose final C1 path (e.g. `/towing/bay-area-flatbed-emergency-towing-24-7`).
   - Note: Google Ads C1 final URL and tracking template must be updated to this path; canonicals and schema on the page must match.

5. **Deliverable**
   - Short Phase 1 summary: sections to build/refactor, content source (LP markdown), design tokens to use, chosen C1 URL, and any gaps (e.g. imagery, copy tweaks).

---

## Phase 2 — Light & Medium Towing: Achieve

**Goal:** Ship the C1 landing page that matches the spec, Home styling, and keyword-rich URL.

1. **Route and page**
   - Add route for chosen C1 path (e.g. `/towing/bay-area-flatbed-emergency-towing-24-7`) pointing to the C1 LP page component.
   - Ensure meta title, description, canonical, and schema use the same URL.

2. **Sections and content**
   - Implement or refactor in order: Hero, Trust Bar, Services (6 cards), How It Works (3 steps), Testimonials, Coverage, Why Us, Pricing, FAQ (8), Secondary CTA, Guarantee, Sticky Call Bar.
   - Pull all copy from [HeavyTowPro_LP_Light_Medium_Duty.md](Campaign - Cursor/Landing Pages/HeavyTowPro_LP_Light_Medium_Duty.md); keep phone 650-881-2400 (and geo numbers where relevant) as `tel:` links only.

3. **Styling**
   - Use only Home design system: `bg-background`, `text-foreground`, `primary`, `secondary`, `card`, `muted`, `gradient-hero` / `gradient-primary`, `shadow-orange` / `shadow-blue` as appropriate.
   - Reuse Header/Footer and existing landing components; style new blocks to match Index and existing landing patterns.

4. **Conversion and tracking**
   - Sticky mobile CTA and all phone links: `tel:+16508812400` (and 510/408 where used).
   - Add call tracking (e.g. `gtag('event', 'phone_click', { campaign: 'C1' })`) and ensure Google Ads conversion/GTM setup can use the same URL.

5. **Deliverable**
   - C1 LP live on the chosen keyword-rich URL, matching spec and Home styling; ready for C1 campaign to point to it (after final URL update in Google Ads).

---

## Phase 3 — Heavy Duty Towing: Understand

**Goal:** Full clarity on scope, content, design, and URL for the C2 landing page before any build.

1. **Audit campaign and LP spec**
   - [HeavyTowPro_Master_Context.md](Campaign - Cursor/Dev Context/HeavyTowPro_Master_Context.md) — C2 ad groups, headlines, final URL intent.
   - [Campaign - Cursor/Landing Pages/HeavyTowPro_LP_Heavy_Duty.md](Campaign - Cursor/Landing Pages/HeavyTowPro_LP_Heavy_Duty.md) — all 12 sections, dual CTAs, fleet contract block, certifications, B2B FAQ, fleet quote form.
   - [HeavyTowPro_Cursor_Prompts.md](Campaign - Cursor/Dev Context/HeavyTowPro_Cursor_Prompts.md) — LP2 prompts P2.1–P2.4 (again, use Home styling, not doc colors).

2. **Map to existing site**
   - [src/pages/HeavyDuty.tsx](src/pages/HeavyDuty.tsx) — existing heavy-duty service page; what to reuse (e.g. certifications, FAQ) vs build fresh for the C2 LP.
   - Ensure C2 LP uses same design system as Home and C1 LP (Phase 2).

3. **Dual CTA and fleet form**
   - Every CTA zone: Call Now (primary) + Request Fleet Quote (secondary, e.g. scroll to `#fleet-quote`).
   - Fleet quote form: fields per LP doc (Company, Contact, Phone, Email, Fleet size, Service needed, Message); submit to `/api/fleet-quote` or external endpoint; fire conversion event on success.
   - Email: dispatch@heavytowpro.com visible where specified.

4. **URL and routing**
   - Choose final C2 path (e.g. `/heavy-duty/semi-truck-rotator-recovery-bay-area`).
   - Google Ads C2 final URL and tracking template must be updated to this path; canonicals and schema must match.

5. **Deliverable**
   - Short Phase 3 summary: sections to build, content source, design alignment, chosen C2 URL, fleet form spec, and conversion events.

---

## Phase 4 — Heavy Duty Towing: Achieve

**Goal:** Ship the C2 landing page with dual CTAs, fleet form, Home styling, and keyword-rich URL.

1. **Route and page**
   - Add route for chosen C2 path (e.g. `/heavy-duty/semi-truck-rotator-recovery-bay-area`).
   - Meta title, description, canonical, and schema (LocalBusiness + Service + FAQPage) for C2.

2. **Sections and content**
   - Implement: Hero (capability-first), Capability Stats Bar, Services (5 heavy-duty cards), Commercial Process (4 steps), Fleet Contracts, Certifications, B2B Testimonials, Coverage (corridors/hubs), Commercial FAQ (8), Dual CTA, Commercial Guarantee, Fleet Quote Form, Sticky Call Bar.
   - All copy from [HeavyTowPro_LP_Heavy_Duty.md](Campaign - Cursor/Landing Pages/HeavyTowPro_LP_Heavy_Duty.md); phones as `tel:` links only.

3. **Styling**
   - Same Home design system as Phase 2; C2 LP visually consistent with Home and C1 LP.

4. **Fleet form and conversion**
   - Form posts to agreed endpoint; success triggers `fleet_quote_submit` (and Google Ads conversion if configured).
   - Call buttons: `phone_click` with `campaign: 'C2'`.

5. **Deliverable**
   - C2 LP live on the chosen keyword-rich URL, matching spec and Home styling; ready for C2 campaign to point to it after final URL update in Google Ads.

---

## Phase 1 Deliverable

Phase 1 (Light & Medium: Understand) is complete. The detailed audit, component mapping, design alignment, and URL decision are in **[PHASE_1_DELIVERABLE.md](PHASE_1_DELIVERABLE.md)**. Use that document as the spec for Phase 2 (build).

---

## Summary of Changes vs Original Plan

| Aspect | Original | Updated |
|--------|----------|---------|
| **Colors/design** | Campaign doc palette (#1A3C6E, #E87722, etc.) | Existing Home page design system (index.css + tailwind theme) |
| **URLs** | Short: `/towing`, `/heavy-duty` | Longer, keyword-rich (e.g. `/towing/bay-area-flatbed-emergency-towing-24-7`, `/heavy-duty/semi-truck-rotator-recovery-bay-area`) |
| **Phases** | Single sequence (setup → LP1 → LP2 → shared) | 4 phases: 1 = Light/medium understand, 2 = Light/medium achieve, 3 = Heavy understand, 4 = Heavy achieve |

---

## Technical Notes (Unchanged)

- **Stack:** Existing React app (see [App.tsx](src/App.tsx)); add new routes for the chosen C1 and C2 paths.
- **Phones:** Never in ad copy; on site always `<a href="tel:...">`, never images.
- **Tracking:** UTM-friendly final URLs; conversion events for call clicks (C1/C2) and fleet form submit (C2).
- **Schema:** LocalBusiness, FAQPage (and Service where appropriate); canonicals match chosen keyword-rich URLs.
