import { IsNotEmpty, IsString, IsEmail, IsNumber } from "class-validator";
import { UserRole } from "../type";

class CreateProductDto {
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  firstname: string;

  @IsNotEmpty()
  @IsString()
  lastname: string;

  @IsNotEmpty()
  @IsString()
  username: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsNotEmpty()
  @IsNumber()
  role:UserRole
}

export default CreateProductDto;
