/**
 * @ulustore/i18n - Internationalization
 * ulustore.com üçün çoxdillilik
 *
 * @packageDocumentation
 */
/**
 * Supported locales
 * Dəstəklənən dillər
 */
export declare const SUPPORTED_LOCALES: readonly ["az", "en", "ru", "tr"];
export type SupportedLocale = typeof SUPPORTED_LOCALES[number];
/**
 * Default locale
 * Default dil
 */
export declare const DEFAULT_LOCALE: SupportedLocale;
/**
 * Locale display names
 * Dil göstərmə adları
 */
export declare const LOCALE_NAMES: Record<SupportedLocale, string>;
/**
 * Common translations
 * Ümumi tərcümələr
 */
export declare const commonTranslations: Record<SupportedLocale, Record<string, string>>;
/**
 * Get translation
 * Tərcümə al
 *
 * @param key - Translation key / Tərcümə açarı
 * @param locale - Locale / Dil
 * @returns Translated string / Tərcümə olunmuş string
 */
export declare function t(key: string, locale?: SupportedLocale): string;
/**
 * Check if locale is supported
 * Dilin dəstəkləndiyini yoxla
 *
 * @param locale - Locale to check / Yoxlanacaq dil
 * @returns Whether locale is supported / Dil dəstəklənir ya yox
 */
export declare function isValidLocale(locale: string): locale is SupportedLocale;
/**
 * Format date for locale
 * Tarixni dil üçün formatla
 *
 * @param date - Date to format / Formatlanacaq tarix
 * @param locale - Locale / Dil
 * @returns Formatted date / Formatlanmış tarix
 */
export declare function formatDateLocale(date: Date | string, locale?: SupportedLocale): string;
