// src/auth/auth.service.ts
import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService
  ) {}

  async register(data: any) {
    const hashedPassword = await bcrypt.hash(data.password, 10);
    const user = await this.usersService.create({
      ...data,
      password: hashedPassword,
    });
    const token = this.jwtService.sign({ sub: user.id });
    return { user, token };
  }

  async login(email: string, password: string) {
    const user = await this.usersService.findOneByEmail(email);
    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw new Error('Invalid credentials');
    }
    const token = this.jwtService.sign({ sub: user.id });
    return { user, token };
  }

  async refresh(refreshToken: string) {
    return { accessToken: 'new-token' };
  }
}
