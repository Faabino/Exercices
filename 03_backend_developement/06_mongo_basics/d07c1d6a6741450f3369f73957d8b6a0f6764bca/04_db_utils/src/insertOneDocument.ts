import * as mongo from "mongodb";

export function insertOneDocument<T>(
  collection: mongo.Collection,
  rawData: T
): Promise<T> {
  return collection.insertOne(rawData).then(() => {
    return rawData;
  });
}
