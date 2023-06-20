import { config } from "@/config";
import { TOKEN } from "@package/constant";
import jwt, { SignOptions } from "jsonwebtoken";

const generateAccess = (account_id: string) => {
  const jwtOptions: SignOptions = {
    algorithm: config.jwt.algorithm,
    expiresIn: config.jwt.expire.access * 3600,
    subject: TOKEN.ACCESS,
  };

  return jwt.sign({ account_id }, config.jwt.secret, jwtOptions);
};

const generateRefresh = (account_id: string) => {
  const jwtOptions: SignOptions = {
    algorithm: config.jwt.algorithm,
    expiresIn: config.jwt.expire.refresh * 3600,
    subject: TOKEN.REFRESH,
  };

  return jwt.sign({ account_id }, config.jwt.secret, jwtOptions);
};

interface JWTPayload {
  account_id: string;
  iat: number;
  exp: number;
  sub: string;
}

export const jwtHelper = {
  generateToken: (account_id: string) => {
    const access_token = generateAccess(account_id);
    const refresh_token = generateRefresh(account_id);

    return { access_token, refresh_token };
  },
  decodeToken: (token: string, subject?: string) => {
    const decodedToken = jwt.verify(token, config.jwt.secret, {
      algorithms: [config.jwt.algorithm],
      subject,
    }) as JWTPayload;
    return { decodedToken };
  },
};
