import CohortBlogPostPage from "@/components/blog/CohortBlogPostPage";
import { getMay2026BlogPost } from "@/data/may2026BlogPosts";

const SanMateoCaltrainTowTruckPickup = () => {
  return <CohortBlogPostPage post={getMay2026BlogPost("san-mateo-caltrain-tow-truck-pickup")} />;
};

export default SanMateoCaltrainTowTruckPickup;
