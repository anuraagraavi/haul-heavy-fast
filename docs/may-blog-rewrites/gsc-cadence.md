# GSC Tracking Cadence — May 2026 Blog Remediation

**Program start:** 2026-06-24  
**Data file:** `gsc-tracking.csv`  
**Sitemap:** `public/sitemap-blog.xml` (source: `public/sitemap.xml`)

## Baseline (pre-deploy, Jun 24 export)

| Metric | Baseline |
|--------|----------|
| May blog URLs with GSC impressions | 0 of 20 |
| Total `/blog/*` impressions | ~310 (legacy posts only) |
| May blog clicks | 0 |
| `towing san jose` (city page) | 1,826 imp, 0 clicks, pos ~3.3 |
| `towing stockton` | 104 imp, pos ~4.7, 0 clicks |
| `towing redwood city` | 33 imp, pos ~1.5, 0 clicks |

## Per-slug 30-day targets (program complete)

| Priority | Slug | Primary GSC target | 30d imp target | 30d click target |
|----------|------|-------------------|----------------|------------------|
| P0 | stockton-towing-dispatch-checklist | towing stockton | ≥25 | ≥1 |
| P0 | delivery-van-towing-concord-ca | towing concord | ≥15 | ≥1 |
| P1 | 511-freeway-assist-vs-tow-truck-bay-area | towing near me | ≥20 | ≥1 |
| P1 | san-mateo-county-vehicle-release | san mateo tow | ≥10 | ≥1 |
| P1 | flatbed-ev-towing-san-mateo-checklist | electric vehicle towing | ≥15 | ≥0 |
| P2 | i-880-breakdown-hayward-guide | hayward towing | ≥10 | ≥0 |
| P2 | commercial-towing-redwood-city-seaport | towing redwood city | ≥10 | ≥1 |
| P3 | SJ compliance cluster (4 posts) | towing san jose (city) | feed city CTR | ≥0 each |

**Program-wide 60-day:** ≥15 May slugs with impressions; ≥20 total blog clicks; blog ≥10% of site clicks.

## Weekly operator checklist

### Week 1 (days 1–7 post-deploy)

- [ ] Confirm production deploy includes latest `npm run build` (word-count gate passes)
- [ ] GSC → Sitemaps → verify `sitemap-index.xml` submitted; note discovered vs indexed for `sitemap-blog.xml`
- [ ] URL Inspection → Request indexing (batch 2/day, priority order):
  1. `stockton-towing-dispatch-checklist`
  2. `delivery-van-towing-concord-ca`
  3. `511-freeway-assist-vs-tow-truck-bay-area`
  4. `san-mateo-county-vehicle-release`
  5. Continue through `gsc-tracking.csv` rows
- [ ] Update `index_requested` column to `yes` + date when submitted
- [ ] Export GSC Queries filtered `page contains /blog/` → save snapshot as `docs/may-blog-rewrites/gsc-snapshots/YYYY-MM-DD-queries.csv`

### Weeks 2–4 (repeat every Monday)

- [ ] GSC → Performance → Pages → filter `/blog/` → record impressions/clicks/position per slug into `gsc-tracking.csv`
- [ ] Flag slugs with 0 impressions after 14 days → add inbound link from pillar or city `relatedGuides`
- [ ] GSC → Sitemaps → if indexed &lt; discovered by &gt;10, refresh `lastmod` on stuck URLs in `public/sitemap.xml` and resubmit
- [ ] Check mobile CTR on top 5 blog URLs (target ≥2% by day 30)

### Week 4 closeout

- [ ] Fill `day30_impressions`, `day30_clicks`, `day30_position` for all 20 slugs
- [ ] Compare against targets table above; queue meta CTR fixes for high-impression / zero-click URLs
- [ ] Parallel track: `/towing-san-jose` CTR (target ≥1% at page-1 position)

## Index request priority (all 20 slugs)

Ship order matches phase deploy (highest GSC demand first):

1. stockton-towing-dispatch-checklist  
2. delivery-van-towing-concord-ca  
3. 511-freeway-assist-vs-tow-truck-bay-area  
4. san-mateo-county-vehicle-release  
5. flatbed-ev-towing-san-mateo-checklist  
6. commercial-towing-redwood-city-seaport  
7. i-880-breakdown-hayward-guide  
8. fremont-bridge-corridor-breakdown-towing  
9. low-clearance-garage-towing-palo-alto  
10. i-680-breakdown-walnut-creek-checklist  
11–20. Remaining slugs in phase order (SJ → SM → Oakland → SFO → Peninsula)

## City page parallel track

| URL | Fix applied | GSC metric |
|-----|-------------|------------|
| `/towing-san-jose` | metaTitle leads "Towing San Jose CA" | `towing san jose` CTR ≥1% |
| Homepage `/` | description + keywords mention San Jose | Reduce homepage cannibalization |

Request indexing for `/towing-san-jose` after deploy if snippet does not refresh within 7 days.
