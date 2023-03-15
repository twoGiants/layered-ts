import { Country } from "@core/enums/country.enum";

export interface AddressInput {
  streetname: string;
  streetnumber: number;
  city: string;
  country: Country;
  zip: string;
}

export interface AddressPlain {
  streetname: string;
  streetnumber: number;
  city: string;
  country: Country;
  zip: string;
}

export class Address {
  #streetname: string;
  #streetnumber: number;
  #city: string;
  #country: Country;
  #zip: string;

  constructor({ streetname, streetnumber, city, country, zip }: AddressInput) {
    this.#streetname = streetname;
    this.#streetnumber = streetnumber;
    this.#city = city;
    this.#country = country;
    this.#zip = zip;
  }

  get copy() {
    return new Address({
      streetname: this.#streetname,
      streetnumber: this.#streetnumber,
      city: this.#city,
      country: this.#country,
      zip: this.#zip,
    });
  }

  toJSON() {
    return {
      streetname: this.#streetname,
      streetnumber: this.#streetnumber,
      city: this.#city,
      country: this.#country,
      zip: this.#zip,
    };
  }
}
