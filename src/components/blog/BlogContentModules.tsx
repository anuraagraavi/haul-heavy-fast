import { ReactNode } from 'react';
import { 
  CheckCircle, 
  AlertTriangle, 
  Info, 
  Scale, 
  Lightbulb,
  Check,
  Circle
} from 'lucide-react';
import { cn } from '@/lib/utils';
import type { 
  IconBulletItem, 
  ChecklistItem, 
  CalloutType, 
  ComparisonRow, 
  StepItem 
} from '@/types/blog';

// Intro paragraph with larger text
interface IntroTextProps {
  children: ReactNode;
  className?: string;
}

export const IntroText = ({ children, className }: IntroTextProps) => (
  <p className={cn(
    "text-lg md:text-xl text-muted-foreground leading-relaxed mb-6",
    className
  )}>
    {children}
  </p>
);

// Icon bullet list
interface IconBulletListProps {
  items: IconBulletItem[];
  className?: string;
}

export const IconBulletList = ({ items, className }: IconBulletListProps) => {
  const getIcon = (iconName: string) => {
    const iconMap: Record<string, typeof CheckCircle> = {
      check: CheckCircle,
      warning: AlertTriangle,
      info: Info,
      tip: Lightbulb,
    };
    return iconMap[iconName] || CheckCircle;
  };

  return (
    <ul className={cn("space-y-3 my-6", className)}>
      {items.map((item, index) => {
        const Icon = getIcon(item.icon);
        return (
          <li key={index} className="flex items-start gap-3">
            <Icon 
              className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" 
              aria-hidden="true" 
            />
            <span className="text-foreground">{item.text}</span>
          </li>
        );
      })}
    </ul>
  );
};

// Checklist box
interface ChecklistBoxProps {
  title?: string;
  items: ChecklistItem[];
  className?: string;
}

export const ChecklistBox = ({ title, items, className }: ChecklistBoxProps) => (
  <div className={cn(
    "bg-card border border-border rounded-xl p-6 my-6",
    className
  )}>
    {title && (
      <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
        <CheckCircle className="w-5 h-5 text-primary" aria-hidden="true" />
        {title}
      </h4>
    )}
    <ul className="space-y-2">
      {items.map((item, index) => (
        <li key={index} className="flex items-start gap-3">
          {item.checked ? (
            <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" aria-hidden="true" />
          ) : (
            <Circle className="w-5 h-5 text-muted-foreground mt-0.5 flex-shrink-0" aria-hidden="true" />
          )}
          <span className={cn(
            "text-foreground",
            item.checked && "line-through text-muted-foreground"
          )}>
            {item.text}
          </span>
        </li>
      ))}
    </ul>
  </div>
);

// Callout box (tip, warning, legal, info)
interface CalloutBoxProps {
  type: CalloutType['type'];
  title?: string;
  children: ReactNode;
  className?: string;
}

export const CalloutBox = ({ type, title, children, className }: CalloutBoxProps) => {
  const config = {
    tip: {
      icon: Lightbulb,
      bgClass: 'bg-primary/5 border-primary/20',
      iconClass: 'text-primary',
      defaultTitle: 'Pro Tip'
    },
    warning: {
      icon: AlertTriangle,
      bgClass: 'bg-yellow-500/10 border-yellow-500/30',
      iconClass: 'text-yellow-500',
      defaultTitle: 'Warning'
    },
    legal: {
      icon: Scale,
      bgClass: 'bg-blue-500/10 border-blue-500/30',
      iconClass: 'text-blue-500',
      defaultTitle: 'Legal Note'
    },
    info: {
      icon: Info,
      bgClass: 'bg-muted border-border',
      iconClass: 'text-muted-foreground',
      defaultTitle: 'Note'
    }
  };

  const { icon: Icon, bgClass, iconClass, defaultTitle } = config[type];

  return (
    <aside 
      className={cn(
        "rounded-xl border p-5 my-6",
        bgClass,
        className
      )}
      role="note"
    >
      <div className="flex items-start gap-3">
        <Icon className={cn("w-5 h-5 mt-0.5 flex-shrink-0", iconClass)} aria-hidden="true" />
        <div>
          <h4 className="font-semibold text-foreground mb-1">
            {title || defaultTitle}
          </h4>
          <div className="text-sm text-muted-foreground leading-relaxed">
            {children}
          </div>
        </div>
      </div>
    </aside>
  );
};

