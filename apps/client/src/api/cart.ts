import { axiosInstance } from './axios/instance';
import { apiEndpoints } from '@client/const';
import {
  addCartItemEndpointRequest,
  Course,
  LoginEndpointResponse,
} from '@client/types';

export const cart = {
  add: async (payload: addCartItemEndpointRequest): Promise<Course> => {
    const { data } = await axiosInstance.post(
      apiEndpoints.addCartItem,
      payload
    );
    console.log(data);
    return data.data;
  },
  remove: async (id: number): Promise<LoginEndpointResponse> => {
    const { data } = await axiosInstance.delete(
      apiEndpoints.deleteCartItem + `/${id}`
    );
    console.log(data);

    return data.data;
  },
  get: async (): Promise<LoginEndpointResponse> => {
    const { data } = await axiosInstance.get(apiEndpoints.getCart);
    console.log(data);

    return data.data;
  },
};
