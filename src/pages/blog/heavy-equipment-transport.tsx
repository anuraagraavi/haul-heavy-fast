import BlogPostTemplate, {
  IntroText,
  SectionHeading,
  IconBulletList,
  ChecklistBox,
  CalloutBox,
  TwoColumnGrid,
  MidArticleCTA,
  BlogFigure
} from '@/components/blog/BlogPostTemplate';
import type { BlogPostData } from '@/types/blog';
import heavyEquipmentImage from "@/assets/blog-heavy-equipment.jpg";
import constructionEquipment from "@/assets/blog-construction-equipment-hauling.jpg";
import heavyDutyService from "@/assets/heavy-duty-service.jpg";

const blogData: BlogPostData = {
  slug: "heavy-equipment-transport",
  title: "Heavy Equipment Transport: Moving Industrial Machinery Safely",
  metaTitle: "Heavy Equipment Transport SF | Industrial Machinery Hauling",
  metaDescription: "Professional heavy equipment transport in San Francisco Bay Area. Specialized hauling for construction equipment, machinery, and industrial vehicles. Call (650) 881-2400.",
  canonicalUrl: "https://heavytowpro.com/blog/heavy-equipment-transport",
  primaryKeyword: "heavy equipment transport",
  secondaryKeywords: ["construction equipment moving Bay Area", "machinery hauling SF", "industrial vehicle transport", "oversized load permits California"],
  category: "Heavy Equipment",
  
  author: "Heavy Haulers Team",
  publishDate: "2025-08-13",
  dateModified: "2025-08-13",
  readTime: "6 min",
  excerpt: "Professional heavy equipment transport services in San Francisco Bay Area with specialized hauling and permit expertise.",
  
  heroImage: {
    src: heavyEquipmentImage,
    alt: "Heavy equipment being transported on specialized trailer in the Bay Area",
    caption: "Specialized heavy equipment transport with proper securing and permits"
  },
  
  atAGlance: {
    bestUseCase: "Construction equipment, industrial machinery, and heavy vehicles requiring specialized transport",
    responseWorkflow: "Assessment → Weight analysis → Route planning → Secure loading → Safe transport",
    safetyNote: "Heavy equipment requires proper weight distribution and specialized securement",
    dispatchNeeds: "Equipment type, dimensions, weight, pickup/delivery locations",
    relatedServiceLink: { text: "Heavy-Duty Towing", href: "/services/heavy-duty" }
  },
  
  tableOfContents: [
    { id: "types-of-equipment", title: "Types of Heavy Equipment We Transport", level: 2 },
    { id: "specialized-requirements", title: "Specialized Transport Requirements", level: 2 },
    { id: "permits-compliance", title: "Permits and Legal Compliance", level: 2 },
    { id: "safety-considerations", title: "Safety Considerations", level: 2 },
    { id: "cost-factors", title: "Cost Factors in Heavy Equipment Transport", level: 2 },
    { id: "preparing-equipment", title: "Preparing Equipment for Transport", level: 2 },
    { id: "faq", title: "Frequently Asked Questions", level: 2 }
  ],
  
  faq: [
    {
      question: "What types of heavy equipment can you transport?",
      answer: "We transport all types including excavators, bulldozers, cranes, boom lifts, concrete mixers, manufacturing equipment, forklifts, generators, and agricultural machinery."
    },
    {
      question: "Do you handle all permit requirements?",
      answer: "Yes, we manage the complete permit process including oversize/overweight permits, route analysis, and escort vehicle coordination."
    },
    {
      question: "How should I prepare equipment for transport?",
      answer: "Clean equipment of debris, secure loose parts, document existing damage, drain fluids if required, and verify equipment dimensions and weight."
    },
    {
      question: "What factors affect heavy equipment transport costs?",
      answer: "Costs depend on equipment weight and dimensions, distance and route complexity, permit requirements, and loading/unloading complexity."
    },
    {
      question: "How do you ensure equipment safety during transport?",
      answer: "We use proper weight distribution, certified chains and straps, multiple tie-down points, and specialized trailers rated for the specific load."
    },
    {
      question: "Can you transport equipment across state lines?",
      answer: "Yes, we handle interstate transport with all required permits and compliance documentation for multi-state moves."
    }
  ],
  
  relatedPosts: ["construction-equipment-hauling", "commercial-truck-towing-interstate", "fleet-management-towing"],
  
  relatedServices: [
    { title: "Heavy-Duty Towing", href: "/services/heavy-duty", description: "Professional heavy equipment hauling" },
    { title: "Medium-Duty Towing", href: "/services/medium-duty", description: "Medium equipment transport" },
    { title: "Light-Duty Towing", href: "/services/light-duty", description: "Light equipment moving" },
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

const HeavyEquipmentTransport = () => {
  return (
    <BlogPostTemplate data={blogData}>
      <IntroText>
        Moving heavy construction equipment and industrial machinery requires specialized knowledge, equipment, and expertise that goes far beyond standard vehicle towing. Whether you're a contractor relocating equipment between job sites or a business owner moving industrial machinery, understanding the complexities of heavy equipment transport is crucial.
      </IntroText>

      <SectionHeading id="types-of-equipment">Types of Heavy Equipment We Transport</SectionHeading>
      
      <p>
        Heavy equipment transport covers a wide range of industrial and construction machinery, each with unique handling requirements:
      </p>

      <TwoColumnGrid
        leftTitle="Construction Equipment"
        leftItems={[
          "Excavators and backhoes",
          "Bulldozers and scrapers",
          "Cranes and boom lifts",
          "Concrete mixers and pumps",
          "Compactors and pavers"
        ]}
        rightTitle="Industrial Machinery"
        rightItems={[
          "Manufacturing equipment",
          "Forklifts and warehouse equipment",
          "Generator sets and power equipment",
          "Agricultural machinery",
          "Specialized processing equipment"
        ]}
      />

      <SectionHeading id="specialized-requirements">Specialized Transport Requirements</SectionHeading>
      
      <p>
        Heavy equipment transport isn't just about moving large items—it requires careful planning and specialized equipment to ensure safe, legal, and efficient transport:
      </p>

      <IconBulletList
        items={[
          { icon: "Scale", text: "Weight Distribution Analysis: Proper weight distribution is critical for safe transport and compliance with regulations" },
          { icon: "Link", text: "Specialized Securement: Heavy equipment requires specific tie-down points, chain grades, and securement patterns" },
          { icon: "Map", text: "Route Planning: Bay Area infrastructure requires careful analysis of bridge weight limits, height restrictions, and turn radiuses" }
        ]}
      />

      <MidArticleCTA />

      <BlogFigure 
        image={{
          src: constructionEquipment,
          alt: "Specialized lowboy trailer loaded with heavy construction equipment",
          caption: "Professional equipment securement for safe transport"
        }}
      />

      <SectionHeading id="permits-compliance">Permits and Legal Compliance</SectionHeading>
      
      <p>
        Moving heavy equipment often requires special permits and strict adherence to transportation regulations:
      </p>

      <IconBulletList
        items={[
          { icon: "FileText", text: "Oversize/Overweight Permits: Required for loads exceeding standard weight or dimension limits" },
          { icon: "Car", text: "Escort Vehicle Requirements: Pilot cars may be required for extremely wide or long loads" },
          { icon: "Clock", text: "Time-of-Travel Restrictions: Certain routes and times may be restricted for oversized loads" }
        ]}
      />

      <SectionHeading id="safety-considerations">Safety Considerations</SectionHeading>
      
      <p>
        Heavy equipment transport presents unique safety challenges that require specialized protocols and equipment:
      </p>

      <TwoColumnGrid
        leftTitle="Equipment Safety"
        leftItems={[
          "Hydraulic system depressurization",
          "Fuel system preparation",
          "Battery disconnection protocols",
          "Attachment point verification"
        ]}
        rightTitle="Transport Safety"
        rightItems={[
          "Load securement verification",
          "Proper lighting and flagging",
          "Height clearance monitoring",
          "Emergency response planning"
        ]}
      />

      <SectionHeading id="cost-factors">Cost Factors in Heavy Equipment Transport</SectionHeading>
      
      <p>
        Understanding the factors that influence heavy equipment transport costs helps you budget appropriately and make informed decisions:
      </p>

      <IconBulletList
        items={[
          { icon: "Weight", text: "Equipment Weight and Dimensions: Heavier and larger equipment requires specialized trailers and may need permits" },
          { icon: "Route", text: "Distance and Route Complexity: Longer distances and complex routes with restrictions increase costs" },
          { icon: "FileText", text: "Permit Requirements: Oversize/overweight permits and escort vehicles add to the total cost" },
          { icon: "Truck", text: "Loading/Unloading Complexity: Difficult access or special requirements affect pricing" }
        ]}
      />

      <SectionHeading id="preparing-equipment">Preparing Equipment for Transport</SectionHeading>
      
      <p>
        Proper preparation ensures safe transport and prevents damage to your valuable equipment:
      </p>

      <ChecklistBox
        title="Owner Preparation Checklist"
        items={[
          { text: "Clean equipment of debris and fluids", checked: true },
          { text: "Secure loose parts and attachments", checked: true },
          { text: "Document existing damage with photos", checked: true },
          { text: "Provide operation manuals if needed", checked: true },
          { text: "Drain fluids if required", checked: true },
          { text: "Remove or secure glass and mirrors", checked: true },
          { text: "Verify equipment dimensions and weight", checked: true },
          { text: "Coordinate access at pickup/delivery", checked: true }
        ]}
      />

      <CalloutBox type="info" title="Request Equipment Transport Quote">
        Contact Heavy Haulers for a detailed quote on your heavy equipment transport needs. We handle all permits, route planning, and specialized transport requirements.
      </CalloutBox>
    </BlogPostTemplate>
  );
};

export default HeavyEquipmentTransport;
