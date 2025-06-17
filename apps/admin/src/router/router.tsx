import { useRoutes } from 'react-router-dom';

import { routes } from '@const';
import { LoginPage, RegistrationPage } from '../features/auth';
import { AuthLayout } from '../layout';
import { AuthProvider } from "@context";

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
          element: <RegistrationPage />
        },
        {
          path: routes.login,
          element: <LoginPage />
        },
      ]
    }
  ]);
};
