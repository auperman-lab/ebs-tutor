import { SetMetadata } from '@nestjs/common';
import { ROLES_KEY } from '../types';
import { Role } from '@prisma/client';
export const Roles = (...roles: [Role, ...Role[]]) =>
  SetMetadata(ROLES_KEY, roles);
