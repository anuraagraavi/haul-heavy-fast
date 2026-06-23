# May 2026 Blog Execution Plan — Heavy Tow Pro

**Document date:** June 23, 2026  
**Site:** [https://heavytowpro.com](https://heavytowpro.com)  
**Binding standards:** [May SEO Updates.md](May%20SEO%20Updates.md) Section 18.2, [SEO_KEYWORD_TARGETING_GUIDE.md](SEO_KEYWORD_TARGETING_GUIDE.md), [GSC_INDEXING_PLAYBOOK.md](GSC_INDEXING_PLAYBOOK.md)

This is the operator and developer runbook for building, publishing, and indexing **20 localized May 2026 blog posts**. Research and cannibalization audit are complete; this document drives implementation.

---

## Table of contents

1. [Preconditions](#section-a--preconditions)
2. [Cannibalization guardrails](#section-b--cannibalization-guardrails)
3. [20-post calendar (full metadata)](#section-c--20-post-calendar)
4. [Linking blueprint](#section-d--linking-blueprint)
5. [E-E-A-T quality gate](#section-e--e-e-a-t-quality-gate)
6. [Technical implementation](#section-f--technical-implementation)
7. [Per-post QA checklist](#section-g--per-post-qa-checklist)
8. [GSC rollout (clustered)](#section-h--gsc-rollout)
9. [Publish schedule](#section-i--publish-schedule)

---

## Section A — Preconditions

Before shipping May content:

| Step | Action |
|------|--------|
| 1 | Confirm [May SEO Updates.md](May%20SEO%20Updates.md) technical work is **deployed to production** (strict prerender, segmented sitemaps, canonicals, `/thank-you` noindex). |
| 2 | Run GSC **Phase 0** on 5 URLs per [GSC_INDEXING_PLAYBOOK.md](GSC_INDEXING_PLAYBOOK.md): `/services/heavy-duty`, `/locations/san-mateo-county`, `/towing-oakland`, `/blog/emergency-towing-guide`, `/thank-you`. |
| 3 | Submit `https://heavytowpro.com/sitemap-index.xml` in GSC if not already submitted. |
| 4 | Optional P1: extend `postProcess()` in `scripts/prerender.cjs` to backfill `metaDescription` when shell default is detected on blog routes. |

**Why indexing-first:** ~86 URLs are "Discovered — currently not indexed." Adding 20 posts without deploy + GSC workflow risks more discovered-but-not-indexed URLs. May posts should **differentiate** (city-specific proof, official citations) and **cluster-publish** with indexing requests.

---

## Section B — Cannibalization guardrails

### Do-not-target primary keywords (owned by existing posts)

| Cluster | Do not re-target |
|---------|------------------|
| Freeway/corridor | `freeway towing Bay Area`, `US-101 breakdown towing Peninsula`, `I-880 accident recovery`, `bay area bridge stall towing` |
| EV/vehicle-type | `Tesla towing Bay Area`, `AWD flatbed towing`, `EV 12V battery towing`, `lowered car towing guide` |
| Commercial/fleet | `DOT out of service Bay Area`, `semi truck breakdown highway`, `food truck towing`, `fleet management towing` |
| Legal/impound | `get car out of impound Bay Area`, `predatory towing California`, `DUI impound California`, `apartment HOA towing rights` |
| SF-specific | `car towed San Francisco`, `towing cost San Francisco` |

### May post strategy

Use **city-specific informational** angles: airport release forms, tow hearings, corridor breakdown checklists, Caltrain pickup logistics, county vehicle release — not generic Bay Area head terms.

### Intent ownership (per keyword guide)

| Page type | Owns |
|-----------|------|
| `/towing-<city>` | "tow truck [City]" + hire-now / dispatch |
| `/blog/<slug>` | One informational query in `primaryKeyword` |
| `/services/*` | Service-type head terms |

---

## Section C — 20-post calendar

### Batch 1 — San Jose + San Mateo (May 1–10, 8 posts, 40%)

#### Post 1: `sjc-towed-vehicle-release-form`

| Field | Value |
|-------|-------|
| **publishDate** | 2026-05-01 |
| **metaTitle** | SJC Towed Vehicle Release Form \| San Jose Airport Guide |
| **metaDescription** | How to complete SJC towed vehicle release paperwork: IDs, fees process, and when to call dispatch. San Jose airport towing guide. |
| **primaryKeyword** | SJC towed vehicle release |
| **secondaryKeywords** | San Jose airport impound release, Mineta SJC towing form, fly San Jose vehicle pickup |
| **category** | Regulations & Compliance |
| **service link** | `/services/light-duty` |
| **location links** | `/towing-san-jose`, `/locations/santa-clara-county` |
| **relatedPosts** | `get-car-out-of-impound-bay-area`, `car-towed-san-francisco`, `how-to-choose-towing-company` |
| **inboundFrom** | `get-car-out-of-impound-bay-area`, `rideshare-driver-breakdown-towing-bay-area`, `ev-dead-12v-battery-towing-flatbed-guide` |
| **officialResources** | [flysanjose.com](https://www.flysanjose.com), [sjpd.org](https://www.sjpd.org) |
| **CTA** | Call dispatch |
| **H2 outline** | What the release form covers · Documents to bring · Airport vs city impound paths · When to request a tow out |

#### Post 2: `san-jose-tow-hearing-request`

| Field | Value |
|-------|-------|
| **publishDate** | 2026-05-02 |
| **metaTitle** | San Jose Tow Hearing Request \| How to File & What to Expect |
| **metaDescription** | Step-by-step San Jose tow hearing request guide: deadlines, evidence, and hearing process. Not legal advice—verify with SJPD. |
| **primaryKeyword** | San Jose tow hearing request |
| **secondaryKeywords** | SJPD tow hearing, dispute towing San Jose, California vehicle tow appeal |
| **category** | Regulations & Compliance |
| **service link** | `/contact` |
| **location links** | `/towing-san-jose` |
| **relatedPosts** | `predatory-towing-california-rights`, `get-car-out-of-impound-bay-area`, `apartment-hoa-towing-rights-california` |
| **inboundFrom** | `predatory-towing-california-rights`, `get-car-out-of-impound-bay-area` |
| **officialResources** | [sjpd.org](https://www.sjpd.org), [dmv.ca.gov](https://www.dmv.ca.gov) |
| **CTA** | Contact dispatch |
| **H2 outline** | When a hearing applies · Filing steps · Evidence checklist · After the hearing |

#### Post 3: `sjc-cell-phone-lot-towing-rules`

| Field | Value |
|-------|-------|
| **publishDate** | 2026-05-04 |
| **metaTitle** | SJC Cell Phone Lot Towing Rules \| Waiting Area Guide |
| **metaDescription** | SJC cell phone waiting lot towing rules: time limits, signage, and safe pickup. San Jose airport area light-duty towing. |
| **primaryKeyword** | SJC cell phone lot towing |
| **secondaryKeywords** | San Jose airport waiting lot, Mineta SJC parking enforcement, airport cell lot tow |
| **category** | SF Local Services |
| **service link** | `/services/light-duty` |
| **location links** | `/towing-san-jose` |
| **relatedPosts** | `rideshare-driver-breakdown-towing-bay-area`, `sjc-towed-vehicle-release-form`, `how-to-choose-towing-company` |
| **inboundFrom** | `rideshare-driver-breakdown-towing-bay-area` |
| **officialResources** | [flysanjose.com](https://www.flysanjose.com) |
| **CTA** | Call dispatch |
| **H2 outline** | Lot purpose and rules · Common tow triggers · Rideshare driver workflow · Coordinating pickup |

#### Post 4: `ca-87-breakdown-san-jose-guide`

| Field | Value |
|-------|-------|
| **publishDate** | 2026-05-05 |
| **metaTitle** | CA-87 Breakdown San Jose \| Freeway Safety & Tow Dispatch |
| **metaDescription** | CA-87 breakdown guide for San Jose: shoulder safety, mile markers, and light-duty tow dispatch on the Guadalupe Parkway. |
| **primaryKeyword** | CA-87 breakdown San Jose |
| **secondaryKeywords** | Guadalupe Parkway towing, San Jose freeway breakdown, CA 87 shoulder safety |
| **category** | Emergency Response |
| **service link** | `/services/light-duty` |
| **location links** | `/towing-san-jose` |
| **relatedPosts** | `freeway-towing-bay-area`, `chp-towing-california`, `what-to-do-after-car-accident-bay-area` |
| **inboundFrom** | `freeway-towing-bay-area`, `us-101-peninsula-freeway-breakdown-guide` |
| **officialResources** | [dot.ca.gov](https://dot.ca.gov), [511.org](https://511.org) |
| **CTA** | Call dispatch |
| **H2 outline** | CA-87 corridor context · Scene safety · Location details for dispatch · Tow method basics |

#### Post 5: `san-mateo-county-vehicle-release`

| Field | Value |
|-------|-------|
| **publishDate** | 2026-05-06 |
| **metaTitle** | San Mateo County Vehicle Release \| Impound Pickup Guide |
| **metaDescription** | San Mateo County vehicle release requirements: ID, lien paperwork, and storage lot coordination. Verify fees with the impound facility. |
| **primaryKeyword** | San Mateo County vehicle release |
| **secondaryKeywords** | SMC impound release, San Mateo tow yard pickup, Peninsula vehicle release |
| **category** | Regulations & Compliance |
| **service link** | `/contact` |
| **location links** | `/towing-san-mateo`, `/locations/san-mateo-county` |
| **relatedPosts** | `get-car-out-of-impound-bay-area`, `predatory-towing-california-rights`, `car-towed-san-francisco` |
| **inboundFrom** | `get-car-out-of-impound-bay-area`, `us-101-peninsula-freeway-breakdown-guide` |
| **officialResources** | [smcsheriff.org](https://www.smcsheriff.org) |
| **CTA** | Contact |
| **H2 outline** | County vs city impound · Release documents · Timing and appointments · Dispute paths |

#### Post 6: `ca-92-breakdown-san-mateo-towing`

| Field | Value |
|-------|-------|
| **publishDate** | 2026-05-07 |
| **metaTitle** | CA-92 Breakdown San Mateo \| Tow Truck Dispatch Guide |
| **metaDescription** | CA-92 breakdown towing near San Mateo: J. Arthur Younger Bridge approaches, safety, and dispatch details for light-duty recovery. |
| **primaryKeyword** | CA-92 breakdown San Mateo |
| **secondaryKeywords** | San Mateo bridge corridor towing, Highway 92 shoulder breakdown, Peninsula 92 tow |
| **category** | Emergency Response |
| **service link** | `/services/light-duty` |
| **location links** | `/towing-san-mateo` |
| **relatedPosts** | `bay-area-bridge-stall-towing-guide`, `freeway-towing-bay-area`, `us-101-peninsula-freeway-breakdown-guide` |
| **inboundFrom** | `bay-area-bridge-stall-towing-guide`, `us-101-peninsula-freeway-breakdown-guide` |
| **officialResources** | [dot.ca.gov](https://dot.ca.gov), [511.org](https://511.org) |
| **CTA** | Call dispatch |
| **H2 outline** | CA-92 geography · Breakdown safety · Dispatch information · Bridge vs surface staging |

#### Post 7: `san-mateo-caltrain-tow-truck-pickup`

| Field | Value |
|-------|-------|
| **publishDate** | 2026-05-08 |
| **metaTitle** | Caltrain San Mateo Tow Pickup \| Station Area Recovery |
| **metaDescription** | Safe tow truck pickup near Caltrain San Mateo station: parking rules, kiss-and-ride zones, and light-duty dispatch coordination. |
| **primaryKeyword** | Caltrain San Mateo tow pickup |
| **secondaryKeywords** | San Mateo station towing, downtown San Mateo breakdown, Caltrain parking tow |
| **category** | SF Local Services |
| **service link** | `/services/light-duty` |
| **location links** | `/towing-san-mateo` |
| **relatedPosts** | `rideshare-driver-breakdown-towing-bay-area`, `how-to-choose-towing-company`, `flatbed-vs-wheel-lift-towing` |
| **inboundFrom** | `rideshare-driver-breakdown-towing-bay-area` |
| **officialResources** | [caltrain.com](https://www.caltrain.com), [cityofsanmateo.org](https://www.cityofsanmateo.org) |
| **CTA** | Call dispatch |
| **H2 outline** | Station area constraints · Parking enforcement context · Pickup coordination · Flatbed when needed |

#### Post 8: `flatbed-ev-towing-san-mateo-checklist`

| Field | Value |
|-------|-------|
| **publishDate** | 2026-05-10 |
| **metaTitle** | Flatbed EV Towing San Mateo \| Pre-Tow Checklist |
| **metaDescription** | San Mateo EV flatbed towing checklist: tow mode, 12V status, and dispatch details. Complements—not replaces—Tesla-specific guides. |
| **primaryKeyword** | flatbed EV towing San Mateo |
| **secondaryKeywords** | San Mateo electric vehicle tow, Peninsula EV flatbed, AWD EV transport San Mateo |
| **category** | Specialized Services |
| **service link** | `/services/light-duty` |
| **location links** | `/towing-san-mateo`, `/locations/san-mateo-county` |
| **relatedPosts** | `ev-dead-12v-battery-towing-flatbed-guide`, `awd-4wd-towing-guide-flatbed`, `electric-vehicle-towing-guide` |
| **inboundFrom** | `ev-dead-12v-battery-towing-flatbed-guide`, `awd-4wd-towing-guide-flatbed` |
| **officialResources** | [rivian.com/support/towing](https://rivian.com/support/towing) |
| **CTA** | Get a quote |
| **H2 outline** | Why flatbed-first locally · Pre-dispatch checklist · Peninsula garage/curb constraints · Documentation |

---

### Batch 2 — East Bay + airports (May 11–20, 6 posts)

#### Post 9: `oakland-towed-vehicle-how-to-get-back`

| Field | Value |
|-------|-------|
| **publishDate** | 2026-05-11 |
| **primaryKeyword** | Oakland towed vehicle release |
| **service link** | `/contact` |
| **location links** | `/towing-oakland` |
| **relatedPosts** | `get-car-out-of-impound-bay-area`, `predatory-towing-california-rights`, `car-towed-san-francisco` |
| **inboundFrom** | `get-car-out-of-impound-bay-area`, `i-880-bay-area-interstate-accident-recovery` |
| **officialResources** | [oaklandca.gov](https://www.oaklandca.gov) |

#### Post 10: `oakland-tow-hearing-request`

| Field | Value |
|-------|-------|
| **publishDate** | 2026-05-13 |
| **primaryKeyword** | Oakland tow hearing request |
| **service link** | `/contact` |
| **location links** | `/towing-oakland` |
| **relatedPosts** | `predatory-towing-california-rights`, `san-jose-tow-hearing-request`, `apartment-hoa-towing-rights-california` |
| **officialResources** | [oaklandca.gov](https://www.oaklandca.gov) |

#### Post 11: `sfo-vehicle-towed-what-to-do`

| Field | Value |
|-------|-------|
| **publishDate** | 2026-05-15 |
| **primaryKeyword** | SFO vehicle towed what to do |
| **service link** | `/services/light-duty` |
| **location links** | `/towing-san-francisco` |
| **relatedPosts** | `car-towed-san-francisco`, `sjc-towed-vehicle-release-form`, `get-car-out-of-impound-bay-area` |
| **officialResources** | [flysfo.com](https://www.flysfo.com) |

#### Post 12: `511-freeway-assist-vs-tow-truck-bay-area`

| Field | Value |
|-------|-------|
| **publishDate** | 2026-05-17 |
| **primaryKeyword** | 511 Freeway Assist vs tow truck Bay Area |
| **service link** | `/services/light-duty` |
| **location links** | `/locations` |
| **relatedPosts** | `freeway-towing-bay-area`, `chp-towing-california`, `roadside-assistance-vs-towing` |
| **inboundFrom** | `freeway-towing-bay-area`, `roadside-assistance-vs-towing` |
| **officialResources** | [511.org](https://511.org), [fsp-bayarea.org](https://www.fsp-bayarea.org) |

#### Post 13: `fremont-bridge-corridor-breakdown-towing`

| Field | Value |
|-------|-------|
| **publishDate** | 2026-05-18 |
| **primaryKeyword** | Fremont bridge corridor breakdown towing |
| **service link** | `/services/medium-duty` |
| **location links** | `/towing-fremont` |
| **relatedPosts** | `bay-area-bridge-stall-towing-guide`, `i-880-bay-area-interstate-accident-recovery`, `freeway-towing-bay-area` |
| **officialResources** | [dot.ca.gov](https://dot.ca.gov) |

#### Post 14: `i-880-breakdown-hayward-guide`

| Field | Value |
|-------|-------|
| **publishDate** | 2026-05-20 |
| **primaryKeyword** | I-880 breakdown Hayward |
| **service link** | `/services/light-duty` |
| **location links** | `/towing-hayward` |
| **relatedPosts** | `i-880-bay-area-interstate-accident-recovery`, `freeway-towing-bay-area`, `chp-towing-california` |
| **inboundFrom** | `i-880-bay-area-interstate-accident-recovery` |
| **officialResources** | [chp.ca.gov](https://www.chp.ca.gov), [511.org](https://511.org) |

---

### Batch 3 — Peninsula + Contra Costa (May 21–28, 5 posts)

#### Post 15: `i-680-breakdown-walnut-creek-checklist`

| **publishDate** | 2026-05-21 | **primaryKeyword** | I-680 breakdown Walnut Creek |
| **service** | `/services/light-duty` | **location** | `/towing-walnut-creek` |

#### Post 16: `delivery-van-towing-concord-ca`

| **publishDate** | 2026-05-23 | **primaryKeyword** | delivery van towing Concord CA |
| **service** | `/services/medium-duty` | **location** | `/towing-concord` |

#### Post 17: `low-clearance-garage-towing-palo-alto`

| **publishDate** | 2026-05-25 | **primaryKeyword** | low clearance garage towing Palo Alto |
| **service** | `/services/light-duty` | **location** | `/towing-palo-alto` |

#### Post 18: `tow-truck-mountain-view-shoreline`

| **publishDate** | 2026-05-26 | **primaryKeyword** | Mountain View Shoreline towing |
| **service** | `/services/light-duty` | **location** | `/towing-mountain-view` |
| **officialResources** | [mountainview.gov](https://www.mountainview.gov) |

#### Post 19: `commercial-towing-redwood-city-seaport`

| **publishDate** | 2026-05-28 | **primaryKeyword** | Redwood City Seaport commercial towing |
| **service** | `/services/medium-duty` | **location** | `/towing-redwood-city` |

---

### Batch 4 — Stockton (May 29, 1 post)

#### Post 20: `stockton-towing-dispatch-checklist`

| Field | Value |
|-------|-------|
| **publishDate** | 2026-05-29 |
| **primaryKeyword** | Stockton towing dispatch checklist |
| **service link** | `/services/heavy-duty` |
| **location links** | `/towing-stockton` |
| **relatedPosts** | `semi-truck-breakdown-highway-guide`, `fleet-management-towing`, `how-to-choose-towing-company` |

---

## Section D — Linking blueprint

### Per-post rules (Section 18.2)

| Element | Rule |
|---------|------|
| Body inline links | **1** service link via `L()` in intro or first section |
| `serviceAreas` | **1–2** localized city/county links only |
| `relatedServices` | 3–4 footer entries (service + quote/contact) |
| `relatedPosts` | 3 existing pillar slugs |
| Outbound | **1–3** in `officialResources` |
| Forbidden | `/thank-you`, `?category=` breadcrumb URLs |

### Inbound wiring (after each batch)

| Target | Source updates |
|--------|----------------|
| SJ/SM May posts | `relatedPosts` on `get-car-out-of-impound-bay-area`, `freeway-towing-bay-area`, `ev-dead-12v-battery-towing-flatbed-guide`, `rideshare-driver-breakdown-towing-bay-area`, `us-101-peninsula-freeway-breakdown-guide` |
| East Bay posts | `i-880-bay-area-interstate-accident-recovery`, `get-car-out-of-impound-bay-area` |
| `/towing-san-jose` | `relatedGuides`: `sjc-towed-vehicle-release-form`, `ca-87-breakdown-san-jose-guide`, `san-jose-tow-hearing-request` |
| `/towing-san-mateo` | `relatedGuides`: `san-mateo-county-vehicle-release`, `ca-92-breakdown-san-mateo-towing`, `flatbed-ev-towing-san-mateo-checklist` |

---

## Section E — E-E-A-T quality gate

Before marking any post done:

- [ ] **Source pack** documented (official URLs in `officialResources`)
- [ ] **No invented** fees, ETAs, legal outcomes, or guarantee language
- [ ] **Legal disclaimers** on impound/hearing posts ("not legal advice; verify with agency")
- [ ] **Experience signals**: dispatch questions, safety sequencing, documentation steps
- [ ] **≥800 words** in rendered content (sections + enrich defaults)
- [ ] **Unique** `metaTitle` and `metaDescription` (150–160 chars)
- [ ] **Outbound links** use `rel="noopener noreferrer"` (template handles this)

---

## Section F — Technical implementation

### File touch map

| Adding… | Edit |
|---------|------|
| Blog post | `src/data/may2026BlogPosts.ts`, `src/pages/blog/<slug>.tsx`, `src/data/blogRegistry.ts`, `public/sitemap.xml` |
| Route | `src/App.tsx` lazy import + `<Route>` |
| Location inbound | `src/data/locations/cities/*.ts` `relatedGuides`, `CityTemplate.tsx` |

### Build pipeline

```bash
npm run build
# Verify: dist/blog/<slug>/index.html exists
# Verify: title, canonical, description in static HTML
# Verify: post appears in public/sitemap-blog.xml
```

### Code modules

- **Data:** `src/data/may2026BlogPosts.ts` — 20 `CohortBlogPostConfig` entries + `getMay2026BlogPost()`
- **Template:** `CohortBlogPostPage` — `officialResources` block + external `<a>` for `http` hrefs
- **Types:** `cohortBlog.ts` — `OfficialResourceLink`, `officialResources?`

---

## Section G — Per-post QA checklist

Copy for each slug:

```
[ ] slug matches URL /blog/<slug>
[ ] metaDescription unique (150–160 chars)
[ ] canonicalUrl = https://heavytowpro.com/blog/<slug>
[ ] npm run build → dist/blog/<slug>/index.html exists
[ ] Prerendered HTML: title + description not shell defaults
[ ] Listed in public/sitemap-blog.xml
[ ] BreadcrumbList: Home → Blog → Post (3 items)
[ ] Word count ≥ 800
[ ] FAQ count ≥ 4
[ ] 1 service + 1–2 location links in data
[ ] officialResources has 1–3 .gov/official URLs
[ ] No /thank-you links
```

---

## Section H — GSC rollout

### Operator checklist (cannot be automated)

**Pre-batch:**
- [ ] Production deploy includes latest build
- [ ] `sitemap-index.xml` submitted in GSC

**After each batch deploy:**

| URL group | Action |
|-----------|--------|
| Each new `/blog/<slug>` | URL Inspection → Request Indexing **once** |
| Priority money pages | Request indexing for `/towing-san-jose`, `/towing-san-mateo` if not indexed |
| Week 3+ | If "Discovered" persists, add inbound from `/blog` index + location `relatedGuides` |

**Monitor weekly (first month):**
- GSC → Sitemaps → `sitemap-blog.xml` discovered vs indexed counts
- Record lagging segment; apply freshness updates to 5–10 stuck URLs/month

### Priority crawl list (first 20 URLs)

1. `/towing-san-jose`
2. `/towing-san-mateo`
3. `/locations/santa-clara-county`
4. `/locations/san-mateo-county`
5–12. Batch 1 blog slugs (8)
13. `/towing-oakland`
14. `511-freeway-assist-vs-tow-truck-bay-area`
15–20. Remaining high-impression city pages as needed

---

## Section I — Publish schedule

| Window | Batch | Count | publishDate range |
|--------|-------|-------|-------------------|
| May 1–10 | San Jose + San Mateo | 8 | 2026-05-01 → 2026-05-10 |
| May 11–20 | East Bay + airports | 6 | 2026-05-11 → 2026-05-20 |
| May 21–28 | Peninsula + Contra Costa | 5 | 2026-05-21 → 2026-05-28 |
| May 29–31 | Stockton | 1 | 2026-05-29 |

Deploy and run GSC indexing **per batch**, not all 20 at once.

---

*End of May 2026 Blog Execution Plan.*
