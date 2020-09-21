import * as customer from "./customer.js";

export const displayMenu = (list) => {
  // ["add customer", "Access customer data", "Quit"]
  list.forEach((menuOption, index) => {
    console.log(`${index + 1} - ${menuOption}`);
  });
};

export const customerList = (customers) => {
  customers.forEach((createCustomer, index) => {
    console.log(`${index + 1} - ${createCustomer.fullName()}`);
  });
};