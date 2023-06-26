import axios from "axios";

export const MiddlewareAPI = axios.create({
    baseURL: "http://localhost:31001",
    timeout: 10000,
});
