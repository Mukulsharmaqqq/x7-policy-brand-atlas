import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Logo from '@/components/brand/Logo';
import ColorPalette from '@/components/brand/ColorPalette';
import Typography from '@/components/brand/Typography';
import BrandGuidelines from '@/components/brand/BrandGuidelines';
import MockupShowcase from '@/components/brand/MockupShowcase';
import heroImage from '@/assets/hero-insurance.jpg';
import { Download, Eye, Palette, Type, BookOpen, Smartphone } from 'lucide-react';

const BrandIdentity = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const logoVariations = [
    { variant: 'horizontal' as const, name: 'Horizontal Logo', description: 'Primary logo for headers and main branding' },
    { variant: 'stacked' as const, name: 'Stacked Logo', description: 'Vertical layout for square formats' },
    { variant: 'icon' as const, name: 'Icon Only', description: 'Symbol mark for favicons and compact spaces' }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative h-96 bg-gradient-primary overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
          <div className="max-w-4xl">
            <Logo variant="horizontal" size="xl" color="white" className="mb-6 justify-center" />
            <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-4 tracking-tight">
              Brand Identity System
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              A comprehensive, premium brand identity for modern insurance solutions designed with professional standards and timeless appeal.
            </p>
            <Button size="lg" variant="accent" className="shadow-premium">
              <Download className="mr-2 w-5 h-5" />
              Download Brand Assets
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="sticky top-0 z-40 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="h-12 w-full justify-start bg-transparent border-0 p-0">
              <TabsTrigger value="overview" className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                <Eye className="w-4 h-4" />
                Overview
              </TabsTrigger>
              <TabsTrigger value="colors" className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                <Palette className="w-4 h-4" />
                Colors
              </TabsTrigger>
              <TabsTrigger value="typography" className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                <Type className="w-4 h-4" />
                Typography
              </TabsTrigger>
              <TabsTrigger value="guidelines" className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                <BookOpen className="w-4 h-4" />
                Guidelines
              </TabsTrigger>
              <TabsTrigger value="mockups" className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                <Smartphone className="w-4 h-4" />
                Applications
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsContent value="overview" className="space-y-8">
            {/* Brand Overview */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-4">24×7 Policy Brand Identity</h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    A sophisticated, trustworthy brand identity that communicates reliability, accessibility, and professional expertise in the insurance industry. Built for Fortune 500-level presence with timeless appeal.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card className="p-6">
                    <h3 className="font-semibold text-foreground mb-2">Brand Essence</h3>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Always Available (24×7)</li>
                      <li>• Professional & Trustworthy</li>
                      <li>• Modern & Accessible</li>
                      <li>• Expert & Reliable</li>
                    </ul>
                  </Card>
                  
                  <Card className="p-6">
                    <h3 className="font-semibold text-foreground mb-2">Target Audience</h3>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Individuals seeking reliability</li>
                      <li>• Small to medium businesses</li>
                      <li>• Tech-savvy professionals</li>
                      <li>• Value-conscious consumers</li>
                    </ul>
                  </Card>
                </div>
              </div>

              <Card className="p-6 bg-muted">
                <h3 className="font-semibold text-foreground mb-4">Quick Stats</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Color Palette</span>
                    <Badge>12 Colors</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Typography</span>
                    <Badge>Inter + JetBrains Mono</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Logo Variations</span>
                    <Badge>3 Formats</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Applications</span>
                    <Badge>5+ Formats</Badge>
                  </div>
                </div>
              </Card>
            </div>

            {/* Logo Variations */}
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">Logo Variations</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {logoVariations.map((logo, index) => (
                  <Card key={index} className="p-8 text-center hover:shadow-card transition-shadow">
                    <div className="mb-6 flex justify-center">
                      <div className="p-8 bg-muted rounded-lg">
                        <Logo variant={logo.variant} size="lg" />
                      </div>
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">{logo.name}</h4>
                    <p className="text-sm text-muted-foreground">{logo.description}</p>
                  </Card>
                ))}
              </div>
            </div>

            {/* Color Preview */}
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">Color System Preview</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {[
                  { name: 'Primary', class: 'bg-primary' },
                  { name: 'Accent', class: 'bg-accent' },
                  { name: 'Trust', class: 'bg-trust' },
                  { name: 'Success', class: 'bg-success' },
                  { name: 'Warning', class: 'bg-warning' },
                  { name: 'Muted', class: 'bg-muted' }
                ].map((color, index) => (
                  <div key={index} className="text-center">
                    <div className={`w-full h-16 rounded-lg ${color.class} mb-2`}></div>
                    <p className="text-xs font-medium text-muted-foreground">{color.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="colors">
            <ColorPalette />
          </TabsContent>

          <TabsContent value="typography">
            <Typography />
          </TabsContent>

          <TabsContent value="guidelines">
            <BrandGuidelines />
          </TabsContent>

          <TabsContent value="mockups">
            <MockupShowcase />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default BrandIdentity;