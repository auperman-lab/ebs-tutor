import { Injectable } from '@nestjs/common';
import { Category, Prisma } from '@prisma/client';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class CategoriesService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.CategoryCreateInput): Promise<Category> {
    return this.prisma.category.create({ data });
  }

  async findAll(
    where?: Prisma.CategoryWhereInput,
    select?: Prisma.CategorySelect
  ) {
    if (select) {
      return this.prisma.category.findMany({
        where: where ?? {},
        select: {
          ...select,
        },
      });
    }
    return this.prisma.category.findMany({
      where: where ?? {},
    });
  }

  async findOne(id: number, select?: Prisma.CategorySelect) {
    if (select) {
      return this.prisma.category.findUnique({
        where: { id },
        select: {
          ...select,
        },
      });
    }
    return this.prisma.category.findUnique({
      where: { id },
    });
  }

  async update(id: number, data: Prisma.CourseUpdateInput): Promise<Category> {
    return this.prisma.category.update({
      where: { id },
      data,
    });
  }

  async remove(id: number) {
    return this.prisma.category.delete({ where: { id } });
  }
}
