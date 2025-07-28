import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-background border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-serif font-bold text-primary">
              24×7
              <span className="block text-lg font-sans font-normal text-foreground">POLICY</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">Home</a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors">Services</a>
            <a href="#insurers" className="text-foreground hover:text-primary transition-colors">Our Partners</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
          </div>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Phone className="w-4 h-4" />
              <span>24/7 Support</span>
            </div>
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
              Get Quote
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-foreground hover:text-primary focus:outline-none"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="text-foreground hover:text-primary transition-colors">Home</a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a>
              <a href="#services" className="text-foreground hover:text-primary transition-colors">Services</a>
              <a href="#insurers" className="text-foreground hover:text-primary transition-colors">Our Partners</a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground w-fit">
                Get Quote
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;