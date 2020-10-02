import * as mongo from "mongodb";

type Validator = {
  [key: string]: unknown;
};

export function createCollectionWithValidator<T>(
  db: mongo.Db,
  collectionName: string,
  validator: Validator
): Promise<mongo.Collection<T>> {
  return db.createCollection(collectionName, validator);
}
