import { Global, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Prisma } from '@prisma/client';
import { UpdateUserPasswordDto } from 'src/modules/user/dto/update-user-passwd.dto';
import { UpdateUserDto } from 'src/modules/user/dto/update-user.dto';
import { Auth } from 'src/modules/auth/entities/auth.entity';
import { AuthPayLoadDto } from 'src/modules/auth/dto/sign-in-auth.dto';

@Global()
@Injectable()
export class UserRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findFirst(userWhereInput: Prisma.UserWhereInput) {
    return this.prisma.user.findFirst({
      where: userWhereInput,
    });
  }

  async create(data: Prisma.UserCreateInput) {
    return this.prisma.user.create({
      data,
    });
  }

  async updatePassword(params: { Id: number }, data: UpdateUserPasswordDto) {
    return this.prisma.user.update({
      where: { Id: params.Id },
      data: data,
    });
  }

  async update(params: { Id: number }, data: UpdateUserDto) {
    return this.prisma.user.update({
      where: { Id: params.Id },
      data: data,
    });
  }

  async remove(id: number) {
    return this.prisma.user.delete({
      where: { Id: id },
    });
  }
}
