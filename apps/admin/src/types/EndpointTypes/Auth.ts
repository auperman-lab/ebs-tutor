export type RegisterEndpointProps = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  confirmPassword: string;
}

export type LoginEndpointProps = {
  email: string;
  password: string;
  remember: boolean;
}
