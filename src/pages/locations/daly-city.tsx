import CityTemplate from "@/components/locations/CityTemplate";
import { LOCATIONS_BY_SLUG } from "@/data/locations";

export default function TowingDalyCityPage() {
  return <CityTemplate data={LOCATIONS_BY_SLUG["daly-city"]} />;
}
