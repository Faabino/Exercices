import * as mongo from "mongodb";

export function initDatabase(
  url = "mongodb://mongo-basics-app:password@localhost:27017/mongo-basics",
  options = { useNewUrlParser: true, useUnifiedTopology: true }
): Promise<mongo.MongoClient> {
  return new Promise((resolve, reject) => {
    mongo.MongoClient.connect(url, options, (error, client) => {
      if (error) {
        reject(error);
      } else {
        resolve(client);
      }
    });
  });
}
