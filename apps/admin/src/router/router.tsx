import { useRoutes } from 'react-router-dom';

import { routes } from '@const';
import { LoginPage, RegistrationPage } from '../features/auth';
import {  DashboardLayout, AuthLayout } from '../layout';
import { MainPage, SettingsPage } from "../features/dashboard";

export const Router = () => {
  return useRoutes([
    {
      path: routes.main,
      element: (
        <DashboardLayout />
      ),
      children: [
        {
          index: true,
          element: <MainPage />
        },
        {
          path: routes.settings,
          element: <SettingsPage />
        },
      ]
    },
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
        {
          path: routes.login,
          element: <LoginPage />
        },
      ]
    }
  ]);
};
