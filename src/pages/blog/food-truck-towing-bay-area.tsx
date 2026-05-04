import CohortBlogPostPage from "@/components/blog/CohortBlogPostPage";
import { getApril2026BlogPost } from "@/data/april2026BlogPosts";

const FoodTruckTowingBayArea = () => {
  return <CohortBlogPostPage post={getApril2026BlogPost("food-truck-towing-bay-area")} />;
};

export default FoodTruckTowingBayArea;
