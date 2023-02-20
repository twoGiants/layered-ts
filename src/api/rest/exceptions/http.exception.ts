export class HttpException extends Error {
  status: number;
  initialException?: Error;

  constructor(status: number, error: Error, messageOverwrite?: string) {
    super(messageOverwrite ? messageOverwrite : error.message);
    this.status = status;
    this.initialException = error;
  }

  toJSON(): object {
    return {
      status: this.status,
      message: this.message,
      initialException: this.initialException,
    };
  }
}
