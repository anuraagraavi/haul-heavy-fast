import CountyTemplate from "@/components/locations/CountyTemplate";
import { LOCATIONS_BY_SLUG } from "@/data/locations";

export default function ContraCostaCountyPage() {
  return <CountyTemplate data={LOCATIONS_BY_SLUG["contra-costa-county"]} />;
}
