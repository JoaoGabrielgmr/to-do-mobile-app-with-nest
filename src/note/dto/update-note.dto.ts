import { PartialType } from '@nestjs/mapped-types';
import { CreateNoteDto } from './create-note.dto';
import { IsOptional, IsString } from 'class-validator';

export class UpdateNoteDto extends PartialType(CreateNoteDto) {
    @IsOptional()
    @IsString()
    title: string;

    @IsOptional()
    @IsString()
    text: string;
}
