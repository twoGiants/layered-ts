export class ProjctNotReadyException extends Error {
  readonly exceptionType = "ProjctNotReadyException";

  constructor(message: string | string[]) {
    super();

    if (Array.isArray(message) && message.length > 1) {
      this.message = message.join(", ");
      return;
    }

    if (Array.isArray(message) && message.length == 1) {
      this.message = message[0];
      return;
    }

    this.message = <string>message;
  }
}
