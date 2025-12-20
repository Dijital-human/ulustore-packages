-- AlterTable
ALTER TABLE "users" ADD COLUMN IF NOT EXISTS "emailVerified" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN IF NOT EXISTS "emailVerifiedAt" TIMESTAMP(3),
ADD COLUMN IF NOT EXISTS "emailVerificationToken" TEXT,
ADD COLUMN IF NOT EXISTS "emailVerificationTokenExpiry" TIMESTAMP(3),
ADD COLUMN IF NOT EXISTS "lastLoginIP" TEXT,
ADD COLUMN IF NOT EXISTS "lastLoginAt" TIMESTAMP(3),
ADD COLUMN IF NOT EXISTS "lastLoginDevice" TEXT,
ADD COLUMN IF NOT EXISTS "lastLoginLocation" TEXT,
ADD COLUMN IF NOT EXISTS "trustedDevices" TEXT,
ADD COLUMN IF NOT EXISTS "loginNotifications" BOOLEAN NOT NULL DEFAULT true;

--Email Təsdiqi sistemi əlavə edir
--Giriş İzləmə (Login Tracking) xüsusiyyəti

--Sütun	Təsvir
--emailVerified	    --> Email təsdiqlənib/yox
--emailVerificationToken --> Təsdiq linki üçün token
--lastLoginIP	    --> Son giriş IP ünvanı
--lastLoginDevice	Son giriş cihazı (iPhone, Chrome, etc.)
--lastLoginLocation	--> Son giriş yeri (şəhər/ölkə)
--trustedDevices	--> Etibarlı cihazlar siyahısı (JSON)
--loginNotifications	--> Yeni giriş bildirişləri göndərilsin?