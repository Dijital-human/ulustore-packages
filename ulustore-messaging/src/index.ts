/**
 * @ulustore/messaging - Real-time Messaging
 * ulustore.com üçün real-time mesajlaşma
 * 
 * @packageDocumentation
 */

/**
 * Message types
 * Mesaj tipləri
 */
export type MessageType = 
  | 'text'
  | 'image'
  | 'audio'
  | 'video'
  | 'file'
  | 'location'
  | 'system';

/**
 * Message status
 * Mesaj statusu
 */
export type MessageStatus = 'sending' | 'sent' | 'delivered' | 'read' | 'failed';

/**
 * Message interface
 * Mesaj interfeysi
 */
export interface Message {
  /** Message ID / Mesaj ID */
  id: string;
  /** Conversation ID / Söhbət ID */
  conversationId: string;
  /** Sender ID / Göndərən ID */
  senderId: string;
  /** Message type / Mesaj tipi */
  type: MessageType;
  /** Message content / Mesaj məzmunu */
  content: string;
  /** Message status / Mesaj statusu */
  status: MessageStatus;
  /** Created at / Yaradılma tarixi */
  createdAt: Date | string;
  /** Updated at / Yenilənmə tarixi */
  updatedAt?: Date | string;
  /** Metadata / Metadata */
  metadata?: Record<string, unknown>;
}

/**
 * Conversation interface
 * Söhbət interfeysi
 */
export interface Conversation {
  /** Conversation ID / Söhbət ID */
  id: string;
  /** Conversation type / Söhbət tipi */
  type: 'direct' | 'group' | 'support';
  /** Participant IDs / İştirakçı ID-ləri */
  participantIds: string[];
  /** Last message / Son mesaj */
  lastMessage?: Message;
  /** Unread count / Oxunmamış sayı */
  unreadCount: number;
  /** Created at / Yaradılma tarixi */
  createdAt: Date | string;
  /** Updated at / Yenilənmə tarixi */
  updatedAt?: Date | string;
}

/**
 * Messaging event types
 * Mesajlaşma hadisə tipləri
 */
export type MessagingEvent = 
  | 'message:new'
  | 'message:update'
  | 'message:delete'
  | 'typing:start'
  | 'typing:stop'
  | 'presence:online'
  | 'presence:offline';

/**
 * Create message payload
 * Mesaj yaratma payload-ı
 */
export interface CreateMessagePayload {
  /** Conversation ID / Söhbət ID */
  conversationId: string;
  /** Message type / Mesaj tipi */
  type: MessageType;
  /** Message content / Mesaj məzmunu */
  content: string;
  /** Metadata / Metadata */
  metadata?: Record<string, unknown>;
}

/**
 * Message filter options
 * Mesaj filtr seçimləri
 */
export interface MessageFilterOptions {
  /** Conversation ID / Söhbət ID */
  conversationId?: string;
  /** Sender ID / Göndərən ID */
  senderId?: string;
  /** Message type / Mesaj tipi */
  type?: MessageType;
  /** Date range / Tarix aralığı */
  dateRange?: {
    from: Date | string;
    to: Date | string;
  };
  /** Limit / Limit */
  limit?: number;
  /** Cursor / Cursor */
  cursor?: string;
}

/**
 * Typing indicator payload
 * Yazma göstəricisi payload-ı
 */
export interface TypingIndicatorPayload {
  /** Conversation ID / Söhbət ID */
  conversationId: string;
  /** User ID / İstifadəçi ID */
  userId: string;
  /** Is typing / Yazır? */
  isTyping: boolean;
}

/**
 * Format message time
 * Mesaj vaxtını formatla
 * 
 * @param date - Date to format / Formatlanacaq tarix
 * @returns Formatted time string / Formatlanmış vaxt stringi
 */
export function formatMessageTime(date: Date | string): string {
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
export function isMessageUnread(message: Message, currentUserId: string): boolean {
  return message.senderId !== currentUserId && 
         message.status !== 'read';
}
