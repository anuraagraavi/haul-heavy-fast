// Centralized Blog Registry - Single source of truth for all blog posts
// This file consolidates blog metadata used across Blog.tsx and BlogRelatedContent.tsx

import emergencyGuideImage from "@/assets/blog-emergency-guide.jpg";
import heavyEquipmentImage from "@/assets/blog-heavy-equipment.jpg";
import fleetManagementImage from "@/assets/blog-fleet-management.jpg";
import sfChallengesImage from "@/assets/blog-sf-challenges.jpg";
import luxuryTransportImage from "@/assets/blog-luxury-transport.jpg";
import winterTowingImage from "@/assets/blog-winter-towing.jpg";
import motorcycleTowingImage from "@/assets/blog-motorcycle-towing.jpg";
import evTowingImage from "@/assets/blog-ev-towing.jpg";
import roadsideVsTowingImage from "@/assets/blog-roadside-vs-towing.jpg";
import commercialRecoveryImage from "@/assets/blog-commercial-recovery.jpg";
import commercialTruckImage from "@/assets/blog-commercial-truck-towing.jpg";
import accidentSceneImage from "@/assets/blog-accident-scene-management.jpg";
import constructionEquipmentImage from "@/assets/blog-construction-equipment-hauling.jpg";
import vehicleStorageImage from "@/assets/blog-vehicle-storage-solutions.jpg";
import towingTechnologyImage from "@/assets/blog-towing-technology.jpg";
import heavyDutyServiceImage from "@/assets/heavy-duty-service.jpg";
import bayAreaCoverageImage from "@/assets/bay-area-coverage.jpg";
import heroTowTruckImage from "@/assets/hero-tow-truck.jpg";

// Category mapping for consistent naming across the app
export const BLOG_CATEGORIES = [
  "All Articles",
  "Emergency Response",
  "Commercial Services", 
  "Construction Services",
  "Storage Services",
  "Technology & Innovation",
  "Heavy Duty",
  "Safety Tips",
  "Specialized Services",
  "SF Local Services",
  "Regulations & Compliance"
] as const;

export type BlogCategory = typeof BLOG_CATEGORIES[number];

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  author: string;
  publishDate: string;        // ISO format: YYYY-MM-DD
  displayDate: string;        // Human readable: "October 28, 2025"
  readTime: string;
  category: BlogCategory;
}

