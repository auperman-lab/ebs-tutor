import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: Prisma.UserCreateInput) {
    data.password = await bcrypt.hash(data.password, 10);
    return this.prisma.user.create({ data });
  }

  async findAll(where?: Prisma.UserWhereInput, select?: Prisma.UserSelect) {
    return this.prisma.user.findMany({
      where: where ?? {},
      select: {
        ...(select ?? {}),
        password: false,
      },
    });
  }

  async findOne(id: number, select?: Prisma.UserSelect) {
    return this.prisma.user.findUnique({
      where: { id },
      select: {
        ...(select ?? {}),
        password: false,
      },
    });
  }

  async findOnePassword(id: number) {
    return this.prisma.user.findUnique({
      where: { id },
      select: {
        password: true,
      },
    });
  }

  async findOneByEmail(email: string) {
    return this.prisma.user.findUnique({ where: { email } });
  }

  async update(id: number, data: Prisma.UserUpdateInput) {
    return this.prisma.user.update({
      where: { id },
      data,
      omit: {
        password: true,
      },
    });
  }

  async remove(id: number) {
    return this.prisma.user.delete({ where: { id } });
  }
}
