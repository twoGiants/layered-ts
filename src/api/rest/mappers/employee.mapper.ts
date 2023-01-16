import { EmployeeEntity } from "@core/entities/employee.entity";
import { EmployeeOutputDto } from "../dtos/employee.output.dto";

export class EmployeeMapper {
  static toOutputDto(employee: EmployeeEntity): EmployeeOutputDto {
    return {
      id: employee.id,
      firstname: employee.firstname,
      lastname: employee.lastname,
      department: employee.department,
      jobRole: employee.jobRole,
    };
  }

  static toOutputDtos(employees: EmployeeEntity[]): EmployeeOutputDto[] {
    return employees.map((e) => EmployeeMapper.toOutputDto(e));
  }
}
