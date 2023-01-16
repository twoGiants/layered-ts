import { EmployeeRepository } from "@app/repositories/emploee.repository.interface";
import { EmployeeEntity } from "@core/entities/employee.entity";

/**
 * @info Repository Implementations Priniciples
 * - provide "persistence dependency" via constructor
 * - use interface type if possible for testing
 * - persistence dependency: fs, sql, nosql, key-value, blockchain, ...
 */
export class EmployeeRepositoryImpl implements EmployeeRepository {
  constructor() {}

  save(validEmployee: EmployeeEntity): Promise<EmployeeEntity> {
    return Promise.resolve({} as EmployeeEntity);
  }

  loadById(id: string): Promise<EmployeeEntity> {
    return Promise.resolve({} as EmployeeEntity);
  }

  loadAll(): Promise<EmployeeEntity[]> {
    return Promise.resolve([] as EmployeeEntity[]);
  }
}
