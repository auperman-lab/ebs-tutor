import { useRoutes } from 'react-router-dom';

import { routes } from '@const';
import { LoginPage, RegistrationPage } from "@features/auth";
import { MainPage } from '@features/dashboard';
import { CoursePage, CoursesPage } from "@features/courses";
import { SettingsPage } from "@features/settings";
import { NotFoundPage } from "@features/not-found";

import { AuthProvider } from '@context';
import { DashboardLayout, AuthLayout } from '@layout';

import {
  LoginPage,
  RegistrationPage,
  MainPage,
  CoursePage,
  MyCoursesPage,
  SettingsPage,
  NotFoundPage,
  CreateCoursePage,
} from '@features';

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
          path: routes.courses + '/:title',
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
