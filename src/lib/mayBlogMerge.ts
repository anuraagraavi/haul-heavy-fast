import type { CohortBlogPostConfig, CohortParagraph, ParagraphSegment } from "@/types/cohortBlog";
import type { MayBlogExpansion } from "@/data/may2026BlogExpansions";
import { estimateReadingTime } from "@/utils/readingTime";

function paragraphText(block: CohortParagraph): string {
  if (typeof block === "string") return block;
  return block.map((seg: ParagraphSegment) => seg.text).join("");
}

function sectionText(section: CohortBlogPostConfig["content"]["sections"][number]): string {
  const parts = [
    section.title,
    ...section.paragraphs.map(paragraphText),
    ...(section.bullets?.map((b) => (typeof b === "string" ? b : b.text)) ?? []),
    ...(section.steps?.map((s) => `${s.title} ${s.description}`) ?? []),
    section.callout ? `${section.callout.title} ${section.callout.body}` : "",
    section.twoColumn
      ? [
          section.twoColumn.leftTitle,
          ...section.twoColumn.leftItems,
          section.twoColumn.rightTitle,
          ...section.twoColumn.rightItems,
        ].join(" ")
      : "",
    section.image?.caption ?? "",
    section.image?.alt ?? "",
  ];
  return parts.filter(Boolean).join(" ");
}

export function countMayBlogWords(post: CohortBlogPostConfig): number {
  const intro =
    typeof post.content.intro === "string"
      ? post.content.intro
      : post.content.intro.map((seg) => seg.text).join("");

  const body = [
    intro,
    post.data.excerpt,
    post.content.midCtaTitle,
    post.content.midCtaBody,
    post.content.endCallout ?? "",
    ...post.content.sections.map(sectionText),
    ...post.data.faq.flatMap((f) => [f.question, f.answer]),
  ].join(" ");

  return body.trim().split(/\s+/).filter(Boolean).length;
}

export function applyMayBlogExpansion(
  post: CohortBlogPostConfig,
  expansion: MayBlogExpansion | undefined,
): CohortBlogPostConfig {
  if (!expansion) return post;

  const sections = post.content.sections.map((section) => {
    const extras = expansion.sectionExtras?.[section.id];
    return {
      ...section,
      paragraphs: [...section.paragraphs, ...(extras?.paragraphs ?? [])],
      bullets: [...(section.bullets ?? []), ...(extras?.bullets ?? [])],
      callout: section.callout,
      steps: section.steps,
      twoColumn: section.twoColumn,
    };
  });

  const fifth = expansion.fifthSection;
  const withFifth = sections.some((s) => s.id === fifth.id) ? sections : [...sections, fifth];

  const tableOfContents = post.data.tableOfContents.some((t) => t.id === fifth.id)
    ? post.data.tableOfContents
    : [...post.data.tableOfContents, { id: fifth.id, title: fifth.title, level: 2 }];

  return {
    ...post,
    data: {
      ...post.data,
      metaDescription: expansion.metaDescription,
      heroImage: {
        ...post.data.heroImage,
        alt: expansion.heroAlt,
        caption: expansion.heroCaption,
      },
      atAGlance: {
        ...expansion.atAGlance,
        relatedServiceLink: post.data.atAGlance.relatedServiceLink,
      },
      tableOfContents,
    },
    content: {
      ...post.content,
      sections: withFifth,
      officialResources: expansion.officialResources,
    },
  };
}

export function withComputedReadTime(post: CohortBlogPostConfig): CohortBlogPostConfig {
  const words = countMayBlogWords(post);
  return {
    ...post,
    data: {
      ...post.data,
      readTime: estimateReadingTime(words),
    },
  };
}
