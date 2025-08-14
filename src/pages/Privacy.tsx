import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Privacy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Heavy Haulers San Francisco</title>
        <meta name="description" content="Heavy Haulers' privacy policy outlines how we collect, use, and protect your personal information when using our towing services." />
        <link rel="canonical" href="/privacy-policy" />
      </Helmet>

      <div className="min-h-screen bg-background text-foreground">
        <Header />
        
        <main className="pt-20">
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
              <p className="text-muted-foreground mb-8">
                Last updated: {new Date().toLocaleDateString()}
              </p>

              <div className="space-y-8">
                <Card className="bg-card">
                  <CardHeader>
                    <CardTitle>Information We Collect</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Personal Information</h4>
                      <p className="text-muted-foreground">
                        We collect information you provide directly to us, such as your name, phone number, 
                        email address, pickup and drop-off locations, and vehicle information when you 
                        request our towing services.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Location Information</h4>
                      <p className="text-muted-foreground">
                        To provide efficient towing services, we may collect your location information 
                        when you use our services, with your consent.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Usage Information</h4>
                      <p className="text-muted-foreground">
                        We automatically collect certain information about your use of our website, 
                        including your IP address, browser type, and pages visited.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card">
                  <CardHeader>
                    <CardTitle>How We Use Your Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>Provide, maintain, and improve our towing services</li>
                      <li>Process transactions and send related information</li>
                      <li>Send you technical notices and support messages</li>
                      <li>Respond to your comments and questions</li>
                      <li>Monitor and analyze trends and usage</li>
                      <li>Personalize and improve your experience</li>
                      <li>Comply with legal obligations</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-card">
                  <CardHeader>
                    <CardTitle>Information Sharing</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      We do not sell, trade, or otherwise transfer your personal information to third parties 
                      except in the following circumstances:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>With your consent</li>
                      <li>To comply with legal requirements</li>
                      <li>To protect our rights and safety</li>
                      <li>With trusted service providers who assist in our operations</li>
                      <li>In connection with a merger, acquisition, or sale of assets</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-card">
                  <CardHeader>
                    <CardTitle>Data Security</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      We implement appropriate technical and organizational security measures to protect 
                      your personal information against unauthorized access, alteration, disclosure, or 
                      destruction. However, no method of transmission over the internet is 100% secure.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-card">
                  <CardHeader>
                    <CardTitle>Your Rights</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">You have the right to:</p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>Access your personal information</li>
                      <li>Correct inaccurate information</li>
                      <li>Request deletion of your information</li>
                      <li>Object to processing of your information</li>
                      <li>Request data portability</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-card">
                  <CardHeader>
                    <CardTitle>Cookies and Tracking</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      We use cookies and similar tracking technologies to improve your browsing experience, 
                      analyze website traffic, and understand user preferences. You can control cookie 
                      settings through your browser preferences.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-card">
                  <CardHeader>
                    <CardTitle>Changes to This Policy</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      We may update this privacy policy from time to time. We will notify you of any 
                      changes by posting the new policy on this page and updating the "last updated" date.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-card">
                  <CardHeader>
                    <CardTitle>Contact Us</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      If you have questions about this privacy policy, please contact us:
                    </p>
                    <div className="space-y-2 text-muted-foreground">
                      <p>Heavy Haulers San Francisco</p>
                      <p>Email: privacy@heavyhaulerssf.com</p>
                      <p>Phone: (415) 555-TOWS</p>
                      <p>Address: 123 Towing Street, San Francisco, CA 94102</p>
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

export default Privacy;