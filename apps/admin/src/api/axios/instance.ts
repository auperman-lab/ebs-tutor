import axios from 'axios';
import { api } from '@const';

export const axiosInstance = axios.create({
  baseURL: api,
  headers: {
    'Content-Type': 'application/json',
  },
});
