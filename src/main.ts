import express, { Application as ExpressHttpServer } from "express";
import { EmployeeController } from "@api/rest/controllers/employee.controller";
import { EmployeeRepositoryImpl } from "@dal/employee.repository";
import { EmployeeServiceImpl } from "@app/services/employee/employee.service";
import { ProjectRepositoryImpl } from "@dal/project.repository";
import { ProjectServiceImpl } from "@app/services/project/project.service";
import { ProjectController } from "@api/rest/controllers/project.controller";

class WebServer {
  #server: ExpressHttpServer;
  #port: number;

  constructor(controllers: any[], port: number) {
    this.#server = express();
    this.#port = port;

    this.#initMiddleware();
    this.#initControllers(controllers);
  }

  #initMiddleware() {
    this.#server.use(express.json());
  }

  #initControllers(controllers: any[]) {
    controllers.forEach((controller) => this.#server.use("/api/v1", controller.router));
  }

  listen() {
    this.#server.listen(this.#port, () =>
      console.log(`🚀 Server ready at: http://localhost:3000`),
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

const server = new WebServer([employeeController, projectController], 3000);
server.listen();
