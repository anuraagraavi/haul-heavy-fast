import CohortBlogPostPage from "@/components/blog/CohortBlogPostPage";
import { getApril2026BlogPost } from "@/data/april2026BlogPosts";

const DotOutOfServiceWeightStationBayArea = () => {
  return <CohortBlogPostPage post={getApril2026BlogPost("dot-out-of-service-weight-station-bay-area")} />;
};

export default DotOutOfServiceWeightStationBayArea;
