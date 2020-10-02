import * as mongo from "mongodb";

export function deleteManyDocuments<T>(
  collection: mongo.Collection,
  filter: mongo.FilterQuery<T>
): Promise<boolean> {
  return collection.deleteMany(filter).then((result) => {
    if (result.deletedCount !== 0) {
      return true;
    } else {
      return false;
    }
  });
}
