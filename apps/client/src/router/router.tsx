import { useRoutes } from 'react-router-dom';
import { routes } from '@clientConst';
import { AuthLayout, MainLayout, StudentLayout } from "@clientLayout";
import { LoginPage, RegistrationPage } from "@clientFeatures/auth";

export const Router = () => {
  return useRoutes([
    {
      path: routes.main,
      element: <MainLayout/>,
    },
    {
      path: routes.main,
      element: <StudentLayout/>,
    },
    {
      path: routes.main,
      element: (
          <AuthLayout />
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

      ],
    },
  ]);
};
