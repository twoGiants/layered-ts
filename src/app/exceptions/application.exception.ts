export class ApplicationException extends Error {
  constructor(message = "Application Exception") {
    super(message);
  }
}
