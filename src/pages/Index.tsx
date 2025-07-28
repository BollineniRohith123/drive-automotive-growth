import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import AboutPreview from "@/components/AboutPreview";
import ServicesPreview from "@/components/ServicesPreview";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-lato">
      <Navigation />
      <Hero />
      <AboutPreview />
      <ServicesPreview />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
