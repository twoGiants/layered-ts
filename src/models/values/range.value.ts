import { RangeException } from "../exceptions/range.exception";

export class Range {
  #start: number;
  #end: number;

  constructor(start: number, end: number) {
    if (end <= start) {
      throw new RangeException();
    }

    this.#start = start;
    this.#end = end;
  }

  get start() {
    return this.#start;
  }

  get end() {
    return this.#end;
  }

  contains(value: number): boolean {
    return value >= this.#start && value <= this.#end;
  }
}