import CohortBlogPostPage from "@/components/blog/CohortBlogPostPage";
import { getMay2026BlogPost } from "@/data/may2026BlogPosts";

const SanMateoCountyVehicleRelease = () => {
  return <CohortBlogPostPage post={getMay2026BlogPost("san-mateo-county-vehicle-release")} />;
};

export default SanMateoCountyVehicleRelease;
