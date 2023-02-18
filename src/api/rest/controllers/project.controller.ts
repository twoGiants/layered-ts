import { NextFunction, Request, Response, Router } from "express";
import { CreateProjectDto } from "@core/dtos/create.project.dto";
import { ProjectMapper } from "@api/rest/mappers/project.mapper";
import { ProjectService } from "@app/services/project/project.service.interface";
import { ProjectRepository } from "@app/repositories/project.repository.interface";
import { CreateProjectDtoSchema } from "@core/dtos/create.project.dto.schema";

export class ProjectController {
  static PATH = "/consulting";

  router: Router;

  #projectService: ProjectService;
  #projectRepository: ProjectRepository;

  constructor(projectService: ProjectService, projectRepository: ProjectRepository) {
    this.router = Router();
    this.#projectService = projectService;
    this.#projectRepository = projectRepository;

    this.#initRoutes();
  }

  #initRoutes() {
    this.router.post(`${ProjectController.PATH}/projects`, this.createProject);
    this.router.get(`${ProjectController.PATH}/projects`, this.getProjects);
    this.router.get(`${ProjectController.PATH}/projects/:id`, this.getProject);
  }

  createProject = async (request: Request, response: Response, next: NextFunction) => {
    try {
      await CreateProjectDtoSchema.validate(request.body);
    } catch (error) {
      next(error);
      return;
    }

    const createProjectDto: CreateProjectDto = request.body;

    try {
      const project = await this.#projectService.createProject(createProjectDto);
      response.status(200).json(ProjectMapper.toOutputDto(project));
    } catch (error) {
      next(error);
    }
  };

  getProject = async (request: Request, response: Response) => {
    const projectId = request.params.id;

    const project = await this.#projectRepository.loadById(projectId);

    response.json(ProjectMapper.toOutputDto(project));
  };

  getProjects = async (_: Request, response: Response) => {
    const projects = await this.#projectRepository.loadAll();

    response.json(ProjectMapper.toOutputDtos(projects));
  };
}