// All blog posts sorted by date (newest first)
export const blogPosts: BlogPost[] = [
  // October 2025 Posts
  {
    id: "chp-towing-california",
    slug: "chp-towing-california",
    title: "CHP Towing in California: What Happens When Highway Patrol Tows Your Vehicle",
    excerpt: "Complete guide to California Highway Patrol towing procedures, impound recovery, fees, and your rights when CHP orders a tow.",
    image: heroTowTruckImage,
    author: "Heavy Haulers Team",
    publishDate: "2025-10-28",
    displayDate: "October 28, 2025",
    readTime: "10 min read",
    category: "Regulations & Compliance"
  },
  {
    id: "freeway-towing-bay-area",
    slug: "freeway-towing-bay-area",
    title: "Freeway Towing Bay Area: Highway Recovery Services",
    excerpt: "Professional freeway and highway towing services across the Bay Area with rapid response, safety protocols, and traffic management.",
    image: bayAreaCoverageImage,
    author: "Heavy Haulers Team",
    publishDate: "2025-10-24",
    displayDate: "October 24, 2025",
    readTime: "9 min read",
    category: "Emergency Response"
  },
  {
    id: "heavy-duty-recovery-bay-area",
    slug: "heavy-duty-recovery-bay-area",
    title: "Heavy Duty Recovery Bay Area: Commercial & Industrial Towing",
    excerpt: "Specialized heavy-duty vehicle recovery services for semi-trucks, buses, and industrial equipment throughout the Bay Area.",
    image: heavyDutyServiceImage,
    author: "Heavy Haulers Team",
    publishDate: "2025-10-21",
    displayDate: "October 21, 2025",
    readTime: "10 min read",
    category: "Heavy Duty"
  },
  {
    id: "underground-garage-towing-sf",
    slug: "underground-garage-towing-sf",
    title: "Underground Garage Towing SF: Low Clearance Vehicle Recovery",
    excerpt: "Specialized underground parking garage towing in San Francisco with low-clearance equipment and tight-space recovery techniques.",
    image: sfChallengesImage,
    author: "Heavy Haulers Team",
    publishDate: "2025-10-17",
    displayDate: "October 17, 2025",
    readTime: "8 min read",
    category: "SF Local Services"
  },
  {
    id: "rv-towing-bay-area",
    slug: "rv-towing-bay-area",
    title: "RV Towing Bay Area: Recreational Vehicle Transport Guide",
    excerpt: "Complete guide to RV and motorhome towing services in the Bay Area including Class A, B, C motorhomes and travel trailers.",
    image: heavyEquipmentImage,
    author: "Heavy Haulers Team",
    publishDate: "2025-10-14",
    displayDate: "October 14, 2025",
    readTime: "9 min read",
    category: "Specialized Services"
  },
  {
    id: "box-truck-towing-san-francisco",
    slug: "box-truck-towing-san-francisco",
    title: "Box Truck Towing San Francisco: Commercial Vehicle Recovery",
    excerpt: "Professional box truck and delivery vehicle towing services in San Francisco with medium-duty recovery capabilities.",
    image: commercialTruckImage,
    author: "Heavy Haulers Team",
    publishDate: "2025-10-10",
    displayDate: "October 10, 2025",
    readTime: "8 min read",
    category: "Commercial Services"
  },
  {
    id: "towing-cost-san-francisco",
    slug: "towing-cost-san-francisco",
    title: "Towing Cost San Francisco: Complete Price Guide 2025",
    excerpt: "Comprehensive breakdown of towing costs in San Francisco including impound fees, private towing rates, and money-saving tips.",
    image: towingTechnologyImage,
    author: "Heavy Haulers Team",
    publishDate: "2025-10-07",
    displayDate: "October 7, 2025",
    readTime: "9 min read",
    category: "SF Local Services"
  },
  {
    id: "california-private-property-towing",
    slug: "california-private-property-towing",
    title: "California Private Property Towing: Laws and Your Rights",
    excerpt: "Understanding California's private property towing laws, signage requirements, fee limits, and how to dispute unauthorized tows.",
    image: vehicleStorageImage,
    author: "Heavy Haulers Team",
    publishDate: "2025-10-05",
    displayDate: "October 5, 2025",
    readTime: "10 min read",
    category: "Regulations & Compliance"
  },
  {
    id: "sf-tow-fee-discount",
    slug: "sf-tow-fee-discount",
    title: "SF Tow Fee Discount: Low-Income Towing Assistance Programs",
    excerpt: "Guide to San Francisco's tow fee discount programs for low-income residents, eligibility requirements, and application process.",
    image: sfChallengesImage,
    author: "Heavy Haulers Team",
    publishDate: "2025-10-04",
    displayDate: "October 4, 2025",
    readTime: "7 min read",
    category: "SF Local Services"
  },
  {
    id: "car-towed-san-francisco",
    slug: "car-towed-san-francisco",
    title: "My Car Was Towed in San Francisco: What to Do Next",
    excerpt: "Step-by-step guide to recovering your towed vehicle in San Francisco, including SFMTA procedures, fees, and your legal rights.",
    image: sfChallengesImage,
    author: "Heavy Haulers Team",
    publishDate: "2025-10-03",
    displayDate: "October 3, 2025",
    readTime: "9 min read",
    category: "SF Local Services"
  },
  // September 2025 Posts
  {
    id: "towing-technology-gps-fleet-management",
    slug: "towing-technology-gps-fleet-management",
    title: "Towing Technology: GPS Tracking and Modern Fleet Management",
    excerpt: "Discover modern towing technology including GPS tracking, fleet management software, and real-time customer communication systems.",
    image: towingTechnologyImage,
    author: "Heavy Haulers Team",
    publishDate: "2025-09-30",
    displayDate: "September 30, 2025",
    readTime: "8 min read",
    category: "Technology & Innovation"
  },
  {
    id: "luxury-transport-guide",
    slug: "luxury-transport-guide",
    title: "Luxury Vehicle Transport: Premium Care for Premium Cars",
    excerpt: "Specialized luxury vehicle transport services with premium care and protection for high-end automobiles in the Bay Area.",
    image: luxuryTransportImage,
    author: "Heavy Haulers Team",
    publishDate: "2025-09-16",
    displayDate: "September 16, 2025",
    readTime: "7 min read",
    category: "Specialized Services"
  },
  {
    id: "vehicle-storage-solutions",
    slug: "vehicle-storage-solutions",
    title: "Vehicle Storage Solutions: Secure Towing and Long-Term Parking",
    excerpt: "Professional vehicle storage and impound services with secure facilities, legal compliance, and easy retrieval processes.",
    image: vehicleStorageImage,
    author: "Heavy Haulers Team",
    publishDate: "2025-09-12",
    displayDate: "September 12, 2025",
    readTime: "9 min read",
    category: "Storage Services"
  },
  {
    id: "sf-towing-challenges",
    slug: "sf-towing-challenges",
    title: "San Francisco Towing Challenges: Urban Recovery Solutions",
    excerpt: "Navigate San Francisco's unique towing challenges with expert insights on steep hills, narrow streets, and parking regulations.",
    image: sfChallengesImage,
    author: "Heavy Haulers Team",
    publishDate: "2025-09-10",
    displayDate: "September 10, 2025",
    readTime: "8 min read",
    category: "Emergency Response"
  },
  {
    id: "commercial-vehicle-urban-recovery",
    slug: "commercial-vehicle-urban-recovery",
    title: "Commercial Vehicle Urban Recovery: City Towing Solutions",
    excerpt: "Specialized commercial vehicle recovery in urban environments. Expert solutions for city-based commercial towing challenges.",
    image: commercialRecoveryImage,
    author: "Heavy Haulers Team",
    publishDate: "2025-09-06",
    displayDate: "September 6, 2025",
    readTime: "9 min read",
    category: "Commercial Services"
  },
  {
    id: "roadside-assistance-vs-towing",
    slug: "roadside-assistance-vs-towing",
    title: "Roadside Assistance vs Towing: When to Call Who",
    excerpt: "Understanding the difference between roadside assistance and towing services. Know when to call for the right help.",
    image: roadsideVsTowingImage,
    author: "Heavy Haulers Team",
    publishDate: "2025-09-02",
    displayDate: "September 2, 2025",
    readTime: "5 min read",
    category: "Safety Tips"
  },
  // August 2025 Posts
  {
    id: "construction-equipment-hauling",
    slug: "construction-equipment-hauling",
    title: "Construction Equipment Hauling: Oversize Load Transportation",
    excerpt: "Expert construction equipment hauling with permit assistance, route planning, and specialized transport solutions.",
    image: constructionEquipmentImage,
    author: "Heavy Haulers Team",
    publishDate: "2025-08-29",
    displayDate: "August 29, 2025",
    readTime: "10 min read",
    category: "Construction Services"
  },
  {
    id: "electric-vehicle-towing-guide",
    slug: "electric-vehicle-towing-guide",
    title: "Electric Vehicle Towing Guide: EV Transport Best Practices",
    excerpt: "Essential guide to electric vehicle towing with specialized techniques and safety protocols for EV transport in the Bay Area.",
    image: evTowingImage,
    author: "Heavy Haulers Team",
    publishDate: "2025-08-27",
    displayDate: "August 27, 2025",
    readTime: "6 min read",
    category: "Specialized Services"
  },
  {
    id: "motorcycle-towing-guide",
    slug: "motorcycle-towing-guide",
    title: "Motorcycle Towing Guide: Safe Transport for Two-Wheelers",
    excerpt: "Comprehensive guide to motorcycle towing in the Bay Area. Safe transport techniques and specialized equipment for bikes.",
    image: motorcycleTowingImage,
    author: "Heavy Haulers Team",
    publishDate: "2025-08-23",
    displayDate: "August 23, 2025",
    readTime: "6 min read",
    category: "Specialized Services"
  },
  {
    id: "winter-towing-preparedness",
    slug: "winter-towing-preparedness",
    title: "Winter Towing Preparedness: Bay Area Vehicle Safety",
    excerpt: "Essential winter towing preparedness tips for Bay Area drivers. Learn about seasonal challenges and emergency planning.",
    image: winterTowingImage,
    author: "Heavy Haulers Team",
    publishDate: "2025-08-19",
    displayDate: "August 19, 2025",
    readTime: "6 min read",
    category: "Safety Tips"
  },
  {
    id: "accident-scene-management",
    slug: "accident-scene-management",
    title: "Accident Scene Management: Professional Towing Response",
    excerpt: "Expert accident scene management and multi-vehicle recovery with professional coordination and insurance support.",
    image: accidentSceneImage,
    author: "Heavy Haulers Team",
    publishDate: "2025-08-15",
    displayDate: "August 15, 2025",
    readTime: "8 min read",
    category: "Emergency Response"
  },
  {
    id: "heavy-equipment-transport",
    slug: "heavy-equipment-transport",
    title: "Heavy Equipment Transport: Specialized Moving Solutions",
    excerpt: "Professional heavy equipment transport services in the Bay Area. Specialized solutions for construction and industrial moving.",
    image: heavyEquipmentImage,
    author: "Heavy Haulers Team",
    publishDate: "2025-08-13",
    displayDate: "August 13, 2025",
    readTime: "9 min read",
    category: "Heavy Duty"
  },
  {
    id: "fleet-management-towing",
    slug: "fleet-management-towing",
    title: "Fleet Management Towing: Business Vehicle Solutions",
    excerpt: "Comprehensive fleet management towing solutions for businesses. Reduce downtime and optimize your commercial vehicle operations.",
    image: fleetManagementImage,
    author: "Heavy Haulers Team",
    publishDate: "2025-08-09",
    displayDate: "August 9, 2025",
    readTime: "8 min read",
    category: "Commercial Services"
  },
  {
    id: "emergency-towing-guide",
    slug: "emergency-towing-guide",
    title: "Emergency Towing Guide: What to Do When Stranded",
    excerpt: "Complete guide to emergency towing procedures for San Francisco Bay Area drivers. Learn safety tips and how to get professional help fast.",
    image: emergencyGuideImage,
    author: "Heavy Haulers Team",
    publishDate: "2025-08-05",
    displayDate: "August 5, 2025",
    readTime: "7 min read",
    category: "Emergency Response"
  },
  {
    id: "commercial-truck-towing-interstate",
    slug: "commercial-truck-towing-interstate",
    title: "Commercial Truck Towing: Interstate Highway Recovery",
    excerpt: "Professional commercial truck towing services for interstate highways with DOT compliance and 24/7 emergency response.",
    image: commercialTruckImage,
    author: "Heavy Haulers Team",
    publishDate: "2025-08-01",
    displayDate: "August 1, 2025",
    readTime: "9 min read",
    category: "Commercial Services"
  }
];

// Helper function to get posts by category
export function getPostsByCategory(category: BlogCategory): BlogPost[] {
  if (category === "All Articles") return blogPosts;
  return blogPosts.filter(post => post.category === category);
}

// Helper function to get related posts (excluding current post)
export function getRelatedPosts(currentPostId: string, category?: string, limit: number = 3): BlogPost[] {
  let related = blogPosts.filter(post => post.id !== currentPostId);
  
  if (category && category !== "All Articles") {
    const sameCategoryPosts = related.filter(post => post.category === category);
    const otherPosts = related.filter(post => post.category !== category);
    related = [...sameCategoryPosts, ...otherPosts];
  }
  
  return related.slice(0, limit);
}

// Helper to format for related articles (adapter for BlogRelatedContent)
export function getRelatedPostsForTemplate(currentPostId: string, category?: string, limit: number = 3) {
  const posts = getRelatedPosts(currentPostId, category, limit);
  return posts.map(post => ({
    id: post.id,
    title: post.title,
    excerpt: post.excerpt,
    image: post.image,
    route: `/blog/${post.slug}`,
    readTime: post.readTime.replace(' read', ''),
    category: post.category
  }));
}
