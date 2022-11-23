import axios, { AxiosResponse } from "axios";

export const produtos = axios.create({
  baseURL: "http://192.168.1.19:8080/",
  headers: {
    "Content-Type": "application/json",
  },
});