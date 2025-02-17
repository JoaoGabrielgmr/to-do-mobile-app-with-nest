import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  Req,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UpdateUserPasswordDto } from './dto/update-user-passwd.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { request } from 'http';
import { Public } from 'src/shared/decorators/public.decorator';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  // @Get()
  // findAll() {
  //   return this.userService.findAll();
  // }

  @Get(':id')
  findUserById(@Param('id') id: string) {
    return this.userService.findOne({
      Id: parseInt(id),
    });
  }

  @Patch('update/:Id')
  update(@Param('Id') Id, @Body() dto: UpdateUserDto) {
    return this.userService.update(Id, dto);
  }

  @Patch('update-password/:Id')
  updatePassword(@Param('Id') Id, @Body() dto: UpdateUserPasswordDto) {
    return this.userService.updatePassword(Id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }

  // @Get('email/:email')
  // find(@Param('email') email: string) {
  //   return this.userService.findbyEmail({ email });
  // }
}
