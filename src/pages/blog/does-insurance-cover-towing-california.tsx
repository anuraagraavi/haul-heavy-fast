import CohortBlogPostPage from "@/components/blog/CohortBlogPostPage";
import { getMarch2026BlogPost } from "@/data/march2026BlogPosts";

const DoesInsuranceCoverTowingCalifornia = () => {
  return <CohortBlogPostPage post={getMarch2026BlogPost("does-insurance-cover-towing-california")} />;
};

export default DoesInsuranceCoverTowingCalifornia;
