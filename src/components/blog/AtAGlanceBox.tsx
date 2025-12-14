import { Link } from 'react-router-dom';
import { 
  Target, 
  Workflow, 
  ShieldAlert, 
  Phone, 
  ArrowRight 
} from 'lucide-react';
import type { AtAGlanceData } from '@/types/blog';

interface AtAGlanceBoxProps {
  data: AtAGlanceData;
}

const AtAGlanceBox = ({ data }: AtAGlanceBoxProps) => {
  const items = [
    { icon: Target, label: 'Best For', value: data.bestUseCase },
    { icon: Workflow, label: 'Response', value: data.responseWorkflow },
    { icon: ShieldAlert, label: 'Safety Note', value: data.safetyNote },
    { icon: Phone, label: 'Tell Dispatch', value: data.dispatchNeeds },
  ];

  return (
    <section 
      className="py-6 bg-card border-y border-border"
      aria-labelledby="at-a-glance-heading"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 
            id="at-a-glance-heading" 
            className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2"
          >
            <span className="w-1.5 h-6 bg-primary rounded-full" aria-hidden="true" />
            At a Glance
          </h2>
          
          <ul className="grid gap-3 md:grid-cols-2">
            {items.map((item, index) => (
              <li 
                key={index}
                className="flex items-start gap-3 p-3 rounded-lg bg-background/50 border border-border/50"
              >
                <item.icon 
                  className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" 
                  aria-hidden="true" 
                />
                <div>
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                    {item.label}
                  </span>
                  <p className="text-sm text-foreground mt-0.5">
                    {item.value}
                  </p>
                </div>
              </li>
            ))}
          </ul>
          
          <Link 
            to={data.relatedServiceLink.href}
            className="inline-flex items-center gap-2 mt-4 text-sm text-primary hover:text-primary/80 transition-colors font-medium"
          >
            {data.relatedServiceLink.text}
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AtAGlanceBox;
