export class RangeException extends Error {
  constructor() {
    super('range end can not be smaller than or equal to start');
  }
}