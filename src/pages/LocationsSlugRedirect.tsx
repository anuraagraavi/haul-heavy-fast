import { Navigate, useParams } from "react-router-dom";
import { LOCATIONS_BY_SLUG } from "@/data/locations";
import NotFound from "./NotFound";

/**
 * Legacy URLs used `/locations/{citySlug}`; city pages now live at `LocationData.url` (`/towing-{slug}`).
 * County hubs keep explicit `/locations/*-county` routes — those never hit this component.
 */
export default function LocationsSlugRedirect() {
  const { slug } = useParams();
  if (!slug || slug.endsWith("-county")) {
    return <NotFound />;
  }
  const location = LOCATIONS_BY_SLUG[slug];
  if (!location || location.kind !== "city") {
    return <NotFound />;
  }
  return <Navigate to={location.url} replace />;
}
