/**
 * Post-build: inject preload for homepage LCP hero image into dist/index.html.
 * Uses a stable public URL so preload survives hashed bundle changes.
 *
 * Also emits dist/404.html so static hosts (Netlify) return a real 404
 * instead of a 200 + SPA shell (soft-404 risk for Google).
 */
const fs = require("fs");
const path = require("path");

const distDir = path.join(__dirname, "..", "dist");
const indexPath = path.join(distDir, "index.html");
const notFoundPath = path.join(distDir, "404.html");
const heroPath = "/work-images/light-duty/heavy-haulers-towing-suv-recovery-tree-lined-road-light-duty-bay-area.webp";

if (!fs.existsSync(indexPath)) {
  console.warn("inject-hero-preload: dist/index.html not found, skipping.");
  process.exit(0);
}
const preloadTag = `    <link rel="preload" href="${heroPath}" as="image" type="image/webp">`;

let html = fs.readFileSync(indexPath, "utf8");
if (html.includes(heroPath)) {
  console.log("inject-hero-preload: hero preload already present, skipping.");
} else {
  const insertIdx = html.indexOf("</head>");
  if (insertIdx !== -1) html = html.slice(0, insertIdx) + "\n" + preloadTag + "\n  " + html.slice(insertIdx);
  fs.writeFileSync(indexPath, html);
  console.log("inject-hero-preload: added preload for", heroPath);
}

// Emit a 404.html so unknown routes return HTTP 404 on static hosts.
// Netlify serves /404.html with status 404 automatically when present.
try {
  if (!fs.existsSync(notFoundPath)) {
    const noIndexTag = `    <meta name="robots" content="noindex, nofollow">`;
    let notFoundHtml = html;
    if (!/<meta\s+name="robots"\s+content="noindex,\s*nofollow"\s*>/i.test(notFoundHtml)) {
      notFoundHtml = notFoundHtml.replace("</head>", `${noIndexTag}\n  </head>`);
    }
    notFoundHtml = notFoundHtml.replace(/<title>[\s\S]*?<\/title>/i, "<title>Page Not Found (404) | Heavy Tow Pro</title>");
    fs.writeFileSync(notFoundPath, notFoundHtml, "utf8");
    console.log("inject-hero-preload: wrote dist/404.html");
  }
} catch (err) {
  console.warn("inject-hero-preload: failed to write 404.html:", err?.message || err);
}
