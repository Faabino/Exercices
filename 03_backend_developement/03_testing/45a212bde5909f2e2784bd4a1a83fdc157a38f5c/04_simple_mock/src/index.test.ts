import { helloSailor } from "./index";

test("Print the right string", () => {
  expect.assertions(2);

  const spy = jest.spyOn(console, "log");
  spy.mockImplementation();

  helloSailor();

  expect(spy).toHaveBeenCalled();
  expect(spy).toHaveBeenCalledWith("Howdy Sailor! Good day to you!");

  spy.mockRestore();
});

test("Print the right string with the right name", () => {
  expect.assertions(2);

  const spy = jest.spyOn(console, "log");
  spy.mockImplementation();

  helloSailor("John Doe");

  expect(spy).toHaveBeenCalled();
  expect(spy).toHaveBeenCalledWith("Howdy John Doe!");

  spy.mockRestore();
});
