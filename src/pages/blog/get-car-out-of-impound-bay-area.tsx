import CohortBlogPostPage from "@/components/blog/CohortBlogPostPage";
import { getMarch2026BlogPost } from "@/data/march2026BlogPosts";

const GetCarOutOfImpoundBayArea = () => {
  return <CohortBlogPostPage post={getMarch2026BlogPost("get-car-out-of-impound-bay-area")} />;
};

export default GetCarOutOfImpoundBayArea;
