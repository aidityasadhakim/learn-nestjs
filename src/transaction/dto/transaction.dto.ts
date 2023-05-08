import { ApiProperty } from '@nestjs/swagger';
import {
  IsAlphanumeric,
  MaxLength,
  IsString,
  IsNotEmpty,
  Length,
  IsLowercase,
  NotContains,
  IsNumber,
} from 'class-validator';
import { ObjectId } from 'mongoose';

export class TransactionDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  user: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  type: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  @Length(6, 255)
  amount: number;

  @ApiProperty()
  @IsString()
  destinationAccount?: string;
}
