const ChatNotification = require("./chatNotification.model");

const getAllChatNotificationDB = async () => {
  const result = await ChatNotification.find({});
  return result;
};

const deleteChatNotificationDB = async (email) => {
  const result = await ChatNotification.deleteOne({ senderEmail: email });
  return result;
};

module.exports = {
  getAllChatNotificationDB,
  deleteChatNotificationDB,
};
