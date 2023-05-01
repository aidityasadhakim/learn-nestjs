import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-users.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      id: 0,
      name: 'John',
    },
    {
      id: 1,
      name: 'Jane',
    },
    {
      id: 2,
      name: 'Mary',
    },
  ];

  findAll(name: string): User[] {
    if (name) {
      return this.users.filter((user) => user.name.includes(name));
    }

    return this.users;
  }

  findById(UserId: number): User {
    return this.users.find((user) => user.id === UserId);
  }

  createUser(createUserDto: CreateUserDto): User {
    const newUser = {
      id: Date.now(),
      ...createUserDto,
    };

    this.users.push(newUser);

    return newUser;
  }
}
