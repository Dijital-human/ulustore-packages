/**
 * UI Utilities / UI Utility-ləri
 * Common utility functions for UI components
 * UI komponentləri üçün ümumi utility funksiyaları
 */

type ClassValue = string | number | boolean | undefined | null | ClassValue[] | Record<string, boolean | undefined | null>;

/**
 * Merge class names
 * Class adlarını birləşdir
 */
export function cn(...args: ClassValue[]): string {
  const classes: string[] = [];
  
  for (const arg of args) {
    if (!arg) continue;
    
    if (typeof arg === 'string' || typeof arg === 'number') {
      classes.push(String(arg));
    } else if (Array.isArray(arg)) {
      const nested = cn(...arg);
      if (nested) classes.push(nested);
    } else if (typeof arg === 'object') {
      for (const [key, value] of Object.entries(arg)) {
        if (value) classes.push(key);
      }
    }
  }
  
  return classes.join(' ');
}
