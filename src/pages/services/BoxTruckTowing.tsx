import CommercialServicePage from "./CommercialServicePage";
import { COMMERCIAL_BY_SLUG } from "@/data/commercialServices";

export default function BoxTruckTowingPage() {
  return <CommercialServicePage service={COMMERCIAL_BY_SLUG["box-truck-towing"]} />;
}
