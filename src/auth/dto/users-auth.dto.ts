import { Document } from 'mongoose';

export default interface UsersAuth extends Document {
  readonly username: string;
  readonly password: string;
}
