import { Navigate } from 'react-router-dom';
import { useAuth } from "@hooks";
import { routes } from "@const";


export const GuestRoute = ({ children }: React.HTMLAttributes<HTMLElement>) => {
  const { user } = useAuth();
  const isLoggedIn = !!user;
  if (!isLoggedIn) {
    return children;
  }

  return <Navigate to={routes.main} />;
};
