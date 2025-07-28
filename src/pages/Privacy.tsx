import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background font-lato">
      <Navigation />
      
      <div className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-montserrat font-bold text-4xl text-foreground mb-8">
            Privacy Policy
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="font-lato text-muted-foreground mb-6">
              Last updated: {new Date().getFullYear()}
            </p>
            
            <div className="space-y-8">
              <section>
                <h2 className="font-montserrat font-semibold text-2xl text-foreground mb-4">
                  Information We Collect
                </h2>
                <p className="font-lato text-muted-foreground">
                  We collect information you provide directly to us, such as when you create an account, 
                  contact us, or use our services. This may include your name, email address, phone number, 
                  company information, and any other information you choose to provide.
                </p>
              </section>

              <section>
                <h2 className="font-montserrat font-semibold text-2xl text-foreground mb-4">
                  How We Use Your Information
                </h2>
                <p className="font-lato text-muted-foreground">
                  We use the information we collect to provide, maintain, and improve our services, 
                  communicate with you, and comply with legal obligations.
                </p>
              </section>

              <section>
                <h2 className="font-montserrat font-semibold text-2xl text-foreground mb-4">
                  Contact Us
                </h2>
                <p className="font-lato text-muted-foreground">
                  If you have any questions about this Privacy Policy, please contact us at 
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

export default Privacy;