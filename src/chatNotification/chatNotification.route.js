const express = require("express");
const {
  getAllChatNotification,
  deleteChatNotification,
} = require("./chatNotification.controller");

const router = express.Router();

router.get("/getAllChatNotification", getAllChatNotification);
router.delete("/delete/:email", deleteChatNotification);

module.exports = router;
