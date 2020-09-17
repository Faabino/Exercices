const humanFactory = (human = {}) => {
  const defaultHuman = {
    firstName: "John",
    lastName: "Doe",
    genre: "male",
    job: "unemployed",
  };

  const humanIdentity = {
    ...defaultHuman,
    ...human,
  };

  const { firstName, lastName, genre, job } = humanIdentity;
};

console.log(humanFactory({ userName: "echo", avatar: "echo.png" }));

const createHumans = () => {};

module.exports = {
  humanFactory,
  createHumans,
};
