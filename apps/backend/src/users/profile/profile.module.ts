import { Module } from '@nestjs/common';
import { ProfileController } from './profile.controller';
import { UsersModule } from '../users.module';

@Module({
  controllers: [ProfileController],
  providers: [],
  imports: [UsersModule],
})
export class ProfileModule {}
