import axios, { AxiosResponse } from "axios";

export const api = axios.create({
  baseURL: "https://bc20-138-117-220-127.sa.ngrok.io",
  headers: {
    "Content-Type": "application/json",
  },
});
