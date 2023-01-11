import { CreateProjectDto } from "@core/dtos/create.project.dto";
import { ProjectEntity } from "@core/entities/project.entity";

export interface ProjectService {
  createProject(dto: CreateProjectDto): Promise<ProjectEntity>;
}
