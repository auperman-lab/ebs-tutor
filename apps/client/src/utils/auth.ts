import { jwtDecode } from 'jwt-decode';
import { message } from 'antd';
import { AuthUser, DecodedToken, User } from '@client/types';
import { api } from '@client/api/api';

export const isExpiredToken = (token: string): boolean => {
  try {
    const { exp } = jwtDecode<DecodedToken>(token);
    if (!exp) return false;
    return exp < Date.now() / 1000;
  } catch {
    return true;
  }
};

export const getUserByToken = (): User | null => {
  const token = localStorage.getItem('token');
  return token && !isExpiredToken(token) ? getUser() : null;
};

export const decodeToken = async (token: string): Promise<AuthUser | null> => {
  try {
    if (isExpiredToken(token)) {
      return null;
    }
    const data = await api.user.retrieveMyself();

    const user: User = {
      id: data.id,
      fullName: data.first_name + ' ' + data.last_name,
      avatar: data.avatar,
      email: data.email,
      roles: data.roles,
    };

    return {
      user,
      token,
    };
  } catch (e) {
    return null;
  }
};

export const setToken = (token: string, exp: string) => {
  try {
    localStorage.setItem('exp', exp);
    localStorage.setItem('token', token);
  } catch (error) {
  }
};

export const getTokenExpiration = (): number | null => {
  const exp = localStorage.getItem('exp');
  return exp ? new Date(exp).getTime() : null;
};

export const setUser = (user: User) => {
  try {
    localStorage.setItem('user', JSON.stringify(user));
  } catch (error) {
    message.error('Error setting user in local storage:');
  }
};

export const getUser = (): User | null => {
  try {
    const user = localStorage.getItem('user');
    if (!user) return null;
    return JSON.parse(user);
  } catch (error) {
    message.error('Error getting user from local storage:');
    return null;
  }
};

export const removeUser = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('exp');
  localStorage.removeItem('user');
};
