import axios from "axios";

let config = { Authorization: "505763d6-4202-4b05-9efc-93b366939bcf" };
const api = axios
    .get({
        baseURL: "https://test.adopets.app/v1",
        config
    })
    .then(resp => {
        console.dir(resp);
    });

export default api;
