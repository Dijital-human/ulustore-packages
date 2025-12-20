/**
 * Email Types / Email Tipləri
 * Type definitions for email templates
 * Email şablonları üçün tip tərifləri
 */
/**
 * Email data
 * Email datası
 */
export interface EmailData {
    /** Recipient email / Alıcı emaili */
    to: string;
    /** Email subject / Email mövzusu */
    subject: string;
    /** HTML content / HTML məzmunu */
    html: string;
    /** Plain text content / Sadə mətn məzmunu */
    text?: string;
}
/**
 * Base template data
 * Əsas şablon datası
 */
export interface BaseTemplateData {
    /** Company name / Şirkət adı */
    companyName?: string;
    /** Company logo URL / Şirkət logosu URL */
    logoUrl?: string;
    /** Support email / Dəstək emaili */
    supportEmail?: string;
    /** Website URL / Veb sayt URL */
    websiteUrl?: string;
}
/**
 * Order confirmation data
 * Sifariş təsdiqi datası
 */
export interface OrderConfirmationData extends BaseTemplateData {
    /** Customer name / Müştəri adı */
    customerName: string;
    /** Order ID / Sifariş ID */
    orderId: string;
    /** Order date / Sifariş tarixi */
    orderDate: string;
    /** Order items / Sifariş məhsulları */
    items: Array<{
        name: string;
        quantity: number;
        price: number;
    }>;
    /** Total amount / Ümumi məbləğ */
    total: number;
    /** Currency / Valyuta */
    currency?: string;
}
/**
 * Password reset data
 * Şifrə sıfırlama datası
 */
export interface PasswordResetData extends BaseTemplateData {
    /** User name / İstifadəçi adı */
    userName: string;
    /** Reset link / Sıfırlama linki */
    resetLink: string;
    /** Link expiry time / Link bitmə vaxtı */
    expiryTime?: string;
}
/**
 * Welcome email data
 * Xoş gəldin emaili datası
 */
export interface WelcomeEmailData extends BaseTemplateData {
    /** User name / İstifadəçi adı */
    userName: string;
    /** Verification link (optional) / Təsdiq linki (opsional) */
    verificationLink?: string;
}
