import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  NotFoundException,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-users.dto';
import { User } from './entities/user.entity';
import {
  ApiCreatedResponse,
  ApiTags,
  ApiOkResponse,
  ApiQuery,
  ApiBadRequestResponse,
} from '@nestjs/swagger';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  //-- Routes "/users/"" --//

  //-- Api Documentation Options
  @ApiOkResponse({ type: User, isArray: true })
  @ApiQuery({ name: 'name', required: false })

  // Routes
  @Get()
  getUsers(@Query('name') name?: string): User[] {
    const user = this.usersService.findAll(name);

    if (!user) {
      throw new NotFoundException();
    }

    return this.usersService.findAll(name);
  }

  //== Routes /users/:id ==//

  //-- API Documentation Options
  @ApiOkResponse({ type: User })
  @Get(':id')
  getById(@Param('id') id: string): User {
    return this.usersService.findById(Number(id));
  }

  //== Routes /users/create ==//

  //-- API Documentation Options
  @ApiCreatedResponse({ type: User })
  @ApiBadRequestResponse()
  @Post()
  createUser(@Body() body: CreateUserDto): User {
    return this.usersService.createUser(body);
  }
}
