export class SimpleEntity {
  readonly #id: string;
  readonly #firstname: string;
  readonly #lastname: string;

  constructor(firstname: string, lastname: string) {
    this.#id = 'generated-uuid';
    this.#firstname = firstname;
    this.#lastname = lastname;
  }

  get id() {
    return this.#id;
  }

  get firstname() {
    return this.#firstname;
  }

  get lastname() {
    return this.#lastname;
  }

  get fullName() {
    return `${this.#firstname} ${this.#lastname}`;
  }
}