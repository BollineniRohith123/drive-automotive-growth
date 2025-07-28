import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent Successfully!",
      description: "Thank you for your inquiry. Our team will contact you within 24 hours.",
    });
    setFormData({
      name: "",
      email: "",
      company: "",
      phone: "",
      service: "",
      message: ""
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const services = [
    "Manpower Solutions",
    "Data Management & Analytics",
    "Business Strategy",
    "Operational Excellence",
    "ERP Solutions",
    "Supply Chain Optimization",
    "Other"
  ];

  return (
    <div className="min-h-screen bg-background font-lato">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-montserrat font-bold text-4xl sm:text-5xl lg:text-6xl mb-6">
            Contact <span className="text-accent">Uma Consultancy</span>
          </h1>
          <p className="font-lato text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Book a Free Consultation with our Expert Team to solve your problems 
            and unlock your business potential.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="tel:+919491398821" className="flex items-center space-x-2 text-accent hover:text-accent-light transition-colors">
              <Phone className="h-5 w-5" />
              <span className="font-lato font-semibold text-lg">+91 94913 98821</span>
            </a>
            <span className="hidden sm:block text-white/60">|</span>
            <a href="mailto:info@umaconsultancy.co" className="flex items-center space-x-2 text-accent hover:text-accent-light transition-colors">
              <Mail className="h-5 w-5" />
              <span className="font-lato font-semibold">info@umaconsultancy.co</span>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-elegant">
                <CardHeader>
                  <CardTitle className="font-montserrat text-2xl text-foreground">
                    Send us a Message
                  </CardTitle>
                  <p className="font-lato text-muted-foreground">
                    Fill out the form below and our team will get back to you within 24 hours.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name" className="font-lato font-medium">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="mt-1"
                          placeholder="Enter your full name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="font-lato font-medium">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="mt-1"
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="company" className="font-lato font-medium">Company Name</Label>
                        <Input
                          id="company"
                          name="company"
                          type="text"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="mt-1"
                          placeholder="Enter your company name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone" className="font-lato font-medium">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="mt-1"
                          placeholder="Enter your phone number"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="service" className="font-lato font-medium">Service of Interest</Label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full mt-1 px-3 py-2 border border-border rounded-md bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent"
                      >
                        <option value="">Select a service</option>
                        {services.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <Label htmlFor="message" className="font-lato font-medium">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        className="mt-1 min-h-[120px]"
                        placeholder="Tell us about your project requirements and how we can help you..."
                      />
                    </div>

                    <Button type="submit" variant="hero" size="lg" className="w-full">
                      Send Message
                      <Send className="ml-2 h-5 w-5" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              {/* Contact Details */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="font-montserrat text-xl text-foreground">
                    Get in Touch
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Phone className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-lato font-medium text-foreground">Phone</p>
                      <a href="tel:+919491398821" className="font-lato text-muted-foreground hover:text-primary transition-colors">
                        +91 94913 98821
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Mail className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-lato font-medium text-foreground">Email</p>
                      <a href="mailto:info@umaconsultancy.co" className="font-lato text-muted-foreground hover:text-primary transition-colors">
                        info@umaconsultancy.co
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-lato font-medium text-foreground">Office</p>
                      <p className="font-lato text-muted-foreground">
                        Hyderabad, Telangana<br />
                        India
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Clock className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-lato font-medium text-foreground">Business Hours</p>
                      <p className="font-lato text-muted-foreground">
                        Monday - Friday: 9:00 AM - 6:00 PM<br />
                        Saturday: 9:00 AM - 2:00 PM
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Why Choose Us */}
              <Card className="shadow-card bg-gradient-primary text-white">
                <CardHeader>
                  <CardTitle className="font-montserrat text-xl">
                    Why Choose Uma Consultancy?
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {[
                    "27+ years of industry expertise",
                    "Proven track record of success",
                    "Tailored solutions for your needs",
                    "Expert team of consultants",
                    "End-to-end project support"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                      <span className="font-lato text-sm">{item}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Quick Contact */}
              <Card className="shadow-card bg-accent text-accent-foreground">
                <CardContent className="p-6 text-center">
                  <h3 className="font-montserrat font-bold text-lg mb-3">
                    Need Immediate Assistance?
                  </h3>
                  <p className="font-lato text-sm mb-4">
                    Call us directly for urgent inquiries or immediate support.
                  </p>
                  <Button variant="outline" size="lg" className="w-full border-accent-foreground text-accent-foreground hover:bg-accent-foreground hover:text-accent">
                    <a href="tel:+919491398821" className="flex items-center justify-center w-full">
                      <Phone className="mr-2 h-4 w-4" />
                      Call Now
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-bold text-3xl text-foreground mb-4">
              Visit Our <span className="text-primary">Office</span>
            </h2>
            <p className="font-lato text-muted-foreground">
              Located in the heart of Hyderabad, we're easily accessible and ready to meet with you.
            </p>
          </div>
          
          <div className="bg-card border border-border rounded-xl p-8 shadow-card text-center">
            <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="font-montserrat font-semibold text-xl text-foreground mb-2">
              Uma Consultancy Head Office
            </h3>
            <p className="font-lato text-muted-foreground mb-6">
              Hyderabad, Telangana, India
            </p>
            <Button variant="outline" asChild>
              <a 
                href="https://maps.google.com/?q=Hyderabad,Telangana,India" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                View on Google Maps
                <MapPin className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;