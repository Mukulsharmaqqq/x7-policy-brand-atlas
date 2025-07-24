import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Logo from './Logo';
import { ArrowRight, Shield, Clock, Users } from 'lucide-react';

const MockupShowcase = () => {
  return (
    <div className="space-y-8">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-foreground mb-2">Brand Applications</h3>
        <p className="text-sm text-muted-foreground">
          See how the 24x7 Policy brand translates across different touchpoints and formats.
        </p>
      </div>

      {/* Website Header Mockup */}
      <div>
        <h4 className="text-base font-semibold text-foreground mb-4">Website Header</h4>
        <Card className="p-0 overflow-hidden">
          <div className="bg-background border-b border-border p-4">
            <div className="flex items-center justify-between max-w-6xl mx-auto">
              <Logo size="md" />
              <nav className="hidden md:flex items-center space-x-8">
                <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Coverage</a>
                <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Claims</a>
                <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Support</a>
                <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors">About</a>
              </nav>
              <div className="flex items-center space-x-3">
                <Button variant="outline" size="sm">Login</Button>
                <Button size="sm" className="bg-gradient-primary text-primary-foreground hover:bg-primary-hover shadow-button">
                  Get Quote
                </Button>
              </div>
            </div>
          </div>
          <div className="p-8 bg-gradient-primary text-primary-foreground">
            <div className="max-w-6xl mx-auto">
              <div className="max-w-2xl">
                <h1 className="text-4xl font-bold tracking-tight mb-4">
                  Insurance That Works Around Your Life
                </h1>
                <p className="text-lg opacity-90 mb-6">
                  Comprehensive coverage with 24/7 support. Get instant quotes, file claims online, and access your policy anytime, anywhere.
                </p>
                <div className="flex items-center space-x-4">
                  <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-button">
                    Start Your Quote
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Business Card Mockup */}
      <div>
        <h4 className="text-base font-semibold text-foreground mb-4">Business Card</h4>
        <div className="flex justify-center">
          <Card className="w-80 h-48 p-6 bg-primary text-primary-foreground relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-4 right-4 w-32 h-32 border border-current rounded-full"></div>
              <div className="absolute bottom-4 left-4 w-20 h-20 border border-current rounded-full"></div>
            </div>
            
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <Logo variant="horizontal" size="sm" color="white" />
                <div className="text-xs opacity-75 font-mono">24×7</div>
              </div>
              
              <div>
                <h3 className="font-semibold text-lg">Sarah Johnson</h3>
                <p className="text-sm opacity-90">Senior Insurance Advisor</p>
                <div className="mt-3 space-y-1 text-xs opacity-75">
                  <p>sarah.johnson@24x7policy.com</p>
                  <p>+1 (555) 123-4567</p>
                  <p>www.24x7policy.com</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Social Media Banner */}
      <div>
        <h4 className="text-base font-semibold text-foreground mb-4">Social Media Banner</h4>
        <Card className="p-0 overflow-hidden">
          <div className="h-48 bg-gradient-trust text-trust-foreground relative">
            <div className="absolute inset-0 opacity-20" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M30 0l30 30-30 30L0 30z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}></div>
            
            <div className="relative z-10 h-full flex items-center justify-between px-8">
              <div className="max-w-md">
                <Logo variant="horizontal" size="lg" color="white" className="mb-4" />
                <h2 className="text-2xl font-bold mb-2">Protection Beyond Compare</h2>
                <p className="text-sm opacity-90">Your trusted partner for comprehensive insurance solutions, available 24 hours a day, 7 days a week.</p>
              </div>
              
              <div className="hidden md:flex items-center space-x-6">
                <div className="text-center">
                  <Clock className="w-8 h-8 mx-auto mb-2 opacity-90" />
                  <div className="text-xs font-medium">24/7 Support</div>
                </div>
                <div className="text-center">
                  <Shield className="w-8 h-8 mx-auto mb-2 opacity-90" />
                  <div className="text-xs font-medium">Comprehensive</div>
                </div>
                <div className="text-center">
                  <Users className="w-8 h-8 mx-auto mb-2 opacity-90" />
                  <div className="text-xs font-medium">Expert Team</div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Mobile App Interface */}
      <div>
        <h4 className="text-base font-semibold text-foreground mb-4">Mobile App Interface</h4>
        <div className="flex justify-center">
          <Card className="w-72 p-0 overflow-hidden bg-background">
            {/* Status bar */}
            <div className="bg-primary text-primary-foreground px-4 py-2 text-xs flex justify-between">
              <span>9:41 AM</span>
              <span>●●● 100%</span>
            </div>
            
            {/* App header */}
            <div className="p-4 border-b border-border">
              <div className="flex items-center justify-between mb-4">
                <Logo variant="horizontal" size="sm" />
                <Badge className="bg-success text-success-foreground">Online</Badge>
              </div>
              <h2 className="text-lg font-semibold text-foreground">Welcome back, John</h2>
              <p className="text-sm text-muted-foreground">Your policy is active and up to date</p>
            </div>
            
            {/* Quick actions */}
            <div className="p-4 space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <Button variant="outline" size="sm" className="h-16 flex-col">
                  <Shield className="w-4 h-4 mb-1" />
                  <span className="text-xs">View Policy</span>
                </Button>
                <Button variant="outline" size="sm" className="h-16 flex-col">
                  <ArrowRight className="w-4 h-4 mb-1" />
                  <span className="text-xs">File Claim</span>
                </Button>
              </div>
              
              <Card className="p-3 bg-muted">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Next Payment</span>
                  <span className="font-medium text-foreground">March 15, 2024</span>
                </div>
              </Card>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default MockupShowcase;