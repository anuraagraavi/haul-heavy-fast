import BlogPostTemplate, {
  IntroText,
  SectionHeading,
  IconBulletList,
  ChecklistBox,
  CalloutBox,
  ComparisonTable,
  StepProcess,
  MidArticleCTA,
  BlogFigure,
  DispatchInfoBox
} from '@/components/blog/BlogPostTemplate';
import type { BlogPostData } from '@/types/blog';
import commercialRecoveryImage from "@/assets/blog-commercial-recovery.jpg";
import heavyDutyService from "@/assets/heavy-duty-service.jpg";

const blogData: BlogPostData = {
  slug: "california-private-property-towing",
  title: "California Private Property Towing Rules: A Guide for Property Managers and HOAs",
  metaTitle: "California Vehicle Code 22658: Private Property Towing Rules Guide",
  metaDescription: "Complete guide to California Vehicle Code 22658 for property managers and HOAs. Learn signage requirements, authorization workflows, and avoid liability with compliant towing.",
  canonicalUrl: "https://heavytowpro.com/blog/california-private-property-towing",
  primaryKeyword: "California Vehicle Code 22658",
  secondaryKeywords: ["private property towing California", "tow away sign requirements California", "HOA towing policy", "apartment complex towing rules", "written authorization tow", "notice to law enforcement"],
  category: "Commercial",
  
  author: "Heavy Haulers Team",
  publishDate: "2025-10-10",
  dateModified: "2025-10-10",
  readTime: "10 min",
  excerpt: "California Vehicle Code 22658 governs private property towing. Learn the signage, authorization, and notification requirements to stay compliant and avoid liability.",
  
  heroImage: {
    src: commercialRecoveryImage,
    alt: "Private property towing signage and commercial tow truck at apartment complex",
    caption: "Compliant private property towing protects property owners from liability"
  },
  
  atAGlance: {
    bestUseCase: "Property managers, HOA boards, and apartment complex owners managing unauthorized vehicle towing",
    responseWorkflow: "Verify signage → Confirm violation → Written authorization → Tow company executes → Notify law enforcement",
    safetyNote: "Non-compliant tows can result in liability for property owners and tow companies",
    dispatchNeeds: "Property address, written authorization, violation type, vehicle description, contact info",
    relatedServiceLink: { text: "Commercial Towing Services", href: "/services/medium-duty" }
  },
  
  tableOfContents: [
    { id: "what-22658-covers", title: "What CVC 22658 Covers", level: 2 },
    { id: "when-tow-allowed", title: "When a Tow Is Allowed", level: 2 },
    { id: "signage-requirements", title: "Signage Requirements Checklist", level: 2 },
    { id: "authorization-workflow", title: "Authorization Workflow", level: 2 },
    { id: "notification-requirements", title: "Required Notifications", level: 2 },
    { id: "record-keeping", title: "Record Keeping Best Practices", level: 2 },
    { id: "common-mistakes", title: "Common Mistakes That Create Liability", level: 2 },
    { id: "faq", title: "Frequently Asked Questions", level: 2 }
  ],
  
  faq: [
    {
      question: "Do I need tow away signs to tow from private property in CA?",
      answer: "Yes. California Vehicle Code 22658 requires properly formatted tow-away zone signs to be posted conspicuously at each entrance. Signs must include specific information like tow company name, phone number, and notice that vehicles may be towed at owner's expense."
    },
    {
      question: "Who is allowed to authorize a tow from private property?",
      answer: "Only the property owner or their authorized agent (property manager, HOA representative, etc.) can authorize a tow. Written authorization is required before the tow company removes the vehicle."
    },
    {
      question: "How long do I have to wait before towing a vehicle?",
      answer: "This varies by situation. For vehicles clearly in violation (blocking access, in fire lanes), immediate towing may be allowed. For general parking violations in posted areas, consult CVC 22658 and your local ordinances for timing requirements."
    },
    {
      question: "Do I have to notify law enforcement after towing?",
      answer: "Yes. The tow company is required to notify local law enforcement within a specified timeframe after removing a vehicle. This is typically within one hour of the tow. The property owner should confirm the tow company handles this notification."
    },
    {
      question: "What records should I keep and for how long?",
      answer: "Keep photos of the violation, signed authorization forms, and copies of any communications for at least 3 years. Many property managers keep records longer for liability protection. Digital timestamped photos are highly recommended."
    },
    {
      question: "What's the safest towing policy for an HOA?",
      answer: "A compliant HOA towing policy includes: proper signage at all entrances, clear parking rules distributed to residents, a documented authorization process, a reputable towing partner who understands CVC 22658, and consistent enforcement."
    }
  ],
  
  relatedPosts: ["car-towed-san-francisco", "fleet-management-towing", "commercial-vehicle-urban-recovery"],
  
  relatedServices: [
    { title: "Commercial Towing", href: "/services/medium-duty", description: "Property management towing contracts" },
    { title: "Heavy-Duty Towing", href: "/services/heavy-duty", description: "Large vehicle and equipment removal" },
    { title: "24/7 Emergency Response", href: "/services", description: "Round-the-clock towing services" }
  ],
  
  serviceAreas: [
    { name: "San Francisco", href: "/locations#san-francisco" },
    { name: "Oakland", href: "/locations#oakland" },
    { name: "San Jose", href: "/locations#san-jose" },
    { name: "San Mateo", href: "/locations#san-mateo" },
    { name: "Fremont", href: "/locations#fremont" },
    { name: "Hayward", href: "/locations#hayward" }
  ]
};

