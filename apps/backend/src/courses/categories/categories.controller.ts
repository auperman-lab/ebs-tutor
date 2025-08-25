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
import { CategoriesService } from './categories.service';
import { Category, Prisma, Role } from '@prisma/client';
import { Roles, Public } from '../../common/decorators';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Post()
  @Roles(Role.TUTOR)
  @HttpCode(HttpStatus.CREATED)
  create(@Body() body: Prisma.CategoryCreateInput): Promise<Category> {
    return this.categoriesService.create(body);
  }

  @Get()
  @Public()
  @HttpCode(HttpStatus.OK)
  findAll() {
    return this.categoriesService.findAll();
  }

  @Get(':id')
  @Public()
  @HttpCode(HttpStatus.OK)
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.categoriesService.findOne(id);
  }

  @Get(':id/courses')
  @Public()
  @HttpCode(HttpStatus.OK)
  async findCoursesByCategory(@Param('id', ParseIntPipe) id: number) {
    return this.categoriesService.findOne(+id, {});
  }

  @Put(':id')
  @Roles(Role.ADMIN)
  @HttpCode(HttpStatus.OK)
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: Prisma.CourseUpdateInput
  ) {
    return this.categoriesService.update(id, body);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.categoriesService.remove(id);
  }
}
