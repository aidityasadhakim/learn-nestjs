import { Document, ObjectId } from 'mongoose';

export default interface ITransaction extends Document {
  readonly user: ObjectId;
  readonly type: string;
  readonly amount: number;
  readonly destinationAccount?: ObjectId;
}
