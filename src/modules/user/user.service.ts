import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserRepository } from 'src/database/prisma/repositories/user.repository';
import { Prisma } from '@prisma/client';
import { UpdateUserPasswordDto } from './dto/update-user-passwd.dto';
import { AuthPayLoadDto } from '../auth/dto/sign-in-auth.dto';

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository) {}

  async findOne(userWhereInput: Prisma.UserWhereInput) {
    return this.userRepository.findFirst(userWhereInput);
  }

  async create(createUserDto: CreateUserDto) {
    return this.userRepository.create(createUserDto);
  }

  async updatePassword(
    params: { Id: number },
    UpdateUserPasswordDto: UpdateUserPasswordDto,
  ) {
    return this.userRepository.updatePassword(params, UpdateUserPasswordDto);
  }

  // findAll() {
  //   return `This action returns all user`;
  // }

  async update(params: { Id: number }, updateUserDto: UpdateUserDto) {
    return this.userRepository.update(params, updateUserDto);
  }
  async remove(id: number) {
    return this.userRepository.remove(id);
  }
}
