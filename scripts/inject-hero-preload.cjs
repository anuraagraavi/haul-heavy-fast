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

const NOT_FOUND_HTML = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="robots" content="noindex, nofollow" />
    <title>Page Not Found (404) | Heavy Tow Pro</title>
    <meta name="description" content="The page you requested was not found. Contact Heavy Haulers for 24/7 Bay Area towing or return to the homepage." />
    <link rel="icon" href="/lovable-uploads/a43ad238-af3b-47a8-962f-32c9da2fc727.png" type="image/png" />
    <style>
      * { box-sizing: border-box; }
      body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
        background: #0a0a0a;
        color: #f5f5f5;
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 2rem;
      }
      main { max-width: 32rem; text-align: center; }
      h1 { font-size: 2rem; margin: 0 0 1rem; }
      p { color: #a3a3a3; line-height: 1.6; margin: 0 0 1.5rem; }
      a {
        color: #fff;
        background: #ea580c;
        padding: 0.75rem 1.25rem;
        border-radius: 0.5rem;
        text-decoration: none;
        font-weight: 600;
      }
      a:hover { background: #c2410c; }
    </style>
  </head>
  <body>
    <main>
      <h1>Page Not Found</h1>
      <p>The page you are looking for does not exist. Our 24/7 dispatch team is still available if you need emergency towing.</p>
      <a href="/">Return to Homepage</a>
    </main>
  </body>
</html>
`;

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

// Always write a dedicated 404 page (not a clone of the homepage shell).
try {
  fs.writeFileSync(notFoundPath, NOT_FOUND_HTML, "utf8");
  console.log("inject-hero-preload: wrote dist/404.html");
} catch (err) {
  console.warn("inject-hero-preload: failed to write 404.html:", err?.message || err);
}
