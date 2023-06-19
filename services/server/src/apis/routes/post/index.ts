import { Router } from "express";

export const postRouter = Router();

postRouter.post("/");
postRouter.patch("/:id");
postRouter.get("/");
postRouter.get("/:id");
postRouter.delete("/:id");
