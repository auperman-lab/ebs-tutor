export type User = {
  id: number;
  fullName: string;
  avatar: string;
  email: string;
  roles: string[];
};

export type AuthUser = {
  user: User;
  token: string;
};

export type Roles = 'admin' | 'student' | 'educator';

export type DecodedToken = {
  aud: string;
  jti: string;
  iat: number;
  nbf: number;
  exp: number;
  sub: number;
  scopes: string[];
};

export type UserChangeSettingsRequest = {
  first_name?: string;
  last_name?: string;
  phone?: string;
  bio?: string;
  email?: string;
};

export type ChangeEmail = {
  email: string;
};

export type ChangePasswordRequest = {
  current_password: string;
  new_password: string;
  new_confirm_password: string;
};
