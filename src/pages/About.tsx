import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Target, Eye, Heart, Award, Users, TrendingUp, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import teamCollaboration from "@/assets/team-collaboration.jpg";
import umaMaheshPhoto from "@/assets/uma-mahesh-professional.jpg";

const About = () => {
  const timeline = [
    { year: "1997", event: "Founded Uma Consultancy with a vision to transform automotive businesses" },
    { year: "2005", event: "Expanded services to include comprehensive data management solutions" },
    { year: "2010", event: "Achieved industry recognition for innovative consulting methodologies" },
    { year: "2015", event: "Launched advanced ERP and knowledge sharing platforms" },
    { year: "2020", event: "Adapted to digital transformation and remote consulting capabilities" },
    { year: "2024", event: "Celebrating 27+ years of automotive industry excellence" }
  ];

  const values = [
    {
      icon: <Target className="h-8 w-8 text-accent" />,
      title: "Excellence",
      description: "We strive for the highest standards in every project, delivering solutions that exceed expectations."
    },
    {
      icon: <Users className="h-8 w-8 text-accent" />,
      title: "Collaboration",
      description: "We believe in partnering with our clients, working together to achieve shared goals and sustainable success."
    },
    {
      icon: <Heart className="h-8 w-8 text-accent" />,
      title: "Integrity",
      description: "We conduct business with honesty, transparency, and ethical practices in all our interactions."
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-accent" />,
      title: "Innovation",
      description: "We continuously evolve our methodologies and embrace new technologies to deliver cutting-edge solutions."
    }
  ];

  return (
    <div className="min-h-screen bg-background font-lato">
      <Navigation />
      
      {/* Hero Banner */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${teamCollaboration})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-montserrat font-bold text-4xl sm:text-5xl lg:text-6xl text-white mb-6">
            About <span className="text-accent">Uma Consultancy</span>
          </h1>
          <p className="font-lato text-xl text-white/90 max-w-3xl mx-auto">
            Transforming automotive businesses through 27+ years of industry expertise, 
            innovative solutions, and unwavering commitment to client success.
          </p>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="relative">
                <img 
                  src={umaMaheshPhoto}
                  alt="Uma Mahesh - Founder & Managing Director"
                  className="w-full max-w-md rounded-lg object-cover shadow-elegant"
                />
                <div className="absolute -bottom-6 -right-6 bg-gradient-accent rounded-lg p-4 shadow-glow">
                  <div className="text-accent-foreground text-center">
                    <div className="font-montserrat font-bold text-2xl">27+</div>
                    <div className="font-lato text-sm">Years Experience</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="animate-slide-up">
              <h2 className="font-montserrat font-bold text-3xl sm:text-4xl text-foreground mb-4">
                Uma Mahesh
              </h2>
              <h3 className="font-lato text-xl text-accent font-semibold mb-6">
                Founder & Managing Director
              </h3>
              
              <div className="space-y-6 font-lato text-muted-foreground">
                <p>
                  With over 27 years of dedicated experience in the automobile industry, Uma Mahesh 
                  has established himself as a visionary leader in automotive consulting. His journey 
                  began with a passion for transforming how businesses operate in this dynamic sector.
                </p>
                <p>
                  Under his leadership, Uma Consultancy has grown from a specialized consulting firm 
                  to a comprehensive solutions provider, serving OEMs, startups, established firms, 
                  and KPOs across the automotive ecosystem.
                </p>
                <p>
                  His unique approach combines deep industry knowledge with innovative methodologies, 
                  ensuring that every client receives tailored solutions that drive measurable results 
                  and sustainable growth.
                </p>
              </div>

              <div className="mt-8 p-6 bg-gradient-primary rounded-lg text-white">
                <blockquote className="font-lato text-lg italic mb-4">
                  "Our success is measured not just by the growth we achieve for our clients, 
                  but by the lasting relationships we build and the positive impact we create 
                  across the entire automotive industry."
                </blockquote>
                <cite className="font-montserrat font-semibold">- Uma Mahesh</cite>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
            {/* Mission */}
            <div className="bg-card border border-border rounded-xl p-8 shadow-card hover:shadow-elegant transition-all duration-300 animate-fade-in">
              <Target className="h-12 w-12 text-primary mb-6" />
              <h3 className="font-montserrat font-bold text-2xl text-foreground mb-4">Our Mission</h3>
              <p className="font-lato text-muted-foreground">
                To empower automotive businesses with innovative consulting solutions that drive 
                operational excellence, enhance profitability, and foster sustainable growth through 
                strategic guidance and people-centric approaches.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-card border border-border rounded-xl p-8 shadow-card hover:shadow-elegant transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <Eye className="h-12 w-12 text-accent mb-6" />
              <h3 className="font-montserrat font-bold text-2xl text-foreground mb-4">Our Vision</h3>
              <p className="font-lato text-muted-foreground">
                To be the most trusted and innovative consulting partner in the automotive industry, 
                recognized globally for our expertise, integrity, and commitment to transforming 
                businesses and creating lasting value.
              </p>
            </div>

            {/* Values */}
            <div className="bg-card border border-border rounded-xl p-8 shadow-card hover:shadow-elegant transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Heart className="h-12 w-12 text-primary mb-6" />
              <h3 className="font-montserrat font-bold text-2xl text-foreground mb-4">Our Commitment</h3>
              <p className="font-lato text-muted-foreground">
                We position our clients at the forefront of their field by advancing an agenda of 
                innovation, operational excellence, and sustainable business practices that benefit 
                all stakeholders.
              </p>
            </div>
          </div>

          {/* Core Values */}
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-bold text-3xl sm:text-4xl text-foreground mb-6">
              Our Core <span className="text-primary">Values</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div 
                key={index}
                className="text-center p-6 bg-card border border-border rounded-lg shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="font-montserrat font-semibold text-lg text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="font-lato text-sm text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-3xl sm:text-4xl text-foreground mb-6">
              Our <span className="text-accent">Journey</span>
            </h2>
            <p className="font-lato text-xl text-muted-foreground max-w-3xl mx-auto">
              Over two decades of growth, innovation, and excellence in automotive consulting
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-primary"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div 
                  key={index}
                  className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'} animate-slide-up`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-card border border-border rounded-lg p-6 shadow-card hover:shadow-elegant transition-all duration-300">
                      <div className="font-montserrat font-bold text-xl text-accent mb-2">
                        {item.year}
                      </div>
                      <p className="font-lato text-muted-foreground">
                        {item.event}
                      </p>
                    </div>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-accent rounded-full border-4 border-background shadow-lg"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Award className="h-16 w-16 text-accent mx-auto mb-6" />
          <h2 className="font-montserrat font-bold text-3xl sm:text-4xl mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="font-lato text-xl mb-8 text-white/90">
            Join hundreds of satisfied clients who have achieved remarkable success with our 
            proven consulting methodologies and industry expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="accent" size="lg" asChild>
              <Link to="/contact">
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-primary">
              <Link to="/services">View Our Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;