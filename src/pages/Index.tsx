import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Logo from '@/components/brand/Logo';
import { ArrowRight, Palette, Type, BookOpen, Eye } from 'lucide-react';
import heroImage from '@/assets/hero-insurance.jpg';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-primary/90" />
        
        <div className="relative z-10 text-center text-primary-foreground max-w-4xl mx-auto px-4">
          <Logo variant="horizontal" size="xl" color="white" className="mb-8 justify-center" />
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Complete Brand Identity System
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Premium, professional brand identity for 24×7 Policy - a modern insurance solutions provider designed with Fortune 500-level sophistication.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg" 
              variant="accent"
              className="text-lg px-8 py-4 h-auto shadow-premium"
              onClick={() => window.location.href = '/brand'}
            >
              <Eye className="mr-2 w-5 h-5" />
              Explore Brand System
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="text-lg px-8 py-4 h-auto border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              Download Assets
            </Button>
          </div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Professional Brand Components
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive system including logos, colors, typography, guidelines, and real-world applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 text-center hover:shadow-card transition-shadow cursor-pointer group">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <Eye className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Logo System</h3>
              <p className="text-sm text-muted-foreground">3 logo variations with conceptual design representing 24/7 accessibility and trust</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-card transition-shadow cursor-pointer group">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                <Palette className="w-6 h-6 text-accent-foreground" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Color Palette</h3>
              <p className="text-sm text-muted-foreground">Sophisticated colors conveying stability, trust, and premium quality</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-card transition-shadow cursor-pointer group">
              <div className="w-12 h-12 bg-trust/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-trust/20 transition-colors">
                <Type className="w-6 h-6 text-trust" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Typography</h3>
              <p className="text-sm text-muted-foreground">Clean, professional font system with Inter and JetBrains Mono</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-card transition-shadow cursor-pointer group">
              <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-success/20 transition-colors">
                <BookOpen className="w-6 h-6 text-success" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Guidelines</h3>
              <p className="text-sm text-muted-foreground">Comprehensive usage rules and brand standards for consistency</p>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button 
              variant="premium" 
              size="lg"
              onClick={() => window.location.href = '/brand'}
              className="shadow-premium"
            >
              View Complete Brand System
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Brand Showcase */}
      <section className="py-20 bg-muted">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Brand in Action
            </h2>
            <p className="text-lg text-muted-foreground">
              See how the 24×7 Policy brand translates across different applications
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">Premium Insurance Brand</h3>
              <p className="text-muted-foreground mb-6">
                Designed with the depth and clarity of top branding agencies, our identity system avoids insurance clichés and embraces modern, conceptual design that builds trust and communicates reliability.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-sm">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Minimal, scalable logo reflecting 24/7 accessibility
                </li>
                <li className="flex items-center text-sm">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  Sophisticated color theme conveying stability
                </li>
                <li className="flex items-center text-sm">
                  <div className="w-2 h-2 bg-trust rounded-full mr-3"></div>
                  Clean typography with high legibility
                </li>
                <li className="flex items-center text-sm">
                  <div className="w-2 h-2 bg-success rounded-full mr-3"></div>
                  Comprehensive style guide and usage rules
                </li>
              </ul>
            </div>

            <div className="relative">
              <Card className="p-8 bg-background shadow-premium">
                <div className="text-center">
                  <Logo variant="stacked" size="lg" className="mb-6" />
                  <h4 className="text-xl font-semibold text-foreground mb-2">Insurance Made Simple</h4>
                  <p className="text-muted-foreground mb-6">Professional coverage you can trust, available 24 hours a day, 7 days a week.</p>
                  <div className="flex justify-center space-x-3">
                    <Button variant="default" size="sm">Get Quote</Button>
                    <Button variant="outline" size="sm">Learn More</Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
