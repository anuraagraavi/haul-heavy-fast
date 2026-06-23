import CohortBlogPostPage from "@/components/blog/CohortBlogPostPage";
import { getMay2026BlogPost } from "@/data/may2026BlogPosts";

const StocktonTowingDispatchChecklist = () => {
  return <CohortBlogPostPage post={getMay2026BlogPost("stockton-towing-dispatch-checklist")} />;
};

export default StocktonTowingDispatchChecklist;
