import axios from "axios";

export const MiddlewareAPI = axios.create({
    baseURL: "http://127.0.0.1:40003/api",
    timeout: 100000,
});
