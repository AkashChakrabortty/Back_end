const httpStatus = require("http-status");

const {
  insertMessage,
  getAllMessageForUserDB,
  getAllChatNameDB,
  insertMessageAdmin,
  getSearchUserDB,
  getAllMessageForAdminDB,
} = require("./chat.service");

const postMessage = async (req, res) => {
  const info = req.body;
  const result = await insertMessage(info);
  res.send({
    statusCode: httpStatus.OK,
    success: true,
    message: "Chat inserted successfully!",
    data: result,
  });
};

const postMessageAdmin = async (req, res) => {
  const info = req.body;
  const result = await insertMessageAdmin(info);

  res.send({
    statusCode: httpStatus.OK,
    success: true,
    message: "Chat inserted successfully!",
    data: result,
  });
};

const getAllMessageForUser = async (req, res) => {
  const email = req.params.email;
  const result = await getAllMessageForUserDB(email);

  res.send({
    statusCode: httpStatus.OK,
    success: true,
    message: "Chat info get successfully!",
    data: result,
  });
};

const getAllMessageForAdmin = async (req, res) => {
  const email = req.params.email;
  const result = await getAllMessageForAdminDB(email);

  res.send({
    statusCode: httpStatus.OK,
    success: true,
    message: "Chat info get successfully!",
    data: result,
  });
};

const getAllChatName = async (req, res) => {
  const result = await getAllChatNameDB();

  res.send({
    statusCode: httpStatus.OK,
    success: true,
    message: "Chat info get successfully!",
    data: result,
  });
};

const getSearchUser = async (req, res) => {
  const value = req.params.value;
  const result = await getSearchUserDB(value);

  res.send({
    statusCode: httpStatus.OK,
    success: true,
    message: "User get successfully!",
    data: result,
  });
};

module.exports = {
  postMessage,
  getAllMessageForUser,
  getAllChatName,
  postMessageAdmin,
  getSearchUser,
  getAllMessageForAdmin,
};
