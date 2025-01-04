import { IsString, IsNumber, IsEmail, IsOptional, IsEnum } from 'class-validator';

export class CreateUser {
  @IsString()
  firstName: string;

  @IsString()
  @IsOptional()
  lastname: string;

  @IsNumber()
  age: number;

  @IsEmail()
  @IsOptional()
  email: string;
  
  @IsEnum(["user","admin"])
  role:string
}
