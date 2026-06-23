/**
 * Generates segmented XML sitemaps + sitemap index from public/sitemap.xml.
 *
 * Why:
 * - Helps Google prioritize crawling (pages/services/locations/blog).
 * - Easier debugging in GSC Coverage + Sitemaps reports.
 * - Keeps each sitemap smaller and cleaner as the site grows.
 *
 * Source of truth remains public/sitemap.xml (for now).
 */
const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const PUBLIC_DIR = path.join(ROOT, "public");
const SOURCE_PATH = path.join(PUBLIC_DIR, "sitemap.xml");

const SITE = "https://heavytowpro.com";

function stripXml(xml) {
  return xml.replace(/^\uFEFF/, "").trim();
}

function extractUrls(xml) {
  const matches = [...xml.matchAll(/<loc>\s*([^<]+)\s*<\/loc>/gi)];
  return matches.map((m) => m[1].trim()).filter(Boolean);
}

function groupForUrl(url) {
  const u = new URL(url);
  const p = u.pathname;
  if (p === "/" || p === "/about" || p === "/contact" || p === "/get-a-quote" || p === "/privacy-policy" || p === "/terms" || p === "/sitemap") {
    return "pages";
  }
  if (p === "/services" || p.startsWith("/services/") || p === "/towing-services" || p.startsWith("/towing/")) {
    return "services";
  }
  if (p === "/locations" || p.startsWith("/locations/") || p.startsWith("/towing-")) {
    return "locations";
  }
  if (p === "/blog" || p.startsWith("/blog/")) {
    return "blog";
  }
  return "other";
}

function nowDate() {
  return new Date().toISOString().slice(0, 10);
}

function buildUrlset(urls, lastmodByUrl) {
  const lines = [];
  lines.push('<?xml version="1.0" encoding="UTF-8"?>');
  lines.push('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">');
  for (const url of urls) {
    const lastmod = lastmodByUrl.get(url);
    lines.push("  <url>");
    lines.push(`    <loc>${url}</loc>`);
    if (lastmod) lines.push(`    <lastmod>${lastmod}</lastmod>`);
    lines.push("  </url>");
  }
  lines.push("</urlset>");
  return lines.join("\n") + "\n";
}

function buildIndex(entries) {
  const lines = [];
  lines.push('<?xml version="1.0" encoding="UTF-8"?>');
  lines.push('<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">');
  for (const { loc, lastmod } of entries) {
    lines.push("  <sitemap>");
    lines.push(`    <loc>${loc}</loc>`);
    if (lastmod) lines.push(`    <lastmod>${lastmod}</lastmod>`);
    lines.push("  </sitemap>");
  }
  lines.push("</sitemapindex>");
  return lines.join("\n") + "\n";
}

function run() {
  if (!fs.existsSync(SOURCE_PATH)) {
    console.error("[sitemaps] Source sitemap missing:", SOURCE_PATH);
    process.exit(1);
  }

  const sourceXml = stripXml(fs.readFileSync(SOURCE_PATH, "utf8"));
  const urls = extractUrls(sourceXml);
  if (urls.length === 0) {
    console.error("[sitemaps] No <loc> URLs found in source sitemap.");
    process.exit(1);
  }

  // Preserve existing lastmod for blog posts where present, otherwise stamp today's date.
  const lastmodByUrl = new Map();
  for (const m of sourceXml.matchAll(/<url>[\s\S]*?<loc>\s*([^<]+)\s*<\/loc>[\s\S]*?<\/url>/gi)) {
    const urlBlock = m[0];
    const loc = m[1]?.trim();
    if (!loc) continue;
    const lastmodMatch = urlBlock.match(/<lastmod>\s*([^<]+)\s*<\/lastmod>/i);
    if (lastmodMatch?.[1]) {
      lastmodByUrl.set(loc, lastmodMatch[1].trim());
    }
  }
  const today = nowDate();
  for (const url of urls) {
    if (!lastmodByUrl.has(url)) lastmodByUrl.set(url, today);
  }

  const groups = new Map();
  for (const url of urls) {
    if (!url.startsWith(SITE)) continue;
    const g = groupForUrl(url);
    if (!groups.has(g)) groups.set(g, []);
    groups.get(g).push(url);
  }

  // Write grouped sitemaps
  const outputs = [
    { key: "pages", file: "sitemap-pages.xml" },
    { key: "services", file: "sitemap-services.xml" },
    { key: "locations", file: "sitemap-locations.xml" },
    { key: "blog", file: "sitemap-blog.xml" },
  ];

  const indexEntries = [];
  for (const out of outputs) {
    const list = groups.get(out.key) || [];
    if (list.length === 0) continue;
    const xml = buildUrlset(list, lastmodByUrl);
    fs.writeFileSync(path.join(PUBLIC_DIR, out.file), xml, "utf8");
    indexEntries.push({ loc: `${SITE}/${out.file}`, lastmod: today });
  }

  // If anything didn't fit our taxonomy, keep a catch-all sitemap.
  const otherPath = path.join(PUBLIC_DIR, "sitemap-other.xml");
  const other = groups.get("other") || [];
  if (other.length > 0) {
    const xml = buildUrlset(other, lastmodByUrl);
    fs.writeFileSync(otherPath, xml, "utf8");
    indexEntries.push({ loc: `${SITE}/sitemap-other.xml`, lastmod: today });
  } else if (fs.existsSync(otherPath)) {
    fs.unlinkSync(otherPath);
  }

  fs.writeFileSync(path.join(PUBLIC_DIR, "sitemap-index.xml"), buildIndex(indexEntries), "utf8");
  console.log(`[sitemaps] Wrote sitemap-index.xml + ${indexEntries.length} segment(s).`);
}

run();

