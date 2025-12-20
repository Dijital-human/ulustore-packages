/**
 * @ulustore/constants - Constant Values
 * ulustore.com üçün sabit dəyərlər
 *
 * @packageDocumentation
 */
/**
 * Rate limits for API endpoints
 * API endpoint-ləri üçün rate limit-lər
 */
export declare const RATE_LIMITS: {
    /** Default rate limit / Default rate limit */
    readonly DEFAULT: 100;
    /** Auth endpoints / Auth endpoint-ləri */
    readonly AUTH: 10;
    /** Search endpoints / Axtarış endpoint-ləri */
    readonly SEARCH: 30;
    /** Upload endpoints / Yükləmə endpoint-ləri */
    readonly UPLOAD: 5;
    /** Admin endpoints / Admin endpoint-ləri */
    readonly ADMIN: 50;
};
/**
 * API routes
 * API route-ları
 */
export declare const API_ROUTES: {
    readonly AUTH: {
        readonly LOGIN: "/api/auth/login";
        readonly LOGOUT: "/api/auth/logout";
        readonly REGISTER: "/api/auth/register";
        readonly FORGOT_PASSWORD: "/api/auth/forgot-password";
        readonly RESET_PASSWORD: "/api/auth/reset-password";
        readonly VERIFY_EMAIL: "/api/auth/verify-email";
    };
    readonly USERS: "/api/users";
    readonly PRODUCTS: "/api/products";
    readonly ORDERS: "/api/orders";
    readonly CATEGORIES: "/api/categories";
};
/**
 * Error codes
 * Xəta kodları
 */
export declare const ERROR_CODES: {
    readonly AUTH_INVALID_CREDENTIALS: "AUTH_INVALID_CREDENTIALS";
    readonly AUTH_USER_NOT_FOUND: "AUTH_USER_NOT_FOUND";
    readonly AUTH_EMAIL_NOT_VERIFIED: "AUTH_EMAIL_NOT_VERIFIED";
    readonly AUTH_ACCOUNT_DISABLED: "AUTH_ACCOUNT_DISABLED";
    readonly AUTH_TOKEN_EXPIRED: "AUTH_TOKEN_EXPIRED";
    readonly VALIDATION_REQUIRED: "VALIDATION_REQUIRED";
    readonly VALIDATION_INVALID_EMAIL: "VALIDATION_INVALID_EMAIL";
    readonly VALIDATION_INVALID_PHONE: "VALIDATION_INVALID_PHONE";
    readonly VALIDATION_PASSWORD_WEAK: "VALIDATION_PASSWORD_WEAK";
    readonly PRODUCT_NOT_FOUND: "PRODUCT_NOT_FOUND";
    readonly ORDER_NOT_FOUND: "ORDER_NOT_FOUND";
    readonly INSUFFICIENT_STOCK: "INSUFFICIENT_STOCK";
    readonly INTERNAL_ERROR: "INTERNAL_ERROR";
    readonly DATABASE_ERROR: "DATABASE_ERROR";
    readonly NETWORK_ERROR: "NETWORK_ERROR";
};
/**
 * File upload limits
 * Fayl yükləmə limitləri
 */
export declare const FILE_LIMITS: {
    /** Maximum image size in bytes (5MB) / Maksimum şəkil ölçüsü (5MB) */
    readonly MAX_IMAGE_SIZE: number;
    /** Maximum document size in bytes (10MB) / Maksimum sənəd ölçüsü (10MB) */
    readonly MAX_DOCUMENT_SIZE: number;
    /** Allowed image types / İcazə verilən şəkil tipləri */
    readonly ALLOWED_IMAGE_TYPES: readonly ["image/jpeg", "image/png", "image/webp", "image/gif"];
    /** Allowed document types / İcazə verilən sənəd tipləri */
    readonly ALLOWED_DOCUMENT_TYPES: readonly ["application/pdf", "image/jpeg", "image/png"];
};
/**
 * Pagination defaults
 * Səhifələmə default-ları
 */
export declare const PAGINATION: {
    /** Default page size / Default səhifə ölçüsü */
    readonly DEFAULT_PAGE_SIZE: 20;
    /** Maximum page size / Maksimum səhifə ölçüsü */
    readonly MAX_PAGE_SIZE: 100;
    /** Default page number / Default səhifə nömrəsi */
    readonly DEFAULT_PAGE: 1;
};
/**
 * Cookie names
 * Cookie adları
 */
export declare const COOKIES: {
    readonly SESSION: "ulustore-session";
    readonly LOCALE: "ulustore-locale";
    readonly THEME: "ulustore-theme";
    readonly CART: "ulustore-cart";
};
/**
 * Local storage keys
 * Local storage açarları
 */
export declare const STORAGE_KEYS: {
    readonly AUTH_TOKEN: "ulustore-auth-token";
    readonly USER: "ulustore-user";
    readonly CART: "ulustore-cart";
    readonly RECENT_SEARCHES: "ulustore-recent-searches";
    readonly RECENTLY_VIEWED: "ulustore-recently-viewed";
};
