import { ApiProperty } from '@nestjs/swagger';
import {
  IsAlphanumeric,
  MaxLength,
  IsString,
  IsNotEmpty,
  IsNumber,
  MinLength,
  Length,
} from 'class-validator';

export class CreateUserDto {
  @ApiProperty()
  @IsAlphanumeric()
  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  username: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Length(8, 255)
  password: string;
}
