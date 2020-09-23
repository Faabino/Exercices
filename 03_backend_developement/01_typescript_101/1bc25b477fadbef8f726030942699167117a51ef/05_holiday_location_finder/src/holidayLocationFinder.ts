import { Interface } from "readline";
import { sanitizeUserInput } from "./utils/format";
import { printContinents } from "./utils/format";

function holidayLocationFinder(reader: Interface): void {
  console.clear();
  console.log("***Welcome to HOLIDAY LOCATION FINDER***\n");
  console.log(
    "\nThis program will help you find a location based on the continent you will input.\n"
  );
  console.log("\nHere is the list of continent to chose from:\n");
  printContinents();
  reader.question("\n🤖 Please input your choice\n👉  ", (choice: string) => {
    const finalChoice = sanitizeUserInput(choice);
    console.log(finalChoice);
  });
}

// Leave the line below for tests to work properly.
export { holidayLocationFinder };
