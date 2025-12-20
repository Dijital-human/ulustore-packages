"use strict";
/**
 * Validation Utilities / Validation Utility-ləri
 * Functions for validating data
 * Data validation funksiyaları
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateEmail = validateEmail;
exports.validatePhone = validatePhone;
exports.validatePassword = validatePassword;
exports.isEmpty = isEmpty;
exports.validateUrl = validateUrl;
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
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
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
function validatePhone(phone) {
    const digits = phone.replace(/\D/g, '');
    return digits.length >= 10 && digits.length <= 15;
}
/**
 * Validate password strength
 * Şifrə gücünü yoxla
 *
 * @param password - Password to validate / Yoxlanacaq şifrə
 * @returns Validation result / Yoxlama nəticəsi
 */
function validatePassword(password) {
    const errors = [];
    let score = 0;
    if (password.length >= 8)
        score++;
    else
        errors.push('Minimum 8 simvol / Minimum 8 characters');
    if (/[A-Z]/.test(password))
        score++;
    else
        errors.push('Böyük hərf lazımdır / Uppercase required');
    if (/[a-z]/.test(password))
        score++;
    else
        errors.push('Kiçik hərf lazımdır / Lowercase required');
    if (/[0-9]/.test(password))
        score++;
    else
        errors.push('Rəqəm lazımdır / Number required');
    if (/[!@#$%^&*(),.?":{}|<>]/.test(password))
        score++;
    else
        errors.push('Xüsusi simvol lazımdır / Special character required');
    return {
        isValid: score >= 4,
        score,
        errors,
    };
}
/**
 * Check if value is empty
 * Dəyərin boş olub-olmadığını yoxla
 *
 * @param value - Value to check / Yoxlanacaq dəyər
 * @returns Whether value is empty / Dəyər boşdur ya yox
 */
function isEmpty(value) {
    if (value === null || value === undefined)
        return true;
    if (typeof value === 'string')
        return value.trim().length === 0;
    if (Array.isArray(value))
        return value.length === 0;
    if (typeof value === 'object')
        return Object.keys(value).length === 0;
    return false;
}
/**
 * Validate URL
 * URL-i yoxla
 *
 * @param url - URL to validate / Yoxlanacaq URL
 * @returns Whether URL is valid / URL düzgündür ya yox
 */
function validateUrl(url) {
    try {
        new URL(url);
        return true;
    }
    catch {
        return false;
    }
}
