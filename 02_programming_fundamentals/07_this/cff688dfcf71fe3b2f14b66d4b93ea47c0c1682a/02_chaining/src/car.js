const car = {
  speed: 0,
  minutes: 0,
  showDistanceCar: 0,
  start: function () {
    this.speed = 0;
    this.minutes = 0;
    this.showDistanceCar = 0;
    return this;
  },
  changeSpeed: function (speed) {
    this.speed = 0;
    this.speed = this.speed + speed;
    return this;
  },
  drive: function (minutes) {
    this.minutes = 0;
    this.minutes = this.minutes + minutes;
    this.showDistanceCar = (this.speed / 60) * this.minutes + this.showDistanceCar;
    return this;
  },
  showDistance: function () {
    console.log(`${this.showDistanceCar} Km`);
    return this;
  },
};

console.log(car.start().changeSpeed(130).drive(45).changeSpeed(50).drive(30).changeSpeed(90).drive(80));
// car.changeSpeed(130);
// car.drive(42);
// car.showDistance();
// console.log(car);
// console.log(car.start().changeSpeed(130).drive(42).showDistance());

module.exports = car;
