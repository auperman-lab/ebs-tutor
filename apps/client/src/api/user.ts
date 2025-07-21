import { axiosInstance } from "./axios/instance";
import { apiEndpoints } from "@client/const";
import {UserInfoEndpointResponse } from "@client/types";

export const user = {
  get: async (id: number): Promise<UserInfoEndpointResponse> => {
    const { data } = await axiosInstance.get(apiEndpoints.getUser + `/${id}`);
    return data.data;
  },
  retrieveMyself: async (): Promise<UserInfoEndpointResponse> => {
    const { data } = await axiosInstance.get(apiEndpoints.retrieveMyself);
    return data.data;
  },

  changeSettings: async (
    settings: UserChangeSettingsRequest
  ): Promise<UserInfoEndpointResponse> => {
    const { data } = await axiosInstance.put(
      apiEndpoints.retrieveMyself,
      settings
    );
    return data.data;
  },

  changeEmail: async (email: ChangeEmail): Promise<unknown> => {
    const { data } = await axiosInstance.put(
      `${apiEndpoints.changeEmail}?email=${email}`
    );
    return data.data;
  },

  changeAvatar: async (formData: FormData): Promise<any> => {
    const { data } = await axiosInstance.post(
      apiEndpoints.changeAvatar,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );
    return data.data;
  },
};
