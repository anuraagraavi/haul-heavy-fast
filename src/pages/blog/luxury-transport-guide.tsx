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
import luxuryTransportImage from "@/assets/blog-luxury-transport.jpg";
import lightDutyService from "@/assets/light-duty-service.jpg";

const blogData: BlogPostData = {
  slug: "luxury-transport-guide",
  title: "Luxury Vehicle Transport: White-Glove Service for Premium Cars",
  metaTitle: "Luxury Vehicle Transport SF | White-Glove Towing Bay Area",
  metaDescription: "Premium luxury vehicle transport and exotic car towing in San Francisco. Specialized handling, soft-tie systems, white-glove service. Call (650) 881-2400.",
  canonicalUrl: "https://heavytowpro.com/blog/luxury-transport-guide",
  primaryKeyword: "luxury vehicle transport",
  secondaryKeywords: ["exotic car towing Bay Area", "white glove towing services", "Ferrari towing SF", "Lamborghini transport"],
  category: "Specialty Services",
  
  author: "Heavy Haulers Team",
  publishDate: "2025-09-16",
  dateModified: "2025-09-16",
  readTime: "7 min",
  excerpt: "Premium luxury vehicle transport with specialized handling and white-glove service for high-value automobiles.",
  
  heroImage: {
    src: luxuryTransportImage,
    alt: "Luxury vehicle being transported on specialized flatbed with white-glove handling",
    caption: "White-glove luxury vehicle transport service"
  },
  
  atAGlance: {
    bestUseCase: "Exotic cars, luxury vehicles, classic cars, and high-value automobiles requiring specialized care",
    responseWorkflow: "Pre-inspection → Protective preparation → Specialized loading → Climate-controlled transport",
    safetyNote: "Soft-tie systems and enclosed trailers prevent any damage to high-value vehicles",
    dispatchNeeds: "Vehicle make/model, value, condition, pickup/delivery locations, special requirements",
    relatedServiceLink: { text: "Light-Duty Specialty Towing", href: "/services/light-duty" }
  },
  
  tableOfContents: [
    { id: "understanding-luxury-transport", title: "Understanding Luxury Vehicle Transport", level: 2 },
    { id: "specialized-equipment", title: "Specialized Equipment for Premium Vehicles", level: 2 },
    { id: "white-glove-difference", title: "The White-Glove Service Difference", level: 2 },
    { id: "common-scenarios", title: "Common Luxury Vehicle Transport Scenarios", level: 2 },
    { id: "insurance-liability", title: "Insurance and Liability Considerations", level: 2 },
    { id: "preparing-your-vehicle", title: "Preparing Your Luxury Vehicle for Transport", level: 2 },
    { id: "faq", title: "Frequently Asked Questions", level: 2 }
  ],
  
  faq: [
    {
      question: "What makes luxury vehicle transport different from regular towing?",
      answer: "Luxury transport uses soft-tie systems, enclosed trailers, low-clearance specialists, and detailed documentation to protect high-value vehicles from any damage."
    },
    {
      question: "Do you offer enclosed transport for exotic cars?",
      answer: "Yes, we provide climate-controlled enclosed trailers that protect vehicles from weather, road debris, and temperature fluctuations during transport."
    },
    {
      question: "What insurance coverage do you have for high-value vehicles?",
      answer: "We maintain high-value vehicle coverage exceeding $500K, garage keeper's liability, and comprehensive transport insurance protection."
    },
    {
      question: "Can you transport vehicles with extremely low ground clearance?",
      answer: "Yes, we use ultra-low angle ramps, air-ride trailers, and custom loading platforms designed specifically for low-clearance exotic vehicles."
    },
    {
      question: "Do you document vehicle condition before transport?",
      answer: "Yes, we perform detailed photographic documentation of vehicle condition before and after transport as standard practice."
    },
    {
      question: "What types of luxury vehicles do you transport?",
      answer: "We transport all luxury and exotic vehicles including Ferrari, Lamborghini, Rolls-Royce, Bentley, McLaren, classic cars, and custom vehicles."
    }
  ],
  
  relatedPosts: ["motorcycle-towing-guide", "electric-vehicle-towing-guide", "vehicle-storage-solutions"],
  
  relatedServices: [
    { title: "Light-Duty Towing", href: "/services/light-duty", description: "Specialty vehicle transport" },
    { title: "Medium-Duty Towing", href: "/services/medium-duty", description: "Larger vehicle transport" },
    { title: "Heavy-Duty Towing", href: "/services/heavy-duty", description: "Commercial vehicle services" },
    { title: "All Services", href: "/services", description: "Complete service offerings" }
  ],
  
  serviceAreas: [
    { name: "San Francisco", href: "/locations/san-francisco" },
    { name: "Oakland", href: "/locations/oakland" },
    { name: "Palo Alto", href: "/locations/palo-alto" },
    { name: "Atherton", href: "/locations/atherton" },
    { name: "Los Altos", href: "/locations/los-altos" },
    { name: "Hillsborough", href: "/locations/hillsborough" }
  ]
};

