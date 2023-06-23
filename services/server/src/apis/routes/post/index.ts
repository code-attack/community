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
import { file } from "@/helpers/file";

export const postRouter = Router();

postRouter.post(
  "/",
  tokenValidate,
  file.single("thumbnail"),
  async (req, res, next) => {
    try {
      const access_token = getAccessToken(req.headers.authorization);
      const { decodedToken } = jwtHelper.decodeToken(
        access_token,
        TOKEN.ACCESS
      );

      const postInfo = {
        ...req.body,
        thumbnail: req.file?.filename,
      };

      validation(
        Joi.object<any, true, Post.CreateReq>({
          title: Joi.string().max(40).required(),
          content: Joi.string().required(),
          //@ts-ignore
          thumbnail: Joi.string().required(),
        }),
        postInfo
      );

      const postService = Container.get(PostService);
      await postService.create(
        {
          ...postInfo,
          thumbnail: `http://localhost:8080/img/${postInfo.thumbnail}`,
        },
        decodedToken.account_id
      );

      res.status(201).json({});
    } catch (e) {
      next(e);
    }
  }
);

postRouter.patch("/:id", tokenValidate, async (req, res, next) => {
  try {
    const access_token = getAccessToken(req.headers.authorization);
    const { decodedToken } = jwtHelper.decodeToken(access_token, TOKEN.ACCESS);

    validation(
      Joi.object<any, true, Post.UpdateReq>({
        title: Joi.string().max(40).required(),
        content: Joi.string().required(),
      }),
      { ...req.body, userId: decodedToken.account_id }
    );

    const postService = Container.get(PostService);
    await postService.updateById(
      req.params.id,
      req.body,
      decodedToken.account_id
    );

    res.status(200).json({});
  } catch (e) {
    next(e);
  }
});

postRouter.get("/", async (req, res, next) => {
  try {
    const postService = Container.get(PostService);

    const postRecord = await postService.getAll(+(req.query.from as string));

    res.status(200).json({ post: postRecord, isLast: postRecord.length <= 20 });
  } catch (e) {
    next(e);
  }
});

postRouter.get("/:id", async (req, res, next) => {
  try {
    const postService = Container.get(PostService);
    const postRecord = await postService.getById(req.params.id);

    res.status(200).json(postRecord);
  } catch (e) {
    next(e);
  }
});

postRouter.delete("/:id", tokenValidate, async (req, res, next) => {
  try {
    const access_token = getAccessToken(req.headers.authorization);
    const { decodedToken } = jwtHelper.decodeToken(access_token, TOKEN.ACCESS);

    const postService = Container.get(PostService);
    await postService.removeById(req.params.id, decodedToken.account_id);

    res.status(200).json({});
  } catch (e) {
    next(e);
  }
});
