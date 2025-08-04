import axios from 'axios';
import { configInterceptor } from './interceptor';

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

configInterceptor(axiosInstance);
