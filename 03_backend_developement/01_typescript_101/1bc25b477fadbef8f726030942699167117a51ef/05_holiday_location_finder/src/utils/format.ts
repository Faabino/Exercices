import { CONTINENTS } from "../data/data";

// Format user input.
function sanitizeUserInput(choice: string): string {
  something;
}

function printContinents(): void {
  for (const CONTINENT in CONTINENTS) {
    if (isNaN(parseInt(CONTINENT))) {
      console.log(`- ${CONTINENT}`);
    }
  }
}

// Leave the line below for tests to work properly.
export { sanitizeUserInput };
export { printContinents };
