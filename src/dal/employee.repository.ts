import { EmployeeRepository } from "@app/repositories/emploee.repository.interface";
import { EmployeeEntity } from "@core/entities/employee.entity";

/**
 * @info provice db package class in constructor, no need to wrap the db
 */
export class EmployeeRepositoryImpl implements EmployeeRepository {
  constructor() {}

  createEmployee(validEmployee: EmployeeEntity): Promise<void> {
    return Promise.resolve();
  }

  loadById(id: string): Promise<EmployeeEntity> {
    return Promise.resolve({} as EmployeeEntity);
  }
}
