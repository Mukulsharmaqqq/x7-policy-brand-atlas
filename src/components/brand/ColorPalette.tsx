import React from 'react';
import { Card } from '@/components/ui/card';

const ColorPalette = () => {
  const colorGroups = [
    {
      title: "Primary Colors",
      description: "Core brand colors for primary actions and branding",
      colors: [
        { name: "Primary Navy", value: "hsl(215, 85%, 25%)", hex: "#0F2952", usage: "Primary buttons, headers, main branding" },
        { name: "Primary Hover", value: "hsl(215, 85%, 20%)", hex: "#0C2142", usage: "Hover states, pressed buttons" },
      ]
    },
    {
      title: "Accent Colors", 
      description: "Supporting colors for highlights and calls-to-action",
      colors: [
        { name: "Premium Gold", value: "hsl(45, 95%, 58%)", hex: "#F5C842", usage: "Call-to-action, highlights, premium features" },
        { name: "Trust Blue", value: "hsl(210, 100%, 45%)", hex: "#0073E6", usage: "Trust indicators, links, information" },
        { name: "Success Green", value: "hsl(145, 65%, 42%)", hex: "#28A745", usage: "Success states, confirmations" },
      ]
    },
    {
      title: "Neutral Colors",
      description: "Foundation colors for backgrounds and content",
      colors: [
        { name: "Foreground", value: "hsl(215, 25%, 15%)", hex: "#202935", usage: "Primary text, headings" },
        { name: "Muted Foreground", value: "hsl(215, 15%, 45%)", hex: "#6B7685", usage: "Secondary text, captions" },
        { name: "Background", value: "hsl(0, 0%, 100%)", hex: "#FFFFFF", usage: "Page backgrounds" },
        { name: "Muted Background", value: "hsl(215, 15%, 96%)", hex: "#F4F5F6", usage: "Card backgrounds, sections" },
      ]
    }
  ];

  return (
    <div className="space-y-8">
      {colorGroups.map((group, groupIndex) => (
        <div key={groupIndex}>
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-foreground mb-1">{group.title}</h3>
            <p className="text-sm text-muted-foreground">{group.description}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {group.colors.map((color, colorIndex) => (
              <Card key={colorIndex} className="p-4 hover:shadow-card transition-shadow">
                <div 
                  className="w-full h-16 rounded-md mb-3 border border-border"
                  style={{ backgroundColor: color.value }}
                />
                <div className="space-y-2">
                  <h4 className="font-medium text-foreground">{color.name}</h4>
                  <div className="space-y-1 text-xs">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">HEX:</span>
                      <code className="font-mono bg-muted px-1 rounded">{color.hex}</code>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">HSL:</span>
                      <code className="font-mono bg-muted px-1 rounded text-xs">{color.value}</code>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">{color.usage}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ColorPalette;