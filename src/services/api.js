import axios from "axios";
import { getToken } from "./auth";

let config = { system_api_key: "505763d6-4202-4b05-9efc-93b366939bcf" };

const api = axios.create({
  baseURL: "https://test.adopets.app/v1"
});

const requestAPIToken = api.post("auth/session-request", config).then(resp => {
  const { access_key } = resp.data.data;
  if (access_key) {
    localStorage.setItem("access_key_token", access_key);
  }
});

api.interceptors.request.use(async config => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  console.log(token);
  return config;
});

export default api;
