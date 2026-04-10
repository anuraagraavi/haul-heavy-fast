import MarchBlogPostPage from "@/components/blog/MarchBlogPostPage";
import { getMarch2026BlogPost } from "@/data/march2026BlogPosts";

const DuiImpoundCalifornia = () => {
  return <MarchBlogPostPage post={getMarch2026BlogPost("dui-impound-california")} />;
};

export default DuiImpoundCalifornia;
