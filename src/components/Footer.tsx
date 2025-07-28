import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  const services = [
    "Manpower Solutions",
    "Data Analytics",
    "Business Strategy", 
    "Operational Excellence",
    "ERP Solutions",
    "Performance Management"
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="font-montserrat font-bold text-2xl mb-4">
                Uma Consultancy
              </h3>
              <p className="font-lato text-primary-foreground/80 mb-6 max-w-md">
                With over 27 years of expertise in the automobile industry, we drive success 
                through innovative consulting solutions and people-centric approaches.
              </p>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-4">
              <a 
                href="tel:+919491398821" 
                className="flex items-center space-x-3 text-primary-foreground/90 hover:text-accent transition-colors duration-300"
              >
                <Phone className="h-5 w-5" />
                <span className="font-lato">+91 94913 98821</span>
              </a>
              <a 
                href="mailto:info@umaconsultancy.co" 
                className="flex items-center space-x-3 text-primary-foreground/90 hover:text-accent transition-colors duration-300"
              >
                <Mail className="h-5 w-5" />
                <span className="font-lato">info@umaconsultancy.co</span>
              </a>
              <div className="flex items-start space-x-3 text-primary-foreground/90">
                <MapPin className="h-5 w-5 mt-1 flex-shrink-0" />
                <span className="font-lato">Hyderabad, Telangana, India</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-montserrat font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="font-lato text-primary-foreground/80 hover:text-accent transition-colors duration-300 flex items-center group"
                  >
                    <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-montserrat font-semibold text-lg mb-6">Key Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link 
                    to="/services"
                    className="font-lato text-primary-foreground/80 hover:text-accent transition-colors duration-300 text-sm"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-8 border-t border-primary-foreground/20">
          <div className="text-center">
            <h4 className="font-montserrat font-bold text-xl mb-3">
              Ready to Drive Your Success?
            </h4>
            <p className="font-lato text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
              Make a free consultation with our expert team to solve your problems and unlock your business potential.
            </p>
            <Button variant="accent" size="lg" asChild>
              <Link to="/contact">
                Book Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-primary-foreground/20 flex flex-col md:flex-row justify-between items-center">
          <p className="font-lato text-primary-foreground/60 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Uma Consultancy. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <Link to="/privacy" className="font-lato text-primary-foreground/60 hover:text-accent transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="font-lato text-primary-foreground/60 hover:text-accent transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;