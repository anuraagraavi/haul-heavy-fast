import CohortBlogPostPage from "@/components/blog/CohortBlogPostPage";
import { getMarch2026BlogPost } from "@/data/march2026BlogPosts";

const SemiTruckBreakdownHighwayGuide = () => {
  return <CohortBlogPostPage post={getMarch2026BlogPost("semi-truck-breakdown-highway-guide")} />;
};

export default SemiTruckBreakdownHighwayGuide;
