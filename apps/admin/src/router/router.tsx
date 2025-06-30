import { useRoutes } from 'react-router-dom';

import { routes } from '@const';

import { AuthProvider } from '@context';
import { DashboardLayout, AuthLayout } from '@layout';
import { MainPage } from "@features/dashboard";
import { SettingsPage } from "@features/settings";
import { CoursePage, CoursesPage } from "@features/courses";
import { CreateCoursePage } from "@features/create-course";
import { LoginPage, RegistrationPage } from "@features/auth";
import { NotFoundPage } from "@features/not-found";


export const Router = () => {
  return useRoutes([
    {
      path: routes.main,
      element: <DashboardLayout />,
      children: [
        {
          index: true,
          element: <MainPage />,
        },
        {
          path: routes.settings,
          element: <SettingsPage />,
        },
        {
          path: routes.courses + '/:id',
          element: <CoursePage />,
        },
        {
          path: routes.courses,
          element: <CoursesPage />,
        },
        {
          path: routes.create,
          element: <CreateCoursePage />,
        },
      ],
    },
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
