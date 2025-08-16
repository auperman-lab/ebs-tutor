import { ForbiddenException, Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { Prisma } from '@prisma/client';
import { Tokens } from './types';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService
  ) {}

  async register(data: Prisma.UserCreateInput): Promise<Tokens> {
    const user = await this.usersService.create(data);
    const tokens = await this.signTokens(user.id, user.email);
    await this.updateRtHash(user.id, tokens.refreshToken);

    return tokens;
  }

  async login(email: string, password: string): Promise<Tokens> {
    const user = await this.usersService.findOneByEmail(email);
    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw new ForbiddenException('Access denied');
    }

    const tokens = await this.signTokens(user.id, user.email);
    await this.updateRtHash(user.id, tokens.refreshToken);

    return tokens;
  }

  async refresh(userId: number, rt: string) {
    const user = await this.usersService.findOne(userId);

    if (!user || !user.refreshToken) {
      console.log('no user or refreshToken');
      throw new ForbiddenException('Access Denieded');
    }

    const rtMatches = await bcrypt.compare(rt, user.refreshToken);
    if (!rtMatches) {
      console.log('rt dont match');
      console.log('db rt', user.refreshToken);
      console.log('rt salted', rt);
      throw new ForbiddenException('Access Den');
    }

    const tokens = await this.signTokens(user.id, user.email);
    await this.updateRtHash(user.id, tokens.refreshToken);

    return tokens;
  }

  async logout(userId: number): Promise<boolean> {
    await this.usersService.update(userId, {
      refreshToken: null,
    });
    return true;
  }

  async updateRtHash(userId: number, rt: string): Promise<void> {
    const hash = await bcrypt.hash(rt, 10);
    await this.usersService.update(userId, { refreshToken: hash });
  }

  async signTokens(userId: number, email: string): Promise<Tokens> {
    const [at, rt] = await Promise.all([
      this.jwtService.signAsync(
        { sub: userId, email },
        { secret: 'secret', expiresIn: 60 * 2 }
      ),
      this.jwtService.signAsync(
        { sub: userId, email },
        { secret: 'secret', expiresIn: 60 * 5 }
      ),
    ]);
    return { accessToken: at, refreshToken: rt };
  }
}
