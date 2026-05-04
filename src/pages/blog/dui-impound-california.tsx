import CohortBlogPostPage from "@/components/blog/CohortBlogPostPage";
import { getMarch2026BlogPost } from "@/data/march2026BlogPosts";

const DuiImpoundCalifornia = () => {
  return <CohortBlogPostPage post={getMarch2026BlogPost("dui-impound-california")} />;
};

export default DuiImpoundCalifornia;
