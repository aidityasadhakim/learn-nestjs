import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TodosModule } from './todos/todos.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    UsersModule,
    TodosModule,
    MongooseModule.forRoot(
      'mongodb+srv://aidityasadhakim250:e95mfBW73exIniwc@ecommerce-api.hu05vy5.mongodb.net/?retryWrites=true&w=majority',
      {
        dbName: 'ewallet_database',
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
    ),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
