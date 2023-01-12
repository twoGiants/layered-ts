import { EmployeeRepository } from "@app/repositories/emploee.repository.interface";
import { CreateEmployeeDto } from "@core/dtos/create.employee.dto";
import { EmployeeEntity } from "@core/entities/employee.entity";
import { Department } from "@core/enums/department.code.enum";
import { JobRole } from "@core/enums/job.role.enum";
import { EmployeeService } from "./employee.service.interface";

export class EmployeeServiceImpl implements EmployeeService {
  #employeeRepository: EmployeeRepository;

  constructor(employeeRepository: EmployeeRepository) {
    this.#employeeRepository = employeeRepository;
  }

  async createEmployee(dto: CreateEmployeeDto): Promise<EmployeeEntity> {
    const employee = new EmployeeEntity(
      dto.firstname,
      dto.lastname,
      <Department>dto.department,
      <JobRole>dto.jobRole,
    );

    return this.#employeeRepository.createEmployee(employee);
  }
}
