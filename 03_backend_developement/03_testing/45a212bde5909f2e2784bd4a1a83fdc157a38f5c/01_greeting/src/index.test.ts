import { greet } from "./index";

test("Should return Hello World", () => {
  expect.assertions(1);

  const result = greet();

  expect(result).toBe("Hello WORLD!");
});

test("Should return Hello + Name", () => {
  expect.assertions(1);

  const result = greet("John");

  expect(result).toBe("Hello JOHN!");
});
