/**
 * @ulustore/db - Ortaq Database Paketi / Shared Database Package
 * 
 * This package provides shared database utilities for all ulustore.com projects.
 * Bu paket bütün ulustore.com proyektləri üçün ortaq veritabanı utility-ləri təmin edir.
 * 
 * @packageDocumentation
 * 
 * @example
 * ```typescript
 * // Import Prisma client / Prisma client import et
 * import { prisma, getPrismaClient } from '@ulustore/db';
 * 
 * // Import utilities / Utility-ləri import et
 * import { healthCheck, testDatabaseConnection } from '@ulustore/db';
 * 
 * // Import Prisma types / Prisma type-larını import et
 * import type { User, Product, Order } from '@ulustore/db';
 * ```
 */

// Export client functions / Client funksiyalarını export et
export { 
  prisma, 
  getPrismaClient, 
  createPrismaClient,
  DATABASE_NAME,
  type PrismaClientOptions 
} from './client';

// Export connection utilities / Bağlantı utility-lərini export et
export { 
  testDatabaseConnection, 
  reconnectDatabase, 
  disconnectDatabase,
  type Logger 
} from './connection';

// Export health check utilities / Sağlamlıq yoxlama utility-lərini export et
export { 
  healthCheck,
  pingDatabase,
  type HealthCheckResult, 
  type HealthCheckOptions 
} from './health';

// Re-export all Prisma types / Bütün Prisma type-larını yenidən export et
export * from '@prisma/client';
