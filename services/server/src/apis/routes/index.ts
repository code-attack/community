import { Router } from "express";
import { authRouter } from "./auth";
import { ErrorResponse } from "@/utils/error-res";
import Joi from "joi";
import { URI } from "@package/constant";

export const router = Router();

router.use(URI.AUTH, authRouter);

export const validation = (schema: Joi.ObjectSchema<any>, body: unknown) => {
  const { error } = schema.validate(body);

  if (error) {
    throw new ErrorResponse({
      statusCode: 400,
      message: error.message,
    });
  }
};
