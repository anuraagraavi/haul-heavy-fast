const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const sitemapPath = path.join(ROOT, "public", "sitemap.xml");
const csvPath = path.join(ROOT, "docs", "may-blog-rewrites", "gsc-tracking.csv");

const slugs = fs
  .readFileSync(csvPath, "utf8")
  .split("\n")
  .slice(1)
  .map((line) => line.split(",")[0])
  .filter(Boolean);

let xml = fs.readFileSync(sitemapPath, "utf8");
let updated = 0;

for (const slug of slugs) {
  const escaped = slug.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const re = new RegExp(
    `(<url><loc>https://heavytowpro\\.com/blog/${escaped}</loc>.*?<lastmod>)[^<]+(</lastmod>)`,
    "s"
  );
  const next = xml.replace(re, "$12026-06-24$2");
  if (next !== xml) {
    updated += 1;
    xml = next;
  }
}

fs.writeFileSync(sitemapPath, xml);
console.log(`Updated lastmod for ${updated} May blog URLs`);
