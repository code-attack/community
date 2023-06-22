import { TOKEN } from "@package/constant";

export const getAuthToken = () => {
  return localStorage.getItem(TOKEN.ACCESS);
};

export const setAuthToken = (access: string, refresh: string) => {
  localStorage.setItem(TOKEN.ACCESS, access);
  localStorage.setItem(TOKEN.REFRESH, refresh);
};

export const clearAuthToken = () => {
  localStorage.removeItem(TOKEN.ACCESS);
  localStorage.removeItem(TOKEN.REFRESH);
};
