/**
 * Validation Utilities / Validation Utility-ləri
 * Functions for validating data
 * Data validation funksiyaları
 */
/**
 * Validate email address
 * Email ünvanını yoxla
 *
 * @param email - Email address to validate / Yoxlanacaq email ünvanı
 * @returns Whether email is valid / Email düzgündür ya yox
 *
 * @example
 * ```typescript
 * validateEmail('user@example.com'); // true
 * validateEmail('invalid'); // false
 * ```
 */
export declare function validateEmail(email: string): boolean;
/**
 * Validate phone number
 * Telefon nömrəsini yoxla
 *
 * @param phone - Phone number to validate / Yoxlanacaq telefon nömrəsi
 * @returns Whether phone is valid / Telefon düzgündür ya yox
 *
 * @example
 * ```typescript
 * validatePhone('+994501234567'); // true
 * validatePhone('123'); // false
 * ```
 */
export declare function validatePhone(phone: string): boolean;
/**
 * Validate password strength
 * Şifrə gücünü yoxla
 *
 * @param password - Password to validate / Yoxlanacaq şifrə
 * @returns Validation result / Yoxlama nəticəsi
 */
export declare function validatePassword(password: string): {
    isValid: boolean;
    score: number;
    errors: string[];
};
/**
 * Check if value is empty
 * Dəyərin boş olub-olmadığını yoxla
 *
 * @param value - Value to check / Yoxlanacaq dəyər
 * @returns Whether value is empty / Dəyər boşdur ya yox
 */
export declare function isEmpty(value: unknown): boolean;
/**
 * Validate URL
 * URL-i yoxla
 *
 * @param url - URL to validate / Yoxlanacaq URL
 * @returns Whether URL is valid / URL düzgündür ya yox
 */
export declare function validateUrl(url: string): boolean;
//# sourceMappingURL=validation.d.ts.map