import { Injectable } from '@nestjs/common';

import { Prisma } from '@prisma/client';

import { JsonObject } from '@prisma/client/runtime/library';
import { CreateFileDto } from './dto/create-file.dto';
import { FileRepository } from 'src/database/prisma/repositories/file.repository';

@Injectable()
export class FileService {
  constructor(private fileRepository: FileRepository) {}

  async findOne(fileWhereInput: Prisma.FileWhereInput) {
    return this.fileRepository.findOne(fileWhereInput);
  }

  async create(noteId: number, name: string) {
    return this.fileRepository.create({
      name: name,
      note: { connect: { Id: noteId } },
    });
    // return console.log(name);
  }

  async findAll() {
    return this.fileRepository.findAll();
  }

  async remove(id: number) {
    return this.fileRepository.remove({ Id: id });
  }
}
