import { EntityName } from "@core/enums/entity.name.enum";
import { NullEntityForbiddenException } from "@core/exceptions/null.entity.forbidden.exception";
import { ProjctNotReadyException } from "@core/exceptions/project.not.ready.exception";
import { ProjctNotReadyForPlanningException } from "@core/exceptions/project.not.ready.for.planning.exception";
import { Address, AddressInput, AddressPlain } from "@core/values/address.value";
import { v4 as uuid } from "uuid";
import { EmployeeEntity, EmployeeEntityPlain, EmployeeInput } from "./employee.entity";

enum ProjectStatus {
  PLANNING = "planning",
  ACTIVE = "active",
  COMPLETED = "completed",
}

class WorkCatalogEntity {
  constructor(workCatalogInput: WorkCatalogInput) {}

  get complete() {
    return true;
  }

  toJSON() {
    return {};
  }
}

class InvoiceEntity {
  toJSON() {
    return {};
  }
}

class CompanyEntity {
  constructor(companyInput: CompanyInput) {}

  toJSON() {
    return {};
  }

  get complete() {
    return true;
  }
}

export class ProjectEntity {
  readonly #id: string;
  readonly #title: string;
  readonly #location: Address;
  // todo: extract both into team class
  readonly #responsibleEngineer: EmployeeEntity;
  readonly #constructionWorkers: EmployeeEntity[];
  #workCatalog?: WorkCatalogEntity;
  #status: ProjectStatus;
  #startDate?: Date;
  #endDate?: Date;
  #invoices?: InvoiceEntity[];

  constructor(
    title: string,
    location: Address,
    responsibleEngineer: EmployeeEntity,
    constructionWorkers: EmployeeEntity[],
    id = uuid(),
  ) {
    this.#title = title;
    this.#location = location.copy;
    this.#responsibleEngineer = responsibleEngineer;
    this.#constructionWorkers = constructionWorkers;
    this.#id = id;
    this.#status = ProjectStatus.PLANNING;
  }

  get id() {
    return this.#id;
  }

  get title() {
    return this.#title;
  }

  get location() {
    return this.#location.copy;
  }

  get responsibleName() {
    return this.#responsibleEngineer.fullName;
  }

  get responsibleDetails() {
    return this.#responsibleEngineer.fullDetails;
  }

  get responsible() {
    return this.#responsibleEngineer;
  }

  toJSON() {
    return {
      id: this.#id,
      title: this.#title,
      location: this.#location.toJSON(),
      responsible: this.#responsibleEngineer.toJSON(),
    };
  }
}

export interface ProjectEntityPlain {
  id: string;
  title: string;
  location: AddressPlain;
  responsibleEngineer?: EmployeeEntityPlain;
  constructionWorkers?: EmployeeEntityPlain[];
  workCatalog?: object;
  status: ProjectStatus;
  startDate?: Date;
  endDate?: Date;
  invoices?: object[];
  client?: object;
}

export interface WorkCatalogInput {
  id: string;
}

export interface CompanyInput {
  id: string;
}

export interface ProjectPlanningInput {
  title: string;
  location: AddressInput;
  responsibleEngineer?: EmployeeInput;
  constructionWorkers?: EmployeeInput[];
  workCatalog?: WorkCatalogInput;
  client?: CompanyInput;
}

export class XXXProjectEntity {
  readonly #id: string;
  #location!: Address;
  #title!: string;
  #status!: ProjectStatus;
  #responsibleEngineer?: EmployeeEntity;
  #constructionWorkers?: EmployeeEntity[];
  #workCatalog?: WorkCatalogEntity;
  #startDate?: Date;
  #endDate?: Date;
  #invoices?: InvoiceEntity[];
  #client?: CompanyEntity;

  private constructor(id: string) {
    this.#id = id;
  }

  static startProjectPlanning(projectStartInput: ProjectPlanningInput): XXXProjectEntity {
    const project = new XXXProjectEntity(uuid());

    project.#projectIsReadyForPlanning(projectStartInput);

    const {
      title,
      location,
      responsibleEngineer,
      constructionWorkers,
      workCatalog,
      client,
    } = projectStartInput;

    project.#location = new Address(location);
    project.#title = title;

    if (responsibleEngineer)
      project.#responsibleEngineer = new EmployeeEntity(responsibleEngineer);

    if (constructionWorkers)
      project.#constructionWorkers = constructionWorkers.map(
        (worker) => new EmployeeEntity(worker),
      );

    if (workCatalog) project.#workCatalog = new WorkCatalogEntity(workCatalog);

    if (client) project.#client = new CompanyEntity(client);

    project.#status = ProjectStatus.PLANNING;

    return project;
  }

  #projectIsReadyForPlanning(projectStartInput: ProjectPlanningInput) {
    const { title, location } = projectStartInput;

    const errorMessages: string[] = [];

    if (!title) {
      errorMessages.push("project title is missing");
    }

    if (!location) {
      errorMessages.push("project location is missing");
    }

    if (errorMessages.length > 0) {
      throw new ProjctNotReadyForPlanningException(errorMessages);
    }
  }

  get id() {
    return this.#id;
  }

  get inPlanning(): boolean {
    return this.#status === ProjectStatus.PLANNING;
  }

  set workCatalog(theWorkCatalog: WorkCatalogEntity) {
    if (!theWorkCatalog) {
      throw new NullEntityForbiddenException(EntityName.WorkCatalogEntity);
    }

    this.#workCatalog = theWorkCatalog;
  }

  startProject() {
    this.#projectIsReadyToStart();

    this.#status = ProjectStatus.ACTIVE;
    this.#startDate = new Date();
  }

  #projectIsReadyToStart() {
    const errorMessages: string[] = [];

    if (!this.#workCatalog) {
      errorMessages.push("work catalog is not linked");
    }

    if (!this.#workCatalog!.complete) {
      errorMessages.push("work catalog is not complete");
    }

    if (this.#constructionWorkers?.length === 0) {
      errorMessages.push("no construction workers are assigned to the project");
    }

    if (!this.#client) {
      errorMessages.push("the project has no client");
    }

    if (errorMessages.length > 0) {
      throw new ProjctNotReadyException(errorMessages);
    }
  }

  toJSON(): ProjectEntityExport {
    return {
      id: this.#id,
      title: this.#title,
      location: this.#location.toJSON(),
      responsibleEngineer: this.#responsibleEngineer.toJSON(),
      constructionWorkers: this.#constructionWorkers?.map((worker) => worker.toJSON()),
      workCatalog: this.#workCatalog?.toJSON(),
      status: this.#status,
      startDate: this.#startDate,
      endDate: this.#endDate,
      invoices: this.#invoices?.map((invoice) => invoice.toJSON()),
      client: this.#client?.toJSON(),
    };
  }
}
