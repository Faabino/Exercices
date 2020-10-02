import * as mongo from "mongodb";

export function insertManyDocuments<T>(
  collection: mongo.Collection,
  rawData: T[]
): Promise<T[]> {
  return collection.insertMany(rawData).then(() => {
    return rawData;
  });
}
