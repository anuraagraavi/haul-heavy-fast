import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { fileURLToPath } from "node:url";
import { componentTagger } from "lovable-tagger";
import { imagetools } from "vite-imagetools";
import { visualizer } from "rollup-plugin-visualizer";

const rootDir = path.dirname(fileURLToPath(import.meta.url));

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // Prerender runtime can run on older Chromium; transpile lower when enabled.
  // This avoids parse-time crashes before React mounts.
  ...(process.env.ENABLE_PRERENDER === "true" ? { esbuild: { target: "es2019" } } : {}),
  server: {
    host: "::",
    port: 5173,
  },
  plugins: [
    react(),
    imagetools(),
    // `lovable-tagger` AST transforms can break `@vitejs/plugin-react-swc` in some environments
    // (dev-only HTTP 500 on `/src/App.tsx`). Opt-in with LOVABLE_TAGGER=true when needed.
    mode === "development" && process.env.LOVABLE_TAGGER === "true" && componentTagger(),
    process.env.ANALYZE === "true" &&
      visualizer({
        filename: path.join(rootDir, "dist", "stats.html"),
        gzipSize: true,
        brotliSize: true,
        template: "treemap",
      }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(rootDir, "src"),
      "react-helmet": "react-helmet-async",
    },
  },
  build: {
    target: process.env.ENABLE_PRERENDER === "true" ? "es2019" : "modules",
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
    sourcemap: false,
  },
  optimizeDeps: {
    include: ["react", "react-dom", "react-router-dom", "lucide-react"],
  },
}));
