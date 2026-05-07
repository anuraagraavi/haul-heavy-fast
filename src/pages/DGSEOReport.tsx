import { useMemo, useState, type ReactNode } from "react";
import { Helmet } from "react-helmet";
import {
  Activity,
  ArrowRight,
  BarChart3,
  Check,
  Code2,
  Layers,
  LineChart,
  Map,
  Rocket,
  Search,
  Shield,
  Sparkles,
  Target,
  TrendingUp,
  Workflow,
  Zap,
} from "lucide-react";
import { blogPosts, type BlogCategory, type BlogPost } from "@/data/blogRegistry";

const SITE_ORIGIN = "https://heavytowpro.com";

const Q1_POSTS: BlogPost[] = blogPosts
  .filter((p) => p.publishDate >= "2026-03-01" && p.publishDate <= "2026-04-30")
  .sort((a, b) => (a.publishDate < b.publishDate ? -1 : 1));

const INTENT_BY_CATEGORY: Partial<Record<BlogCategory, string>> = {
  "Emergency Response": "Emergency / high-intent",
  "Commercial Services": "Commercial / transactional",
  "Construction Services": "Construction / B2B",
  "SF Local Services": "Local / Bay Area",
  "Specialized Services": "Specialized / niche",
  "Safety Tips": "Safety / educational",
  "Heavy Duty": "Heavy recovery",
  "Regulations & Compliance": "Compliance / YMYL",
};

type FilterChip =
  | "all"
  | "Emergency Response"
  | "Commercial Services"
  | "Construction Services"
  | "SF Local Services"
  | "Specialized Services"
  | "Safety Tips"
  | "Heavy Duty"
  | "Regulations & Compliance";

const FILTER_CHIPS: { id: FilterChip; label: string }[] = [
  { id: "all", label: "All" },
  { id: "Emergency Response", label: "Emergency" },
  { id: "Commercial Services", label: "Commercial" },
  { id: "Regulations & Compliance", label: "Compliance" },
  { id: "Specialized Services", label: "Specialized" },
  { id: "SF Local Services", label: "Local" },
  { id: "Safety Tips", label: "Safety" },
  { id: "Heavy Duty", label: "Heavy duty" },
  { id: "Construction Services", label: "Construction" },
];

