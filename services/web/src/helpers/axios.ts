import axios from "axios";

export const instance = (url: string) => {
  return axios.create({
    baseURL: `http://localhost:8080${url}`,
    timeout: 1000,
  });
};
