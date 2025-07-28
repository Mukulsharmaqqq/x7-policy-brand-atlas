import React from 'react';
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Shield, Clock, Users, CheckCircle, Phone, Mail, MapPin, Star } from 'lucide-react';

const Home = () => {
  const insurers = [
    { name: "Tata AIG", logo: "🛡️" },
    { name: "Bajaj Allianz", logo: "🏛️" },
    { name: "Magma HDI", logo: "⭐" },
    { name: "Digit Insurance", logo: "📱" },
  ];

  const services = [
    {
      icon: <Shield className="w-8 h-8 text-accent" />,
      title: "Health Insurance",
      description: "Comprehensive health coverage for individuals and families with cashless treatment across India."
    },
    {
      icon: <Clock className="w-8 h-8 text-accent" />,
      title: "24/7 Support",
      description: "Round-the-clock assistance for policy queries, claims support, and emergency guidance."
    },
    {
      icon: <Users className="w-8 h-8 text-accent" />,
      title: "Expert Guidance",
      description: "Personalized advice from experienced insurance professionals to help you choose the right policy."
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-accent" />,
      title: "Easy Claims",
      description: "Simplified claim process with dedicated support to ensure quick and hassle-free settlements."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section id="home" className="relative py-20 bg-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary-hover"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6">
              Your Trusted
              <span className="block text-accent">Insurance Partner</span>
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed font-sans">
              Since 2018, providing expert health insurance guidance and seamless policy solutions around the clock. 
              Making protection accessible, reliable, and effortless.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-4 h-auto">
                <Phone className="mr-2 w-5 h-5" />
                Get Free Quote
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-4 h-auto border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary backdrop-blur-sm">
                Learn More
              </Button>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-8 text-sm opacity-80">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-accent" />
                <span>6+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-accent" />
                <span>Trusted by 1000+ Families</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-accent" />
                <span>24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
                About 24×7 Policy
              </h2>
              <div className="prose prose-lg text-muted-foreground font-sans space-y-4">
                <p>
                  Since 2018, 24x7policy.com has been a trusted name in the health insurance domain, 
                  providing expert guidance and seamless policy solutions around the clock.
                </p>
                <p>
                  We specialize in offering comprehensive health coverage from leading insurers such as 
                  Tata AIG, Bajaj, Magma, and Digit. Our mission is simple: to make choosing and managing 
                  health policies effortless, reliable, and accessible anytime you need it.
                </p>
              </div>
              
              {/* Vision Statement */}
              <div className="mt-8 p-6 bg-primary/5 rounded-lg border-l-4 border-accent">
                <h3 className="text-xl font-serif font-semibold text-foreground mb-3">Our Vision</h3>
                <p className="text-muted-foreground font-sans italic">
                  "To build a financially secure, insurance-aware society by empowering every individual 
                  and family with the right knowledge, trusted guidance, and accessible protection through 
                  innovative digital platforms."
                </p>
              </div>
            </div>
            
            <div className="relative">
              <Card className="p-8 bg-background shadow-premium">
                <div className="text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-accent" />
                  </div>
                  <h4 className="text-xl font-serif font-semibold text-foreground mb-4">Why Choose Us?</h4>
                  <ul className="space-y-3 text-left">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground font-sans">Expert guidance from licensed professionals</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground font-sans">Partnerships with top insurance providers</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground font-sans">Transparent, customer-first approach</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground font-sans">Round-the-clock support and assistance</span>
                    </li>
                  </ul>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-sans">
              Comprehensive insurance solutions designed to protect what matters most to you and your family.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-card transition-shadow group">
                <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                  {service.icon}
                </div>
                <h3 className="font-serif font-semibold text-foreground mb-3">{service.title}</h3>
                <p className="text-sm text-muted-foreground font-sans">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance Partners */}
      <section id="insurers" className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              Our Trusted Partners
            </h2>
            <p className="text-lg text-muted-foreground font-sans">
              We work with leading insurance providers to offer you the best coverage options
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {insurers.map((insurer, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-card transition-shadow">
                <div className="text-4xl mb-3">{insurer.logo}</div>
                <h4 className="font-sans font-semibold text-foreground">{insurer.name}</h4>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              Get In Touch
            </h2>
            <p className="text-lg text-muted-foreground font-sans">
              Ready to secure your future? Contact us for expert insurance guidance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 text-center">
              <Phone className="w-8 h-8 text-accent mx-auto mb-4" />
              <h4 className="font-serif font-semibold text-foreground mb-2">Call Us</h4>
              <p className="text-muted-foreground font-sans">Available 24/7 for support</p>
              <p className="text-primary font-semibold font-sans mt-2">+91 98765 43210</p>
            </Card>

            <Card className="p-6 text-center">
              <Mail className="w-8 h-8 text-accent mx-auto mb-4" />
              <h4 className="font-serif font-semibold text-foreground mb-2">Email Us</h4>
              <p className="text-muted-foreground font-sans">Get detailed information</p>
              <p className="text-primary font-semibold font-sans mt-2">info@24x7policy.com</p>
            </Card>

            <Card className="p-6 text-center">
              <MapPin className="w-8 h-8 text-accent mx-auto mb-4" />
              <h4 className="font-serif font-semibold text-foreground mb-2">Visit Us</h4>
              <p className="text-muted-foreground font-sans">Our office location</p>
              <p className="text-primary font-semibold font-sans mt-2">Mumbai, India</p>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-serif font-bold mb-4">24×7 POLICY</h3>
              <p className="text-primary-foreground/80 font-sans">
                Your trusted insurance partner since 2018. Making protection accessible and reliable.
              </p>
            </div>
            
            <div>
              <h4 className="font-serif font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-primary-foreground/80 font-sans">
                <li>Health Insurance</li>
                <li>Family Coverage</li>
                <li>Policy Consultation</li>
                <li>Claims Support</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-serif font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-primary-foreground/80 font-sans">
                <li>About Us</li>
                <li>Our Partners</li>
                <li>Contact</li>
                <li>Support</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-serif font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-primary-foreground/80 font-sans">
                <p>+91 98765 43210</p>
                <p>info@24x7policy.com</p>
                <p>Available 24/7</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
            <p className="text-primary-foreground/60 font-sans">
              © 2024 24x7policy.com. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;