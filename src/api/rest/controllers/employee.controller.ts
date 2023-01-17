import { Request, Response, Router } from "express";
import { EmployeeService } from "@app/services/employee/employee.service.interface";
import { CreateEmployeeDto } from "@core/dtos/create.employee.dto";
import { EmployeeMapper } from "@api/rest/mappers/employee.mapper";
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
    this.router.get(`${EmployeeController.PATH}/employees/:id`, this.getEmployee);
    this.router.post(`${EmployeeController.PATH}/employees`, this.createEmployee);
  }

  createEmployee = async (request: Request, response: Response) => {
    const createEmployeeDto: CreateEmployeeDto = request.body;
    const employee = await this.#employeeService.createEmployee(createEmployeeDto);

    response.json(EmployeeMapper.toOutputDto(employee));
  };

  getEmployee = async (request: Request, response: Response) => {
    const employeeId = request.params.id;

    const employee = await this.#employeeRepository.loadById(employeeId);

    response.json(EmployeeMapper.toOutputDto(employee));
  };

  getAllemployees = async (_: Request, response: Response) => {
    const employees = await this.#employeeRepository.loadAll();

    response.json(EmployeeMapper.toOutputDtos(employees));
  };
}
