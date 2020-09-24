import { Tree } from "./Tree";

// Code your class here.
class OrangeTree extends Tree {
  oranges: string[] = [];

  isAlive(): boolean {
    const randomBoolean: number = Math.random();
    if (this.age < 50) {
      return true;
    } else if (this.age <= 65) {
      if (randomBoolean <= 0.2) {
        return false;
      }
      return true;
    } else if (this.age <= 85) {
      if (randomBoolean <= 0.4) {
        return false;
      }
      return true;
    } else if (this.age <= 99) {
      if (randomBoolean <= 0.8) {
        return false;
      }
      return true;
    }
    return false;
  }

  ageOneYear(): void {
    ++this.age;
    this.alive = this.isAlive();
    if (this.alive === true) {
      if (this.age === 0) {
        this.height = 0;
      } else if (this.age >= 1 && this.age <= 9) {
        this.height = this.age * 25;
        this.growOranges();
      } else if (this.age <= 20) {
        this.height = 9 * 25 + (this.age - 9) * 10;
        this.growOranges();
      } else {
        this.height = 9 * 25 + 11 * 10;
        this.growOranges();
      }
    }
  }

  growOranges(): void {
    this.oranges = [];
    if (this.age >= 0 && this.age <= 4) {
      this.oranges = [];
    } else if (this.age <= 10) {
      for (let i = 0; i < 10; i++) {
        this.oranges.push("🍊");
      }
    } else if (this.age <= 20) {
      for (let i = 0; i < 20; i++) {
        this.oranges.push("🍊");
      }
    } else if (this.age <= 40) {
      for (let i = 0; i < 5; i++) {
        this.oranges.push("🍊");
      }
    }
  }

  pickAnOrange(): void {
    if (this.oranges.length > 0) {
      this.oranges.pop();
    }
  }
}

// Leave the line below for tests to work properly.
export { OrangeTree };
