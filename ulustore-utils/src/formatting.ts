/**
 * Formatting Utilities / Formatlaşdırma Utility-ləri
 * Functions for formatting data
 * Data formatlaşdırma funksiyaları
 */

/**
 * Format price with currency
 * Qiyməti valyuta ilə formatla
 * 
 * @param price - Price value / Qiymət dəyəri
 * @param currency - Currency code / Valyuta kodu
 * @param locale - Locale for formatting / Formatlaşdırma üçün locale
 * @returns Formatted price string / Formatlanmış qiymət stringi
 * 
 * @example
 * ```typescript
 * formatPrice(99.99, 'AZN'); // "99.99 ₼"
 * formatPrice(99.99, 'USD'); // "$99.99"
 * ```
 */
export function formatPrice(
  price: number,
  currency: string = 'AZN',
  locale: string = 'az-AZ'
): string {
  const symbols: Record<string, string> = {
    AZN: '₼',
    USD: '$',
    EUR: '€',
    TRY: '₺',
    RUB: '₽',
  };

  const formatted = new Intl.NumberFormat(locale, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(price);

  const symbol = symbols[currency] || currency;
  
  if (currency === 'USD' || currency === 'EUR') {
    return `${symbol}${formatted}`;
  }
  
  return `${formatted} ${symbol}`;
}

/**
 * Format date to locale string
 * Tarixi locale stringə çevir
 * 
 * @param date - Date to format / Formatlanacaq tarix
 * @param locale - Locale for formatting / Formatlaşdırma üçün locale
 * @param options - Intl.DateTimeFormat options / Intl.DateTimeFormat seçimləri
 * @returns Formatted date string / Formatlanmış tarix stringi
 */
export function formatDate(
  date: Date | string,
  locale: string = 'az-AZ',
  options?: Intl.DateTimeFormatOptions
): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  
  const defaultOptions: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    ...options,
  };
  
  return new Intl.DateTimeFormat(locale, defaultOptions).format(d);
}

/**
 * Format phone number
 * Telefon nömrəsini formatla
 * 
 * @param phone - Phone number / Telefon nömrəsi
 * @returns Formatted phone number / Formatlanmış telefon nömrəsi
 * 
 * @example
 * ```typescript
 * formatPhone('+994501234567'); // "+994 50 123 45 67"
 * ```
 */
export function formatPhone(phone: string): string {
  const digits = phone.replace(/\D/g, '');
  
  if (digits.startsWith('994') && digits.length === 12) {
    return `+${digits.slice(0, 3)} ${digits.slice(3, 5)} ${digits.slice(5, 8)} ${digits.slice(8, 10)} ${digits.slice(10)}`;
  }
  
  return phone;
}

/**
 * Format file size
 * Fayl ölçüsünü formatla
 * 
 * @param bytes - Size in bytes / Bayt-da ölçü
 * @returns Formatted size string / Formatlanmış ölçü stringi
 * 
 * @example
 * ```typescript
 * formatFileSize(1024); // "1 KB"
 * formatFileSize(1048576); // "1 MB"
 * ```
 */
export function formatFileSize(bytes: number): string {
  const units = ['B', 'KB', 'MB', 'GB', 'TB'];
  let unitIndex = 0;
  let size = bytes;
  
  while (size >= 1024 && unitIndex < units.length - 1) {
    size /= 1024;
    unitIndex++;
  }
  
  return `${size.toFixed(unitIndex === 0 ? 0 : 2)} ${units[unitIndex]}`;
}
