import { ProjectRepository } from "@app/repositories/project.repository.interface";
import { ProjectEntity } from "@core/entities/project.entity";

/**
 * @info provice db package class in constructor, no need to wrap the db
 */
export class ProjectRepositoryImpl implements ProjectRepository {
  constructor() {}

  createProject(validProject: ProjectEntity): Promise<ProjectEntity> {
    return Promise.resolve({} as ProjectEntity);
  }
}
