import BlogPostTemplate, {
  IntroText,
  SectionHeading,
  IconBulletList,
  InfoListBox,
  CalloutBox,
  TwoColumnGrid,
  StepProcess,
  MidArticleCTA,
  BlogFigure
} from '@/components/blog/BlogPostTemplate';
import type { BlogPostData } from '@/types/blog';
import constructionEquipmentImage from "@/assets/blog-construction-equipment-hauling.jpg";
import heavyEquipment from "@/assets/blog-heavy-equipment.jpg";
import heavyDutyService from "@/assets/heavy-duty-service.jpg";

const blogData: BlogPostData = {
  slug: "construction-equipment-hauling",
  title: "Construction Equipment Hauling: Oversize Load Transportation Guide",
  metaTitle: "Construction Equipment Hauling Bay Area | Oversize Load Permits",
  metaDescription: "Expert construction equipment hauling and oversize load transportation in Bay Area. Permit assistance, route planning, specialized transport. Call (650) 881-2400.",
  canonicalUrl: "https://heavytowpro.com/blog/construction-equipment-hauling",
  primaryKeyword: "construction equipment hauling",
  secondaryKeywords: ["oversize load permits California", "heavy equipment transport SF", "construction transport services", "machinery hauling"],
  category: "Heavy Equipment",
  
  author: "Heavy Haulers Team",
  publishDate: "2025-08-29",
  dateModified: "2025-08-29",
  readTime: "10 min",
  excerpt: "Professional construction equipment hauling with permit assistance and specialized transport solutions in the Bay Area.",
  
  heroImage: {
    src: constructionEquipmentImage,
    alt: "Professional construction equipment hauling service transporting heavy machinery on specialized trailer in Bay Area",
    caption: "Specialized construction equipment transport with proper permits and safety measures"
  },
  
  atAGlance: {
    bestUseCase: "Excavators, bulldozers, cranes, and heavy construction machinery transport",
    responseWorkflow: "Permit acquisition → Route planning → Escort coordination → Safe transport",
    safetyNote: "Oversize loads require special permits and may need escort vehicles",
    dispatchNeeds: "Equipment dimensions, weight, pickup/delivery locations, timeline",
    relatedServiceLink: { text: "Heavy-Duty Towing Services", href: "/services/heavy-duty" }
  },
  
  tableOfContents: [
    { id: "oversize-regulations", title: "Understanding Oversize Load Regulations", level: 2 },
    { id: "permit-requirements", title: "Permit Requirements and Processing", level: 2 },
    { id: "route-planning", title: "Route Planning and Analysis", level: 2 },
    { id: "specialized-transport", title: "Specialized Transport Equipment", level: 2 },
    { id: "safety-protocols", title: "Safety Protocols and Escort Requirements", level: 2 },
    { id: "industry-partnerships", title: "Construction Industry Partnerships", level: 2 },
    { id: "faq", title: "Frequently Asked Questions", level: 2 }
  ],
  
  faq: [
    {
      question: "What size equipment requires oversize load permits in California?",
      answer: "Standard legal limits allow up to 80,000 lbs gross weight, 8.5 feet width, 14 feet height, and 65 feet length. Equipment exceeding these dimensions requires special permits."
    },
    {
      question: "How long does permit processing take?",
      answer: "Routine permits take 3-5 business days, special permits 10-15 days, and complex routes up to 30 days. Emergency permits are available same-day for limited situations."
    },
    {
      question: "Do you handle all permit requirements?",
      answer: "Yes, we handle complete permit processing including Caltrans coordination, local agency permits, and escort vehicle arrangements."
    },
    {
      question: "What types of construction equipment do you transport?",
      answer: "We transport all construction equipment including excavators, bulldozers, cranes, pavers, compactors, and specialized machinery of any size."
    },
    {
      question: "When are escort vehicles required?",
      answer: "Single rear escort for loads 10-12 feet wide. Front and rear escorts for over 12 feet wide. Police escort for loads over 150,000 pounds."
    },
    {
      question: "Can you handle emergency construction equipment moves?",
      answer: "Yes, we offer priority scheduling for emergency equipment relocations with expedited permit processing when available."
    }
  ],
  
  relatedPosts: ["heavy-equipment-transport", "commercial-truck-towing-interstate", "fleet-management-towing"],
  
  relatedServices: [
    { title: "Heavy-Duty Towing", href: "/services/heavy-duty", description: "Professional heavy equipment transport" },
    { title: "Medium-Duty Towing", href: "/services/medium-duty", description: "Medium-sized equipment hauling" },
    { title: "Light-Duty Services", href: "/services/light-duty", description: "Light equipment transport" },
    { title: "All Services", href: "/services", description: "Complete service catalog" }
  ],
  
  serviceAreas: [
    { name: "San Francisco", href: "/locations/san-francisco" },
    { name: "Oakland", href: "/locations/oakland" },
    { name: "San Jose", href: "/locations/san-jose" },
    { name: "Fremont", href: "/locations/fremont" },
    { name: "Hayward", href: "/locations/hayward" },
    { name: "Concord", href: "/locations/concord" }
  ]
};

