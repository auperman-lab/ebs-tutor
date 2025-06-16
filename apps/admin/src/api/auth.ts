import { axiosInstance } from './axios/instance';
import { apiEndpoints } from '../const';
import { RegisterEndpointProps, LoginEndpointProps } from "@types";

export const auth = {
  register: async (payload: RegisterEndpointProps) => {
    const { data } = await axiosInstance.post(apiEndpoints.register, payload);
    console.log(data);

    return data;
  },
  login: async (payload: LoginEndpointProps) => {
    const { data } = await axiosInstance.post(apiEndpoints.login, payload);
    console.log(data);

    return data;
  },
};
