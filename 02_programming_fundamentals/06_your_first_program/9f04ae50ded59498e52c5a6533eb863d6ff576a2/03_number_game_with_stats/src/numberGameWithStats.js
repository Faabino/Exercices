function numberGameWithStats(reader, min = 1, max = 100) {
  const mysteryNumber = (min = 1, max = 100) => Math.round(Math.random() * (max - min) + min);
  const randomNumber = mysteryNumber(min, max);
  const attempts = [];

  const getNumber = (text) => {
    reader.question(text, (num) => {
      if (isNaN(num)) {
        getNumber("This was not a number\n");
      } else if (num > max || num < min) {
        getNumber("The number is between 1 and 100\n");
      } else if (num < randomNumber) {
        attempts.push(num);
        getNumber("Too low\n");
      } else if (num > randomNumber) {
        attempts.push(num);
        getNumber("Too high\n");
      } else if (num == randomNumber) {
        console.log(`You won after ${attempts.length + 1} tries!`);
        reader.close();
      }
    });
  };

  getNumber("Enter a number\n");
}

module.exports = numberGameWithStats;
