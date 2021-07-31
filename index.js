require("dotenv").config();
require("module-alias/register");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("@/cors");
const router = require("@/api");
try {
  const app = express();
  app.use(cors);
  app.use(bodyParser.json());
  app.use(
    bodyParser.urlencoded({
      extended: true,
    })
  );

  app.use("/api", router);
  app.use("/file", express.static(__dirname + "/files"));

  const server = app.listen(process.env.SOCKET_PORT, "0.0.0.0");

  io = require("socket.io")(server, {
    cors: {
      rejectUnauthorized: false,
      origin: "*",
    },
  });
  io.on("connection", (socket) => {
    console.log("a user connected");
    socket.on("message", (message) => {
      console.log(message);
      io.emit("message", message);
    });
    socket.on("game", (message) => {
      io.emit("game", message);
    });
  });

  app.listen(process.env.PORT);
  console.log("App is running on port " + process.env.PORT);
} catch (e) {
  process.exit(1);
}
