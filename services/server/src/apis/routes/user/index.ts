import Container from "typedi";

import { Router } from "express";
import { UserService } from "./service";
import { commonError } from "@/constants";
import { jwtHelper } from "@/helpers/jwt";
import { getAccessToken } from "@/utils/jwt";
import { TOKEN, URI } from "@package/constant";
import { ErrorResponse } from "@/utils/error-res";
import { tokenValidate } from "@/apis/middlewares/token-validate";

export const userRouter = Router();

userRouter.post("/", tokenValidate, async (req, res, next) => {
  try {
    const access_token = getAccessToken(req.headers.authorization);
    const { decodedToken } = jwtHelper.decodeToken(access_token, TOKEN.ACCESS);

    const { type } = req.query as { type: "introduce" | "work-experience" };

    if (type !== "introduce" && type !== "work-experience") {
      throw new ErrorResponse(commonError.invalidQuery);
    }

    const userService = Container.get(UserService);
    await userService.writeProfile(type, decodedToken.account_id, req.body);

    res.status(200).json({});
  } catch (e) {
    next(e);
  }
});

userRouter.get(URI.PROFILE, async (req, res, next) => {
  try {
    const userService = Container.get(UserService);
    const userProfileList = await userService.getAll();

    res.status(200).json(userProfileList);
  } catch (e) {
    next(e);
  }
});

userRouter.get("/:id", async (req, res, next) => {
  try {
    const userService = Container.get(UserService);
    const userProfile = await userService.getById(req.params.id);

    res.status(200).json(userProfile);
  } catch (e) {
    next(e);
  }
});

userRouter.get("/", tokenValidate, async (req, res, next) => {
  try {
    const access_token = getAccessToken(req.headers.authorization);
    const { decodedToken } = jwtHelper.decodeToken(access_token, TOKEN.ACCESS);

    const userService = Container.get(UserService);
    const userProfileList = await userService.getByAccountId(
      decodedToken.account_id
    );

    res.status(200).json(userProfileList);
  } catch (e) {
    next(e);
  }
});
