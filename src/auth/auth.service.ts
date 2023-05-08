import { BadRequestException, Injectable } from '@nestjs/common';
import { LoginUserDto } from './dto/login-user.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserDto } from './dto/create-users.dto';
import IUsers from '../users/dto/user.dto';
import { Users } from '../users/schemas/user.schema';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(@InjectModel('Users') private usersModel: Model<IUsers>) {}

  async create(createUserDto: CreateUserDto): Promise<Users> {
    const checkUser = await this.usersModel.findOne({
      username: createUserDto.username.toLowerCase(),
    });

    if (checkUser) {
      throw new BadRequestException('User already exists');
    }

    const newUser = new this.usersModel({
      name: createUserDto.name,
      username: createUserDto.username.toLowerCase(),
      password: bcrypt.hashSync(
        createUserDto.password,
        Number(process.env.PASSWORD_SECRET_KEY),
      ),
    });
    const userCreated = await newUser.save();
    if (!userCreated) {
      throw new BadRequestException('User creation failed');
    }

    return userCreated;
  }

  async login(loginUserDto: LoginUserDto): Promise<Users> {
    const checkUser = await this.usersModel
      .findOne({
        username: loginUserDto.username.toLowerCase(),
      })
      .select('-__v');

    if (!checkUser) {
      throw new BadRequestException('User not found');
    }

    if (
      checkUser &&
      bcrypt.compareSync(loginUserDto.password, checkUser.password)
    ) {
      return checkUser;
    } else {
      throw new BadRequestException('Incorrect password');
    }
  }
}
