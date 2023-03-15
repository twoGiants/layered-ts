import { Country } from "@core/enums/country.enum";
import { Address, AddressInput } from "./address.value";

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

  return new Address({
    streetname: keys.includes("streetname") ? (streetname as string) : "Beethoven Straße",
    streetnumber: keys.includes("streetnumber") ? (streetnumber as number) : 87,
    city: keys.includes("city") ? (city as string) : "Hamburg",
    country: keys.includes("country") ? (country as Country) : Country.DE,
    zip: keys.includes("zip") ? (zip as string) : "82387",
  });
}

export function createDefaultAddressInput(): AddressInput {
  return createCustomAddressInput({});
}

export function createCustomAddressInput(customInit: Partial<AddressInit>): AddressInput {
  const { streetname, streetnumber, city, country, zip } = customInit;
  const keys = Object.keys(customInit);

  return {
    streetname: keys.includes("streetname") ? (streetname as string) : "Beethoven Straße",
    streetnumber: keys.includes("streetnumber") ? (streetnumber as number) : 87,
    city: keys.includes("city") ? (city as string) : "Hamburg",
    country: keys.includes("country") ? (country as Country) : Country.DE,
    zip: keys.includes("zip") ? (zip as string) : "82387",
  };
}
