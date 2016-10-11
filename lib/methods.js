Meteor.methods({
  addMessage(message) {
    Messages.insert({
      message,
      date: new Date(),
    });
  },
  removeMessage(_id) {
    Messages.remove(_id);
  },
});
