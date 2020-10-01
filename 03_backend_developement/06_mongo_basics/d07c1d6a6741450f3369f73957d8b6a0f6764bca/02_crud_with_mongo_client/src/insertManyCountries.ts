import * as mongo from "mongodb";
import { Country } from "./types";

export function insertManyCountries(db: mongo.Db): Promise<Country[]> {
  const countries = [
    {
      name: "Japan",
      capital: "Tokyo",
      continent: "Asia",
    },
    {
      name: "China",
      capital: "Beijing",
      continent: "Asia",
    },
    {
      name: "Belgium",
      capital: "Brussels",
      continent: "Europe",
    },
  ];

  return db
    .collection("worldAtlas")
    .insertMany(countries)
    .then((result) => {
      return result.ops;
    });
}
