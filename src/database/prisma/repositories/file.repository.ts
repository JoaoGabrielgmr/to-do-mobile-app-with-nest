import { Global, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Prisma } from '@prisma/client';

@Global()
@Injectable()
export class FileRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findOne(fileWhereInput: Prisma.FileWhereInput) {
    return this.prisma.file.findFirst({
      where: fileWhereInput,
    });
  }

  async create(data: Prisma.FileCreateInput) {
    return this.prisma.file.create({
      data,
    });
  }

  async findAll() {
    return this.prisma.file.findMany();
  }

  async uploadFile(
    where: Prisma.FileWhereUniqueInput,
    data: Prisma.FileUpdateInput,
  ) {
    return this.prisma.file.update({
      where,
      data,
    });
  }

  async remove(where: Prisma.FileWhereUniqueInput) {
    return this.prisma.file.delete({
      where,
    });
  }
}
