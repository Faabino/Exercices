import { Tree } from "../Tree";

describe("Tree", () => {
  test("A 1-year old tree should have an age of 1 and have grown to 25 cm", () => {
    expect.assertions(2);

    let appleTree = new Tree(1);

    expect(appleTree.age).toBe(1);
    expect(appleTree.height).toBe(25);
  });

  test("A 5-year old tree should have an age of 5 and have grown to 125 cm", () => {
    expect.assertions(2);

    let appleTree = new Tree(5);

    expect(appleTree.age).toBe(5);
    expect(appleTree.height).toBe(125);
  });

  test("A 10-year old tree should have an age of 10 and have grown to 235 cm", () => {
    expect.assertions(2);

    let appleTree = new Tree(10);

    expect(appleTree.age).toBe(10);
    expect(appleTree.height).toBe(235);
  });

  test("A 20-year old tree should have an age of 20 and have grown to 335 cm", () => {
    expect.assertions(2);

    let appleTree = new Tree(20);

    expect(appleTree.age).toBe(20);
    expect(appleTree.height).toBe(335);
  });

  test("A 50-year old tree should have an age of 50 and have grown to 335 cm", () => {
    expect.assertions(2);

    let appleTree = new Tree(50);

    expect(appleTree.age).toBe(50);
    expect(appleTree.height).toBe(335);
  });

  test("A 50-year old tree should be reset if we call the seed method", () => {
    // We want to check that age, height and alive are all in their default value after calling `seed`
    expect.assertions(3);

    let appleTree = new Tree(10);
    appleTree.seed();

    expect(appleTree.age).toBe(0);
    expect(appleTree.height).toBe(0);
    expect(appleTree.alive).toBe(true);
  });
});
