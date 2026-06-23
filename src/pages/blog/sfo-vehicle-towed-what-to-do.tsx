import CohortBlogPostPage from "@/components/blog/CohortBlogPostPage";
import { getMay2026BlogPost } from "@/data/may2026BlogPosts";

const SfoVehicleTowedWhatToDo = () => {
  return <CohortBlogPostPage post={getMay2026BlogPost("sfo-vehicle-towed-what-to-do")} />;
};

export default SfoVehicleTowedWhatToDo;
