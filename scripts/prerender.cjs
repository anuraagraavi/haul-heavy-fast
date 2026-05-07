const fs = require("fs");
const path = require("path");
const Prerenderer = require("@prerenderer/prerenderer");
const PuppeteerRenderer = require("@prerenderer/renderer-puppeteer");

const ROOT = path.resolve(__dirname, "..");
const DIST_DIR = path.join(ROOT, "dist");
const SITE_URL = "https://heavytowpro.com";

const DEFAULT_META = {
  title: "Heavy Haulers - Professional Towing Services | San Francisco Bay Area",
  description:
    "24/7 professional towing and recovery across San Francisco Bay Area and Central Valley (Stockton). 6 dispatch hubs, light to heavy-duty hauling, transparent pricing. Call (650) 881-2400.",
};

function toTitleFromSlug(slug) {
  return slug
    .split("-")
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function routeMeta(route) {
  const canonical = route === "/" ? `${SITE_URL}/` : `${SITE_URL}${route}`;
  if (route.startsWith("/blog/")) {
    const slug = route.replace("/blog/", "");
    const topic = toTitleFromSlug(slug);
    return {
      title: `${topic} | Heavy Tow Pro Blog`,
      description: `Read Heavy Tow Pro's ${topic.toLowerCase()} guide for Bay Area towing, emergency response, and roadside best practices.`,
      canonical,
    };
  }
  if (route.startsWith("/towing-")) {
    const city = toTitleFromSlug(route.replace("/towing-", ""));
    return {
      title: `${city} Towing Services | Heavy Tow Pro`,
      description: `24/7 towing and emergency roadside assistance in ${city}. Fast dispatch, transparent pricing, and professional service.`,
      canonical,
    };
  }

  const page = route === "/" ? "Home" : toTitleFromSlug(route.replace(/^\//, ""));
  return {
    title: route === "/" ? DEFAULT_META.title : `${page} | Heavy Tow Pro`,
    description: DEFAULT_META.description,
    canonical,
  };
}

function insertTagIfMissing(html, pattern, replacement) {
  return pattern.test(html) ? html : html.replace("</head>", `    ${replacement}\n  </head>`);
}

function sitemapRoutes() {
  const sitemapPath = path.join(ROOT, "public", "sitemap.xml");
  if (!fs.existsSync(sitemapPath)) {
    return ["/"];
  }
  const xml = fs.readFileSync(sitemapPath, "utf8");
  const matches = [...xml.matchAll(/<loc>\s*https:\/\/heavytowpro\.com([^<]*)<\/loc>/gi)];
  const parsed = matches
    .map((m) => (m[1] && m[1].trim() ? m[1].trim() : "/"))
    .filter(Boolean);
  return Array.from(new Set(parsed));
}

function resolvePrerenderPaths(allPaths) {
  const requested = process.env.PRERENDER_ROUTES?.split(",").map((x) => x.trim()).filter(Boolean);
  if (requested && requested.length > 0) {
    const requestedSet = new Set(requested);
    const filtered = allPaths.filter((route) => requestedSet.has(route));
    return filtered.length > 0 ? filtered : allPaths;
  }

  const limitRaw = process.env.PRERENDER_ROUTE_LIMIT;
  if (!limitRaw) {
    return allPaths;
  }
  const limit = Number.parseInt(limitRaw, 10);
  if (!Number.isFinite(limit) || limit <= 0) {
    return allPaths;
  }
  return allPaths.slice(0, limit);
}

function prerenderConsoleHandler(route, message) {
  const level = message.type();
  if (level === "error" || level === "warning") {
    console.log(`[prerender:${route}] console.${level}: ${message.text()}`);
  }
}

function createRenderer() {
  const waitMode = process.env.PRERENDER_WAIT_MODE === "event"
    ? "event"
    : process.env.PRERENDER_WAIT_MODE === "element"
      ? "element"
      : "time";
  const skipThirdPartyRequests = process.env.PRERENDER_SKIP_THIRD_PARTY === "true";
  const renderAfterSelector = process.env.PRERENDER_RENDER_AFTER_SELECTOR || "#root > *";
  const injectProperty = "__PRERENDER_INJECTED";
  const inject = { diagnostics: true };

  if (waitMode === "event") {
    return new PuppeteerRenderer({
      renderAfterDocumentEvent: "prerender-ready",
      injectProperty,
      inject,
      maxConcurrentRoutes: 4,
      skipThirdPartyRequests,
      consoleHandler: prerenderConsoleHandler,
      headless: "new",
    });
  }

  if (waitMode === "element") {
    return new PuppeteerRenderer({
      renderAfterElementExists: renderAfterSelector,
      injectProperty,
      inject,
      maxConcurrentRoutes: 4,
      skipThirdPartyRequests,
      consoleHandler: prerenderConsoleHandler,
      headless: "new",
    });
  }

  return new PuppeteerRenderer({
    renderAfterTime: 3000,
    injectProperty,
    inject,
    maxConcurrentRoutes: 4,
    skipThirdPartyRequests,
    consoleHandler: prerenderConsoleHandler,
    headless: "new",
  });
}

function postProcess(renderedRoute) {
  const meta = routeMeta(renderedRoute.originalRoute);
  let html = renderedRoute.html;

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

  html = html
    .replace(
      /<script[\s\S]*?src\s*=\s*['"]https:\/\/googleads\.g\.doubleclick\.net\/pagead\/[\s\S]*?['"][\s\S]*?><\/script>/gi,
      "",
    )
    .replace(
      /<script[\s\S]*?src\s*=\s*['"]https:\/\/www\.googletagmanager\.com\/gtag\/js\?id=AW-[^'"]*['"][\s\S]*?><\/script>/gi,
      "",
    );

  if (html.includes('<div id="root"></div>')) {
    console.warn(`[prerender] Empty root capture for route: ${renderedRoute.originalRoute}`);
  }

  renderedRoute.html = html;
  return renderedRoute;
}

async function runPrerender() {
  if (process.env.DISABLE_PRERENDER === "true") {
    console.log("[prerender] Skipped (DISABLE_PRERENDER=true).");
    return true;
  }

  const routes = resolvePrerenderPaths(sitemapRoutes());
  let prerenderer = null;

  try {
    prerenderer = new Prerenderer({
      staticDir: DIST_DIR,
      outputDir: DIST_DIR,
      routes,
      postProcess,
      renderer: createRenderer(),
    });

    console.log(`[prerender] Starting ${routes.length} route(s).`);
    await prerenderer.initialize();

    const renderedRoutes = await prerenderer.renderRoutes(routes);
    const processed = renderedRoutes.map((r) => postProcess(r));
    await Promise.all(
      processed.map((route) => {
        const outputPath = route.outputPath || path.join(DIST_DIR, route.route, "index.html");
        fs.mkdirSync(path.dirname(outputPath), { recursive: true });
        fs.writeFileSync(outputPath, route.html.trim(), "utf8");
      }),
    );
    console.log("[prerender] Completed.");
    return true;
  } catch (err) {
    const msg = err && typeof err === "object" && "message" in err ? err.message : String(err);
    console.warn("[prerender] Failed, continuing without prerendered HTML:", msg);
    return true;
  } finally {
    if (prerenderer) {
      await Promise.race([
        Promise.resolve()
          .then(() => prerenderer.destroy())
          .catch((destroyErr) => {
            console.warn("[prerender] destroy() warning:", destroyErr);
          }),
        new Promise((resolve) => setTimeout(resolve, 2000)),
      ]);
    }
  }
}

runPrerender()
  .then((ok) => {
    if (ok) {
      process.exit(0);
    }
  })
  .catch((err) => {
    console.error("[prerender] Failed:", err);
    process.exit(1);
  });
