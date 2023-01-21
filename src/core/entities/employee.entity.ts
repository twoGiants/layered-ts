import { v4 as uuid } from "uuid";
import { JobRole } from "@core/enums/job.role.enum";
import { Department } from "@core/enums/department.code.enum";

export class EmployeeEntity {
  readonly #id: string;
  readonly #firstname: string;
  readonly #lastname: string;
  readonly #department: Department;
  readonly #jobRole: JobRole;

  constructor(
    firstname: string,
    lastname: string,
    department: Department,
    jobrole: JobRole,
    id = uuid(),
  ) {
    this.#firstname = firstname;
    this.#lastname = lastname;
    this.#department = department;
    this.#jobRole = jobrole;
    this.#id = id;
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

  get department() {
    return this.#department;
  }

  get jobRole() {
    return this.#jobRole;
  }

  get fullName() {
    return `${this.firstname} ${this.lastname}`;
  }

  get fullDetails() {
    return {
      fullName: this.fullName,
      department: this.#department,
      jobRole: this.#jobRole,
    };
  }

  toJSON() {
    return {
      id: this.#id,
      firstname: this.#firstname,
      lastname: this.#lastname,
      department: this.#department,
      jobRole: this.#jobRole,
    };
  }
}
