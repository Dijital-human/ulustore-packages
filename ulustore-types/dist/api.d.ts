/**
 * API Type Definitions / API Tip Tərifləri
 * Common API response and request types
 * Ümumi API cavab və sorğu tipləri
 */
/**
 * Standard API response wrapper
 * Standart API cavab wrapper-i
 */
export interface ApiResponse<T = unknown> {
    /** Success status / Uğur statusu */
    success: boolean;
    /** Response data / Cavab datası */
    data?: T;
    /** Error message / Xəta mesajı */
    error?: string;
    /** Error message in Azerbaijani / Azərbaycan dilində xəta mesajı */
    errorAz?: string;
    /** Additional message / Əlavə mesaj */
    message?: string;
    /** Message in Azerbaijani / Azərbaycan dilində mesaj */
    messageAz?: string;
}
/**
 * API error response
 * API xəta cavabı
 */
export interface ApiError {
    /** Error code / Xəta kodu */
    code: string;
    /** Error message / Xəta mesajı */
    message: string;
    /** Error message in Azerbaijani / Azərbaycan dilində xəta mesajı */
    messageAz?: string;
    /** Field-specific errors / Sahəyə xas xətalar */
    details?: Record<string, string>;
}
/**
 * HTTP method types
 * HTTP metod tipləri
 */
export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
/**
 * Request options
 * Sorğu seçimləri
 */
export interface RequestOptions {
    /** HTTP method / HTTP metodu */
    method?: HttpMethod;
    /** Request headers / Sorğu headers */
    headers?: Record<string, string>;
    /** Request body / Sorğu body */
    body?: unknown;
    /** Request timeout in ms / Sorğu timeout (ms) */
    timeout?: number;
}
//# sourceMappingURL=api.d.ts.map