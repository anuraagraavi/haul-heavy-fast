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
const SanMateoCountyPage = lazy(() => import("./pages/locations/san-mateo-county"));
const AlamedaCountyPage = lazy(() => import("./pages/locations/alameda-county"));
const SantaClaraCountyPage = lazy(() => import("./pages/locations/santa-clara-county"));
const ContraCostaCountyPage = lazy(() => import("./pages/locations/contra-costa-county"));
const OaklandPage = lazy(() => import("./pages/locations/oakland"));
const SanJosePage = lazy(() => import("./pages/locations/san-jose"));
const SanFranciscoPage = lazy(() => import("./pages/locations/san-francisco"));
const HaywardPage = lazy(() => import("./pages/locations/hayward"));
const FremontPage = lazy(() => import("./pages/locations/fremont"));
const BerkeleyPage = lazy(() => import("./pages/locations/berkeley"));
const SanMateoPage = lazy(() => import("./pages/locations/san-mateo"));
const RedwoodCityPage = lazy(() => import("./pages/locations/redwood-city"));
const PaloAltoPage = lazy(() => import("./pages/locations/palo-alto"));
const SunnyvalePage = lazy(() => import("./pages/locations/sunnyvale"));
const MountainViewPage = lazy(() => import("./pages/locations/mountain-view"));
const DalyCityPage = lazy(() => import("./pages/locations/daly-city"));
const ConcordPage = lazy(() => import("./pages/locations/concord"));
const WalnutCreekPage = lazy(() => import("./pages/locations/walnut-creek"));
const SantaClaraPage = lazy(() => import("./pages/locations/santa-clara"));
const StocktonPage = lazy(() => import("./pages/locations/stockton"));
const SanLeandroPage = lazy(() => import("./pages/locations/san-leandro"));
const PleasantonPage = lazy(() => import("./pages/locations/pleasanton"));
const LivermorePage = lazy(() => import("./pages/locations/livermore"));
const BurlingamePage = lazy(() => import("./pages/locations/burlingame"));
const SouthSanFranciscoPage = lazy(() => import("./pages/locations/south-san-francisco"));
const MenloParkPage = lazy(() => import("./pages/locations/menlo-park"));
const CupertinoPage = lazy(() => import("./pages/locations/cupertino"));
const MilpitasPage = lazy(() => import("./pages/locations/milpitas"));
const RichmondPage = lazy(() => import("./pages/locations/richmond"));
const AntiochPage = lazy(() => import("./pages/locations/antioch"));

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
const FoodTruckTowingBayArea = lazy(() => import("./pages/blog/food-truck-towing-bay-area"));
const Us101PeninsulaFreewayBreakdownGuide = lazy(() => import("./pages/blog/us-101-peninsula-freeway-breakdown-guide"));
const BayAreaBridgeStallTowingGuide = lazy(() => import("./pages/blog/bay-area-bridge-stall-towing-guide"));
const WinchOutMudslideRainBayArea = lazy(() => import("./pages/blog/winch-out-mudslide-rain-bay-area"));
const RideshareDriverBreakdownTowingBayArea = lazy(() => import("./pages/blog/rideshare-driver-breakdown-towing-bay-area"));
const DotOutOfServiceWeightStationBayArea = lazy(() => import("./pages/blog/dot-out-of-service-weight-station-bay-area"));
const ClassicExoticCarTowingBayArea = lazy(() => import("./pages/blog/classic-exotic-car-towing-bay-area"));
const TravelTrailerSwayBlowoutTowingRecovery = lazy(() => import("./pages/blog/travel-trailer-sway-blowout-towing-recovery"));
const ShuttleBusTransitMinibusBreakdownTowing = lazy(() => import("./pages/blog/shuttle-bus-transit-minibus-breakdown-towing"));
const EvDead12vBatteryTowingFlatbedGuide = lazy(() => import("./pages/blog/ev-dead-12v-battery-towing-flatbed-guide"));
const NorthBayGoldenGateCorridorTowing = lazy(() => import("./pages/blog/north-bay-golden-gate-corridor-towing"));
const CatalyticConverterTheftCarImmobilizedTowing = lazy(() => import("./pages/blog/catalytic-converter-theft-car-immobilized-towing"));
const CommercialTireBlowoutHighwayBayArea = lazy(() => import("./pages/blog/commercial-tire-blowout-highway-bay-area"));
const DealerAuctionVehicleTransportBayArea = lazy(() => import("./pages/blog/dealer-auction-vehicle-transport-bay-area"));
const ConstructionDumpTruckRollOffRecoveryBayArea = lazy(() => import("./pages/blog/construction-dump-truck-roll-off-recovery-bay-area"));

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
            <Route path="/locations/san-mateo-county" element={<SanMateoCountyPage />} />
            <Route path="/locations/alameda-county" element={<AlamedaCountyPage />} />
            <Route path="/locations/santa-clara-county" element={<SantaClaraCountyPage />} />
            <Route path="/locations/contra-costa-county" element={<ContraCostaCountyPage />} />
            <Route path="/towing-oakland" element={<OaklandPage />} />
            <Route path="/towing-san-jose" element={<SanJosePage />} />
            <Route path="/towing-san-francisco" element={<SanFranciscoPage />} />
            <Route path="/towing-hayward" element={<HaywardPage />} />
            <Route path="/towing-fremont" element={<FremontPage />} />
            <Route path="/towing-berkeley" element={<BerkeleyPage />} />
            <Route path="/towing-san-mateo" element={<SanMateoPage />} />
            <Route path="/towing-redwood-city" element={<RedwoodCityPage />} />
            <Route path="/towing-palo-alto" element={<PaloAltoPage />} />
            <Route path="/towing-sunnyvale" element={<SunnyvalePage />} />
            <Route path="/towing-mountain-view" element={<MountainViewPage />} />
            <Route path="/towing-daly-city" element={<DalyCityPage />} />
            <Route path="/towing-concord" element={<ConcordPage />} />
            <Route path="/towing-walnut-creek" element={<WalnutCreekPage />} />
            <Route path="/towing-santa-clara" element={<SantaClaraPage />} />
            <Route path="/towing-stockton" element={<StocktonPage />} />
            <Route path="/towing-san-leandro" element={<SanLeandroPage />} />
            <Route path="/towing-pleasanton" element={<PleasantonPage />} />
            <Route path="/towing-livermore" element={<LivermorePage />} />
            <Route path="/towing-burlingame" element={<BurlingamePage />} />
            <Route path="/towing-south-san-francisco" element={<SouthSanFranciscoPage />} />
            <Route path="/towing-menlo-park" element={<MenloParkPage />} />
            <Route path="/towing-cupertino" element={<CupertinoPage />} />
            <Route path="/towing-milpitas" element={<MilpitasPage />} />
            <Route path="/towing-richmond" element={<RichmondPage />} />
            <Route path="/towing-antioch" element={<AntiochPage />} />
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
            <Route path="/blog/food-truck-towing-bay-area" element={<FoodTruckTowingBayArea />} />
            <Route path="/blog/us-101-peninsula-freeway-breakdown-guide" element={<Us101PeninsulaFreewayBreakdownGuide />} />
            <Route path="/blog/bay-area-bridge-stall-towing-guide" element={<BayAreaBridgeStallTowingGuide />} />
            <Route path="/blog/winch-out-mudslide-rain-bay-area" element={<WinchOutMudslideRainBayArea />} />
            <Route path="/blog/rideshare-driver-breakdown-towing-bay-area" element={<RideshareDriverBreakdownTowingBayArea />} />
            <Route path="/blog/dot-out-of-service-weight-station-bay-area" element={<DotOutOfServiceWeightStationBayArea />} />
            <Route path="/blog/classic-exotic-car-towing-bay-area" element={<ClassicExoticCarTowingBayArea />} />
            <Route path="/blog/travel-trailer-sway-blowout-towing-recovery" element={<TravelTrailerSwayBlowoutTowingRecovery />} />
            <Route path="/blog/shuttle-bus-transit-minibus-breakdown-towing" element={<ShuttleBusTransitMinibusBreakdownTowing />} />
            <Route path="/blog/ev-dead-12v-battery-towing-flatbed-guide" element={<EvDead12vBatteryTowingFlatbedGuide />} />
            <Route path="/blog/north-bay-golden-gate-corridor-towing" element={<NorthBayGoldenGateCorridorTowing />} />
            <Route path="/blog/catalytic-converter-theft-car-immobilized-towing" element={<CatalyticConverterTheftCarImmobilizedTowing />} />
            <Route path="/blog/commercial-tire-blowout-highway-bay-area" element={<CommercialTireBlowoutHighwayBayArea />} />
            <Route path="/blog/dealer-auction-vehicle-transport-bay-area" element={<DealerAuctionVehicleTransportBayArea />} />
            <Route path="/blog/construction-dump-truck-roll-off-recovery-bay-area" element={<ConstructionDumpTruckRollOffRecoveryBayArea />} />
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
