import { HttpException } from "./http.exception";

export class UnknownException extends HttpException {
  constructor(unknownError: Error) {
    super(500, unknownError, "encountered an unknown error");
  }
}
