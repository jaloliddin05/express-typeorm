import { IsOptional, IsString } from "class-validator";

class UpdatePostDto {
  @IsOptional()
  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  description: string;

  @IsOptional()
  @IsString()
  user: string;
}

export default UpdatePostDto;
