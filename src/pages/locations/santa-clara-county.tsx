import CountyTemplate from "@/components/locations/CountyTemplate";
import { LOCATIONS_BY_SLUG } from "@/data/locations";

export default function SantaClaraCountyPage() {
  return <CountyTemplate data={LOCATIONS_BY_SLUG["santa-clara-county"]} />;
}
