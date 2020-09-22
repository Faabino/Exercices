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
              const customerData = {
                firstName,
                lastName,
                email,
                birthDate,
                address: {
                  city,
                  country,
                },
              };
              customer.create(customerData);
              console.log("Customer added successfully!\n");
              loyaltyCardManager(R);
            });
          });
        });
      });
    });
  });
};

const chooseCustomer = () => {
  console.clear();
  const customers = customer.getAll();
  const fullNames = customers.map((customer) => customer.fullName());
  console.log(fullNames);
  display.displayMenu(fullNames);
  ask("Choose a customer", (index) => {
    const customer = customers[index - 1];
    display.displayCustomer(customer);
    loyaltyCardManager(R);
  });
};

// const customerActions = () => {
//   display.displayMenu(["Add customer", "Access customer data", "Quit"]);
// };

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
        chooseCustomer();
        break;
      case "3":
        console.log("Ciao!");
        reader.close();
        break;
      default:
        console.log("Unknown command");
        loyaltyCardManager(R);
    };
  });
};