import * as mongo from "mongodb";

export function deleteOneDocument<T>(
  collection: mongo.Collection,
  filter: mongo.FilterQuery<T>
): Promise<boolean> {
  return collection.deleteOne(filter).then((result) => {
    console.log(result.deletedCount);
    return result.deletedCount === 1;
  });
}
