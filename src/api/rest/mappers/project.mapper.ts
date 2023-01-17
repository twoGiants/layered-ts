import { ProjectEntity } from "@core/entities/project.entity";
import { ProjectOutputDto } from "@api/rest/dtos/project.output.dto";

export class ProjectMapper {
  static toOutputDto(project: ProjectEntity): ProjectOutputDto {
    return {
      id: project.id,
      title: project.title,
      location: project.location,
      responsible: project.responsible,
    };
  }

  static toOutputDtos(projects: ProjectEntity[]): ProjectOutputDto[] {
    return projects.map((p) => ProjectMapper.toOutputDto(p));
  }
}
