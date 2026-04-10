import MarchBlogPostPage from "@/components/blog/MarchBlogPostPage";
import { getMarch2026BlogPost } from "@/data/march2026BlogPosts";

const HowToChooseTowingCompany = () => {
  return <MarchBlogPostPage post={getMarch2026BlogPost("how-to-choose-towing-company")} />;
};

export default HowToChooseTowingCompany;
