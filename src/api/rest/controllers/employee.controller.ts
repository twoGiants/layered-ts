import { EmployeeService } from "@app/services/employee/employee.service.interface";
import { CreateEmployeeDto } from "@core/dtos/create.employee.dto";
import { EmployeeOutputDto } from "@api/rest/dtos/employee.output.dto";
import { EmployeeMapper } from "@api/rest/mappers/employee.mapper";
import { Router } from "express";
import { EmployeeRepository } from "@app/repositories/emploee.repository.interface";

export class EmployeeController {
  static PATH = "/hr";
  router: Router;
  #employeeService: EmployeeService;
  #employeeRepository: EmployeeRepository;

  constructor(employeeService: EmployeeService, employeeRepository: EmployeeRepository) {
    this.router = Router();
    this.#employeeService = employeeService;
    this.#employeeRepository = employeeRepository;

    this.#initRoutes();
  }

  #initRoutes() {
    this.router.get(`${EmployeeController.PATH}/employees`, this.getAllemployees);
    this.router.post(`${EmployeeController.PATH}/employees`, this.createEmployee);
  }

  getAllemployees = async (): Promise<EmployeeOutputDto[]> => {
    const employees = await this.#employeeRepository.loadAll();

    return Promise.resolve(EmployeeMapper.toOutputDtos(employees));
  };

  createEmployee = async (
    createEmployeeDto: CreateEmployeeDto,
  ): Promise<EmployeeOutputDto> => {
    const employee = await this.#employeeService.createEmployee(createEmployeeDto);

    return Promise.resolve(EmployeeMapper.toOutputDto(employee));
  };
}
