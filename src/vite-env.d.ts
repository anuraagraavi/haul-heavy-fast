/// <reference types="vite/client" />

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
