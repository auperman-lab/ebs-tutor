import { Module } from '@nestjs/common';
import { CoursesController } from './courses.controller';
import { CoursesService } from './courses.service';
import { CategoriesModule } from './categories/categories.module';
import { TopicsModule } from './topics/topics.module';

@Module({
  controllers: [CoursesController],
  providers: [CoursesService],
  imports: [CategoriesModule, TopicsModule]
})
export class CoursesModule {}
