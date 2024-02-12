import { HttpException } from "./root";
import type { ErrorCodes } from "./root";

export class BadRequestException extends HttpException {
  constructor(message: string, errorCode: ErrorCodes) {
    super(message, errorCode, 401, null);
  }
}

export class InternalErrorException extends HttpException {
  constructor(message: string, errors: any, errorCode: ErrorCodes) {
    super(message, errorCode, 500, errors);
  }
}

export class UnauthorizedException extends HttpException {
  constructor(message: string, errorCode: ErrorCodes) {
    super(message, errorCode, 401, null);
  }
}

export class NotFoundException extends HttpException {
  constructor(message: string, errorCode: ErrorCodes) {
    super(message, errorCode, 404, null);
  }
}
