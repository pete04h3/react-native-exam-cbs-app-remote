class Message {
    constructor(messageId, messageText, messageTimestamp, user) {
        this.messageId = messageId;
        this.messageText = messageText;
        this.messageTimestamp = messageTimestamp;
        this.user = user;
    }
}

export default Message;