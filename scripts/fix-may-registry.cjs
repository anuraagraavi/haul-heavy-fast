const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const maySrc = fs.readFileSync(path.join(ROOT, "src/data/may2026BlogPosts.ts"), "utf8");

const posts = [];
const blocks = maySrc.split(/  "[a-z0-9-]+": \{\n    data: \{/).slice(1);
for (const block of blocks) {
  const slug = block.match(/^/) ? maySrc.match(new RegExp(`"(${block.split('"')[0]})"`)) : null;
}
// Simpler: split by slug keys
const slugMatches = [...maySrc.matchAll(/  "([a-z0-9-]+)": \{\n    data: \{/g)];
for (const [, slug] of slugMatches) {
  const chunk = maySrc.split(`  "${slug}": {`)[1].split(/\n  "[a-z0-9-]+": \{/)[0];
  const title = chunk.match(/title: "([^"]+)"/)?.[1];
  const excerpt = chunk.match(/excerpt: "([^"]+)"/)?.[1];
  const publishDate = chunk.match(/publishDate: "([^"]+)"/)?.[1];
  const readTime = chunk.match(/readTime: "([^"]+)"/)?.[1];
  const category = chunk.match(/category: "([^"]+)"/)?.[1];
  const d = new Date(publishDate + "T12:00:00");
  const displayDate = d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
  posts.push({ slug, title, excerpt, publishDate, readTime, category, displayDate });
}

const imageMap = {
  "Regulations & Compliance": "roadsideVsTowingImage",
  "Emergency Response": "bayAreaCoverageImage",
  "SF Local Services": "sfChallengesImage",
  "Specialized Services": "evTowingImage",
  "Commercial Services": "commercialTruckImage",
  "Heavy Duty": "heavyDutyServiceImage",
};

posts.sort((a, b) => b.publishDate.localeCompare(a.publishDate));

const entries = posts
  .map((p) => {
    const img = imageMap[p.category] || "heroTowTruckImage";
    return `  {
    id: "${p.slug}",
    slug: "${p.slug}",
    title: ${JSON.stringify(p.title)},
    excerpt: ${JSON.stringify(p.excerpt)},
    image: ${img},
    author: "Heavy Haulers Team",
    publishDate: "${p.publishDate}",
    displayDate: "${p.displayDate}",
    readTime: "${p.readTime}",
    category: "${p.category}",
  },`;
  })
  .join("\n");

const registryPath = path.join(ROOT, "src/data/blogRegistry.ts");
let registry = fs.readFileSync(registryPath, "utf8");
registry = registry.replace(
  /  \/\/ May 2026 Posts[\s\S]*?  \/\/ April 2026 Posts/,
  `  // May 2026 Posts\n${entries}\n  // April 2026 Posts`,
);
fs.writeFileSync(registryPath, registry, "utf8");

// Fix sitemap - replace May section
const sitemapPath = path.join(ROOT, "public/sitemap.xml");
let sitemap = fs.readFileSync(sitemapPath, "utf8");
const urls = posts
  .map(
    (p) =>
      `  <url><loc>https://heavytowpro.com/blog/${p.slug}</loc><changefreq>monthly</changefreq><priority>0.6</priority><lastmod>${p.publishDate}</lastmod></url>`,
  )
  .join("\n");
sitemap = sitemap.replace(
  /  <!-- Blog Posts - May 2026 -->[\s\S]*?  <!-- Blog Posts - April 2026 -->/,
  `  <!-- Blog Posts - May 2026 -->\n${urls}\n  <!-- Blog Posts - April 2026 -->`,
);
fs.writeFileSync(sitemapPath, sitemap, "utf8");

console.log("Fixed registry and sitemap for", posts.length, "posts");
