import { number, object, string, ValidationError } from "yup";
import { Country } from "@core/enums/country.enum";
import { CreateProjectDto } from "./create.project.dto";
import { ValidationException } from "@core/exceptions/validation.exception";

export class CreateProjectDtoSchema {
  private constructor() {}

  static get #schema() {
    return object({
      title: string().required(),
      streetname: string().required(),
      streetnumber: number().required(),
      city: string().required(),
      country: string().oneOf(Object.values(Country)).required(),
      zip: string().min(4).max(8).required(),
      responsibleId: string().required(),
    });
  }

  static async validate(data: CreateProjectDto) {
    try {
      await this.#schema.validate(data, { abortEarly: false });
    } catch (error) {
      throw new ValidationException(<ValidationError>error);
    }
  }
}
