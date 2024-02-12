export class HttpException extends Error {
  message: string;
  errorCode: ErrorCodes;
  statusCode: number;
  error: any;

  constructor(
    message: string,
    errorCode: ErrorCodes,
    statusCode: number,
    error: any
  ) {
    super(message);
    this.message = message;
    this.errorCode = errorCode;
    this.statusCode = statusCode;
    this.error = error;
  }
}

// TODO: Use numeric codes to avoid sharing too much information
export enum ErrorCodes {
  USER_NOT_FOUND = "USER_NOT_FOUND", // 1001
  USER_ALREADY_EXISTS = "USER_ALREADY_EXISTS", // 1002
  WRONG_CREDENTIALS = "WRONG_CREDENTIALS", // 1003
  INTERNAL_ERROR = "INTERNAL_ERROR", // 1004
  BAD_REQUEST = "BAD_REQUEST", // 1005
  UNAUTHORIZED = "UNAUTHORIZED", // 1006
  NOT_FOUND = "NOT_FOUND", // 1007
  TOKEN_EXPIRED = "TOKEN_EXPIRED", // 1008
}
