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

const PuppeteerRenderer = vitePrerender.PuppeteerRenderer;
const SITE_URL = "https://heavytowpro.com";

const DEFAULT_META = {
  title: "Heavy Haulers - Professional Towing Services | San Francisco Bay Area",
  description:
    "24/7 professional towing and recovery across San Francisco Bay Area and Central Valley (Stockton). 6 dispatch hubs, light to heavy-duty hauling, transparent pricing. Call (650) 881-2400.",
};

function toTitleFromSlug(slug: string): string {
  return slug
    .split("-")
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function routeMeta(route: string) {
  const canonical = route === "/" ? `${SITE_URL}/` : `${SITE_URL}${route}`;
  if (route.startsWith("/blog/")) {
    const slug = route.replace("/blog/", "");
    const topic = toTitleFromSlug(slug);
    return {
      title: `${topic} | Heavy Tow Pro Blog`,
      description: `Read Heavy Tow Pro's ${topic.toLowerCase()} guide for Bay Area towing, emergency response, and roadside best practices.`,
      canonical,
      h1: topic,
    };
  }
  if (route.startsWith("/towing-")) {
    const city = toTitleFromSlug(route.replace("/towing-", ""));
    return {
      title: `${city} Towing Services | Heavy Tow Pro`,
      description: `24/7 towing and emergency roadside assistance in ${city}. Fast dispatch, transparent pricing, and professional service.`,
      canonical,
      h1: `${city} Towing Services`,
    };
  }
  if (route === "/towing/bay-area-flatbed-emergency-towing-24-7") {
    return {
      title: "Bay Area Flatbed Emergency Towing 24/7 | Heavy Tow Pro",
      description:
        "Need emergency flatbed towing in the Bay Area? Heavy Tow Pro dispatches 24/7 with transparent pricing and fast response.",
      canonical,
      h1: "Bay Area Flatbed Emergency Towing 24/7",
    };
  }
  if (route === "/towing/heavy-duty-towing-bay-area") {
    return {
      title: "Heavy Duty Towing Bay Area | Heavy Tow Pro",
      description:
        "Heavy-duty towing and recovery for semis, buses, and equipment across the Bay Area. Commercial dispatch available 24/7.",
      canonical,
      h1: "Heavy Duty Towing Bay Area",
    };
  }
  if (route === "/contact") {
    return {
      title: "Contact Heavy Tow Pro | 24/7 Bay Area Dispatch",
      description:
        "Contact Heavy Tow Pro for emergency towing, roadside assistance, and fleet support across the San Francisco Bay Area.",
      canonical,
      h1: "Contact Heavy Tow Pro",
    };
  }
  if (route === "/get-a-quote") {
    return {
      title: "Get a Towing Quote | Heavy Tow Pro",
      description:
        "Request a transparent towing quote from Heavy Tow Pro. Fast response, no hidden fees, and 24/7 dispatch.",
      canonical,
      h1: "Get a Towing Quote",
    };
  }

  const page = route === "/" ? "Home" : toTitleFromSlug(route.replace(/^\//, ""));
  return {
    title: route === "/" ? DEFAULT_META.title : `${page} | Heavy Tow Pro`,
    description: DEFAULT_META.description,
    canonical,
  };
}

function insertTagIfMissing(html: string, pattern: RegExp, replacement: string): string {
  return pattern.test(html) ? html : html.replace("</head>", `    ${replacement}\n  </head>`);
}

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
        postProcess(renderedRoute) {
          const meta = routeMeta(renderedRoute.originalRoute);
          let html = renderedRoute.html;

          // Preserve route-authored Helmet metadata; only patch defaults/missing tags.
          const titlePattern = /<title>([\s\S]*?)<\/title>/i;
          const titleMatch = html.match(titlePattern);
          const currentTitle = titleMatch?.[1]?.trim() ?? "";
          if (!currentTitle) {
            html = html.replace("</head>", `    <title>${meta.title}</title>\n  </head>`);
          } else if (currentTitle === DEFAULT_META.title) {
            html = html.replace(titlePattern, `<title>${meta.title}</title>`);
          }

          html = insertTagIfMissing(
            html,
            /<meta\s+name="description"[^>]*>/i,
            `<meta name="description" content="${meta.description}">`,
          );
          html = insertTagIfMissing(
            html,
            /<link\s+rel="canonical"[^>]*>/i,
            `<link rel="canonical" href="${meta.canonical}">`,
          );
          html = insertTagIfMissing(
            html,
            /<meta\s+property="og:title"[^>]*>/i,
            `<meta property="og:title" content="${meta.title}">`,
          );
          html = insertTagIfMissing(
            html,
            /<meta\s+property="og:description"[^>]*>/i,
            `<meta property="og:description" content="${meta.description}">`,
          );
          html = insertTagIfMissing(
            html,
            /<meta\s+property="og:url"[^>]*>/i,
            `<meta property="og:url" content="${meta.canonical}">`,
          );
          html = insertTagIfMissing(
            html,
            /<meta\s+property="og:type"[^>]*>/i,
            `<meta property="og:type" content="website">`,
          );

          // Strip runtime-injected ad/tracking scripts captured by Puppeteer snapshot.
          html = html
            .replace(
              /<script[\s\S]*?src\s*=\s*['"]https:\/\/googleads\.g\.doubleclick\.net\/pagead\/[\s\S]*?['"][\s\S]*?><\/script>/gi,
              "",
            )
            .replace(
              /<script[\s\S]*?src\s*=\s*['"]https:\/\/www\.googletagmanager\.com\/gtag\/js\?id=AW-[^'"]*['"][\s\S]*?><\/script>/gi,
              "",
            );

          // Warn on prerender misses rather than shipping thin placeholder content.
          if (html.includes('<div id="root"></div>')) {
            console.warn(`[prerender] Empty root capture for route: ${renderedRoute.originalRoute}`);
          }

          renderedRoute.html = html;
          return renderedRoute;
        },
        renderer: new PuppeteerRenderer({
          renderAfterDocumentEvent: "prerender-ready",
          renderAfterTime: 15000,
          maxConcurrentRoutes: 4,
          skipThirdPartyRequests: true,
          headless: "new",
        }),
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
