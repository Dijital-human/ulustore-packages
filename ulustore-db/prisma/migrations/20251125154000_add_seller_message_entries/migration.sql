-- CreateEnum
-- ENUM yaradılır

CREATE TYPE "SellerMessageSenderType" AS ENUM ('SELLER', 'ADMIN');

-- AlterTable
-- seller_messages cədvəlinə yeni sütunlar

ALTER TABLE "seller_messages"
    ADD COLUMN "lastMessageAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    ADD COLUMN "lastMessagePreview" TEXT,
    ADD COLUMN "lastMessageSender" "SellerMessageSenderType",
    ADD COLUMN "unreadBySeller" INTEGER NOT NULL DEFAULT 0,
    ADD COLUMN "unreadByAdmin" INTEGER NOT NULL DEFAULT 0;

-- CreateTable
-- Yeni cədvəl: seller_message_entries

CREATE TABLE "seller_message_entries" (
    "id" TEXT NOT NULL,
    "messageId" TEXT NOT NULL,
    "senderId" TEXT NOT NULL,
    "senderType" "SellerMessageSenderType" NOT NULL,
    "body" TEXT NOT NULL,
    "attachments" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "readAtSeller" TIMESTAMP(3),
    "readAtAdmin" TIMESTAMP(3),

    CONSTRAINT "seller_message_entries_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "seller_messages_lastMessageAt_idx" ON "seller_messages"("lastMessageAt");
CREATE INDEX "seller_message_entries_messageId_idx" ON "seller_message_entries"("messageId");
CREATE INDEX "seller_message_entries_senderId_idx" ON "seller_message_entries"("senderId");

-- AddForeignKey
ALTER TABLE "seller_message_entries"
    ADD CONSTRAINT "seller_message_entries_messageId_fkey" FOREIGN KEY ("messageId") REFERENCES "seller_messages"("id") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "seller_message_entries"
    ADD CONSTRAINT "seller_message_entries_senderId_fkey" FOREIGN KEY ("senderId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;


-- Məqsəd:
-- Seller-Admin Mesajlaşma Sistemi yaradır
-- Real-time chat funksionallığı üçün infrastruktur

-- Cədvəl/Sütun	Təsvir
--seller_message_entries	Hər bir mesaj girişi
-- senderType	Kim göndərib: SELLER və ya ADMIN
-- unreadBySeller	Seller-in oxumadığı mesaj sayı
-- unreadByAdmin	Admin-in oxumadığı mesaj sayı
-- lastMessagePreview	Son mesajın ön baxışı
-- attachments	Əlavə edilmiş fayllar


--📊 Xülasə Cədvəli
-- Migration	Xüsusiyyət	Təhlükəsizlik
--baseline	Başlanğıc marker	-
--ip_whitelist	IP əsaslı giriş nəzarəti	⭐⭐⭐
--2fa_fields	İki faktorlu autentifikasiya	⭐⭐⭐⭐
--email_verification	Email təsdiqi + Giriş izləmə	⭐⭐⭐
--seller_message_entries	Seller-Admin mesajlaşma	⭐


--# Migrationları tətbiq etmək
--npx prisma migrate deploy

--# Yeni migration yaratmaq
--npx prisma migrate dev --name migration_adi

--# Database-i schema ilə sync etmək (migration olmadan)
--npx prisma db push