export const api = "https://demo.api.s.wellms.io/api";


export const routes = {
  main: '/',
  login: '/login',
  register: '/register',
  settings: '/settings',
  courses: '/courses',
};

export const apiEndpoints = {
  changePassword: '/api/profile/password',
  register: '/api/auth/register',
  login: '/api/auth/login',
  refreshToken: "/auth/refresh",
  getUser: "/admin/users"
};

export const regexPatterns = {
  password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
};
