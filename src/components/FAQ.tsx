import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How quickly can you respond to emergency calls?",
      answer: "We typically respond within 15-30 minutes in our primary service areas. Emergency situations receive priority dispatch, and our 24/7 dispatch team is always standing by to help."
    },
    {
      question: "What types of vehicles can you tow?",
      answer: "We handle everything from motorcycles and cars to semi-trucks and heavy equipment. Our fleet includes light-duty, medium-duty, and heavy-duty tow trucks with rotator capabilities for complex recovery operations."
    },
    {
      question: "Do you provide transparent pricing?",
      answer: "Absolutely. We provide upfront, honest pricing with no hidden fees. You'll know the cost before we begin any work, and we stand behind our transparent pricing policy."
    },
    {
      question: "Which areas do you serve?",
      answer: "We serve all of San Francisco, San Mateo, Alameda, and Santa Clara counties. This includes major cities like San Francisco, Oakland, San Jose, and hundreds of smaller communities throughout the Bay Area."
    },
    {
      question: "Do you offer fleet services for businesses?",
      answer: "Yes, we provide comprehensive fleet contracts with priority dispatch, volume pricing, and dedicated account management. Our B2B solutions include service level agreements tailored to your business needs."
    },
    {
      question: "Are you available 24/7?",
      answer: "Yes, our emergency dispatch operates 24/7, 365 days a year. Whether it's 3 AM or a holiday, we're here when you need us most."
    },
    {
      question: "Do you handle luxury and exotic vehicles?",
      answer: "Absolutely. We specialize in high-value vehicle transport with soft-tie systems, specialized equipment for low-clearance vehicles, and operators trained in luxury car handling."
    },
    {
      question: "What should I do while waiting for the tow truck?",
      answer: "Stay safe and visible. If possible, move your vehicle to the shoulder, turn on hazard lights, and exit on the side away from traffic. Stay in a safe location and keep your phone charged to communicate with our dispatch team."
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Frequently Asked
              <span className="bg-gradient-primary bg-clip-text text-transparent ml-2">
                Questions
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Quick answers to common questions about our towing services.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-card border border-border rounded-lg overflow-hidden"
              >
                <button
                  className="w-full text-left p-6 hover:bg-muted/20 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-foreground pr-4">
                      {faq.question}
                    </h3>
                    {openIndex === index ? (
                      <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                    )}
                  </div>
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;