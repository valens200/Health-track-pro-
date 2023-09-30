export class ApiResponse {
  private message: string;
  private data: any;
  private success: boolean;

  constructor(success: boolean, message: string, data: any) {
    this.message = message;
    this.data = data;
    this.success = success;
  }
}
