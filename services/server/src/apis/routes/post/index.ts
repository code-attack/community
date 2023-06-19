import { Router } from "express";
import Container from "typedi";
import { PostService } from "./service";

export const postRouter = Router();

postRouter.post("/", async (req, res, next) => {
  try {
    const postService = Container.get(PostService);
    await postService.create(req.body);

    res.status(201).json({});
  } catch (e) {
    next(e);
  }
});

postRouter.patch("/:id", async (req, res, next) => {
  try {
    const postService = Container.get(PostService);
    await postService.updateById(req.params.id, req.body);

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

postRouter.delete("/:id", async (req, res, next) => {
  try {
    const postService = Container.get(PostService);
    await postService.removeById(req.params.id);

    res.status(200).json({});
  } catch (e) {
    next(e);
  }
});
