
import React from 'react';
import { cn } from '@/lib/utils';

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const GlassCard = ({ children, className, ...props }: GlassCardProps) => {
  return (
    <div 
      className={cn(
        "glass-card transition-all duration-300 hover:shadow-lg", 
        className
      )} 
      {...props}
    >
      {children}
    </div>
  );
};

export default GlassCard;
