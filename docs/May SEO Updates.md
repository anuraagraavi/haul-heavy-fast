# May SEO Updates — Heavy Tow Pro (`heavytowpro.com`)

**Document date:** June 23, 2026  
**Site:** [https://heavytowpro.com](https://heavytowpro.com)  
**Stack:** Vite + React Router SPA, `react-helmet-async`, post-build Puppeteer prerender, Netlify static hosting  
**Primary GSC symptom addressed:** ~86 URLs in **“Discovered — currently not indexed”** vs ~9 indexed  

This document is the authoritative record of the SEO/indexing remediation work performed in this repository. It lists every change, every touched file, verification results, operational reports, code volume, per-activity benefits, known gaps, and the **new normal** checklist for future pages (especially blog posts).

---

## Table of contents

1. [Executive summary](#1-executive-summary)
2. [Quality check report (June 23, 2026)](#2-quality-check-report-june-23-2026)
3. [Root cause analysis (why indexing stalled)](#3-root-cause-analysis-why-indexing-stalled)
4. [Workstream 1 — Prerender reliability & static HTML coverage](#4-workstream-1--prerender-reliability--static-html-coverage)
5. [Workstream 2 — Real 404 handling (soft-404 fix)](#5-workstream-2--real-404-handling-soft-404-fix)
6. [Workstream 3 — Segmented XML sitemaps](#6-workstream-3--segmented-xml-sitemaps)
7. [Workstream 4 — Canonical & metadata normalization](#7-workstream-4--canonical--metadata-normalization)
8. [Workstream 5 — `/thank-you` crawl-budget hygiene](#8-workstream-5--thank-you-crawl-budget-hygiene)
9. [Workstream 6 — Structured data / internal linking (BreadcrumbList)](#9-workstream-6--structured-data--internal-linking-breadcrumblist)
10. [Workstream 7 — Blog schema cleanup (thin-duplicate risk)](#10-workstream-7--blog-schema-cleanup-thin-duplicate-risk)
11. [Workstream 8 — Shell `index.html` default meta alignment](#11-workstream-8--shell-indexhtml-default-meta-alignment)
12. [Workstream 9 — Operational reports & playbooks](#12-workstream-9--operational-reports--playbooks)
13. [Build pipeline changes](#13-build-pipeline-changes)
14. [Code volume & file inventory](#14-code-volume--file-inventory)
15. [Verification matrix (automated checks run)](#15-verification-matrix-automated-checks-run)
16. [Known gaps & recommended follow-ups](#16-known-gaps--recommended-follow-ups)
17. [Post-deploy GSC actions (operator checklist)](#17-post-deploy-gsc-actions-operator-checklist)
18. [New normal — SEO checklist for every new page & blog post](#18-new-normal--seo-checklist-for-every-new-page--blog-post)

---

## 1. Executive summary

### What we did

We implemented a **six-workstream SEO remediation plan** focused on fixing technical prerequisites that prevent Google from confidently indexing ~100+ programmatic URLs (locations, services, blog). The work does **not** guarantee instant indexing — “Discovered — currently not indexed” is often a **quality/crawl-budget** signal — but it removes the highest-risk technical blockers:

| Area | Outcome |
|------|---------|
| **Prerender** | 102 routes prerendered; build **fails** if prerender breaks (strict mode) |
| **Sitemap ↔ HTML parity** | 101 sitemap URLs + `/thank-you` (noindex) = 102 static HTML files; **0 missing** |
| **Sitemaps** | `sitemap-index.xml` + 4 segments (pages, services, locations, blog) |
| **Canonicals** | Relative canonicals fixed on utility pages; shared `absoluteUrl()` helper |
| **Utility pages** | `/thank-you` removed from sitemap, still prerendered with `noindex` |
| **404** | `dist/404.html` emitted with `noindex` for Netlify real 404 responses |
| **Schema** | BreadcrumbList JSON-LD on locations hub, city, county templates |
| **Blog** | Removed parameterized category URL from breadcrumb schema |
| **Docs** | GSC indexing playbook + keyword targeting guide |

### What we did **not** do (out of scope for this pass)

- Live production URL Inspection in GSC (requires deploy + manual operator steps)
- Exhaustive HTML sitemap page listing all 101 URLs
- Per-city unique meta description guarantee in prerender fallback layer
- Content rewrites across 31 location pages or 56 blog posts
- Core Web Vitals performance optimization (bundle size warnings remain)

---

## 2. Quality check report (June 23, 2026)

Quality check was re-run immediately before this document was written.

### 2.1 Build & prerender

| Check | Result | Evidence |
|-------|--------|----------|
| `npm run build` completes | **PASS** | Exit code 0; `[prerender] Starting 102 route(s)` → `Completed` |
| Prerender route count | **PASS** | 102 routes (101 sitemap + `/thank-you`) |
| Strict prerender default | **PASS** | `PRERENDER_STRICT !== "false"` → build aborts on failure |
| Windows `taskkill` warning | **WARN** (non-fatal) | Puppeteer cleanup logs `'taskkill' is not recognized` on Windows |
| Bundle size > 500 kB | **WARN** (pre-existing) | Rollup chunk warning for `index-*.js` |

### 2.2 Sitemap ↔ prerender parity

| Check | Result | Evidence |
|-------|--------|----------|
| URLs in `public/sitemap.xml` | **PASS** | 101 URLs |
| Missing `dist/<route>/index.html` for sitemap URLs | **PASS** | 0 missing |
| `/thank-you` prerender exists | **PASS** | `dist/thank-you/index.html` present |
| `dist/404.html` exists | **PASS** | Written by `inject-hero-preload.cjs` |

### 2.3 Segmented sitemaps

| Segment file | URL count | In `sitemap-index.xml` |
|--------------|-----------|------------------------|
| `sitemap-pages.xml` | 7 | Yes |
| `sitemap-services.xml` | 7 | Yes |
| `sitemap-locations.xml` | 31 | Yes |
| `sitemap-blog.xml` | 56 | Yes |
| **Total** | **101** | 4 segments |

| Check | Result | Notes |
|-------|--------|-------|
| Sum of segments = source sitemap | **PASS** | 7+7+31+56 = 101 |
| Stale `sitemap-other.xml` | **FIXED** | Previously contained `/thank-you` after removal from source; generator now **deletes** empty `sitemap-other.xml` |
| `robots.txt` points to index | **PASS** | `Sitemap: https://heavytowpro.com/sitemap-index.xml` |

### 2.4 Metadata spot-check (prerendered HTML)

| URL | Title unique? | Canonical absolute? | Robots | BreadcrumbList |
|-----|---------------|---------------------|--------|----------------|
| `/towing-oakland` | **PASS** — “Oakland Towing & Recovery \| Port, 880 & Flatbed Fleet” | **PASS** — `https://heavytowpro.com/towing-oakland` | indexable (none) | **PASS** |
| `/services/heavy-duty` | **PASS** — heavy-duty specific title | **PASS** | indexable | N/A in spot-check |
| `/thank-you` | **PASS** | **PASS** | **PASS** — `noindex, nofollow` | N/A |
| `/404.html` (shell) | **PASS** — “Page Not Found (404)” | Homepage canonical (acceptable for 404 shell) | **PASS** — `noindex, nofollow` | N/A |

### 2.5 Metadata gaps found in QC

| Issue | Severity | Detail |
|-------|----------|--------|
| Generic meta **description** in some prerendered pages | **Medium** | Oakland has unique **title** but prerendered **description** may still show site-wide default if Helmet description does not flush before Puppeteer capture. `routeMeta()` in `prerender.cjs` only backfills title for non-blog/non-city routes, not description. |
| `dist/404.html` content | **Low** | Copied from homepage build shell, not React `NotFound` component. HTTP status is correct (404); body may look like homepage until JS runs. |
| Relative canonicals remaining | **PASS** | Grep for `rel="canonical" href="/` in `src/**/*.tsx` → **0 matches** |
| Hash redirects in `public/_redirects` | **Low** | Server-side hash fragments (`/locations#san-francisco`) do not work; client-side redirect in `Locations.tsx` handles this after hydration only. |
| HTML sitemap page (`/sitemap`) | **Low** | Curated subset of links, not exhaustive 101-URL index. |
| Production live check | **Not run** | Requires Netlify deploy; local `dist/` verified only. |

### 2.6 Overall QC verdict

**Technical prerequisites: READY FOR DEPLOY** with documented medium/low follow-ups. Indexing improvement depends on deploy + GSC workflow (Section 17) and ongoing content differentiation on location/blog templates.

---

## 3. Root cause analysis (why indexing stalled)

### Observed in Google Search Console

- ~9 URLs indexed
- ~86 URLs **“Discovered — currently not indexed”**
- Mix across locations, blog posts, and some service pages

### Interpretation

“Discovered — currently not indexed” means Google **knows the URL exists** (sitemap, internal links, past crawls) but is **not spending render/index budget** yet. Common combined causes for this site:

1. **SPA + prerender dependency** — If prerender fails silently or deploy serves empty shell, Google sees thin/duplicate HTML across routes.
2. **Template similarity** — 31 city pages + 56 blog posts share structure; without strong unique signals, Google deprioritizes.
3. **Crawl budget noise** — Utility URLs (e.g. `/thank-you`) in sitemap waste discovery slots.
4. **Soft 404 risk** — Netlify `/* /index.html 200` without `404.html` can make unknown URLs return 200 + empty shell.
5. **Relative canonicals** — Some utility pages used `href="/path"` instead of absolute URLs, weakening canonical consolidation.

This implementation pass fixes **#1, #3, #4, #5** in code and documents workflows for **#2**.

---

## 4. Workstream 1 — Prerender reliability & static HTML coverage

### 4.1 Problem

Previously, prerender failures could be swallowed and the build would still succeed, shipping an SPA shell for routes Google expects to be fully rendered static HTML.

### 4.2 Files changed

| File | Change type | Lines changed |
|------|-------------|---------------|
| `scripts/prerender.cjs` | Modified | +11 / −3 (net +8) |

### 4.3 Specific code changes

**A. Strict mode (default on)**

```javascript
const strict = process.env.PRERENDER_STRICT !== "false";
// ...
if (strict) {
  console.error("[prerender] Failed (strict mode), aborting build:", msg);
  process.exit(1);
}
```

- **Before:** Prerender failure could log a warning and continue.
- **After:** Build exits with code 1 unless `PRERENDER_STRICT=false`.
- **Benefit:** Prevents deploying a broken indexing surface. CI/build becomes a gate.

**B. Always prerender `/thank-you`**

```javascript
const always = ["/thank-you"];
return Array.from(new Set([...parsed, ...always]));
```

- **Before:** Only routes in `sitemap.xml` were prerendered.
- **After:** `/thank-you` gets static HTML even after sitemap removal.
- **Benefit:** `noindex` is present in **initial HTML** without relying on client-side Helmet after JS execution.

**C. Existing capabilities retained**

- `PRERENDER_ROUTES` — comma-separated subset for dev iteration
- `PRERENDER_ROUTE_LIMIT` — cap routes for faster local builds
- `PRERENDER_WAIT_MODE` — `time` (default), `element`, or `event` (`prerender-ready`)
- `postProcess()` — injects title/canonical/description fallbacks when shell defaults detected
- Empty `#root` warning logged per route

### 4.4 Benefits

| Stakeholder | Benefit |
|-------------|---------|
| **Googlebot** | Receives full HTML per URL at crawl time (no JS required for core content/meta) |
| **DevOps** | Failed prerender = failed build; no silent regressions |
| **SEO operator** | 102 deterministic static files map 1:1 to important routes |

### 4.5 Verification

- Build log: `[prerender] Starting 102 route(s).` → `[prerender] Completed.`
- 0 missing HTML files for sitemap URLs

---

## 5. Workstream 2 — Real 404 handling (soft-404 fix)

### 5.1 Problem

Netlify SPA fallback (`public/_redirects`: `/* /index.html 200`) serves the homepage shell with HTTP 200 for unknown paths. Google may classify these as **soft 404s**, polluting crawl signals.

### 5.2 Files changed

| File | Change type | Lines changed |
|------|-------------|---------------|
| `scripts/inject-hero-preload.cjs` | Modified | +25 / −5 (net +20) |

### 5.3 Specific code changes

After build, the script now:

1. Continues to inject LCP hero image preload into `dist/index.html` (existing behavior).
2. **Writes `dist/404.html`** if missing, by copying the built index shell and:
   - Injecting `<meta name="robots" content="noindex, nofollow">`
   - Replacing `<title>` with `Page Not Found (404) | Heavy Tow Pro`

Netlify automatically serves `/404.html` with HTTP **404** for unknown routes when the file exists.

### 5.4 Benefits

| Area | Benefit |
|------|---------|
| **Crawl quality** | Unknown URLs return real 404 status, not fake 200 |
| **Index hygiene** | 404 page marked noindex — won't compete for rankings |
| **GSC Coverage** | Reduces “crawled — currently not indexed” noise from garbage URLs |

### 5.5 Limitation (QC note)

Body content is still the SPA shell (homepage-like until React mounts). Status code and robots directive are correct; full branded 404 content would require prerendering the `NotFound` route separately.

---

## 6. Workstream 3 — Segmented XML sitemaps

### 6.1 Problem

A single 101-URL `sitemap.xml` makes it harder to diagnose which **page type** is stuck in GSC and to reason about crawl prioritization (services vs locations vs blog).

### 6.2 Files changed / created

| File | Status | Purpose |
|------|--------|---------|
| `scripts/generate-segmented-sitemaps.cjs` | **NEW** (147 lines) | Build-time generator |
| `public/sitemap-index.xml` | **NEW** (generated) | Submit this to GSC |
| `public/sitemap-pages.xml` | **NEW** (generated) | Core pages |
| `public/sitemap-services.xml` | **NEW** (generated) | Service URLs |
| `public/sitemap-locations.xml` | **NEW** (generated) | County + city URLs |
| `public/sitemap-blog.xml` | **NEW** (generated) | Blog index + posts |
| `public/sitemap.xml` | Modified (−1 URL) | Source of truth (101 URLs) |
| `public/robots.txt` | Modified (+1 line) | Declares `sitemap-index.xml` |
| `package.json` | Modified | Generator runs first in `build` |

### 6.3 Segmentation rules (`groupForUrl`)

| Group | Path patterns | Count |
|-------|---------------|-------|
| **pages** | `/`, `/about`, `/contact`, `/get-a-quote`, `/privacy-policy`, `/terms`, `/sitemap` | 7 |
| **services** | `/services`, `/services/*`, `/towing-services`, `/towing/*` | 7 |
| **locations** | `/locations`, `/locations/*`, `/towing-*` (city pages) | 31 |
| **blog** | `/blog`, `/blog/*` | 56 |
| **other** | Anything else | 0 (catch-all file deleted when empty) |

### 6.4 Generator behavior

- Reads **`public/sitemap.xml`** as single source of truth
- Preserves existing `<lastmod>` from source where present (blog posts)
- Stamps today's date for URLs without `lastmod`
- Writes segment files + `sitemap-index.xml`
- **Deletes** `sitemap-other.xml` when the "other" group is empty (QC fix applied June 23)

### 6.5 Benefits

| Activity | Benefit |
|----------|---------|
| **GSC Sitemaps report** | See discovered/indexed counts **per segment** |
| **Debugging** | If only `sitemap-locations.xml` is stuck, focus on location template quality |
| **Scale** | As blog grows, blog segment can be split further without touching other groups |
| **Crawl hints** | Cleaner organization signals site structure to search engines |

### 6.6 Operator note

`robots.txt` lists **both** `sitemap.xml` and `sitemap-index.xml`. This is intentional backward compatibility. **Primary GSC submission:** `sitemap-index.xml` only (avoid redundant processing).

---

## 7. Workstream 4 — Canonical & metadata normalization

### 7.1 Problem

Several utility pages used **relative** canonical URLs (`href="/privacy-policy"`). Google prefers **absolute** canonicals, especially for SPAs where the initial shell may not match the routed page.

### 7.2 Files changed / created

| File | Status | Change |
|------|--------|--------|
| `src/lib/seo.ts` | **NEW** (9 lines) | `SITE_URL`, `absoluteUrl()` |
| `src/pages/Privacy.tsx` | Modified | `absoluteUrl("/privacy-policy")` |
| `src/pages/Terms.tsx` | Modified | `absoluteUrl("/terms")` |
| `src/pages/Sitemap.tsx` | Modified | `absoluteUrl("/sitemap")` |
| `src/pages/BlogOld.tsx` | Modified | `absoluteUrl("/blog")` |
| `src/pages/ThankYou.tsx` | Modified | `absoluteUrl("/thank-you")` |

### 7.3 `src/lib/seo.ts` (full new module)

```typescript
export const SITE_URL = "https://heavytowpro.com";

export function absoluteUrl(pathname: string): string {
  if (!pathname) return SITE_URL;
  if (pathname.startsWith("http://") || pathname.startsWith("https://")) return pathname;
  if (!pathname.startsWith("/")) return `${SITE_URL}/${pathname}`;
  return `${SITE_URL}${pathname}`;
}
```

### 7.4 Pages already using absolute canonicals (unchanged this pass)

These were already correct before this work:

- Location city/county templates (`canonicalUrl = BASE_URL + data.url`)
- Blog posts via `data.canonicalUrl` in `BlogSchemas.tsx`
- `Locations.tsx` hub — `https://heavytowpro.com/locations` (hardcoded absolute)
- Service pages (existing patterns)

### 7.5 Benefits

| Page type | Benefit |
|-----------|---------|
| **Utility/legal** | Canonical consolidation to production domain |
| **Future pages** | Import `absoluteUrl()` — one pattern, no drift |
| **GSC URL Inspection** | “User-declared canonical” should match live URL |
| **Cross-environment** | Avoids accidental canonical to staging/preview if path-only |

---

## 8. Workstream 5 — `/thank-you` crawl-budget hygiene

### 8.1 Problem

`/thank-you` is a **conversion utility page** (forms redirect here). It should not be indexed or consume crawl budget, but it must exist for Google Ads conversion tracking.

### 8.2 Files changed

| File | Change |
|------|--------|
| `public/sitemap.xml` | Removed `<loc>https://heavytowpro.com/thank-you</loc>` |
| `src/pages/ThankYou.tsx` | Added canonical + `noindex, nofollow` |
| `scripts/prerender.cjs` | Always includes `/thank-you` in prerender routes |

### 8.3 Resulting behavior

| Layer | Behavior |
|-------|----------|
| **Sitemap** | `/thank-you` **excluded** (101 URLs, not 102) |
| **Prerender** | `/thank-you` **included** (102nd route) |
| **Static HTML** | `noindex, nofollow` + absolute canonical in initial HTML |
| **Segmented sitemaps** | Not in any segment; `sitemap-other.xml` not emitted |

### 8.4 Benefits

| Benefit | Explanation |
|---------|-------------|
| **Crawl budget** | Google discovers thank-you via redirects/conversions, not sitemap bulk |
| **Index hygiene** | Prevents thin “thank you” pages from appearing in search results |
| **Conversion tracking** | Page still loads for gtag/Ads events |

---

## 9. Workstream 6 — Structured data / internal linking (BreadcrumbList)

### 9.1 Problem

Location hierarchy (Home → Locations → County/City) was clear in UI but missing **BreadcrumbList** JSON-LD on key templates, reducing Google's understanding of site structure and internal link graph.

### 9.2 Files changed

| File | Lines added | Schema added |
|------|-------------|--------------|
| `src/pages/Locations.tsx` | +20 | Home → Locations |
| `src/components/locations/CityTemplate.tsx` | +23 | Home → Locations → City |
| `src/components/locations/CountyTemplate.tsx` | +23 | Home → Locations → County |

### 9.3 Schema pattern (city example)

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "item": { "@id": "https://heavytowpro.com/", "name": "Home" } },
    { "@type": "ListItem", "position": 2, "item": { "@id": "https://heavytowpro.com/locations", "name": "Locations" } },
    { "@type": "ListItem", "position": 3, "item": { "@id": "<city-canonical>", "name": "<City>" } }
  ]
}
```

**Note:** JSON-LD only — no visible breadcrumb UI change (minimal scope).

### 9.4 Benefits

| Area | Benefit |
|------|---------|
| **Rich results eligibility** | Breadcrumb trail may appear in SERPs |
| **Site structure signal** | Reinforces hub-and-spoke: `/locations` → county → city |
| **Internal linking graph** | Helps Google understand which hub page owns which city spoke |
| **Location indexing** | Supports priority location URLs in GSC Phase 2 workflow |

### 9.5 Existing schema not modified this pass

- `buildLocationSchemaJsonLd()` in `src/lib/locationSchema.ts` (LocalBusiness, etc.) — unchanged
- `BlogSchemas.tsx` Article + FAQ — unchanged except breadcrumb item removal (Workstream 7)
- `Services.tsx`, `Contact.tsx` — already had BreadcrumbList

---

## 10. Workstream 7 — Blog schema cleanup (thin-duplicate risk)

### 10.1 Problem

`BlogSchemas.tsx` breadcrumb previously included a middle item pointing to `/blog?category=...`. Query-parameter URLs can create **thin duplicate discovery** — Google may find many near-identical category filter pages.

### 10.2 File changed

| File | Lines changed |
|------|---------------|
| `src/components/blog/BlogSchemas.tsx` | −6 lines (removed category breadcrumb item) |

### 10.3 Before → After breadcrumb chain

| Before | After |
|--------|-------|
| Home → Blog → **Category (?category=)** → Post | Home → Blog → Post |

Positions renumbered: post is now position 3 (was 4).

### 10.4 Benefits

| Benefit | Detail |
|---------|--------|
| **Duplicate URL reduction** | Fewer parameterized URLs in structured data |
| **Canonical clarity** | Breadcrumb `item` URLs align with clean `/blog/<slug>` canonicals |
| **Crawl efficiency** | Less discovery of low-value filter pages |

---

## 11. Workstream 8 — Shell `index.html` default meta alignment

### 11.1 Problem

The Vite shell `index.html` is the fallback document before React hydrates and before prerender post-processing. Stale/generic defaults could leak into edge cases.

### 11.2 File changed

| File | Lines changed |
|------|---------------|
| `index.html` | 4 lines updated (title, description, author, keywords) |

### 11.3 Changes

| Meta | New value (summary) |
|------|-------------------|
| **title** | “Heavy Haulers San Francisco - 24/7 Towing & Recovery \| Bay Area” |
| **description** | Bay Area + Stockton, eight dispatch hubs, flatbed-first, light/medium/heavy-duty |
| **author** | “Heavy Haulers San Francisco” |
| **keywords** | Bay Area towing, emergency, flatbed, heavy/medium duty, near me |

### 11.4 Benefits

| Scenario | Benefit |
|----------|---------|
| **Pre-JS crawl** | Better default if prerender misses a tag |
| **Brand consistency** | Aligns shell with “Heavy Haulers San Francisco” naming |
| **Social previews** | Fallback OG/Twitter tags inherit improved baseline |

---

## 12. Workstream 9 — Operational reports & playbooks

Two new documentation artifacts were created for ongoing SEO operations (not user-facing pages).

### 12.1 `docs/GSC_INDEXING_PLAYBOOK.md` (79 lines)

**Purpose:** Step-by-step operator workflow for moving URLs from “Discovered” → “Indexed”.

**Contents:**

| Phase | Actions |
|-------|---------|
| **Phase 0** | Live URL Inspection on 5 representative URLs (service, county, city, blog, thank-you) |
| **Phase 1** | Submit `sitemap-index.xml` in GSC |
| **Phase 2** | Priority crawl list (~20–50 URLs); Request Indexing once each |
| **Phase 3** | Diagnose persistent “Discovered” — canonical mismatches, soft 404, duplication |
| **Phase 4** | Monthly cadence — update source sitemap, freshness updates, index bloat watch |

### 12.2 `docs/SEO_KEYWORD_TARGETING_GUIDE.md` (36 lines)

**Purpose:** Prevent keyword cannibalization across page types.

**Contents:**

- Intent ownership map: `/services/*`, `/locations/*`, `/towing-<city>`, `/blog/<slug>`
- Title/meta patterns per page type
- Pitfalls: parameterized breadcrumbs, noindex utility pages in sitemaps

### 12.3 Benefits of reports

| Report | Who uses it | Value |
|--------|-------------|-------|
| GSC Playbook | Site owner / SEO operator | Repeatable process after deploy |
| Keyword guide | Content author / dev | Prevents new pages competing with money pages |

---

## 13. Build pipeline changes

### 13.1 `package.json` — `build` script

**Before (conceptual):**
```
vite build && node scripts/prerender.cjs && node scripts/inject-hero-preload.cjs
```

**After:**
```
node scripts/generate-segmented-sitemaps.cjs && vite build && node scripts/prerender.cjs && node scripts/inject-hero-preload.cjs
```

### 13.2 Build stage order & why

| Step | Script | Output |
|------|--------|--------|
| 1 | `generate-segmented-sitemaps.cjs` | `public/sitemap-*.xml` committed to deploy bundle |
| 2 | `vite build` | `dist/` SPA assets |
| 3 | `prerender.cjs` | `dist/<route>/index.html` per route |
| 4 | `inject-hero-preload.cjs` | Hero preload + `dist/404.html` |

### 13.3 Environment variables (prerender)

| Variable | Default | Effect |
|----------|---------|--------|
| `PRERENDER_STRICT` | `true` (strict) | Set `false` to allow build despite prerender failure |
| `DISABLE_PRERENDER` | unset | `true` skips prerender entirely |
| `PRERENDER_ROUTES` | unset | Comma-separated route subset |
| `PRERENDER_ROUTE_LIMIT` | unset | Cap number of routes |
| `PRERENDER_WAIT_MODE` | `time` | `element` or `event` for slower pages |
| `PRERENDER_SKIP_THIRD_PARTY` | unset | `true` blocks third-party network in Puppeteer |

---

## 14. Code volume & file inventory

### 14.1 Git diff summary (tracked files only)

```
15 files changed, 119 insertions(+), 24 deletions(-)
Net: +95 lines in modified tracked files
```

### 14.2 Per-file diff (tracked)

| File | Insertions | Deletions | Net |
|------|------------|-----------|-----|
| `index.html` | 4 | 4 | 0 |
| `package.json` | 1 | 1 | 0 |
| `public/robots.txt` | 1 | 0 | +1 |
| `public/sitemap.xml` | 0 | 1 | −1 |
| `scripts/inject-hero-preload.cjs` | 25 | 5 | +20 |
| `scripts/prerender.cjs` | 11 | 3 | +8 |
| `src/components/blog/BlogSchemas.tsx` | 0 | 6 | −6 |
| `src/components/locations/CityTemplate.tsx` | 23 | 0 | +23 |
| `src/components/locations/CountyTemplate.tsx` | 23 | 0 | +23 |
| `src/pages/BlogOld.tsx` | 2 | 1 | +1 |
| `src/pages/Locations.tsx` | 20 | 0 | +20 |
| `src/pages/Privacy.tsx` | 2 | 1 | +1 |
| `src/pages/Sitemap.tsx` | 2 | 1 | +1 |
| `src/pages/Terms.tsx` | 2 | 1 | +1 |
| `src/pages/ThankYou.tsx` | 3 | 0 | +3 |

### 14.3 New files (untracked at time of writing)

| File | Lines | Category |
|------|-------|----------|
| `scripts/generate-segmented-sitemaps.cjs` | 149 | Build tooling |
| `src/lib/seo.ts` | 9 | Application code |
| `docs/GSC_INDEXING_PLAYBOOK.md` | 79 | Operations doc |
| `docs/SEO_KEYWORD_TARGETING_GUIDE.md` | 36 | Content/SEO doc |
| `docs/May SEO Updates.md` | (this file) | Audit record |
| `public/sitemap-index.xml` | 19 | Generated XML |
| `public/sitemap-pages.xml` | ~35 | Generated XML |
| `public/sitemap-services.xml` | ~35 | Generated XML |
| `public/sitemap-locations.xml` | ~130 | Generated XML |
| `public/sitemap-blog.xml` | ~230 | Generated XML |

### 14.4 Total engineering effort (approximate)

| Category | Lines |
|----------|-------|
| Modified application/components | ~+72 (excluding package/index html net-zero) |
| Modified build scripts | ~+28 |
| New build script | ~149 |
| New shared lib | 9 |
| New operational docs (excl. this file) | 115 |
| **Total new authored logic + docs** | **~373 lines** |
| Generated XML | ~450 lines (auto-generated each build) |

### 14.5 Files explicitly NOT changed (relevant context)

| File | Why untouched |
|------|---------------|
| `public/_redirects` | SPA fallback preserved; hash redirects still ineffective server-side |
| `netlify.toml` | Existing deploy config sufficient once `404.html` exists in `dist/` |
| `src/data/locations/*` | City/county content already has per-page meta in data files |
| Blog post content files | No copy rewrites in this pass |
| `src/pages/Sitemap.tsx` link list | Not expanded to full 101 URLs |

### 14.6 Unrelated untracked files (not part of SEO work)

- `.tmp-live-about.html`, `.tmp-live-contact.html`, `.tmp-live-home.html`, `.tmp-live-services.html` — local scrape artifacts; do not commit unless intentional.

---

## 15. Verification matrix (automated checks run)

### 15.1 Commands executed

```powershell
npm run build
# sitemap_urls=101, missing_prerender=0
# dist/404.html = True, dist/thank-you/index.html = True
node scripts/generate-segmented-sitemaps.cjs
# sitemap-other.xml deleted when empty
```

### 15.2 Expected post-deploy manual checks

See `docs/GSC_INDEXING_PLAYBOOK.md` Phase 0 URLs:

1. `https://heavytowpro.com/services/heavy-duty`
2. `https://heavytowpro.com/locations/san-mateo-county`
3. `https://heavytowpro.com/towing-oakland`
4. `https://heavytowpro.com/blog/emergency-towing-guide` (or any live blog slug)
5. `https://heavytowpro.com/thank-you` — must show **Indexing not allowed** (noindex)

For each: View crawled page → confirm unique title, body content, absolute canonical.

---

## 16. Known gaps & recommended follow-ups

| Priority | Gap | Recommendation |
|----------|-----|----------------|
| **P1** | Deploy to production | Netlify deploy; then run GSC Phase 0–1 |
| **P1** | Generic prerender descriptions | Extend `postProcess()` / `routeMeta()` to backfill description when shell default detected |
| **P2** | HTML sitemap completeness | Expand `src/pages/Sitemap.tsx` to link all indexable URLs or auto-generate from `sitemap.xml` |
| **P2** | Location page differentiation | Add unique local proof per city (landmarks, corridors, industries) per keyword guide |
| **P3** | `404.html` branded content | Prerender `/not-found` route or static HTML template |
| **P3** | Remove dead hash rules | Clean `public/_redirects` hash entries; rely on `Locations.tsx` client redirect |
| **P3** | `taskkill` on Windows | Optional cross-platform Puppeteer cleanup in prerender script |
| **P3** | Bundle size | Code-split `index-*.js` (>500 kB) for CWV |

---

## 17. Post-deploy GSC actions (operator checklist)

- [ ] Deploy latest build to Netlify
- [ ] GSC → Sitemaps → Submit `https://heavytowpro.com/sitemap-index.xml`
- [ ] URL Inspection on 5 Phase 0 URLs (Section 15.2)
- [ ] Request Indexing for priority list (20–50 URLs) — **once per URL**
- [ ] Monitor segmented sitemap reports weekly for 3 weeks
- [ ] Record which segment lags (likely `sitemap-locations.xml` or `sitemap-blog.xml`)
- [ ] Apply content freshness updates to lagging segment (5–10 pages/month)

---

## 18. New normal — SEO checklist for every new page & blog post

This section is the **repeatable standard** so future content does not require another emergency SEO pass.

### 18.1 Global rules (all page types)

1. **Canonical** must be absolute: `https://heavytowpro.com/...`  
   - Use `absoluteUrl()` from `src/lib/seo.ts` for new React pages.
   - Blog posts: set `canonicalUrl` in post data to full absolute URL.

2. **Sitemap inclusion**  
   - Add new indexable URLs to `public/sitemap.xml` (source of truth).  
   - Run `npm run build` (or at minimum `node scripts/generate-segmented-sitemaps.cjs`) so segments stay in sync.  
   - **Never** add `noindex` utility pages (thank-you, internal reports) to sitemap.

3. **Prerender coverage**  
   - Any new public route in `sitemap.xml` is automatically prerendered.  
   - If a route must exist but must **not** be indexed, omit from sitemap and add to `always` array in `scripts/prerender.cjs` if it needs static `noindex` HTML.

4. **Robots**  
   - Indexable pages: no robots meta (default index,follow) OR explicit `index,follow` if needed.  
   - Utility/conversion/test pages: `noindex, nofollow` in Helmet **and** verify in prerendered HTML after build.

5. **Title & description**  
   - Unique per URL; follow patterns in `docs/SEO_KEYWORD_TARGETING_GUIDE.md`.  
   - One primary intent per URL — do not target the same head term on blog and service/location pages.

6. **After adding any URL**  
   ```bash
   npm run build
   # Verify: dist/<your-path>/index.html exists
   # Verify: title, canonical, description in static HTML
   ```

---

### 18.2 New blog post checklist (required)

Use this for **every** new post under `/blog/<slug>`.

#### A. Content data file (existing blog data pattern)

| Field | Requirement |
|-------|-------------|
| `slug` | Kebab-case, matches URL `/blog/<slug>` |
| `metaTitle` | Informational query; not “hire us now” |
| `metaDescription` | Unique 150–160 chars; includes primary keyword naturally |
| `primaryKeyword` | Single main query this post owns |
| `secondaryKeywords` | 3–5 supporting terms; must not overlap primary service/location pages |
| `canonicalUrl` | `https://heavytowpro.com/blog/<slug>` (absolute) |
| `publishDate` / `dateModified` | ISO date; `dateModified` when updating |
| `heroImage` | Optimized WebP; descriptive alt text |
| `faq` | Optional; if present, FAQ schema auto-generates |

#### B. Component wiring

| Step | Action |
|------|--------|
| 1 | Post uses `BlogSchemas` component (Article + Breadcrumb + optional FAQ) |
| 2 | Breadcrumb chain must be: **Home → Blog → Post** only (no `?category=` URLs) |
| 3 | Internal links in body: link to **one** best-fit service page + **1–2** location hubs/cities |
| 4 | Do not link to `/thank-you` from blog content |

#### C. Sitemap & build

| Step | Action |
|------|--------|
| 1 | Add URL block to `public/sitemap.xml` with `<lastmod>YYYY-MM-DD</lastmod>` |
| 2 | Run full `npm run build` |
| 3 | Confirm post appears in `public/sitemap-blog.xml` |
| 4 | Confirm `dist/blog/<slug>/index.html` exists with correct meta |

#### D. Intent ownership (avoid cannibalization)

| Post topic type | Should link to | Should NOT compete with |
|-----------------|----------------|-------------------------|
| Emergency how-to | `/services/light-duty` or relevant service | `/towing-<city>` money pages |
| Heavy commercial guide | `/services/heavy-duty` | City “tow truck” pages |
| Local ordinance / parking | Relevant city page | County hub unless county-wide |

#### E. Post-publish GSC

| Step | Action |
|------|--------|
| 1 | After deploy, URL Inspection → Request Indexing (once) |
| 2 | If “Discovered” after 2 weeks, add internal links from `/blog` index and one related service page |

---

### 18.3 New location / city page checklist

| Step | Action |
|------|--------|
| 1 | Add entry to location data with unique `metaTitle`, `metaDescription`, `url` |
| 2 | `CityTemplate` auto-applies BreadcrumbList + LocalBusiness schema |
| 3 | Add URL to `public/sitemap.xml` → rebuild → appears in `sitemap-locations.xml` |
| 4 | Verify prerendered HTML has unique title (and ideally unique description) |
| 5 | Ensure 2–5 inbound internal links from `/locations`, county hub, or related blog posts |

---

### 18.4 New service page checklist

| Step | Action |
|------|--------|
| 1 | Unique title: service type + Bay Area differentiator |
| 2 | Absolute canonical via existing service page Helmet pattern |
| 3 | Add to `public/sitemap.xml` → `sitemap-services.xml` after build |
| 4 | BreadcrumbList if not already on template (see `Services.tsx` pattern) |
| 5 | Link from `/services` hub and homepage |

---

### 18.5 New utility / noindex page checklist

Examples: thank-you variants, internal dashboards, campaign LPs that should not rank.

| Step | Action |
|------|--------|
| 1 | `noindex, nofollow` in Helmet |
| 2 | Absolute canonical (even for noindex pages) |
| 3 | **Exclude** from `public/sitemap.xml` |
| 4 | If Google must see noindex without JS: add route to `always` array in `prerender.cjs` |
| 5 | Verify `dist/<route>/index.html` contains robots noindex after build |

---

### 18.6 Monthly maintenance rhythm

| Task | Frequency |
|------|-----------|
| Review GSC Coverage by sitemap segment | Weekly (first month after deploy), then monthly |
| Update `lastmod` on materially changed pages in `public/sitemap.xml` | When content changes |
| Re-run full build before deploy | Every production release |
| Review keyword guide when adding new page **types** | As needed |
| Request re-indexing | Only after meaningful content change; max once per URL per month |

---

### 18.7 Quick reference — file touch map for new content

| I am adding… | Edit these files |
|--------------|------------------|
| **Blog post** | Blog data file, `public/sitemap.xml`, rebuild |
| **City page** | `src/data/locations/*`, `public/sitemap.xml`, rebuild |
| **Service page** | Service route + content, `public/sitemap.xml`, rebuild |
| **Legal/utility page** | Page TSX + `absoluteUrl()`, sitemap only if indexable |
| **Noindex page** | Page TSX, `prerender.cjs` always array, **not** sitemap |

---

## Appendix A — Complete file change list

### Modified (15 tracked files)

1. `index.html`
2. `package.json`
3. `public/robots.txt`
4. `public/sitemap.xml`
5. `scripts/inject-hero-preload.cjs`
6. `scripts/prerender.cjs`
7. `src/components/blog/BlogSchemas.tsx`
8. `src/components/locations/CityTemplate.tsx`
9. `src/components/locations/CountyTemplate.tsx`
10. `src/pages/BlogOld.tsx`
11. `src/pages/Locations.tsx`
12. `src/pages/Privacy.tsx`
13. `src/pages/Sitemap.tsx`
14. `src/pages/Terms.tsx`
15. `src/pages/ThankYou.tsx`

### Created (SEO work)

1. `scripts/generate-segmented-sitemaps.cjs`
2. `src/lib/seo.ts`
3. `docs/GSC_INDEXING_PLAYBOOK.md`
4. `docs/SEO_KEYWORD_TARGETING_GUIDE.md`
5. `docs/May SEO Updates.md` (this document)
6. `public/sitemap-index.xml` (generated)
7. `public/sitemap-pages.xml` (generated)
8. `public/sitemap-services.xml` (generated)
9. `public/sitemap-locations.xml` (generated)
10. `public/sitemap-blog.xml` (generated)

### Deleted during QC

1. `public/sitemap-other.xml` — removed when empty (stale `/thank-you` entry)

---

## Appendix B — Related plan reference

Implementation followed the approved plan: SEO audit + indexing fix (plan file in Cursor plans directory). The plan file itself was **not modified** per user instruction.

---

*End of May SEO Updates document.*
