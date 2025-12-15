import BlogPostTemplate, {
  IntroText,
  SectionHeading,
  IconBulletList,
  InfoListBox,
  CalloutBox,
  TwoColumnGrid,
  MidArticleCTA,
  BlogFigure
} from '@/components/blog/BlogPostTemplate';
import type { BlogPostData } from '@/types/blog';
import motorcycleTowingImage from "@/assets/blog-motorcycle-towing.jpg";
import lightDutyService from "@/assets/light-duty-service.jpg";

const blogData: BlogPostData = {
  slug: "motorcycle-towing-guide",
  title: "Motorcycle Towing Guide: Safe Transport for Two-Wheelers",
  metaTitle: "Motorcycle Towing Guide SF | Bike Transport Bay Area",
  metaDescription: "Complete motorcycle towing guide for San Francisco Bay Area. Specialized equipment, safety protocols, professional bike transport. Call (650) 881-2400.",
  canonicalUrl: "https://heavytowpro.com/blog/motorcycle-towing-guide",
  primaryKeyword: "motorcycle towing",
  secondaryKeywords: ["bike transport Bay Area", "two-wheeler recovery", "motorcycle breakdown SF", "professional bike towing"],
  category: "Light Duty",
  
  author: "Heavy Haulers Team",
  publishDate: "2025-08-23",
  dateModified: "2025-08-23",
  readTime: "9 min",
  excerpt: "Complete guide to motorcycle towing in San Francisco Bay Area with specialized equipment and professional transport services.",
  
  heroImage: {
    src: motorcycleTowingImage,
    alt: "Professional motorcycle being loaded onto specialized flatbed tow truck",
    caption: "Specialized motorcycle towing with proper securing techniques"
  },
  
  atAGlance: {
    bestUseCase: "Motorcycle breakdowns, transport, and recovery requiring specialized two-wheel handling",
    responseWorkflow: "Pre-loading inspection → Proper securing → Frame-point tie-downs → Safe transport",
    safetyNote: "Never secure motorcycles by handlebars or fragile components",
    dispatchNeeds: "Motorcycle make/model, location, condition, destination",
    relatedServiceLink: { text: "Light-Duty Towing", href: "/services/light-duty" }
  },
  
  tableOfContents: [
    { id: "why-specialized-matters", title: "Why Specialized Motorcycle Towing Matters", level: 2 },
    { id: "types-of-equipment", title: "Types of Motorcycle Towing Equipment", level: 2 },
    { id: "safety-protocols", title: "Safety Protocols for Motorcycle Loading", level: 2 },
    { id: "breakdown-scenarios", title: "Common Motorcycle Breakdown Scenarios", level: 2 },
    { id: "cost-factors", title: "Cost Factors for Motorcycle Towing", level: 2 },
    { id: "choosing-service", title: "Choosing a Motorcycle Towing Service", level: 2 },
    { id: "faq", title: "Frequently Asked Questions", level: 2 }
  ],
  
  faq: [
    {
      question: "What equipment is used for motorcycle towing?",
      answer: "We use flatbed trucks for maximum protection, specialized motorcycle trailers, wheel chocks, soft straps, and frame-point tie-downs to secure bikes safely."
    },
    {
      question: "Is flatbed transport necessary for motorcycles?",
      answer: "Flatbed transport is the safest method for most motorcycles as it provides complete security with no wheel contact with the road during transport."
    },
    {
      question: "How do you secure a motorcycle for towing?",
      answer: "We secure motorcycles using frame tie-down points (never handlebars), proper compression technique, soft straps, and wheel chocks to prevent any movement."
    },
    {
      question: "Do you tow sport bikes and cruisers differently?",
      answer: "Yes, different motorcycle types have different tie-down points and handling requirements. Our operators are trained for all motorcycle types."
    },
    {
      question: "What if my motorcycle won't roll or is damaged?",
      answer: "We have equipment to safely load non-rolling or damaged motorcycles using dollies and specialized lifting equipment."
    },
    {
      question: "Can you transport multiple motorcycles at once?",
      answer: "Yes, we have motorcycle trailers capable of safely transporting multiple bikes for group transport or event needs."
    }
  ],
  
  relatedPosts: ["emergency-towing-guide", "luxury-transport-guide", "roadside-assistance-vs-towing"],
  
  relatedServices: [
    { title: "Light-Duty Towing", href: "/services/light-duty", description: "Motorcycle and small vehicle towing" },
    { title: "Medium-Duty Towing", href: "/services/medium-duty", description: "Larger vehicle transport" },
    { title: "Heavy-Duty Towing", href: "/services/heavy-duty", description: "Commercial vehicle services" },
    { title: "All Services", href: "/services", description: "Complete service offerings" }
  ],
  
  serviceAreas: [
    { name: "San Francisco", href: "/locations/san-francisco" },
    { name: "Oakland", href: "/locations/oakland" },
    { name: "San Jose", href: "/locations/san-jose" },
    { name: "Daly City", href: "/locations/daly-city" },
    { name: "Fremont", href: "/locations/fremont" },
    { name: "Berkeley", href: "/locations/berkeley" }
  ]
};

