import * as mongo from "mongodb";

export function allCollections(db: mongo.Db): Promise<mongo.Collection[]> {
  return db.listCollections(db).toArray();
}
