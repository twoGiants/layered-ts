import { ProjectEntity } from "@core/entities/project.entity";

export interface ProjectRepository {
  save(validProject: ProjectEntity): Promise<ProjectEntity>;
  loadById(id: string): Promise<ProjectEntity>;
  loadAll(): Promise<ProjectEntity[]>;
}
