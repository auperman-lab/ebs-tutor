import { axiosInstance } from './axios/instance';
import { apiEndpoints } from '@const';
import { LoginEndpointResponse, ChangePasswordRequest } from '@types';

export const auth = {
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
