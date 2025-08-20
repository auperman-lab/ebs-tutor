import { Module } from '@nestjs/common';
import { TutorsController } from './tutors.controller';
import { UsersModule } from '../users.module';

@Module({
  controllers: [TutorsController],
  providers: [],
  imports: [UsersModule],
})
export class TutorsModule {}
