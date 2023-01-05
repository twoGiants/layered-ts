import { Country } from "@core/enums/country.enum";

export class Address {
  #streetname: string;
  #streetnumber: number;
  #city: string;
  #country: Country;
  #zip: string;

  constructor(
    streetname: string,
    streetnumber: number,
    city: string,
    country: Country,
    zip: string,
  ) {
    this.#streetname = streetname;
    this.#streetnumber = streetnumber;
    this.#city = city;
    this.#country = country;
    this.#zip = zip;
  }

  get copy() {
    return new Address(
      this.#streetname,
      this.#streetnumber,
      this.#city,
      this.#country,
      this.#zip,
    );
  }
}
