function range(number1, number2) {
  const array = [number1];
  if (number1 < number2) {
    while (number1 < number2) {
      array.push(number1 + 1);
      // eslint-disable-next-line no-param-reassign
      number1++;
    }
  } else if (number1 > number2) {
    while (number1 > number2) {
      array.push(number1 - 1);
      // eslint-disable-next-line no-param-reassign
      number1--;
    }
  }
  return array;
  // Code the function here.
}

const ascArray = range(1, 4);
const descArray = range(4, 1);

// Do not remove last lines, it is for tests
module.exports = range;
