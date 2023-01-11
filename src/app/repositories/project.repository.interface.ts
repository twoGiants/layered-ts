import { ProjectEntity } from "@core/entities/project.entity";

export interface ProjectRepository {
  createProject(validProject: ProjectEntity): Promise<ProjectEntity>;
}
