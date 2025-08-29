import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import LightDuty from "./pages/LightDuty";
import MediumDuty from "./pages/MediumDuty";
import HeavyDuty from "./pages/HeavyDuty";
import Locations from "./pages/Locations";
import GetQuote from "./pages/GetQuote";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Sitemap from "./pages/Sitemap";
import ThankYou from "./pages/ThankYou";
import EmergencyTowingGuide from "./pages/blog/emergency-towing-guide";
import HeavyEquipmentTransport from "./pages/blog/heavy-equipment-transport";
import FleetManagementTowing from "./pages/blog/fleet-management-towing";
import SfTowingChallenges from "./pages/blog/sf-towing-challenges";
import LuxuryTransportGuide from "./pages/blog/luxury-transport-guide";
import NotFound from "./pages/NotFound";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/light-duty" element={<LightDuty />} />
          <Route path="/services/medium-duty" element={<MediumDuty />} />
          <Route path="/services/heavy-duty" element={<HeavyDuty />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/get-a-quote" element={<GetQuote />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/emergency-towing-guide" element={<EmergencyTowingGuide />} />
          <Route path="/blog/heavy-equipment-transport" element={<HeavyEquipmentTransport />} />
          <Route path="/blog/fleet-management-reducing-downtime" element={<FleetManagementTowing />} />
          <Route path="/blog/san-francisco-towing-challenges" element={<SfTowingChallenges />} />
          <Route path="/blog/luxury-vehicle-transport" element={<LuxuryTransportGuide />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="/privacy-policy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/sitemap" element={<Sitemap />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
