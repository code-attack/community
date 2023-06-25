import cors from "cors";
import morgan from "morgan";

import { router } from "../apis/routes";
import { commonError } from "@/constants";
import express, { Application, json, urlencoded } from "express";
import { ErrorResponse } from "@/utils/error-res";
import { errorHandler } from "@/apis/middlewares/error";
import http from "http";
import { Server } from "socket.io";

export const loader = (app: Application) => {
  app.use(json());
  app.use(urlencoded({ extended: false }));

  const server = http.createServer(app);
  const io = new Server(server);

  // http://localhost:3001/chat/${roomId}
  io.of("/chat").on("connection", (socket) => {
    const referer = socket.request.headers.referer;
    const roomId = referer!.split("/")[referer!.split("/").length - 1];
    socket.join(roomId);

    socket.on("chat message", (msg) => {
      socket.to(roomId).emit("chat message", msg);
    });

    socket.on("disconnect", () => {
      socket.leave(roomId);
      console.log("user disconnected");
    });
  });

  server.listen(3001);

  app.use(express.static("public"));
  app.use(morgan("dev"));
  app.use(cors());

  app.use("/", router);

  app.get("/status", (req, res) => {
    return res.json({});
  });

  app.all("*", (_req, _res, next) => {
    next(new ErrorResponse(commonError.notFound));
  });

  app.use(errorHandler);
};
