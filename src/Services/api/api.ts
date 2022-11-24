import axios, { AxiosResponse } from "axios";

export const api = axios.create({
  baseURL: "https://4e1b-138-117-221-152.sa.ngrok.io/",
  headers: {
    "Content-Type": "application/json",
  },
});
