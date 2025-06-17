import { useRoutes } from 'react-router-dom';
import { routes } from '@const';
import { LoginPage, RegistrationPage } from '../features/auth';
import { NotFoundPage } from '../features/NotFound';
import { AuthLayout } from '../layout';
import { AuthProvider } from "@context";
import { NotFoundPage } from "../features/NotFound";

export const Router = () => {
  return useRoutes([
    {
      path: routes.main,

      element: (
        <AuthProvider>
          <AuthLayout />
        </AuthProvider>
      ),

        
      children: [
        {
          path: routes.register,
          element: <RegistrationPage />,
        },
        {
          path: routes.login,
          element: <LoginPage />,
        },
        {
          path: '*',
          element: <NotFoundPage />,
        },

      ],
    },
  ]);
};
