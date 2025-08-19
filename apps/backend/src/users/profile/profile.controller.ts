import {
  Controller,
  Delete,
  HttpCode,
  HttpStatus,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { CloudinaryService } from '../../cloudinary/cloudinary.service';
import { Roles } from '../../common/decorators/roles.decorator';
import { Role } from '@prisma/client';
import { GetCurrentUserId } from '../../common/decorators';
import { UsersService } from '../users.service';

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

  @Delete('delete')
  @HttpCode(HttpStatus.NO_CONTENT)
  async deleteAccount(@GetCurrentUserId() userId: number) {
    return this.usersService.remove(userId);
  }
}
