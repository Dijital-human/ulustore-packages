-- CreateTable
CREATE TABLE IF NOT EXISTS "ip_whitelist" (
    "id" TEXT NOT NULL,
    "ipAddress" TEXT NOT NULL,
    "description" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdBy" TEXT,

    CONSTRAINT "ip_whitelist_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX IF NOT EXISTS "ip_whitelist_ipAddress_key" ON "ip_whitelist"("ipAddress");

