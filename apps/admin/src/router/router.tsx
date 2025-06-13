import { useRoutes } from 'react-router-dom';

import { routes } from '../const';
import { RegistrationPage } from '../features/auth';
import { AuthLayout } from '../layout';

export const Router = () => {
  return useRoutes([
    {
      path: routes.main,
      element: (
        <AuthLayout />
      ),
      children: [
        {
          path: routes.register,
          element: <RegistrationPage />
        },
      ]
    }
  ]);
};
