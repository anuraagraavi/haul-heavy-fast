import type { BlogPostData } from "@/types/blog";

/** Inline segment for contextual internal links inside intro or body paragraphs */
export type ParagraphSegment =
  | { type: "text"; text: string }
  | { type: "link"; text: string; href: string };

/** Plain string or segmented paragraph (rendered as one `<p>`) */
export type CohortParagraph = string | ParagraphSegment[];

export interface CohortBlogSection {
  id: string;
  title: string;
  paragraphs: CohortParagraph[];
  bullets?: Array<string | { text: string; icon: "check" | "warning" | "info" | "tip" }>;
  image?: { src: string; alt: string; caption?: string };
  relatedLinks?: Array<{ text: string; href: string }>;
  callout?: { type: "tip" | "warning" | "legal" | "info"; title: string; body: string };
  steps?: Array<{ step: number; title: string; description: string }>;
  twoColumn?: {
    leftTitle: string;
    leftItems: string[];
    rightTitle: string;
    rightItems: string[];
  };
}

export interface CohortBlogContent {
  intro: string | ParagraphSegment[];
  sections: CohortBlogSection[];
  midCtaTitle: string;
  midCtaBody: string;
  midCtaPrimaryText?: string;
  midCtaPrimaryHref?: string;
  regionalPhones?: string;
  endCallout?: string;
}

export interface CohortBlogPostConfig {
  data: BlogPostData;
  content: CohortBlogContent;
}
