import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, Length } from 'class-validator';

export class LoginUserDto {
  @IsString()
  @Length(3, 255)
  @IsNotEmpty()
  @ApiProperty()
  username: string;

  @IsString()
  @Length(6, 255)
  @IsNotEmpty()
  @ApiProperty()
  password: string;
}
