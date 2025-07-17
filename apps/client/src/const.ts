export const api = 'https://demo.api.s.wellms.io/api';

export const perPage = 12;

export const routes = {
  //common
  main: '/',
  login: '/login',
  register: '/register',
  settings: '/settings',
  courses: '/courses',
  notFound: '/not-found',

  //client
  about: '/about',
  contact: '/contact',
  becomeInstructor: '/become-instructor',
  cart: '/cart',
  profile: '/profile',
  tutor: '/tutors',

  //admin
  create: '/create-course',
};

export const apiEndpoints = {
  changePassword: '/profile/password',
  register: '/auth/register',
  login: '/auth/login',
  getUser: '/admin/users',
  retrieveMyself: 'profile/me',
  refreshToken: '/auth/refresh',
  getCategories: '/categories',
  getTags: '/tags/unique',
  getAllCourses: '/courses',
  getTutors: '/tutors',
};

export enum Roles {
  ADMIN = 'admin',
  USER = 'student',
}

export const regexPatterns = {
  password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
};
