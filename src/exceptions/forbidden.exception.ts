export class ForbiddenException extends Error {
  statusCode: number;
  constructor(message: string) {
    super(message);
    this.name = "ForbiddenException";
    this.statusCode = 403;
  }
}
