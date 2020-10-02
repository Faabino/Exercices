import * as mongo from "mongodb";

export function findOneDocument<T>(
  collection: mongo.Collection,
  filter: mongo.FilterQuery<T>
): Promise<T> {
  return collection.findOne(filter);
}
