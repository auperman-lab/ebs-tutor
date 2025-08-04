import { createContext, useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useQueryClient } from '@tanstack/react-query';
import { LoginEndpointResponse, User } from '@types';
import { routes } from '@const';
import {
  decodeToken,
  getUserByToken,
  removeUser,
  setToken,
  setUser as setUserInStorage,
} from '@utils';

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
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { search } = useLocation();

  const logout = () => {
    setUser(null);
    removeUser();
    queryClient.clear();
    const url = new URL('http://localhost:4200/login');
    window.location.href = url.toString();
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

  const login = async (data: LoginEndpointResponse) => {
    const authUser = await refresh(data);
    if (!authUser) {
      logout();
      return;
    }
    navigate(routes.main);
  };

  useEffect(() => {
    const params = new URLSearchParams(search);
    const token = params.get('token')?.replace(/"/g, '');
    const expires_at = params.get('expires_at');

    if (token && expires_at) {
      refresh({ token, expires_at }).finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, []);

  if (loading) return null;

  return (
    <AuthContext.Provider value={{ user, logout, login, refresh }}>
      {children}
    </AuthContext.Provider>
  );
};
