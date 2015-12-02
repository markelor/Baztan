Meteor.methods({
    //check se utiliza para controlar si los parametros son correctos
     newFesta: function(otherId) {
        if (!this.userId) {
            throw new Meteor.Error('not-logged-in', 'Must be logged to create a festa.');
        }
        check(otherId, String);

        var otherUser = Meteor.users.findOne(otherId);
        if (!otherUser) {
            throw new Meteor.Error('user-not-exists', 'Festa\'s user not exists');
        }
    },

    newMessage: function(message) {
        check(message, {
            text: String,
            chatId: String
        });

        message.timestamp = new Date();
        message.userId = this.userId;
        var messageId = Messages.insert(message);
        Chats.update(message.chatId, {
            $set: {
                lastMessage: message
            }
        });
        return messageId;
    }
});
