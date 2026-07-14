export class ErrorApi {
  public message: string;
  public statusCode: number;
  public info: any;
  constructor(message: string, statusCode: number, info: any) {
    this.message = message;
    this.statusCode = statusCode;
    this.info = info;
  }
}
