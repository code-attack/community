import { tokenValidate } from "@/apis/middlewares/token-validate";
import { Router } from "express";
import Container from "typedi";
import { WorkExperience } from "./service";

export const workExperienceRouter = Router();

workExperienceRouter.post("/", tokenValidate, (req, res, next) => {
  try {
    const userService = Container.get(WorkExperience);
    await userService.writeProfile(type, decodedToken.account_id, req.body);

    res.status(200).json({});
  } catch (e) {
    next(e);
  }
});
