import { Router } from "express";
import { URI } from "@package/constant";
import { file } from "@/helpers/file";
import Container from "typedi";
import { UserService } from "./service";

export const userRouter = Router();

userRouter.patch(
  URI.PROFILE_IMG,
  file.single("profile"),
  async (req, res, next) => {
    try {
      res.status(200).json({});
    } catch (e) {
      next(e);
    }
  }
);

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
    res.status(200).json({});
  } catch (e) {
    next(e);
  }
});
