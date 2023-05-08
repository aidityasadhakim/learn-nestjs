import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersSchema } from '../users/schemas/user.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { ResponseHelper } from '../helpers/ResponseHelper';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Users', schema: UsersSchema }]),
  ],
  controllers: [AuthController],
  providers: [AuthService, ResponseHelper],
})
export class AuthModule {}
