import { axiosInstance } from './axios/instance';
import { RegistrationForm } from '../features/auth/types/RegistrationFormProps';
import { apiEndpoints } from '../const';
import { ILoginForm } from '../features/auth/types/LoginFormProps';

export const auth = {
  register: async (payload: RegistrationForm) => {
    const { data } = await axiosInstance.post(apiEndpoints.register, payload);
    console.log(data);

    return data;
  },
  login: async (payload: ILoginForm) => {
    const { data } = await axiosInstance.post(apiEndpoints.login, payload);
    console.log(data);

    return data;
  },
};
