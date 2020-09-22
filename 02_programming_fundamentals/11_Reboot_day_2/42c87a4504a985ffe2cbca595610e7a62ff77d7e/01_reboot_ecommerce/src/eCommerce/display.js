const displayMenu = (list) => {
  list.forEach((menuOption, index) => {
    console.log(`${index + 1} - ${menuOption}`);
  });
};

module.exports = displayMenu;