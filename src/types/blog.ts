export interface BlogImageData {
  src: string;
  alt: string;
  caption?: string;
  credit?: string;
  placement?: 'after-intro' | 'equipment' | 'process' | 'before-faq';
}

export interface AtAGlanceData {
  bestUseCase: string;
  responseWorkflow: string;
  safetyNote: string;
  dispatchNeeds: string;
  relatedServiceLink: { text: string; href: string };
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface RelatedService {
  title: string;
  href: string;
  description: string;
  icon?: string;
}

export interface ServiceArea {
  name: string;
  href: string;
}

export interface TOCItem {
  id: string;
  title: string;
  level: number;
}

export interface BlogPostData {
  // SEO fields
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  canonicalUrl: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  category: string;
  
  // Content metadata
  author: string;
  publishDate: string;
  dateModified: string;
  readTime?: string;
  excerpt: string;
  
  // Images
  heroImage: BlogImageData;
  images?: BlogImageData[];
  
  // Structured content
  atAGlance: AtAGlanceData;
  tableOfContents: TOCItem[];
  faq: FAQItem[];
  
  // Related content
  relatedPosts: string[];
  relatedServices: RelatedService[];
  serviceAreas: ServiceArea[];
}

// Content module types
export interface IconBulletItem {
  icon: string;
  text: string;
}

export interface ChecklistItem {
  text: string;
  checked?: boolean;
}

export interface CalloutType {
  type: 'tip' | 'warning' | 'legal' | 'info';
  title?: string;
  content: string;
}

export interface ComparisonRow {
  feature: string;
  option1: string;
  option2?: string;
}

export interface StepItem {
  step: number;
  title: string;
  description: string;
}
