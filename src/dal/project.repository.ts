import { ProjectRepository } from "@app/repositories/project.repository.interface";
import { ProjectEntity } from "@core/entities/project.entity";

/**
 * @info Repository Implementations Priniciples
 * - provide "persistence dependency" via constructor
 * - use interface type if possible for testing
 * - persistence dependency: fs, sql, nosql, key-value, blockchain, ...
 */
export class ProjectRepositoryImpl implements ProjectRepository {
  constructor() {}

  save(validProject: ProjectEntity): Promise<ProjectEntity> {
    return Promise.resolve({} as ProjectEntity);
  }

  loadById(id: string): Promise<ProjectEntity> {
    return Promise.resolve({} as ProjectEntity);
  }

  loadAll(): Promise<ProjectEntity[]> {
    return Promise.resolve([] as ProjectEntity[]);
  }
}
