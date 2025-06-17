export const api = "https://api-stage.escolalms.com/";

export const routes = {
  main: "/",
  login: "/login",
  register: "/register",
  settings: "/settings",
  courses: "/courses"
};

export const apiEndpoints = {
  register: "/api/auth/register",
  login: "/api/auth/login",
};


export const regexPatterns = {
  password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
};
