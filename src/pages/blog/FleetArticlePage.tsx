import BlogPostTemplate, { IntroText, SectionHeading, ChecklistBox, CalloutBox, MidArticleCTA } from "@/components/blog/BlogPostTemplate";
import type { FleetArticle } from "@/data/fleetArticles";

export default function FleetArticlePage({ article }: { article: FleetArticle }) {
  return (
    <BlogPostTemplate data={article.data}>
      <IntroText>{article.intro}</IntroText>
      {article.sections.map((sec, i) => (
        <div key={sec.id}>
          <SectionHeading id={sec.id}>{sec.heading}</SectionHeading>
          {sec.paragraphs.map((p) => <p key={p} className="text-muted-foreground leading-relaxed mb-4">{p}</p>)}
          {sec.checklist && <ChecklistBox title="Checklist" items={sec.checklist.map((text) => ({ text, checked: false }))} />}
          {sec.callout && <CalloutBox type="tip" title={sec.callout.title}>{sec.callout.text}</CalloutBox>}
          {i === 1 && <MidArticleCTA />}
        </div>
      ))}
    </BlogPostTemplate>
  );
}
