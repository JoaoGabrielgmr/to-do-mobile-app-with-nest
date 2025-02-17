import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsEmail, IsOptional, IsPhoneNumber, IsString, MinLength } from 'class-validator';

export class UpdateUserPasswordDto extends PartialType(CreateUserDto) {
    
    @IsString()
    @MinLength(8)
    password: string;

}
