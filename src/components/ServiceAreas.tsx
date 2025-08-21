import { Button } from "@/components/ui/button";
import { MapPin, Phone } from "lucide-react";
import bayAreaCoverage from "@/assets/bay-area-coverage.jpg";
const ServiceAreas = () => {
  const counties = [{
    name: "San Francisco County",
    areas: ["Mission", "SOMA", "Financial District", "Richmond", "Pacific Heights", "Sunset"],
    phone: "650-881-2400"
  }, {
    name: "San Mateo County",
    areas: ["San Mateo", "Redwood City", "Daly City", "South San Francisco", "Menlo Park"],
    phone: "650-881-2400"
  }, {
    name: "Alameda County",
    areas: ["Oakland", "Hayward", "Berkeley", "Fremont", "San Leandro"],
    phone: "650-881-2400"
  }, {
    name: "Santa Clara County",
    areas: ["San Jose", "Santa Clara", "Sunnyvale", "Mountain View", "Palo Alto"],
    phone: "650-881-2400"
  }];
  return <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Serving the Entire
            <span className="bg-gradient-primary bg-clip-text text-transparent ml-2">
              Bay Area
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
            24/7 emergency towing and recovery services across 4 counties. 
            Local dispatch means faster response times for you.
          </p>

          {/* Banner Image */}
          <div className="relative mb-16 rounded-2xl overflow-hidden shadow-elevated">
            <img src={bayAreaCoverage} alt="Heavy Haulers Bay Area Service Coverage Map" className="w-full h-64 md:h-80 object-cover" />
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
              
            </div>
          </div>
        </div>

        {/* Counties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {counties.map((county, index) => <div key={index} className="bg-card border border-border rounded-lg p-6 hover:shadow-elevated transition-all duration-300 group flex flex-col h-full">
              <div className="flex items-center space-x-2 mb-4">
                <MapPin className="w-5 h-5 text-primary" />
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  {county.name}
                </h3>
              </div>
              
              <div className="space-y-2 mb-4 flex-grow">
                {county.areas.map((area, areaIndex) => <span key={areaIndex} className="inline-block text-sm text-muted-foreground bg-muted rounded-full px-3 py-1 mr-2 mb-1">
                    {area}
                  </span>)}
              </div>

              <Button variant="outline" size="sm" className="w-full mt-auto" onClick={() => window.location.href = `tel:${county.phone}`}>
                <Phone className="w-4 h-4 mr-2" />
                {county.phone}
              </Button>
            </div>)}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-card border border-border rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Not sure if we serve your area?
          </h3>
          <p className="text-muted-foreground mb-6">
            We're constantly expanding our coverage. Give us a call and we'll let you know if we can help.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button variant='hero' size='lg' asChild>
              <a href='tel:650-881-2400'>
                <Phone className='w-5 h-5 mr-2' />
                Call 650-881-2400
              </a>
            </Button>
            <Button variant="outline" size="lg" onClick={() => window.location.href = '/locations'}>
              View Full Coverage Map
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default ServiceAreas;