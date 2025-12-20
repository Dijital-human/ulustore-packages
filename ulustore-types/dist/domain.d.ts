/**
 * Domain Type Definitions / Domain Tip Tərifləri
 * Core business domain types
 * Əsas biznes domain tipləri
 */
/**
 * Product status
 * Məhsul statusu
 */
export type ProductStatus = 'DRAFT' | 'PENDING' | 'ACTIVE' | 'INACTIVE' | 'DELETED';
/**
 * Order status
 * Sifariş statusu
 */
export type OrderStatus = 'PENDING' | 'CONFIRMED' | 'PROCESSING' | 'SHIPPED' | 'DELIVERED' | 'CANCELLED' | 'REFUNDED';
/**
 * Payment status
 * Ödəniş statusu
 */
export type PaymentStatus = 'PENDING' | 'COMPLETED' | 'FAILED' | 'REFUNDED';
/**
 * Payment method
 * Ödəniş metodu
 */
export type PaymentMethod = 'CARD' | 'CASH' | 'BANK_TRANSFER' | 'WALLET';
/**
 * Business type for sellers
 * Satıcılar üçün biznes növü
 */
export type BusinessType = 'RETAIL' | 'WHOLESALE' | 'ONLINE' | 'MANUFACTURER';
/**
 * Delivery status
 * Çatdırılma statusu
 */
export type DeliveryStatus = 'PENDING' | 'ASSIGNED' | 'PICKED_UP' | 'IN_TRANSIT' | 'DELIVERED' | 'FAILED';
/**
 * Currency code
 * Valyuta kodu
 */
export type CurrencyCode = 'AZN' | 'USD' | 'EUR' | 'TRY' | 'RUB';
/**
 * Language code
 * Dil kodu
 */
export type LanguageCode = 'az' | 'en' | 'ru' | 'tr';
/**
 * Sort direction
 * Sıralama istiqaməti
 */
export type SortDirection = 'asc' | 'desc';
/**
 * Date range
 * Tarix aralığı
 */
export interface DateRange {
    /** Start date / Başlanğıc tarixi */
    from: Date | string;
    /** End date / Bitmə tarixi */
    to: Date | string;
}
/**
 * Price range
 * Qiymət aralığı
 */
export interface PriceRange {
    /** Minimum price / Minimum qiymət */
    min?: number;
    /** Maximum price / Maksimum qiymət */
    max?: number;
}
//# sourceMappingURL=domain.d.ts.map