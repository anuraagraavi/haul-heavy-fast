import { Button } from "@/components/ui/button";
import { ArrowRight, Clock } from "lucide-react";
import { Link } from "react-router-dom";

// Import blog images
import emergencyGuideImage from '@/assets/blog-emergency-guide.jpg';
import fleetManagementImage from '@/assets/blog-fleet-management.jpg';
import heavyEquipmentImage from '@/assets/blog-heavy-equipment.jpg';
import luxuryTransportImage from '@/assets/blog-luxury-transport.jpg';
import sfChallengesImage from '@/assets/blog-sf-challenges.jpg';
import winterTowingImage from '@/assets/blog-winter-towing.jpg';
import motorcycleTowingImage from '@/assets/blog-motorcycle-towing.jpg';
import evTowingImage from '@/assets/blog-ev-towing.jpg';
import roadsideVsTowingImage from '@/assets/blog-roadside-vs-towing.jpg';
import commercialRecoveryImage from '@/assets/blog-commercial-recovery.jpg';
import commercialTruckImage from '@/assets/blog-commercial-truck-towing.jpg';
import accidentSceneImage from '@/assets/blog-accident-scene-management.jpg';
import constructionEquipmentImage from '@/assets/blog-construction-equipment-hauling.jpg';
import vehicleStorageImage from '@/assets/blog-vehicle-storage-solutions.jpg';
import towingTechnologyImage from '@/assets/blog-towing-technology.jpg';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  route: string;
  readTime: string;
  category: string;
}

interface RelatedPostsProps {
  currentPostId: string;
  category?: string;
}

