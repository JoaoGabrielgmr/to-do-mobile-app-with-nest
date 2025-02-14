import { PartialType } from '@nestjs/mapped-types';
import { CreateBoardDto } from './create-board.dto';
import { IsString, MinLength } from 'class-validator';

export class UpdateBoardDto extends PartialType(CreateBoardDto) {
       @IsString()
        name: string;

}
