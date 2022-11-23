import axios from "axios";

export const api = axios.create({
  baseURL: "https://21b8-138-117-220-127.sa.ngrok.io/",
  headers: {
    "Content-Type": "application/json",
  },
});
