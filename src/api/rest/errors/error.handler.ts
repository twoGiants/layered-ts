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
    this.#logger.error(error);

    if (error instanceof ValidationException) {
      const responseError = new HttpException(400, error);
      response.status(responseError.status).send(responseError.pojo);
      return;
    }

    const responseError = new UnknownException(error);
    response.status(responseError.status).json(responseError.pojo);
  }
}
