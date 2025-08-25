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
import { Roles, Public } from '../common/decorators';

@Controller('courses')
@Roles(Role.TUTOR)
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Post()
  create(@Body() data: Prisma.CourseCreateInput & { author_id: number }) {
    const { author_id, ...rest } = data;
    return this.coursesService.create(rest, data.author_id);
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
    @Body() data: Prisma.CourseUpdateInput
  ) {
    return this.coursesService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.coursesService.delete(id);
  }
}
