import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { User } from './user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Post()
  create(@Body() user: User) {
    return this.userService.create(user);
  }

  @Put('/:id')
  update(@Body() user: User, @Param('id') id: string) {
    return this.userService.update(user, id);
  }

  @Delete('/:id')
  remove(@Param('id') id: string) {
    return this.userService.remove(id);
  }
}
