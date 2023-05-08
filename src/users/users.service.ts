import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-users.dto';
// import IUsers from './interfaces/users.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import IUsers from './dto/user.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel('Users') private usersModel: Model<IUsers>) {}

  async findAll(): Promise<IUsers[]> {
    const usersData = await this.usersModel.find();

    if (!usersData) {
      throw new NotFoundException('Students are not found');
    }

    return usersData;
  }

  async findById(UserId: string): Promise<IUsers> {
    const user = await this.usersModel.findById(UserId);

    if (!user) {
      throw new NotFoundException('Student is not found');
    }

    return user;
  }
}
