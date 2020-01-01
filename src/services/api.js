import axios from "axios";
import { getToken } from "./auth";

const api = axios.create({
  baseURL: "https://test.adopets.app/v1"
});

api.interceptors.request.use(async config => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  console.log("bearer token", token);
  return config;
});

export default api;
