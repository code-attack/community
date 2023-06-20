import { compare, hash } from "bcrypt";

export const generatePasswordHash = (password: string) => {
  return hash(password, 10);
};

export const comparePassword = (password: string, hashedPassword: string) => {
  return compare(password, hashedPassword);
};
