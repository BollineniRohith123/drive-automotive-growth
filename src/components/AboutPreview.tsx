import { Button } from "@/components/ui/button";
import { ArrowRight, Target, Users, Award, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import umaMaheshPhoto from "@/assets/uma-mahesh-professional.jpg";

const AboutPreview = () => {
  const features = [
    {
      icon: <Award className="h-6 w-6 text-accent" />,
      title: "27+ Years Experience",
      description: "Proven track record in automotive industry leadership and innovation"
    },
    {
      icon: <Target className="h-6 w-6 text-accent" />,
      title: "Tailored Strategies",
      description: "Customized solutions designed specifically for your business needs"
    },
    {
      icon: <Users className="h-6 w-6 text-accent" />,
      title: "End-to-End Support", 
      description: "Comprehensive consulting from strategy to implementation"
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-accent" />,
      title: "Industry Recognition",
      description: "Trusted by leading OEMs, startups, and established firms"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Founder Info */}
          <div className="animate-fade-in">
            <div className="mb-8">
              <h2 className="font-montserrat font-bold text-3xl sm:text-4xl text-foreground mb-4">
                Meet <span className="text-primary">Uma Mahesh</span>
              </h2>
              <h3 className="font-lato text-xl text-accent font-semibold mb-6">
                Founder & Managing Director
              </h3>
              
              <div className="relative">
                <img 
                  src={umaMaheshPhoto} 
                  alt="Uma Mahesh - Founder & Managing Director"
                  className="w-64 h-64 rounded-lg object-cover shadow-elegant mb-6"
                />
                <div className="absolute -bottom-4 -right-4 bg-accent text-accent-foreground px-4 py-2 rounded-lg shadow-glow font-semibold">
                  27+ Years
                </div>
              </div>
            </div>
            
            <blockquote className="border-l-4 border-primary pl-6 mb-8">
              <p className="font-lato text-lg text-muted-foreground italic mb-4">
                "Our commitment goes beyond consulting – we partner with our clients to create 
                sustainable growth, operational excellence, and lasting success in the automotive industry."
              </p>
              <cite className="font-montserrat font-semibold text-primary">- Uma Mahesh</cite>
            </blockquote>

            <Button variant="hero" size="lg" asChild>
              <Link to="/about">
                Learn More About Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>

          {/* Right Column - Why Choose Us */}
          <div className="animate-slide-up">
            <h2 className="font-montserrat font-bold text-3xl sm:text-4xl text-foreground mb-8">
              Why Choose <span className="text-accent">Uma Consultancy</span>?
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="bg-card border border-border rounded-lg p-6 shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 p-2 bg-accent/10 rounded-lg">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="font-montserrat font-semibold text-lg text-foreground mb-2">
                        {feature.title}
                      </h3>
                      <p className="font-lato text-muted-foreground text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-gradient-primary rounded-lg text-white">
              <h3 className="font-montserrat font-bold text-xl mb-3">
                Supporting Every Stage of Your Journey
              </h3>
              <p className="font-lato mb-4">
                From OEMs and start-ups to established firms and KPOs - we provide solutions 
                for profitability, customer-centricity, and employee engagement.
              </p>
              <div className="flex flex-wrap gap-2">
                {['OEMs', 'Start-ups', 'Established Firms', 'KPOs'].map((type) => (
                  <span key={type} className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">
                    {type}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;