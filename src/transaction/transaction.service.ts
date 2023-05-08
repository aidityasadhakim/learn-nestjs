import { Injectable } from '@nestjs/common';
import { Transaction } from './schemas/transaction.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import ITransaction from './documents/transaction.document';
@Injectable()
export class TransactionService {
  constructor(
    @InjectModel('Transaction') private transactionModel: Model<ITransaction>,
  ) {}

  async getAllTransactions(): Promise<ITransaction[]> {
    try {
      const transaction = await this.transactionModel.find();
      return transaction;
    } catch (error) {
      return error.message;
    }
  }
}
