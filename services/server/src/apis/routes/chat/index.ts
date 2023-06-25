import { jwtHelper } from "@/helpers/jwt";
import { getAccessToken } from "@/utils/jwt";
import { TOKEN } from "@package/constant";
import { Router } from "express";
import Container from "typedi";
import { ChatService } from "./service";

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

    res.status(201).json({ result });
  } catch (e) {
    next(e);
  }
});
