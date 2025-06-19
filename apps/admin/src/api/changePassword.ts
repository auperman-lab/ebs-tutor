import { axiosInstance } from "./axios/instance";
import { apiEndpoints } from "@const";
import { ChangePasswordRequest } from "@types";

export const changePassword = {
  changePassword: async (payload: ChangePasswordRequest) => {
    const { data } = await axiosInstance.put(
      apiEndpoints.changePassword,
      payload
    );

    return data;
  },
};
