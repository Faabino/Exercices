import { users } from "../tests/users";
// import { dumbUtilFunction } from "./dumbUtilFunction";
import { initDatabase } from "./initDatabase";
import { updateOneDocument } from "./updateOneDocument";

// dumbUtilFunction(true)
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

const url = "mongodb://mongo-basics-app:password@localhost:27017/mongo-basics";
const options = { useNewUrlParser: true, useUnifiedTopology: true };

initDatabase(url, options).then((client) => {
  const db = client.db();
  updateOneDocument(
    db.collection("users"),
    { name: "Jean" },
    { $set: { name: "Toto" } }
  ).then(() => client.close());
});
