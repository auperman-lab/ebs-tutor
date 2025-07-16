import { axiosInstance } from './axios/instance';
import { apiEndpoints } from '@clientConst';
import {
  RegisterEndpointRequest,
  LoginEndpointRequest,
  LoginEndpointResponse,
  ChangePasswordRequest,
} from '@clientTypes';

export const auth = {
  register: async (payload: RegisterEndpointRequest) => {
    const { data } = await axiosInstance.post(apiEndpoints.register, payload);
    return data;
  },
  login: async (
    payload: LoginEndpointRequest
  ): Promise<LoginEndpointResponse> => {
    const { data } = await axiosInstance.post(apiEndpoints.login, payload);

    return data.data;
  },
  refreshToken: async (): Promise<LoginEndpointResponse> => {
    const { data } = await axiosInstance.get(apiEndpoints.refreshToken);
    return data.data;
  },
  changePassword: async (payload: ChangePasswordRequest) => {
    const { data } = await axiosInstance.put(
      apiEndpoints.changePassword,
      payload
    );
    return data;
  },
};
