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
export const RATE_LIMITS = {
  /** Default rate limit / Default rate limit */
  DEFAULT: 100,
  /** Auth endpoints / Auth endpoint-ləri */
  AUTH: 10,
  /** Search endpoints / Axtarış endpoint-ləri */
  SEARCH: 30,
  /** Upload endpoints / Yükləmə endpoint-ləri */
  UPLOAD: 5,
  /** Admin endpoints / Admin endpoint-ləri */
  ADMIN: 50,
} as const;

/**
 * API routes
 * API route-ları
 */
export const API_ROUTES = {
  AUTH: {
    LOGIN: '/api/auth/login',
    LOGOUT: '/api/auth/logout',
    REGISTER: '/api/auth/register',
    FORGOT_PASSWORD: '/api/auth/forgot-password',
    RESET_PASSWORD: '/api/auth/reset-password',
    VERIFY_EMAIL: '/api/auth/verify-email',
  },
  USERS: '/api/users',
  PRODUCTS: '/api/products',
  ORDERS: '/api/orders',
  CATEGORIES: '/api/categories',
} as const;

/**
 * Error codes
 * Xəta kodları
 */
export const ERROR_CODES = {
  // Authentication errors / Autentifikasiya xətaları
  AUTH_INVALID_CREDENTIALS: 'AUTH_INVALID_CREDENTIALS',
  AUTH_USER_NOT_FOUND: 'AUTH_USER_NOT_FOUND',
  AUTH_EMAIL_NOT_VERIFIED: 'AUTH_EMAIL_NOT_VERIFIED',
  AUTH_ACCOUNT_DISABLED: 'AUTH_ACCOUNT_DISABLED',
  AUTH_TOKEN_EXPIRED: 'AUTH_TOKEN_EXPIRED',
  
  // Validation errors / Validation xətaları
  VALIDATION_REQUIRED: 'VALIDATION_REQUIRED',
  VALIDATION_INVALID_EMAIL: 'VALIDATION_INVALID_EMAIL',
  VALIDATION_INVALID_PHONE: 'VALIDATION_INVALID_PHONE',
  VALIDATION_PASSWORD_WEAK: 'VALIDATION_PASSWORD_WEAK',
  
  // Business errors / Biznes xətaları
  PRODUCT_NOT_FOUND: 'PRODUCT_NOT_FOUND',
  ORDER_NOT_FOUND: 'ORDER_NOT_FOUND',
  INSUFFICIENT_STOCK: 'INSUFFICIENT_STOCK',
  
  // System errors / Sistem xətaları
  INTERNAL_ERROR: 'INTERNAL_ERROR',
  DATABASE_ERROR: 'DATABASE_ERROR',
  NETWORK_ERROR: 'NETWORK_ERROR',
} as const;

/**
 * File upload limits
 * Fayl yükləmə limitləri
 */
export const FILE_LIMITS = {
  /** Maximum image size in bytes (5MB) / Maksimum şəkil ölçüsü (5MB) */
  MAX_IMAGE_SIZE: 5 * 1024 * 1024,
  /** Maximum document size in bytes (10MB) / Maksimum sənəd ölçüsü (10MB) */
  MAX_DOCUMENT_SIZE: 10 * 1024 * 1024,
  /** Allowed image types / İcazə verilən şəkil tipləri */
  ALLOWED_IMAGE_TYPES: ['image/jpeg', 'image/png', 'image/webp', 'image/gif'],
  /** Allowed document types / İcazə verilən sənəd tipləri */
  ALLOWED_DOCUMENT_TYPES: ['application/pdf', 'image/jpeg', 'image/png'],
} as const;

/**
 * Pagination defaults
 * Səhifələmə default-ları
 */
export const PAGINATION = {
  /** Default page size / Default səhifə ölçüsü */
  DEFAULT_PAGE_SIZE: 20,
  /** Maximum page size / Maksimum səhifə ölçüsü */
  MAX_PAGE_SIZE: 100,
  /** Default page number / Default səhifə nömrəsi */
  DEFAULT_PAGE: 1,
} as const;

/**
 * Cookie names
 * Cookie adları
 */
export const COOKIES = {
  SESSION: 'ulustore-session',
  LOCALE: 'ulustore-locale',
  THEME: 'ulustore-theme',
  CART: 'ulustore-cart',
} as const;

/**
 * Local storage keys
 * Local storage açarları
 */
export const STORAGE_KEYS = {
  AUTH_TOKEN: 'ulustore-auth-token',
  USER: 'ulustore-user',
  CART: 'ulustore-cart',
  RECENT_SEARCHES: 'ulustore-recent-searches',
  RECENTLY_VIEWED: 'ulustore-recently-viewed',
} as const;
