import { EmployeeEntity } from "./employee.entity";
import { v4 as uuid } from "uuid";
import { Address } from "../values/address.value";

export class ProjectEntity {
  readonly #id: string;
  readonly #title: string;
  readonly #location: Address;
  readonly #responsible: EmployeeEntity;

  constructor(title: string, location: Address, responsible: EmployeeEntity) {
    this.#id = uuid();
    this.#title = title;
    this.#location = location.copy;
    this.#responsible = responsible;
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
}
