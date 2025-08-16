// src/auth/auth.controller.ts
import { Body, Controller, Post, Delete } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersService } from '../users/users.service';
import { Prisma } from '@prisma/client';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly usersService: UsersService
  ) {}

  @Post('register')
  async register(@Body() data: Prisma.UserCreateInput) {
    // You might want to hash the password in AuthService
    return this.authService.register(data);
  }

  @Post('login')
  async login(@Body() credentials: { email: string; password: string }) {
    return this.authService.login(credentials.email, credentials.password);
  }

  // Delete account
  @Delete('delete')
  async deleteAccount(@Body() body: { userId: number }) {
    // You might also add auth guard to ensure the user is authenticated
    return this.usersService.remove(body.userId);
  }

  @Post('refresh')
  async refresh(@Body() body: { refreshToken: string }) {
    return this.authService.refresh(body.refreshToken);
  }
}
