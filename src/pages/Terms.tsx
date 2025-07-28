import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background font-lato">
      <Navigation />
      
      <div className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-montserrat font-bold text-4xl text-foreground mb-8">
            Terms of Service
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="font-lato text-muted-foreground mb-6">
              Last updated: {new Date().getFullYear()}
            </p>
            
            <div className="space-y-8">
              <section>
                <h2 className="font-montserrat font-semibold text-2xl text-foreground mb-4">
                  Acceptance of Terms
                </h2>
                <p className="font-lato text-muted-foreground">
                  By accessing and using our services, you accept and agree to be bound by the terms 
                  and provision of this agreement.
                </p>
              </section>

              <section>
                <h2 className="font-montserrat font-semibold text-2xl text-foreground mb-4">
                  Services
                </h2>
                <p className="font-lato text-muted-foreground">
                  Uma Consultancy provides business consulting services in the automotive industry, 
                  including but not limited to manpower solutions, data analytics, business strategy, 
                  and operational excellence consulting.
                </p>
              </section>

              <section>
                <h2 className="font-montserrat font-semibold text-2xl text-foreground mb-4">
                  Contact Information
                </h2>
                <p className="font-lato text-muted-foreground">
                  For questions about these Terms of Service, please contact us at 
                  info@umaconsultancy.co or call +91 94913 98821.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Terms;