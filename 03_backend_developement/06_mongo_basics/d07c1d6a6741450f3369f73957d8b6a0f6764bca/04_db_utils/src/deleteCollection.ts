import * as mongo from "mongodb";

export function deleteCollection(
  db: mongo.Db,
  collectionName: string
): Promise<boolean> {
  return db.collection(collectionName).drop();
}