// Two column info grid - supports both item array and left/right split patterns
interface TwoColumnGridProps {
  items?: Array<{ title: string; content: string }>;
  leftTitle?: string;
  leftItems?: string[];
  rightTitle?: string;
  rightItems?: string[];
  className?: string;
}

export const TwoColumnGrid = ({ items, leftTitle, leftItems, rightTitle, rightItems, className }: TwoColumnGridProps) => {
  // If using left/right pattern
  if (leftTitle && rightTitle && leftItems && rightItems) {
    return (
      <div className={cn("grid md:grid-cols-2 gap-4 my-6", className)}>
        <div className="bg-card border border-border rounded-lg p-4">
          <h4 className="font-medium text-foreground mb-3">{leftTitle}</h4>
          <ul className="space-y-2">
            {leftItems.map((item, index) => (
              <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-card border border-border rounded-lg p-4">
          <h4 className="font-medium text-foreground mb-3">{rightTitle}</h4>
          <ul className="space-y-2">
            {rightItems.map((item, index) => (
              <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  // Original items pattern
  return (
    <div className={cn("grid md:grid-cols-2 gap-4 my-6", className)}>
      {items?.map((item, index) => (
        <div 
          key={index} 
          className="bg-card border border-border rounded-lg p-4"
        >
          <h4 className="font-medium text-foreground mb-2">{item.title}</h4>
          <p className="text-sm text-muted-foreground">{item.content}</p>
        </div>
      ))}
    </div>
  );
};

// Comparison table - supports 2 or 3 column headers
interface ComparisonTableProps {
  headers: [string, string] | [string, string, string];
  rows: ComparisonRow[];
  className?: string;
}

export const ComparisonTable = ({ headers, rows, className }: ComparisonTableProps) => {
  const isThreeColumn = headers.length === 3;
  
  return (
    <div className={cn("overflow-x-auto my-6", className)}>
      <table className="w-full border-collapse bg-card rounded-xl overflow-hidden border border-border">
        <thead>
          <tr className="bg-muted">
            {headers.map((header, index) => (
              <th 
                key={index}
                className="px-4 py-3 text-left text-sm font-semibold text-foreground border-b border-border"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr 
              key={index}
              className="border-b border-border last:border-b-0 hover:bg-muted/30 transition-colors"
            >
              <td className="px-4 py-3 text-sm text-foreground font-medium">
                {row.feature}
              </td>
              <td className="px-4 py-3 text-sm text-muted-foreground">
                {row.option1}
              </td>
              {isThreeColumn && (
                <td className="px-4 py-3 text-sm text-muted-foreground">
                  {row.option2}
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Step by step process
interface StepProcessProps {
  steps: StepItem[];
  className?: string;
}

export const StepProcess = ({ steps, className }: StepProcessProps) => (
  <div className={cn("my-8", className)}>
    {steps.map((step, index) => (
      <div 
        key={step.step}
        className="relative flex gap-4 pb-8 last:pb-0"
      >
        {/* Vertical line connecting steps (hidden on last item) */}
        {index !== steps.length - 1 && (
          <div 
            className="absolute left-4 top-10 bottom-0 w-0.5 bg-primary/30" 
            aria-hidden="true"
          />
        )}
        
        {/* Step number circle */}
        <div className="relative z-10 flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
          {step.step}
        </div>
        
        {/* Content */}
        <div className="flex-1 pt-0.5 min-w-0">
          <h4 className="font-semibold text-foreground mb-1">{step.title}</h4>
          <p className="text-sm text-muted-foreground">{step.description}</p>
        </div>
      </div>
    ))}
  </div>
);

// Section heading with anchor
interface SectionHeadingProps {
  id: string;
  level?: 2 | 3;
  children: ReactNode;
  className?: string;
}

export const SectionHeading = ({ id, level = 2, children, className }: SectionHeadingProps) => {
  const Tag = level === 2 ? 'h2' : 'h3';
  
  return (
    <Tag 
      id={id}
      className={cn(
        "scroll-mt-28 font-bold text-foreground",
        level === 2 ? "text-2xl md:text-3xl mt-12 mb-6" : "text-xl md:text-2xl mt-8 mb-4",
        className
      )}
    >
      {children}
    </Tag>
  );
};

// Back to top button for sections
export const BackToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors mt-6"
      aria-label="Scroll back to top of page"
    >
      ↑ Back to top
    </button>
  );
};

// Dispatch Info Box - "What dispatch needs from you"
interface DispatchInfoBoxProps {
  items: string[];
  title?: string;
  className?: string;
}

export const DispatchInfoBox = ({ items, title = "What Dispatch Needs From You", className }: DispatchInfoBoxProps) => (
  <aside 
    className={cn(
      "bg-primary/5 border-2 border-primary/30 rounded-xl p-6 my-6",
      className
    )}
    role="note"
  >
    <div className="flex items-start gap-3">
      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
        <Info className="w-5 h-5 text-primary" aria-hidden="true" />
      </div>
      <div className="flex-1">
        <h4 className="font-bold text-foreground text-lg mb-3">{title}</h4>
        <ul className="space-y-2">
          {items.map((item, index) => (
            <li key={index} className="flex items-start gap-2 text-foreground">
              <span className="font-semibold text-primary min-w-[24px]">{index + 1}.</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </aside>
);

// Pricing Factors Box - "What increases cost"
interface PricingFactorsBoxProps {
  factors: Array<{ factor: string; impact: string }>;
  title?: string;
  className?: string;
}

export const PricingFactorsBox = ({ factors, title = "Pricing Factors: What Affects Cost", className }: PricingFactorsBoxProps) => (
  <div className={cn(
    "bg-card border border-border rounded-xl overflow-hidden my-6",
    className
  )}>
    <div className="bg-muted px-5 py-3 border-b border-border">
      <h4 className="font-bold text-foreground flex items-center gap-2">
        <Scale className="w-5 h-5 text-primary" aria-hidden="true" />
        {title}
      </h4>
    </div>
    <div className="p-5">
      <div className="space-y-3">
        {factors.map((item, index) => (
          <div key={index} className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
            <div>
              <span className="font-medium text-foreground">{item.factor}:</span>{' '}
              <span className="text-muted-foreground">{item.impact}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// Capabilities Box - "What we can do today / What we can't do"
interface CapabilitiesBoxProps {
  canDo: string[];
  cantDo: string[];
  canDoTitle?: string;
  cantDoTitle?: string;
  className?: string;
}

export const CapabilitiesBox = ({ 
  canDo, 
  cantDo, 
  canDoTitle = "What We Can Do Today",
  cantDoTitle = "What We Cannot Do",
  className 
}: CapabilitiesBoxProps) => (
  <div className={cn("grid md:grid-cols-2 gap-4 my-6", className)}>
    <div className="bg-green-500/5 border border-green-500/20 rounded-xl p-5">
      <h4 className="font-bold text-foreground mb-4 flex items-center gap-2">
        <CheckCircle className="w-5 h-5 text-green-500" aria-hidden="true" />
        {canDoTitle}
      </h4>
      <ul className="space-y-2">
        {canDo.map((item, index) => (
          <li key={index} className="flex items-start gap-2 text-sm text-foreground">
            <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" aria-hidden="true" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
    <div className="bg-red-500/5 border border-red-500/20 rounded-xl p-5">
      <h4 className="font-bold text-foreground mb-4 flex items-center gap-2">
        <AlertTriangle className="w-5 h-5 text-red-500" aria-hidden="true" />
        {cantDoTitle}
      </h4>
      <ul className="space-y-2">
        {cantDo.map((item, index) => (
          <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
            <span className="text-red-500">✗</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

// Info List Box - like ChecklistBox but shows items WITHOUT strikethrough
// Use this for fee lists, feature lists, or any informational items
interface InfoListBoxProps {
  title?: string;
  items: Array<{ text: string; included?: boolean }>;
  className?: string;
}

export const InfoListBox = ({ title, items, className }: InfoListBoxProps) => (
  <div className={cn(
    "bg-card border border-border rounded-xl p-6 my-6",
    className
  )}>
    {title && (
      <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
        <CheckCircle className="w-5 h-5 text-primary" aria-hidden="true" />
        {title}
      </h4>
    )}
    <ul className="space-y-2">
      {items.map((item, index) => (
        <li key={index} className="flex items-start gap-3">
          {item.included !== false ? (
            <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" aria-hidden="true" />
          ) : (
            <Circle className="w-5 h-5 text-muted-foreground mt-0.5 flex-shrink-0" aria-hidden="true" />
          )}
          <span className="text-foreground">{item.text}</span>
        </li>
      ))}
    </ul>
  </div>
);
