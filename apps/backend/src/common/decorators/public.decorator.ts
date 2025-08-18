import { SetMetadata } from '@nestjs/common';
import { PUBLIC_KEY } from '../types';

export const Public = () => SetMetadata(PUBLIC_KEY, true);
