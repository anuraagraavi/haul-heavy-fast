# GSC May 2026 Blog Rollout Checklist

Operator checklist for indexing 20 May 2026 blog posts. Full context: [MAY_2026_BLOG_EXECUTION_PLAN.md](MAY_2026_BLOG_EXECUTION_PLAN.md) Section H, [GSC_INDEXING_PLAYBOOK.md](GSC_INDEXING_PLAYBOOK.md).

## Pre-deploy

- [ ] Technical SEO from [May SEO Updates.md](May%20SEO%20Updates.md) deployed to production
- [ ] `npm run build` passes (122 routes: 101 sitemap + 20 new blogs − overlap + thank-you)
- [ ] Spot-check `dist/blog/sjc-towed-vehicle-release-form/index.html` for unique title + description

## Phase 1 — Sitemap

- [ ] GSC → Sitemaps → `https://heavytowpro.com/sitemap-index.xml` submitted
- [ ] Confirm `sitemap-blog.xml` shows 76 URLs after deploy

## Phase 2 — Batch 1 (SJ/SM, May 1–10)

Request indexing **once** per URL after deploy:

- [ ] `/towing-san-jose`
- [ ] `/towing-san-mateo`
- [ ] `/blog/sjc-towed-vehicle-release-form`
- [ ] `/blog/san-jose-tow-hearing-request`
- [ ] `/blog/sjc-cell-phone-lot-towing-rules`
- [ ] `/blog/ca-87-breakdown-san-jose-guide`
- [ ] `/blog/san-mateo-county-vehicle-release`
- [ ] `/blog/ca-92-breakdown-san-mateo-towing`
- [ ] `/blog/san-mateo-caltrain-tow-truck-pickup`
- [ ] `/blog/flatbed-ev-towing-san-mateo-checklist`

## Phase 3 — Batch 2 (East Bay + airports)

- [ ] `/blog/oakland-towed-vehicle-how-to-get-back`
- [ ] `/blog/oakland-tow-hearing-request`
- [ ] `/blog/sfo-vehicle-towed-what-to-do`
- [ ] `/blog/511-freeway-assist-vs-tow-truck-bay-area`
- [ ] `/blog/fremont-bridge-corridor-breakdown-towing`
- [ ] `/blog/i-880-breakdown-hayward-guide`

## Phase 4 — Batch 3 (Peninsula + Contra Costa)

- [ ] `/blog/i-680-breakdown-walnut-creek-checklist`
- [ ] `/blog/delivery-van-towing-concord-ca`
- [ ] `/blog/low-clearance-garage-towing-palo-alto`
- [ ] `/blog/tow-truck-mountain-view-shoreline`
- [ ] `/blog/commercial-towing-redwood-city-seaport`

## Phase 5 — Batch 4 (Stockton)

- [ ] `/blog/stockton-towing-dispatch-checklist`

## Week 3+ — If still "Discovered"

- [ ] Verify inbound links from `/towing-san-jose` and `/towing-san-mateo` related guides
- [ ] Verify pillar posts link to May slugs (impound, freeway, EV, rideshare guides)
- [ ] Re-inspect 3 stuck URLs; request indexing only after meaningful change (max once/month)

## Weekly monitor (first month)

- [ ] GSC → `sitemap-blog.xml`: discovered vs indexed
- [ ] Record lagging URLs in spreadsheet
- [ ] Update `lastmod` in `public/sitemap.xml` for materially edited posts
