/**
 * Database Health Check Utilities / Veritabanı Sağlamlıq Yoxlama Utility-ləri
 * 
 * Functions for checking database health and status.
 * Veritabanı sağlamlığını və statusunu yoxlamaq üçün funksiyalar.
 * 
 * @module @ulustore/db/health
 */

import { PrismaClient } from '@prisma/client';
import { Logger, reconnectDatabase } from './connection';

/**
 * Health check result
 * Sağlamlıq yoxlama nəticəsi
 */
export interface HealthCheckResult {
  /** Status: healthy or unhealthy / Status: sağlam və ya sağlam deyil */
  status: 'healthy' | 'unhealthy';
  /** ISO timestamp / ISO vaxt damğası */
  timestamp: string;
  /** Database name / Veritabanı adı */
  database: string;
  /** Error message if unhealthy / Sağlam deyilsə xəta mesajı */
  error?: string;
  /** Whether reconnection was performed / Yenidən bağlantı edilib-edilmədiyi */
  reconnected?: boolean;
  /** Response time in ms / Cavab vaxtı (ms) */
  responseTime?: number;
}

/**
 * Health check options
 * Sağlamlıq yoxlama seçimləri
 */
export interface HealthCheckOptions {
  /** Logger instance / Logger instance-ı */
  logger?: Logger;
  /** Auto reconnect on failure / Uğursuzluqda avtomatik yenidən bağlan */
  autoReconnect?: boolean;
  /** Include response time / Cavab vaxtını daxil et */
  includeResponseTime?: boolean;
}

/**
 * Perform database health check
 * Veritabanı sağlamlıq yoxlaması et
 * 
 * Executes a simple query to verify database connectivity.
 * Veritabanı bağlantısını yoxlamaq üçün sadə sorğu icra edir.
 * 
 * @param prisma - Prisma client instance
 * @param options - Health check options / Sağlamlıq yoxlama seçimləri
 * @returns Promise<HealthCheckResult>
 * 
 * @example
 * ```typescript
 * import { prisma, healthCheck } from '@ulustore/db';
 * 
 * const health = await healthCheck(prisma, { autoReconnect: true });
 * if (health.status === 'unhealthy') {
 *   console.error('Database is down:', health.error);
 * }
 * ```
 */
export async function healthCheck(
  prisma: PrismaClient,
  options?: HealthCheckOptions
): Promise<HealthCheckResult> {
  const startTime = Date.now();
  
  try {
    // Simple query to test connection
    // Bağlantını test etmək üçün sadə sorğu
    await prisma.$queryRaw`SELECT 1`;
    
    const result: HealthCheckResult = {
      status: 'healthy',
      timestamp: new Date().toISOString(),
      database: 'ulustore',
    };
    
    // Include response time if requested
    // Tələb olunarsa cavab vaxtını daxil et
    if (options?.includeResponseTime) {
      result.responseTime = Date.now() - startTime;
    }
    
    return result;
  } catch (error) {
    // Log the error / Xətanı log et
    options?.logger?.error?.('Database health check failed / Sağlamlıq yoxlaması uğursuz oldu', error);
    
    // Try to reconnect if enabled
    // Aktivdirsə yenidən bağlanmağa cəhd et
    if (options?.autoReconnect) {
      const reconnected = await reconnectDatabase(prisma, 3, options.logger);
      
      if (reconnected) {
        return {
          status: 'healthy',
          timestamp: new Date().toISOString(),
          database: 'ulustore',
          reconnected: true,
          responseTime: options.includeResponseTime ? Date.now() - startTime : undefined,
        };
      }
    }
    
    return {
      status: 'unhealthy',
      timestamp: new Date().toISOString(),
      database: 'ulustore',
      error: error instanceof Error ? error.message : 'Unknown error / Naməlum xəta',
      responseTime: options?.includeResponseTime ? Date.now() - startTime : undefined,
    };
  }
}

/**
 * Quick ping to check database is alive
 * Veritabanının işlədiyini yoxlamaq üçün sürətli ping
 * 
 * @param prisma - Prisma client instance
 * @returns Promise<boolean> - true if database is alive / veritabanı işləyirsə true
 * 
 * @example
 * ```typescript
 * import { prisma, pingDatabase } from '@ulustore/db';
 * 
 * const isAlive = await pingDatabase(prisma);
 * ```
 */
export async function pingDatabase(prisma: PrismaClient): Promise<boolean> {
  try {
    await prisma.$queryRaw`SELECT 1`;
    return true;
  } catch {
    return false;
  }
}
