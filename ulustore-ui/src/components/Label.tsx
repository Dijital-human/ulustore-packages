/**
 * Label Component / Label Komponenti
 * Reusable label component
 * Təkrar istifadə edilə bilən label komponenti
 */

import React from 'react';
import { cn } from '../utils';

/**
 * Label props
 * Label xüsusiyyətləri
 */
export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  /** Required indicator / Tələb olunan göstərici */
  required?: boolean;
}

/**
 * Label component
 * Label komponenti
 * 
 * @example
 * ```tsx
 * <Label htmlFor="email" required>
 *   Email ünvanı
 * </Label>
 * ```
 */
export const Label: React.FC<LabelProps> = ({
  className,
  required = false,
  children,
  ...props
}) => {
  return (
    <label
      className={cn(
        'block text-sm font-medium text-gray-700',
        className
      )}
      {...props}
    >
      {children}
      {required && (
        <span className="text-red-500 ml-1" aria-hidden="true">*</span>
      )}
    </label>
  );
};
