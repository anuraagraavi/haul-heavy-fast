import CommercialServicePage from "./CommercialServicePage";
import { COMMERCIAL_BY_SLUG } from "@/data/commercialServices";

export default function SemiTruckTowingPage() {
  return <CommercialServicePage service={COMMERCIAL_BY_SLUG["semi-truck-towing"]} />;
}
