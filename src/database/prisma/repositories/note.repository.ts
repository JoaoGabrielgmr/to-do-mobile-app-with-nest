import { Global, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Prisma } from '@prisma/client';

@Global()
@Injectable()
export class NoteRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findOne(noteWhereInput: Prisma.NoteWhereInput) {
    return this.prisma.note.findFirst({
      where: noteWhereInput,
    });
  }

  async create(data: Prisma.NoteCreateInput) {
    return this.prisma.note.create({
      data,
    });
  }

  async findAll() {
    return this.prisma.note.findMany();
  }

  async update(
    where: Prisma.NoteWhereUniqueInput,
    data: Prisma.NoteUpdateInput,
  ) {
    return this.prisma.note.update({
      where,
      data,
    });
  }

  async uploadFile(
    where: Prisma.NoteWhereUniqueInput,
    data: Prisma.NoteUpdateInput,
  ) {
    return this.prisma.note.update({
      where,
      data,
    });
  }

  async remove(where: Prisma.NoteWhereUniqueInput) {
    return this.prisma.note.delete({
      where,
    });
  }
}
