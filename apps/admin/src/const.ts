export const api = 'https://demo.api.s.wellms.io/api';

export const routes = {
  main: '/',
  login: '/login',
  register: '/register',
  settings: '/settings',
  courses: '/courses',
  create: '/create-course',
  notFound: '/not-found',
};

export const apiEndpoints = {
  changePassword: '/profile/password',
  register: '/auth/register',
  login: '/auth/login',
  refreshToken: '/auth/refresh',
  getUser: '/admin/users',
  retrieveMyself: 'profile/me',
  changeAvatar: '/profile/upload-avatar',
  getAllCourses: '/admin/courses',
  getCategories: '/categories',
  getTags: '/tags',
  createCourse: '/admin/courses',
};

export enum Roles {
  ADMIN = 'admin',
  USER = 'student',
}

export const regexPatterns = {
  password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
};
