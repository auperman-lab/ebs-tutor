import { axiosInstance } from "./axios/instance";
import { apiEndpoints } from "@const";
import { UserInfoEndpointResponse } from "@types";

export const user = {
  get: async (id: number) : Promise<UserInfoEndpointResponse> => {
    const { data } = await axiosInstance.get(apiEndpoints.getUser + `/${id}`);
    return data.data;
  },
};