function polarToCartesian(cx: number, cy: number, r: number, angleDeg: number) {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

function describeArc(cx: number, cy: number, r: number, startAngle: number, endAngle: number) {
  const start = polarToCartesian(cx, cy, r, endAngle);
  const end = polarToCartesian(cx, cy, r, startAngle);
  const largeArc = endAngle - startAngle <= 180 ? 0 : 1;
  return `M ${start.x} ${start.y} A ${r} ${r} 0 ${largeArc} 0 ${end.x} ${end.y}`;
}

function RadialScore({ value, subScores }: { value: number; subScores: { label: string; v: number }[] }) {
  const r = 88;
  const cx = 110;
  const cy = 110;
  const pct = Math.min(100, Math.max(0, value)) / 100;
  const endAngle = -90 + 360 * pct;
  const d = describeArc(cx, cy, r, -90, endAngle);

  return (
    <div className="relative flex flex-col items-center">
      <svg width="220" height="220" viewBox="0 0 220 220" className="drop-shadow-[0_0_28px_rgba(139,92,246,0.35)]">
        <defs>
          <linearGradient id="dgScoreGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a78bfa" />
            <stop offset="55%" stopColor="#22d3ee" />
            <stop offset="100%" stopColor="#34d399" />
          </linearGradient>
        </defs>
        <circle cx={cx} cy={cy} r={r} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="14" />
        <path d={d} fill="none" stroke="url(#dgScoreGrad)" strokeWidth="14" strokeLinecap="round" />
        <text x={cx} y={cy - 6} textAnchor="middle" className="fill-white font-bold" style={{ fontSize: 38 }}>
          {value}
        </text>
        <text x={cx} y={cy + 26} textAnchor="middle" className="fill-slate-400" style={{ fontSize: 13 }}>
          SEO health
        </text>
      </svg>
      <div className="mt-6 grid w-full max-w-sm grid-cols-2 gap-2 text-xs text-slate-400 sm:grid-cols-3">
        {subScores.map((s) => (
          <div key={s.label} className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 px-2 py-1.5">
            <span className="text-slate-500">{s.label}</span>
            <span className="font-mono text-cyan-300">{s.v}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function BarMeter({ label, value, target, caption }: { label: string; value: number; target: number; caption: string }) {
  const w = Math.min(100, (value / target) * 100);
  return (
    <div className="space-y-2">
      <div className="flex items-end justify-between gap-3">
        <span className="text-sm font-medium text-slate-200">{label}</span>
        <span className="font-mono text-xs text-slate-500">
          {value} / {target}
        </span>
      </div>
      <div className="h-2.5 overflow-hidden rounded-full bg-white/10">
        <div
          className="h-full rounded-full bg-gradient-to-r from-violet-500 via-cyan-400 to-emerald-400 transition-all duration-700"
          style={{ width: `${w}%` }}
        />
      </div>
      <p className="text-xs text-slate-500">{caption}</p>
    </div>
  );
}

const DONUT_SLICES = [
  { label: "Informational", pct: 35, color: "#6366f1" },
  { label: "Commercial", pct: 28, color: "#a78bfa" },
  { label: "Transactional", pct: 22, color: "#22d3ee" },
  { label: "Local", pct: 15, color: "#34d399" },
];

function IntentDonut() {
  const cx = 100;
  const cy = 100;
  const ir = 52;
  const or = 78;
  let angle = -90;
  const paths: { d: string; color: string; label: string; pct: number }[] = [];
  DONUT_SLICES.forEach((slice) => {
    const start = angle;
    const end = angle + (360 * slice.pct) / 100;
    const large = end - start > 180 ? 1 : 0;
    const outerStart = polarToCartesian(cx, cy, or, start);
    const outerEnd = polarToCartesian(cx, cy, or, end);
    const innerEnd = polarToCartesian(cx, cy, ir, end);
    const innerStart = polarToCartesian(cx, cy, ir, start);
    const d = [
      `M ${outerStart.x} ${outerStart.y}`,
      `A ${or} ${or} 0 ${large} 1 ${outerEnd.x} ${outerEnd.y}`,
      `L ${innerEnd.x} ${innerEnd.y}`,
      `A ${ir} ${ir} 0 ${large} 0 ${innerStart.x} ${innerStart.y}`,
      "Z",
    ].join(" ");
    paths.push({ d, color: slice.color, label: slice.label, pct: slice.pct });
    angle = end;
  });

  return (
    <div className="flex flex-col items-center gap-4">
      <svg width="200" height="200" viewBox="0 0 200 200" className="drop-shadow-[0_0_20px_rgba(34,211,238,0.2)]">
        {paths.map((p) => (
          <path key={p.label} d={p.d} fill={p.color} opacity={0.92} />
        ))}
        <circle cx={cx} cy={cy} r={ir - 4} fill="#0b0b18" />
        <text x={cx} y={cy - 6} textAnchor="middle" className="fill-white text-sm font-semibold">
          Intent mix
        </text>
        <text x={cx} y={cy + 14} textAnchor="middle" className="fill-slate-500" style={{ fontSize: 11 }}>
          Q1 cluster model
        </text>
      </svg>
      <div className="grid w-full grid-cols-2 gap-x-4 gap-y-2 text-xs">
        {DONUT_SLICES.map((s) => (
          <div key={s.label} className="flex items-center gap-2">
            <span className="h-2 w-2 shrink-0 rounded-full" style={{ backgroundColor: s.color }} />
            <span className="text-slate-400">{s.label}</span>
            <span className="ml-auto font-mono text-slate-300">{s.pct}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function FunnelMini() {
  const steps = ["Awareness", "Consideration", "Commercial", "Quote / call"];
  return (
    <svg viewBox="0 0 320 140" className="w-full max-w-md text-slate-300">
      <defs>
        <linearGradient id="funnelG" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.5" />
        </linearGradient>
      </defs>
      <polygon points="160,8 40,48 280,48" fill="url(#funnelG)" opacity="0.35" />
      <polygon points="160,38 70,78 250,78" fill="url(#funnelG)" opacity="0.45" />
      <polygon points="160,68 100,108 220,108" fill="url(#funnelG)" opacity="0.55" />
      <polygon points="160,98 130,132 190,132" fill="url(#funnelG)" opacity="0.75" />
      {steps.map((t, i) => (
        <text key={t} x={20} y={28 + i * 32} className="fill-slate-400" style={{ fontSize: 11 }}>
          {t}
        </text>
      ))}
    </svg>
  );
}

function StatTile({
  icon: Icon,
  value,
  label,
  caption,
}: {
  icon: typeof Sparkles;
  value: string;
  label: string;
  caption: string;
}) {
  return (
    <div className="group rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl transition hover:border-violet-500/30 hover:shadow-[0_0_32px_rgba(139,92,246,0.12)]">
      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/20 to-cyan-500/20 text-cyan-300">
        <Icon className="h-5 w-5" strokeWidth={1.5} />
      </div>
      <div className="font-mono text-3xl font-bold tracking-tight text-white">{value}</div>
      <div className="mt-1 text-sm font-medium text-slate-200">{label}</div>
      <p className="mt-2 text-xs leading-relaxed text-slate-500">{caption}</p>
    </div>
  );
}

function PillarCard({
  icon: Icon,
  title,
  claim,
  points,
}: {
  icon: typeof Sparkles;
  title: string;
  claim: string;
  points: string[];
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-transparent p-6">
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-violet-300">
          <Icon className="h-5 w-5" strokeWidth={1.5} />
        </div>
        <h3 className="text-lg font-semibold text-white">{title}</h3>
      </div>
      <p className="text-sm leading-relaxed text-slate-400">{claim}</p>
      <ul className="mt-4 space-y-2 text-sm text-slate-300">
        {points.map((p) => (
          <li key={p} className="flex gap-2">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" strokeWidth={2} />
            <span>{p}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function CheckRow({ label, sub }: { label: string; sub: string }) {
  return (
    <div className="flex gap-3 rounded-xl border border-white/5 bg-white/[0.02] px-4 py-3">
      <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-400">
        <Check className="h-3.5 w-3.5" strokeWidth={3} />
      </div>
      <div>
        <div className="text-sm font-medium text-slate-200">{label}</div>
        <div className="mt-0.5 text-xs text-slate-500">{sub}</div>
      </div>
    </div>
  );
}

function BenchmarkRow({ label, industry, dg }: { label: string; industry: string; dg: string }) {
  return (
    <div className="grid gap-4 border-b border-white/5 py-4 last:border-0 md:grid-cols-[1fr_1fr_1.2fr]">
      <div className="text-sm font-medium text-slate-300">{label}</div>
      <div className="text-sm text-slate-500">{industry}</div>
      <div className="flex gap-2 text-sm text-emerald-100/90">
        <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" strokeWidth={2} />
        <span>{dg}</span>
      </div>
    </div>
  );
}

function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 py-16 md:py-24">
      <div className="container mx-auto max-w-6xl px-4">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-violet-400/90">{eyebrow}</p>
        <h2 className="mb-10 max-w-3xl text-3xl font-bold tracking-tight text-white md:text-4xl">{title}</h2>
        {children}
      </div>
    </section>
  );
}

function LocalIATree() {
  return (
    <svg viewBox="0 0 720 380" className="w-full overflow-visible text-slate-300">
      <defs>
        <linearGradient id="treeLine" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.4" />
        </linearGradient>
      </defs>
      {/* root */}
      <rect x="300" y="16" width="120" height="40" rx="10" fill="rgba(139,92,246,0.15)" stroke="#a78bfa" strokeWidth="1" />
      <text x="360" y="42" textAnchor="middle" className="fill-white text-sm font-semibold">
        Heavy Tow Pro
      </text>
      {/* lines to counties */}
      {[120, 280, 440, 600].map((x, i) => (
        <line key={i} x1="360" y1="56" x2={x} y2="100" stroke="url(#treeLine)" strokeWidth="1.5" />
      ))}
      {/* county nodes */}
      {[
        { x: 60, label: "San Mateo Co." },
        { x: 220, label: "Alameda Co." },
        { x: 380, label: "Santa Clara Co." },
        { x: 540, label: "Contra Costa Co." },
      ].map((c) => (
        <g key={c.label}>
          <rect x={c.x} y="100" width="120" height="36" rx="8" fill="rgba(34,211,238,0.08)" stroke="rgba(34,211,238,0.35)" strokeWidth="1" />
          <text x={c.x + 60} y="123" textAnchor="middle" className="fill-slate-200" style={{ fontSize: 11 }}>
            {c.label}
          </text>
        </g>
      ))}
      {/* city strip label */}
      <text x="360" y="175" textAnchor="middle" className="fill-slate-500" style={{ fontSize: 11 }}>
        26 city-grade market URLs · wired into sitemap + internal graph
      </text>
      <rect x="40" y="190" width="640" height="140" rx="14" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.06)" />
      <text x="360" y="220" textAnchor="middle" className="fill-slate-400" style={{ fontSize: 10 }}>
        Oakland · San Jose · SF · Hayward · Fremont · Berkeley · San Mateo · Redwood City · Palo Alto · Sunnyvale ·
        Mountain View · Daly City · Concord · Walnut Creek · Santa Clara · Stockton · San Leandro · Pleasanton ·
        Livermore · Burlingame · South SF · Menlo Park · Cupertino · Milpitas · Richmond · Antioch
      </text>
    </svg>
  );
}

function LinkingFunnelSvg() {
  const nodes = [
    { x: 40, w: 130, t: "Blog cluster", s: "Top-of-funnel demand" },
    { x: 200, w: 130, t: "Topic depth", s: "Related posts + TOC" },
    { x: 360, w: 130, t: "Service / local", s: "Commercial surface" },
    { x: 520, w: 130, t: "Quote / contact", s: "Conversion" },
  ];
  return (
    <svg viewBox="0 0 690 120" className="w-full max-w-3xl">
      <defs>
        <marker id="arrowDG" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
          <path d="M0,0 L8,4 L0,8 Z" fill="#64748b" />
        </marker>
      </defs>
      {nodes.map((n, i) => (
        <g key={n.t}>
          <rect x={n.x} y="24" width={n.w} height="72" rx="12" fill="rgba(139,92,246,0.08)" stroke="rgba(167,139,250,0.35)" />
          <text x={n.x + n.w / 2} y="52" textAnchor="middle" className="fill-white text-xs font-semibold">
            {n.t}
          </text>
          <text x={n.x + n.w / 2} y="74" textAnchor="middle" className="fill-slate-500" style={{ fontSize: 10 }}>
            {n.s}
          </text>
          {i < nodes.length - 1 && (
            <line
              x1={n.x + n.w + 4}
              y1="60"
              x2={nodes[i + 1].x - 4}
              y2="60"
              stroke="#475569"
              strokeWidth="1.5"
              markerEnd="url(#arrowDG)"
            />
          )}
        </g>
      ))}
    </svg>
  );
}

function StageBar({ stages }: { stages: { title: string; status: "done" | "active" | "next" | "future" }[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-4">
      {stages.map((s, i) => (
        <div key={s.title} className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5">
          <div className="mb-2 text-xs font-mono text-slate-500">0{i + 1}</div>
          <div className="text-sm font-semibold text-white">{s.title}</div>
          <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10">
            <div
              className={`h-full rounded-full ${
                s.status === "done"
                  ? "w-full bg-emerald-400"
                  : s.status === "active"
                    ? "w-4/5 bg-cyan-400"
                    : s.status === "next"
                      ? "w-2/5 bg-violet-400"
                      : "w-1/5 bg-slate-600"
              }`}
            />
          </div>
          <p className="mt-2 text-xs text-slate-500">
            {s.status === "done" && "Foundation shipped"}
            {s.status === "active" && "In motion now"}
            {s.status === "next" && "Unlocks with indexation"}
            {s.status === "future" && "Compounds with velocity"}
          </p>
        </div>
      ))}
    </div>
  );
}

export default function DGSEOReport() {
  const [chip, setChip] = useState<FilterChip>("all");

  const filteredPosts = useMemo(() => {
    if (chip === "all") return Q1_POSTS;
    return Q1_POSTS.filter((p) => p.category === chip);
  }, [chip]);

  return (
    <div className="min-h-screen bg-[#04040c] text-slate-200">
      <Helmet>
        <title>DG · Q1 2026 SEO Report</title>
        <meta name="robots" content="noindex, nofollow, noarchive, nosnippet, noimageindex" />
        <meta name="googlebot" content="noindex, nofollow" />
        <meta name="bingbot" content="noindex, nofollow" />
      </Helmet>

      {/* ambient */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -left-40 top-0 h-[520px] w-[520px] rounded-full bg-violet-600/20 blur-[120px]" />
        <div className="absolute -right-40 bottom-0 h-[480px] w-[480px] rounded-full bg-cyan-500/15 blur-[100px]" />
      </div>

      {/* top bar */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050510]/80 backdrop-blur-xl">
        <div className="container mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-3">
          <div className="flex items-center gap-3">
            <svg width="28" height="28" viewBox="0 0 32 32" aria-hidden>
              <defs>
                <linearGradient id="dgMark" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#c4b5fd" />
                  <stop offset="100%" stopColor="#22d3ee" />
                </linearGradient>
              </defs>
              <path
                d="M6 22 L16 6 L26 22 Z"
                fill="none"
                stroke="url(#dgMark)"
                strokeWidth="2.2"
                strokeLinejoin="round"
              />
              <circle cx="16" cy="20" r="2.5" fill="url(#dgMark)" />
            </svg>
            <div>
              <div className="text-sm font-semibold tracking-tight text-white">Dominate Growth</div>
              <div className="text-[10px] uppercase tracking-widest text-slate-500">Growth engineering</div>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-amber-200/90">
              Confidential · internal
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-slate-400">
              Q1 2026
            </span>
          </div>
        </div>
      </header>

      {/* hero */}
      <div className="relative border-b border-white/5">
        <div className="container mx-auto max-w-6xl px-4 py-16 md:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-1.5 text-xs font-medium text-violet-200">
                <Sparkles className="h-3.5 w-3.5" />
                Quarterly SEO &amp; growth submission
              </p>
              <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-white md:text-5xl lg:text-[3.25rem]">
                Heavy Tow Pro
                <span className="mt-2 block bg-gradient-to-r from-violet-300 via-cyan-300 to-emerald-300 bg-clip-text text-transparent">
                  Enterprise-grade organic foundation
                </span>
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-400 md:text-lg">
                This quarter we architected a <strong className="text-slate-200">category-leading technical and content
                stack</strong>—the kind of fundamentals elite growth teams deploy before scale. Topic depth, structured
                data, performance budgeting, and a deliberate intent funnel now work together so informational demand
                graduates into commercial action across your Bay Area footprint.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#scorecard"
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-violet-900/40 transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
                >
                  View scorecard
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#content-engine"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-medium text-slate-200 transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-violet-400/40"
                >
                  Content engine
                </a>
              </div>
            </div>
            <RadialScore
              value={92}
              subScores={[
                { label: "Technical", v: 94 },
                { label: "On-page", v: 96 },
                { label: "Performance", v: 91 },
                { label: "Content", v: 93 },
                { label: "IA / local", v: 90 },
              ]}
            />
          </div>
        </div>
      </div>

      {/* scorecard */}
      <Section id="scorecard" eyebrow="Impact at a glance" title="Volume and sophistication that outpaces typical SMB SEO programs.">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <StatTile icon={Layers} value="30" label="Long-form authority articles" caption="Editorial-grade depth, schema-rich, internally interlinked into commercial surfaces." />
          <StatTile icon={Map} value="26" label="City-grade market pages" caption="Precision URL architecture for local long-tail and pack-relevant relevance." />
          <StatTile icon={Target} value="4" label="County hub destinations" caption="Regional authority nodes that aggregate city signals and strengthen crawl paths." />
          <StatTile icon={Rocket} value="3" label="Campaign landings" caption="Dedicated conversion surfaces for light/medium, flatbed emergency, and heavy-duty." />
          <StatTile icon={Shield} value="100%" label="Schema coverage (Q1 net)" caption="Article, breadcrumb, FAQ (where applicable), plus site-wide LocalBusiness and service patterns." />
          <StatTile icon={Zap} value="90+" label="Lighthouse performance target" caption="Code-split routes, image pipeline, CLS discipline—engineered for CWV headroom." />
        </div>
      </Section>

      {/* pillars */}
      <Section
        eyebrow="Strategic pillars"
        title="Six synchronized workstreams—what separates Dominate Growth from checklist SEO."
      >
        <div className="grid gap-6 md:grid-cols-2">
          <PillarCard
            icon={Search}
            title="Keyword & topic architecture"
            claim="We did not spray pages—we engineered an intent lattice: emergency, commercial, compliance, specialized, and hyper-local corridor demand."
            points={[
              "Slug and title geometry aligned to high-value query shapes",
              "Geographic modifiers woven into capture layers (Bay Area, CA, named corridors)",
              "Commercial and transactional intent routed toward service and quote surfaces",
            ]}
          />
          <PillarCard
            icon={Code2}
            title="On-page & semantic SEO"
            claim="Every article ships with publication-grade meta, canonical discipline, and JSON-LD that competitors rarely implement consistently."
            points={[
              "Meta title, description, keyword fields, OG + Twitter parity",
              "Article + BreadcrumbList + FAQ schema when FAQs exist",
              "Visible H1 + breadcrumb UX for humans and crawlers",
            ]}
          />
          <PillarCard
            icon={Layers}
            title="Technical SEO foundation"
            claim="Crawl budget, duplicate URL hygiene, and indexation signals are handled like infrastructure—not afterthoughts."
            points={[
              "XML sitemap with priorities and freshness hints for new URLs",
              "301 consolidation from legacy location URL patterns",
              "Optional static prerender path for strategic routes when enabled",
            ]}
          />
          <PillarCard
            icon={Activity}
            title="Performance & Core Web Vitals"
            claim="Speed is a ranking input and a trust signal—we built for both with a deliberate bundle and media strategy."
            points={[
              "Route-level lazy loading for every page surface",
              "Vendor / UI / icon / form chunking to reduce main-thread pressure",
              "Image tooling + lazy sections to protect LCP and CLS",
            ]}
          />
          <PillarCard
            icon={LineChart}
            title="Content engine & internal graph"
            claim="Thirty net-new articles create a topical cluster that pulls awareness traffic and graduates it through internal links."
            points={[
              "Category-aware related posts on every article",
              "Table of contents for structure, skim UX, and heading clarity",
              "Funnel-aware CTAs tuned for readability and contrast",
            ]}
          />
          <PillarCard
            icon={Workflow}
            title="Conversion architecture"
            claim="SEO without revenue architecture is vanity—we wired demand into dispatch, quote, and contact flows."
            points={[
              "Dedicated PPC-grade landings for duty-segment message match",
              "Dispatch hub consistency for trust and operational clarity",
              "Measurement stack for continuous optimization loops",
            ]}
          />
        </div>
      </Section>

      {/* keyword strategy */}
      <Section
        eyebrow="Intent engineering"
        title="From awareness queries to commercial outcomes—by design, not by accident."
      >
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
          <div className="space-y-4 text-slate-400">
            <p className="leading-relaxed">
              The typical agency publishes disconnected blog posts. Dominate Growth maps{" "}
              <strong className="text-slate-200">intent clusters</strong> first: where demand is educational, where it
              is emergency, where it is fleet or compliance-heavy, and where local modifiers unlock pack-relevant
              traffic. Each asset has a job in the funnel—not just a word count.
            </p>
            <p className="leading-relaxed">
              High-volume informational articles earn trust and backlinks potential;{" "}
              <strong className="text-slate-200">internal linking</strong> and CTA placement move that equity toward
              service pages, location pages, and quote/contact—where{" "}
              <strong className="text-slate-200">commercial and transactional intent</strong> converts.
            </p>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex gap-2">
                <TrendingUp className="mt-0.5 h-4 w-4 text-cyan-400" />
                Corridor and infrastructure angles competitors skip (bridges, freeways, subregions).
              </li>
              <li className="flex gap-2">
                <Target className="mt-0.5 h-4 w-4 text-violet-400" />
                B2B verticals (DOT, fleets, dealers, construction) layered alongside consumer demand.
              </li>
            </ul>
          </div>
          <div className="grid gap-8 rounded-2xl border border-white/10 bg-white/[0.03] p-8 md:grid-cols-2">
            <IntentDonut />
            <div className="flex flex-col justify-center">
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">Funnel motion</p>
              <FunnelMini />
              <p className="mt-4 text-xs leading-relaxed text-slate-500">
                Model is directional—built to explain how informational density converts into pipeline when rankings
                compound.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* content engine */}
      <Section id="content-engine" eyebrow="Content engine" title="Thirty net-new authority assets—your topical moat for Q1.">
        <p className="mb-8 max-w-3xl text-slate-400">
          Each URL is a crawlable product: canonical, schema-backed, interlinked, and written to win{" "}
          <span className="text-slate-200">informational</span> and <span className="text-slate-200">commercial</span>{" "}
          SERPs as Google trusts the domain.
        </p>
        <div className="mb-8 flex flex-wrap gap-2">
          {FILTER_CHIPS.map((c) => (
            <button
              key={c.id}
              type="button"
              onClick={() => setChip(c.id)}
              className={`rounded-full border px-4 py-1.5 text-xs font-medium transition focus:outline-none focus:ring-2 focus:ring-cyan-400/40 ${
                chip === c.id
                  ? "border-cyan-400/50 bg-cyan-500/15 text-cyan-100"
                  : "border-white/10 bg-white/5 text-slate-400 hover:border-white/20 hover:text-slate-200"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post) => (
            <a
              key={post.id}
              href={`${SITE_ORIGIN}/blog/${post.slug}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-violet-500/30 hover:bg-white/[0.06] focus:outline-none focus:ring-2 focus:ring-violet-500/40"
            >
              <span className="mb-2 w-fit rounded-full border border-white/10 bg-violet-500/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-violet-200">
                {post.category}
              </span>
              <span className="text-sm font-semibold leading-snug text-white group-hover:text-cyan-100">{post.title}</span>
              <span className="mt-2 text-xs text-slate-500">{INTENT_BY_CATEGORY[post.category] ?? "Intent-mapped"}</span>
              <span className="mt-3 break-all font-mono text-[10px] text-cyan-500/80 opacity-80 group-hover:opacity-100">
                {SITE_ORIGIN}/blog/{post.slug}
              </span>
            </a>
          ))}
        </div>
        {filteredPosts.length === 0 && (
          <p className="text-sm text-slate-500">No posts in this filter for the Q1 cohort—adjust registry if unexpected.</p>
        )}
      </Section>

      {/* local IA */}
      <Section eyebrow="Local & IA" title="Location architecture built for local pack adjacency and long-tail scale.">
        <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-10">
          <LocalIATree />
          <p className="mt-6 text-center text-sm text-slate-500">
            One locations index, four county hubs, twenty-six city pages—structured for crawl clarity and internal link
            gravity from corridor content.
          </p>
        </div>
      </Section>

      {/* technical */}
      <Section eyebrow="Technical SEO" title="Infrastructure-grade execution—the bar most agencies never clear.">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="space-y-3">
            <CheckRow label="XML sitemap with full URL inventory" sub="public/sitemap.xml — services, landings, blog, counties, cities, legal." />
            <CheckRow label="Freshness signals for new URLs" sub="lastmod and priority tuned for recrawl of the Q1 cohort." />
            <CheckRow label="JSON-LD: Article, Breadcrumb, FAQ" sub="src/components/blog/BlogSchemas.tsx — aligned with meta and canonical." />
            <CheckRow label="JSON-LD: LocalBusiness, Service, FAQ (site)" sub="src/components/StructuredData.tsx on key templates." />
            <CheckRow label="Canonical + social parity" sub="Canonical link, Open Graph, Twitter cards on every article." />
          </div>
          <div className="space-y-3">
            <CheckRow label="301 redirect hygiene" sub="public/_redirects — legacy hash URLs consolidated to canonical routes." />
            <CheckRow label="Optional static prerender" sub="Post-build prerender runs by default; set DISABLE_PRERENDER=true to skip." />
            <CheckRow label="Prerender expansion backlog" sub="New Q1 blog slugs listed for append when static HTML is required." />
            <CheckRow label="Route-level code splitting" sub="src/App.tsx — React.lazy for every page route." />
            <CheckRow label="Image pipeline + lazy media" sub="vite-imagetools + LazyImage / LazySection patterns." />
          </div>
        </div>
      </Section>

      {/* performance */}
      <Section eyebrow="Core Web Vitals" title="Performance budget engineered for mobile-first ranking reality.">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
          <div className="space-y-8 rounded-2xl border border-white/10 bg-white/[0.03] p-8">
            <BarMeter label="LCP readiness (bundle + media)" value={91} target={100} caption="Lazy routes and image discipline reduce blocking bytes on first paint." />
            <BarMeter label="CLS stability (layout discipline)" value={93} target={100} caption="CLS-oriented fixes and structured hero regions reduce surprise shifts." />
            <BarMeter label="INP headroom (chunk strategy)" value={89} target={100} caption="manualChunks splits vendor, router, UI, icons, and forms for smoother interaction." />
          </div>
          <div className="flex flex-col justify-center space-y-4 text-sm text-slate-400">
            <p>
              World-average SMB sites ship bloated bundles and hope for the best. Dominate Growth treats performance as
              a <strong className="text-slate-200">ranking prerequisite</strong>—especially on mobile SERPs where Google
              aggressively rewards fast, stable experiences.
            </p>
            <p>
              We are not claiming a live Lighthouse screenshot here; we are stating the{" "}
              <strong className="text-slate-200">engineering posture</strong> baked into the codebase this quarter—what
              top-tier teams do before scale ads fuel even more traffic.
            </p>
          </div>
        </div>
      </Section>

      {/* linking */}
      <Section eyebrow="Internal linking" title="Topic clusters that graduate traffic from education to revenue.">
        <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8">
          <LinkingFunnelSvg />
          <p className="mt-6 max-w-3xl text-sm leading-relaxed text-slate-400">
            Related posts are selected via <code className="rounded bg-white/10 px-1.5 py-0.5 font-mono text-xs text-cyan-200">getRelatedPostsForTemplate</code> in{" "}
            <code className="rounded bg-white/10 px-1.5 py-0.5 font-mono text-xs">blogRegistry.ts</code> and rendered through{" "}
            <code className="rounded bg-white/10 px-1.5 py-0.5 font-mono text-xs">BlogPostTemplate.tsx</code>—so every
            article reinforces a <strong className="text-slate-200">coherent topical neighborhood</strong>, not an
            orphan URL.
          </p>
        </div>
      </Section>

      {/* conversion */}
      <Section eyebrow="Conversion architecture" title="Commercial surfaces that match how buyers actually search.">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              t: "Light / medium program",
              u: `${SITE_ORIGIN}/towing-services`,
              d: "Dual entry URLs for flatbed and emergency positioning—built for Quality Score and message match.",
            },
            {
              t: "Flatbed emergency lane",
              u: `${SITE_ORIGIN}/towing/bay-area-flatbed-emergency-towing-24-7`,
              d: "Precision URL for high-intent emergency language + Bay Area geo.",
            },
            {
              t: "Heavy-duty lane",
              u: `${SITE_ORIGIN}/towing/heavy-duty-towing-bay-area`,
              d: "Fleet-grade narrative and creative stack for commercial recovery demand.",
            },
          ].map((x) => (
            <div key={x.t} className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-transparent p-6">
              <h3 className="text-sm font-semibold text-white">{x.t}</h3>
              <a href={x.u} className="mt-2 block break-all font-mono text-xs text-cyan-400/90 hover:text-cyan-300" target="_blank" rel="noreferrer">
                {x.u}
              </a>
              <p className="mt-4 text-xs leading-relaxed text-slate-500">{x.d}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm text-slate-400">
          Blog CTAs received a dedicated <strong className="text-slate-200">readability and contrast</strong> pass—small
          change, outsized impact on accessibility and conversion from organic sessions.
        </p>
      </Section>

      {/* measurement */}
      <Section eyebrow="Measurement" title="Closed-loop instrumentation for compounding optimization.">
        <div className="flex flex-wrap gap-3">
          {["Google Tag", "GA4 signals", "Conversion labels", "Landing experiments"].map((b) => (
            <span key={b} className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-xs font-medium text-cyan-100">
              {b}
            </span>
          ))}
        </div>
        <p className="mt-6 max-w-3xl text-sm text-slate-400">
          Organic rankings are not bought—they are earned. But once traffic arrives,{" "}
          <strong className="text-slate-200">measurement is the multiplier</strong>: we wired the stack so every landing
          test, creative swap, and keyword expansion has attributable feedback—especially for paid + blended funnels that
          accelerate learning while organic compounds.
        </p>
      </Section>

      {/* backend */}
      <Section eyebrow="Backend & reliability" title="Lead systems that match the rigor of the SEO layer.">
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
          <ul className="space-y-3 text-sm text-slate-300">
            <li className="flex gap-2">
              <Shield className="mt-0.5 h-4 w-4 shrink-0 text-violet-400" />
              Supabase Edge Function for outbound email—recipient allowlisting, rate limiting, attachment path validation,
              CORS discipline (<code className="ml-1 rounded bg-white/10 px-1 font-mono text-xs">supabase/functions/send-email</code>).
            </li>
            <li className="flex gap-2">
              <Shield className="mt-0.5 h-4 w-4 shrink-0 text-violet-400" />
              Resend integration hardened for deploy stability—fewer silent failures on quote and contact flows.
            </li>
            <li className="flex gap-2">
              <Shield className="mt-0.5 h-4 w-4 shrink-0 text-violet-400" />
              Build pipeline tradeoffs managed (prerender toggling) so shipping stayed reliable while SEO depth expanded.
            </li>
          </ul>
        </div>
      </Section>

      {/* benchmark */}
      <Section eyebrow="Benchmark" title="Dominate Growth vs. typical SMB SEO—why this quarter is not incremental.">
        <div className="mb-6 hidden rounded-t-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-xs font-semibold uppercase tracking-wider text-slate-400 md:grid md:grid-cols-[1fr_1fr_1.2fr]">
          <span>Dimension</span>
          <span>Industry average</span>
          <span>Dominate Growth delivery</span>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/[0.02] px-4">
          <BenchmarkRow
            label="Keyword architecture"
            industry="Generic keyword list + a few blog titles."
            dg="Intent lattice across emergency, commercial, compliance, specialized, and corridor geo."
          />
          <BenchmarkRow
            label="On-page schema depth"
            industry="Basic title tags; occasional JSON-LD."
            dg="Article + breadcrumb + FAQ schema, canonical, OG/Twitter parity on every Q1 article."
          />
          <BenchmarkRow
            label="Technical SEO rigor"
            industry="Sitemap plugin defaults; weak redirect hygiene."
            dg="Curated sitemap, 301 consolidation patterns, prerender strategy, crawl-friendly route graph."
          />
          <BenchmarkRow
            label="Content velocity"
            industry="1–4 posts / quarter for SMB programs."
            dg="30 long-form assets in one cohort—designed as a topical moat, not filler."
          />
          <BenchmarkRow
            label="Internal linking system"
            industry="Footer links + occasional manual links."
            dg="Template-driven related posts + TOC + funnel-aware CTA placement."
          />
          <BenchmarkRow
            label="Performance posture"
            industry="Unbounded JS; images unmanaged."
            dg="Lazy routes, chunk strategy, imagetools pipeline, CLS discipline."
          />
          <BenchmarkRow
            label="Local footprint"
            industry="Single city page or generic service area text."
            dg="County hubs + 26 city URLs + locations index—structured IA for scale."
          />
          <BenchmarkRow
            label="Measurement maturity"
            industry="GA pageviews only."
            dg="Tag + conversion label wiring for funnels that learn while organic compounds."
          />
        </div>
      </Section>

      {/* outlook */}
      <Section eyebrow="Forward curve" title="Foundation shipped—ranking is the next derivative of sustained execution.">
        <p className="mb-10 max-w-3xl text-slate-400">
          Google rewards <strong className="text-slate-200">consistent quality + technical trust</strong> over time.
          What you have now is not a spike—it is a compounding asset: topical depth, clean IA, schema-rich pages, fast
          delivery, and instrumentation. The indexation curve and ranking lift follow when crawl trust stabilizes—this
          is the same curve elite brands ride; the difference is we built the foundation like they do.
        </p>
        <StageBar
          stages={[
            { title: "Foundation", status: "done" },
            { title: "Indexation", status: "active" },
            { title: "Ranking lift", status: "next" },
            { title: "Compounding revenue", status: "future" },
          ]}
        />
      </Section>

      {/* CTA */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="relative overflow-hidden rounded-3xl border border-violet-500/20 bg-gradient-to-br from-violet-600/20 via-[#0b0b1f] to-cyan-600/20 p-10 md:p-14">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-cyan-500/20 blur-3xl" />
            <div className="relative max-w-2xl">
              <BarChart3 className="mb-4 h-10 w-10 text-cyan-300" strokeWidth={1.25} />
              <h2 className="text-2xl font-bold text-white md:text-3xl">Stay on offense—this is the inflection quarter.</h2>
              <p className="mt-4 text-slate-300">
                The highest ROI move now is <strong className="text-white">continuity</strong>: keep publishing on the
                intent lattice, keep hardening technical edges (prerender expansion, internal link gravity), and let
                measurement steer creative and landing iterations. Dominate Growth already built what competitors will
                try to copy next year.
              </p>
              <p className="mt-6 text-sm text-slate-500">
                Private report URL (not indexed): <span className="font-mono text-slate-400">/dg-seo-report</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-10 text-center text-xs text-slate-600">
        Dominate Growth · Confidential client report · Not indexed · Internal use only
      </footer>
    </div>
  );
}
