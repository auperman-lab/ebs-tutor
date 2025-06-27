export type RegisterEndpointRequest = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  confirmPassword: string;
}

export type LoginEndpointRequest = {
  email: string;
  password: string;
  remember: boolean;
}

export type LoginEndpointResponse = {
  token:string
  expires_at: string
}

export type ChangePasswordRequest = {
  email: string;
  password: string;
};


