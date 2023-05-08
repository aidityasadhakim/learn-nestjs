import { ApiProperty } from '@nestjs/swagger';
import {
  IsAlphanumeric,
  MaxLength,
  IsString,
  IsNotEmpty,
  Length,
  IsLowercase,
  NotContains,
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
  @IsLowercase()
  @NotContains(' ')
  username: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Length(6, 255)
  password: string;
}
