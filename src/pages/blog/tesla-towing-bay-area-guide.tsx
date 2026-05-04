import CohortBlogPostPage from "@/components/blog/CohortBlogPostPage";
import { getMarch2026BlogPost } from "@/data/march2026BlogPosts";

const TeslaTowingBayAreaGuide = () => {
  return <CohortBlogPostPage post={getMarch2026BlogPost("tesla-towing-bay-area-guide")} />;
};

export default TeslaTowingBayAreaGuide;
