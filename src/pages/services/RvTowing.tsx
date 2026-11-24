import CommercialServicePage from "./CommercialServicePage";
import { COMMERCIAL_BY_SLUG } from "@/data/commercialServices";

export default function RvTowingPage() {
  return <CommercialServicePage service={COMMERCIAL_BY_SLUG["rv-towing"]} />;
}
