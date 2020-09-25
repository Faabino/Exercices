import { toWords } from "./index";

test("Should return an array of words", () => {
  let result: string[] = toWords("toto tata");

  expect(result).toEqual(["toto", "tata"]);

  result = toWords("toto-tata");

  expect(result).toEqual(["toto", "tata"]);
});
