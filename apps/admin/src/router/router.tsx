import { useRoutes } from 'react-router-dom';
import { routes } from '@const';
import { LoginPage, RegistrationPage } from '../features/auth';
import { NotFoundPage } from '../features/NotFound/NotFoundPage';
import { AuthLayout } from '../layout';

export const Router = () => {
  return useRoutes([
    {
      path: routes.main,
      element: <AuthLayout />,
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
