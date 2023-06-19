import dotenv from "dotenv";
import { Algorithm } from "jsonwebtoken";

const isEnvFound = dotenv.config();

if (isEnvFound.error) {
  throw new Error("Couldn't find .env file");
}

export const config = {
  port: process.env.PORT as string,
  jwt: {
    algorithm: process.env.JWT_ALGORITHM as Algorithm,
    secret: process.env.JWT_SECRET as string,
    expire: {
      access: +(process.env.JWT_EXPIRE_ACCESS || "0"),
      refresh: +(process.env.JWT_EXPIRE_REFRESH || "0"),
    },
  },
};

const checkEnvPropertiesAssigned = (config: Record<string, any>) => {
  for (let key in config) {
    if (!config[key]) {
      throw new Error(`.env ${key} is not found`);
    }

    if (typeof config === "object" && config !== null) {
      checkEnvPropertiesAssigned(config[key]);
    }
  }
};

checkEnvPropertiesAssigned(config);
