import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Terms = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service | Heavy Haulers San Francisco</title>
        <meta name="description" content="Terms of service for Heavy Haulers towing company. Review our service agreements, policies, and customer obligations." />
        <link rel="canonical" href="/terms" />
      </Helmet>

      <div className="min-h-screen bg-background text-foreground">
        <Header />
        
        <main className="pt-20">
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl font-bold mb-6">Terms of Service</h1>
              <p className="text-muted-foreground mb-8">
                Last updated: {new Date().toLocaleDateString()}
              </p>

              <div className="space-y-8">
                <Card className="bg-card">
                  <CardHeader>
                    <CardTitle>Acceptance of Terms</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      By using Heavy Haulers' services, you agree to be bound by these terms of service. 
                      If you do not agree to these terms, please do not use our services.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-card">
                  <CardHeader>
                    <CardTitle>Service Description</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      Heavy Haulers provides professional towing and recovery services including:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>Light-duty vehicle towing (cars, motorcycles, small trucks)</li>
                      <li>Medium-duty towing (vans, box trucks, small RVs)</li>
                      <li>Heavy-duty hauling (semi-trucks, buses, heavy equipment)</li>
                      <li>Emergency recovery services</li>
                      <li>Private property vehicle removal</li>
                      <li>Fleet and commercial accounts</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-card">
                  <CardHeader>
                    <CardTitle>Payment Terms</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Payment Due</h4>
                      <p className="text-muted-foreground">
                        Payment is due upon completion of services unless other arrangements have been 
                        made in advance for commercial accounts.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Accepted Payment Methods</h4>
                      <p className="text-muted-foreground">
                        We accept cash, credit cards, and pre-approved commercial accounts.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Pricing</h4>
                      <p className="text-muted-foreground">
                        Pricing is based on distance, vehicle type, time of day, and complexity of the job. 
                        Quotes are estimates and final pricing may vary based on actual conditions.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card">
                  <CardHeader>
                    <CardTitle>Customer Obligations</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>Provide accurate information about your vehicle and location</li>
                      <li>Be present or designate an authorized representative</li>
                      <li>Remove personal belongings from the vehicle before towing</li>
                      <li>Ensure you have legal authority to authorize the tow</li>
                      <li>Pay for services upon completion</li>
                      <li>Comply with all applicable laws and regulations</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-card">
                  <CardHeader>
                    <CardTitle>Liability and Insurance</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Our Liability</h4>
                      <p className="text-muted-foreground">
                        Heavy Haulers maintains comprehensive insurance coverage. Our liability is limited 
                        to the extent provided by our insurance policies and applicable law.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Customer Responsibility</h4>
                      <p className="text-muted-foreground">
                        Customers are responsible for removing valuable personal items before towing. 
                        Heavy Haulers is not responsible for theft or damage to personal property left in vehicles.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card">
                  <CardHeader>
                    <CardTitle>Cancellation Policy</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      Services may be cancelled without charge if cancelled before our truck is dispatched. 
                      Cancellations after dispatch may be subject to a cancellation fee to cover costs incurred.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-card">
                  <CardHeader>
                    <CardTitle>Storage and Lien Rights</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      If payment is not received, Heavy Haulers may exercise lien rights under California law. 
                      Storage fees may apply for vehicles held pending payment or legal resolution.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-card">
                  <CardHeader>
                    <CardTitle>Dispute Resolution</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      Any disputes shall be resolved through binding arbitration in San Francisco County, 
                      California, in accordance with the rules of the American Arbitration Association.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-card">
                  <CardHeader>
                    <CardTitle>Limitation of Liability</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      In no event shall Heavy Haulers be liable for indirect, incidental, special, or 
                      consequential damages. Our total liability shall not exceed the amount paid for services.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-card">
                  <CardHeader>
                    <CardTitle>Governing Law</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      These terms shall be governed by and construed in accordance with the laws of 
                      the State of California.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-card">
                  <CardHeader>
                    <CardTitle>Changes to Terms</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Heavy Haulers reserves the right to modify these terms at any time. Changes will 
                      be effective immediately upon posting on our website.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-card">
                  <CardHeader>
                    <CardTitle>Contact Information</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      For questions about these terms of service, contact us:
                    </p>
                    <div className="space-y-2 text-muted-foreground">
                      <p>Heavy Haulers San Francisco</p>
                      <p>Email: legal@heavyhaulerssf.com</p>
                      <p>Phone: 650-881-2400</p>
                      <p>Address: 400 Tunnel Ave, Brisbane, CA 94005</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Terms;