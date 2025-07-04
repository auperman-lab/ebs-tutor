import { useRoutes } from 'react-router-dom';
import { routes } from '@clientConst';
import { AuthLayout, MainLayout, StudentLayout } from "@clientLayout";
import { LoginPage, RegistrationPage } from "@clientFeatures/auth";
import { CourseListPage } from "@clientFeatures/courseList";
import { CoursePage } from "@clientFeatures/course";

export const Router = () => {
  return useRoutes([
    {
      path: routes.main,
      element: <MainLayout/>,
      children: [
        {
          path: routes.courses,
          element: <CourseListPage />,
        },
        {
          path: routes.courses + '/:id',
          element: <CoursePage />,
        },

      ],

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
