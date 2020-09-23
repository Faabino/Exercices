function handleTuple(param: [string, number]): void {
  if (typeof param[0] === "string") {
    console.log(`${param[0]}, ${typeof param[0]}`);
  }
  if (typeof param[1] === "number") {
    console.log(`${param[1]}, ${typeof param[1]}`);
  }
}

// Leave the line below for tests to work properly.
export { handleTuple };
