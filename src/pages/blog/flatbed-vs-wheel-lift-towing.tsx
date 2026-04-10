import MarchBlogPostPage from "@/components/blog/MarchBlogPostPage";
import { getMarch2026BlogPost } from "@/data/march2026BlogPosts";

const FlatbedVsWheelLiftTowing = () => {
  return <MarchBlogPostPage post={getMarch2026BlogPost("flatbed-vs-wheel-lift-towing")} />;
};

export default FlatbedVsWheelLiftTowing;
