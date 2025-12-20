/**
 * Classnames Utility / Classnames Utility-si
 * Functions for handling CSS class names
 * CSS class adlarını idarə etmək üçün funksiyalar
 */
type ClassValue = string | number | boolean | undefined | null | ClassValue[] | Record<string, boolean | undefined | null>;
/**
 * Merge class names conditionally
 * Class adlarını şərti olaraq birləşdir
 *
 * @param args - Class values / Class dəyərləri
 * @returns Merged class string / Birləşdirilmiş class stringi
 *
 * @example
 * ```typescript
 * cn('btn', 'btn-primary'); // "btn btn-primary"
 * cn('btn', { 'btn-active': true, 'btn-disabled': false }); // "btn btn-active"
 * cn('btn', isActive && 'btn-active'); // "btn btn-active" or "btn"
 * ```
 */
export declare function cn(...args: ClassValue[]): string;
/**
 * Alias for cn function
 * cn funksiyası üçün alias
 */
export declare const classnames: typeof cn;
/**
 * Alias for cn function
 * cn funksiyası üçün alias
 */
export declare const clsx: typeof cn;
export {};
//# sourceMappingURL=classnames.d.ts.map