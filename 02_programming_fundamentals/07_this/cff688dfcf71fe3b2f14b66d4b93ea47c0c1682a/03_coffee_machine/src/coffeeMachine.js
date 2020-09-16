const machine = {
  litersOfCoffee: 0,
  fillWithLitersOfCoffee: function (coffee) {
    this.litersOfCoffee = this.litersOfCoffee + coffee;
    return this;
  },
  expresso: function () {
    if (this.litersOfCoffee >= 0.08) {
      this.litersOfCoffee = this.litersOfCoffee - 0.08;
      return true;
    }
    return false;
  },
  longCoffee: function () {
    if (this.litersOfCoffee >= 0.08) {
      this.litersOfCoffee = this.litersOfCoffee - 0.15;
      return true;
    }
    return false;
  },
};

module.exports = machine;
