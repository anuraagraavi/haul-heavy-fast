import CityTemplate from "@/components/locations/CityTemplate";
import { LOCATIONS_BY_SLUG } from "@/data/locations";

export default function TowingRedwoodCityPage() {
  return <CityTemplate data={LOCATIONS_BY_SLUG["redwood-city"]} />;
}
