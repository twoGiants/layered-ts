import { EmployeeEntity } from "@core/entities/employee.entity";

export interface EmployeeRepository {
  createEmployee(validEmployee: EmployeeEntity): Promise<void>;
  loadById(id: string): Promise<EmployeeEntity>;
}
