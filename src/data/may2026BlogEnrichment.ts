import type { MayBlogEnrichOverride } from "./may2026BlogExpansions";
import { may2026BlogExpansions } from "./may2026BlogExpansions";

export function getMayBlogEnrichOverride(slug: string): MayBlogEnrichOverride | undefined {
  return may2026BlogExpansions[slug]?.enrich;
}
