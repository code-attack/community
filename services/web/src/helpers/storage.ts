import { TOKEN } from "@package/constant";

type LocalStorageKey = keyof typeof TOKEN;

const getLocal = (key: LocalStorageKey) => {
  return localStorage.getItem(key);
};

const setLocal = (key: LocalStorageKey, value: string) => {
  localStorage.setItem(key, value);
};

const removeLocal = (key: LocalStorageKey) => {
  localStorage.removeItem(key);
};

export const storage = {
  getLocal,
  setLocal,
  removeLocal,
};
