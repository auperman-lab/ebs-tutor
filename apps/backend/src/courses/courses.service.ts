import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Course, Prisma } from '@prisma/client';

@Injectable()
export class CoursesService {
  constructor(private prisma: PrismaService) {}

  async create(
    data: Prisma.CourseCreateInput,
    author_id: number
  ): Promise<Course> {
    const { author, ...rest } = data;
    return this.prisma.course.create({
      data: {
        ...rest,
        author: { connect: { id: author_id } },
        categories: data.categories
          ? { connect: (data.categories as any).connect }
          : undefined,
        tags: data.tags ? { connect: (data.tags as any).connect } : undefined,
      },
      include: {
        author: true,
        categories: true,
        tags: true,
      },
    });
  }

  async findAll() {
    return this.prisma.course.findMany();
  }

  async findOne(id: number) {
    return this.prisma.course.findUnique({
      where: { id },
    });
  }

  async update(id: number, data: Prisma.CourseUpdateInput) {
    return this.prisma.course.update({
      where: { id },
      data,
    });
  }

  async delete(id: number) {
    return this.prisma.course.delete({
      where: { id },
    });
  }
}
