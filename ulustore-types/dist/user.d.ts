/**
 * User Type Definitions / İstifadəçi Tip Tərifləri
 * User-related types
 * İstifadəçi ilə əlaqəli tiplər
 */
/**
 * User roles
 * İstifadəçi rolları
 */
export type UserRole = 'ADMIN' | 'SELLER' | 'USER_SELLER' | 'CUSTOMER' | 'COURIER';
/**
 * Admin roles
 * Admin rolları
 */
export type AdminRole = 'SUPER_ADMIN' | 'SYSTEM_ADMIN' | 'CONTENT_ADMIN' | 'SUPPORT_ADMIN';
/**
 * Seller type
 * Satıcı növü
 */
export type SellerType = 'SELLER' | 'USER_SELLER' | 'INDIVIDUAL';
/**
 * User session
 * İstifadəçi sessiyası
 */
export interface UserSession {
    /** User ID / İstifadəçi ID */
    id: string;
    /** User email / İstifadəçi emaili */
    email: string;
    /** User name / İstifadəçi adı */
    name?: string;
    /** User role / İstifadəçi rolu */
    role: UserRole;
    /** Admin role (if applicable) / Admin rolu (varsa) */
    adminRole?: AdminRole;
    /** Profile image / Profil şəkli */
    image?: string;
    /** Is email verified / Email təsdiqlənib? */
    emailVerified?: boolean;
}
/**
 * Login credentials
 * Giriş məlumatları
 */
export interface LoginCredentials {
    /** User email / İstifadəçi emaili */
    email: string;
    /** User password / İstifadəçi şifrəsi */
    password: string;
    /** Remember me / Məni xatırla */
    rememberMe?: boolean;
}
/**
 * Registration data
 * Qeydiyyat datası
 */
export interface RegistrationData {
    /** User name / İstifadəçi adı */
    name: string;
    /** User email / İstifadəçi emaili */
    email: string;
    /** User password / İstifadəçi şifrəsi */
    password: string;
    /** Confirm password / Şifrəni təsdiqlə */
    confirmPassword: string;
    /** Phone number / Telefon nömrəsi */
    phone?: string;
}
/**
 * User profile
 * İstifadəçi profili
 */
export interface UserProfile {
    /** User ID / İstifadəçi ID */
    id: string;
    /** User name / İstifadəçi adı */
    name: string;
    /** User email / İstifadəçi emaili */
    email: string;
    /** Phone number / Telefon nömrəsi */
    phone?: string;
    /** Profile image / Profil şəkli */
    image?: string;
    /** User role / İstifadəçi rolu */
    role: UserRole;
    /** Is active / Aktivdir? */
    isActive: boolean;
    /** Created at / Yaradılma tarixi */
    createdAt: Date | string;
}
//# sourceMappingURL=user.d.ts.map