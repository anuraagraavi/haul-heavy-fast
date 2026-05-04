import type { ReactNode } from "react";
import BlogPostTemplate, {
  IntroText,
  SectionHeading,
  IconBulletList,
  CalloutBox,
  MidArticleCTA,
  StepProcess,
  TwoColumnGrid,
  BlogFigure,
} from "@/components/blog/BlogPostTemplate";
import { Link } from "react-router-dom";
import type { CohortBlogPostConfig, CohortParagraph, ParagraphSegment } from "@/types/cohortBlog";
import {
  DISPATCH_HUB_LINES_MARKETING,
  PRIMARY_DISPATCH_PHONE_DISPLAY,
  PRIMARY_DISPATCH_TEL_HREF,
} from "@/data/screenshotDispatchHubs";

interface CohortBlogPostPageProps {
  post: CohortBlogPostConfig;
}

function renderSegments(segments: ParagraphSegment[]): ReactNode {
  return segments.map((seg, i) =>
    seg.type === "link" ? (
      <Link key={i} to={seg.href} className="text-primary hover:underline">
        {seg.text}
      </Link>
    ) : (
      <span key={i}>{seg.text}</span>
    ),
  );
}

function renderIntro(intro: string | ParagraphSegment[]): ReactNode {
  return typeof intro === "string" ? intro : renderSegments(intro);
}

function renderParagraph(block: CohortParagraph, key: string): ReactNode {
  if (typeof block === "string") {
    return <p key={key}>{block}</p>;
  }
  return <p key={key}>{renderSegments(block)}</p>;
}

const CohortBlogPostPage = ({ post }: CohortBlogPostPageProps) => {
  const fallbackLinks = [
    ...(post.data.relatedServices?.slice(0, 1).map((service) => ({
      text: service.title,
      href: service.href,
    })) ?? []),
    ...(post.data.relatedPosts?.slice(0, 1).map((slug) => ({
      text: "Related guide",
      href: `/blog/${slug}`,
    })) ?? []),
  ];

  return (
    <BlogPostTemplate data={post.data}>
      <IntroText>{renderIntro(post.content.intro)}</IntroText>

      {post.content.sections.map((section, sectionIndex) => (
        <div key={section.id}>
          <SectionHeading id={section.id}>{section.title}</SectionHeading>
          {section.paragraphs.map((paragraph, paragraphIndex) =>
            renderParagraph(paragraph, `${section.id}-p-${paragraphIndex}`),
          )}

          {section.image && (
            <BlogFigure
              image={{
                src: section.image.src,
                alt: section.image.alt,
                caption: section.image.caption,
              }}
            />
          )}

          {section.bullets && section.bullets.length > 0 && (
            <IconBulletList
              items={section.bullets.map((item) =>
                typeof item === "string" ? { icon: "check", text: item } : item,
              )}
            />
          )}

          {section.steps && section.steps.length > 0 && <StepProcess steps={section.steps} />}

          {section.twoColumn && (
            <TwoColumnGrid
              leftTitle={section.twoColumn.leftTitle}
              leftItems={section.twoColumn.leftItems}
              rightTitle={section.twoColumn.rightTitle}
              rightItems={section.twoColumn.rightItems}
            />
          )}

          {section.callout && (
            <CalloutBox type={section.callout.type} title={section.callout.title}>
              {section.callout.body}
            </CalloutBox>
          )}

          {(section.relatedLinks ?? fallbackLinks).length > 0 && (
            <p className="text-sm text-muted-foreground">
              Related resources:{" "}
              {(section.relatedLinks ?? fallbackLinks).map((link, idx, arr) => (
                <span key={`${section.id}-link-${idx}`}>
                  <Link to={link.href}>{link.text}</Link>
                  {idx < arr.length - 1 ? " • " : ""}
                </span>
              ))}
            </p>
          )}

          {sectionIndex === 0 && post.content.regionalPhones && (
            <CalloutBox type="info" title="Regional dispatch numbers">
              {post.content.regionalPhones}
            </CalloutBox>
          )}
        </div>
      ))}

      <MidArticleCTA
        title={post.content.midCtaTitle}
        description={post.content.midCtaBody}
        primaryAction={{
          text: post.content.midCtaPrimaryText ?? `Call ${PRIMARY_DISPATCH_PHONE_DISPLAY}`,
          href: post.content.midCtaPrimaryHref ?? PRIMARY_DISPATCH_TEL_HREF,
        }}
        secondaryAction={{ text: "Get a Free Quote", href: "/get-a-quote" }}
      />

      <CalloutBox type="info" title="Need immediate towing support?">
        {post.content.endCallout ??
          `Heavy Haulers dispatch is available 24/7 across Bay Area counties and Stockton support corridors. ${DISPATCH_HUB_LINES_MARKETING}`}
      </CalloutBox>
    </BlogPostTemplate>
  );
};

export default CohortBlogPostPage;
