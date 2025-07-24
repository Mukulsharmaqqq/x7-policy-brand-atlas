import React from 'react';
import { Card } from '@/components/ui/card';

const LogoConcepts = () => {
  const concepts = [
    {
      id: 1,
      name: "Minimalist Tech",
      description: "Clean, modern, silicon valley aesthetic",
      logo: (
        <div className="flex items-center space-x-3">
          <div className="relative">
            <div className="w-10 h-10 bg-gray-900 rounded-sm flex items-center justify-center">
              <div className="text-white font-mono text-xs font-bold">24/7</div>
            </div>
          </div>
          <div className="font-light text-2xl tracking-wide text-gray-900">
            Policy
          </div>
        </div>
      ),
      fonts: {
        primary: "Inter (Light, Regular, Medium)",
        secondary: "JetBrains Mono (for numbers)"
      },
      colors: {
        primary: "#1A1A1A",
        secondary: "#F5F5F5", 
        accent: "#3B82F6",
        text: "#374151"
      },
      personality: "Tech-forward, Efficient, Modern"
    },
    
    {
      id: 2,
      name: "Trust Heritage",
      description: "Established, reliable, institutional feel",
      logo: (
        <div className="flex items-center space-x-2">
          <div className="relative">
            <div className="w-12 h-8 border-2 border-blue-900 rounded flex items-center justify-center bg-blue-50">
              <div className="text-blue-900 font-serif text-sm font-bold">24×7</div>
            </div>
          </div>
          <div className="font-serif text-2xl font-medium text-blue-900 tracking-tight">
            POLICY
          </div>
        </div>
      ),
      fonts: {
        primary: "Playfair Display (Classic serif)",
        secondary: "Source Sans Pro (Clean sans-serif)"
      },
      colors: {
        primary: "#1E3A8A",
        secondary: "#EFF6FF",
        accent: "#D97706", 
        text: "#1F2937"
      },
      personality: "Trustworthy, Established, Professional"
    },

    {
      id: 3,
      name: "Bold Contemporary",
      description: "Strong, confident, standout presence",
      logo: (
        <div className="flex items-center space-x-3">
          <div className="relative">
            <div className="w-11 h-11 bg-gradient-to-br from-red-600 to-red-700 rounded-lg flex items-center justify-center transform rotate-3">
              <div className="text-white font-black text-sm">24</div>
            </div>
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-red-600 rounded-full flex items-center justify-center">
              <div className="text-white font-black text-xs">7</div>
            </div>
          </div>
          <div className="font-black text-2xl text-red-600 tracking-tight uppercase">
            Policy
          </div>
        </div>
      ),
      fonts: {
        primary: "Montserrat (Bold, Black)",
        secondary: "Open Sans (Regular, Semi-bold)"
      },
      colors: {
        primary: "#DC2626",
        secondary: "#FEF2F2",
        accent: "#F59E0B",
        text: "#111827"
      },
      personality: "Bold, Confident, Dynamic"
    },

    {
      id: 4,
      name: "Sophisticated Premium",
      description: "Luxury, high-end, exclusive feel",
      logo: (
        <div className="flex items-center space-x-4">
          <div className="relative">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-900 to-purple-800 rounded-full flex items-center justify-center">
              <div className="text-white font-light text-xs tracking-widest">24·7</div>
            </div>
          </div>
          <div className="font-light text-2xl tracking-[0.3em] text-purple-900 uppercase">
            Policy
          </div>
        </div>
      ),
      fonts: {
        primary: "Avenir Next (Light, Medium)",
        secondary: "Crimson Text (Elegant serif)"
      },
      colors: {
        primary: "#581C87",
        secondary: "#FAF5FF",
        accent: "#C4B5FD",
        text: "#4C1D95"
      },
      personality: "Premium, Sophisticated, Exclusive"
    },

    {
      id: 5,
      name: "Accessible Friendly",
      description: "Approachable, human-centered, warm",
      logo: (
        <div className="flex items-center space-x-3">
          <div className="relative">
            <div className="w-10 h-10 bg-emerald-500 rounded-2xl flex items-center justify-center">
              <div className="text-white font-medium text-sm">24</div>
            </div>
            <div className="absolute -top-1 -right-1 w-5 h-5 bg-emerald-400 rounded-full flex items-center justify-center">
              <div className="text-white font-medium text-xs">7</div>
            </div>
          </div>
          <div className="font-medium text-2xl text-emerald-700 tracking-wide">
            Policy
          </div>
        </div>
      ),
      fonts: {
        primary: "Nunito Sans (Regular, Semi-bold)",
        secondary: "Source Code Pro (for technical text)"
      },
      colors: {
        primary: "#059669",
        secondary: "#ECFDF5",
        accent: "#FCD34D",
        text: "#065F46"
      },
      personality: "Friendly, Accessible, Reliable"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            24x7 Policy Brand Concepts
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Five distinct brand directions, each crafted with strategic thinking from world-class agencies. 
            Each concept includes logo, typography, and color system.
          </p>
        </div>

        <div className="space-y-8">
          {concepts.map((concept) => (
            <Card key={concept.id} className="p-8 hover:shadow-lg transition-shadow">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Logo Display */}
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                      Concept {concept.id}: {concept.name}
                    </h2>
                    <p className="text-gray-600 mb-6">{concept.description}</p>
                    <div className="p-8 bg-white border-2 border-gray-100 rounded-lg flex items-center justify-center min-h-[120px]">
                      {concept.logo}
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Brand Personality</h4>
                    <p className="text-sm text-gray-600">{concept.personality}</p>
                  </div>
                </div>

                {/* Typography & Colors */}
                <div className="space-y-6">
                  {/* Typography */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Typography</h4>
                    <div className="space-y-2">
                      <div className="p-3 bg-gray-50 rounded">
                        <div className="text-sm font-medium text-gray-700">Primary Font</div>
                        <div className="text-sm text-gray-600">{concept.fonts.primary}</div>
                      </div>
                      <div className="p-3 bg-gray-50 rounded">
                        <div className="text-sm font-medium text-gray-700">Secondary Font</div>
                        <div className="text-sm text-gray-600">{concept.fonts.secondary}</div>
                      </div>
                    </div>
                  </div>

                  {/* Colors */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Color Palette</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {Object.entries(concept.colors).map(([name, color]) => (
                        <div key={name} className="flex items-center space-x-3">
                          <div 
                            className="w-8 h-8 rounded border border-gray-200"
                            style={{ backgroundColor: color }}
                          />
                          <div>
                            <div className="text-sm font-medium text-gray-700 capitalize">{name}</div>
                            <div className="text-xs text-gray-500 font-mono">{color}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Each concept represents a different strategic positioning for 24x7 Policy. 
            Choose the direction that best aligns with your business vision and target audience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LogoConcepts;