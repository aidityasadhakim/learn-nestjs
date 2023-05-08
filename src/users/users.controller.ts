import { Controller, Get, HttpStatus, Param, Req, Res } from '@nestjs/common';
import { UsersService } from './users.service';
import { Users } from './schemas/user.schema';
import {
  ApiTags,
  ApiOkResponse,
  ApiQuery,
  ApiNotFoundResponse,
} from '@nestjs/swagger';
import { ResponseHelper } from '../helpers/ResponseHelper';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(
    private usersService: UsersService,
    private response: ResponseHelper,
  ) {}

  //-- Routes "/users/"" --//

  //-- Api Documentation Options
  @ApiOkResponse({ type: Users, isArray: true })
  @ApiNotFoundResponse({ description: 'No User Found' })

  // Routes
  @Get()
  async getUsers(@Res() res, @Req() req): Promise<Response> {
    try {
      const users = await this.usersService.findAll();
      return this.response.success(users, 'Users Found', HttpStatus.OK, res);
    } catch (error) {
      return this.response.error(
        'No Users found',
        req.originalUrl,
        HttpStatus.NOT_FOUND,
        res,
      );
    }
  }

  //== Routes '/users/:id' ==//

  //-- API Documentation Options
  @ApiOkResponse({ type: Users })
  @ApiNotFoundResponse({ description: 'User not found' })
  @Get(':id')
  async getById(@Res() res, @Param('id') id: string): Promise<Response> {
    try {
      const user = await this.usersService.findById(id);
      return res.status(HttpStatus.OK).json({
        message: 'User found',
        user,
      });
    } catch (error) {
      return res.status(HttpStatus.NOT_FOUND).json({
        message: error,
        statusCode: HttpStatus.NOT_FOUND,
      });
    }
  }
}
