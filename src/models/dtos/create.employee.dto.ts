import { Department } from "../enums/department.code.enum";
import { JobRole } from "../enums/job.role.enum";

export interface CreateEmployeeDto {
  firstname: string;
  lastname: string;
  department: Department;
  jobRole: JobRole;
}
