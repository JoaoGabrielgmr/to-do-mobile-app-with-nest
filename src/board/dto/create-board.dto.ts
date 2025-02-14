import { IsInt, IsString ,IsNumber, MinLength} from 'class-validator';

export class CreateBoardDto {
    @IsString()
    name: string;

    @IsInt()
    userId: number;
}
