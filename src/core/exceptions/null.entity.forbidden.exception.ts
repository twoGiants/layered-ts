import { EntityName } from "@core/enums/entity.name.enum";

export class NullEntityForbiddenException extends Error {
  readonly exceptionType = "NullEntityForbiddenException";
  message: string;
  entityName: string;

  constructor(entityName: EntityName) {
    super();
    this.message = `the ${entityName} is null or undefined`;
    this.entityName = entityName;
  }
}
