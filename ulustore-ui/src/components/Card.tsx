/**
 * Card Component / Card Komponenti
 * Reusable card component
 * Təkrar istifadə edilə bilən card komponenti
 */

import React from 'react';
import { cn } from '../utils';

/**
 * Card props
 * Card xüsusiyyətləri
 */
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Card variant / Card variantı */
  variant?: 'default' | 'outlined' | 'elevated';
  /** Padding size / Padding ölçüsü */
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

/**
 * Card component
 * Card komponenti
 */
export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'default', padding = 'md', children, ...props }, ref) => {
    const variants = {
      default: 'bg-white border border-gray-200',
      outlined: 'bg-transparent border border-gray-300',
      elevated: 'bg-white shadow-lg',
    };
    
    const paddings = {
      none: '',
      sm: 'p-3',
      md: 'p-4',
      lg: 'p-6',
    };
    
    return (
      <div
        ref={ref}
        className={cn(
          'rounded-lg',
          variants[variant],
          paddings[padding],
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

/**
 * Card Header
 * Card başlığı
 */
export const CardHeader: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ 
  className, 
  children, 
  ...props 
}) => (
  <div className={cn('mb-4', className)} {...props}>
    {children}
  </div>
);

/**
 * Card Content
 * Card məzmunu
 */
export const CardContent: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ 
  className, 
  children, 
  ...props 
}) => (
  <div className={cn('', className)} {...props}>
    {children}
  </div>
);

/**
 * Card Footer
 * Card altlığı
 */
export const CardFooter: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ 
  className, 
  children, 
  ...props 
}) => (
  <div className={cn('mt-4 pt-4 border-t border-gray-200', className)} {...props}>
    {children}
  </div>
);
