import { Address } from "@core/values/address.value";
import { createDefaultAddress } from "@core/values/address.value.mock";
import { EmployeeEntity } from "./employee.entity";
import { createDefaultEmployee } from "./employee.entity.mock";
import { ProjectEntity } from "./project.entity";

type ProjectEntityInit = {
  id: string;
  title: string;
  location: Address;
  responsible: EmployeeEntity;
};

export function createDefaultProjectEntity(): ProjectEntity {
  return createCustomProjectEntity({});
}

export function createCustomProjectEntity(
  customInit: Partial<ProjectEntityInit>,
): ProjectEntity {
  const { id, title, location, responsible } = customInit;
  const keys = Object.keys(customInit);

  return new ProjectEntity(
    keys.includes("title") ? (title as string) : "Next Generation Data Center",
    keys.includes("location") ? (location as Address) : createDefaultAddress(),
    keys.includes("responsible")
      ? (responsible as EmployeeEntity)
      : createDefaultEmployee(),
    keys.includes("id") ? (id as string) : "valid-project-entity-uuid-1",
  );
}
