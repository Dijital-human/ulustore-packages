/**
 * Prisma Client Factory / Prisma Client Fabrikası
 * 
 * Creates a singleton Prisma client instance for database operations.
 * Veritabanı əməliyyatları üçün singleton Prisma client instance yaradır.
 * 
 * @module @ulustore/db/client
 */

import { PrismaClient } from '@prisma/client';

/**
 * Type for global Prisma storage
 * Global Prisma saxlama üçün tip
 */
type GlobalWithPrisma = typeof globalThis & {
  prisma?: PrismaClient;
};

// Global variable to store Prisma client
// Prisma client-i saxlamaq üçün global dəyişən
const globalForPrisma = globalThis as GlobalWithPrisma;

/**
 * Prisma client options type
 * Prisma client seçimləri tipi
 */
export interface PrismaClientOptions {
  /** Log levels / Log səviyyələri */
  log?: ('query' | 'info' | 'warn' | 'error')[];
}

/**
 * Create or get Prisma client instance
 * Prisma client instance yarat və ya mövcud olanı qaytar
 * 
 * @param options - Client configuration options / Client konfiqurasiya seçimləri
 * @returns PrismaClient instance
 * 
 * @example
 * ```typescript
 * import { getPrismaClient } from '@ulustore/db';
 * 
 * const prisma = getPrismaClient();
 * const users = await prisma.user.findMany();
 * ```
 */
export function getPrismaClient(options?: PrismaClientOptions): PrismaClient {
  // Return existing instance if available
  // Mövcud instance varsa onu qaytar
  if (globalForPrisma.prisma) {
    return globalForPrisma.prisma;
  }

  // Default log configuration based on environment
  // Mühitə əsasən default log konfiqurasiyası
  const defaultLog: ('query' | 'info' | 'warn' | 'error')[] = 
    process.env.NODE_ENV === 'development'
      ? ['query', 'error', 'warn']
      : ['error'];

  // Create new Prisma client
  // Yeni Prisma client yarat
  const client = new PrismaClient({
    log: options?.log || defaultLog,
  });

  // Store in global for development to prevent multiple instances
  // Development-də çoxlu instance-ın qarşısını almaq üçün global-da saxla
  if (process.env.NODE_ENV !== 'production') {
    globalForPrisma.prisma = client;
  }

  return client;
}

/**
 * Create new Prisma client instance (alias for getPrismaClient)
 * Yeni Prisma client instance yarat (getPrismaClient üçün alias)
 * 
 * @param options - Client configuration options / Client konfiqurasiya seçimləri
 * @returns PrismaClient instance
 */
export function createPrismaClient(options?: PrismaClientOptions): PrismaClient {
  return getPrismaClient(options);
}

/**
 * Default Prisma client instance
 * Default Prisma client instance-ı
 * 
 * Use this for simple imports
 * Sadə import-lar üçün istifadə edin
 * 
 * @example
 * ```typescript
 * import { prisma } from '@ulustore/db';
 * 
 * const user = await prisma.user.findUnique({ where: { id } });
 * ```
 */
export const prisma = getPrismaClient();

/**
 * Database name constant
 * Veritabanı adı sabiti
 */
export const DATABASE_NAME = 'ulustore';
