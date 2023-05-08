import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersSchema } from './schemas/user.schema';
import { ResponseHelper } from '../helpers/ResponseHelper';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Users', schema: UsersSchema }]),
  ],
  controllers: [UsersController],
  providers: [UsersService, ResponseHelper],
})
export class UsersModule {}
