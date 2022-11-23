import axios from "axios";

export const api = axios.create({
  baseURL: "https://3f8b-138-117-223-22.sa.ngrok.io/",
  headers: {
    "Content-Type": "application/json",
  },
});
