import { CreateProjectDto } from "@core/dtos/create.project.dto";
import { ProjectMapper } from "@api/rest/mappers/project.mapper";
import { ProjectOutputDto } from "@api/rest/dtos/project.output.dto";
import { ProjectService } from "@app/services/project/project.service.interface";

export class ProjectController {
  #projectService: ProjectService;

  constructor(projectService: ProjectService) {
    this.#projectService = projectService;
  }

  // POST /project
  async createProject(createProjectDto: CreateProjectDto): Promise<ProjectOutputDto> {
    const project = await this.#projectService.createProject(createProjectDto);

    return Promise.resolve(ProjectMapper.toOutputDto(project));
  }
}
