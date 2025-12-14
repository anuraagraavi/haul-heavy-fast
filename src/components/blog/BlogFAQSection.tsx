import { HelpCircle } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import type { FAQItem } from '@/types/blog';
import { cn } from '@/lib/utils';

interface BlogFAQSectionProps {
  faqs: FAQItem[];
  className?: string;
}

const BlogFAQSection = ({ faqs, className }: BlogFAQSectionProps) => {
  if (!faqs || faqs.length === 0) return null;

  return (
    <section 
      id="faqs"
      className={cn("scroll-mt-28", className)}
      aria-labelledby="faq-heading"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
          <HelpCircle className="w-5 h-5 text-primary" aria-hidden="true" />
        </div>
        <h2 id="faq-heading" className="text-2xl md:text-3xl font-bold text-foreground">
          Frequently Asked Questions
        </h2>
      </div>

      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((faq, index) => (
          <AccordionItem 
            key={index} 
            value={`faq-${index}`}
            className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-primary/30"
          >
            <AccordionTrigger className="text-left text-foreground hover:text-primary py-4 [&[data-state=open]>svg]:rotate-180">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground pb-4 leading-relaxed">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default BlogFAQSection;

// FAQ Schema generator utility
export function generateFAQSchema(faqs: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}
