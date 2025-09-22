import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface InternalLink {
  title: string;
  description: string;
  href: string;
  category: string;
}

interface InternalLinkOptimizerProps {
  currentPage?: string;
  category?: string;
  limit?: number;
}

const allInternalLinks: InternalLink[] = [
  // Service Pages
  {
    title: "Light Duty Towing Services",
    description: "Professional car towing, flatbed service, motorcycle transport, and luxury vehicle handling in San Francisco Bay Area.",
    href: "/services/light-duty",
    category: "services"
  },
  {
    title: "Medium Duty Commercial Towing",
    description: "Box trucks, delivery vehicles, RVs, and commercial fleet towing services for business operations.",
    href: "/services/medium-duty", 
    category: "services"
  },
  {
    title: "Heavy Duty Equipment Transport",
    description: "Semi-truck towing, heavy equipment recovery, and industrial machinery transport with rotator services.",
    href: "/services/heavy-duty",
    category: "services"
  },
  
  // Blog Posts
  {
    title: "Emergency Towing Guide: What to Do When Stranded",
    description: "Essential safety tips and step-by-step procedures for emergency towing situations in the Bay Area.",
    href: "/blog/emergency-towing-guide",
    category: "blog"
  },
  {
    title: "Winter Towing Preparedness for Bay Area Drivers",
    description: "Comprehensive guide to preparing your vehicle for winter conditions and emergency towing needs.",
    href: "/blog/winter-towing-preparedness",
    category: "blog"
  },
  {
    title: "Electric Vehicle Towing: Special Considerations",
    description: "Critical safety protocols and specialized procedures for towing Tesla and other electric vehicles.",
    href: "/blog/electric-vehicle-towing-guide",
    category: "blog"
  },
  {
    title: "Motorcycle Towing Guide: Safe Transport for Your Bike",
    description: "Professional motorcycle towing techniques and how to choose the right service for valuable bikes.",
    href: "/blog/motorcycle-towing-guide",
    category: "blog"
  },
  
  // Informational Pages
  {
    title: "Get a Free Towing Quote",
    description: "Request transparent pricing for your towing needs with our quick online quote form.",
    href: "/get-quote",
    category: "conversion"
  },
  {
    title: "Contact Heavy Haulers San Francisco",
    description: "24/7 emergency dispatch, fleet contracts, and professional towing services contact information.",
    href: "/contact",
    category: "contact"
  },
  {
    title: "San Francisco Bay Area Service Coverage",
    description: "Complete coverage areas including San Francisco, San Mateo, Alameda, and Santa Clara counties.",
    href: "/locations",
    category: "service-area"
  }
];

export default function InternalLinkOptimizer({ 
  currentPage, 
  category = "mixed", 
  limit = 4 
}: InternalLinkOptimizerProps) {
  
  // Filter links based on category and exclude current page
  let filteredLinks = allInternalLinks.filter(link => {
    if (currentPage && link.href === currentPage) return false;
    if (category === "mixed") return true;
    return link.category === category;
  });

  // Randomize and limit results for variety
  filteredLinks = filteredLinks.sort(() => Math.random() - 0.5).slice(0, limit);

  if (filteredLinks.length === 0) return null;

  return (
    <section className="py-16 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Related Services & Resources
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore more about our comprehensive towing services and helpful resources for Bay Area drivers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredLinks.map((link, index) => (
            <Card key={index} className="group hover:shadow-elevated transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <Link to={link.href} className="block">
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {link.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {link.description}
                  </p>
                  <div className="flex items-center text-primary font-medium text-sm">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button variant="outline" asChild>
            <Link to="/services">
              View All Services
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}