const CaliforniaPrivatePropertyTowing = () => {
  return (
    <BlogPostTemplate data={blogData}>
      <IntroText>
        California Vehicle Code 22658 is the primary law governing when and how vehicles can be towed from private property. For property managers and HOAs, understanding these rules isn't optional—it's essential for avoiding liability and ensuring lawful enforcement.
      </IntroText>

      <SectionHeading id="what-22658-covers">What CVC 22658 Covers: Plain English Summary</SectionHeading>

      <p className="mb-4">
        CVC 22658 establishes the legal framework for removing unauthorized vehicles from private property. The law covers:
      </p>

      <IconBulletList
        items={[
          { icon: "check", text: "When property owners can have vehicles towed without owner consent" },
          { icon: "check", text: "Required signage specifications and placement" },
          { icon: "check", text: "Authorization procedures between property owners and tow companies" },
          { icon: "check", text: "Notification requirements to law enforcement" },
          { icon: "check", text: "Vehicle owner rights and fee limitations" }
        ]}
      />

      <CalloutBox type="legal" title="Official Source">
        California Vehicle Code Section 22658 is available at leginfo.legislature.ca.gov. Always reference the current official text for specific legal requirements, as laws may be updated.
      </CalloutBox>

      <SectionHeading id="when-tow-allowed">When a Tow Is Allowed: Common Legal Scenarios</SectionHeading>

      <p className="mb-4">
        Private property towing is permitted in specific situations. The most common include:
      </p>

      <ChecklistBox
        title="Common Tow-Eligible Situations"
        items={[
          { text: "Vehicle parked in a clearly marked tow-away zone", checked: true },
          { text: "Vehicle blocking access to property or driveways", checked: true },
          { text: "Vehicle parked in fire lane or emergency access area", checked: true },
          { text: "Vehicle parked in handicap spot without proper placard", checked: true },
          { text: "Vehicle parked in reserved/assigned spot without authorization", checked: true },
          { text: "Abandoned vehicle (additional procedures may apply)", checked: true }
        ]}
      />

      <MidArticleCTA />

      <BlogFigure 
        image={{
          src: heavyDutyService,
          alt: "Professional tow truck at commercial property following proper towing procedures",
          caption: "Compliant towing protects property owners and ensures legal enforcement"
        }}
      />

      <SectionHeading id="signage-requirements">Signage Requirements Checklist: What the Sign Must Include</SectionHeading>

      <p className="mb-4">
        Proper signage is the foundation of compliant private property towing. CVC 22658 specifies what your tow-away zone signs must include:
      </p>

      <ChecklistBox
        title="Required Sign Elements"
        items={[
          { text: "Clear statement that unauthorized vehicles will be towed at owner's expense", checked: true },
          { text: "Name and phone number of tow company", checked: true },
          { text: "Address where towed vehicles are stored", checked: true },
          { text: "Minimum letter height requirements (typically 1 inch for important text)", checked: true },
          { text: "Sign must be clearly visible at each entrance to the property", checked: true }
        ]}
      />

      <CalloutBox type="warning" title="Signage Mistakes to Avoid">
        <ul className="list-disc pl-4 space-y-1">
          <li>Signs hidden behind vegetation or structures</li>
          <li>Faded or illegible text</li>
          <li>Missing required information (tow company phone, storage address)</li>
          <li>Signs not posted at all entrances</li>
        </ul>
      </CalloutBox>

      <SectionHeading id="authorization-workflow">Authorization Workflow: Who Can Authorize and What Must Be Recorded</SectionHeading>

      <p className="mb-4">
        Before a tow company can remove a vehicle, proper authorization must be in place:
      </p>

      <StepProcess
        steps={[
          { step: 1, title: "Identify the Violation", description: "Property owner or agent confirms the vehicle is in violation of posted rules." },
          { step: 2, title: "Document the Situation", description: "Take timestamped photos showing the violation, signage, and vehicle details." },
          { step: 3, title: "Provide Written Authorization", description: "Sign authorization form with date, time, violation type, and vehicle description." },
          { step: 4, title: "Contact Tow Company", description: "Call your contracted tow company with authorization details." },
          { step: 5, title: "Tow Company Executes", description: "Tow company removes vehicle and handles law enforcement notification." }
        ]}
      />

      <DispatchInfoBox
        title="What the Tow Company Needs"
        items={[
          "Property address and specific location of vehicle",
          "Signed written authorization (digital signature often acceptable)",
          "Type of violation (fire lane, reserved spot, etc.)",
          "Vehicle make, model, color, and license plate",
          "Contact information for authorizing party"
        ]}
      />

      <SectionHeading id="notification-requirements">Required Notifications: Owner/Agent and Tow Operator Timing</SectionHeading>

      <p className="mb-4">
        CVC 22658 includes specific notification requirements:
      </p>

      <ComparisonTable
        headers={["Notification Type", "Responsible Party", "Timing"]}
        rows={[
          { feature: "Law Enforcement", option1: "Tow Company", option2: "Within 1 hour of tow" },
          { feature: "Vehicle Owner Inquiry", option1: "Tow Company", option2: "24/7 access to information" },
          { feature: "Storage Location Details", option1: "Tow Company", option2: "Available immediately" }
        ]}
      />

      <CalloutBox type="tip" title="For Property Managers">
        Always confirm with your tow company that they will handle law enforcement notification. Get this in writing as part of your service agreement.
      </CalloutBox>

      <SectionHeading id="record-keeping">Record Keeping: Photos, Authorization, Retention</SectionHeading>

      <p className="mb-4">
        Good documentation protects you from disputes and potential lawsuits. Here's what to maintain:
      </p>

      <ChecklistBox
        title="Documentation Checklist"
        items={[
          { text: "Timestamped photos of violation and posted signage", checked: true },
          { text: "Signed authorization form with date, time, authorizer name", checked: true },
          { text: "Copy of tow company receipt or work order", checked: true },
          { text: "Record of law enforcement notification confirmation", checked: true },
          { text: "Any correspondence with vehicle owner", checked: true }
        ]}
      />

      <IconBulletList
        items={[
          { icon: "tip", text: "Keep records for minimum 3 years - many properties keep 5+ years" },
          { icon: "tip", text: "Use digital timestamped photos stored in cloud backup" },
          { icon: "tip", text: "Create a standardized form for all tow authorizations" },
          { icon: "info", text: "Consider property management software with towing documentation features" }
        ]}
      />

      <MidArticleCTA />

      <SectionHeading id="common-mistakes">Common Mistakes That Create Liability</SectionHeading>

      <p className="mb-4">
        Property owners and managers can face significant liability from improper towing. Avoid these common mistakes:
      </p>

      <IconBulletList
        items={[
          { icon: "warning", text: "Towing without proper signage at all entrances" },
          { icon: "warning", text: "Failing to get written authorization before tow" },
          { icon: "warning", text: "Using a tow company that doesn't comply with CVC 22658" },
          { icon: "warning", text: "Inconsistent enforcement (selective towing can appear discriminatory)" },
          { icon: "warning", text: "Not keeping documentation of the violation" },
          { icon: "warning", text: "Towing vehicles too quickly without proper waiting periods where required" }
        ]}
      />

      <CalloutBox type="legal" title="Liability Protection">
        The best protection is a comprehensive towing policy reviewed by legal counsel, proper signage, documented procedures, and a reputable tow company that understands California law.
      </CalloutBox>

      <CalloutBox type="info" title="Need a Compliant Towing Partner?">
        Heavy Haulers provides professional towing services for property managers and HOAs throughout the Bay Area. We understand CVC 22658 and ensure compliant procedures. Call (650) 881-2400 for partnership inquiries.
      </CalloutBox>
    </BlogPostTemplate>
  );
};

export default CaliforniaPrivatePropertyTowing;