const ChatNotification = require("../chatNotification/chatNotification.model");
const Chat = require("./chat.model");

const insertMessage = async (info) => {
  const find = await Chat.findOne({ senderEmail: info.senderEmail });
  if (!find) {
    const result = await Chat.create(info);
  } else {
    const result = await Chat.updateOne(
      { senderEmail: info.senderEmail },
      { $push: { message: info.message } }
    );
  }
  const previous = await ChatNotification.findOne({
    senderEmail: info.senderEmail,
  });

  if (previous) {
    const result = await ChatNotification.updateOne(
      { senderEmail: info.senderEmail },
      { $set: { length: previous.length + 1 } }
    );
    return result;
  } else {
    const notificationInfo = {
      senderEmail: info.senderEmail,
      senderName: info.senderName,
      length: 1,
      flag: info.flag,
    };
    const result = await ChatNotification.create(notificationInfo);
    return result;
  }
};

const insertMessageAdmin = async (info) => {
  const result = await Chat.updateOne(
    { senderEmail: info.toEmail },
    { $push: { message: info.message } }
  );
  return result;
};

const getAllMessageForUserDB = async (info) => {
  const result = await Chat.find({ senderEmail: info });
  return result;
};

const getAllMessageForAdminDB = async (info) => {
  const result = await Chat.find({ senderEmail: info });
  const deleteNotification = await ChatNotification.deleteOne({
    senderEmail: info,
  });

  return result;
};

const getAllChatNameDB = async () => {
  const allName = await Chat.find({});
  const unseen = await ChatNotification.find({});
  const result = [];
  for (let i = 0; i < allName.length; i++) {
    for (let j = 0; j < unseen.length; j++) {
      if (allName[i].senderEmail === unseen[j].senderEmail) {
        allName[i]["length"] = unseen[j].length;
      }
    }
  }
  return allName.reverse();
};

const getSearchUserDB = async (info) => {
  const result = await Chat.findOne({
    $or: [{ senderEmail: { $regex: info } }, { senderName: { $regex: info } }],
  });
  return result;
};

module.exports = {
  insertMessage,
  getAllMessageForUserDB,
  getAllChatNameDB,
  insertMessageAdmin,
  getSearchUserDB,
  getAllMessageForAdminDB,
};
