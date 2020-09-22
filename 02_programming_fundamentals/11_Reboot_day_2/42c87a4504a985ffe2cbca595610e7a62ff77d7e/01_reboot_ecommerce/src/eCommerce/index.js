const displayMenu = require("./display.js");
const getAll = require("./products.js");

let R;
const ask = (q, c) => R.question(`🤖 ${q}\n👉  `, c);

const productsInCart = [];

// CHOOSE PRODUCT
const chooseProduct = () => {
  console.log("*************************\nSHOP\n*************************\n");
  const products = getAll();
  const productsInfos = products.map((product) => product.productInfos());
  displayMenu(productsInfos);
  console.log(`${products.length + 1} - Back te menu`);
  console.log(`${products.length + 2} - Quit`);
  ask("Choose a product", (index) => {
    if (index > 0 && index < 6) {
      const product = products[index - 1];
      ask("How much", (quantity) => {
        const quantityParsed = parseInt(quantity);
        product.quantity = product.quantity - quantityParsed;
        const bill = product.price * quantityParsed;
        console.clear();
        // console.log(`\nYou bought for ${bill}€ of ${product.productName}\n`);
        // console.log(`There is ${product.quantity} ${product.productName} left\n`);
        chooseProduct();
      });
    } else if (index == (products.length + 1)) {
      eCommerce(R);
    } else if (index == (products.length + 2)) {
      console.clear();
      console.log("See you!\n");
      R.close();
    } else {
      console.log("\nUnknown command🤔\n");
      chooseProduct();
    }
  });
};

// CART
const cart = () => {
  console.log("*************************\nCART\n*************************\n");
};

// CHECKOUT
const checkout = () => {
  console.log("*************************\nCHECKOUT\n*************************\n");
};

// MAIN MENU
const eCommerce = (reader) => {
  R = reader;
  console.log("*************************\nMENU\n*************************\n");
  displayMenu(["Buy a product", "Display the cart", "Checkout the bill", "Quit the program"]);
  ask("What do you want to do?", (choice) => {
    switch (choice) {
      case "1":
        console.clear();
        chooseProduct();
        break;
      case "2":
        console.clear();
        cart();
        break;
      case "3":
        console.clear();
        checkout();
        break;
      case "4":
        console.clear();
        console.log("Thank you for visiting!\n");
        reader.close();
        break;
      default:
        console.log("\nUnknown command🤔\n");
        eCommerce(R);
    }
  });
};

module.exports = eCommerce;