const MotorcycleTowingGuide = () => {
  return (
    <BlogPostTemplate data={blogData}>
      <IntroText>
        Motorcycle towing requires specialized knowledge, equipment, and techniques that differ significantly from standard vehicle transport. Whether you're dealing with a breakdown, accident, or planned transport, understanding proper motorcycle towing procedures ensures your bike arrives safely at its destination.
      </IntroText>

      <SectionHeading id="why-specialized-matters">Why Specialized Motorcycle Towing Matters</SectionHeading>

      <CalloutBox type="info" title="Why Specialized Motorcycle Towing Matters">
        Motorcycles have different weight distribution and balance points, unique securing and tie-down requirements, need specialized loading equipment, have different insurance and liability considerations, and risk damage from improper handling.
      </CalloutBox>

      <SectionHeading id="types-of-equipment">Types of Motorcycle Towing Equipment</SectionHeading>
      
      <p>
        Professional motorcycle towing requires specific equipment designed for two-wheeled vehicles. Understanding these different methods helps you choose the right transport service for your situation.
      </p>

      <TwoColumnGrid
        leftTitle="Flatbed Transport"
        leftItems={[
          "Complete bike security",
          "No wheel contact with road",
          "Best for luxury/damaged bikes",
          "Higher cost but maximum protection"
        ]}
        rightTitle="Motorcycle Trailer"
        rightItems={[
          "Multiple bike capacity",
          "Weather protection available",
          "Cost-effective for multiple units",
          "Professional securing systems"
        ]}
      />

      <SectionHeading id="safety-protocols">Safety Protocols for Motorcycle Loading</SectionHeading>
      
      <p>
        Proper loading technique is crucial for preventing damage during transport. Professional towing services follow strict protocols to ensure your motorcycle's safety.
      </p>

      <IconBulletList
        items={[
          { icon: "CheckCircle", text: "Pre-Loading Inspection: Document existing damage, fuel level, and accessories" },
          { icon: "CheckCircle", text: "Proper Loading Angle: Use gradual ramps to prevent scraping or bottoming out" },
          { icon: "CheckCircle", text: "Secure Tie-Down Points: Use frame points, not handlebars or fragile components" },
          { icon: "CheckCircle", text: "Suspension Compression: Proper tie-down technique to prevent suspension damage" }
        ]}
      />

      <MidArticleCTA />

      <BlogFigure 
        image={{
          src: lightDutyService,
          alt: "Flatbed tow truck with specialized motorcycle securing equipment",
          caption: "Professional motorcycle transport with proper tie-down techniques"
        }}
      />

      <SectionHeading id="breakdown-scenarios">Common Motorcycle Breakdown Scenarios</SectionHeading>
      
      <p>
        Understanding when to call for professional motorcycle towing versus attempting repairs helps protect both you and your bike. Some situations always require professional towing assistance.
      </p>

      <CalloutBox type="warning" title="Always Call for Towing">
        Engine seizure or major mechanical failure, accident damage affecting rideability, electrical system complete failure, transmission/clutch problems, fuel system contamination, wheel or tire damage, brake system failure, and any safety system malfunction.
      </CalloutBox>

      <SectionHeading id="cost-factors">Cost Factors for Motorcycle Towing</SectionHeading>
      
      <p>
        Motorcycle towing costs vary based on several factors. Understanding these helps you budget appropriately and choose the right service level for your needs.
      </p>

      <TwoColumnGrid
        leftTitle="Base Factors"
        leftItems={[
          "Distance to destination",
          "Type of motorcycle",
          "Time of day/emergency rates",
          "Complexity of pickup location"
        ]}
        rightTitle="Additional Services"
        rightItems={[
          "Flatbed vs. trailer transport",
          "Enclosed trailer protection",
          "Multiple bike transport",
          "Storage services"
        ]}
      />

      <SectionHeading id="choosing-service">Choosing a Motorcycle Towing Service</SectionHeading>
      
      <p>
        Not all towing services are equipped for motorcycle transport. Choosing the right provider ensures professional handling and prevents costly damage to your bike.
      </p>

      <InfoListBox
        title="Essential Service Qualifications"
        items={[
          { text: "Specialized motorcycle equipment", included: true },
          { text: "Experienced motorcycle handlers", included: true },
          { text: "Proper insurance coverage", included: true },
          { text: "24/7 emergency availability", included: true },
          { text: "Transparent pricing policies", included: true },
          { text: "Local Bay Area knowledge", included: true },
          { text: "Professional certifications", included: true },
          { text: "Customer service excellence", included: true }
        ]}
      />

      <CalloutBox type="info" title="Need Motorcycle Towing?">
        Heavy Haulers provides specialized motorcycle towing with trained operators and proper equipment. Call (650) 881-2400 for immediate assistance.
      </CalloutBox>
    </BlogPostTemplate>
  );
};

export default MotorcycleTowingGuide;
