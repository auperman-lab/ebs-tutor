import { ReactNode } from 'react';
import { useAuth } from "@client/hooks";
import { Roles, routes } from "@client/const";
import { Navigate } from "react-router-dom";


interface Props {
  children: ReactNode;
  fallback?: ReactNode;

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
