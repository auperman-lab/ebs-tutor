import { axiosInstance } from './axios/instance';
import { RegistrationForm } from '../features/auth/types/RegistrationForm';

export const auth = {
  register: async (payload: RegistrationForm) => {
    const { data } = await axiosInstance.post('/api/auth/register', payload);
    return data;
  },
};
