import { Module } from '@nestjs/common';
import { NoteService } from './note.service';
import { NoteController } from './note.controller';
import { DataBaseModule } from 'src/database/prisma/database.module';

@Module({
  imports: [DataBaseModule],
  controllers: [NoteController],
  providers: [NoteService],
})
export class NoteModule {}
