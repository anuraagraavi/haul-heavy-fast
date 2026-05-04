/// <reference types="vite/client" />

/** Google tag (gtag.js) — optional on window until the script loads */
interface Window {
  gtag?: (...args: unknown[]) => void;
}

// vite-imagetools: image imports with query params (e.g. ?w=1920&format=webp) resolve to URL string
declare module "*.jpg?*" {
  const src: string;
  export default src;
}
declare module "*.jpeg?*" {
  const src: string;
  export default src;
}
declare module "*.png?*" {
  const src: string;
  export default src;
}
