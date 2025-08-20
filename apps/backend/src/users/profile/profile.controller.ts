import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Patch,
  Post,
  Put,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { CloudinaryService } from '../../cloudinary/cloudinary.service';
import { Roles } from '../../common/decorators/roles.decorator';
import { Role } from '@prisma/client';
import { GetCurrentUserId } from '../../common/decorators';
import { UsersService } from '../users.service';
import * as bcrypt from 'bcrypt';

@Roles(Role.USER)
@Controller('profile')
export class ProfileController {
  constructor(
    private readonly uploadService: CloudinaryService,
    private readonly usersService: UsersService
  ) {}

  @Post('avatar')
  @UseInterceptors(FileInterceptor('file'))
  @HttpCode(HttpStatus.CREATED)
  async uploadAvatar(
    @UploadedFile() file: Express.Multer.File,
    @GetCurrentUserId() userId: number
  ) {
    const result = await this.uploadService.upload(file, {
      folder: 'avatar',
      transformation: [{ width: 128, height: 128, crop: 'fill' }],
    });
    return this.usersService.update(userId, { avatar: result.secure_url });
  }

  @Get('me')
  async getMe(@GetCurrentUserId() userId: number) {
    return this.usersService.findOne(userId, {
      id: true,
      name: true,
      email: true,
      bio: true,
      title: true,
      avatar: true,
    });
  }

  @Put('me')
  async updateMe(
    @GetCurrentUserId() userId: number,
    @Body()
    updateDto: {
      name?: string;
      bio?: string;
      title?: string;
    }
  ) {
    return this.usersService.update(userId, updateDto);
  }

  @Patch('me/password')
  async resetPassword(
    @GetCurrentUserId() userId: number,
    @Body() dto: { oldPassword: string; newPassword: string }
  ) {
    const password = await this.usersService.findOnePassword(userId);
    if (!password) throw new Error('User not found');

    const isMatch = await bcrypt.compare(dto.oldPassword, password.password);
    if (!isMatch) throw new Error('Invalid old password');

    const hashed = await bcrypt.hash(dto.newPassword, 10);
    return this.usersService.update(userId, { password: hashed });
  }

  @Delete('delete')
  @HttpCode(HttpStatus.NO_CONTENT)
  async deleteAccount(@GetCurrentUserId() userId: number) {
    return this.usersService.remove(userId);
  }
}
