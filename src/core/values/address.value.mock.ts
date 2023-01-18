import { Country } from "@core/enums/country.enum";
import { Address } from "./address.value";

type AddressInit = {
  streetname: string;
  streetnumber: number;
  city: string;
  country: Country;
  zip: string;
};

export function createDefaultAddress(): Address {
  return createCustomAddress({});
}

export function createCustomAddress(customInit: Partial<AddressInit>): Address {
  const { streetname, streetnumber, city, country, zip } = customInit;
  const keys = Object.keys(customInit);

  return new Address(
    keys.includes("streetname") ? (streetname as string) : "Beethoven Straße",
    keys.includes("streetnumber") ? (streetnumber as number) : 87,
    keys.includes("city") ? (city as string) : "Hamburg",
    keys.includes("country") ? (country as Country) : Country.DE,
    keys.includes("zip") ? (zip as string) : "82387",
  );
}
