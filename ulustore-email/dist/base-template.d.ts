/**
 * Base Email Template / Əsas Email Şablonu
 * Base template for all emails
 * Bütün emaillər üçün əsas şablon
 */
import type { BaseTemplateData } from './types';
/**
 * Generate base email template wrapper
 * Əsas email şablon wrapper-ini yarat
 *
 * @param content - Email content / Email məzmunu
 * @param data - Template data / Şablon datası
 * @returns HTML string / HTML stringi
 */
export declare function baseTemplate(content: string, data?: BaseTemplateData): string;
/**
 * Generate order confirmation email
 * Sifariş təsdiqi emaili yarat
 */
export declare function orderConfirmationTemplate(data: {
    customerName: string;
    orderId: string;
    total: number;
    currency?: string;
}): string;
/**
 * Generate password reset email
 * Şifrə sıfırlama emaili yarat
 */
export declare function passwordResetTemplate(data: {
    userName: string;
    resetLink: string;
}): string;
/**
 * Generate welcome email
 * Xoş gəldin emaili yarat
 */
export declare function welcomeTemplate(data: {
    userName: string;
    verificationLink?: string;
}): string;
