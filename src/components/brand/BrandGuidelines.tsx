import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, XCircle, Info } from 'lucide-react';

const BrandGuidelines = () => {
  const guidelines = [
    {
      section: "Logo Usage",
      rules: [
        {
          type: "do",
          title: "Maintain Clear Space",
          description: "Always preserve minimum clear space equal to the height of the icon around the logo"
        },
        {
          type: "do", 
          title: "Use on Appropriate Backgrounds",
          description: "Ensure sufficient contrast. Use white logo on dark backgrounds, dark logo on light backgrounds"
        },
        {
          type: "do",
          title: "Scale Proportionally", 
          description: "Always maintain aspect ratio when resizing. Minimum size: 24px height for digital, 0.5 inch for print"
        },
        {
          type: "dont",
          title: "Don't Modify the Logo",
          description: "Never alter colors, fonts, proportions, or add effects like shadows or outlines"
        },
        {
          type: "dont",
          title: "Don't Place on Busy Backgrounds",
          description: "Avoid placing logo on complex images or patterns that reduce readability"
        }
      ]
    },
    {
      section: "Color Guidelines",
      rules: [
        {
          type: "do",
          title: "Use Primary Navy for Trust",
          description: "Primary navy (hsl(215, 85%, 25%)) for headers, CTAs, and key branding elements"
        },
        {
          type: "do",
          title: "Premium Gold for Highlights",
          description: "Use accent gold sparingly for premium features and important calls-to-action"
        },
        {
          type: "do",
          title: "Maintain Accessibility",
          description: "Ensure WCAG AA compliance with minimum 4.5:1 contrast ratio for text"
        },
        {
          type: "dont",
          title: "Don't Overuse Accent Colors",
          description: "Limit gold accent to max 10% of design elements to maintain sophistication"
        },
        {
          type: "dont",
          title: "Don't Mix Conflicting Colors",
          description: "Avoid using colors outside the established palette without brand approval"
        }
      ]
    },
    {
      section: "Typography Rules",
      rules: [
        {
          type: "do",
          title: "Use Inter for All Text",
          description: "Maintain consistency with Inter font family across all brand materials"
        },
        {
          type: "do", 
          title: "Establish Clear Hierarchy",
          description: "Use size, weight, and spacing to create logical information hierarchy"
        },
        {
          type: "do",
          title: "Optimize for Readability",
          description: "Use appropriate line height (1.5x font size) and letter spacing for body text"
        },
        {
          type: "dont",
          title: "Don't Use Other Fonts",
          description: "Avoid mixing typefaces. Stick to Inter for consistency and professionalism"
        },
        {
          type: "dont",
          title: "Don't Use All Caps Excessively",
          description: "Limit ALL CAPS to acronyms, short labels, and emphasis where appropriate"
        }
      ]
    }
  ];

  const toneOfVoice = [
    {
      trait: "Confident",
      description: "We speak with authority and expertise, demonstrating deep knowledge of insurance",
      example: "We protect what matters most to you with comprehensive coverage designed for your lifestyle."
    },
    {
      trait: "Clear",
      description: "Complex insurance concepts are explained in simple, understandable language",
      example: "Your deductible is the amount you pay before your insurance covers the rest."
    },
    {
      trait: "Approachable",
      description: "Professional yet warm, making insurance accessible and non-intimidating",
      example: "Questions about your policy? We're here to help, 24 hours a day, 7 days a week."
    },
    {
      trait: "Reliable",
      description: "Consistent, dependable communication that builds trust over time",
      example: "Count on us to be there when you need us most, with fast claims processing and dedicated support."
    }
  ];

  const getIcon = (type: string) => {
    switch(type) {
      case 'do': return <CheckCircle className="w-5 h-5 text-success" />;
      case 'dont': return <XCircle className="w-5 h-5 text-destructive" />;
      default: return <Info className="w-5 h-5 text-trust" />;
    }
  };

  return (
    <div className="space-y-8">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-foreground mb-2">Brand Guidelines</h3>
        <p className="text-sm text-muted-foreground">
          Essential rules and best practices to maintain brand consistency and professional standards.
        </p>
      </div>

      {/* Usage Guidelines */}
      {guidelines.map((section, sectionIndex) => (
        <div key={sectionIndex}>
          <h4 className="text-base font-semibold text-foreground mb-4">{section.section}</h4>
          <div className="grid gap-4">
            {section.rules.map((rule, ruleIndex) => (
              <Card key={ruleIndex} className="p-4">
                <div className="flex items-start gap-3">
                  {getIcon(rule.type)}
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h5 className="font-medium text-sm text-foreground">{rule.title}</h5>
                      <Badge variant={rule.type === 'do' ? 'default' : 'destructive'} className="text-xs">
                        {rule.type === 'do' ? 'DO' : "DON'T"}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{rule.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      ))}

      {/* Tone of Voice */}
      <div>
        <h4 className="text-base font-semibold text-foreground mb-4">Tone of Voice</h4>
        <p className="text-sm text-muted-foreground mb-4">
          Our communication style reflects our brand values and builds trust with customers.
        </p>
        <div className="grid gap-4">
          {toneOfVoice.map((tone, toneIndex) => (
            <Card key={toneIndex} className="p-4">
              <div className="mb-3">
                <h5 className="font-semibold text-foreground">{tone.trait}</h5>
                <p className="text-sm text-muted-foreground">{tone.description}</p>
              </div>
              <div className="p-3 bg-muted rounded-md">
                <p className="text-sm italic text-foreground">"{tone.example}"</p>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Quick Reference */}
      <Card className="p-6 bg-trust-light border-trust">
        <h4 className="text-base font-semibold text-foreground mb-3">Quick Reference</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div>
            <h5 className="font-medium mb-2 text-foreground">Brand Essence</h5>
            <ul className="space-y-1 text-muted-foreground">
              <li>• Always available (24×7)</li>
              <li>• Professional & trustworthy</li>
              <li>• Modern & accessible</li>
              <li>• Expert & reliable</li>
            </ul>
          </div>
          <div>
            <h5 className="font-medium mb-2 text-foreground">Key Messages</h5>
            <ul className="space-y-1 text-muted-foreground">
              <li>• Protection you can count on</li>
              <li>• 24/7 support when you need it</li>
              <li>• Insurance made simple</li>
              <li>• Your peace of mind, our priority</li>
            </ul>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default BrandGuidelines;