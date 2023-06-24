import { tokenValidate } from "@/apis/middlewares/token-validate";
import { jwtHelper } from "@/helpers/jwt";
import { getAccessToken } from "@/utils/jwt";
import { TOKEN } from "@package/constant";
import { Router } from "express";
import Container from "typedi";
import { IntroduceService } from "./service";

export const introduceRouter = Router();

introduceRouter.post("/", tokenValidate, async (req, res, next) => {
  try {
    const access_token = getAccessToken(req.headers.authorization);
    const { decodedToken } = jwtHelper.decodeToken(access_token, TOKEN.ACCESS);

    const introduceService = Container.get(IntroduceService);
    introduceService;

    res.status(200).json({ introduceService });
  } catch (e) {
    next(e);
  }
});
