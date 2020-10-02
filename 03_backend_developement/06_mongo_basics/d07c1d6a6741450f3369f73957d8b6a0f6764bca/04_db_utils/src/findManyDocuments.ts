import * as mongo from "mongodb";

export function findManyDocuments<T>(
  collection: mongo.Collection,
  filter: mongo.FilterQuery<T>
): Promise<T[]> {
  return collection.find(filter).toArray();
}
