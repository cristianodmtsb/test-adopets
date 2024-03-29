import axios from "axios";
import { API_URL } from "../env";
import { getToken } from "./auth";

const api = axios.create({
  baseURL: API_URL
});

api.interceptors.request.use(async config => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
