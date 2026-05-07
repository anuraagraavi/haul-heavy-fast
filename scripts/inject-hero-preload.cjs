/**
 * Post-build: inject preload for homepage LCP hero image into dist/index.html.
 * Uses a stable public URL so preload survives hashed bundle changes.
 */
const fs = require("fs");
const path = require("path");

const distDir = path.join(__dirname, "..", "dist");
const indexPath = path.join(distDir, "index.html");
const heroPath = "/work-images/light-duty/heavy-haulers-towing-suv-recovery-tree-lined-road-light-duty-bay-area.webp";

if (!fs.existsSync(indexPath)) {
  console.warn("inject-hero-preload: dist/index.html not found, skipping.");
  process.exit(0);
}
const preloadTag = `    <link rel="preload" href="${heroPath}" as="image" type="image/webp">`;

let html = fs.readFileSync(indexPath, "utf8");
if (html.includes(heroPath)) {
  console.log("inject-hero-preload: hero preload already present, skipping.");
  process.exit(0);
}
const insertIdx = html.indexOf("</head>");
if (insertIdx !== -1) html = html.slice(0, insertIdx) + "\n" + preloadTag + "\n  " + html.slice(insertIdx);

fs.writeFileSync(indexPath, html);
console.log("inject-hero-preload: added preload for", heroPath);
