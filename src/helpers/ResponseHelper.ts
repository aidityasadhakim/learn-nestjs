import { Res } from '@nestjs/common';
import { HttpStatus, Injectable } from '@nestjs/common';

@Injectable()
export class ResponseHelper {
  async success(
    payload: any,
    message: string,
    statusCode: HttpStatus,
    @Res() res,
  ): Promise<Response> {
    const datas = {
      success: true,
      statusCode: statusCode,
      message,
      payload,
    };
    return res.status(statusCode).json(datas);
  }

  error(
    message: string,
    uri: string,
    statusCode: HttpStatus,
    @Res() res,
  ): Response {
    const data = {
      success: false,
      statusCode: statusCode,
      error: {
        message,
        uri,
      },
    };
    return res.status(statusCode).json(data);
  }
}
