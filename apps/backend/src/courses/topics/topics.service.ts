import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Topic, Prisma } from '@prisma/client';

@Injectable()
export class TopicsService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.TopicCreateInput): Promise<Topic> {
    return this.prisma.topic.create({ data });
  }

  async findAll(
    where?: Prisma.TopicWhereInput,
    select?: Prisma.TopicSelect
  ): Promise<Topic[]> {
    if (select) {
      return this.prisma.topic.findMany({
        where: where ?? {},
        select,
      });
    }
    return this.prisma.topic.findMany({
      where: where ?? {},
    });
  }

  async findOne(
    id: number,
    select?: Prisma.TopicSelect
  ): Promise<Topic | null> {
    if (select) {
      return this.prisma.topic.findUnique({
        where: { id },
        select,
      });
    }
    return this.prisma.topic.findUnique({
      where: { id },
    });
  }

  async findByLesson(lessonId: number): Promise<Topic[]> {
    return this.prisma.topic.findMany({
      where: { lesson_id: lessonId },
    });
  }

  async update(id: number, data: Prisma.TopicUpdateInput): Promise<Topic> {
    return this.prisma.topic.update({
      where: { id },
      data,
    });
  }

  async remove(id: number): Promise<Topic> {
    return this.prisma.topic.delete({ where: { id } });
  }
}
