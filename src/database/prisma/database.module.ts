import { Module } from '@nestjs/common';
import { UserRepository } from './repositories/user.repository';
import { PrismaService } from './prisma.service';
import { BoardRepository } from './repositories/board.repository';

import { CategoryRepository } from './repositories/category.repository';
import { NoteRepository } from './repositories/note.repository';
import { FileRepository } from './repositories/file.repository';

@Module({
  exports: [
    CategoryRepository,
    UserRepository,
    BoardRepository,
    NoteRepository,
    FileRepository,
    PrismaService,
  ],
  providers: [
    CategoryRepository,
    UserRepository,
    BoardRepository,
    FileRepository,
    NoteRepository,
    PrismaService,
  ],
})
export class DataBaseModule {}
