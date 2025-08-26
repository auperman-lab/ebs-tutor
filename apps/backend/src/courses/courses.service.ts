import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Course, Prisma } from '@prisma/client';

@Injectable()
export class CoursesService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.CourseCreateInput): Promise<Course> {
    return this.prisma.course.create({
      data,
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

  async update(
    id: number,
    data: Prisma.CourseUpdateInput,
    currentUserId: number
  ) {
    const course = await this.findOne(id);
    if (!course) {
      throw new ForbiddenException('Access denied');
    }
    if (course.author_id != currentUserId) {
      throw new ForbiddenException('Access denied');
    }

    return this.prisma.course.update({
      where: { id },
      data,
      include: {
        author: true,
        categories: true,
        tags: true,
      },
    });
  }

  async delete(id: number, currentUserId: number) {
    const course = await this.findOne(id);
    if (!course) {
      throw new ForbiddenException('Access denied');
    }
    if (course.author_id != currentUserId) {
      throw new ForbiddenException('Access denied');
    }
    return this.prisma.course.delete({
      where: { id },
    });
  }
}
