import { EmployeeEntity } from "@core/entities/employee.entity";

export interface EmployeeRepository {
  createEmployee(validEmployee: EmployeeEntity): Promise<EmployeeEntity>;
  loadById(id: string): Promise<EmployeeEntity>;
}
