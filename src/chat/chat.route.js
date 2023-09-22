const express = require("express");
const {
  postMessage,
  postMessageAdmin,
  getAllMessageForUser,
  getAllMessageForAdmin,
  getAllChatName,
  getSearchUser,
} = require("./chat.controller");

const router = express.Router();

router.post("/post-message", postMessage);
router.post("/post-message-admin", postMessageAdmin);
router.get("/getSingleChatInfoForUser/:email", getAllMessageForUser);
router.get("/getSingleChatInfoForAdmin/:email", getAllMessageForAdmin);
router.get("/getAllChatName", getAllChatName);
router.get("/getAllChatName/:value", getSearchUser);

module.exports = router;