const allBlogPosts: BlogPost[] = [
  {
    id: "towing-technology-gps-fleet-management",
    title: "Towing Technology: GPS Tracking and Modern Fleet Management",
    excerpt: "Discover modern towing technology including GPS tracking and fleet management software",
    image: towingTechnologyImage,
    route: "/blog/towing-technology-gps-fleet-management",
    readTime: "8 min read",
    category: "Technology & Innovation"
  },
  {
    id: "vehicle-storage-solutions",
    title: "Vehicle Storage Solutions: Secure Towing and Long-Term Parking",
    excerpt: "Professional vehicle storage and impound services with secure facilities",
    image: vehicleStorageImage,
    route: "/blog/vehicle-storage-solutions",
    readTime: "9 min read",
    category: "Storage Services"
  },
  {
    id: "construction-equipment-hauling",
    title: "Construction Equipment Hauling: Oversize Load Transportation Guide",
    excerpt: "Expert construction equipment hauling with permit assistance and route planning",
    image: constructionEquipmentImage,
    route: "/blog/construction-equipment-hauling",
    readTime: "10 min read",
    category: "Construction Services"
  },
  {
    id: "accident-scene-management",
    title: "Accident Scene Management: Professional Towing Response Protocols",
    excerpt: "Expert accident scene management and multi-vehicle recovery with professional coordination",
    image: accidentSceneImage,
    route: "/blog/accident-scene-management",
    readTime: "8 min read",
    category: "Emergency Response"
  },
  {
    id: "commercial-truck-towing-interstate",
    title: "Commercial Truck Towing: Interstate Highway Recovery Solutions",
    excerpt: "Professional commercial truck towing services for interstate highways with DOT compliance",
    image: commercialTruckImage,
    route: "/blog/commercial-truck-towing-interstate",
    readTime: "9 min read",
    category: "Commercial Services"
  },
  {
    id: "emergency-towing-guide",
    title: "Emergency Towing Guide: What to Do When You're Stranded",
    excerpt: "Complete guide to emergency towing procedures for San Francisco Bay Area drivers",
    image: emergencyGuideImage,
    route: "/blog/emergency-towing-guide",
    readTime: "7 min read",
    category: "Emergency Response"
  },
  {
    id: "fleet-management-towing",
    title: "Fleet Management & Towing: Reducing Downtime for Businesses",
    excerpt: "Learn how proper fleet management and towing partnerships can minimize business disruptions",
    image: fleetManagementImage,
    route: "/blog/fleet-management-towing",
    readTime: "8 min read",
    category: "Commercial Services"
  },
  {
    id: "heavy-equipment-transport",
    title: "Heavy Equipment Transport: Moving Industrial Machinery Safely",
    excerpt: "Professional guide to transporting heavy machinery and construction equipment",
    image: heavyEquipmentImage,
    route: "/blog/heavy-equipment-transport",
    readTime: "9 min read",
    category: "Heavy Duty"
  },
  {
    id: "luxury-transport-guide",
    title: "Luxury Vehicle Transport: Premium Care for Premium Cars",
    excerpt: "Specialized luxury vehicle transport services with premium care and protection",
    image: luxuryTransportImage,
    route: "/blog/luxury-transport-guide",
    readTime: "7 min read",
    category: "Specialized Services"
  },
  {
    id: "sf-towing-challenges",
    title: "San Francisco Towing Challenges: Urban Recovery Solutions",
    excerpt: "Navigate San Francisco's unique towing challenges with expert insights",
    image: sfChallengesImage,
    route: "/blog/sf-towing-challenges",
    readTime: "8 min read",
    category: "Emergency Response"
  },
  {
    id: "winter-towing-preparedness",
    title: "Winter Towing Preparedness: Bay Area Vehicle Safety",
    excerpt: "Essential winter towing preparedness tips for Bay Area drivers",
    image: winterTowingImage,
    route: "/blog/winter-towing-preparedness",
    readTime: "6 min read",
    category: "Safety Tips"
  },
  {
    id: "motorcycle-towing-guide",
    title: "Motorcycle Towing Guide: Safe Transport for Two-Wheelers",
    excerpt: "Comprehensive guide to motorcycle towing in the Bay Area",
    image: motorcycleTowingImage,
    route: "/blog/motorcycle-towing-guide",
    readTime: "6 min read",
    category: "Specialized Services"
  },
  {
    id: "electric-vehicle-towing-guide",
    title: "Electric Vehicle Towing Guide: EV Transport Best Practices",
    excerpt: "Essential guide to electric vehicle towing with specialized techniques",
    image: evTowingImage,
    route: "/blog/electric-vehicle-towing-guide",
    readTime: "6 min read",
    category: "Specialized Services"
  },
  {
    id: "roadside-assistance-vs-towing",
    title: "Roadside Assistance vs Towing: When to Call Who",
    excerpt: "Understanding the difference between roadside assistance and towing services",
    image: roadsideVsTowingImage,
    route: "/blog/roadside-assistance-vs-towing",
    readTime: "5 min read",
    category: "Safety Tips"
  },
  {
    id: "commercial-vehicle-urban-recovery",
    title: "Commercial Vehicle Urban Recovery: City Towing Solutions",
    excerpt: "Specialized commercial vehicle recovery in urban environments",
    image: commercialRecoveryImage,
    route: "/blog/commercial-vehicle-urban-recovery",
    readTime: "9 min read",
    category: "Commercial Services"
  }
];

const RelatedPosts = ({ currentPostId, category }: RelatedPostsProps): JSX.Element => {
  // Filter out the current post
  const otherPosts = allBlogPosts.filter(post => post.id !== currentPostId);
  
  // If category is provided, prioritize posts from the same category
  let relatedPosts: BlogPost[];
  if (category) {
    const sameCategoryPosts = otherPosts.filter(post => post.category === category);
    const otherCategoryPosts = otherPosts.filter(post => post.category !== category);
    relatedPosts = [...sameCategoryPosts, ...otherCategoryPosts].slice(0, 3);
  } else {
    relatedPosts = otherPosts.slice(0, 3);
  }

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Related Articles</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore more insights and tips from our towing and transport experts
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {relatedPosts.map((post) => (
            <div key={post.id} className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative overflow-hidden group">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  width={400}
                  height={225}
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-muted-foreground text-sm mb-3">
                  <Clock className="w-4 h-4 mr-2" />
                  {post.readTime}
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-3 line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <Link 
                  to={post.route}
                  className="inline-flex items-center text-primary hover:text-primary/80 transition-colors font-medium"
                >
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" variant="outline">
            <Link to="/blog" className="inline-flex items-center">
              View All Articles
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RelatedPosts;