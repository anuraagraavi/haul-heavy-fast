import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { readdirSync } from "fs";
import { componentTagger } from "lovable-tagger";
import { imagetools } from "vite-imagetools";
// Use ESM-safe fork for static prerendering of key routes (ads/SEO)
import vitePrerender from "vite-plugin-prerender-esm-fix";
import { visualizer } from "rollup-plugin-visualizer";
import { LOCATION_URLS } from "./src/data/locations";

/** Blog URLs derived from `src/pages/blog/*.tsx` so vite config does not import `@/assets` via blogRegistry. */
function blogPrerenderPaths(): string[] {
  const dir = path.join(__dirname, "src", "pages", "blog");
  return readdirSync(dir, { withFileTypes: true })
    .filter((e) => e.isFile() && e.name.endsWith(".tsx"))
    .map((e) => `/blog/${e.name.replace(/\.tsx$/, "")}`);
}

const STATIC_MARKETING_PATHS = [
  "/",
  "/about",
  "/services",
  "/services/light-duty",
  "/services/medium-duty",
  "/services/heavy-duty",
  "/locations",
  "/get-a-quote",
  "/contact",
  "/blog",
  "/towing-services",
  "/towing/bay-area-flatbed-emergency-towing-24-7",
  "/towing/heavy-duty-towing-bay-area",
  "/privacy-policy",
  "/terms",
  "/sitemap",
  "/thank-you",
] as const;

const PRERENDER_PATHS = Array.from(
  new Set([...STATIC_MARKETING_PATHS, ...LOCATION_URLS, ...blogPrerenderPaths()]),
);

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    imagetools(),
    mode === "development" && componentTagger(),
    // NOTE: Prerendering is opt-in (ENABLE_PRERENDER=true) to avoid failures in
    // hosts without a headless browser. Routes include all LOCATION_URLs and blog slugs from the registry.
    mode === "production" &&
      process.env.ENABLE_PRERENDER === "true" &&
      vitePrerender({
        staticDir: path.join(__dirname, "dist"),
        routes: PRERENDER_PATHS,
      }),
    process.env.ANALYZE === "true" &&
      visualizer({
        filename: path.join(__dirname, "dist", "stats.html"),
        gzipSize: true,
        brotliSize: true,
        template: "treemap",
      }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "react-helmet": "react-helmet-async",
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules/react-dom/") || id.includes("node_modules/react/")) {
            return "vendor";
          }
          if (id.includes("node_modules/react-router")) {
            return "router";
          }
          if (id.includes("node_modules/@radix-ui/")) {
            return "radix-ui";
          }
          if (id.includes("node_modules/lucide-react")) {
            return "icons";
          }
          if (
            id.includes("node_modules/react-hook-form") ||
            id.includes("node_modules/@hookform/resolvers") ||
            id.includes("node_modules/zod/")
          ) {
            return "forms";
          }
        },
      },
    },
    cssCodeSplit: true,
    sourcemap: false
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'lucide-react']
  }
}));
