/**
 * Button Component / Button Komponenti
 * Reusable button component
 * Təkrar istifadə edilə bilən button komponenti
 */

import React from 'react';
import { cn } from '../utils';

/**
 * Button props
 * Button xüsusiyyətləri
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Button variant / Button variantı */
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  /** Button size / Button ölçüsü */
  size?: 'sm' | 'md' | 'lg';
  /** Loading state / Yüklənmə statusu */
  isLoading?: boolean;
  /** Full width / Tam genişlik */
  fullWidth?: boolean;
}

/**
 * Button component
 * Button komponenti
 * 
 * @example
 * ```tsx
 * <Button variant="primary" size="md">
 *   Klik et / Click me
 * </Button>
 * ```
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    className, 
    variant = 'primary', 
    size = 'md', 
    isLoading = false,
    fullWidth = false,
    disabled,
    children,
    ...props 
  }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
    
    const variants = {
      primary: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
      secondary: 'bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500',
      outline: 'border border-gray-300 bg-transparent hover:bg-gray-100 focus:ring-gray-500',
      ghost: 'bg-transparent hover:bg-gray-100 focus:ring-gray-500',
      danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
    };
    
    const sizes = {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-4 py-2 text-base',
      lg: 'px-6 py-3 text-lg',
    };
    
    return (
      <button
        ref={ref}
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          fullWidth && 'w-full',
          className
        )}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <>
            <span className="animate-spin mr-2">⏳</span>
            Yüklənir... / Loading...
          </>
        ) : (
          children
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';
