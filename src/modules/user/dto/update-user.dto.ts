import { IsOptional, IsString, IsEmail,IsNumber } from "class-validator";
import { UserRole } from "../type";

class UpdateProductDto {
  @IsOptional()
  @IsString()
  @IsEmail()
  email: string;

  @IsOptional()
  @IsString()
  firstname: string;

  @IsOptional()
  @IsString()
  lastname: string;

  @IsOptional()
  @IsString()
  username: string;

  @IsOptional()
  @IsNumber()
  role:UserRole
}

export default UpdateProductDto;
