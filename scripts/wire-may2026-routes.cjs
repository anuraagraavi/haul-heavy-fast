const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const mayFile = path.join(ROOT, "src/data/may2026BlogPosts.ts");
const src = fs.readFileSync(mayFile, "utf8");
const slugs = [...src.matchAll(/"([a-z0-9-]+)": \{\s+data:/g)].map((m) => m[1]);

function pascalCase(slug) {
  if (/^\d/.test(slug)) {
    return "Blog" + slug
      .split("-")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join("");
  }
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join("");
}

// Thin route wrappers
for (const slug of slugs) {
  const component = pascalCase(slug);
  const filePath = path.join(ROOT, `src/pages/blog/${slug}.tsx`);
  const content = `import CohortBlogPostPage from "@/components/blog/CohortBlogPostPage";
import { getMay2026BlogPost } from "@/data/may2026BlogPosts";

const ${component} = () => {
  return <CohortBlogPostPage post={getMay2026BlogPost("${slug}")} />;
};

export default ${component};
`;
  fs.writeFileSync(filePath, content, "utf8");
}

// App.tsx updates
const appPath = path.join(ROOT, "src/App.tsx");
let app = fs.readFileSync(appPath, "utf8");

const lazyImports = slugs
  .map((slug) => `const ${pascalCase(slug)} = lazy(() => import("./pages/blog/${slug}"));`)
  .join("\n");

if (!app.includes("SjcTowedVehicleReleaseForm")) {
  app = app.replace(
    /const ConstructionDumpTruckRollOffRecoveryBayArea = lazy\(\(\) => import\("\.\/pages\/blog\/construction-dump-truck-roll-off-recovery-bay-area"\)\);/,
    `const ConstructionDumpTruckRollOffRecoveryBayArea = lazy(() => import("./pages/blog/construction-dump-truck-roll-off-recovery-bay-area"));
// May 2026 Posts
${lazyImports}`,
  );

  const routes = slugs
    .map((slug) => `            <Route path="/blog/${slug}" element={<${pascalCase(slug)} />} />`)
    .join("\n");

  app = app.replace(
    /<Route path="\/blog\/construction-dump-truck-roll-off-recovery-bay-area" element=\{<ConstructionDumpTruckRollOffRecoveryBayArea \/>\} \/>/,
    `<Route path="/blog/construction-dump-truck-roll-off-recovery-bay-area" element={<ConstructionDumpTruckRollOffRecoveryBayArea />} />
            {/* May 2026 Posts */}
${routes}`,
  );

  fs.writeFileSync(appPath, app, "utf8");
}

// blogRegistry - parse titles from may file
const posts = [];
for (const slug of slugs) {
  const re = new RegExp(`"${slug}": \\{[\\s\\S]*?title: "([^"]+)"[\\s\\S]*?excerpt: "([^"]+)"[\\s\\S]*?publishDate: "([^"]+)"[\\s\\S]*?readTime: "([^"]+)"[\\s\\S]*?category: "([^"]+)"`, "m");
  const m = src.match(re);
  if (!m) {
    console.error("Failed to parse", slug);
    continue;
  }
  const [, title, excerpt, publishDate, readTime, category] = m;
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

const registryPath = path.join(ROOT, "src/data/blogRegistry.ts");
let registry = fs.readFileSync(registryPath, "utf8");

if (!registry.includes("sjc-towed-vehicle-release-form")) {
  const entries = posts
    .map((p) => {
      const img = imageMap[p.category] || "heroTowTruckImage";
      return `  {
    id: "${p.slug}",
    slug: "${p.slug}",
    title: "${p.title.replace(/"/g, '\\"')}",
    excerpt: "${p.excerpt.replace(/"/g, '\\"')}",
    image: ${img},
    author: "Heavy Haulers Team",
    publishDate: "${p.publishDate}",
    displayDate: "${p.displayDate}",
    readTime: "${p.readTime}",
    category: "${p.category}",
  },`;
    })
    .join("\n");

  registry = registry.replace(
    "export const blogPosts: BlogPost[] = [\n  // April 2026 Posts",
    `export const blogPosts: BlogPost[] = [\n  // May 2026 Posts\n${entries}\n  // April 2026 Posts`,
  );
  fs.writeFileSync(registryPath, registry, "utf8");
}

// sitemap.xml
const sitemapPath = path.join(ROOT, "public/sitemap.xml");
let sitemap = fs.readFileSync(sitemapPath, "utf8");
if (!sitemap.includes("sjc-towed-vehicle-release-form")) {
  const urls = posts
    .sort((a, b) => b.publishDate.localeCompare(a.publishDate))
    .map(
      (p) =>
        `  <url><loc>https://heavytowpro.com/blog/${p.slug}</loc><changefreq>monthly</changefreq><priority>0.6</priority><lastmod>${p.publishDate}</lastmod></url>`,
    )
    .join("\n");
  sitemap = sitemap.replace(
    "  <!-- Blog Posts - April 2026 -->",
    `  <!-- Blog Posts - May 2026 -->\n${urls}\n  <!-- Blog Posts - April 2026 -->`,
  );
  fs.writeFileSync(sitemapPath, sitemap, "utf8");
}

console.log("Done:", slugs.length, "posts wired");
