import CommercialServicePage from "./CommercialServicePage";
import { COMMERCIAL_BY_SLUG } from "@/data/commercialServices";

export default function CommercialTowingPage() {
  return <CommercialServicePage service={COMMERCIAL_BY_SLUG["commercial-towing"]} />;
}
