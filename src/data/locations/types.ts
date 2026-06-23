import type { LandingImageId } from "../landingImages";

export type LocationKind = "county-hub" | "city";

export type LocationSignatureColor = "orange" | "blue" | "warning";

/** Lucide icon name for local knowledge cards (mapped in LocalKnowledgePanel) */
export type LocalKnowledgeIconName =
  | "MapPin"
  | "Route"
  | "Clock"
  | "ShieldCheck"
  | "Truck"
  | "Building2"
  | "MountainSnow"
  | "Car";

export interface RelatedCityLink {
  slug: string;
  anchorBlurb: string;
}

/** Inbound links to localized blog guides (SEO) */
export interface RelatedGuideLink {
  slug: string;
  title: string;
}

export interface ServiceHighlight {
  title: string;
  body: string;
  imageId: LandingImageId;
  /** When true, renders wider featured tile on large screens */
  featured?: boolean;
}

export interface LocalKnowledgeItem {
  icon: LocalKnowledgeIconName;
  title: string;
  body: string;
}

export interface LocationStat {
  value: string;
  label: string;
}

export interface LocationTestimonial {
  name: string;
  neighborhood: string;
  vehicle: string;
  rating: 5;
  quote: string;
}

export interface AggregateRating {
  ratingValue: number;
  reviewCount: number;
}

export interface CorridorCoverageItem {
  title: string;
  body: string;
  /** Optional label chip e.g. freeway name */
  tag?: string;
}

export interface ConfidencePoint {
  title: string;
  body: string;
}

export interface LocationData {
  slug: string;
  kind: LocationKind;
  url: string;
  city: string;
  county: string;
  countySlug: string;
  state: "CA";
  phone: string;
  nearestHub: { city: string; address: string; phone: string };
  geo: { lat: number; lng: number };
  neighborhoodsServed: string[];
  freeways: string[];
  landmarks: string[];
  primaryKeyword: string;
  secondaryKeywords: string[];
  longTailKeywords: string[];
  lsiTerms: string[];
  metaTitle: string;
  metaDescription: string;
  h1: string;
  /** Short badge line above H1 */
  heroKicker: string;
  heroSubhead: string;
  neighborhoodIntro: string;
  /** Rich intro paragraph for narrative / SEO */
  localIntro: string;
  /** Replaces legacy why-here bullets — qualitative trust, no pricing */
  confidencePoints: ConfidencePoint[];
  commonScenarios: string[];
  faqs: { q: string; a: string }[];
  images: {
    hero: LandingImageId;
    services: LandingImageId[];
    finalCta: LandingImageId;
  };
  relatedCities: RelatedCityLink[];
  /** Optional localized blog guides for internal linking */
  relatedGuides?: RelatedGuideLink[];
  serviceHighlights: ServiceHighlight[];
  localKnowledge: LocalKnowledgeItem[];
  stats: LocationStat[];
  testimonials: LocationTestimonial[];
  aggregateRating: AggregateRating;
  signatureColor: LocationSignatureColor;
  /** County hub pages: major corridor blurbs */
  corridorCoverage?: CorridorCoverageItem[];
}
