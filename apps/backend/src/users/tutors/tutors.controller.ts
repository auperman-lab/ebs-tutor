import { Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { UsersService } from '../users.service';
import { Role } from '@prisma/client';
import { Roles, Public } from '../../common/decorators';

@Controller('tutors')
export class TutorsController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  @Public()
  async getAllTutors() {
    return this.usersService.findAll(
      { roles: { has: Role.TUTOR } },
      { id: true, name: true, email: true, avatar: true }
    );
  }

  @Get(':id')
  @Public()
  async getTutorById(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.findOne(id, {
      id: true,
      name: true,
      email: true,
      avatar: true,
      bio: true,
    });
  }

  @Post(':id/promote')
  @Roles(Role.USER)
  async createTutor(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.update(id, {
      roles: [Role.TUTOR, Role.USER],
    });
  }
}
