import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import ServiceAreas from "@/components/ServiceAreas";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <WhyChooseUs />
        <ServiceAreas />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
