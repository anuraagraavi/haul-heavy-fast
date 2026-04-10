import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

// Route-level code splitting: lazy-load all pages for smaller initial bundle
const Index = lazy(() => import("./pages/Index"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const LightDuty = lazy(() => import("./pages/LightDuty"));
const MediumDuty = lazy(() => import("./pages/MediumDuty"));
const HeavyDuty = lazy(() => import("./pages/HeavyDuty"));
const LandingHeavyDuty = lazy(() => import("./pages/LandingHeavyDuty"));
const Locations = lazy(() => import("./pages/Locations"));
const GetQuote = lazy(() => import("./pages/GetQuote"));
const Contact = lazy(() => import("./pages/Contact"));
const Blog = lazy(() => import("./pages/Blog"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Terms = lazy(() => import("./pages/Terms"));
const Sitemap = lazy(() => import("./pages/Sitemap"));
const ThankYou = lazy(() => import("./pages/ThankYou"));
const NotFound = lazy(() => import("./pages/NotFound"));
const LandingLightMedium = lazy(() => import("./pages/LandingLightMedium"));

const EmergencyTowingGuide = lazy(() => import("./pages/blog/emergency-towing-guide"));
const HeavyEquipmentTransport = lazy(() => import("./pages/blog/heavy-equipment-transport"));
const FleetManagementTowing = lazy(() => import("./pages/blog/fleet-management-towing"));
const SfTowingChallenges = lazy(() => import("./pages/blog/sf-towing-challenges"));
const LuxuryTransportGuide = lazy(() => import("./pages/blog/luxury-transport-guide"));
const WinterTowingPreparedness = lazy(() => import("./pages/blog/winter-towing-preparedness"));
const MotorcycleTowingGuide = lazy(() => import("./pages/blog/motorcycle-towing-guide"));
const ElectricVehicleTowingGuide = lazy(() => import("./pages/blog/electric-vehicle-towing-guide"));
const RoadsideAssistanceVsTowing = lazy(() => import("./pages/blog/roadside-assistance-vs-towing"));
const CommercialVehicleUrbanRecovery = lazy(() => import("./pages/blog/commercial-vehicle-urban-recovery"));
const CommercialTruckTowingInterstate = lazy(() => import("./pages/blog/commercial-truck-towing-interstate"));
const AccidentSceneManagement = lazy(() => import("./pages/blog/accident-scene-management"));
const ConstructionEquipmentHauling = lazy(() => import("./pages/blog/construction-equipment-hauling"));
const VehicleStorageSolutions = lazy(() => import("./pages/blog/vehicle-storage-solutions"));
const TowingTechnologyGPSFleetManagement = lazy(() => import("./pages/blog/towing-technology-gps-fleet-management"));
const CarTowedSanFrancisco = lazy(() => import("./pages/blog/car-towed-san-francisco"));
const SfTowFeeDiscount = lazy(() => import("./pages/blog/sf-tow-fee-discount"));
const CaliforniaPrivatePropertyTowing = lazy(() => import("./pages/blog/california-private-property-towing"));
const TowingCostSanFrancisco = lazy(() => import("./pages/blog/towing-cost-san-francisco"));
const BoxTruckTowingSanFrancisco = lazy(() => import("./pages/blog/box-truck-towing-san-francisco"));
const RVTowingBayArea = lazy(() => import("./pages/blog/rv-towing-bay-area"));
const UndergroundGarageTowingSF = lazy(() => import("./pages/blog/underground-garage-towing-sf"));
const HeavyDutyRecoveryBayArea = lazy(() => import("./pages/blog/heavy-duty-recovery-bay-area"));
const FreewayTowingBayArea = lazy(() => import("./pages/blog/freeway-towing-bay-area"));
const CHPTowingCalifornia = lazy(() => import("./pages/blog/chp-towing-california"));
const DoesInsuranceCoverTowingCalifornia = lazy(() => import("./pages/blog/does-insurance-cover-towing-california"));
const PredatoryTowingCaliforniaRights = lazy(() => import("./pages/blog/predatory-towing-california-rights"));
const DuiImpoundCalifornia = lazy(() => import("./pages/blog/dui-impound-california"));
const ApartmentHoaTowingRightsCalifornia = lazy(() => import("./pages/blog/apartment-hoa-towing-rights-california"));
const WhatToDoAfterCarAccidentBayArea = lazy(() => import("./pages/blog/what-to-do-after-car-accident-bay-area"));
const GetCarOutOfImpoundBayArea = lazy(() => import("./pages/blog/get-car-out-of-impound-bay-area"));
const I880BayAreaInterstateAccidentRecovery = lazy(() => import("./pages/blog/i-880-bay-area-interstate-accident-recovery"));
const FlatbedVsWheelLiftTowing = lazy(() => import("./pages/blog/flatbed-vs-wheel-lift-towing"));
const Awd4wdTowingGuideFlatbed = lazy(() => import("./pages/blog/awd-4wd-towing-guide-flatbed"));
const TeslaTowingBayAreaGuide = lazy(() => import("./pages/blog/tesla-towing-bay-area-guide"));
const HowToChooseTowingCompany = lazy(() => import("./pages/blog/how-to-choose-towing-company"));
const LongDistanceTowingCostCalifornia = lazy(() => import("./pages/blog/long-distance-towing-cost-california"));
const SemiTruckBreakdownHighwayGuide = lazy(() => import("./pages/blog/semi-truck-breakdown-highway-guide"));
const SpringDrivingBayAreaBreakdownPrevention = lazy(() => import("./pages/blog/spring-driving-bay-area-breakdown-prevention"));
const TowingLoweredModifiedCarGuide = lazy(() => import("./pages/blog/towing-lowered-modified-car-guide"));

function RouteFallback() {
  return (
    <div className="min-h-[50vh] flex items-center justify-center" aria-hidden="true">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent" />
    </div>
  );
}

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={<RouteFallback />}>
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
            <Route path="/blog/does-insurance-cover-towing-california" element={<DoesInsuranceCoverTowingCalifornia />} />
            <Route path="/blog/predatory-towing-california-rights" element={<PredatoryTowingCaliforniaRights />} />
            <Route path="/blog/dui-impound-california" element={<DuiImpoundCalifornia />} />
            <Route path="/blog/apartment-hoa-towing-rights-california" element={<ApartmentHoaTowingRightsCalifornia />} />
            <Route path="/blog/what-to-do-after-car-accident-bay-area" element={<WhatToDoAfterCarAccidentBayArea />} />
            <Route path="/blog/get-car-out-of-impound-bay-area" element={<GetCarOutOfImpoundBayArea />} />
            <Route path="/blog/i-880-bay-area-interstate-accident-recovery" element={<I880BayAreaInterstateAccidentRecovery />} />
            <Route path="/blog/flatbed-vs-wheel-lift-towing" element={<FlatbedVsWheelLiftTowing />} />
            <Route path="/blog/awd-4wd-towing-guide-flatbed" element={<Awd4wdTowingGuideFlatbed />} />
            <Route path="/blog/tesla-towing-bay-area-guide" element={<TeslaTowingBayAreaGuide />} />
            <Route path="/blog/how-to-choose-towing-company" element={<HowToChooseTowingCompany />} />
            <Route path="/blog/long-distance-towing-cost-california" element={<LongDistanceTowingCostCalifornia />} />
            <Route path="/blog/semi-truck-breakdown-highway-guide" element={<SemiTruckBreakdownHighwayGuide />} />
            <Route path="/blog/spring-driving-bay-area-breakdown-prevention" element={<SpringDrivingBayAreaBreakdownPrevention />} />
            <Route path="/blog/towing-lowered-modified-car-guide" element={<TowingLoweredModifiedCarGuide />} />
            <Route path="/towing-services" element={<LandingLightMedium />} />
            <Route path="/towing/bay-area-flatbed-emergency-towing-24-7" element={<LandingLightMedium />} />
            <Route path="/towing/heavy-duty-towing-bay-area" element={<LandingHeavyDuty />} />
            <Route path="/thank-you" element={<ThankYou />} />
            <Route path="/privacy-policy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/sitemap" element={<Sitemap />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
