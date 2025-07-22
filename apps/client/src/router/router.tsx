import { useRoutes } from 'react-router-dom';
import { routes } from '@client/const';
import { AuthLayout, MainLayout, StudentLayout } from '@client/layout';
import { LoginPage, RegistrationPage } from '@client/features/auth';
import { CourseListPage } from '@client/features/courseList';
import { CoursePage, CoursePagePaid } from '@client/features/course';
import {
  AboutPage,
  BecomeInstructorPage,
  ContactPage,
  HomePage,
} from '@client/features/home';
import { StudentPage } from '@client/features/student';
import { ProtectedRoute } from './ProtectedRoute';
import { TutorPage } from '@client/features/tutor';
import { CartPage } from '@client/features/cart';

export const Router = () => {
  return useRoutes([
    {
      path: routes.main,
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: routes.contact,
          element: <ContactPage />,
        },
        {
          path: routes.about,
          element: <AboutPage />,
        },
        {
          path: routes.cart,
          element: <CartPage />,
        },
        {
          path: routes.becomeInstructor,
          element: <BecomeInstructorPage />,
        },
        {
          path: routes.courses,
          element: <CourseListPage />,
        },
        {
          path: routes.courses + '/:id',
          element: <CoursePage />,
        },
        {
          path: routes.tutor + '/:id',
          element: <TutorPage />,
        },
      ],

    },
    {
      path: routes.main,
      element: (
        <ProtectedRoute>
          <MainLayout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: routes.courses + '/:id',
          element: <CoursePagePaid />,
        },
        {
          path: routes.profile,
          element: <StudentPage />,
        },
      ],
    },
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
      ],
    },
  ]);
};