const LuxuryTransportGuide = () => {
  return (
    <BlogPostTemplate data={blogData}>
      <IntroText>
        Luxury and exotic vehicles represent significant investments that require specialized care during transport. Whether you own a classic Ferrari, a modern Lamborghini, or a vintage Rolls-Royce, these high-value vehicles demand more than standard towing services. They require white-glove treatment from operators who understand the unique requirements of premium automobiles.
      </IntroText>

      <SectionHeading id="understanding-luxury-transport">Understanding Luxury Vehicle Transport</SectionHeading>
      
      <p>
        Luxury vehicle transport goes beyond simple towing—it's about preserving the integrity, value, and pristine condition of high-end automobiles during relocation.
      </p>

      <TwoColumnGrid
        leftTitle="Exotic & Supercars"
        leftItems={[
          "Ferrari, Lamborghini, McLaren",
          "Bugatti, Koenigsegg, Pagani",
          "Aston Martin, Bentley, Maserati",
          "Limited edition hypercars",
          "Custom and modified supercars"
        ]}
        rightTitle="Luxury & Classic"
        rightItems={[
          "Rolls-Royce, Mercedes-Maybach",
          "Vintage Porsche, classic BMW",
          "Collector cars and classics",
          "High-end electric vehicles",
          "Custom luxury modifications"
        ]}
      />

      <SectionHeading id="specialized-equipment">Specialized Equipment for Premium Vehicles</SectionHeading>
      
      <p>
        Transporting luxury vehicles requires specialized equipment designed to eliminate any risk of damage during loading, transport, and unloading.
      </p>

      <IconBulletList
        items={[
          { icon: "Shield", text: "Soft-Tie Systems: Padded straps, wheel nets, and protective covers secure vehicles without metal-to-metal contact" },
          { icon: "ArrowDown", text: "Low-Clearance Specialists: Ultra-low angle ramps, air-ride trailers, and custom loading platforms for exotic cars" },
          { icon: "Thermometer", text: "Climate-Controlled Transport: Enclosed trailers maintain museum-quality conditions during transport" }
        ]}
      />

      <MidArticleCTA />

      <BlogFigure 
        image={{
          src: lightDutyService,
          alt: "Enclosed flatbed with soft-tie securing systems for luxury vehicles",
          caption: "White-glove service with specialized equipment for premium cars"
        }}
      />

      <SectionHeading id="white-glove-difference">The White-Glove Service Difference</SectionHeading>
      
      <p>
        White-glove luxury vehicle transport involves meticulous attention to detail at every stage of the process:
      </p>

      <IconBulletList
        items={[
          { icon: "Camera", text: "Pre-Transport Inspection: Detailed photographic documentation of vehicle condition before transport" },
          { icon: "Shield", text: "Protective Preparation: Application of protective covers, padding, and barriers as needed" },
          { icon: "Truck", text: "Specialized Loading: Custom loading procedures for each vehicle's specific requirements" },
          { icon: "MessageCircle", text: "Real-Time Updates: Continuous communication throughout the transport process" }
        ]}
      />

      <SectionHeading id="common-scenarios">Common Luxury Vehicle Transport Scenarios</SectionHeading>
      
      <p>
        Luxury vehicle owners typically require transport services in specific situations that demand careful handling:
      </p>

      <IconBulletList
        items={[
          { icon: "Car", text: "Dealer Delivery & Pickup: New vehicle delivery from dealerships or transport to service facilities" },
          { icon: "Star", text: "Event Transportation: Moving vehicles to car shows, racing events, or private exhibitions" },
          { icon: "Crown", text: "Collection Management: Relocating vehicles between storage facilities or private collections" },
          { icon: "Shield", text: "Emergency Situations: Breakdown recovery without risking damage to expensive vehicles" }
        ]}
      />

      <SectionHeading id="insurance-liability">Insurance and Liability Considerations</SectionHeading>
      
      <p>
        High-value vehicles require specialized insurance coverage that standard towing services may not provide:
      </p>

      <TwoColumnGrid
        leftTitle="Coverage Requirements"
        leftItems={[
          "High-value vehicle coverage ($500K+)",
          "Garage keeper's liability",
          "Loading/unloading coverage",
          "Transport insurance protection"
        ]}
        rightTitle="Documentation"
        rightItems={[
          "Detailed condition reports",
          "Photographic evidence",
          "Chain of custody records",
          "Insurance certificates"
        ]}
      />

      <SectionHeading id="preparing-your-vehicle">Preparing Your Luxury Vehicle for Transport</SectionHeading>
      
      <p>
        Proper preparation ensures your valuable vehicle receives optimal protection during transport:
      </p>

      <ChecklistBox
        title="Owner Preparation Checklist"
        items={[
          { text: "Remove all personal items", checked: true },
          { text: "Secure loose trim or modifications", checked: true },
          { text: "Disable alarm systems", checked: true },
          { text: "Check fluid levels", checked: true },
          { text: "Document existing condition", checked: true },
          { text: "Provide spare key if possible", checked: true },
          { text: "Note any special vehicle features", checked: true },
          { text: "Specify handling instructions", checked: true }
        ]}
      />

      <CalloutBox type="info" title="Schedule Luxury Vehicle Transport">
        Contact Heavy Haulers for white-glove luxury vehicle transport. We provide the specialized care your high-value vehicle deserves.
      </CalloutBox>
    </BlogPostTemplate>
  );
};

export default LuxuryTransportGuide;
