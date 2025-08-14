import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import ServicesOverview from "@/components/ServicesOverview";
import ServiceAreas from "@/components/ServiceAreas";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CorporateFleet from "@/components/CorporateFleet";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Heavy Haulers San Francisco - Professional Towing & Recovery Services</title>
        <meta name="description" content="Professional towing services in San Francisco Bay Area. 24/7 light, medium & heavy-duty towing, flatbed service, motorcycle transport. Fast response, transparent pricing." />
        <link rel="canonical" href="https://heavytowpro.com/" />
      </Helmet>
      <Header />
      <main>
        <div className="animate-fade-in">
          <Hero />
        </div>
        <div className="animate-fade-in-up">
          <ServicesOverview />
        </div>
        <div className="animate-scale-in">
          <WhyChooseUs />
        </div>
        <div className="animate-slide-in-right">
          <ServiceAreas />
        </div>
        <div className="animate-fade-in-up">
          <Testimonials />
        </div>
        <div className="animate-scale-in">
          <FAQ />
        </div>
        <div className="animate-fade-in-down">
          <CorporateFleet />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
