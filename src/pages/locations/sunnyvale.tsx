import CityTemplate from "@/components/locations/CityTemplate";
import { LOCATIONS_BY_SLUG } from "@/data/locations";

export default function TowingSunnyvalePage() {
  return <CityTemplate data={LOCATIONS_BY_SLUG.sunnyvale} />;
}
