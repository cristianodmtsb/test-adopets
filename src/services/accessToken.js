import api from "./api";

let config = { system_api_key: "505763d6-4202-4b05-9efc-93b366939bcf" };

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
