import React from 'react';
import { cn } from '@/lib/utils';

interface LogoProps {
  variant?: 'horizontal' | 'stacked' | 'icon';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: 'default' | 'white' | 'dark';
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ 
  variant = 'horizontal', 
  size = 'md', 
  color = 'default',
  className 
}) => {
  const getSizeClasses = () => {
    switch (size) {
      case 'sm': return 'h-6';
      case 'md': return 'h-8';
      case 'lg': return 'h-12';
      case 'xl': return 'h-16';
      default: return 'h-8';
    }
  };

  const getColorClasses = () => {
    switch (color) {
      case 'white': return 'text-white';
      case 'dark': return 'text-primary';
      default: return 'text-primary';
    }
  };

  const IconComponent = ({ className: iconClassName }: { className?: string }) => (
    <div className={cn("relative", iconClassName)}>
      {/* Circular protection symbol with 24/7 concept */}
      <svg viewBox="0 0 40 40" className="w-full h-full">
        {/* Outer protective circle */}
        <circle
          cx="20"
          cy="20"
          r="18"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          className="opacity-80"
        />
        
        {/* Inner continuous coverage indicator */}
        <circle
          cx="20"
          cy="20"
          r="12"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          strokeDasharray="6 2"
          className="opacity-60"
        >
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="rotate"
            from="0 20 20"
            to="360 20 20"
            dur="20s"
            repeatCount="indefinite"
          />
        </circle>
        
        {/* Central stability point */}
        <circle
          cx="20"
          cy="20"
          r="3"
          fill="currentColor"
          className="opacity-90"
        />
        
        {/* Accessibility indicators - 24/7 concept */}
        <text
          x="20"
          y="6"
          fontSize="3"
          textAnchor="middle"
          fill="currentColor"
          className="font-mono font-medium opacity-70"
        >
          24
        </text>
        <text
          x="20"
          y="36"
          fontSize="3"
          textAnchor="middle"
          fill="currentColor"
          className="font-mono font-medium opacity-70"
        >
          7
        </text>
      </svg>
    </div>
  );

  const WordmarkComponent = ({ className: wordmarkClassName }: { className?: string }) => (
    <div className={cn("flex items-center", wordmarkClassName)}>
      <span className={cn("font-display font-bold tracking-tight", getColorClasses())}>
        <span className="font-mono">24×7</span>
        <span className="ml-1">Policy</span>
      </span>
    </div>
  );

  if (variant === 'icon') {
    return <IconComponent className={cn(getSizeClasses(), className)} />;
  }

  if (variant === 'stacked') {
    return (
      <div className={cn("flex flex-col items-center space-y-2", className)}>
        <IconComponent className={getSizeClasses()} />
        <WordmarkComponent />
      </div>
    );
  }

  // Horizontal (default)
  return (
    <div className={cn("flex items-center space-x-3", className)}>
      <IconComponent className={getSizeClasses()} />
      <WordmarkComponent />
    </div>
  );
};

export default Logo;