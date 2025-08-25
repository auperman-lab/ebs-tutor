import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { TopicsService } from './topics.service';
import { Prisma, Topic, Role } from '@prisma/client';
import { Roles, Public } from '../../common/decorators';

@Controller('topics')
export class TopicsController {
  constructor(private readonly topicsService: TopicsService) {}

  @Post()
  @Roles(Role.TUTOR)
  @HttpCode(HttpStatus.CREATED)
  create(@Body() body: Prisma.TopicCreateInput): Promise<Topic> {
    return this.topicsService.create(body);
  }

  @Get()
  @Public()
  @HttpCode(HttpStatus.OK)
  findAll() {
    return this.topicsService.findAll();
  }

  @Get(':id')
  @Public()
  @HttpCode(HttpStatus.OK)
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.topicsService.findOne(id);
  }

  @Get('lesson/:lessonId')
  @Public()
  @HttpCode(HttpStatus.OK)
  findByLesson(@Param('lessonId', ParseIntPipe) lessonId: number) {
    return this.topicsService.findByLesson(lessonId);
  }

  @Put(':id')
  @Roles(Role.ADMIN)
  @HttpCode(HttpStatus.OK)
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: Prisma.TopicUpdateInput
  ) {
    return this.topicsService.update(id, body);
  }

  @Delete(':id')
  @Roles(Role.ADMIN)
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.topicsService.remove(id);
  }
}
