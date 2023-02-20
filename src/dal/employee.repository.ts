import { EmployeeRepository } from "@app/repositories/emploee.repository.interface";
import { EmployeeEntity } from "@core/entities/employee.entity";
import {
  createCustomEmployee,
  createDefaultEmployee,
} from "@core/entities/employee.entity.mock";
import { NotFoundException } from "./exceptions/not.found.exception";

/**
 * @info Repository Implementations Priniciples
 * - provide "persistence dependency" via constructor
 * - use interface type if possible for testing
 * - persistence dependency: fs, sql, nosql, key-value, blockchain, ...
 */
export class EmployeeRepositoryImpl implements EmployeeRepository {
  constructor() {}

  save(validEmployee: EmployeeEntity): Promise<EmployeeEntity> {
    return Promise.resolve(validEmployee);
  }

  loadById(id: string): Promise<EmployeeEntity> {
    try {
      if (id === "1") return Promise.resolve(createCustomEmployee({ id }));
      throw new Error("document not found");
    } catch (error) {
      throw new NotFoundException(id, "employee");
    }
  }

  loadAll(): Promise<EmployeeEntity[]> {
    return Promise.resolve([createDefaultEmployee(), createDefaultEmployee()]);
  }
}
