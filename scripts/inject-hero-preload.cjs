/**
 * Post-build: inject preload for LCP hero image into dist/index.html.
 * Finds the built hero asset (hero-tow-truck) in dist/assets and adds a preload link.
 */
const fs = require("fs");
const path = require("path");

const distDir = path.join(__dirname, "..", "dist");
const assetsDir = path.join(distDir, "assets");
const indexPath = path.join(distDir, "index.html");

if (!fs.existsSync(assetsDir) || !fs.existsSync(indexPath)) {
  console.warn("inject-hero-preload: dist/assets or dist/index.html not found, skipping.");
  process.exit(0);
}

const files = fs.readdirSync(assetsDir);
// Prefer WebP for LCP preload (smaller, same quality)
const heroWebp = files.find((f) => f.includes("hero-tow-truck") && f.endsWith(".webp"));
const heroJpg = files.find((f) => f.includes("hero-tow-truck") && (f.endsWith(".jpg") || f.endsWith(".jpeg")));
const heroFile = heroWebp || heroJpg;

if (!heroFile) {
  console.warn("inject-hero-preload: no hero-tow-truck asset found in dist/assets, skipping.");
  process.exit(0);
}

const type = heroFile.endsWith(".webp") ? "image/webp" : "image/jpeg";
const preloadTag = `    <link rel="preload" href="/assets/${heroFile}" as="image" type="${type}">`;

let html = fs.readFileSync(indexPath, "utf8");
// Insert after the logo preload line so hero preload is early
const logoPreload = '<link rel="preload" href="/lovable-uploads/';
const idx = html.indexOf(logoPreload);
if (idx === -1) {
  const insertIdx = html.indexOf("</head>");
  if (insertIdx !== -1) html = html.slice(0, insertIdx) + "\n" + preloadTag + "\n  " + html.slice(insertIdx);
} else {
  const endOfLine = html.indexOf(">", idx) + 1;
  html = html.slice(0, endOfLine) + "\n" + preloadTag + html.slice(endOfLine);
}

fs.writeFileSync(indexPath, html);
console.log("inject-hero-preload: added preload for", heroFile);
