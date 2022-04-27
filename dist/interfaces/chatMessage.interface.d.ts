export interface IMessage {
    dialogId: string;
    content: string;
    messageId: string;
    sendAt: string;
    senderId: string;
    isRead: boolean;
    avatar: string;
    senderName: string;
    status?: boolean;
}
