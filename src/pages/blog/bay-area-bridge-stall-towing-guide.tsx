import CohortBlogPostPage from "@/components/blog/CohortBlogPostPage";
import { getApril2026BlogPost } from "@/data/april2026BlogPosts";

const BayAreaBridgeStallTowingGuide = () => {
  return <CohortBlogPostPage post={getApril2026BlogPost("bay-area-bridge-stall-towing-guide")} />;
};

export default BayAreaBridgeStallTowingGuide;
