import { Router } from "express";
import { Server } from "socket.io";
import { DefaultEventsMap } from "socket.io/dist/typed-events";

export const chatRouter = new Server().of("/");

chatRouter.on("connection", (socket) => {
  console.log(socket);
  socket.on("chat message", (msg) => {
    console.log("message: " + msg);
  });
});
