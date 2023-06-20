import { Router } from "express";
import Container from "typedi";
import { AuthService } from "./service";
import { validation } from "..";
import { Auth } from "@package/api-types";
import Joi from "joi";
import { URI } from "@package/constant";

export const authRouter = Router();

authRouter.post(URI.SIGN_IN, async (req, res, next) => {
  try {
    validation(
      Joi.object<any, true, Auth.SignInReq>({
        account_id: Joi.string().max(20).required(),
        password: Joi.string().min(8).max(20).required(),
      }),
      req.body
    );
    const authService = Container.get(AuthService);
    const { access_token, refresh_token } = await authService.signIn(req.body);

    res.status(200).json({ access_token, refresh_token });
  } catch (e) {
    next(e);
  }
});

authRouter.post(URI.SIGN_UP, async (req, res, next) => {
  try {
    validation(
      Joi.object<any, true, Auth.SignUpReq>({
        account_id: Joi.string().max(20).required(),
        // To-do: 비밀번호 특수문자 정규식
        password: Joi.string().min(8).max(20).required(),
        name: Joi.string().max(20).required(),
        // To-do: role 유니온 멘토 | 멘티
        role: Joi.string().required(),
      }),
      req.body
    );

    const authService = Container.get(AuthService);
    const { access_token, refresh_token } = await authService.signUp(req.body);

    res.status(201).json({ access_token, refresh_token });
  } catch (e) {
    next(e);
  }
});
