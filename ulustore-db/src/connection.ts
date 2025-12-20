/**
 * Database Connection Utilities / Veritabanı Bağlantı Utility-ləri
 * 
 * Functions for managing database connections.
 * Veritabanı bağlantılarını idarə etmək üçün funksiyalar.
 * 
 * @module @ulustore/db/connection
 */

import { PrismaClient } from '@prisma/client';

/**
 * Logger interface
 * Logger interfeysi
 */
export interface Logger {
  info?: (message: string, ...args: unknown[]) => void;
  error?: (message: string, ...args: unknown[]) => void;
  warn?: (message: string, ...args: unknown[]) => void;
}

/**
 * Test database connection
 * Veritabanı bağlantısını test et
 * 
 * Attempts to connect to the database and returns success status.
 * Veritabanına bağlanmağa cəhd edir və uğur statusunu qaytarır.
 * 
 * @param prisma - Prisma client instance
 * @param logger - Optional logger / İstəyə bağlı logger
 * @returns Promise<boolean> - Connection success / Bağlantı uğuru
 * 
 * @example
 * ```typescript
 * import { prisma, testDatabaseConnection } from '@ulustore/db';
 * 
 * const isConnected = await testDatabaseConnection(prisma);
 * if (!isConnected) {
 *   console.error('Database connection failed!');
 * }
 * ```
 */
export async function testDatabaseConnection(
  prisma: PrismaClient,
  logger?: Logger
): Promise<boolean> {
  try {
    await prisma.$connect();
    
    const message = '✅ Database connected successfully / Veritabanı uğurla bağlandı';
    logger?.info?.(message) ?? console.log(message);
    
    return true;
  } catch (error) {
    const message = '❌ Database connection failed / Veritabanı bağlantısı uğursuz oldu';
    logger?.error?.(message, error) ?? console.error(message, error);
    
    return false;
  }
}

/**
 * Reconnect to database with retry logic
 * Retry məntiqı ilə veritabanına yenidən bağlan
 * 
 * Uses exponential backoff for retries.
 * Retry-lər üçün eksponensial backoff istifadə edir.
 * 
 * @param prisma - Prisma client instance
 * @param maxRetries - Maximum retry attempts / Maksimum retry cəhdləri
 * @param logger - Optional logger / İstəyə bağlı logger
 * @returns Promise<boolean> - Reconnection success / Yenidən bağlantı uğuru
 * 
 * @example
 * ```typescript
 * import { prisma, reconnectDatabase } from '@ulustore/db';
 * 
 * const reconnected = await reconnectDatabase(prisma, 5);
 * ```
 */
export async function reconnectDatabase(
  prisma: PrismaClient,
  maxRetries: number = 3,
  logger?: Logger
): Promise<boolean> {
  for (let attempt = 0; attempt < maxRetries; attempt++) {
    try {
      // Disconnect first, then reconnect
      // Əvvəlcə bağlantını kəs, sonra yenidən bağlan
      await prisma.$disconnect();
      await prisma.$connect();
      
      const message = `✅ Database reconnected (attempt ${attempt + 1}) / Veritabanı yenidən bağlandı`;
      logger?.info?.(message) ?? console.log(message);
      
      return true;
    } catch (error) {
      const message = `❌ Reconnection failed (${attempt + 1}/${maxRetries})`;
      logger?.error?.(message, error) ?? console.error(message, error);
      
      // Exponential backoff: 1s, 2s, 4s...
      // Eksponensial backoff: 1s, 2s, 4s...
      if (attempt < maxRetries - 1) {
        const delay = Math.pow(2, attempt) * 1000;
        await new Promise(resolve => setTimeout(resolve, delay));
      }
    }
  }
  
  return false;
}

/**
 * Gracefully disconnect from database
 * Veritabanından zərif şəkildə ayrıl
 * 
 * Should be called when shutting down the application.
 * Tətbiq bağlanarkən çağırılmalıdır.
 * 
 * @param prisma - Prisma client instance
 * @param logger - Optional logger / İstəyə bağlı logger
 * 
 * @example
 * ```typescript
 * import { prisma, disconnectDatabase } from '@ulustore/db';
 * 
 * process.on('SIGTERM', async () => {
 *   await disconnectDatabase(prisma);
 *   process.exit(0);
 * });
 * ```
 */
export async function disconnectDatabase(
  prisma: PrismaClient,
  logger?: Logger
): Promise<void> {
  try {
    await prisma.$disconnect();
    
    const message = '🔌 Database disconnected / Veritabanı ayrıldı';
    logger?.info?.(message) ?? console.log(message);
  } catch (error) {
    const message = '❌ Error disconnecting / Ayrılma xətası';
    logger?.error?.(message, error) ?? console.error(message, error);
  }
}
