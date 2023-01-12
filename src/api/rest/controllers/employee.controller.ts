import { EmployeeService } from "@app/services/employee/employee.service.interface";
import { CreateEmployeeDto } from "@core/dtos/create.employee.dto";
import { EmployeeOutputDto } from "@api/rest/dtos/employee.output.dto";
import { EmployeeMapper } from "@api/rest/mappers/employee.mapper";

export class EmployeeController {
  #employeeService: EmployeeService;

  constructor(employeeService: EmployeeService) {
    this.#employeeService = employeeService;
  }

  // POST /employee
  async createEmployee(createEmployeeDto: CreateEmployeeDto): Promise<EmployeeOutputDto> {
    const employee = await this.#employeeService.createEmployee(createEmployeeDto);

    return Promise.resolve(EmployeeMapper.toOutputDto(employee));
  }
}
