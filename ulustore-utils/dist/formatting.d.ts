/**
 * Formatting Utilities / Formatlaşdırma Utility-ləri
 * Functions for formatting data
 * Data formatlaşdırma funksiyaları
 */
/**
 * Format price with currency
 * Qiyməti valyuta ilə formatla
 *
 * @param price - Price value / Qiymət dəyəri
 * @param currency - Currency code / Valyuta kodu
 * @param locale - Locale for formatting / Formatlaşdırma üçün locale
 * @returns Formatted price string / Formatlanmış qiymət stringi
 *
 * @example
 * ```typescript
 * formatPrice(99.99, 'AZN'); // "99.99 ₼"
 * formatPrice(99.99, 'USD'); // "$99.99"
 * ```
 */
export declare function formatPrice(price: number, currency?: string, locale?: string): string;
/**
 * Format date to locale string
 * Tarixi locale stringə çevir
 *
 * @param date - Date to format / Formatlanacaq tarix
 * @param locale - Locale for formatting / Formatlaşdırma üçün locale
 * @param options - Intl.DateTimeFormat options / Intl.DateTimeFormat seçimləri
 * @returns Formatted date string / Formatlanmış tarix stringi
 */
export declare function formatDate(date: Date | string, locale?: string, options?: Intl.DateTimeFormatOptions): string;
/**
 * Format phone number
 * Telefon nömrəsini formatla
 *
 * @param phone - Phone number / Telefon nömrəsi
 * @returns Formatted phone number / Formatlanmış telefon nömrəsi
 *
 * @example
 * ```typescript
 * formatPhone('+994501234567'); // "+994 50 123 45 67"
 * ```
 */
export declare function formatPhone(phone: string): string;
/**
 * Format file size
 * Fayl ölçüsünü formatla
 *
 * @param bytes - Size in bytes / Bayt-da ölçü
 * @returns Formatted size string / Formatlanmış ölçü stringi
 *
 * @example
 * ```typescript
 * formatFileSize(1024); // "1 KB"
 * formatFileSize(1048576); // "1 MB"
 * ```
 */
export declare function formatFileSize(bytes: number): string;
//# sourceMappingURL=formatting.d.ts.map