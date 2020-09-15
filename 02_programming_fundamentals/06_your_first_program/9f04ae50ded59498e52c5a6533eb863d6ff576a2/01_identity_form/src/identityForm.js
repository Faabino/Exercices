// const firstName = "Martin"

// askForIdentity();

const identityForm = (reader) => {
  const userIdentity = {
    firstName: "",
    lastName: "",
    age: 0,
  };
  reader.question("What is your first name?\n", (firstName) => {
    userIdentity.firstName = firstName;
    reader.question("What is your last name?\n", (lastName) => {
      userIdentity.lastName = lastName;
      reader.question("What is your age?\n", (age) => {
        userIdentity.age = age;
        console.log(`Your name is ${firstName} ${lastName} and you are ${age}.`);
        reader.close();
      });
    });
  });
};

// Leave line below for tests to work
module.exports = identityForm;
