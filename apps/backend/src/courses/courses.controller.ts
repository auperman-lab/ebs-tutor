import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  ParseIntPipe,
} from '@nestjs/common';
import { CoursesService } from './courses.service';
import { Prisma, Role } from '@prisma/client';
import { Roles, Public, GetCurrentUserId } from '../common/decorators';
import { CreateCourseDto, UpdateCourseDto } from './dto/course.dto';

@Controller('courses')
@Roles(Role.TUTOR)
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Post()
  create(@Body() dto: CreateCourseDto) {
    const { author_id, categories, tags, ...rest } = dto;

    const data: Prisma.CourseCreateInput = {
      ...rest,
      author: { connect: { id: author_id } },
      categories: categories?.length
        ? { connect: categories.map((id) => ({ id })) }
        : undefined,
      tags: tags?.length ? { connect: tags.map((id) => ({ id })) } : undefined,
    };

    return this.coursesService.create(data);
  }

  @Get()
  @Public()
  findAll() {
    return this.coursesService.findAll();
  }

  @Get(':id')
  @Public()
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.coursesService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateCourseDto,
    @GetCurrentUserId() userId: number
  ) {
    const { categories, tags, ...rest } = dto;

    const data: Prisma.CourseUpdateInput = {
      ...rest,
      categories: categories
        ? { set: categories.map((id) => ({ id })) }
        : undefined,
      tags: tags ? { set: tags.map((id) => ({ id })) } : undefined,
    };

    return this.coursesService.update(id, data, userId);
  }

  @Delete(':id')
  remove(
    @Param('id', ParseIntPipe) id: number,
    @GetCurrentUserId() userId: number
  ) {
    return this.coursesService.delete(id, userId);
  }
}
