/**
 * Auth Middleware / Auth Middleware
 * Authentication and authorization middleware functions
 * Autentifikasiya və avtorizasiya middleware funksiyaları
 */
import type { AuthenticatedUser, AuthMiddlewareOptions, UserRole } from './types';
/**
 * Check if user has required role
 * İstifadəçinin tələb olunan rola sahib olub-olmadığını yoxla
 *
 * @param userRole - User's role / İstifadəçinin rolu
 * @param requiredRoles - Required roles / Tələb olunan rollar
 * @returns Whether user has required role / İstifadəçi tələb olunan rola sahibdir ya yox
 */
export declare function hasRole(userRole: UserRole, requiredRoles: UserRole[]): boolean;
/**
 * Check if user is admin
 * İstifadəçinin admin olub-olmadığını yoxla
 *
 * @param user - Authenticated user / Autentifikasiya olunmuş istifadəçi
 * @returns Whether user is admin / İstifadəçi admindir ya yox
 */
export declare function isAdmin(user: AuthenticatedUser | null | undefined): boolean;
/**
 * Check if user is seller
 * İstifadəçinin satıcı olub-olmadığını yoxla
 *
 * @param user - Authenticated user / Autentifikasiya olunmuş istifadəçi
 * @returns Whether user is seller / İstifadəçi satıcıdır ya yox
 */
export declare function isSeller(user: AuthenticatedUser | null | undefined): boolean;
/**
 * Check if user is courier
 * İstifadəçinin kuryer olub-olmadığını yoxla
 *
 * @param user - Authenticated user / Autentifikasiya olunmuş istifadəçi
 * @returns Whether user is courier / İstifadəçi kuryerdir ya yox
 */
export declare function isCourier(user: AuthenticatedUser | null | undefined): boolean;
/**
 * Check if user is customer
 * İstifadəçinin müştəri olub-olmadığını yoxla
 *
 * @param user - Authenticated user / Autentifikasiya olunmuş istifadəçi
 * @returns Whether user is customer / İstifadəçi müştəridir ya yox
 */
export declare function isCustomer(user: AuthenticatedUser | null | undefined): boolean;
/**
 * Validate auth options
 * Auth seçimlərini yoxla
 *
 * @param user - Authenticated user / Autentifikasiya olunmuş istifadəçi
 * @param options - Auth middleware options / Auth middleware seçimləri
 * @returns Validation result / Yoxlama nəticəsi
 */
export declare function validateAuth(user: AuthenticatedUser | null | undefined, options?: AuthMiddlewareOptions): {
    isValid: boolean;
    error?: string;
};
