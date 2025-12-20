"use strict";
/**
 * String Utilities / String Utility-ləri
 * Functions for manipulating strings
 * String manipulyasiya funksiyaları
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.truncate = truncate;
exports.slugify = slugify;
exports.capitalize = capitalize;
exports.randomString = randomString;
exports.maskString = maskString;
/**
 * Truncate text with ellipsis
 * Mətni ellipsis ilə kəs
 *
 * @param text - Text to truncate / Kəsiləcək mətn
 * @param maxLength - Maximum length / Maksimum uzunluq
 * @param suffix - Suffix to add / Əlavə ediləcək suffix
 * @returns Truncated text / Kəsilmiş mətn
 *
 * @example
 * ```typescript
 * truncate('Hello World', 5); // "Hello..."
 * ```
 */
function truncate(text, maxLength, suffix = '...') {
    if (text.length <= maxLength)
        return text;
    return text.slice(0, maxLength - suffix.length).trim() + suffix;
}
/**
 * Generate slug from text
 * Mətndən slug yarat
 *
 * @param text - Text to slugify / Slug ediləcək mətn
 * @returns Slugified text / Sluglaşdırılmış mətn
 *
 * @example
 * ```typescript
 * slugify('Hello World'); // "hello-world"
 * slugify('Məhsul Adı'); // "mehsul-adi"
 * ```
 */
function slugify(text) {
    // Azerbaijani character mappings
    const azMap = {
        'ə': 'e', 'Ə': 'E',
        'ı': 'i', 'I': 'I',
        'ö': 'o', 'Ö': 'O',
        'ü': 'u', 'Ü': 'U',
        'ş': 's', 'Ş': 'S',
        'ç': 'c', 'Ç': 'C',
        'ğ': 'g', 'Ğ': 'G',
    };
    return text
        .toLowerCase()
        .split('')
        .map(char => azMap[char] || char)
        .join('')
        .replace(/[^\w\s-]/g, '')
        .replace(/[\s_-]+/g, '-')
        .replace(/^-+|-+$/g, '');
}
/**
 * Capitalize first letter
 * İlk hərfi böyük et
 *
 * @param text - Text to capitalize / Böyüdüləcək mətn
 * @returns Capitalized text / Böyüdülmüş mətn
 */
function capitalize(text) {
    if (!text)
        return '';
    return text.charAt(0).toUpperCase() + text.slice(1);
}
/**
 * Generate random string
 * Təsadüfi string yarat
 *
 * @param length - Length of string / String uzunluğu
 * @returns Random string / Təsadüfi string
 */
function randomString(length = 10) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}
/**
 * Mask sensitive data
 * Həssas datanı maskala
 *
 * @param text - Text to mask / Maskalanacaq mətn
 * @param visibleStart - Visible characters at start / Başlanğıcda görünən simvollar
 * @param visibleEnd - Visible characters at end / Sonda görünən simvollar
 * @returns Masked text / Maskalanmış mətn
 *
 * @example
 * ```typescript
 * maskString('1234567890', 4, 2); // "1234****90"
 * maskString('user@email.com', 2, 4); // "us****@email.com"
 * ```
 */
function maskString(text, visibleStart = 2, visibleEnd = 2) {
    if (text.length <= visibleStart + visibleEnd)
        return text;
    const start = text.slice(0, visibleStart);
    const end = text.slice(-visibleEnd);
    const masked = '*'.repeat(Math.min(text.length - visibleStart - visibleEnd, 8));
    return start + masked + end;
}
