class Bird {
  age: number;

  constructor(age: number) {
    this.age = age;
  }

  sing(): void {
    console.log("Cui cui");
  }
  fly(numOfSeconds: number): void {
    if (this.age <= 1) {
      console.log("The bird is too young to fly");
    } else if (this.age <= 3) {
      const meters = numOfSeconds;
      console.log(`The bird flew ${meters} meters in ${numOfSeconds} seconds`);
    } else {
      const meters = numOfSeconds * 2;
      console.log(`The bird flew ${meters} meters in ${numOfSeconds} seconds`);
    }
  }
}

// Leave the line below for tests to work properly.
export { Bird };
