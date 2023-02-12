import { IsNotEmpty, IsString } from "class-validator";

class CreatePostDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsString()
  user: string;
}

export default CreatePostDto;
