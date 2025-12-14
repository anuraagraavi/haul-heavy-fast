import { useState } from 'react';
import { ChevronDown, ChevronUp, List, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrollspy } from '@/hooks/useScrollspy';
import type { TOCItem } from '@/types/blog';
import { cn } from '@/lib/utils';

interface TableOfContentsProps {
  items: TOCItem[];
  className?: string;
}

// Sticky desktop TOC
export const TableOfContentsDesktop = ({ items, className }: TableOfContentsProps) => {
  const ids = items.map(item => item.id);
  const activeId = useScrollspy(ids, 120);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav 
      className={cn("sticky top-24 space-y-1", className)}
      aria-label="Table of contents"
    >
      <h2 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
        <List className="w-4 h-4" aria-hidden="true" />
        Contents
      </h2>
      
      <ul className="space-y-1 text-sm">
        {items.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => scrollToSection(item.id)}
              className={cn(
                "w-full text-left py-1.5 px-3 rounded-md transition-all duration-200",
                "hover:bg-muted/50 focus:outline-none focus:ring-2 focus:ring-primary/50",
                item.level === 3 && "pl-6 text-xs",
                activeId === item.id 
                  ? "bg-primary/10 text-primary font-medium border-l-2 border-primary" 
                  : "text-muted-foreground hover:text-foreground"
              )}
              aria-current={activeId === item.id ? 'location' : undefined}
            >
              {item.title}
            </button>
          </li>
        ))}
      </ul>

      <Button
        variant="ghost"
        size="sm"
        onClick={scrollToTop}
        className="w-full mt-4 text-muted-foreground hover:text-foreground"
      >
        <ArrowUp className="w-4 h-4 mr-2" aria-hidden="true" />
        Back to Top
      </Button>
    </nav>
  );
};

// Collapsible mobile TOC
export const TableOfContentsMobile = ({ items }: TableOfContentsProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const ids = items.map(item => item.id);
  const activeId = useScrollspy(ids, 120);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
      setIsOpen(false);
    }
  };

  return (
    <div className="lg:hidden mb-6 bg-card rounded-xl border border-border">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 text-left"
        aria-expanded={isOpen}
        aria-controls="mobile-toc"
      >
        <span className="flex items-center gap-2 font-medium text-foreground">
          <List className="w-5 h-5" aria-hidden="true" />
          Table of Contents
        </span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-muted-foreground" aria-hidden="true" />
        ) : (
          <ChevronDown className="w-5 h-5 text-muted-foreground" aria-hidden="true" />
        )}
      </button>
      
      {isOpen && (
        <nav id="mobile-toc" className="px-4 pb-4" aria-label="Table of contents">
          <ul className="space-y-1">
            {items.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={cn(
                    "w-full text-left py-2 px-3 rounded-md text-sm transition-colors",
                    item.level === 3 && "pl-6 text-xs",
                    activeId === item.id 
                      ? "bg-primary/10 text-primary font-medium" 
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  )}
                >
                  {item.title}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
};

export default TableOfContentsDesktop;
