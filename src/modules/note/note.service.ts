import { Injectable } from '@nestjs/common';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import { Prisma } from '@prisma/client';
import { NoteRepository } from 'src/database/prisma/repositories/note.repository';

@Injectable()
export class NoteService {
  constructor(private noteRepository: NoteRepository) {}

  async findOne(noteWhereInput: Prisma.NoteWhereInput) {
    return this.noteRepository.findOne(noteWhereInput);
  }

  async create(createNoteDto: CreateNoteDto) {
    return this.noteRepository.create(createNoteDto);
  }

  async findAll() {
    return this.noteRepository.findAll();
  }

  async update(id: number, updateNoteDto: UpdateNoteDto) {
    return this.noteRepository.update({ Id: id }, updateNoteDto);
  }

  async remove(id: number) {
    return this.noteRepository.remove({ Id: id });
  }
}
