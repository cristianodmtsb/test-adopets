import api from "./api";
import { APP_KEY } from "../env";

let config = { system_api_key: APP_KEY };

export const veryfyAccessToken = () => {
  const requestAPIToken = api
    .post("auth/session-request", config)
    .then(resp => {
      const { access_key } = resp.data.data;
      if (access_key) {
        localStorage.setItem("access_key_token", access_key);
      }
    });
  return requestAPIToken;
};
