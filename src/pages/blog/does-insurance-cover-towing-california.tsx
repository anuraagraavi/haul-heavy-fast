import MarchBlogPostPage from "@/components/blog/MarchBlogPostPage";
import { getMarch2026BlogPost } from "@/data/march2026BlogPosts";

const DoesInsuranceCoverTowingCalifornia = () => {
  return <MarchBlogPostPage post={getMarch2026BlogPost("does-insurance-cover-towing-california")} />;
};

export default DoesInsuranceCoverTowingCalifornia;
