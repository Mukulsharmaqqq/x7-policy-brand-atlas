import React from 'react';
import { Card } from '@/components/ui/card';

const Typography = () => {
  const typeStyles = [
    {
      category: "Display Typography",
      styles: [
        { name: "Hero Heading", className: "text-5xl font-bold tracking-tight", sample: "Insurance Made Simple" },
        { name: "Page Title", className: "text-4xl font-bold tracking-tight", sample: "Your Policy Dashboard" },
        { name: "Section Heading", className: "text-3xl font-semibold", sample: "Coverage Options" },
      ]
    },
    {
      category: "Content Typography", 
      styles: [
        { name: "Heading 1", className: "text-2xl font-semibold", sample: "Policy Information" },
        { name: "Heading 2", className: "text-xl font-medium", sample: "Important Details" },
        { name: "Heading 3", className: "text-lg font-medium", sample: "Coverage Summary" },
        { name: "Body Large", className: "text-base font-normal", sample: "Your comprehensive insurance coverage includes protection for property, liability, and personal belongings with 24/7 support." },
        { name: "Body Regular", className: "text-sm font-normal", sample: "Terms and conditions apply. Coverage limits may vary based on your selected plan and geographic location." },
        { name: "Caption", className: "text-xs font-normal text-muted-foreground", sample: "Last updated: January 2024" },
      ]
    },
    {
      category: "Interface Typography",
      styles: [
        { name: "Button Text", className: "text-sm font-medium", sample: "Get Quote Now" },
        { name: "Label", className: "text-sm font-medium", sample: "Policy Number" },
        { name: "Input Text", className: "text-sm font-normal", sample: "Enter your information" },
        { name: "Navigation", className: "text-sm font-medium", sample: "Dashboard • Claims • Support" },
      ]
    },
    {
      category: "Monospace Typography",
      styles: [
        { name: "Policy Code", className: "text-sm font-mono font-medium", sample: "POL-24X7-2024-001" },
        { name: "Reference Number", className: "text-xs font-mono", sample: "REF: 7A8B9C2D" },
      ]
    }
  ];

  return (
    <div className="space-y-8">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-foreground mb-2">Typography System</h3>
        <p className="text-sm text-muted-foreground">
          Built on Inter typeface for optimal readability and modern aesthetics. 
          Includes display, content, interface, and monospace variants.
        </p>
      </div>

      {typeStyles.map((category, categoryIndex) => (
        <div key={categoryIndex}>
          <h4 className="text-base font-semibold text-foreground mb-4">{category.category}</h4>
          <div className="space-y-4">
            {category.styles.map((style, styleIndex) => (
              <Card key={styleIndex} className="p-6">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="lg:w-1/3">
                    <h5 className="font-medium text-sm text-foreground mb-1">{style.name}</h5>
                    <code className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                      {style.className.replace(/text-|font-/g, '').replace(/\s+/g, ' • ')}
                    </code>
                  </div>
                  <div className="lg:w-2/3">
                    <div className={`${style.className} text-foreground break-words`}>
                      {style.sample}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      ))}

      <Card className="p-6 bg-muted">
        <h4 className="text-base font-semibold text-foreground mb-3">Font Specifications</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div>
            <h5 className="font-medium mb-2">Primary Font</h5>
            <p className="text-muted-foreground">Inter (Google Fonts)</p>
            <p className="text-muted-foreground">Weights: 300, 400, 500, 600, 700, 800</p>
          </div>
          <div>
            <h5 className="font-medium mb-2">Monospace Font</h5>
            <p className="text-muted-foreground">JetBrains Mono</p>
            <p className="text-muted-foreground">Weights: 400, 500, 600</p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Typography;