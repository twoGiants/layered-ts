import { Department } from "@core/enums/department.code.enum";
import { JobRole } from "@core/enums/job.role.enum";

/**
 * @info Output DTO Principles
 *
 * Depending on an existing or planned BFF the output DTO can:
 * - reflect the client view model or be a superset of one or multiple entities
 * - be a snapshot of the entity
 * - be a subset of the entity
 */
export interface EmployeeOutputDto {
  id: string;
  firstname: string;
  lastname: string;
  department: Department;
  jobRole: JobRole;
}
