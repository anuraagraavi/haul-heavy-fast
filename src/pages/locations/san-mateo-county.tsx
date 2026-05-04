import CountyTemplate from "@/components/locations/CountyTemplate";
import { LOCATIONS_BY_SLUG } from "@/data/locations";

export default function SanMateoCountyPage() {
  return <CountyTemplate data={LOCATIONS_BY_SLUG["san-mateo-county"]} />;
}
