import axios, { AxiosResponse } from "axios";

export const api = axios.create({
  baseURL: "http://192.168.2.37:8080",
  headers: {
    "Content-Type": "application/json",
  },
});
