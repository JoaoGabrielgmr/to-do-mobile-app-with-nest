import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { NoteService } from './note.service';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';

@Controller()
export class NoteController {
  constructor(private readonly noteService: NoteService) {}

  @Post('note')
  create(@Body() createNoteDto: CreateNoteDto) {
    return this.noteService.create(createNoteDto);
  }

  @Get('notes')
  findAll() {
    return this.noteService.findAll();
  }

  @Get('note/:Id')
  findOne(@Query() { Id, boardId }) {
    return this.noteService.findOne({ Id: +Id, boardId: +boardId });
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNoteDto: UpdateNoteDto) {
    return this.noteService.update(+id, updateNoteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.noteService.remove(+id);
  }
}
