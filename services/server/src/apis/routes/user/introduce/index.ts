import { tokenValidate } from "@/apis/middlewares/token-validate";
import { jwtHelper } from "@/helpers/jwt";
import { getAccessToken } from "@/utils/jwt";
import { TOKEN } from "@package/constant";
import { Router } from "express";
import Container from "typedi";
import { IntroduceService } from "./service";
import { validation } from "../..";
import Joi from "joi";
import { User } from "@package/api-types";

export const introduceRouter = Router();

introduceRouter.post("/", tokenValidate, async (req, res, next) => {
  try {
    validation(
      Joi.object<true, any, User.UpdateIntroduceReq>({
        content: Joi.string().required(),
        tag: Joi.string().required(),
        technology: Joi.string().required(),
      }),
      req.body
    );
    const access_token = getAccessToken(req.headers.authorization);
    const { decodedToken } = jwtHelper.decodeToken(access_token, TOKEN.ACCESS);

    const introduceService = Container.get(IntroduceService);
    introduceService.update(decodedToken.account_id, req.body);

    res.status(200).json({});
  } catch (e) {
    next(e);
  }
});
