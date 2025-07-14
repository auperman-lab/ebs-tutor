export type LoginEndpointResponse = {
  token: string;
  expires_at: string;
};

export type ChangePasswordRequest = {
  email: string;
  password: string;
};
