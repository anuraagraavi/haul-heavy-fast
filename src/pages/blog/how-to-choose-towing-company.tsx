import CohortBlogPostPage from "@/components/blog/CohortBlogPostPage";
import { getMarch2026BlogPost } from "@/data/march2026BlogPosts";

const HowToChooseTowingCompany = () => {
  return <CohortBlogPostPage post={getMarch2026BlogPost("how-to-choose-towing-company")} />;
};

export default HowToChooseTowingCompany;
