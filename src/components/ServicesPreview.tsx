import { Button } from "@/components/ui/button";
import { ArrowRight, Users, BarChart3, Settings, Zap, Database, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import automotiveTech from "@/assets/automotive-tech.jpg";
import growthAnalytics from "@/assets/growth-analytics.jpg";
import teamCollaboration from "@/assets/team-collaboration.jpg";

const ServicesPreview = () => {
  const featuredServices = [
    {
      icon: <Users className="h-8 w-8 text-accent" />,
      title: "Manpower Solutions",
      description: "Comprehensive recruitment, training, and talent development programs tailored for automotive excellence.",
      image: teamCollaboration,
      features: ["Strategic Recruitment", "Skills Training", "Performance Management"]
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-accent" />,
      title: "Data Analytics & Insights",
      description: "Advanced data management and analytics solutions to drive informed decision-making and operational efficiency.",
      image: growthAnalytics,
      features: ["Business Intelligence", "Performance Analytics", "Predictive Insights"]
    },
    {
      icon: <Settings className="h-8 w-8 text-accent" />,
      title: "Operational Excellence",
      description: "Shop floor management, productivity optimization, and process improvement for maximum efficiency.",
      image: automotiveTech,
      features: ["Process Optimization", "Cost Control", "Quality Management"]
    }
  ];

  const allServices = [
    "Manpower (Recruitment & Training)",
    "Data Management & Analytics", 
    "Overhead Cost Control",
    "Shop Floor Management",
    "Productivity Optimization",
    "Spare Parts Management",
    "Performance Reviews",
    "ERP & Knowledge Sharing",
    "Target Fulfillment",
    "SEO Optimization",
    "Global Insights",
    "Business Strategy"
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-montserrat font-bold text-4xl sm:text-5xl text-foreground mb-6">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="font-lato text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            We position our clients at the forefront of their field by advancing an agenda 
            of innovation, efficiency, and sustainable growth.
          </p>
        </div>

        {/* Featured Services */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {featuredServices.map((service, index) => (
            <div 
              key={index}
              className="bg-card border border-border rounded-xl overflow-hidden shadow-card hover:shadow-elegant transition-all duration-500 hover:-translate-y-2 animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  {service.icon}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="font-montserrat font-bold text-xl text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="font-lato text-muted-foreground mb-4">
                  {service.description}
                </p>
                
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center space-x-2">
                      <Zap className="h-4 w-4 text-accent" />
                      <span className="font-lato text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button variant="outline" className="w-full group" asChild>
                  <Link to="/services">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* All Services Grid */}
        <div className="bg-card border border-border rounded-xl p-8 shadow-card animate-fade-in">
          <h3 className="font-montserrat font-bold text-2xl text-foreground mb-6 text-center">
            Complete Service Portfolio
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
            {allServices.map((service, index) => (
              <div 
                key={index}
                className="flex items-center space-x-2 p-3 bg-muted/50 rounded-lg hover:bg-accent/10 transition-colors duration-300"
              >
                <Database className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="font-lato text-sm text-foreground">{service}</span>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/services">
                Explore All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 animate-slide-up">
          <div className="bg-gradient-primary rounded-xl p-8 text-white">
            <TrendingUp className="h-12 w-12 text-accent mx-auto mb-4" />
            <h3 className="font-montserrat font-bold text-2xl mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="font-lato text-lg mb-6 max-w-2xl mx-auto">
              Let our expert team help you achieve operational excellence and sustainable growth 
              in the competitive automotive industry.
            </p>
            <Button variant="cta" size="lg" asChild>
              <Link to="/contact">
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;