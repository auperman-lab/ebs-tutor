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
};
