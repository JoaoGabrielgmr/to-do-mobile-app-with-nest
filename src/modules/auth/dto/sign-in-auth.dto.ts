import { IsEmail, IsString, MinLength } from 'class-validator';

export class AuthPayLoadDto {
  @IsString()
  email: string;

  @IsString()
  @MinLength(6)
  password: string;
}
