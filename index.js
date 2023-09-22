const mongoose = require("mongoose");
const app = require("./app");
const http = require("http");
const httpServer = http.createServer(app);
const Server = require("socket.io").Server;

let server;

const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "DELETE", "PATCH", "PUT"],
  },
});

// Database connection
async function main() {
  try {
    await mongoose.connect(
      "mongodb+srv://moviespapanet:dNZWegVAzKrNDCjG@cluster0.xlc7v4o.mongodb.net/aminul-it?retryWrites=true&w=majority"
    );
    console.log("Database connection successful");

    httpServer.listen(5000, () => {
      console.log(`Aminul it listening on port ${5000}`);
    });
  } catch {
    console.log("Failed to connect with database");
  }
}

io.on("connection", (socket) => {
  socket.on("send message", async (data) => {
    io.emit("messageTransfer", data);
  });
  socket.on("chat notification", async (data) => {
    io.emit("chatNotificationTransfer", data);
  });
  socket.on("reFetch", async (data) => {
    io.emit("reFetch data", data);
  });
});

main();
