import * as mongo from "mongodb";
import { Country } from "./types";

export function insertOneCountry(db: mongo.Db): Promise<Country> {
  const country = {
    name: "Japan",
    capital: "Tokyo",
    continent: "Asia",
  };
  return db
    .collection("worldAtlas")
    .insertOne(country)
    .then(() => {
      return country;
    });
}
