import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';

@Schema()
export class Users {
  @ApiProperty()
  @Prop({
    required: true,
  })
  name: string;

  @ApiProperty()
  @Prop({
    required: true,
  })
  username: string;

  @ApiProperty()
  @Prop({
    required: true,
  })
  password: string;

  @ApiProperty({ required: false })
  @Prop({
    default: 0,
  })
  balance?: number;
}

export const UsersSchema = SchemaFactory.createForClass(Users);
