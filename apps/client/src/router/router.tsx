import { useRoutes } from "react-router-dom";
import { routes } from "@clientConst";
import { AuthLayout, MainLayout, StudentLayout } from "@clientLayout";
import { LoginPage, RegistrationPage } from "@clientFeatures/auth";
import { CourseListPage } from "@clientFeatures/courseList";
import { CoursePage, CoursePagePaid } from "@clientFeatures/course";
import { AboutPage, BecomeInstructorPage, ContactPage, HomePage } from "@clientFeatures/home";
import { StudentPage, TeacherPage } from "@clientFeatures/student";
import { ProtectedRoute } from "./ProtectedRoute";

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
          path: routes.becomeInstructor,
          element: <BecomeInstructorPage />,
        },
        {
          path: routes.courses,
          element: <CourseListPage />,
        },
        {
          path: routes.courses + "/:id",
          element: <CoursePage />,
        },
        {
          path: routes.teacher + "/:id",
          element: <TeacherPage />,
        },
      ],

    },
    {
      path: routes.main,
      element: (
        <ProtectedRoute>
          <StudentLayout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: routes.courses + "/:id",
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
