import {
  Controller,
  Get,
  Post,
  Body,
  Res,
  HttpStatus,
  Req,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create-users.dto';
import { LoginUserDto } from './dto/login-user.dto';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { ResponseHelper } from '../helpers/ResponseHelper';
import { Users } from '../users/schemas/user.schema';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private response: ResponseHelper,
  ) {}

  @ApiCreatedResponse({ type: Users })
  @ApiBadRequestResponse({ description: 'User not Created' })
  @Post('/register')
  async register(
    @Req() req,
    @Res() res,
    @Body() createUserDto: CreateUserDto,
  ): Promise<Response> {
    try {
      const newUser = await this.authService.create(createUserDto);

      return this.response.success(
        newUser,
        'User Created',
        HttpStatus.CREATED,
        res,
      );
    } catch (error) {
      console.log(res.originalUrl);
      return this.response.error(
        error.message,
        req.originalUrl,
        HttpStatus.BAD_REQUEST,
        res,
      );
    }
  }

  @ApiOkResponse({ type: Users })
  @ApiBadRequestResponse({ description: 'User not logged in' })
  @Post('/login')
  async login(@Req() req, @Res() res, @Body() loginUserDto: LoginUserDto) {
    try {
      const loggedInUser = await this.authService.login(loginUserDto);
      return this.response.success(
        loggedInUser,
        'User logged in successfully',
        HttpStatus.OK,
        res,
      );
    } catch (error) {
      return this.response.error(
        error.message,
        req.originalUrl,
        HttpStatus.BAD_REQUEST,
        res,
      );
    }
  }
}
