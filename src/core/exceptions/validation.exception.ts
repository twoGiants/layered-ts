import { ValidationError } from "yup";

export class ValidationException extends Error {
  readonly exceptionType = "ValidationException";
  validatedData: object;

  constructor(error: ValidationError) {
    super();
    this.validatedData = error.value;
    this.message = this.#concatErrorMassages(error);
  }

  #concatErrorMassages(error: ValidationError): string {
    return error.errors.length == 1 ? error.errors[0] : error.errors.join(", ");
  }
}
