import * as mongo from "mongodb";

export function findOneCountry(db: mongo.Db): Promise<string> {
  return db.collection("worldAtlas").findOne({ name: "Iceland" });
}
