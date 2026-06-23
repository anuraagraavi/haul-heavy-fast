## Google Search Console indexing playbook (Discovered → Indexed)

### What we’re solving
Most URLs are **“Discovered — currently not indexed”**. That usually means Google knows the URLs but is **choosing not to spend crawl/render/index budget** yet (quality/duplication/serving confidence issue), not a sitemap submission issue.

This repo now improves the technical prerequisites:
- **Strict prerender** (build fails if prerender breaks) so Google receives full HTML per route.
- **`dist/404.html`** so static hosting returns real 404s (reduces soft-404 noise).
- **Segmented sitemaps** (`sitemap-index.xml`) for cleaner crawl prioritization.
- **Noindex utility**: `/thank-you` is **noindex** and excluded from sitemap, but still prerendered so the noindex is present in initial HTML.

---

## Phase 0 — Confirm live serving (1-time verification)
Pick 5 representative URLs (1 per type):
- `/services/heavy-duty`
- `/locations/san-mateo-county`
- `/towing-oakland`
- `/blog/emergency-towing-guide`
- `/thank-you`

For each URL in GSC URL Inspection:
- **Page fetch**: should succeed (200).
- **Indexing allowed?**: Yes for all except `/thank-you` (should be No, due to noindex).
- **User-declared canonical**: should match the URL (absolute).
- **Google-selected canonical**: should match user-declared for most pages.
- **View crawled page**: should show real content and correct title/description (not the generic SPA shell).

If any show “crawled page” as a mostly-empty shell, fix deploy/headers/redirect behavior before doing anything else.

---

## Phase 1 — Submit segmented sitemaps (immediately)
In GSC → Sitemaps, submit:
- `sitemap-index.xml`

Then monitor:
- **Discovered URLs** vs **Crawled** vs **Indexed** for each segment.
- Whether one segment (typically locations/blog) is “stuck” more than others (quality similarity signal).

---

## Phase 2 — Prioritize crawl budget (2–3 weeks)
Don’t try to force-index 100+ URLs at once.

Create a “priority crawl list” of ~20–50 URLs:
- `/services/*` (all)
- the top 10 city pages by conversions / calls / traffic
- 3–5 county hubs
- 5–10 best blog posts (closest to purchase intent or strong informational demand)

Operational steps:
- For each priority URL, run **URL Inspection → Request Indexing** (once).
- Ensure each has **2–5 internal links** from strong pages (home/services/locations/blog index).
- Avoid changing URL slugs during this phase.

---

## Phase 3 — Diagnose why Google is deprioritizing (when “Discovered” persists)
For a sample of 10 “Discovered” URLs, record:
- Page type (service/city/county/blog)
- Rendered HTML in “View crawled page”
- Title + H1
- Canonical (user vs Google)
- Any coverage hints (soft-404, duplicate, alternate canonical, etc.)

Common patterns and what to do:
- **Google chose different canonical**: fix canonicals + internal links to reinforce the preferred URL.
- **Soft 404**: ensure real 404 on non-existent paths; reduce “thin” utility pages in sitemap.
- **Duplicate content** across city pages: add more unique local proof points and unique meta descriptions per city.
- **Too many low-value URLs discovered at once**: keep segmented sitemaps, but focus internal links and updates on priority pages first.

---

## Phase 4 — Ongoing cadence (monthly)
- Update `public/sitemap.xml` source set as pages are added/removed (segments are generated from it).
- Add meaningful content updates on 5–10 pages/month (signals freshness + value).
- Watch for index bloat (utility pages, parameters).

