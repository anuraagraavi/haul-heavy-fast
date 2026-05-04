import CohortBlogPostPage from "@/components/blog/CohortBlogPostPage";
import { getMarch2026BlogPost } from "@/data/march2026BlogPosts";

const FlatbedVsWheelLiftTowing = () => {
  return <CohortBlogPostPage post={getMarch2026BlogPost("flatbed-vs-wheel-lift-towing")} />;
};

export default FlatbedVsWheelLiftTowing;
