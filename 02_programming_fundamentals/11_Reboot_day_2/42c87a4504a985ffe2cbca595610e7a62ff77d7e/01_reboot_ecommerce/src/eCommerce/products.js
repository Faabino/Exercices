function productInfos() {
  return `${this.productName}:  ${this.price}€  (quantity: ${this.quantity})`;
};

const products = [
  {
    productName: "beer",
    price: 4,
    quantity: 400,
    productInfos,
  },
  {
    productName: "chips",
    price: 2,
    quantity: 25,
    productInfos,
  },
  {
    productName: "cheese",
    price: 3,
    quantity: 50,
    productInfos,
  },
  {
    productName: "olives",
    price: 1,
    quantity: 200,
    productInfos,
  },
  {
    productName: "waterBottle",
    price: 0.5,
    quantity: 1000,
    productInfos,
  },
];

const getAll = () => products;

module.exports = getAll;