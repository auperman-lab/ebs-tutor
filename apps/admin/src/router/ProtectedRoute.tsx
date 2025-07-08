import { ReactNode } from 'react';
import { useAuth } from '@hooks';
import { Roles, routes } from '@const';
import { Navigate } from 'react-router-dom';

interface Props {
  children: ReactNode;
}

export const ProtectedRoute = ({ children }: Props) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to={routes.login} replace />;
  }

  if (user && user.roles.includes(Roles.ADMIN)) {
    return <>{children}</>;
  }

  return <Navigate to={routes.notFound} replace />;
};
