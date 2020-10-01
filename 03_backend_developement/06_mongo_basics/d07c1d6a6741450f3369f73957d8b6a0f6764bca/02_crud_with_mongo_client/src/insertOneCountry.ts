import * as mongo from "mongodb";

type ToInsert = {
  name: string;
  capital: string;
  continent: string;
};

export function insertOneCountry(db: mongo.Db): Promise<ToInsert> {
  const toInsert = {
    name: "Japan",
    capital: "Tokyo",
    continent: "Asia",
  };
  return db
    .collection("worldAtlas")
    .insertOne(toInsert)
    .then(() => {
      return toInsert;
    });
}
