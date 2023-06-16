import cors from "cors";
import morgan from "morgan";
import { Application, json } from "express";

import { router } from "../apis/routes";

export const loader = (app: Application) => {
  app.use(json());

  app.use(morgan("dev"));
  app.use(cors());

  app.use("/", router);

  app.get("/status", (req, res) => {
    return res.json({});
  });
};
