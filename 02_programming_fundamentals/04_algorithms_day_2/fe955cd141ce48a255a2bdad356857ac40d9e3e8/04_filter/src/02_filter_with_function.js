function isOdd(num) {
  if (num % 2 !== 0) {
    return true;
  }
  return false;
}

function isEven(num) {
  if (num % 2 === 0) {
    return true;
  }
  return false;
}

function filter(array, fn) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (fn(array[i])) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

console.log(filter([1, 2, 3, 4, 5], isOdd));

// do not remove this line, it is for tests
module.exports = filter;
