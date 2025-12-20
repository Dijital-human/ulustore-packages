/**
 * String Utilities / String Utility-ləri
 * Functions for manipulating strings
 * String manipulyasiya funksiyaları
 */
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
export declare function truncate(text: string, maxLength: number, suffix?: string): string;
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
export declare function slugify(text: string): string;
/**
 * Capitalize first letter
 * İlk hərfi böyük et
 *
 * @param text - Text to capitalize / Böyüdüləcək mətn
 * @returns Capitalized text / Böyüdülmüş mətn
 */
export declare function capitalize(text: string): string;
/**
 * Generate random string
 * Təsadüfi string yarat
 *
 * @param length - Length of string / String uzunluğu
 * @returns Random string / Təsadüfi string
 */
export declare function randomString(length?: number): string;
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
export declare function maskString(text: string, visibleStart?: number, visibleEnd?: number): string;
//# sourceMappingURL=string.d.ts.map