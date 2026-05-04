import CityTemplate from "@/components/locations/CityTemplate";
import { LOCATIONS_BY_SLUG } from "@/data/locations";

export default function TowingAntiochPage() {
  return <CityTemplate data={LOCATIONS_BY_SLUG.antioch} />;
}
