import { Department } from "@core/enums/department.code.enum";
import { JobRole } from "@core/enums/job.role.enum";
import { EmployeeEntity } from "./employee.entity";

type EmployeeInit = {
  firstname: string;
  lastname: string;
  department: Department;
  jobrole: JobRole;
  id: string;
};

export function createDefaultEmployee(): EmployeeEntity {
  return createCustomEmployee({});
}

export function createCustomEmployee(customInit: Partial<EmployeeInit>): EmployeeEntity {
  const { firstname, lastname, department, jobrole, id } = customInit;
  const keys = Object.keys(customInit);

  return new EmployeeEntity(
    keys.includes("firstname") ? (firstname as string) : "Ludwig",
    keys.includes("lastname") ? (lastname as string) : "van Beethoven",
    keys.includes("department") ? (department as Department) : Department.BIM,
    keys.includes("jobrole") ? (jobrole as JobRole) : JobRole.PROJECT_MANAGER,
    keys.includes("id") ? (id as string) : "valid-employee-entity-uuid-1",
  );
}
