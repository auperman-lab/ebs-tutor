import { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQueryClient } from '@tanstack/react-query';

import { AuthUser, User } from '@types';

import { routes } from '@const';
import {
  getUserByToken,
  removeUser,
  setTokens,
  setUser as setUserInStorage,
} from '@utils';

type AuthContextProps = {
  user: User | null;
  logout: () => void;
  login: (data: AuthUser) => void;
  refresh: (data: AuthUser) => void;
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

  const login = (data: AuthUser) => {
    refresh(data);
    navigate(routes.main);
  };

  const refresh = (data: AuthUser) => {
    setTokens(data.accessToken, data.refreshToken);
    setUserInStorage(data.user);
    setUser(data.user);
  };

  return (
    <AuthContext.Provider value={{ user, logout, login, refresh }}>
      {children}
    </AuthContext.Provider>
  );
};
