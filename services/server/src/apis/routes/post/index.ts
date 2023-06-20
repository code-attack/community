import { Router } from "express";
import Container from "typedi";
import { PostService } from "./service";
import { validation } from "..";
import Joi from "joi";
import { Post } from "@package/api-types";
import { tokenValidate } from "@/apis/middlewares/token-validate";
import { getAccessToken } from "@/utils/jwt";
import { jwtHelper } from "@/helpers/jwt";
import { TOKEN } from "@package/constant";

export const postRouter = Router();

postRouter.post("/", tokenValidate, async (req, res, next) => {
  try {
    const access_token = getAccessToken(req.headers.authorization);
    const { decodedToken } = jwtHelper.decodeToken(access_token, TOKEN.ACCESS);

    validation(
      Joi.object<any, true, Post.CreateReq>({
        title: Joi.string().max(40).required(),
        content: Joi.string().required(),
      }),
      req.body
    );

    const postService = Container.get(PostService);
    await postService.create(req.body, decodedToken.userId);

    res.status(201).json({});
  } catch (e) {
    next(e);
  }
});

postRouter.patch("/:id", tokenValidate, async (req, res, next) => {
  try {
    const access_token = getAccessToken(req.headers.authorization);
    const { decodedToken } = jwtHelper.decodeToken(access_token, TOKEN.ACCESS);

    validation(
      Joi.object<any, true, Post.UpdateReq>({
        title: Joi.string().max(40).required(),
        content: Joi.string().required(),
      }),
      { ...req.body, userId: decodedToken.userId }
    );

    const postService = Container.get(PostService);
    await postService.updateById(req.params.id, req.body, decodedToken.userId);

    res.status(200).json({});
  } catch (e) {
    next(e);
  }
});

postRouter.get("/", async (req, res, next) => {
  try {
    const postService = Container.get(PostService);
    await postService.getAll();

    res.status(200).json({});
  } catch (e) {
    next(e);
  }
});

postRouter.get("/:id", async (req, res, next) => {
  try {
    const postService = Container.get(PostService);
    await postService.getById(req.params.id);

    res.status(200).json({});
  } catch (e) {
    next(e);
  }
});

postRouter.delete("/:id", tokenValidate, async (req, res, next) => {
  try {
    const access_token = getAccessToken(req.headers.authorization);
    const { decodedToken } = jwtHelper.decodeToken(access_token, TOKEN.ACCESS);

    const postService = Container.get(PostService);
    await postService.removeById(req.params.id, decodedToken.userId);

    res.status(200).json({});
  } catch (e) {
    next(e);
  }
});
