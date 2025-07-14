import { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQueryClient } from '@tanstack/react-query';

import { LoginEndpointResponse, User } from '@clientTypes';

import { routes } from '@clientConst';
import {
  decodeToken,
  getUserByToken,
  removeUser,
  setToken,
  setUser as setUserInStorage,
} from '@clientUtils';

type AuthContextProps = {
  user: User | null;
  logout: () => void;
  login: (data: LoginEndpointResponse) => void;
  refresh: (data: LoginEndpointResponse) => Promise<User | null>;
};

export const AuthContext = createContext<AuthContextProps | undefined>(
  undefined
);

export const AuthProvider = ({ children }: React.HTMLProps<HTMLElement>) => {
  const [user, setUser] = useState<User | null>(getUserByToken);
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const logout = () => {
    setUser(null);
    removeUser();
    queryClient.clear();
    navigate(routes.login);
  };

  const login = async (data: LoginEndpointResponse) => {
    const authUser = await refresh(data);
    if (!authUser) {
      logout();
      return;
    }

    if (authUser.roles.includes('admin')) {
      const url = new URL('http://localhost:4201');
      url.searchParams.set('token', data.token);
      url.searchParams.set('expires_at', data.expires_at);

      window.location.href = url.toString();
      logout();
      return;
    }

    navigate(routes.main);
  };

  const refresh = async (data: LoginEndpointResponse): Promise<User | null> => {
    setToken(data.token, data.expires_at);
    const authUser = await decodeToken(data.token);
    if (!authUser) {
      logout();
      return null;
    }
    setUserInStorage(authUser.user);
    setUser(authUser.user);

    return authUser.user;
  };

  return (
    <AuthContext.Provider value={{ user, logout, login, refresh }}>
      {children}
    </AuthContext.Provider>
  );
};
