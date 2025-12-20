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
export function hasRole(userRole: UserRole, requiredRoles: UserRole[]): boolean {
  return requiredRoles.includes(userRole);
}

/**
 * Check if user is admin
 * İstifadəçinin admin olub-olmadığını yoxla
 * 
 * @param user - Authenticated user / Autentifikasiya olunmuş istifadəçi
 * @returns Whether user is admin / İstifadəçi admindir ya yox
 */
export function isAdmin(user: AuthenticatedUser | null | undefined): boolean {
  return user?.role === 'ADMIN';
}

/**
 * Check if user is seller
 * İstifadəçinin satıcı olub-olmadığını yoxla
 * 
 * @param user - Authenticated user / Autentifikasiya olunmuş istifadəçi
 * @returns Whether user is seller / İstifadəçi satıcıdır ya yox
 */
export function isSeller(user: AuthenticatedUser | null | undefined): boolean {
  return user?.role === 'SELLER' || user?.role === 'USER_SELLER';
}

/**
 * Check if user is courier
 * İstifadəçinin kuryer olub-olmadığını yoxla
 * 
 * @param user - Authenticated user / Autentifikasiya olunmuş istifadəçi
 * @returns Whether user is courier / İstifadəçi kuryerdir ya yox
 */
export function isCourier(user: AuthenticatedUser | null | undefined): boolean {
  return user?.role === 'COURIER';
}

/**
 * Check if user is customer
 * İstifadəçinin müştəri olub-olmadığını yoxla
 * 
 * @param user - Authenticated user / Autentifikasiya olunmuş istifadəçi
 * @returns Whether user is customer / İstifadəçi müştəridir ya yox
 */
export function isCustomer(user: AuthenticatedUser | null | undefined): boolean {
  return user?.role === 'CUSTOMER';
}

/**
 * Validate auth options
 * Auth seçimlərini yoxla
 * 
 * @param user - Authenticated user / Autentifikasiya olunmuş istifadəçi
 * @param options - Auth middleware options / Auth middleware seçimləri
 * @returns Validation result / Yoxlama nəticəsi
 */
export function validateAuth(
  user: AuthenticatedUser | null | undefined,
  options: AuthMiddlewareOptions = {}
): { isValid: boolean; error?: string } {
  // If optional and no user, it's valid
  // Əgər optional-dır və istifadəçi yoxdur, düzgündür
  if (options.optional && !user) {
    return { isValid: true };
  }
  
  // If no user, not authenticated
  // Əgər istifadəçi yoxdur, autentifikasiya olunmayıb
  if (!user) {
    return { 
      isValid: false, 
      error: 'Autentifikasiya tələb olunur / Authentication required' 
    };
  }
  
  // If roles specified, check if user has required role
  // Əgər rollar göstərilibsə, istifadəçinin tələb olunan rola sahib olub-olmadığını yoxla
  if (options.roles && options.roles.length > 0) {
    if (!hasRole(user.role, options.roles)) {
      return { 
        isValid: false, 
        error: 'Bu əməliyyat üçün icazəniz yoxdur / You do not have permission for this action' 
      };
    }
  }
  
  return { isValid: true };
}
