import { axiosInstance } from './axios/instance';
import { RegistrationFormProps } from '../features/auth/types/RegistrationFormProps';
import { apiEndpoints } from '../const';
import { LoginFormProps } from '../features/auth/types/LoginFormProps';

export const auth = {
  register: async (payload: RegistrationFormProps) => {
    const { data } = await axiosInstance.post(apiEndpoints.register, payload);
    console.log(data);

    return data;
  },
  login: async (payload: LoginFormProps) => {
    const { data } = await axiosInstance.post(apiEndpoints.login, payload);
    console.log(data);

    return data;
  },
};
