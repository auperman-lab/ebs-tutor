import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL:  'https://api-stage.escolalms.com/',
  headers: {
    'Content-Type': 'application/json'
  }
});
