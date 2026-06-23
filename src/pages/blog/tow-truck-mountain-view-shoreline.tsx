import CohortBlogPostPage from "@/components/blog/CohortBlogPostPage";
import { getMay2026BlogPost } from "@/data/may2026BlogPosts";

const TowTruckMountainViewShoreline = () => {
  return <CohortBlogPostPage post={getMay2026BlogPost("tow-truck-mountain-view-shoreline")} />;
};

export default TowTruckMountainViewShoreline;
