const express = require("express");
const cors = require("cors");
const app = express();

const ChatRoutes = require("./src/chat/chat.route");
const ChatNotificationRoutes = require("./src/chatNotification/chatNotification.route");
const ServiceRoutes = require("./src/service/service.route");

app.use(cors());

//parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/service", ServiceRoutes);
// app.use('/api/v1/user', UserRoutes)

app.use("/api/v1/chat", ChatRoutes);
app.use("/api/v1/chatNotification", ChatNotificationRoutes);

module.exports = app;
