import { IsOptional, IsString } from 'class-validator';

export class CreateFileDto {
  @IsString()
  name: string;

  @IsString()
  noteId: string;
}
