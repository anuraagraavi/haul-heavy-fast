import CohortBlogPostPage from "@/components/blog/CohortBlogPostPage";
import { getMay2026BlogPost } from "@/data/may2026BlogPosts";

const OaklandTowHearingRequest = () => {
  return <CohortBlogPostPage post={getMay2026BlogPost("oakland-tow-hearing-request")} />;
};

export default OaklandTowHearingRequest;
