import * as display from "./display.js";
import * as customer from "./customer.js";

let R;
const ask = (question, callback) => R.question(`${question}\n👉 `, callback);

const getCustomerInfo = () => {
  ask("What's your first name?", (firstName) => {
    ask("What's your last name?", (lastName) => {
      ask("What's your email? ex: toto@tata.tt", (email) => {
        ask("What's your birth date? ex: 00/00/0000", (birthDate) => {
          ask("What's your city?", (city) => {
            ask("What's your country?", (country) => {
              customer.createCustomer({
                firstName,
                lastName,
                email,
                birthDate,
                city,
                country,
              });
              console.log("Customer added successfully!\n");
              loyaltyCardManager(R);
            });
          });
        });
      });
    });
  });
};

export default function loyaltyCardManager(reader) {
  R = reader;
  console.log("Welcome to loyaltyCardManager!");
  display.displayMenu(["Add customer", "Access customer data", "Quit"]);
  ask("Choose an action", (action) => {
    switch (action) {
      case "1":
        getCustomerInfo(R);
        break;
      case "2":
        console.log("Customer list");
        loyaltyCardManager(R);
        break;
      case "3":
        reader.close();
        break;
      default:
        console.log("Unknown command");
        loyaltyCardManager(R);
    };
  });
};