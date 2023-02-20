import { NextFunction, Request, Response } from "express";
import { HttpException } from "@api/rest/exceptions/http.exception";
import { UnknownException } from "../exceptions/unknown.exception";
import { ValidationException } from "@core/exceptions/validation.exception";
import { Logger } from "@core/common/logger.interface";

export class ErrorHandler {
  #logger: Logger;

  constructor(logger: Logger) {
    this.#logger = logger;
  }

  handle(error: Error, _: Request, response: Response, __: NextFunction) {
    const err = this.#mapErrorToHttpException(error);

    response.status(err.status).json(err);

    this.#logger.error(err);
  }

  #mapErrorToHttpException(error: Error): HttpException {
    if (error instanceof ValidationException) {
      return new HttpException(400, error);
    } else if ((<any>error)?.type === "entity.parse.failed") {
      return new HttpException(400, error, "parsing request body json object failed");
    } else {
      return new UnknownException(error);
    }
  }
}
