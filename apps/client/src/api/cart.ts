import { axiosInstance } from './axios/instance';
import { apiEndpoints } from '@client/const';
import {
  AddCartItemEndpointRequest,
  Course,
  DeleteCartItemEndpointResponse,
  GetCartEndpointResponse,
} from '@client/types';

export const cart = {
  add: async (payload: AddCartItemEndpointRequest): Promise<Course> => {
    const { data } = await axiosInstance.post(apiEndpoints.cartItem, payload);
    return data.data;
  },
  remove: async (id: number): Promise<DeleteCartItemEndpointResponse> => {
    const { data } = await axiosInstance.delete(
      apiEndpoints.cartItem + `/${id}`
    );
    return data.data;
  },
  get: async (): Promise<GetCartEndpointResponse> => {
    const { data } = await axiosInstance.get(apiEndpoints.getCart);
    return data.data;
  },
};
