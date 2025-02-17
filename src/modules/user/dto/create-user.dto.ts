import { IsEmail, IsPhoneNumber, IsString, Min, MinLength } from "class-validator";

export class CreateUserDto {
    
    @IsString()
    name: string;
    
    @IsEmail()
    email: string;
    
    @IsString()
    @MinLength(8)
    password: string;
    
    @IsPhoneNumber('BR')
    phone: string;
}
