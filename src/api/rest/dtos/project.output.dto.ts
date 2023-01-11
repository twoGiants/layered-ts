import { EmployeeEntity } from "@core/entities/employee.entity";
import { Address } from "@core/values/address.value";

export interface ProjectOutputDto {
  id: string;
  title: string;
  location: Address;
  responsible: EmployeeEntity;
}
