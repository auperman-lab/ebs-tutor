import { useRoutes } from 'react-router-dom';
import { routes } from '@const';
import { DashboardLayout } from '@layout';
import { MainPage } from '@features/dashboard';
import { SettingsPage } from '@features/settings';
import { CoursePage, CoursesPage } from '@features/courses';
import { CreateCoursePage } from '@features/create-course';
import { NotFoundPage } from '@features/not-found';
import { ProtectedRoute } from './ProtectedRoute';

export const Router = () => {
  return useRoutes([
    {
      path: routes.main,
      element: (
        <ProtectedRoute>
          <DashboardLayout />
        </ProtectedRoute>
      ),
      children: [
        { index: true, element: <MainPage /> },
        { path: routes.settings, element: <SettingsPage /> },
        { path: `${routes.courses}/:id`, element: <CoursePage /> },
        { path: routes.courses, element: <CoursesPage /> },
        { path: routes.create, element: <CreateCoursePage /> },
      ],
    },
    {
      path: routes.notFound,
      element: <NotFoundPage />,
    },
    {
      path: '*',
      element: <NotFoundPage />,
    },
  ]);
};
