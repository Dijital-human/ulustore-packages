/**
 * Middleware Types / Middleware Tipləri
 * Type definitions for middlewares
 * Middleware-lər üçün tip tərifləri
 */
/**
 * User role type
 * İstifadəçi rol tipi
 */
export type UserRole = 'ADMIN' | 'SELLER' | 'USER_SELLER' | 'CUSTOMER' | 'COURIER';
/**
 * Authenticated user
 * Autentifikasiya olunmuş istifadəçi
 */
export interface AuthenticatedUser {
    /** User ID / İstifadəçi ID */
    id: string;
    /** User email / İstifadəçi emaili */
    email: string;
    /** User role / İstifadəçi rolu */
    role: UserRole;
    /** User name / İstifadəçi adı */
    name?: string;
}
/**
 * Auth middleware options
 * Auth middleware seçimləri
 */
export interface AuthMiddlewareOptions {
    /** Required roles / Tələb olunan rollar */
    roles?: UserRole[];
    /** Allow unauthenticated / Autentifikasiya olmadan icazə ver */
    optional?: boolean;
}
/**
 * Rate limit options
 * Rate limit seçimləri
 */
export interface RateLimitOptions {
    /** Maximum requests / Maksimum sorğu sayı */
    max: number;
    /** Window in milliseconds / Pəncərə (ms) */
    windowMs: number;
    /** Custom key generator / Xüsusi key generator */
    keyGenerator?: (req: unknown) => string;
}
