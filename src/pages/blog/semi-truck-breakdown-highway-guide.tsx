import MarchBlogPostPage from "@/components/blog/MarchBlogPostPage";
import { getMarch2026BlogPost } from "@/data/march2026BlogPosts";

const SemiTruckBreakdownHighwayGuide = () => {
  return <MarchBlogPostPage post={getMarch2026BlogPost("semi-truck-breakdown-highway-guide")} />;
};

export default SemiTruckBreakdownHighwayGuide;
