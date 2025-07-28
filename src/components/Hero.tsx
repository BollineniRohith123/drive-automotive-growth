import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Users, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import WhatsAppButton from "@/components/WhatsAppButton";
import heroImage from "@/assets/hero-automotive.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with optimized loading */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-700"
        style={{ backgroundImage: `url(${heroImage})` }}
      />

      {/* Enhanced Overlay with better gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/80 to-primary/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Content Wrapper with perfect spacing */}
          <div className="animate-fade-in space-y-8">

            {/* Trust Badge */}
            <div className="flex justify-center mb-6">
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-accent/20 backdrop-blur-md border border-accent/30 text-accent-foreground shadow-glow">
                <Award className="h-5 w-5 mr-3 text-accent" />
                <span className="font-lato font-semibold text-lg">Trusted by Industry Leaders</span>
              </div>
            </div>

            {/* Main Headline - Perfectly aligned */}
            <div className="space-y-4">
              <h1 className="font-montserrat font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white leading-[1.1] tracking-tight">
                Transform Your{" "}
                <span className="text-accent drop-shadow-lg">Automotive Business</span>
                <br className="hidden sm:block" />
                <span className="block mt-2">
                  Into an{" "}
                  <span className="bg-gradient-accent bg-clip-text text-transparent drop-shadow-lg">
                    Industry Leader
                  </span>
                </span>
              </h1>
            </div>

            {/* Enhanced Subheadline */}
            <div className="max-w-5xl mx-auto">
              <p className="font-lato text-xl sm:text-2xl lg:text-3xl text-white/95 leading-relaxed font-light">
                From struggling operations to market dominance - we've helped automotive companies{" "}
                <span className="text-accent font-bold bg-accent/10 px-2 py-1 rounded-md">
                  increase profitability by 40%
                </span>{" "}
                and{" "}
                <span className="text-accent font-bold bg-accent/10 px-2 py-1 rounded-md">
                  reduce operational costs by 30%
                </span>
              </p>
            </div>

            {/* Value Propositions - Enhanced Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto py-8">
              {[
                {
                  title: "OEMs & Manufacturers",
                  description: "Streamline production, optimize supply chains, boost efficiency",
                  delay: "0s"
                },
                {
                  title: "Automotive Startups",
                  description: "Scale operations, secure funding, accelerate market entry",
                  delay: "0.1s"
                },
                {
                  title: "Service Centers",
                  description: "Improve customer satisfaction, increase revenue per service",
                  delay: "0.2s"
                }
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white/15 backdrop-blur-md rounded-xl p-6 border border-white/25 shadow-elegant hover:bg-white/20 hover:scale-105 transition-all duration-300 animate-slide-up"
                  style={{ animationDelay: item.delay }}
                >
                  <h3 className="font-montserrat font-bold text-white text-lg mb-3 leading-tight">
                    {item.title}
                  </h3>
                  <p className="font-lato text-white/90 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA Buttons - Perfect alignment */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center py-8">
              <WhatsAppButton
                variant="cta"
                size="lg"
                className="text-lg px-10 py-5 shadow-glow hover:shadow-elegant hover:scale-105 transition-all duration-300 font-semibold"
                options={{
                  source: "hero_section",
                  service: "Free Business Assessment"
                }}
              >
                Get Your FREE Business Assessment
              </WhatsAppButton>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-10 py-5 text-white border-2 border-white/80 hover:bg-white hover:text-primary hover:scale-105 transition-all duration-300 font-semibold backdrop-blur-sm"
              >
                <Link to="/services" className="flex items-center">
                  View Success Stories
                  <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>

            {/* Trust Indicators - Enhanced Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto pt-8">
              {[
                {
                  icon: <TrendingUp className="h-10 w-10 text-accent" />,
                  number: "27+",
                  label: "Years Transforming Businesses",
                  delay: "0s"
                },
                {
                  icon: <Award className="h-10 w-10 text-accent" />,
                  number: "15+",
                  label: "Specialized Service Areas",
                  delay: "0.2s"
                },
                {
                  icon: <Users className="h-10 w-10 text-accent" />,
                  number: "OEMs",
                  label: "to Startups - All Scales",
                  delay: "0.4s"
                }
              ].map((item, index) => (
                <div
                  key={index}
                  className="text-center animate-slide-up hover:scale-105 transition-all duration-300"
                  style={{ animationDelay: item.delay }}
                >
                  <div className="flex items-center justify-center mb-4 space-x-3">
                    {item.icon}
                    <span className="font-montserrat font-bold text-4xl text-white drop-shadow-lg">
                      {item.number}
                    </span>
                  </div>
                  <p className="font-lato text-white/90 text-lg font-medium leading-tight">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-8 h-12 border-2 border-white/60 rounded-full flex justify-center backdrop-blur-sm bg-white/10 shadow-lg">
          <div className="w-1.5 h-4 bg-white/80 rounded-full mt-3 animate-pulse"></div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-accent/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-primary/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
    </section>
  );
};

export default Hero;