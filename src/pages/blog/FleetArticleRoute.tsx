import FleetArticlePage from "./FleetArticlePage";
import { FLEET_ARTICLE_BY_SLUG } from "@/data/fleetArticles";

export default function FleetArticleRoute({ slug }: { slug: string }) {
  return <FleetArticlePage article={FLEET_ARTICLE_BY_SLUG[slug]} />;
}
