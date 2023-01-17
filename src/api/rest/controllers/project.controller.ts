import { Request, Response, Router } from "express";
import { CreateProjectDto } from "@core/dtos/create.project.dto";
import { ProjectMapper } from "@api/rest/mappers/project.mapper";
import { ProjectService } from "@app/services/project/project.service.interface";
import { ProjectRepository } from "@app/repositories/project.repository.interface";

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
    // todo add types
    this.router.post(`${ProjectController.PATH}/projects`, this.createProject);
    this.router.get(`${ProjectController.PATH}/projects`, this.getProjects);
    this.router.get(`${ProjectController.PATH}/projects/:id`, this.getProject);
  }

  createProject = async (request: Request, response: Response) => {
    const createProjectDto: CreateProjectDto = request.body;
    const project = await this.#projectService.createProject(createProjectDto);

    response.json(ProjectMapper.toOutputDto(project));
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