const ConstructionEquipmentHauling = () => {
  return (
    <BlogPostTemplate data={blogData}>
      <IntroText>
        Construction equipment hauling requires specialized expertise, proper permits, and advanced transportation equipment to move massive machinery safely and legally. In the Bay Area's complex regulatory environment, professional construction transport services ensure compliance with weight restrictions, route requirements, and safety protocols while keeping construction projects on schedule.
      </IntroText>

      <CalloutBox type="info" title="Need Construction Equipment Transport?">
        Heavy Haulers provides specialized construction equipment hauling with permit assistance and route planning. Call (650) 881-2400 for immediate assistance.
      </CalloutBox>

      <SectionHeading id="oversize-regulations">Understanding Oversize Load Regulations</SectionHeading>
      
      <p>
        California's oversize load regulations are among the most stringent in the nation, particularly in densely populated areas like the Bay Area. Understanding these regulations is crucial for construction companies planning equipment moves and project logistics.
      </p>

      <TwoColumnGrid
        leftTitle="Routine Permits"
        leftItems={[
          "Width: 8.5' to 12'",
          "Height: 14' to 15'",
          "Length: 65' to 75'",
          "Weight: Up to 120,000 lbs"
        ]}
        rightTitle="Special Permits"
        rightItems={[
          "Width: Over 12'",
          "Height: Over 15'",
          "Length: Over 75'",
          "Weight: Over 120,000 lbs"
        ]}
      />

      <SectionHeading id="permit-requirements">Permit Requirements and Processing</SectionHeading>
      
      <p>
        Obtaining proper permits for construction equipment transport involves detailed applications, route analysis, and coordination with multiple agencies. Our permit specialists handle this complex process to ensure legal compliance and minimize delays.
      </p>

      <TwoColumnGrid
        leftTitle="Required Documentation"
        leftItems={[
          "Equipment specifications and dimensions",
          "Detailed route analysis",
          "Insurance certificate verification",
          "Driver qualification records"
        ]}
        rightTitle="Processing Timeline"
        rightItems={[
          "Routine permits: 3-5 business days",
          "Special permits: 10-15 business days",
          "Emergency permits: Same day (limited)",
          "Complex routes: Up to 30 days"
        ]}
      />

      <MidArticleCTA />

      <BlogFigure 
        image={{
          src: heavyEquipment,
          alt: "Excavator being loaded onto specialized lowboy trailer",
          caption: "Proper loading techniques for construction equipment transport"
        }}
      />

      <SectionHeading id="route-planning">Route Planning and Analysis</SectionHeading>
      
      <p>
        Successful construction equipment transport begins with comprehensive route planning that considers bridge weight limits, overhead clearances, road conditions, and traffic patterns. Our route analysis ensures safe passage while minimizing impact on public infrastructure.
      </p>

      <StepProcess
        steps={[
          { step: 1, title: "Bridge Analysis", description: "Weight capacity verification for all bridge crossings" },
          { step: 2, title: "Clearance Survey", description: "Overhead obstruction identification and alternative routes" },
          { step: 3, title: "Road Condition Assessment", description: "Pavement condition and width restriction evaluation" },
          { step: 4, title: "Traffic Pattern Review", description: "Optimal timing to minimize congestion impact" },
          { step: 5, title: "Emergency Contingency", description: "Alternative routes and breakdown response planning" }
        ]}
      />

      <SectionHeading id="specialized-transport">Specialized Transport Equipment</SectionHeading>
      
      <p>
        Construction equipment hauling requires specialized trailers, rigging equipment, and safety systems designed to handle massive loads safely. Our fleet includes lowboy trailers, multi-axle dollies, and modular transport systems for the most challenging equipment moves.
      </p>

      <IconBulletList
        items={[
          { icon: "Truck", text: "Lowboy Trailers: For excavators, bulldozers, and tall equipment transport" },
          { icon: "Settings", text: "Multi-Axle Systems: Heavy-duty transport for crane components and large machinery" },
          { icon: "Shield", text: "Specialized Rigging: Custom tie-down and securing systems for unique equipment" }
        ]}
      />

      <SectionHeading id="safety-protocols">Safety Protocols and Escort Requirements</SectionHeading>
      
      <p>
        Oversize load transport requires comprehensive safety protocols including escort vehicles, warning systems, and emergency response planning. These measures protect both the transported equipment and other road users during transit.
      </p>

      <InfoListBox
        title="Escort Requirements by Load Size"
        items={[
          { text: "Single Rear Escort: Loads 10-12 feet wide or 100-125 feet long", included: true },
          { text: "Front and Rear Escorts: Loads over 12 feet wide or 125 feet long", included: true },
          { text: "Police Escort: Loads over 150,000 pounds or blocking traffic", included: true },
          { text: "Utility Coordination: Height exceeding 15 feet 6 inches", included: true }
        ]}
      />

      <SectionHeading id="industry-partnerships">Construction Industry Partnerships</SectionHeading>
      
      <p>
        Heavy Haulers maintains strategic partnerships with major construction companies throughout the Bay Area, providing dedicated transport services for ongoing projects and emergency equipment moves. These partnerships ensure reliable service when construction schedules are critical.
      </p>

      <TwoColumnGrid
        leftTitle="Partnership Benefits"
        leftItems={[
          "Priority scheduling for equipment moves",
          "Dedicated account management",
          "Volume pricing agreements",
          "Emergency response protocols"
        ]}
        rightTitle="Project Support Services"
        rightItems={[
          "Multi-piece equipment coordination",
          "Site logistics planning",
          "Staging area management",
          "After-hours delivery scheduling"
        ]}
      />

      <CalloutBox type="tip" title="Construction Fleet Programs">
        Contact us about our construction industry partnership programs for priority scheduling, volume pricing, and dedicated account management for your equipment transport needs.
      </CalloutBox>
    </BlogPostTemplate>
  );
};

export default ConstructionEquipmentHauling;
