import { IsInt, IsOptional, IsString } from "class-validator";

export class CreateCategoryDto {

    @IsString()
    name: string;
    
    @IsOptional()
    @IsString()
    color: string;
    
    @IsInt()
    userId: number;
}
