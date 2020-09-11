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
}

function fizzBuzz(array) {
  const newArray = [];
  for (let i = 0; i <= array.length - 1; i++) {
    if (array[i] % 3 === 0 && array[i] % 5 === 0) {
      newArray[i] = "FizzBuzz";
    } else if (array[i] % 5 === 0) {
      newArray[i] = "Buzz";
    } else if (array[i] % 3 === 0) {
      newArray[i] = "Fizz";
    } else {
      newArray[i] = array[i];
    }
  }
  return newArray;
}

const ascArray = range(1, 20);
console.log(fizzBuzz(ascArray));
// Leave the line below untouched for tests to work properly.
module.exports = fizzBuzz;
