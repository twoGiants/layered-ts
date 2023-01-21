import { ProjectRepository } from "@app/repositories/project.repository.interface";
import { ProjectEntity } from "@core/entities/project.entity";
import {
  createCustomProjectEntity,
  createDefaultProjectEntity,
} from "@core/entities/project.entity.mock";

/**
 * @info Repository Implementations Priniciples
 * - provide "persistence dependency" via constructor
 * - use interface type if possible for testing
 * - persistence dependency: fs, sql, nosql, key-value, blockchain, ...
 */
export class ProjectRepositoryImpl implements ProjectRepository {
  constructor() {}

  save(validProject: ProjectEntity): Promise<ProjectEntity> {
    // add storage logic here

    return Promise.resolve(validProject);
  }

  loadById(id: string): Promise<ProjectEntity> {
    return Promise.resolve(createCustomProjectEntity({ id }));
  }

  loadAll(): Promise<ProjectEntity[]> {
    return Promise.resolve([createDefaultProjectEntity(), createDefaultProjectEntity()]);
  }
}
