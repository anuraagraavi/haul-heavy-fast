import MarchBlogPostPage from "@/components/blog/MarchBlogPostPage";
import { getMarch2026BlogPost } from "@/data/march2026BlogPosts";

const GetCarOutOfImpoundBayArea = () => {
  return <MarchBlogPostPage post={getMarch2026BlogPost("get-car-out-of-impound-bay-area")} />;
};

export default GetCarOutOfImpoundBayArea;
