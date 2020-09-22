export const displayMenu = (list) => {
  // ["add customer", "Access customer data", "Quit"]
  list.forEach((menuOption, index) => {
    console.log(`${index + 1} - ${menuOption}`);
  });
};

export const displayCustomer = (customer) => {
  console.log(`${customer.fullName()}'s information`);
  console.log(`name:            ${customer.fullName()}`);
  console.log(`email:           ${customer.email}`);
  console.log(`birth date:      ${customer.birthDate}`);
  console.log("address:");
  console.log(`- city:          ${customer.address.city}`);
  console.log(`- country:       ${customer.address.country}`);
  console.log(`fidelity points: ${customer.fidelityPoints}`);
};