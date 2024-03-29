import { APP_NAME } from "../env";
export const TOKEN_KEY = APP_NAME;
export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;
export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const getAccessTokenKey = () => localStorage.getItem("access_key_token");
export const login = token => {
  localStorage.setItem(TOKEN_KEY, token);
};
export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
};
