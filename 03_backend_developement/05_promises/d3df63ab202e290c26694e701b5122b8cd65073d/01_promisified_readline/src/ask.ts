import { rl } from "./reader";

function ask(question: string, reader = rl): Promise<string> {
  const promise: Promise<string> = new Promise((resolve, reject) => {
    reader.question(question, (input: string) => {
      if (input === "") {
        reject(new Error("Invalid input"));
      } else if (input !== "") {
        resolve(`${input}`);
      }
    });
  });
  return promise;
}

// Leave line below for tests to work properly
export default ask;
