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
import WinterTowingPreparedness from "./pages/blog/winter-towing-preparedness";
import MotorcycleTowingGuide from "./pages/blog/motorcycle-towing-guide";
import ElectricVehicleTowingGuide from "./pages/blog/electric-vehicle-towing-guide";
import RoadsideAssistanceVsTowing from "./pages/blog/roadside-assistance-vs-towing";
import CommercialVehicleUrbanRecovery from "./pages/blog/commercial-vehicle-urban-recovery";
import CommercialTruckTowingInterstate from "./pages/blog/commercial-truck-towing-interstate";
import AccidentSceneManagement from "./pages/blog/accident-scene-management";
import ConstructionEquipmentHauling from "./pages/blog/construction-equipment-hauling";
import VehicleStorageSolutions from "./pages/blog/vehicle-storage-solutions";
import TowingTechnologyGPSFleetManagement from "./pages/blog/towing-technology-gps-fleet-management";
import CarTowedSanFrancisco from "./pages/blog/car-towed-san-francisco";
import SfTowFeeDiscount from "./pages/blog/sf-tow-fee-discount";
import CaliforniaPrivatePropertyTowing from "./pages/blog/california-private-property-towing";
import TowingCostSanFrancisco from "./pages/blog/towing-cost-san-francisco";
import BoxTruckTowingSanFrancisco from "./pages/blog/box-truck-towing-san-francisco";
import RVTowingBayArea from "./pages/blog/rv-towing-bay-area";
import UndergroundGarageTowingSF from "./pages/blog/underground-garage-towing-sf";
import HeavyDutyRecoveryBayArea from "./pages/blog/heavy-duty-recovery-bay-area";
import FreewayTowingBayArea from "./pages/blog/freeway-towing-bay-area";
import CHPTowingCalifornia from "./pages/blog/chp-towing-california";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
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
          <Route path="/blog/fleet-management-towing" element={<FleetManagementTowing />} />
          <Route path="/blog/sf-towing-challenges" element={<SfTowingChallenges />} />
          <Route path="/blog/luxury-transport-guide" element={<LuxuryTransportGuide />} />
          <Route path="/blog/winter-towing-preparedness" element={<WinterTowingPreparedness />} />
          <Route path="/blog/motorcycle-towing-guide" element={<MotorcycleTowingGuide />} />
          <Route path="/blog/electric-vehicle-towing-guide" element={<ElectricVehicleTowingGuide />} />
          <Route path="/blog/roadside-assistance-vs-towing" element={<RoadsideAssistanceVsTowing />} />
          <Route path="/blog/commercial-vehicle-urban-recovery" element={<CommercialVehicleUrbanRecovery />} />
          <Route path="/blog/commercial-truck-towing-interstate" element={<CommercialTruckTowingInterstate />} />
          <Route path="/blog/accident-scene-management" element={<AccidentSceneManagement />} />
          <Route path="/blog/construction-equipment-hauling" element={<ConstructionEquipmentHauling />} />
          <Route path="/blog/vehicle-storage-solutions" element={<VehicleStorageSolutions />} />
          <Route path="/blog/towing-technology-gps-fleet-management" element={<TowingTechnologyGPSFleetManagement />} />
          <Route path="/blog/car-towed-san-francisco" element={<CarTowedSanFrancisco />} />
          <Route path="/blog/sf-tow-fee-discount" element={<SfTowFeeDiscount />} />
          <Route path="/blog/california-private-property-towing" element={<CaliforniaPrivatePropertyTowing />} />
          <Route path="/blog/towing-cost-san-francisco" element={<TowingCostSanFrancisco />} />
          <Route path="/blog/box-truck-towing-san-francisco" element={<BoxTruckTowingSanFrancisco />} />
          <Route path="/blog/rv-towing-bay-area" element={<RVTowingBayArea />} />
          <Route path="/blog/underground-garage-towing-sf" element={<UndergroundGarageTowingSF />} />
          <Route path="/blog/heavy-duty-recovery-bay-area" element={<HeavyDutyRecoveryBayArea />} />
          <Route path="/blog/freeway-towing-bay-area" element={<FreewayTowingBayArea />} />
          <Route path="/blog/chp-towing-california" element={<CHPTowingCalifornia />} />
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
