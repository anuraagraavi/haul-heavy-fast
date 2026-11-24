import CommercialServicePage from "./CommercialServicePage";
import { COMMERCIAL_BY_SLUG } from "@/data/commercialServices";

export default function BusTowingPage() {
  return <CommercialServicePage service={COMMERCIAL_BY_SLUG["bus-towing"]} />;
}
