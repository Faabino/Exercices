import { greet } from "./index";

test("Should return this right string", () => {
  expect.assertions(2);

  const spy = jest.spyOn(console, "log");

  greet();

  expect(spy).toHaveBeenCalled();
  expect(spy).toHaveBeenCalledWith("Hello World");

  spy.mockRestore();
});
