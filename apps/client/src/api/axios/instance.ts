import axios from "axios";
import { api } from "@client/const";
import { configInterceptor } from "./interceptor";

export const axiosInstance = axios.create({
  baseURL: api,
  headers: {
    'Content-Type': 'application/json',
  },
});

configInterceptor(axiosInstance);
