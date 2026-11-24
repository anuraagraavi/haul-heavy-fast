import { Link } from "react-router-dom";
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
          {sec.table && (
            <div className="my-6 overflow-x-auto rounded-xl border border-border">
              <table className="w-full min-w-[520px] text-sm text-left">
                <caption className="caption-bottom px-4 py-3 text-xs text-muted-foreground">{sec.table.caption}</caption>
                <thead className="bg-card border-b-2 border-primary">
                  <tr>{sec.table.headers.map((h) => <th key={h} scope="col" className="px-4 py-3 font-semibold text-foreground">{h}</th>)}</tr>
                </thead>
                <tbody>
                  {sec.table.rows.map((row) => (
                    <tr key={row[0]} className="border-b border-border last:border-0 odd:bg-muted/20">
                      {row.map((cell, ci) => ci === 0
                        ? <th key={ci} scope="row" className="px-4 py-3 font-medium text-foreground">{cell}</th>
                        : <td key={ci} className="px-4 py-3 text-muted-foreground">{cell}</td>)}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          {sec.checklist && <ChecklistBox title={sec.checklistTitle ?? "Checklist"} items={sec.checklist.map((text) => ({ text, checked: false }))} />}
          {sec.callout && <CalloutBox type="tip" title={sec.callout.title}>{sec.callout.text}</CalloutBox>}
          {sec.links && (
            <p className="text-sm mb-6">
              <span className="text-muted-foreground">Related: </span>
              {sec.links.map((l, li) => (
                <span key={l.href}>{li > 0 && <span className="text-muted-foreground"> · </span>}<Link to={l.href} className="text-primary hover:underline">{l.text}</Link></span>
              ))}
            </p>
          )}
          {i === 1 && <MidArticleCTA />}
        </div>
      ))}
    </BlogPostTemplate>
  );
}
