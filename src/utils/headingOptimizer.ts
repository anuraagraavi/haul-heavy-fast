/**
 * Heading Hierarchy Validator
 * Ensures proper semantic HTML heading structure (H1 -> H2 -> H3, etc.)
 */

export interface HeadingInfo {
  level: number;
  text: string;
  id?: string;
}

export class HeadingOptimizer {
  private headings: HeadingInfo[] = [];
  private hasH1 = false;

  /**
   * Validates heading hierarchy for accessibility compliance
   */
  validateHeadings(headings: HeadingInfo[]): string[] {
    const errors: string[] = [];
    let expectedLevel = 1;
    let hasH1 = false;

    headings.forEach((heading, index) => {
      // Check for H1
      if (heading.level === 1) {
        if (hasH1) {
          errors.push(`Multiple H1 elements found. Page should have only one H1.`);
        }
        hasH1 = true;
        expectedLevel = 2;
      } else {
        // Check for skipped levels
        if (heading.level > expectedLevel) {
          errors.push(
            `Heading level H${heading.level} skips from H${expectedLevel - 1}. ` +
            `Text: "${heading.text}"`
          );
        }
        expectedLevel = Math.min(heading.level + 1, 6);
      }
    });

    if (!hasH1) {
      errors.push('Page is missing an H1 element.');
    }

    return errors;
  }

  /**
   * Generates proper heading structure for a page
   */
  generateHeadingStructure(pageType: 'homepage' | 'service' | 'blog' | 'about'): HeadingInfo[] {
    switch (pageType) {
      case 'homepage':
        return [
          { level: 1, text: 'Heavy Haulers Professional Towing', id: 'main-heading' },
          { level: 2, text: 'Our Services', id: 'services' },
          { level: 3, text: 'Light-Duty Towing', id: 'light-duty' },
          { level: 3, text: 'Medium-Duty Towing', id: 'medium-duty' },
          { level: 3, text: 'Heavy-Duty Hauling', id: 'heavy-duty' },
          { level: 2, text: 'Why Choose Us', id: 'why-choose' },
          { level: 2, text: 'Service Areas', id: 'service-areas' },
          { level: 2, text: 'Customer Testimonials', id: 'testimonials' },
          { level: 2, text: 'Frequently Asked Questions', id: 'faq' }
        ];
      
      case 'blog':
        return [
          { level: 1, text: '[Article Title]', id: 'article-title' },
          { level: 2, text: '[Section Heading]', id: 'section-1' },
          { level: 3, text: '[Subsection Heading]', id: 'subsection-1' },
          { level: 2, text: '[Section Heading]', id: 'section-2' }
        ];
      
      case 'service':
        return [
          { level: 1, text: '[Service Name] - Heavy Haulers', id: 'service-title' },
          { level: 2, text: 'Service Overview', id: 'overview' },
          { level: 2, text: 'What We Offer', id: 'offerings' },
          { level: 3, text: '[Specific Service]', id: 'specific-1' },
          { level: 2, text: 'Pricing & Service Areas', id: 'pricing' },
          { level: 2, text: 'Get Started Today', id: 'get-started' }
        ];
      
      default:
        return [];
    }
  }

  /**
   * Creates accessible heading with proper ARIA attributes
   */
  createAccessibleHeading(level: number, text: string, id?: string): string {
    const headingId = id || text.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
    
    return `<h${level} id="${headingId}" tabindex="-1">${text}</h${level}>`;
  }

  /**
   * Generates table of contents from headings
   */
  generateTOC(headings: HeadingInfo[]): string {
    let toc = '<nav aria-label="Table of contents"><ol>';
    
    headings.forEach(heading => {
      if (heading.level > 1) { // Skip H1 in TOC
        const indent = '  '.repeat(heading.level - 2);
        const id = heading.id || heading.text.toLowerCase().replace(/\s+/g, '-');
        toc += `\n${indent}<li><a href="#${id}">${heading.text}</a></li>`;
      }
    });
    
    toc += '\n</ol></nav>';
    return toc;
  }
}

export const headingOptimizer = new HeadingOptimizer();