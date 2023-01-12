import { CreateEmployeeDto } from "@core/dtos/create.employee.dto";
import { EmployeeEntity } from "@core/entities/employee.entity";

export interface EmployeeService {
  createEmployee(dto: CreateEmployeeDto): Promise<EmployeeEntity>;
}
