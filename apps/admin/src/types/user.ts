export type User = {
  id: number;
  fullName: string;
  avatar: string;
  email: string;
  roles: string[];
}

export type AuthUser = {
  user: User;
  token: string;
}

export type Roles = "admin" | "student" | "educator"

export type DecodedToken = {
  aud: string;
  jti: string;
  iat: number;
  nbf: number;
  exp: number;
  sub: number;
  scopes: string[];
};
