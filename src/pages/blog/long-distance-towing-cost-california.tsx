import CohortBlogPostPage from "@/components/blog/CohortBlogPostPage";
import { getMarch2026BlogPost } from "@/data/march2026BlogPosts";

const LongDistanceTowingCostCalifornia = () => {
  return <CohortBlogPostPage post={getMarch2026BlogPost("long-distance-towing-cost-california")} />;
};

export default LongDistanceTowingCostCalifornia;
