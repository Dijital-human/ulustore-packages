"use strict";
/**
 * @ulustore/messaging - Real-time Messaging
 * ulustore.com üçün real-time mesajlaşma
 *
 * @packageDocumentation
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatMessageTime = formatMessageTime;
exports.isMessageUnread = isMessageUnread;
/**
 * Format message time
 * Mesaj vaxtını formatla
 *
 * @param date - Date to format / Formatlanacaq tarix
 * @returns Formatted time string / Formatlanmış vaxt stringi
 */
function formatMessageTime(date) {
    const d = typeof date === 'string' ? new Date(date) : date;
    const now = new Date();
    const diff = now.getTime() - d.getTime();
    // Less than a minute / 1 dəqiqədən az
    if (diff < 60 * 1000) {
        return 'İndi / Just now';
    }
    // Less than an hour / 1 saatdan az
    if (diff < 60 * 60 * 1000) {
        const minutes = Math.floor(diff / (60 * 1000));
        return `${minutes} dəq əvvəl / ${minutes}m ago`;
    }
    // Same day / Eyni gün
    if (d.toDateString() === now.toDateString()) {
        return d.toLocaleTimeString('az-AZ', { hour: '2-digit', minute: '2-digit' });
    }
    // Yesterday / Dünən
    const yesterday = new Date(now);
    yesterday.setDate(yesterday.getDate() - 1);
    if (d.toDateString() === yesterday.toDateString()) {
        return `Dünən / Yesterday`;
    }
    // Older / Daha köhnə
    return d.toLocaleDateString('az-AZ', { day: 'numeric', month: 'short' });
}
/**
 * Check if message is unread
 * Mesajın oxunmamış olub-olmadığını yoxla
 *
 * @param message - Message to check / Yoxlanacaq mesaj
 * @param currentUserId - Current user ID / Cari istifadəçi ID
 * @returns Whether message is unread / Mesaj oxunmayıb ya yox
 */
function isMessageUnread(message, currentUserId) {
    return message.senderId !== currentUserId &&
        message.status !== 'read';
}
