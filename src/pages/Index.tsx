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
      <Header />
      <main>
        <Hero />
        <ServicesOverview />
        <WhyChooseUs />
        <ServiceAreas />
        <Testimonials />
        <FAQ />
        <CorporateFleet />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
