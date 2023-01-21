import { Address } from "@core/values/address.value";
import { v4 as uuid } from "uuid";
import { EmployeeEntity } from "./employee.entity";

export class ProjectEntity {
  readonly #id: string;
  readonly #title: string;
  readonly #location: Address;
  readonly #responsible: EmployeeEntity;

  constructor(
    title: string,
    location: Address,
    responsible: EmployeeEntity,
    id = uuid(),
  ) {
    this.#title = title;
    this.#location = location.copy;
    this.#responsible = responsible;
    this.#id = id;
  }

  get id() {
    return this.#id;
  }

  get title() {
    return this.#title;
  }

  get location() {
    return this.#location.copy;
  }

  get resposnsibleName() {
    return this.#responsible.fullName;
  }

  get responsibleDetails() {
    return this.#responsible.fullDetails;
  }

  get responsible() {
    return this.#responsible;
  }

  toJSON() {
    return {
      id: this.#id,
      title: this.#title,
      location: this.#location.toJSON(),
      responsible: this.#responsible.toJSON(),
    };
  }
}
