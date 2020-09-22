import * as uuid from "uuid";

function fullName() {
  return `${this.firstName} ${this.lastName}`;
};

const customers = [
  {
    id: "610ee85b-c463-4bfb-8ad3-cd256f6d7fae",
    firstName: "toto",
    lastName: "tata",
    email: "zizi@lolo.com",
    birthDate: "29/29/29",
    address: { city: "Lille", country: "France" },
    fidelityPoints: 0,
    purchaseHistory: [],
    fullName,
  },
  {
    id: "610ee85b-c463-4bfb-8ad3-cd256f6d7fae",
    firstName: "zozo",
    lastName: "zaza",
    email: "zizi@lolo.com",
    birthDate: "29/29/29",
    address: { city: "Lille", country: "France" },
    fidelityPoints: 0,
    purchaseHistory: [],
    fullName,
  },
];

export const displayCustomer = (customer) => {
  //Display all infos
};

export const create = (customerData) => {
  customers.push({
    id: uuid.v4(),
    firstName: customerData.firstName,
    lastName: customerData.lastName,
    email: customerData.email,
    birthDate: customerData.birthDate,
    address: customerData.address,
    fidelityPoints: 0,
    purchaseHistory: [],
    fullName,
    //computeTotalPurchase,
    //usedFidelityPoints,
    //getAvailablePoints
  });
};

export const getAll = () => customers;