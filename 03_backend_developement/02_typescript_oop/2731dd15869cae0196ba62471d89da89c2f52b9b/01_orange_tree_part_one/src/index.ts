// Code the class here.
abstract class Tree {
  age: number;
  height: number;
  alive: boolean = true;

  constructor(age: number) {
    this.age = age;
    if (this.age === 0) {
      this.height = 0;
    } else if (this.age >= 1 && this.age <= 9) {
      this.height = this.age * 25;
    } else if (this.age <= 20) {
      this.height = 9 * 25 + (this.age - 9) * 10;
    } else {
      this.height = 9 * 25 + 11 * 10;
    }
  }

  abstract ageOneYear(): void;
  abstract isAlive(): void;
  seed(): void {
    this.age = 0;
    this.height = 0;
    this.alive = true;
  }
}

// Leave the line below for tests to work properly.
export { Tree };
