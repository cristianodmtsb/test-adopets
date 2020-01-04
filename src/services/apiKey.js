import axios from "axios";
import { API_URL } from "../env";
import { getAccessTokenKey } from "./auth";

const api = axios.create({
  baseURL: API_URL
});

api.interceptors.request.use(async config => {
  /**
   * Here i use the access key because the TEST
   * but it's correct use the Access_key from api
   */
  const accessTokenKey = getAccessTokenKey();
  if (accessTokenKey) {
    config.headers.Authorization = `Bearer ${accessTokenKey}`;
  }
  return config;
});

export default api;
