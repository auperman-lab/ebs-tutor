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
  jwt:string
}


