import { axiosInstance } from "./axios/instance";
import { apiEndpoints } from "@const";

export const user = {
  get: async (id: string) => {
    const { data } = await axiosInstance.get(apiEndpoints.getUser + `/${id}`);
    return data.data;
  },
};
