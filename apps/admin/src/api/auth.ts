import { axiosInstance } from './axios/instance';
import { apiEndpoints } from '@const';
import { RegisterEndpointRequest, LoginEndpointRequest } from "@types";

export const auth = {
  register: async (payload: RegisterEndpointRequest) => {
    const { data } = await axiosInstance.post(apiEndpoints.register, payload);
    console.log(data);

    return data;
  },
  login: async (payload: LoginEndpointRequest) => {
    const { data } = await axiosInstance.post(apiEndpoints.login, payload);
    console.log(data);

    return data;
  },
};
