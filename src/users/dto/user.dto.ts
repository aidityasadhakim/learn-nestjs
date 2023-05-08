import { Document } from 'mongoose';

export default interface IUsers extends Document {
  readonly name: string;
  readonly username: string;
  readonly password: string;
  readonly balance: number;
}
