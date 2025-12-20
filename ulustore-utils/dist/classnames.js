"use strict";
/**
 * Classnames Utility / Classnames Utility-si
 * Functions for handling CSS class names
 * CSS class adlarını idarə etmək üçün funksiyalar
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.clsx = exports.classnames = void 0;
exports.cn = cn;
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
function cn(...args) {
    const classes = [];
    for (const arg of args) {
        if (!arg)
            continue;
        if (typeof arg === 'string' || typeof arg === 'number') {
            classes.push(String(arg));
        }
        else if (Array.isArray(arg)) {
            const nested = cn(...arg);
            if (nested)
                classes.push(nested);
        }
        else if (typeof arg === 'object') {
            for (const [key, value] of Object.entries(arg)) {
                if (value)
                    classes.push(key);
            }
        }
    }
    return classes.join(' ');
}
/**
 * Alias for cn function
 * cn funksiyası üçün alias
 */
exports.classnames = cn;
/**
 * Alias for cn function
 * cn funksiyası üçün alias
 */
exports.clsx = cn;
