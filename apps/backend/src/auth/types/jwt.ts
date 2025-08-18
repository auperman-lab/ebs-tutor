import { Role } from '@prisma/client';

export type Tokens = {
  accessToken: string;
  refreshToken: string;
};

export type JwtPayload = {
  email: string;
  sub: number;
  roles: Role[];
};

export type JwtPayloadWithRt = JwtPayload & { refreshToken: string };
