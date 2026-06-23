import CohortBlogPostPage from "@/components/blog/CohortBlogPostPage";
import { getMay2026BlogPost } from "@/data/may2026BlogPosts";

const SanJoseTowHearingRequest = () => {
  return <CohortBlogPostPage post={getMay2026BlogPost("san-jose-tow-hearing-request")} />;
};

export default SanJoseTowHearingRequest;
