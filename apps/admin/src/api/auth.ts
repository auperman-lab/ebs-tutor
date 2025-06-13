import { axiosInstance } from './axios/instance';
import { RegistrationForm } from '../features/auth/types/RegistrationForm';
import { apiEndpoints } from '../const';

export const auth = {
  register: async (payload: RegistrationForm) => {
    const { data } = await axiosInstance.post(apiEndpoints.register, payload);
    console.log(data);

    return data;
  },
};
