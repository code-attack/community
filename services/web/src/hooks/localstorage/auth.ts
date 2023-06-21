export const getAuthToken = () => {
  localStorage.getItem("access_token");
};

export const setAuthToken = (access: string, refresh: string) => {
  localStorage.setItem("access_token", access);
  localStorage.setItem("refresh_token", refresh);
};

export const clearAuthToken = () => {
  localStorage.setItem("access_token", "");
  localStorage.setItem("refresh_token", "");
};
