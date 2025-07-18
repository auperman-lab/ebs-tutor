import { axiosInstance } from './axios/instance';
import { apiEndpoints } from '@client/const';
import {
  addCartItemEndpointRequest,
  Course,
  deleteCartItemEndpointResponse,
  getCartEndpointResponse,
} from '@client/types';

export const cart = {
  add: async (payload: addCartItemEndpointRequest): Promise<Course> => {
    const { data } = await axiosInstance.post(apiEndpoints.cartItem, payload);
    return data.data;
  },
  remove: async (id: number): Promise<deleteCartItemEndpointResponse> => {
    const { data } = await axiosInstance.delete(
      apiEndpoints.cartItem + `/${id}`
    );
    return data.data;
  },
  get: async (): Promise<getCartEndpointResponse> => {
    const { data } = await axiosInstance.get(apiEndpoints.getCart);
    return data.data;
  },
};
