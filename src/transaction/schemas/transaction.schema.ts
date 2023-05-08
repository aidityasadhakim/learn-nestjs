import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { ObjectId, Types } from 'mongoose';

@Schema()
export class Transaction {
  @ApiProperty()
  @Prop({
    type: Types.ObjectId,
    ref: 'User',
  })
  user: {
    type: Types.ObjectId;
    ref: 'User';
    required: true;
  };

  @ApiProperty()
  @Prop({
    required: true,
    type: String,
    enum: ['deposit', 'withdrawal', 'transfer'],
  })
  type: string;

  @ApiProperty()
  @Prop({
    required: true,
    type: Number,
  })
  amount: number;

  @ApiProperty({ required: false })
  @Prop({
    required: false,
    type: Types.ObjectId,
    ref: 'User',
  })
  destinationAccount?: ObjectId;

  @ApiProperty({ required: false })
  @Prop({
    type: Date,
    default: Date.now(),
    required: false,
  })
  transactionDate?: number;
}

export const TransactionSchema = SchemaFactory.createForClass(Transaction);
