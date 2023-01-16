import { EmployeeEntity } from "@core/entities/employee.entity";

export interface EmployeeRepository {
  save(validEmployee: EmployeeEntity): Promise<EmployeeEntity>;
  loadById(id: string): Promise<EmployeeEntity>;
  loadAll(): Promise<EmployeeEntity[]>;
}
