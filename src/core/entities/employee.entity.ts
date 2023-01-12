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
  ) {
    this.#id = uuid();
    this.#firstname = firstname;
    this.#lastname = lastname;
    this.#department = department;
    this.#jobRole = jobrole;
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
    return `${this.firstname} ${this.lastname}`;
  }

  get fullDetails() {
    return {
      fullName: this.fullName,
      department: this.#department,
      jobRole: this.#jobRole,
    };
  }

  get department() {
    return this.#department;
  }

  get jobRole() {
    return this.#jobRole;
  }
}
