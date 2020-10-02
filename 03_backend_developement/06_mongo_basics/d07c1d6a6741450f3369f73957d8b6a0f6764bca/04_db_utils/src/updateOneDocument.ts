import * as mongo from "mongodb";

export function updateOneDocument<T>(
  collection: mongo.Collection,
  filter: mongo.FilterQuery<T>,
  update: mongo.UpdateQuery<T>
): Promise<T> {
  return collection.updateOne(filter, update).then(() => {
    return collection.findOne(filter);
  });
}
