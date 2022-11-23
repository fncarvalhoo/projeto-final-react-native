import axios from "axios";

export const api = axios.create({
  baseURL: "https://5857-138-117-223-22.sa.ngrok.io/",
  headers: {
    "Content-Type": "application/json",
  },
});
