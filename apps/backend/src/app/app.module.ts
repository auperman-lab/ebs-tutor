import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from '../users/users.module';
import { PrismaModule } from '../prisma/prisma.module';
import { AuthModule } from '../auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { AtGuard } from '../common/guards';
import { RolesGuard } from '../common/guards/roles.guard';
import { CloudinaryModule } from '../cloudinary/cloudinary.module';
import { ProfileModule } from '../users/profile/profile.module';

@Module({
  imports: [
    UsersModule,
    ProfileModule,
    PrismaModule,
    AuthModule,
    CloudinaryModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: AtGuard,
    },
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
})
export class AppModule {}
