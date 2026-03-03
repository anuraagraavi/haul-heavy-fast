import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { imagetools } from "vite-imagetools";
// Use ESM-safe fork for static prerendering of key routes (ads/SEO)
import vitePrerender from "vite-plugin-prerender-esm-fix";

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
    mode === "production" &&
      vitePrerender({
        staticDir: path.join(__dirname, "dist"),
        routes: [
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
          // Blog articles
          "/blog/emergency-towing-guide",
          "/blog/heavy-equipment-transport",
          "/blog/fleet-management-towing",
          "/blog/sf-towing-challenges",
          "/blog/luxury-transport-guide",
          "/blog/winter-towing-preparedness",
          "/blog/motorcycle-towing-guide",
          "/blog/electric-vehicle-towing-guide",
          "/blog/roadside-assistance-vs-towing",
          "/blog/commercial-vehicle-urban-recovery",
          "/blog/commercial-truck-towing-interstate",
          "/blog/accident-scene-management",
          "/blog/construction-equipment-hauling",
          "/blog/vehicle-storage-solutions",
          "/blog/towing-technology-gps-fleet-management",
          "/blog/car-towed-san-francisco",
          "/blog/sf-tow-fee-discount",
          "/blog/california-private-property-towing",
          "/blog/towing-cost-san-francisco",
          "/blog/box-truck-towing-san-francisco",
          "/blog/rv-towing-bay-area",
          "/blog/underground-garage-towing-sf",
          "/blog/heavy-duty-recovery-bay-area",
          "/blog/freeway-towing-bay-area",
          "/blog/chp-towing-california",
          // Landing / campaign pages
          "/towing-services",
          "/towing/bay-area-flatbed-emergency-towing-24-7",
          "/towing/heavy-duty-towing-bay-area",
          // Utility / legal
          "/privacy-policy",
          "/terms",
          "/sitemap",
          "/thank-you",
        ],
      }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          ui: ['@radix-ui/react-accordion', '@radix-ui/react-dialog', '@radix-ui/react-dropdown-menu'],
          icons: ['lucide-react'],
          forms: ['react-hook-form', '@hookform/resolvers', 'zod']
        }
      }
    },
    cssCodeSplit: true,
    sourcemap: false
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'lucide-react']
  }
}));
