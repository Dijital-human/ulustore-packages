/**
 * Pagination Type Definitions / Səhifələmə Tip Tərifləri
 * Pagination-related types
 * Səhifələmə ilə əlaqəli tiplər
 */

/**
 * Pagination parameters
 * Səhifələmə parametrləri
 */
export interface PaginationParams {
  /** Current page number (1-based) / Cari səhifə nömrəsi (1-dən başlayır) */
  page?: number;
  /** Items per page / Səhifədəki element sayı */
  limit?: number;
  /** Sort field / Sıralama sahəsi */
  sortBy?: string;
  /** Sort direction / Sıralama istiqaməti */
  sortOrder?: 'asc' | 'desc';
}

/**
 * Pagination metadata
 * Səhifələmə metadatası
 */
export interface PaginationMeta {
  /** Current page / Cari səhifə */
  currentPage: number;
  /** Items per page / Səhifədəki element sayı */
  perPage: number;
  /** Total items / Ümumi element sayı */
  totalItems: number;
  /** Total pages / Ümumi səhifə sayı */
  totalPages: number;
  /** Has previous page / Əvvəlki səhifə var? */
  hasPrevPage: boolean;
  /** Has next page / Növbəti səhifə var? */
  hasNextPage: boolean;
}

/**
 * Paginated result
 * Səhifələnmiş nəticə
 */
export interface PaginatedResult<T> {
  /** Data items / Data elementləri */
  data: T[];
  /** Pagination metadata / Səhifələmə metadatası */
  meta: PaginationMeta;
}

/**
 * Cursor-based pagination params
 * Cursor əsaslı səhifələmə parametrləri
 */
export interface CursorPaginationParams {
  /** Cursor for next page / Növbəti səhifə üçün cursor */
  cursor?: string;
  /** Items to fetch / Alınacaq element sayı */
  take?: number;
  /** Direction / İstiqamət */
  direction?: 'forward' | 'backward';
}

/**
 * Cursor-based pagination result
 * Cursor əsaslı səhifələmə nəticəsi
 */
export interface CursorPaginatedResult<T> {
  /** Data items / Data elementləri */
  data: T[];
  /** Next cursor / Növbəti cursor */
  nextCursor?: string;
  /** Previous cursor / Əvvəlki cursor */
  prevCursor?: string;
  /** Has more items / Daha çox element var? */
  hasMore: boolean;
}
