import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Users, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-automotive.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent" />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/20 backdrop-blur-sm border border-accent/30 text-accent-foreground mb-6">
            <Award className="h-4 w-4 mr-2" />
            <span className="font-lato font-medium">Trusted by Industry Leaders</span>
          </div>
          
          {/* Main Headline */}
          <h1 className="font-montserrat font-bold text-4xl sm:text-5xl lg:text-7xl text-white mb-6 leading-tight">
            Over <span className="text-accent">27+ Years</span> of Experience<br />
            in the <span className="bg-gradient-accent bg-clip-text text-transparent">Automobile Industry</span>
          </h1>
          
          {/* Subheadline */}
          <p className="font-lato text-xl sm:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Driving Success. Empowering Your Growth. Expert business consulting solutions for automotive excellence.
          </p>
          
          {/* Mission Statement */}
          <p className="font-lato text-lg text-white/80 mb-10 max-w-4xl mx-auto">
            We transform automotive businesses through strategic consulting, innovative solutions, and 
            people-centric approaches that deliver measurable results and sustainable growth.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button variant="cta" size="lg" asChild className="text-lg px-8 py-4">
              <Link to="/contact">
                Book a Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 text-white border-white hover:bg-white hover:text-primary">
              <Link to="/services">Our Services</Link>
            </Button>
          </div>
          
          {/* Statistics */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center animate-slide-up">
              <div className="flex items-center justify-center mb-2">
                <TrendingUp className="h-8 w-8 text-accent mr-2" />
                <span className="font-montserrat font-bold text-3xl text-white">27+</span>
              </div>
              <p className="font-lato text-white/80">Years of Excellence</p>
            </div>
            <div className="text-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center justify-center mb-2">
                <Users className="h-8 w-8 text-accent mr-2" />
                <span className="font-montserrat font-bold text-3xl text-white">500+</span>
              </div>
              <p className="font-lato text-white/80">Satisfied Clients</p>
            </div>
            <div className="text-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <div className="flex items-center justify-center mb-2">
                <Award className="h-8 w-8 text-accent mr-2" />
                <span className="font-montserrat font-bold text-3xl text-white">100%</span>
              </div>
              <p className="font-lato text-white/80">Success Rate</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;