/**
 * Input Component / Input Komponenti
 * Reusable input component
 * Təkrar istifadə edilə bilən input komponenti
 */

import React from 'react';
import { cn } from '../utils';

/**
 * Input props
 * Input xüsusiyyətləri
 */
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Error state / Xəta statusu */
  error?: boolean;
  /** Error message / Xəta mesajı */
  errorMessage?: string;
  /** Input label / Input etiketi */
  label?: string;
}

/**
 * Input component
 * Input komponenti
 * 
 * @example
 * ```tsx
 * <Input 
 *   label="Email" 
 *   placeholder="email@example.com"
 *   error={!!errors.email}
 *   errorMessage={errors.email}
 * />
 * ```
 */
export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, errorMessage, label, id, ...props }, ref) => {
    const inputId = id || `input-${Math.random().toString(36).slice(2)}`;
    
    return (
      <div className="w-full">
        {label && (
          <label 
            htmlFor={inputId} 
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={cn(
            'w-full px-3 py-2 border rounded-lg shadow-sm',
            'focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500',
            'disabled:bg-gray-100 disabled:cursor-not-allowed',
            error 
              ? 'border-red-500 focus:ring-red-500' 
              : 'border-gray-300',
            className
          )}
          {...props}
        />
        {error && errorMessage && (
          <p className="mt-1 text-sm text-red-600">{errorMessage}</p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
