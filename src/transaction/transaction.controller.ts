import {
  Body,
  Controller,
  Req,
  Res,
  Get,
  Post,
  Param,
  HttpStatus,
} from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { Transaction } from './schemas/transaction.schema';
import {
  ApiCreatedResponse,
  ApiInternalServerErrorResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { ResponseHelper } from '../helpers/ResponseHelper';

@ApiTags('Transactions')
@Controller('transaction')
export class TransactionController {
  constructor(
    private readonly transactionService: TransactionService,
    private response: ResponseHelper,
  ) {}

  @ApiOkResponse({ type: Transaction })
  @ApiInternalServerErrorResponse({ description: 'Something went wrong' })
  @Get('/')
  async getAllTransactions(@Res() res, @Req() req): Promise<Response> {
    try {
      const transaction = await this.transactionService.getAllTransactions();
      return this.response.success(
        transaction,
        'Transactions fetched successfully',
        HttpStatus.OK,
        res,
      );
    } catch (error) {
      return this.response.error(
        error.message,
        req.originalUrl,
        HttpStatus.INTERNAL_SERVER_ERROR,
        res,
      );
    }
  }

  @Get('/:id')
  async getTransactionById(
    @Res() res,
    @Req() req,
    @Param('id') id: string,
  ): Promise<Response> {
    return res.json();
  }

  @Post('/deposit')
  async createTransaction(
    @Res() res,
    @Req() req,
    @Body() transaction: Transaction,
  ): Promise<Response> {
    return res.json();
  }
}
