function numberGame(reader, min = 1, max = 100) {
  const mysteryNumber = (min = 1, max = 100) => Math.round(Math.random() * (max - min) + min);
  const randomNumber = mysteryNumber(min, max);

  const getNumber = (text) => {
    reader.question(text, (num) => {
      if (isNaN(num)) {
        // console.log("This was not a number");
        getNumber("This was not a number");
      } else if (num > max || num < min) {
        // console.log("The number is between 1 and 100");
        getNumber("The number is between 1 and 100");
      } else if (num < randomNumber) {
        // console.log("Too low");
        getNumber("Too low");
      } else if (num > randomNumber) {
        // console.log("Too high");
        getNumber("Too high");
      } else if (num == randomNumber) {
        console.log("You won!");
        reader.close();
      }
    });
  };

  getNumber("Enter a number");
}

module.exports = numberGame;
