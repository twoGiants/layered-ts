export class NotFoundException extends Error {
  readonly exceptionType = "NotFoundException";
  entityName: string;
  entityId: string;

  constructor(id: string, entityName: string) {
    super(`${entityName} with id ${id} not found`);
    this.entityId = id;
    this.entityName = entityName;
  }
}
