export { makeCoffee };

const makeCoffee = {
  longCoffee: function () {
    return this.serveACup(0.15);
  },
  expresso: function () {
    return this.serveACup(0.08);
  },
  serveACup: function (quantityInCentiliters) {
    if (this.litersOfCoffee - quantityInCentiliters >= 0) {
      this.litersOfCoffee -= quantityInCentiliters;
      return true;
    } else {
      return false;
    }
  },
};