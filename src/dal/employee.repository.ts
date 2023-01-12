import { EmployeeRepository } from "@app/repositories/emploee.repository.interface";
import { EmployeeEntity } from "@core/entities/employee.entity";

/**
 * @info Repository Implementations Priniciples
 * - instantiate db provice db package class in constructor, no need to wrap the db
 */
export class EmployeeRepositoryImpl implements EmployeeRepository {
  constructor() {}

  save(validEmployee: EmployeeEntity): Promise<EmployeeEntity> {
    return Promise.resolve({} as EmployeeEntity);
  }

  loadById(id: string): Promise<EmployeeEntity> {
    return Promise.resolve({} as EmployeeEntity);
  }
}
