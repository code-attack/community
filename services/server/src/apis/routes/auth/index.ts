import { Router } from "express";

export const authRouter = Router();

authRouter.post("sign-in");
authRouter.post("sign-up");
