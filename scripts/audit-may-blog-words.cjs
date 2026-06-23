/**
 * Audit May 2026 blog word counts after expansion merge.
 * Run: node scripts/audit-may-blog-words.cjs
 */
const fs = require("fs");
const path = require("path");

// Dynamic import via ts not available — parse expansions + base file heuristically
const baseFile = fs.readFileSync(path.join(__dirname, "../src/data/may2026BlogPosts.ts"), "utf8");
const expFile = fs.readFileSync(path.join(__dirname, "../src/data/may2026BlogExpansions.ts"), "utf8");

const slugs = [...baseFile.matchAll(/"([a-z0-9-]+)":\s*\{\s*data:/g)].map((m) => m[1]);
const uniqueSlugs = [...new Set(slugs)];

function countWords(text) {
  return text.replace(/[^a-zA-Z0-9\s'-]/g, " ").split(/\s+/).filter(Boolean).length;
}

function extractStrings(block) {
  return [...block.matchAll(/"([^"\\]{12,})"/g)].map((m) => m[1]).filter((s) => !s.includes("http") && !s.startsWith("/") && !s.includes("@"));
}

for (const slug of uniqueSlugs) {
  const baseStart = baseFile.indexOf(`"${slug}": {`);
  let depth = 0;
  let i = baseStart;
  for (; i < baseFile.length; i++) {
    if (baseFile[i] === "{") depth++;
    if (baseFile[i] === "}") {
      depth--;
      if (depth === 0) break;
    }
  }
  const baseBlock = baseFile.slice(baseStart, i + 1);
  const expStart = expFile.indexOf(`"${slug}": {`);
  const expEnd = expFile.indexOf("\n  },", expStart);
  const expBlock = expFile.slice(expStart, expEnd);

  const words = countWords([...extractStrings(baseBlock), ...extractStrings(expBlock)].join(" "));
  const ok = words >= 600 && words <= 950 ? "OK" : words < 600 ? "LOW" : "HIGH";
  console.log(`${ok.padEnd(4)} ${String(words).padStart(4)}  ${slug}`);
}
