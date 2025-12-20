# @ulustore/db

ulustore.com platforması üçün ortaq database paketi.
Shared database package for ulustore.com platform.

## 📋 Haqqında / About

Bu paket bütün ulustore.com proyektləri üçün:
This package provides for all ulustore.com projects:

- ✅ Vahid Prisma schema / Single Prisma schema
- ✅ Ortaq database client / Shared database client
- ✅ Connection və health check utility-ləri / Connection and health check utilities

## 🏗️ Struktur / Structure

```
ulustore-db/
├── prisma/
│   ├── schema.prisma    # Vahid database schema / Single database schema
│   ├── migrations/      # Migration tarixçəsi / Migration history
│   └── seed.ts          # Başlanğıc data / Seed data
├── src/
│   ├── client.ts        # Prisma Client factory
│   ├── connection.ts    # Bağlantı utility-ləri / Connection utilities
│   ├── health.ts        # Sağlamlıq yoxlama / Health check
│   └── index.ts         # Əsas export-lar / Main exports
└── dist/                # Kompaylasiya olunmuş fayllar / Compiled files
```

## 🔧 Quraşdırma / Installation

```bash
npm install @ulustore/db
```

## 📖 İstifadə / Usage

### Əsas İstifadə / Basic Usage

```typescript
import { prisma } from '@ulustore/db';

// İstifadəçiləri əldə et / Get users
const users = await prisma.user.findMany();

// Məhsul yarat / Create product
const product = await prisma.product.create({
  data: {
    name: 'Yeni Məhsul',
    price: 99.99,
    // ...
  }
});
```

### Client Factory

```typescript
import { getPrismaClient, createPrismaClient } from '@ulustore/db';

// Singleton client al / Get singleton client
const prisma = getPrismaClient();

// Custom options ilə / With custom options
const prisma = getPrismaClient({
  log: ['query', 'error']
});
```

### Bağlantı Utility-ləri / Connection Utilities

```typescript
import { 
  prisma, 
  testDatabaseConnection, 
  reconnectDatabase, 
  disconnectDatabase 
} from '@ulustore/db';

// Bağlantını test et / Test connection
const isConnected = await testDatabaseConnection(prisma);

// Yenidən bağlan / Reconnect
const reconnected = await reconnectDatabase(prisma, 5); // 5 retry

// Bağlantını kəs / Disconnect
await disconnectDatabase(prisma);
```

### Sağlamlıq Yoxlaması / Health Check

```typescript
import { prisma, healthCheck, pingDatabase } from '@ulustore/db';

// Tam health check / Full health check
const health = await healthCheck(prisma, {
  autoReconnect: true,
  includeResponseTime: true
});

console.log(health);
// {
//   status: 'healthy',
//   timestamp: '2025-12-20T10:00:00.000Z',
//   database: 'ulustore',
//   responseTime: 15
// }

// Sürətli ping / Quick ping
const isAlive = await pingDatabase(prisma);
```

### Type-lar / Types

```typescript
import type { 
  User, 
  Product, 
  Order, 
  Category,
  UserRole 
} from '@ulustore/db';

// Type-safe istifadə / Type-safe usage
const user: User = await prisma.user.findUnique({
  where: { id: 'user-id' }
});
```

## 🔄 Migration İş Axını / Migration Workflow

### Yeni Migration Yaratmaq / Create New Migration

```bash
cd packages/ulustore-db
npx prisma migrate dev --name add_new_field
```

### Migration-ları Tətbiq Etmək / Apply Migrations

```bash
npx prisma migrate deploy
```

### Schema-nı Sync Etmək / Sync Schema

```bash
npx prisma db push
```

### Prisma Studio / Prisma Studio

```bash
npx prisma studio
```

## 📊 Export Olunan Funksiyalar / Exported Functions

### client.ts

| Funksiya / Function | Təsvir / Description |
|---------------------|----------------------|
| `prisma` | Default Prisma client instance |
| `getPrismaClient(options?)` | Singleton client qaytarır / Returns singleton client |
| `createPrismaClient(options?)` | Yeni client yaradır / Creates new client |
| `DATABASE_NAME` | Database adı sabiti / Database name constant |

### connection.ts

| Funksiya / Function | Təsvir / Description |
|---------------------|----------------------|
| `testDatabaseConnection(prisma, logger?)` | Bağlantını test edir / Tests connection |
| `reconnectDatabase(prisma, maxRetries?, logger?)` | Yenidən bağlanır / Reconnects |
| `disconnectDatabase(prisma, logger?)` | Bağlantını kəsir / Disconnects |

### health.ts

| Funksiya / Function | Təsvir / Description |
|---------------------|----------------------|
| `healthCheck(prisma, options?)` | Tam sağlamlıq yoxlaması / Full health check |
| `pingDatabase(prisma)` | Sürətli ping / Quick ping |

## ⚠️ Vacib Qeydlər / Important Notes

1. **Schema dəyişikliyi** - Yalnız bu paketdə edin / Edit only in this package
2. **Migration** - Yalnız bu paketdən yaradın / Create only from this package
3. **Prisma Generate** - Dəyişiklikdən sonra `npm run build` / After changes run `npm run build`

## 📅 Versiya Tarixçəsi / Version History

| Versiya | Tarix | Dəyişiklik |
|---------|-------|------------|
| 1.0.0 | 2025-12-20 | İlkin versiya / Initial version |

## 📄 Lisenziya / License

UNLICENSED - ulustore.com
