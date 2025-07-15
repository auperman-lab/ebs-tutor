import { ReactNode } from 'react';
import { useAuth } from '@clientHooks';
import { Roles, routes } from '@clientConst';
import { Navigate } from 'react-router-dom';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

export const ProtectedRoute = ({ children }: Props) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to={routes.login} replace />;
  }

  if (user && user.roles.includes(Roles.USER)) {
    return <>{children}</>;
  }

  return <Navigate to={routes.notFound} replace />;
};
