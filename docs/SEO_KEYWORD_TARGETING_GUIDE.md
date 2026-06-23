## SEO keyword targeting guide (haul-heavy-fast)

### Goal
Avoid cannibalization across **services**, **locations**, and **blog posts** by giving each URL a clear, unique search intent and a consistent title/meta pattern.

### URL → intent ownership (recommended)
- **`/services`**: “towing services” head term (hub)
  - Primary intent: “what services do you offer / which towing type do I need”
  - Secondary intent: “24/7 dispatch + coverage breadth”
- **`/services/light-duty`**: “flatbed towing / car towing / motorcycle towing / exotic transport”
- **`/services/medium-duty`**: “box truck towing / RV towing / commercial work trucks”
- **`/services/heavy-duty`**: “semi truck towing / heavy recovery / equipment transport / fleet accounts”

- **`/locations`**: coverage index (hub)
  - Primary intent: “where do you serve” (navigation + local discovery)
- **`/locations/<county>-county`**: county hub (mid-tail local)
  - Primary intent: “towing in <County>” + “dispatch hub / coverage breadth”
- **`/towing-<city>`**: city page (local commercial + emergency)
  - Primary intent: “tow truck <City>” + “24/7 / fast dispatch / flatbed-first”

- **`/blog`**: informational hub
  - Primary intent: browsing/how-to; should not compete with service/location pages for “hire now” queries
- **`/blog/<slug>`**: one informational query each
  - Primary intent: the exact query in `primaryKeyword` for the post
  - Secondary: internal links to the *single* most relevant service page and 1–2 relevant location hubs/cities

### Title & meta description patterns (keep unique)
- **Service pages**: include service type + Bay Area, avoid repeating the exact same suffix everywhere.
- **County hubs**: include county/cities served + dispatch angle (not just “tow truck”).
- **City pages**: include the city + 1–2 differentiators (corridors, port/industrial, flatbed-first, heavy-capable).
- **Blog posts**: keep titles informational; avoid “hire us” language in titles.

### Pitfalls to avoid
- **Breadcrumb URLs that introduce query-parameter pages** (e.g. `/blog?category=...`) can increase discovery of thin duplicates.
- **Sitemaps including noindex/utility pages** (e.g. `/thank-you`) can waste crawl budget. If the route must exist, keep it **noindex** and out of sitemaps.

