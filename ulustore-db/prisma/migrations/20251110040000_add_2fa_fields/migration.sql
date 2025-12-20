-- Add 2FA fields to users table / İstifadəçilər cədvəlinə 2FA sahələri əlavə et
-- Migration: add_2fa_fields

-- Add twoFactorEnabled column / twoFactorEnabled sütunu əlavə et
ALTER TABLE "users" ADD COLUMN IF NOT EXISTS "twoFactorEnabled" BOOLEAN NOT NULL DEFAULT false;

-- Add twoFactorSecret column / twoFactorSecret sütunu əlavə et
ALTER TABLE "users" ADD COLUMN IF NOT EXISTS "twoFactorSecret" TEXT;

-- Add twoFactorBackupCodes column / twoFactorBackupCodes sütunu əlavə et
ALTER TABLE "users" ADD COLUMN IF NOT EXISTS "twoFactorBackupCodes" TEXT;

