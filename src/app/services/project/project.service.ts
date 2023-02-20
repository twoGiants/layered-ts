import { EmployeeRepository } from "@app/repositories/emploee.repository.interface";
import { ProjectRepository } from "@app/repositories/project.repository.interface";
import { CreateProjectDto } from "@core/dtos/create.project.dto";
import { ProjectEntity } from "@core/entities/project.entity";
import { Country } from "@core/enums/country.enum";
import { Address } from "@core/values/address.value";
import { ProjectService } from "./project.service.interface";

export class ProjectServiceImpl implements ProjectService {
  #employeeRepository: EmployeeRepository;
  #projectRepository: ProjectRepository;

  constructor(
    employeeRepository: EmployeeRepository,
    projectRepository: ProjectRepository,
  ) {
    this.#employeeRepository = employeeRepository;
    this.#projectRepository = projectRepository;
  }

  // Rich Service Layer: Orchestration + Domain Logic
  // - validate incomming data
  // - get everything you need to continue
  // - construct domain instances
  // - perform domain logic
  // - update state
  async createProject(dto: CreateProjectDto): Promise<ProjectEntity> {
    const projectResponsible = await this.#employeeRepository.loadById(dto.responsibleId);

    const projectAddress = new Address(
      dto.streetname,
      dto.streetnumber,
      dto.city,
      <Country>dto.country,
      dto.zip,
    );

    const newProject = new ProjectEntity(dto.title, projectAddress, projectResponsible);

    return this.#projectRepository.save(newProject);
  }
}
