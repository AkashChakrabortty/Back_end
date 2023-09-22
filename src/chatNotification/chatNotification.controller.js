const httpStatus = require("http-status");

const {
  deleteChatNotificationDB,
  getAllChatNotificationDB,
} = require("./chatNotification.service");

const getAllChatNotification = async (req, res) => {
  const result = await getAllChatNotificationDB();

  res.send({
    statusCode: httpStatus.OK,
    success: true,
    message: "Chat Notification info get successfully!",
    data: result,
  });
};

const deleteChatNotification = async (req, res) => {
  const email = req.params.email;
  const result = await deleteChatNotificationDB(email);

  res.send({
    statusCode: httpStatus.OK,
    success: true,
    message: "Chat Notification deleted successfully!",
    data: result,
  });
};

module.exports = {
  getAllChatNotification,
  deleteChatNotification,
};
