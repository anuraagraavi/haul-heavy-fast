import CohortBlogPostPage from "@/components/blog/CohortBlogPostPage";
import { getMay2026BlogPost } from "@/data/may2026BlogPosts";

const SjcTowedVehicleReleaseForm = () => {
  return <CohortBlogPostPage post={getMay2026BlogPost("sjc-towed-vehicle-release-form")} />;
};

export default SjcTowedVehicleReleaseForm;
