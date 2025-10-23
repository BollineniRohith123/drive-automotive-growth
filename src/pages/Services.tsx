import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, Users, BarChart3, Settings, DollarSign, Zap, Package, 
  CheckCircle, Target, Database, Globe, TrendingUp, Laptop, Eye, ArrowUp 
} from "lucide-react";
import { Link } from "react-router-dom";
import WhatsAppButton from "@/components/WhatsAppButton";
import { openWhatsAppConsultation, getServiceSpecificMessage } from "@/lib/whatsapp";
import automotiveTech from "@/assets/automotive-tech.jpg";

const Services = () => {
  const services = [
    {
      icon: <Settings className="h-8 w-8 text-accent" />,
      title: "Operational Excellence",
      description: "Shop floor management, productivity optimization, and process improvement for maximum efficiency.",
      features: ["Process optimization", "Cost control", "Quality management", "Operational efficiency"]
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-accent" />,
      title: "Data Management & Analytics",
      description: "Advanced data solutions to drive informed decision-making and business intelligence.",
      features: ["Data architecture", "Analytics platforms", "Reporting systems", "Predictive insights"]
    },
    {
      icon: <DollarSign className="h-8 w-8 text-accent" />,
      title: "Overhead Cost Control",
      description: "Strategic cost optimization solutions to improve profitability and operational efficiency.",
      features: ["Cost analysis", "Budget optimization", "Expense management", "ROI improvement"]
    },
    {
      icon: <Settings className="h-8 w-8 text-accent" />,
      title: "Shop Floor Management",
      description: "Comprehensive solutions for optimizing manufacturing operations and workflow efficiency.",
      features: ["Process optimization", "Workflow design", "Quality control", "Production planning"]
    },
    {
      icon: <Zap className="h-8 w-8 text-accent" />,
      title: "Productivity Optimization",
      description: "Systematic approaches to enhance productivity across all business operations.",
      features: ["Efficiency analysis", "Process improvement", "Resource optimization", "Performance metrics"]
    },
    {
      icon: <Package className="h-8 w-8 text-accent" />,
      title: "Spare Parts Management",
      description: "Integrated solutions for inventory management and supply chain optimization.",
      features: ["Inventory control", "Supply chain optimization", "Demand forecasting", "Vendor management"]
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-accent" />,
      title: "Performance Reviews",
      description: "Comprehensive assessment systems to evaluate and improve organizational performance.",
      features: ["KPI development", "Performance tracking", "Review systems", "Improvement plans"]
    },
    {
      icon: <Database className="h-8 w-8 text-accent" />,
      title: "ERP & Knowledge Sharing",
      description: "Implementation and optimization of enterprise resource planning systems.",
      features: ["ERP implementation", "System integration", "Knowledge management", "User training"]
    },
    {
      icon: <Target className="h-8 w-8 text-accent" />,
      title: "Target Fulfillment",
      description: "Strategic planning and execution support to achieve business objectives and targets.",
      features: ["Goal setting", "Strategy development", "Execution planning", "Progress monitoring"]
    },
    {
      icon: <Globe className="h-8 w-8 text-accent" />,
      title: "Digital Marketing and Brand Marketing",
      description: "Comprehensive digital marketing and branding solutions to enhance online presence and market reach.",
      features: ["Digital strategy", "Brand development", "Content marketing", "Online presence"]
    },
    {
      icon: <Eye className="h-8 w-8 text-accent" />,
      title: "Global Insights",
      description: "Market intelligence and competitive analysis for strategic decision-making.",
      features: ["Market research", "Competitive analysis", "Trend identification", "Strategic insights"]
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-accent" />,
      title: "Business Strategy",
      description: "Comprehensive strategic planning and business development consulting services.",
      features: ["Strategic planning", "Business modeling", "Growth strategies", "Market expansion"]
    },
    {
      icon: <Settings className="h-8 w-8 text-accent" />,
      title: "Business Process",
      description: "Process reengineering and optimization for improved operational efficiency.",
      features: ["Process mapping", "Workflow optimization", "Standard procedures", "Quality improvement"]
    },
    {
      icon: <Laptop className="h-8 w-8 text-accent" />,
      title: "Software Engineering",
      description: "Custom software solutions and technology implementation for automotive businesses.",
      features: ["Custom software", "System development", "Integration solutions", "Technical support"]
    },
    {
      icon: <ArrowUp className="h-8 w-8 text-accent" />,
      title: "Insight & Growth",
      description: "Strategic growth consulting and market expansion guidance for sustainable development.",
      features: ["Growth planning", "Market insights", "Expansion strategies", "Revenue optimization"]
    },
    {
      icon: <Package className="h-8 w-8 text-accent" />,
      title: "Supply Chain & Operations",
      description: "End-to-end supply chain optimization and operational excellence solutions.",
      features: ["Supply chain design", "Logistics optimization", "Operational efficiency", "Vendor relations"]
    },
    {
      icon: <Users className="h-8 w-8 text-accent" />,
      title: "Manpower (Recruitment & Training)",
      description: "Comprehensive talent acquisition and development programs tailored for the automotive industry.",
      features: ["Strategic recruitment", "Skills assessment", "Training programs", "Performance development"]
    }
  ];

  return (
    <div className="min-h-screen bg-background font-lato">
      <Navigation />
      
      {/* Hero Banner */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${automotiveTech})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-montserrat font-bold text-4xl sm:text-5xl lg:text-6xl text-white mb-6">
            Our <span className="text-accent">Services</span>
          </h1>
          <p className="font-lato text-xl text-white/90 max-w-3xl mx-auto mb-8">
            We position our clients at the forefront of their field by advancing an agenda 
            of innovation, efficiency, and sustainable growth.
          </p>
          <WhatsAppButton 
            variant="accent" 
            size="lg"
            options={{
              source: "services_hero",
              service: "General Services Consultation"
            }}
          >
            Get Started Today
          </WhatsAppButton>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-3xl sm:text-4xl text-foreground mb-6">
              Comprehensive <span className="text-primary">Solutions</span>
            </h2>
            <p className="font-lato text-xl text-muted-foreground max-w-3xl mx-auto">
              Our extensive portfolio of services is designed to address every aspect of your 
              automotive business, from strategy to implementation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-card border border-border rounded-xl p-6 shadow-card hover:shadow-elegant transition-all duration-500 hover:-translate-y-2 animate-slide-up group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center justify-center w-16 h-16 bg-accent/10 rounded-lg mb-4 group-hover:bg-accent/20 transition-colors duration-300">
                  {service.icon}
                </div>
                
                <h3 className="font-montserrat font-semibold text-lg text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="font-lato text-muted-foreground text-sm mb-4">
                  {service.description}
                </p>
                
                <div className="space-y-2">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center space-x-2">
                      <CheckCircle className="h-3 w-3 text-accent flex-shrink-0" />
                      <span className="font-lato text-xs text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-4 pt-4 border-t border-border">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="w-full group-hover:bg-primary/10 group-hover:text-primary transition-all duration-300"
                    onClick={() => openWhatsAppConsultation({
                      source: "services_card",
                      service: service.title,
                      message: getServiceSpecificMessage(service.title)
                    })}
                  >
                    Get Quote
                    <ArrowRight className="ml-2 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-3xl sm:text-4xl text-foreground mb-6">
              Our <span className="text-accent">Process</span>
            </h2>
            <p className="font-lato text-xl text-muted-foreground max-w-3xl mx-auto">
              A proven methodology that ensures successful project delivery and measurable results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", description: "Comprehensive analysis of your business needs and challenges" },
              { step: "02", title: "Strategy", description: "Development of customized solutions and implementation roadmap" },
              { step: "03", title: "Implementation", description: "Execution of solutions with continuous monitoring and support" },
              { step: "04", title: "Optimization", description: "Ongoing refinement and optimization for sustained success" }
            ].map((item, index) => (
              <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto shadow-elegant">
                    <span className="font-montserrat font-bold text-2xl text-white">{item.step}</span>
                  </div>
                  {index < 3 && (
                    <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-primary to-accent transform -translate-y-1/2"></div>
                  )}
                </div>
                <h3 className="font-montserrat font-semibold text-xl text-foreground mb-3">{item.title}</h3>
                <p className="font-lato text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <TrendingUp className="h-16 w-16 text-accent mx-auto mb-6" />
          <h2 className="font-montserrat font-bold text-3xl sm:text-4xl mb-6">
            Ready to Explore How We Can Help?
          </h2>
          <p className="font-lato text-xl mb-8 text-white/90">
            Contact our expert team today to discuss your specific needs and discover 
            the right solutions for your automotive business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <WhatsAppButton 
              variant="accent" 
              size="lg"
              options={{
                source: "services_cta",
                service: "Comprehensive Business Solutions"
              }}
            >
              Book Free Consultation
            </WhatsAppButton>
            <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-primary">
              <a href="tel:+919491398821">Call Now: +91 94913 98821</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;