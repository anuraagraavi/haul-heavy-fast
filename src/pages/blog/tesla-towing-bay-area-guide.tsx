import MarchBlogPostPage from "@/components/blog/MarchBlogPostPage";
import { getMarch2026BlogPost } from "@/data/march2026BlogPosts";

const TeslaTowingBayAreaGuide = () => {
  return <MarchBlogPostPage post={getMarch2026BlogPost("tesla-towing-bay-area-guide")} />;
};

export default TeslaTowingBayAreaGuide;
