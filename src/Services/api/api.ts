import axios, { AxiosResponse } from "axios";

export const api = axios.create({
  baseURL: "http://172.20.10.3:8080",
  headers: {
    "Content-Type": "application/json",
  },
});
