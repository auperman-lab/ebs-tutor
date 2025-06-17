export type User = {
  id: string;
  email: string;
  role: string
}

export type AuthUser = {
  user: User;
  accessToken: string;
  refreshToken: string;
}

export type Roles = "admin" | "user" | "educator"

export interface DecodedToken {
  user: {
    id: number;
    email: string;
    role: Roles;
  };
  iat: number;
  exp?: number;
}
