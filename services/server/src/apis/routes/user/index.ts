import { Router } from "express";
import { TOKEN, URI } from "@package/constant";
import { file } from "@/helpers/file";
import Container from "typedi";
import { UserService } from "./service";
import { tokenValidate } from "@/apis/middlewares/token-validate";
import { ErrorResponse } from "@/utils/error-res";
import { commonError } from "@/constants";
import { getAccessToken } from "@/utils/jwt";
import { jwtHelper } from "@/helpers/jwt";

export const userRouter = Router();

// userRouter.patch(
//   URI.PROFILE_IMG,
//   file.single("profile"),
//   async (req, res, next) => {
//     try {
//       res.status(200).json({});
//     } catch (e) {
//       next(e);
//     }
//   }
// );

userRouter.post("/", tokenValidate, async (req, res, next) => {
  try {
    const access_token = getAccessToken(req.headers.authorization);
    const { decodedToken } = jwtHelper.decodeToken(access_token, TOKEN.ACCESS);

    const { type } = req.query as { type: "introduce" | "work-experience" };

    //@ts-ignore
    if (type !== "introduce" || type !== "work-experience") {
      throw new ErrorResponse(commonError.invalidQuery);
    }

    const userService = Container.get(UserService);
    await userService.writeProfile(type, decodedToken.account_id);

    res.status(200).json({});
  } catch (e) {
    next(e);
  }
});

userRouter.get("/", async (req, res, next) => {
  try {
    const userService = Container.get(UserService);
    const userProfileList = await userService.getAll();

    res.status(200).json({ userProfileList });
  } catch (e) {
    next(e);
  }
});

userRouter.get("/:id", async (req, res, next) => {
  try {
    const userService = Container.get(UserService);
    const userProfile = await userService.getById(req.params.id);

    res.status(200).json({ userProfile });
  } catch (e) {
    next(e);
  }
});
