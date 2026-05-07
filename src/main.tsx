import { createRoot } from 'react-dom/client'
import { Helmet, HelmetProvider } from "react-helmet-async";
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <Helmet prioritizeSeoTags />
    <App />
  </HelmetProvider>
);
