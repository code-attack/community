import { jwtHelper } from "@/helpers/jwt";
import { getAccessToken } from "@/utils/jwt";
import { TOKEN } from "@package/constant";
import { Router } from "express";
import Container from "typedi";
import { ChatService } from "./service";
import { Server } from "socket.io";
import { IChatSend } from "@package/api-types/src/chat";

export const chatRouter = Router();
chatRouter.post("/room", async (req, res, next) => {
  try {
    const access_token = getAccessToken(req.headers.authorization);
    const { decodedToken } = jwtHelper.decodeToken(access_token, TOKEN.ACCESS);

    const chatService = Container.get(ChatService);
    const result = await chatService.create({
      opponent: req.body.opponent,
      mine: decodedToken.account_id,
    });

    res.status(201).json(result);
  } catch (e) {
    next(e);
  }
});

chatRouter.get("/before", async (req, res, next) => {
  try {
    const access_token = getAccessToken(req.headers.authorization);
    const { decodedToken } = jwtHelper.decodeToken(access_token, TOKEN.ACCESS);

    const chatService = Container.get(ChatService);
    const result = await chatService.befoereChat({
      roomId: req.query.roomId as string,
    });

    res.status(201).json(result);
  } catch (e) {
    next(e);
  }
});

// http://localhost:3001/chat/${roomId}
export const ChatController = (io: Server) => {
  return io.of("/chat").on("connection", (socket) => {
    const referer = socket.request.headers.referer;
    const roomId = referer!.split("/")[referer!.split("/").length - 1];
    const chatService = Container.get(ChatService);
    socket.join(roomId);
    socket.on(
      "chat message",
      (msg: Omit<IChatSend, "roomId"> & { name: string }) => {
        const { name, ...args } = msg;
        chatService.send({ ...args, roomId });
        socket.to(roomId).emit("chat message", msg);
      }
    );

    socket.on("disconnect", () => {
      socket.leave(roomId);
      console.log("user disconnected");
    });
  });
};
