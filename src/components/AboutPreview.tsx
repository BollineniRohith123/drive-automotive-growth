import { Button } from "@/components/ui/button";
import { ArrowRight, Target, Users, Award, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

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
        <div className="max-w-4xl mx-auto">
          {/* Why Choose Us */}
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