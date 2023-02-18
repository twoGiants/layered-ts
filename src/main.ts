import express, { Application as ExpressHttpServer } from "express";
import { EmployeeController } from "@api/rest/controllers/employee.controller";
import { EmployeeRepositoryImpl } from "@dal/employee.repository";
import { EmployeeServiceImpl } from "@app/services/employee/employee.service";
import { ProjectRepositoryImpl } from "@dal/project.repository";
import { ProjectServiceImpl } from "@app/services/project/project.service";
import { ProjectController } from "@api/rest/controllers/project.controller";
import { ErrorHandler } from "@api/rest/errors/error.handler";
import { Logger } from "@core/common/logger.interface";

class WebServer {
  #server: ExpressHttpServer;
  #port: number;
  #logger: Logger;

  constructor(
    controllers: any[],
    port: number,
    errorHandler: ErrorHandler,
    logger: Logger,
  ) {
    this.#server = express();
    this.#port = port;
    this.#logger = logger;

    this.#initMiddleware();
    this.#initControllers(controllers);
    this.#initErrorHandling(errorHandler);
  }

  #initMiddleware() {
    this.#server.use(express.json());
  }

  #initControllers(controllers: any[]) {
    controllers.forEach((controller) => this.#server.use("/api/v1", controller.router));
  }

  #initErrorHandling(errorHandler: ErrorHandler) {
    this.#server.use(errorHandler.handle.bind(errorHandler));
  }

  listen() {
    this.#server.listen(this.#port, () =>
      this.#logger.info(`🚀 Server ready at: http://localhost:${this.#port}`),
    );
  }
}

// init HR
const employeeRepository = new EmployeeRepositoryImpl();
const employeeService = new EmployeeServiceImpl(employeeRepository);
const employeeController = new EmployeeController(employeeService, employeeRepository);

// init Consulting
const projectRepository = new ProjectRepositoryImpl();
const projectService = new ProjectServiceImpl(employeeRepository, projectRepository);
const projectController = new ProjectController(projectService, projectRepository);

const logger = console;
const errorHandler = new ErrorHandler(logger);

const server = new WebServer(
  [employeeController, projectController],
  3000,
  errorHandler,
  logger,
);
server.listen();
