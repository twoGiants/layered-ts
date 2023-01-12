import { ProjectEntity } from "@core/entities/project.entity";

export interface ProjectRepository {
  save(validProject: ProjectEntity): Promise<ProjectEntity>;
}
