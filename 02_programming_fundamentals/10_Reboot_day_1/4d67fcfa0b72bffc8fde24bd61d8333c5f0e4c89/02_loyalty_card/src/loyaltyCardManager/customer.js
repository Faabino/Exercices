import * as uuid from "uuid";

const customers = [];

export const displayCustomer = (customer) => {
  //Display all infos
};

export const createCustomer = (rawData) => {
  const { firstName, lastName, email, birthDate, city, country } = rawData;
  customers.push({
    firstName,
    lastName,
    email,
    birthDate,
    city,
    country,
    fullName: function () {
      return `${this.firstName} ${this.lastName}`;
    },
    fidelityPoints: 0,
    purchaseHistory: [],
    id: uuid.v4(),
    //computeTotalPurchase,
    //usedFidelityPoints,
    //getAvailablePoints
  });
};